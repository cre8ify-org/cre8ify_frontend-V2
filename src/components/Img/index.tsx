"use client";

import type React from "react";
import { useState } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";

export interface ImageProps extends Omit<NextImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

const normalizeSrc = (src: string): string => {
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("/")
  ) {
    return src;
  }
  return `/${src}`;
};

export const Img: React.FC<ImageProps> = ({
  src,
  fallbackSrc = "/images/placeholder.png",
  alt,
  className = "",
  width,
  height,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(normalizeSrc(src));
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImgSrc(normalizeSrc(fallbackSrc));
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          Loading...
        </div>
      )}
      <NextImage
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};
