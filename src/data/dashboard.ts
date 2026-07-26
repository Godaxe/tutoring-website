// src/data/dashboard.ts

export interface EnrolledCourse {
  courseId: string;
  progress: number;
  lastLesson: string;
  nextLesson: string;
  dueDate: string;
}

export interface UpcomingSession {
  id: number;
  tutor: string;
  topic: string;
  date: string;
  time: string;
}

export interface Activity {
  text: string;
  time: string;
}

export const enrolledCourses: EnrolledCourse[] = [
  {
    courseId: 'seo-fundamentals',
    progress: 65,
    lastLesson: 'Keyword Research Tools',
    nextLesson: 'Competitor Analysis',
    dueDate: 'Aug 15, 2026'
  },
  {
    courseId: 'social-media-marketing',
    progress: 30,
    lastLesson: 'Instagram Strategy Basics',
    nextLesson: 'Content Calendar Planning',
    dueDate: 'Sep 1, 2026'
  },
  {
    courseId: 'google-ads-mastery',
    progress: 90,
    lastLesson: 'Campaign Optimization',
    nextLesson: 'Final Project',
    dueDate: 'Jul 30, 2026'
  }
];

export const upcomingSessions: UpcomingSession[] = [
  { id: 1, tutor: 'John Doe', topic: 'SEO Audit Review', date: 'Jul 28, 2026', time: '10:00 AM' },
  { id: 2, tutor: 'Sarah Smith', topic: 'Instagram Ad Setup', date: 'Jul 29, 2026', time: '2:00 PM' },
  { id: 3, tutor: 'Mike Chen', topic: 'Google Ads Q&A', date: 'Jul 31, 2026', time: '11:00 AM' }
];

export const recentActivity: Activity[] = [
  { text: 'Completed "Keyword Research Tools" lesson in SEO Fundamentals', time: '2 hours ago' },
  { text: 'Booked a session with Sarah Smith for Jul 29', time: '5 hours ago' },
  { text: 'Submitted quiz for Module 3 in Google Ads Mastery', time: '1 day ago' },
  { text: 'Earned "SEO Basics" certificate', time: '3 days ago' }
];