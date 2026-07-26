// src/data/tutors.ts

export interface Tutor {
  id: string;
  name: string;
  initials: string;
  expertise: string;
  rating: number;
  reviews: number;
  students: number;
  hourlyRate: number;
  bio: string;
  longBio: string;
  skills: string[];
  color: string;
  location: string;
}

export const tutors: Tutor[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    initials: 'JD',
    expertise: 'SEO & Content Marketing',
    rating: 4.9,
    reviews: 342,
    students: 1200,
    hourlyRate: 79,
    bio: '10+ years in SEO. Helped Fortune 500 companies rank #1 on Google.',
    longBio: 'I have been working in SEO for over 10 years, helping businesses of all sizes improve their search engine rankings. I have worked with Fortune 500 companies and startups alike, and I am passionate about teaching others how to master SEO.',
    skills: ['SEO', 'Keyword Research', 'Technical SEO', 'Link Building', 'Content Marketing', 'Google Analytics', 'Google Search Console', 'Local SEO', 'E-commerce SEO', 'WordPress SEO'],
    color: 'from-blue-400 to-blue-600',
    location: 'San Francisco, CA'
  },
  {
    id: 'sarah-smith',
    name: 'Sarah Smith',
    initials: 'SS',
    expertise: 'Social Media Marketing',
    rating: 4.8,
    reviews: 256,
    students: 890,
    hourlyRate: 69,
    bio: 'Social media strategist who grew brands from 0 to 100K followers.',
    longBio: 'I am a social media strategist with experience growing brands across Instagram, TikTok, Facebook, and LinkedIn. My teaching style is hands-on with real examples from campaigns I have managed.',
    skills: ['Instagram', 'TikTok', 'Facebook Ads', 'LinkedIn', 'Content Creation', 'Community Management', 'Influencer Marketing', 'Social Analytics'],
    color: 'from-purple-400 to-pink-600',
    location: 'New York, NY'
  },
  {
    id: 'mike-chen',
    name: 'Mike Chen',
    initials: 'MC',
    expertise: 'Google Ads & PPC',
    rating: 4.9,
    reviews: 189,
    students: 670,
    hourlyRate: 89,
    bio: 'Ex-Google employee. Managed over $10M in ad spend for clients.',
    longBio: 'I spent 5 years at Google working on the Ads team before starting my own consulting business. I have managed over $10M in ad spend and helped hundreds of businesses optimize their PPC campaigns.',
    skills: ['Google Ads', 'Bing Ads', 'Remarketing', 'Display Ads', 'Video Ads', 'Shopping Ads', 'Performance Max', 'Keyword Research'],
    color: 'from-green-400 to-teal-600',
    location: 'Austin, TX'
  },
  {
    id: 'emma-williams',
    name: 'Emma Williams',
    initials: 'EW',
    expertise: 'Email Marketing',
    rating: 4.7,
    reviews: 145,
    students: 450,
    hourlyRate: 59,
    bio: 'Email marketing specialist with 20%+ average conversion rates.',
    longBio: 'I specialize in email marketing automation for e-commerce brands. My email sequences consistently achieve open rates above 30% and conversion rates above 20%.',
    skills: ['Mailchimp', 'Klaviyo', 'Automation', 'Newsletter Strategy', 'A/B Testing', 'List Building', 'Segmentation'],
    color: 'from-orange-400 to-red-600',
    location: 'Chicago, IL'
  },
  {
    id: 'david-brown',
    name: 'David Brown',
    initials: 'DB',
    expertise: 'Web Analytics',
    rating: 4.8,
    reviews: 98,
    students: 320,
    hourlyRate: 74,
    bio: 'Data-driven marketer who turns analytics into actionable insights.',
    longBio: 'I help marketers and business owners make sense of their data. Certified in Google Analytics 4 and Looker Studio, I teach practical analytics skills you can apply immediately.',
    skills: ['Google Analytics 4', 'Looker Studio', 'Tag Manager', 'Data Visualization', 'Conversion Tracking', 'Attribution'],
    color: 'from-indigo-400 to-purple-600',
    location: 'Seattle, WA'
  },
  {
    id: 'lisa-garcia',
    name: 'Lisa Garcia',
    initials: 'LG',
    expertise: 'Content Strategy',
    rating: 4.6,
    reviews: 112,
    students: 380,
    hourlyRate: 64,
    bio: 'Content strategist for B2B and B2C brands. Blogging and copywriting expert.',
    longBio: 'I have helped over 50 brands develop content strategies that drive organic traffic and generate leads. My approach combines creative storytelling with data-driven optimization.',
    skills: ['Blog Writing', 'Copywriting', 'Content Planning', 'SEO Writing', 'Content Distribution', 'Editorial Calendar'],
    color: 'from-yellow-400 to-orange-600',
    location: 'Denver, CO'
  }
];