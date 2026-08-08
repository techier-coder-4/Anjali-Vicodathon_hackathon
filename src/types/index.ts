export type ActivityStatus = 'not_started' | 'pending' | 'submitted' | 'missed';
export type UnderstandingStatus = 'not_checked' | 'understood' | 'needs_revisiting';

export interface ChallengeData {
  dayId: number;
  title: string;
  description: string;
  requirements: string[];
  learningObjective: string;
  whyItMatters: string;
  challengeType: 'build' | 'debug' | 'experiment' | 'solve' | 'design' | 'improve' | 'project';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  curiosityPrompt: string;
}

export interface DayState {
  dayId: number;
  activityStatus: ActivityStatus;
  understandingStatus: UnderstandingStatus;
  githubLink?: string;
  linkedinLink?: string;
}

export interface ChallengeContextType {
  dayStates: Record<number, DayState>;
  updateActivity: (dayId: number, status: ActivityStatus, githubLink?: string, linkedinLink?: string) => void;
  updateUnderstanding: (dayId: number, status: UnderstandingStatus) => void;
}

