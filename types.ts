// Fix: Add global type declarations for libraries loaded via CDN.
// This informs TypeScript that these properties exist on the window object.
declare global {
  interface Window {
    ReactRouterDOM: any;
    Recharts: any;
    'lucide-react': any;
  }
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  xp: number;
  coursesCreated: number;
  coursesCompleted: number;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz' | 'code';
  duration: number; // in minutes
  content: string; // Markdown content or video URL
}

export interface Module {
  id: string;
  title:string;
  lessons: Lesson[];
}

export enum CourseDifficulty {
    BEGINNER = 'Beginner',
    INTERMEDIATE = 'Intermediate',
    ADVANCED = 'Advanced',
}

export interface Course {
  id: string;
  title: string;
  author: User;
  thumbnailUrl: string;
  description: string;
  category: string;
  difficulty: CourseDifficulty;
  duration: number; // in hours
  rating: number;
  enrollmentCount: number;
  modules: Module[];
}

export interface Enrollment {
  course: Course;
  progress: number; // percentage
  lastAccessed: Date;
}

export interface LeaderboardUser {
    rank: number;
    user: User;
    xp: number;
}