// src/app/page.tsx
import Link from 'next/link';
import { courses } from '@/data/courses';
import { testimonials } from '@/data/testimonials';

export default function HomePage() {
  const featuredCourses = courses.slice(0, 3);

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
              <Link href="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Browse Courses
              </Link>
              <Link href="/tutors" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Find a Tutor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Choose Your Course', desc: 'Browse our library of digital marketing courses or book a 1-on-1 session with an expert tutor.', color: 'bg-blue-100 text-blue-600' },
              { step: '2', title: 'Learn at Your Pace', desc: 'Access video lessons, quizzes, and downloadable resources. Schedule live sessions when you need help.', color: 'bg-purple-100 text-purple-600' },
              { step: '3', title: 'Get Certified', desc: 'Complete courses, pass assessments, and earn certificates to showcase your new skills.', color: 'bg-green-100 text-green-600' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses - NOW DYNAMIC */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Popular Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <div key={course.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className={`h-48 bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                  <span className="text-white text-lg font-semibold">{course.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                    <Link href={`/courses/${course.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/courses" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - NOW DYNAMIC */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
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
          <Link href="/signup" className="bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block">
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
}