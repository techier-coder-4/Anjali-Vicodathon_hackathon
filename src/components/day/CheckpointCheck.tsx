"use client";

import React, { useState } from 'react';
import { BrainCircuit, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useChallengeContext } from '@/context/ChallengeContext';
import { cn } from '@/lib/utils';
import { StatusBadge } from '@/components/shared/StatusBadge';

interface CheckpointCheckProps {
  dayId: number;
}

export function CheckpointCheck({ dayId }: CheckpointCheckProps) {
  const { dayStates, updateUnderstanding } = useChallengeContext();
  const dayState = dayStates[dayId];
  const understandingStatus = dayState?.understandingStatus || 'not_checked';

  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  // If the status is already logged (either understood or needs_revisiting), show the summary state.
  if (understandingStatus !== 'not_checked') {
    const isUnderstood = understandingStatus === 'understood';
    return (
      <Card className={cn(
        "shadow-sm relative overflow-hidden border-2 transition-colors",
        isUnderstood ? "border-green-200 bg-green-50/50" : "border-amber-200 bg-amber-50/50"
      )}>
        <CardContent className="p-8 relative z-10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className={cn(
              "flex items-center gap-3", 
              isUnderstood ? "text-green-700" : "text-amber-700"
            )}>
              {isUnderstood ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
              <h2 className="font-bold uppercase tracking-wider text-sm">Reflection Complete</h2>
            </div>
            <StatusBadge type="understanding" status={understandingStatus} />
          </div>
          
          <p className={cn("font-medium leading-relaxed max-w-2xl", isUnderstood ? "text-green-900/80" : "text-amber-900/80")}>
            {isUnderstood 
              ? "Nice work — you've taken a moment to make today's learning stick."
              : "Marked complete, but consider revisiting this one when you have a moment. Your day is still complete, so you can keep moving forward!"}
          </p>
        </CardContent>
      </Card>
    );
  }

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple deterministic threshold: total length > 30 heavily implies meaningful effort.
    const totalLength = q1.trim().length + q2.trim().length + q3.trim().length;
    
    if (totalLength > 30 && q1.trim() && q2.trim() && q3.trim()) {
      updateUnderstanding(dayId, 'understood');
    } else {
      updateUnderstanding(dayId, 'needs_revisiting');
    }
  };

  const handleSkip = () => {
    updateUnderstanding(dayId, 'needs_revisiting');
  };

  return (
    <Card className="border-purple-200 bg-white shadow-md relative overflow-hidden border-t-4 border-t-purple-500">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-[50px] pointer-events-none -mr-10 -mt-10" />
      
      <CardHeader className="pb-2 relative z-10">
        <CardTitle className="flex items-center gap-3 text-purple-700 text-xl font-extrabold pb-2">
          <BrainCircuit className="w-6 h-6 text-purple-600" />
          Quick Reflection Check
        </CardTitle>
        <p className="text-slate-600 font-medium leading-relaxed max-w-lg">
          This isn't a test. It helps you make sure today's work actually sticks. Short 1–3 sentence answers are enough.
        </p>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-4">
        <form onSubmit={handleEvaluate} className="flex flex-col gap-6">
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800">1. What did you build today?</label>
            <Textarea 
              placeholder="E.g., I set up a basic Express API with a single health check route..."
              value={q1}
              onChange={(e) => setQ1(e.target.value)}
              className="bg-slate-50 focus-visible:ring-purple-500 border-slate-200"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800">2. Why did you approach it this way?</label>
            <Textarea 
              placeholder="E.g., I chose to use middleware for testing interceptors..."
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
              className="bg-slate-50 focus-visible:ring-purple-500 border-slate-200"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800">3. What was the hardest part?</label>
            <Textarea 
              placeholder="E.g., Getting the database variables configured correctly..."
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
              className="bg-slate-50 focus-visible:ring-purple-500 border-slate-200"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Button 
              type="submit" 
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold h-11 px-8 rounded-xl shadow-md shadow-purple-600/20"
            >
              Complete Reflection
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              onClick={handleSkip}
              className="w-full sm:w-auto text-slate-500 hover:text-slate-700 font-bold h-11"
            >
              Skip for now
            </Button>
          </div>
          
        </form>
      </CardContent>
    </Card>
  );
}
