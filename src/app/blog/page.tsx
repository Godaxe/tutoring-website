// src/app/blog/page.tsx

import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: '10 SEO Trends You Need to Know in 2026',
    excerpt: 'Stay ahead of the curve with these emerging SEO trends that will shape the digital marketing landscape.',
    category: 'SEO',
    date: 'Jul 20, 2026',
    readTime: '5 min read',
    image: 'from-blue-400 to-blue-600',
    author: 'John Doe'
  },
  {
    id: 2,
    title: 'How to Create a Social Media Strategy That Converts',
    excerpt: 'Learn the step-by-step process to build a social media strategy that drives real business results.',
    category: 'Social Media',
    date: 'Jul 18, 2026',
    readTime: '7 min read',
    image: 'from-purple-400 to-pink-600',
    author: 'Sarah Smith'
  },
  {
    id: 3,
    title: 'Google Ads vs Facebook Ads: Which Is Better?',
    excerpt: 'A detailed comparison of the two advertising giants to help you choose the right platform for your business.',
    category: 'PPC',
    date: 'Jul 15, 2026',
    readTime: '6 min read',
    image: 'from-green-400 to-teal-600',
    author: 'Mike Chen'
  },
  {
    id: 4,
    title: 'Email Marketing Best Practices for 2026',
    excerpt: 'Discover the latest email marketing strategies that top marketers are using to boost open rates and conversions.',
    category: 'Email',
    date: 'Jul 12, 2026',
    readTime: '4 min read',
    image: 'from-orange-400 to-red-600',
    author: 'Emma Williams'
  },
  {
    id: 5,
    title: 'Beginner\'s Guide to Google Analytics 4',
    excerpt: 'Everything you need to know to get started with GA4 and make data-driven marketing decisions.',
    category: 'Analytics',
    date: 'Jul 10, 2026',
    readTime: '8 min read',
    image: 'from-indigo-400 to-purple-600',
    author: 'David Brown'
  },
  {
    id: 6,
    title: 'Content Marketing Ideas for Small Businesses',
    excerpt: 'Creative and budget-friendly content marketing ideas that small business owners can implement today.',
    category: 'Content',
    date: 'Jul 8, 2026',
    readTime: '5 min read',
    image: 'from-yellow-400 to-orange-600',
    author: 'Lisa Garcia'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">TutorHub Blog</h1>
          <p className="text-xl text-blue-100">Tips, tutorials, and insights from our expert tutors</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className={`h-48 bg-gradient-to-r ${post.image} flex items-center justify-center`}>
                <span className="text-white text-4xl">📝</span>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="text-xs text-gray-500">• {post.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link href={`/blog/${post.id}`} className="text-blue-600 text-sm font-medium hover:text-blue-700">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}