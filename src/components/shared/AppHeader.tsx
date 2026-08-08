import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpenCheck } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AppHeaderProps {
  title?: string;
  showBackButton?: boolean;
  backDestination?: string;
}

export function AppHeader({ 
  title = "ABTalks", 
  showBackButton = false, 
  backDestination = "/dashboard" 
}: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between h-14 px-4 py-3 border-b bg-background sticky top-0 z-10 w-full">
      <div className="flex items-center gap-3">
        {showBackButton && (
          <Link 
            href={backDestination} 
            aria-label="Go back"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "w-8 h-8 rounded-full")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
        )}
        
        {!showBackButton ? (
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary">
              <BookOpenCheck className="w-5 h-5" />
            </div>
            <h1 className="font-semibold text-lg tracking-tight select-none">
              {title}
            </h1>
          </Link>
        ) : (
          <h1 className="font-semibold text-lg tracking-tight select-none">
            {title}
          </h1>
        )}
      </div>
    </header>
  );
}
