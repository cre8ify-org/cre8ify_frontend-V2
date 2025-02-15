import { ReactNode } from "react";

export interface SvgProps extends Partial<SVGProps<SVGSVGElement>> {
  fillColor?: string | null;
}

export interface TabsProps {
  name: string;
  icon: ReactNode;
  link: string;
}
