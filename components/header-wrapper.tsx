"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isRedirectPage = pathname === '/ai' || pathname.startsWith('/go/');

  if (isRedirectPage) {
    return null;
  }

  return <Header />;
} 