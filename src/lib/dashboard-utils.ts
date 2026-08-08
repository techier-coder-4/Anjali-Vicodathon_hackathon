import { DayState } from '../types';

export interface DashboardStats {
  currentDay: number;
  completedDays: number;
  streak: number;
  progressPercentage: number;
  daysRemaining: number;
}

export function getDashboardStats(dayStates: Record<number, DayState>): DashboardStats {
  const days = Object.values(dayStates).sort((a, b) => a.dayId - b.dayId);
  const totalDays = 60; // From ABTalks 60-day challenge

  // Calculate completed days
  const completedDays = days.reduce((count, day) => {
    return day.activityStatus === 'submitted' ? count + 1 : count;
  }, 0);

  // Determine current day: first day that is not submitted, or day 60 if all are done
  const currentDayState = days.find(d => d.activityStatus === 'pending' || d.activityStatus === 'not_started') || days[days.length - 1];
  const currentDay = currentDayState ? currentDayState.dayId : 1;

  // Calculate Streak
  let streak = 0;
  for (let i = currentDay - 1; i >= 1; i--) {
    const state = dayStates[i];
    if (state && state.activityStatus === 'submitted') {
      streak++;
    } else if (state && state.activityStatus === 'missed') {
      break; 
    } else {
      break; 
    }
  }

  return {
    currentDay,
    completedDays,
    streak,
    progressPercentage: Math.round((completedDays / totalDays) * 100),
    daysRemaining: totalDays - completedDays
  };
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  earned: boolean;
  icon: string;
}

export function getAchievements(dayStates: Record<number, DayState>): Achievement[] {
  const stats = getDashboardStats(dayStates);
  
  const firstBuild = stats.completedDays >= 1;
  const sevenDayStreak = stats.streak >= 7;
  const tenChallenges = stats.completedDays >= 10;
  
  const reflectionReady = Object.values(dayStates).some(d => d.understandingStatus === 'understood' || d.understandingStatus === 'needs_revisiting');

  return [
    {
      id: "first_build",
      name: "First Build",
      description: "Complete your first challenge.",
      earned: firstBuild,
      icon: "CodeXml"
    },
    {
      id: "7_day_streak",
      name: "7 Day Streak",
      description: "Build for 7 consecutive days.",
      earned: sevenDayStreak,
      icon: "Flame"
    },
    {
      id: "10_challenges",
      name: "Consistent Builder",
      description: "Complete 10 challenges total.",
      earned: tenChallenges,
      icon: "Target"
    },
    {
      id: "reflection_ready",
      name: "Deep Understanding",
      description: "Confirm your understanding of a topic.",
      earned: reflectionReady,
      icon: "BrainCircuit"
    }
  ];
}
