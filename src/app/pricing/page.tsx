// src/app/pricing/page.tsx
// Pricing plans page

import Link from 'next/link';

const plans = [
  {
    name: 'Self-Study',
    price: 29,
    period: 'month',
    description: 'Access our library of recorded courses at your own pace.',
    color: 'border-gray-200',
    buttonColor: 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    popular: false,
    features: [
      'Access to all recorded courses',
      'Downloadable resources',
      'Course completion certificates',
      'Community forum access',
      'Email support',
      'Mobile app access'
    ],
    notIncluded: ['Live tutoring sessions', 'Personalized feedback', '1-on-1 mentoring']
  },
  {
    name: 'Live Learning',
    price: 79,
    period: 'month',
    description: 'Includes live group classes and 2 private sessions per month.',
    color: 'border-blue-600',
    buttonColor: 'bg-blue-600 text-white hover:bg-blue-700',
    popular: true,
    features: [
      'Everything in Self-Study',
      'Live group classes (4/month)',
      '2 private tutoring sessions',
      'Personalized learning plan',
      'Priority email support',
      'Homework review & feedback',
      'Student community chat'
    ],
    notIncluded: ['Unlimited private sessions']
  },
  {
    name: 'Premium',
    price: 199,
    period: 'month',
    description: 'Unlimited private tutoring and complete access to everything.',
    color: 'border-purple-600',
    buttonColor: 'bg-purple-600 text-white hover:bg-purple-700',
    popular: false,
    features: [
      'Everything in Live Learning',
      'Unlimited private sessions',
      'Custom curriculum design',
      'Weekly progress reports',
      'Direct tutor messaging',
      'Career counseling sessions',
      'Early access to new courses',
      'VIP support 24/7'
    ],
    notIncluded: []
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100">Choose the plan that works best for your learning goals</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`bg-white rounded-xl shadow-sm border-2 ${plan.color} relative ${plan.popular ? 'scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-800">${plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <Link href="/signup" className={`block text-center py-3 rounded-lg font-semibold transition mb-6 ${plan.buttonColor}`}>
                  Get Started
                </Link>
                
                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-2 text-sm">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-2 text-sm">
                      <span className="text-gray-300 mt-0.5">✕</span>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'Can I switch plans later?', a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.' },
            { q: 'Is there a free trial?', a: 'We offer a 7-day free trial on all plans. No credit card required to start.' },
            { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel your subscription at any time with no cancellation fees.' },
            { q: 'Do you offer refunds?', a: 'We offer a 30-day money-back guarantee if you are not satisfied with our service.' }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="font-semibold text-gray-800 mb-1">{faq.q}</h3>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}