import React from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageContainer({ children, className, ...props }: PageContainerProps) {
  return (
    <div 
      className={cn(
        "min-h-screen px-4 py-6 pb-12 w-full mx-auto sm:max-w-md md:max-w-2xl lg:max-w-4xl", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
