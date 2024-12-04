"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  const isRedirectPage = pathname === '/ai' || pathname.startsWith('/go/');

  if (isRedirectPage) {
    return null;
  }

  return <Footer />;
} 