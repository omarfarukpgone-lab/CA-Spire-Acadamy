export type UserRole = 'student' | 'admin';
export type StudentLevel = 'Certificate' | 'Professional' | 'Advanced';

export interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  institute?: string;
  level?: StudentLevel;
  role: UserRole;
  createdAt: any;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  totalMCQs: number;
  description: string;
}

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
}

export interface MockTest {
  id: string;
  title: string;
  subjectId: string;
  duration: number;
  totalQuestions: number;
  negativeMarking: boolean;
  category: 'Daily' | 'Weekly' | 'Full' | 'Subject Wise';
}

export interface Submission {
  id: string;
  userId: string;
  testId: string;
  score: number;
  timeTaken: number;
  answers: Record<string, number>;
  createdAt: any;
}

export interface Note {
  id: string;
  title: string;
  type: 'PDF' | 'Hand' | 'Short' | 'Formula';
  url: string;
  isPremium: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: any;
  thumbnail: string;
}
