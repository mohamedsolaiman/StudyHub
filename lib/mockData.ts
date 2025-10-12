
import { User, Course, CourseDifficulty, Enrollment, LeaderboardUser } from '../types';

export const mockUsers: User[] = [
  { id: 'u1', name: 'Alice Johnson', avatarUrl: 'https://picsum.photos/seed/alice/100', bio: 'Frontend developer and educator.', xp: 12500, coursesCreated: 5, coursesCompleted: 20 },
  { id: 'u2', name: 'Bob Williams', avatarUrl: 'https://picsum.photos/seed/bob/100', bio: 'Data scientist passionate about machine learning.', xp: 11000, coursesCreated: 3, coursesCompleted: 15 },
  { id: 'u3', name: 'Charlie Brown', avatarUrl: 'https://picsum.photos/seed/charlie/100', bio: 'UX/UI designer creating beautiful interfaces.', xp: 9800, coursesCreated: 2, coursesCompleted: 12 },
  { id: 'u4', name: 'Diana Prince', avatarUrl: 'https://picsum.photos/seed/diana/100', bio: 'Full-stack engineer and open-source contributor.', xp: 15000, coursesCreated: 8, coursesCompleted: 25 },
];

export const mockCurrentUser = mockUsers[3];

export const mockCourses: Course[] = [
  {
    id: 'c1',
    title: 'React for Beginners',
    author: mockUsers[0],
    thumbnailUrl: 'https://picsum.photos/seed/react/600/400',
    description: 'A comprehensive guide to learning React from scratch. Covers hooks, components, and state management.',
    category: 'Web Development',
    difficulty: CourseDifficulty.BEGINNER,
    duration: 10,
    rating: 4.8,
    enrollmentCount: 12045,
    modules: [
        { id: 'm1', title: 'Introduction', lessons: [
            { id: 'l1', title: 'What is React?', type: 'video', duration: 15, content: 'https://www.youtube.com/embed/SqcY0GlETPk' },
            { id: 'l2', title: 'Setting up your environment', type: 'text', duration: 20, content: '## Setup Guide...' },
        ]},
        { id: 'm2', title: 'Core Concepts', lessons: [
            { id: 'l3', title: 'Components and Props', type: 'video', duration: 25, content: 'https://www.youtube.com/embed/SqcY0GlETPk' },
            { id: 'l4', title: 'State and Lifecycle', type: 'text', duration: 30, content: '## Understanding State...' },
            { id: 'l5', title: 'Handling Events', type: 'code', duration: 20, content: '// Your code here' },
        ]}
    ]
  },
  {
    id: 'c2',
    title: 'Advanced TypeScript',
    author: mockUsers[3],
    thumbnailUrl: 'https://picsum.photos/seed/typescript/600/400',
    description: 'Master TypeScript with advanced concepts like generics, decorators, and mapped types.',
    category: 'Web Development',
    difficulty: CourseDifficulty.ADVANCED,
    duration: 15,
    rating: 4.9,
    enrollmentCount: 8765,
    modules: []
  },
  {
    id: 'c3',
    title: 'Introduction to Python',
    author: mockUsers[1],
    thumbnailUrl: 'https://picsum.photos/seed/python/600/400',
    description: 'Learn the fundamentals of Python programming for data science and web development.',
    category: 'Data Science',
    difficulty: CourseDifficulty.BEGINNER,
    duration: 8,
    rating: 4.7,
    enrollmentCount: 25012,
    modules: []
  },
  {
    id: 'c4',
    title: 'UI Design Fundamentals',
    author: mockUsers[2],
    thumbnailUrl: 'https://picsum.photos/seed/ui/600/400',
    description: 'Explore the core principles of UI design, including color theory, typography, and layout.',
    category: 'Design',
    difficulty: CourseDifficulty.INTERMEDIATE,
    duration: 12,
    rating: 4.8,
    enrollmentCount: 9500,
    modules: []
  },
    {
    id: 'c5',
    title: 'Next.js 14 Deep Dive',
    author: mockUsers[3],
    thumbnailUrl: 'https://picsum.photos/seed/nextjs/600/400',
    description: 'A complete guide to the Next.js App Router, Server Actions, and advanced rendering patterns.',
    category: 'Web Development',
    difficulty: CourseDifficulty.ADVANCED,
    duration: 20,
    rating: 4.9,
    enrollmentCount: 7500,
    modules: []
  },
  {
    id: 'c6',
    title: 'SQL for Data Analysis',
    author: mockUsers[1],
    thumbnailUrl: 'https://picsum.photos/seed/sql/600/400',
    description: 'Go from zero to hero in SQL. Learn to write complex queries for data analysis.',
    category: 'Data Science',
    difficulty: CourseDifficulty.INTERMEDIATE,
    duration: 10,
    rating: 4.8,
    enrollmentCount: 18000,
    modules: []
  },
];

export const mockEnrollments: Enrollment[] = [
    { course: mockCourses[0], progress: 75, lastAccessed: new Date('2024-05-20T10:00:00Z') },
    { course: mockCourses[2], progress: 30, lastAccessed: new Date('2024-05-18T14:30:00Z') },
    { course: mockCourses[3], progress: 90, lastAccessed: new Date('2024-05-21T09:00:00Z') },
];

export const mockLeaderboard: LeaderboardUser[] = [
    { rank: 1, user: mockUsers[3], xp: 15000 },
    { rank: 2, user: mockUsers[0], xp: 12500 },
    { rank: 3, user: mockUsers[1], xp: 11000 },
    { rank: 4, user: mockUsers[2], xp: 9800 },
];
