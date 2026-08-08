"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ActivityStatus, UnderstandingStatus, DayState, ChallengeContextType } from '../types';
import { MOCK_CHALLENGES } from '../lib/mock-data';

const ChallengeContext = createContext<ChallengeContextType | undefined>(undefined);

export function ChallengeProvider({ children }: { children: React.ReactNode }) {
  const [dayStates, setDayStates] = useState<Record<number, DayState>>(() => {
    const initialState: Record<number, DayState> = {};
    MOCK_CHALLENGES.forEach((challenge) => {
      initialState[challenge.dayId] = {
        dayId: challenge.dayId,
        activityStatus: challenge.dayId === 1 ? 'pending' : 'not_started',
        understandingStatus: 'not_checked',
      };
    });
    return initialState;
  });

  const updateActivity = (dayId: number, status: ActivityStatus, githubLink?: string, linkedinLink?: string) => {
    setDayStates((prev) => ({
      ...prev,
      [dayId]: {
        ...prev[dayId],
        activityStatus: status,
        ...(githubLink !== undefined && { githubLink }),
        ...(linkedinLink !== undefined && { linkedinLink }),
      }
    }));
  };

  const updateUnderstanding = (dayId: number, status: UnderstandingStatus) => {
    setDayStates((prev) => ({
      ...prev,
      [dayId]: {
        ...prev[dayId],
        understandingStatus: status,
      }
    }));
  };

  return (
    <ChallengeContext.Provider value={{ dayStates, updateActivity, updateUnderstanding }}>
      {children}
    </ChallengeContext.Provider>
  );
}

export function useChallengeContext() {
  const context = useContext(ChallengeContext);
  if (context === undefined) {
    throw new Error('useChallengeContext must be used within a ChallengeProvider');
  }
  return context;
}
