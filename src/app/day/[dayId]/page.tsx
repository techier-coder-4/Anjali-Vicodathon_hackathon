"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Code2, 
  Lightbulb, 
  CheckSquare, 
  Send,
  GitBranch,
  Share2,
  AlertCircle,
  BrainCircuit,
  Wrench,
  Clock,
  Gauge,
  Sparkles,
  BookOpen,
  Target
} from 'lucide-react';
import { MOCK_CHALLENGES } from '@/lib/mock-data';
import { useChallengeContext } from '@/context/ChallengeContext';
import { AppHeader } from '@/components/shared/AppHeader';
import { PageContainer } from '@/components/shared/PageContainer';
import { CheckpointCheck } from '@/components/day/CheckpointCheck';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

// No hardcoded why_it_matters needed anymore; fetched from challenge data structure directly.

export default function DailyChallengePage({ params }: { params: Promise<{ dayId: string }> }) {
  const unwrappedParams = use(params);
  const dayId = parseInt(unwrappedParams.dayId, 10);
  
  const { dayStates, updateActivity } = useChallengeContext();
  const challenge = MOCK_CHALLENGES.find(c => c.dayId === dayId);
  const dayState = dayStates[dayId];
  
  const [githubUrl, setGithubUrl] = useState(() => dayState?.activityStatus === 'submitted' ? (dayState.githubLink || '') : '');
  const [linkedinUrl, setLinkedinUrl] = useState(() => dayState?.activityStatus === 'submitted' ? (dayState.linkedinLink || '') : '');
  const [error, setError] = useState<string | null>(null);

  if (isNaN(dayId) || !challenge) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <AppHeader showBackButton backDestination="/dashboard" />
        <PageContainer className="py-16 text-center max-w-md mx-auto">
          <AlertCircle className="w-16 h-16 text-slate-300 mx-auto mb-6" />
          <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Challenge Not Found</h1>
          <p className="text-slate-500 mb-8 font-medium">The day you are looking for doesn&apos;t exist in the curriculum.</p>
          <Link href="/dashboard" className={cn(buttonVariants({ variant: "default" }), "w-full")}>
            Return to Dashboard
          </Link>
        </PageContainer>
      </div>
    );
  }

  const isCompleted = dayState?.activityStatus === 'submitted';
  const progressPercentage = Math.round((dayId / 60) * 100);
  const isCheckpoint = dayId % 3 === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!githubUrl.trim() || !linkedinUrl.trim()) {
      setError("Please provide both your GitHub and LinkedIn links to complete the day.");
      return;
    }
    setError(null);
    updateActivity(dayId, 'submitted', githubUrl, linkedinUrl);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-20">
      <AppHeader showBackButton backDestination="/dashboard" />
      
      <PageContainer className="py-8 max-w-4xl">
        
        {/* DAY PROGRESS */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Journey Progress</span>
            <span className="text-sm font-extrabold text-blue-700">Day {dayId} of 60</span>
          </div>
          <Progress value={progressPercentage} className="h-2.5 bg-slate-200 [&>div>div]:bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 flex flex-col gap-8">
            {/* TODAY'S GOAL */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] pointer-events-none -mr-20 -mt-20" />
              <div className="relative z-10 flex flex-col items-start gap-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge type="activity" status={dayState?.activityStatus || 'not_started'} />
                    {isCompleted && (
                      <StatusBadge type="understanding" status={dayState?.understandingStatus || 'not_checked'} />
                    )}
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">
                  {challenge.title}
                </h1>
                
                {/* CHALLENGE METADATA */}
                <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-slate-600 mb-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg capitalize">
                    <Wrench className="w-4 h-4 text-slate-500" />
                    {challenge.challengeType}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg capitalize">
                    <Gauge className="w-4 h-4 text-slate-500" />
                    {challenge.difficulty}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg">
                    <Clock className="w-4 h-4 text-slate-500" />
                    {challenge.estimatedMinutes} min
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl w-full mt-2">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1 shadow-sm flex items-center gap-2"><Target className="w-4 h-4 text-slate-500"/> Today&apos;s Goal</h3>
                  <p className="text-lg text-slate-700 font-medium leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </div>

            {/* WHY THIS MATTERS & LEARNING OBJECTIVE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-none shadow-md bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3 text-amber-300">
                    <Lightbulb className="w-5 h-5" />
                    <h2 className="font-bold uppercase tracking-wider text-sm">Why this matters</h2>
                  </div>
                  <p className="text-slate-300 text-base font-medium leading-relaxed mt-auto">
                    {challenge.whyItMatters}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm bg-blue-50/50">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3 text-blue-700">
                    <BookOpen className="w-5 h-5" />
                    <h2 className="font-bold uppercase tracking-wider text-sm">What you&apos;ll learn</h2>
                  </div>
                  <p className="text-slate-700 text-base font-medium leading-relaxed mt-auto">
                    {challenge.learningObjective}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CURIOSITY PROMPT */}
            {challenge.curiosityPrompt && (
              <Card className="border border-purple-200 shadow-sm bg-purple-50/30">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" /> 
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-900 mb-1.5 uppercase tracking-widest text-xs">Curiosity Challenge</h3>
                    <p className="text-purple-800/80 font-medium leading-relaxed">
                      {challenge.curiosityPrompt}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* WHAT NEEDS TO BE BUILT */}
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-blue-600" /> What you&apos;ll build
                </h2>
                <ul className="space-y-4">
                  {challenge.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 opacity-50" />
                      </div>
                      <span className="text-slate-700 font-medium leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* CHECKPOINT UNDERSTANDING CHECK */}
            {isCheckpoint && (
              <CheckpointCheck dayId={dayId} />
            )}
          </div>

          <div className="md:col-span-1">
            {/* SUBMISSION SECTION */}
            <div className="sticky top-20">
              <Card className={cn(
                "shadow-lg border-2 transition-colors",
                isCompleted ? "border-green-500 bg-green-50/30" : "border-slate-200"
              )}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-xl font-extrabold text-slate-900">
                    <Send className={cn("w-5 h-5", isCompleted ? "text-green-600" : "text-blue-600")} /> 
                    {isCompleted ? `Day ${dayId} completed` : "Submit Your Work"}
                  </CardTitle>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    {isCompleted 
                      ? "Good progress. You shipped something today."
                      : "Prove your work to mark this day complete."}
                  </p>
                </CardHeader>
                <CardContent>
                  
                  {isCompleted ? (
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-slate-700 font-bold text-sm bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                          <span>Work submitted</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-bold text-sm bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                          <span>Activity recorded</span>
                        </div>
                        
                        {dayState?.understandingStatus === 'understood' && (
                          <div className="flex items-center gap-3 text-slate-700 font-bold text-sm bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                            <span>Understanding checked</span>
                          </div>
                        )}
                      </div>

                      {dayState?.understandingStatus === 'needs_revisiting' && (
                        <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-sm font-medium">
                          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 opacity-80" />
                          <p>Your work is submitted. Consider revisiting today&apos;s concept when you have time.</p>
                        </div>
                      )}
                      
                      <Link 
                        href="/dashboard"
                        className={cn(buttonVariants({ variant: "default" }), "w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 mt-2")}
                      >
                        Back to Dashboard <ArrowLeft className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          <GitBranch className="w-4 h-4" /> GitHub Repo or Commit Link
                        </label>
                        <Input 
                          placeholder="https://github.com/username/project"
                          value={githubUrl}
                          onChange={(e) => setGithubUrl(e.target.value)}
                          className="h-11 bg-slate-50 border-slate-200 focus-visible:ring-blue-500 font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          <Share2 className="w-4 h-4" /> LinkedIn Post Link
                        </label>
                        <Input 
                          placeholder="https://linkedin.com/posts/..."
                          value={linkedinUrl}
                          onChange={(e) => setLinkedinUrl(e.target.value)}
                          className="h-11 bg-slate-50 border-slate-200 focus-visible:ring-blue-500 font-medium"
                        />
                      </div>
                      
                      {error && (
                        <div className="p-3 bg-blue-50 text-blue-800 rounded-lg text-sm font-medium border border-blue-100 flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                          <p>{error}</p>
                        </div>
                      )}
                      
                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold h-12 mt-2 shadow-md shadow-blue-600/20"
                      >
                        Mark Day Complete
                      </Button>
                    </form>
                  )}
                  
                </CardContent>
              </Card>
            </div>
          </div>
          
        </div>
      </PageContainer>
    </div>
  );
}
