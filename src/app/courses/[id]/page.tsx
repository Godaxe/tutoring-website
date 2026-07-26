// src/app/courses/[id]/page.tsx
// Individual course detail page

import Link from 'next/link';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-blue-100 mb-4">
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <span>/</span>
            <span>SEO Fundamentals</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">SEO Fundamentals</h1>
          <p className="text-xl text-blue-100 mb-6">Master the art and science of search engine optimization</p>
          <div className="flex items-center space-x-6 text-blue-100">
            <span>⭐ 4.8 (234 reviews)</span>
            <span>👥 1,234 students</span>
            <span>⏱ 6 weeks</span>
            <span>📚 24 lessons</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What You'll Learn */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Understanding how search engines work',
                  'Keyword research and analysis',
                  'On-page SEO optimization',
                  'Technical SEO fundamentals',
                  'Link building strategies',
                  'Local SEO optimization',
                  'SEO tools and analytics',
                  'Creating an SEO strategy'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Course Curriculum</h2>
              
              {[
                { module: 'Module 1: Introduction to SEO', lessons: 4, topics: ['What is SEO and Why It Matters', 'How Search Engines Work', 'Types of SEO: White Hat vs Black Hat', 'Setting Up Your SEO Tool Stack'] },
                { module: 'Module 2: Keyword Research', lessons: 6, topics: ['Understanding Search Intent', 'Finding Seed Keywords', 'Using Keyword Research Tools', 'Competitor Keyword Analysis', 'Long-tail Keywords Strategy', 'Creating a Keyword Map'] },
                { module: 'Module 3: On-Page SEO', lessons: 8, topics: ['Title Tags and Meta Descriptions', 'Header Tags Optimization', 'Content Optimization', 'Image SEO', 'Internal Linking Strategy', 'URL Structure Best Practices', 'Schema Markup Basics', 'On-Page SEO Checklist'] },
                { module: 'Module 4: Technical SEO', lessons: 6, topics: ['Site Architecture', 'XML Sitemaps', 'Robots.txt', 'Page Speed Optimization', 'Mobile Optimization', 'Fixing Crawl Errors'] }
              ].map((mod, i) => (
                <div key={i} className="border rounded-lg mb-4">
                  <div className="p-4 bg-gray-50 flex justify-between items-center rounded-t-lg">
                    <h3 className="font-semibold text-gray-800">{mod.module}</h3>
                    <span className="text-sm text-gray-500">{mod.lessons} Lessons</span>
                  </div>
                  <div className="p-4 space-y-3">
                    {mod.topics.map((topic, j) => (
                      <div key={j} className="flex items-center space-x-3 text-gray-700">
                        <span className="text-blue-500">▶</span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Instructor</h2>
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600">JD</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                  <p className="text-blue-600 mb-2">Senior SEO Specialist</p>
                  <p className="text-gray-600">10+ years of experience in SEO. Worked with Fortune 500 companies and helped over 5,000 students master search engine optimization.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-6">
                <span className="text-6xl text-gray-400">▶</span>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-4">$149</div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3">Enroll Now</button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition mb-6">Add to Wishlist</button>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between"><span>Duration</span><span className="font-semibold">6 weeks</span></div>
                <div className="flex justify-between"><span>Lessons</span><span className="font-semibold">24</span></div>
                <div className="flex justify-between"><span>Skill Level</span><span className="font-semibold">Beginner</span></div>
                <div className="flex justify-between"><span>Certificate</span><span className="font-semibold text-green-600">Yes</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}