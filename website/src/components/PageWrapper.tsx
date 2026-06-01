"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  
  return (
    <div className={isHome ? '' : 'pt-[120px]'}>
      {children}
    </div>
  );
}
