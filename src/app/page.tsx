// src/app/page.tsx
// Homepage - the first thing visitors see

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Master Digital Marketing From Industry Experts
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Learn SEO, Social Media, Google Ads, and more through live 1-on-1 
              sessions and self-paced courses. Start your journey today.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/courses" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Browse Courses
              </Link>
              <Link 
                href="/tutors" 
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Find a Tutor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Choose Your Course</h3>
              <p className="text-gray-600">Browse our library of digital marketing courses or book a 1-on-1 session with an expert tutor.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Learn at Your Pace</h3>
              <p className="text-gray-600">Access video lessons, quizzes, and downloadable resources. Schedule live sessions when you need help.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Get Certified</h3>
              <p className="text-gray-600">Complete courses, pass assessments, and earn certificates to showcase your new skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Popular Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'SEO Fundamentals', desc: 'Learn how search engines work and how to rank your website on Google.', price: '$149', color: 'from-blue-400 to-blue-600', link: '/courses/seo-fundamentals' },
              { title: 'Social Media Marketing', desc: 'Master Instagram, Facebook, LinkedIn, and TikTok marketing strategies.', price: '$129', color: 'from-purple-400 to-pink-600', link: '/courses/social-media-marketing' },
              { title: 'Google Ads Mastery', desc: 'Create and optimize Google Ads campaigns that drive real results.', price: '$199', color: 'from-green-400 to-teal-600', link: '/courses/google-ads-mastery' }
            ].map((course, i) => (
              <div key={i} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className={`h-48 bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                  <span className="text-white text-lg font-semibold">{course.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <Link href={course.link} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/courses" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { initials: 'SR', name: 'Sarah Rodriguez', role: 'Marketing Manager', quote: 'The SEO course completely transformed how I approach our website strategy. Within 3 months, our organic traffic increased by 200%!', color: 'bg-blue-100 text-blue-600' },
              { initials: 'MK', name: 'Michael Kim', role: 'Small Business Owner', quote: 'The 1-on-1 tutoring sessions were a game-changer. My tutor helped me set up my first Google Ads campaign that actually made money!', color: 'bg-purple-100 text-purple-600' },
              { initials: 'EJ', name: 'Emily Johnson', role: 'Freelance Consultant', quote: 'I landed three new clients after completing the social media marketing course. The practical assignments made all the difference.', color: 'bg-green-100 text-green-600' }
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-4">"{t.quote}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center font-bold`}>{t.initials}</div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8">Join hundreds of students who are already mastering digital marketing skills.</p>
          <Link href="/signup" className="bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block">Get Started for Free</Link>
        </div>
      </section>
    </div>
  );
}