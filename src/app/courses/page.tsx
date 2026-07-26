// src/app/courses/page.tsx
// Shows all available courses with filters

import Link from 'next/link';

const courses = [
  {
    id: 'seo-fundamentals',
    title: 'SEO Fundamentals',
    description: 'Learn how search engines work, keyword research, on-page and off-page SEO.',
    price: 149,
    category: 'SEO',
    level: 'Beginner',
    duration: '6 weeks',
    lessons: 24,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Master Instagram, Facebook, LinkedIn, and TikTok marketing strategies.',
    price: 129,
    category: 'Social Media',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 32,
    color: 'from-purple-400 to-pink-600'
  },
  {
    id: 'google-ads-mastery',
    title: 'Google Ads Mastery',
    description: 'Create and optimize Google Ads campaigns that drive real results.',
    price: 199,
    category: 'PPC',
    level: 'Advanced',
    duration: '4 weeks',
    lessons: 16,
    color: 'from-green-400 to-teal-600'
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing Strategy',
    description: 'Create compelling content that attracts and converts your target audience.',
    price: 99,
    category: 'Content',
    level: 'Beginner',
    duration: '5 weeks',
    lessons: 20,
    color: 'from-orange-400 to-red-600'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing Pro',
    description: 'Build email lists, create automated sequences, and increase conversions.',
    price: 89,
    category: 'Email',
    level: 'Intermediate',
    duration: '3 weeks',
    lessons: 12,
    color: 'from-yellow-400 to-orange-600'
  },
  {
    id: 'analytics',
    title: 'Analytics & Data-Driven Marketing',
    description: 'Use Google Analytics and data to make informed marketing decisions.',
    price: 179,
    category: 'Analytics',
    level: 'Advanced',
    duration: '6 weeks',
    lessons: 24,
    color: 'from-indigo-400 to-purple-600'
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-blue-100">Choose from a variety of digital marketing courses taught by industry experts</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="border rounded-lg px-4 py-2 text-gray-700">
                <option>All</option>
                <option>SEO</option>
                <option>Social Media</option>
                <option>PPC</option>
                <option>Content</option>
                <option>Email</option>
                <option>Analytics</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
              <select className="border rounded-lg px-4 py-2 text-gray-700">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input type="text" placeholder="Search courses..." className="border rounded-lg px-4 py-2 w-full text-gray-700" />
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className={`h-48 bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                <span className="text-white text-lg font-semibold text-center px-4">{course.title}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">{course.category}</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{course.level}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span>⏱ {course.duration}</span>
                  <span>📚 {course.lessons} lessons</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                  <Link href={`/courses/${course.id}`} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">View Course</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}