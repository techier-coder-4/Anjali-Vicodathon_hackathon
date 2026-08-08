import React from 'react';
import { ActivityStatus, UnderstandingStatus } from '@/types';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  XCircle, 
  Brain, 
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';

type BadgeType = 'activity' | 'understanding';

interface StatusBadgeProps {
  type: BadgeType;
  status: ActivityStatus | UnderstandingStatus;
  showLabel?: boolean;
  className?: string;
}

export function StatusBadge({ type, status, showLabel = true, className }: StatusBadgeProps) {
  // Activity Configuration
  if (type === 'activity') {
    const activityConfig = {
      not_started: {
        icon: Circle,
        label: 'Not Started',
        classes: 'bg-neutral/20 text-neutral-foreground hover:bg-neutral/30 border-neutral/30'
      },
      pending: {
        icon: Clock,
        label: 'Pending',
        classes: 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20'
      },
      submitted: {
        icon: CheckCircle2,
        label: 'Submitted',
        classes: 'bg-success/10 text-[var(--success)] border-[var(--success)]/20 hover:bg-success/20'
      },
      missed: {
        icon: XCircle,
        label: 'Missed',
        classes: 'bg-warning/10 text-[var(--warning)] border-[var(--warning)]/20 hover:bg-warning/20'
      }
    };

    const config = activityConfig[status as ActivityStatus];
    const Icon = config.icon;

    return (
      <Badge variant="outline" className={cn('gap-1.5 py-1 px-2.5 rounded-full font-medium', config.classes, className)}>
        <Icon className="w-3.5 h-3.5" />
        {showLabel && <span>Activity · {config.label}</span>}
      </Badge>
    );
  }

  // Understanding Configuration
  if (type === 'understanding') {
    const understandingConfig = {
      not_checked: {
        icon: HelpCircle,
        label: 'Not Checked',
        classes: 'bg-neutral/20 text-neutral-foreground hover:bg-neutral/30 border-neutral/30'
      },
      understood: {
        icon: Lightbulb,
        label: 'Understood',
        classes: 'bg-success/15 text-[var(--success)] border-[var(--success)]/30 hover:bg-success/25 shadow-sm'
      },
      needs_revisiting: {
        icon: Brain,
        label: 'Needs Revisiting',
        classes: 'bg-[var(--needs-revisiting)]/10 text-[var(--needs-revisiting)] border-[var(--needs-revisiting)]/20 hover:bg-[var(--needs-revisiting)]/20'
      }
    };

    const config = understandingConfig[status as UnderstandingStatus];
    const Icon = config.icon;

    return (
      <Badge variant="outline" className={cn('gap-1.5 py-1 px-2.5 rounded-md font-medium', config.classes, className)}>
        <Icon className="w-3.5 h-3.5" />
        {showLabel && <span>Understanding · {config.label}</span>}
      </Badge>
    );
  }

  return null;
}
