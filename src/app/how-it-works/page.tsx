// src/app/how-it-works/page.tsx

import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Browse Courses & Tutors',
    description: 'Explore our library of digital marketing courses or find the perfect tutor for 1-on-1 sessions. Filter by topic, level, or price.',
    icon: '🔍',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    number: '02',
    title: 'Enroll or Book a Session',
    description: 'Sign up for a self-paced course or schedule a live session at a time that works for you. Secure payment via Stripe.',
    icon: '📝',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    number: '03',
    title: 'Learn & Practice',
    description: 'Watch video lessons, complete quizzes, download resources, and attend live tutoring sessions with industry experts.',
    icon: '📚',
    color: 'bg-green-100 text-green-600'
  },
  {
    number: '04',
    title: 'Get Certified',
    description: 'Complete your course and pass the final assessment to earn a certificate you can share on LinkedIn and your resume.',
    icon: '🏆',
    color: 'bg-orange-100 text-orange-600'
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-blue-100">Your learning journey in four simple steps</p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start space-x-6 bg-white rounded-xl shadow-sm p-6">
              <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                {step.icon}
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-sm font-bold text-blue-600">{step.number}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses" className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Start Learning Now
          </Link>
        </div>
      </div>
    </div>
  );
}