// src/data/testimonials.ts

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  quote: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    initials: 'SR',
    name: 'Sarah Rodriguez',
    role: 'Marketing Manager',
    quote: 'The SEO course completely transformed how I approach our website strategy. Within 3 months, our organic traffic increased by 200%!',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    initials: 'MK',
    name: 'Michael Kim',
    role: 'Small Business Owner',
    quote: 'The 1-on-1 tutoring sessions were a game-changer. My tutor helped me set up my first Google Ads campaign that actually made money!',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    initials: 'EJ',
    name: 'Emily Johnson',
    role: 'Freelance Consultant',
    quote: 'I landed three new clients after completing the social media marketing course. The practical assignments made all the difference.',
    color: 'bg-green-100 text-green-600'
  }
];