import "../styles/Banner.css";
import { ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
}

export default function Banner({ children }: BannerProps) {
  return <div className="lmj-banner">{children}</div>;
}
