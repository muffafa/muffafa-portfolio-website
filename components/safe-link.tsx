"use client";

import { useEffect } from "react";
import { getRedirectUrl } from "@/lib/utils";

interface SafeLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SafeLink({ href, children, className, onClick }: SafeLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Open new tab
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      // Get the redirect URL
      const redirectUrl = getRedirectUrl(href);
      // Set the new tab's location to our redirect page
      newWindow.location.href = redirectUrl;
    }

    // Call the original onClick handler if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <a 
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
} 