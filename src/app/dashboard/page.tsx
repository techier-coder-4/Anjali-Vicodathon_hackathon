"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import { 
  Flame, 
  Target, 
  Trophy, 
  ArrowRight,
  CodeXml,
  BrainCircuit,
  Lock,
  Unlock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useChallengeContext } from '@/context/ChallengeContext';
import { STUDENT_INFO, MOCK_CHALLENGES } from '@/lib/mock-data';
import { getDashboardStats, getAchievements } from '@/lib/dashboard-utils';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageContainer } from '@/components/shared/PageContainer';
import { AppHeader } from '@/components/shared/AppHeader';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { cn } from '@/lib/utils';

export default function DashboardPage() {
  const { dayStates } = useChallengeContext();
  
  const stats = useMemo(() => getDashboardStats(dayStates), [dayStates]);
  const achievements = useMemo(() => getAchievements(dayStates), [dayStates]);
  
  const todayChallenge = MOCK_CHALLENGES.find(c => c.dayId === stats.currentDay) || MOCK_CHALLENGES[MOCK_CHALLENGES.length - 1];
  const todayState = dayStates[stats.currentDay] || { activityStatus: 'not_started', understandingStatus: 'not_checked' };
  
  // Handing missed days edge case
  // If the last status before currentDay is missed, that means they broke the streak recently.
  // We can show a gentle message.
  const missedDay = stats.currentDay > 1 && dayStates[stats.currentDay - 1]?.activityStatus === 'missed';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <AppHeader />
      
      <PageContainer className="py-8">
        
        {/* STUDENT HEADER */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-blue-600 font-semibold tracking-wide text-sm mb-1 uppercase">Student Dashboard</p>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Welcome back, {STUDENT_INFO.name.split(' ')[0]} 👋
              </h1>
            </div>
            
            <div className="bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Current Progress</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-slate-900">Day {stats.currentDay} of 60</span>
                </div>
              </div>
              <div className="w-16 h-16 shrink-0 relative flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <path
                    className="text-slate-100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="text-blue-600"
                    strokeDasharray={`${stats.progressPercentage}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-[10px] text-blue-700">
                  {stats.progressPercentage}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* 2. CURRENT STREAK */}
          <Card className="border-none shadow-md bg-gradient-to-br from-orange-500 to-red-500 text-white overflow-hidden relative">
            <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none">
              <Flame className="w-32 h-32" />
            </div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center gap-2 text-orange-100 mb-2 font-medium">
                <Flame className="w-4 h-4" /> Current Streak
              </div>
              
              {stats.streak === 0 ? (
                <>
                  <h3 className="text-3xl font-extrabold mb-1">Day 1</h3>
                  <p className="text-sm text-orange-100 font-medium">Your journey starts today. Complete the challenge to begin.</p>
                </>
              ) : (
                <>
                  <h3 className="text-3xl font-extrabold mb-1">{stats.streak} {stats.streak === 1 ? 'day' : 'days'}</h3>
                  <p className="text-sm text-orange-100 font-medium">
                    {missedDay ? "You missed a day, but you're back. Let's go!" : "Keep showing up. One day at a time."}
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          {/* 3. OVERALL COMPLETION */}
          <Card className="border-none shadow-md bg-white border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-500 font-bold text-sm uppercase tracking-wide">
                  <Target className="w-4 h-4 text-blue-500" /> Overall
                </div>
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-none font-bold">
                  {stats.daysRemaining} days left
                </Badge>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">{stats.completedDays} / 60</h3>
              <p className="text-sm text-slate-500 font-medium mb-3">challenges completed</p>
              <Progress value={stats.progressPercentage} className="h-2 bg-slate-100 [&>div>div]:bg-blue-600" />
            </CardContent>
          </Card>

          {/* 4. STUDENT STANDING */}
          <Card className="border-none shadow-md bg-slate-900 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[40px] pointer-events-none" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-wide mb-2">
                <Trophy className="w-4 h-4 text-purple-400" /> Cohort Standing
              </div>
              <h3 className="text-3xl font-extrabold mb-1 text-white">#{STUDENT_INFO.rank}</h3>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                out of {STUDENT_INFO.totalParticipants} students.
                <br />
                <span className="text-slate-400 text-xs">Based on challenge progress.</span>
              </p>
            </CardContent>
          </Card>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN (MAIN) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* 6. TODAY'S CHALLENGE */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                Today&apos;s Focus
              </h2>
              <Card className="border-slate-200 shadow-lg shadow-blue-900/5 group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="default" className="bg-blue-600 hover:bg-blue-700 text-sm px-3 py-1">
                          Day {todayChallenge.dayId}
                        </Badge>
                        {/* 7 & 8. STATUSES */}
                        <StatusBadge type="activity" status={todayState.activityStatus} />
                        <StatusBadge type="understanding" status={todayState.understandingStatus} />
                      </div>
                      
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                        {todayChallenge.title}
                      </h3>
                      <p className="text-slate-600 font-medium leading-relaxed mb-6">
                        {todayChallenge.description}
                      </p>
                      
                      <Link 
                        href={`/day/${todayChallenge.dayId}`}
                        className={cn(buttonVariants({ size: "lg" }), "bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold shadow-md")}
                      >
                        {todayState.activityStatus === 'submitted' ? 'Review Submission' : "Continue Today's Challenge"} 
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* DAY JOURNEY / PROGRESS (COMPACT) */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Your 60-Day Journey</h2>
              <Card className="border-slate-200 shadow-sm overflow-hidden">
                <CardContent className="p-6">
                  {/* Compact grid of 60 days */}
                  <div className="grid grid-cols-10 sm:grid-cols-15 md:grid-cols-20 gap-2">
                    {Array.from({ length: 60 }).map((_, i) => {
                      const dayId = i + 1;
                      const state = dayStates[dayId];
                      
                      let bgClass = "bg-slate-100 border-slate-200 text-slate-400"; // not_started
                      
                      if (dayId === stats.currentDay) {
                        bgClass = "bg-blue-100 border-blue-500 text-blue-700 ring-2 ring-blue-500 ring-offset-1"; // current
                      } else if (state?.activityStatus === 'submitted') {
                        bgClass = "bg-green-500 border-green-600 text-white"; // completed
                      } else if (state?.activityStatus === 'missed') {
                        bgClass = "bg-red-100 border-red-300 text-red-600"; // missed
                      }
                      
                      return (
                         <div 
                           key={dayId}
                           title={`Day ${dayId}`}
                           className={cn(
                             "aspect-square rounded-md border flex items-center justify-center text-[10px] font-bold cursor-help transition-all hover:scale-110",
                             bgClass
                           )}
                         >
                           {dayId === stats.currentDay ? (
                             <span className="font-extrabold">{dayId}</span>
                           ) : state?.activityStatus === 'submitted' ? (
                             <CheckCircle2 className="w-3 h-3 block sm:hidden" />
                           ) : state?.activityStatus === 'missed' ? (
                             <AlertCircle className="w-3 h-3 block sm:hidden" />
                           ) : null}
                           <span className={cn("hidden sm:block", (state?.activityStatus === 'submitted' || state?.activityStatus === 'missed') && "sm:hidden")}>
                              {dayId}
                           </span>
                         </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-4 mt-6 text-xs font-bold text-slate-500 justify-center flex-wrap">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-green-500 border border-green-600" /> Completed</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-blue-100 border-2 border-blue-500" /> Current</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-red-100 border border-red-300" /> Missed</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-slate-100 border border-slate-200" /> Upcoming</div>
                  </div>
                </CardContent>
              </Card>
            </section>

          </div>
          
          {/* RIGHT COLUMN (SIDEBAR) */}
          <div className="flex flex-col gap-8">
            
            {/* 5. ACHIEVEMENTS */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                Achievements
              </h2>
              <Card className="border-slate-200 shadow-sm h-full">
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    {achievements.length > 0 ? (
                      achievements.map((ach) => (
                        <div key={ach.id} className="p-5 flex items-start gap-4">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border",
                            ach.earned 
                              ? "bg-gradient-to-br from-amber-100 to-orange-100 border-amber-200 shadow-sm"
                              : "bg-slate-50 border-slate-200 opacity-60"
                          )}>
                            {ach.earned ? (
                              // Map icon strings to components dynamically or hardcode for safety
                              ach.icon === 'CodeXml' ? <CodeXml className="w-6 h-6 text-amber-600" /> :
                              ach.icon === 'Flame' ? <Flame className="w-6 h-6 text-orange-500" /> :
                              ach.icon === 'Target' ? <Target className="w-6 h-6 text-red-500" /> :
                              ach.icon === 'BrainCircuit' ? <BrainCircuit className="w-6 h-6 text-purple-600" /> :
                              <Trophy className="w-6 h-6 text-amber-500" />
                            ) : (
                              <Lock className="w-5 h-5 text-slate-400" />
                            )}
                          </div>
                          <div>
                            <h4 className={cn("font-bold text-sm mb-1", ach.earned ? "text-slate-900" : "text-slate-500")}>
                              {ach.name}
                            </h4>
                            <p className="text-xs text-slate-500 font-medium">
                              {ach.description}
                            </p>
                            {!ach.earned && (
                               <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                                 <Unlock className="w-3 h-3" /> Locked
                               </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-3">
                          <Trophy className="w-5 h-5 text-slate-400" />
                        </div>
                        <p className="text-sm font-bold text-slate-900 mb-1">No achievements yet</p>
                        <p className="text-xs text-slate-500">Complete your first challenge to earn one.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </section>

          </div>

        </div>
      </PageContainer>
    </div>
  );
}
