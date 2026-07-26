// src/data/courses.ts

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  color: string;
  instructor: {
    name: string;
    initials: string;
    role: string;
    bio: string;
  };
  learningPoints: string[];
  curriculum: {
    module: string;
    lessons: number;
    topics: string[];
  }[];
  students: number;
  rating: number;
  reviews: number;
}

export const courses: Course[] = [
  {
    id: 'seo-fundamentals',
    title: 'SEO Fundamentals',
    description: 'Learn how search engines work, keyword research, on-page and off-page SEO.',
    longDescription: 'Master the art and science of search engine optimization',
    price: 149,
    category: 'SEO',
    level: 'Beginner',
    duration: '6 weeks',
    lessons: 24,
    color: 'from-blue-400 to-blue-600',
    instructor: {
      name: 'John Doe',
      initials: 'JD',
      role: 'Senior SEO Specialist',
      bio: '10+ years of experience in SEO. Worked with Fortune 500 companies and helped over 5,000 students master search engine optimization.'
    },
    learningPoints: [
      'Understanding how search engines work',
      'Keyword research and analysis',
      'On-page SEO optimization',
      'Technical SEO fundamentals',
      'Link building strategies',
      'Local SEO optimization',
      'SEO tools and analytics',
      'Creating an SEO strategy'
    ],
    curriculum: [
      {
        module: 'Module 1: Introduction to SEO',
        lessons: 4,
        topics: ['What is SEO and Why It Matters', 'How Search Engines Work', 'Types of SEO: White Hat vs Black Hat', 'Setting Up Your SEO Tool Stack']
      },
      {
        module: 'Module 2: Keyword Research',
        lessons: 6,
        topics: ['Understanding Search Intent', 'Finding Seed Keywords', 'Using Keyword Research Tools', 'Competitor Keyword Analysis', 'Long-tail Keywords Strategy', 'Creating a Keyword Map']
      },
      {
        module: 'Module 3: On-Page SEO',
        lessons: 8,
        topics: ['Title Tags and Meta Descriptions', 'Header Tags Optimization', 'Content Optimization', 'Image SEO', 'Internal Linking Strategy', 'URL Structure Best Practices', 'Schema Markup Basics', 'On-Page SEO Checklist']
      },
      {
        module: 'Module 4: Technical SEO',
        lessons: 6,
        topics: ['Site Architecture', 'XML Sitemaps', 'Robots.txt', 'Page Speed Optimization', 'Mobile Optimization', 'Fixing Crawl Errors']
      }
    ],
    students: 1234,
    rating: 4.8,
    reviews: 234
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Master Instagram, Facebook, LinkedIn, and TikTok marketing strategies.',
    longDescription: 'Build and execute winning social media campaigns',
    price: 129,
    category: 'Social Media',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 32,
    color: 'from-purple-400 to-pink-600',
    instructor: {
      name: 'Sarah Smith',
      initials: 'SS',
      role: 'Social Media Strategist',
      bio: 'Social media strategist who grew brands from 0 to 100K followers. Previously managed social for major beauty brands.'
    },
    learningPoints: [
      'Creating a social media strategy',
      'Instagram marketing mastery',
      'Facebook Ads Manager',
      'LinkedIn B2B marketing',
      'TikTok content creation',
      'Community management',
      'Social media analytics',
      'Influencer marketing basics'
    ],
    curriculum: [
      {
        module: 'Module 1: Social Media Strategy',
        lessons: 5,
        topics: ['Setting Goals', 'Audience Research', 'Platform Selection', 'Content Pillars', 'Content Calendar']
      },
      {
        module: 'Module 2: Instagram & TikTok',
        lessons: 8,
        topics: ['Profile Optimization', 'Reels Strategy', 'Stories & Engagement', 'Hashtag Strategy', 'TikTok Algorithm', 'Viral Content Formula', 'Instagram Shopping', 'Analytics']
      }
    ],
    students: 890,
    rating: 4.8,
    reviews: 256
  },
  {
    id: 'google-ads-mastery',
    title: 'Google Ads Mastery',
    description: 'Create and optimize Google Ads campaigns that drive real results.',
    longDescription: 'Master paid search advertising from an ex-Googler',
    price: 199,
    category: 'PPC',
    level: 'Advanced',
    duration: '4 weeks',
    lessons: 16,
    color: 'from-green-400 to-teal-600',
    instructor: {
      name: 'Mike Chen',
      initials: 'MC',
      role: 'Ex-Google Ads Specialist',
      bio: 'Ex-Google employee. Managed over $10M in ad spend for clients across multiple industries.'
    },
    learningPoints: [
      'Google Ads account setup',
      'Keyword planning & match types',
      'Writing high-converting ads',
      'Bidding strategies',
      'Quality Score optimization',
      'Remarketing campaigns',
      'Display & Video ads',
      'Performance tracking'
    ],
    curriculum: [
      {
        module: 'Module 1: Google Ads Fundamentals',
        lessons: 4,
        topics: ['Account Structure', 'Campaign Types', 'Keyword Planner', 'Match Types Explained']
      },
      {
        module: 'Module 2: Creating Campaigns',
        lessons: 6,
        topics: ['Search Campaigns', 'Ad Copy Best Practices', 'Landing Pages', 'Ad Extensions', 'Bidding Setup', 'Budget Management']
      }
    ],
    students: 670,
    rating: 4.9,
    reviews: 189
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing Strategy',
    description: 'Create compelling content that attracts and converts your target audience.',
    longDescription: 'Build a content engine that drives traffic and leads',
    price: 99,
    category: 'Content',
    level: 'Beginner',
    duration: '5 weeks',
    lessons: 20,
    color: 'from-orange-400 to-red-600',
    instructor: {
      name: 'Lisa Garcia',
      initials: 'LG',
      role: 'Content Strategist',
      bio: 'Content strategist for B2B and B2C brands. Blogging and copywriting expert with 8+ years experience.'
    },
    learningPoints: [
      'Content strategy fundamentals',
      'Blog writing techniques',
      'SEO copywriting',
      'Content distribution',
      'Repurposing content',
      'Content calendar planning',
      'Measuring content ROI'
    ],
    curriculum: [
      {
        module: 'Module 1: Content Strategy',
        lessons: 5,
        topics: ['Audience Research', 'Content Audit', 'Topic Clusters', 'Content Formats', 'Editorial Calendar']
      }
    ],
    students: 450,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing Pro',
    description: 'Build email lists, create automated sequences, and increase conversions.',
    longDescription: 'Turn subscribers into customers with email automation',
    price: 89,
    category: 'Email',
    level: 'Intermediate',
    duration: '3 weeks',
    lessons: 12,
    color: 'from-yellow-400 to-orange-600',
    instructor: {
      name: 'Emma Williams',
      initials: 'EW',
      role: 'Email Marketing Specialist',
      bio: 'Email marketing specialist with 20%+ average conversion rates for e-commerce clients.'
    },
    learningPoints: [
      'Building email lists',
      'Welcome sequences',
      'Abandoned cart emails',
      'Newsletter best practices',
      'A/B testing',
      'Email analytics'
    ],
    curriculum: [
      {
        module: 'Module 1: Email Foundations',
        lessons: 4,
        topics: ['List Building', 'Email Platforms', 'Deliverability', 'Subject Lines That Convert']
      }
    ],
    students: 380,
    rating: 4.6,
    reviews: 112
  },
  {
    id: 'analytics',
    title: 'Analytics & Data-Driven Marketing',
    description: 'Use Google Analytics and data to make informed marketing decisions.',
    longDescription: 'Turn data into actionable marketing insights',
    price: 179,
    category: 'Analytics',
    level: 'Advanced',
    duration: '6 weeks',
    lessons: 24,
    color: 'from-indigo-400 to-purple-600',
    instructor: {
      name: 'David Brown',
      initials: 'DB',
      role: 'Data Analytics Expert',
      bio: 'Data-driven marketer who turns analytics into actionable insights. Certified in GA4 and Looker Studio.'
    },
    learningPoints: [
      'Google Analytics 4 setup',
      'Custom reports & dashboards',
      'Conversion tracking',
      'Attribution modeling',
      'Data visualization',
      'Making data-driven decisions'
    ],
    curriculum: [
      {
        module: 'Module 1: Analytics Setup',
        lessons: 4,
        topics: ['GA4 Installation', 'Event Tracking', 'Custom Dimensions', 'Data Streams']
      }
    ],
    students: 320,
    rating: 4.8,
    reviews: 98
  }
];