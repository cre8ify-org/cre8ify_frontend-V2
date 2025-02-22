"use client";

import type React from "react";
import { useState } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";

export interface ImageProps
  extends Omit<NextImageProps, "src" | "width" | "height"> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
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

const isNumeric = (value: string | number): boolean => {
  return !isNaN(Number(value));
};

export const Img: React.FC<ImageProps> = ({
  style,
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

  // Determine if we should use layout="fill"
  const useFillLayout =
    width === undefined ||
    height === undefined ||
    !isNumeric(width) ||
    !isNumeric(height);

  // Default dimensions for layout="fill"
  const defaultWidth = 100;
  const defaultHeight = 100;

  // Convert width and height to numbers if they're numeric strings
  const numericWidth =
    width !== undefined && isNumeric(width) ? Number(width) : defaultWidth;
  const numericHeight =
    height !== undefined && isNumeric(height) ? Number(height) : defaultHeight;

  return (
    <div
      className={`relative ${className}`}
      style={{ width: width, height: height }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          Loading...
        </div>
      )}
      <NextImage
        style={style}
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        layout={useFillLayout ? "fill" : "intrinsic"}
        width={useFillLayout ? undefined : numericWidth}
        height={useFillLayout ? undefined : numericHeight}
        objectFit="cover"
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};
