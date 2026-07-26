// src/app/faq/page.tsx

const faqs = [
  {
    category: 'Courses & Learning',
    questions: [
      { q: 'How do I access my courses?', a: 'After enrolling, your courses appear on your dashboard. You can access them anytime by logging into your account.' },
      { q: 'Can I learn at my own pace?', a: 'Yes! All our recorded courses are self-paced. You can watch lessons whenever it suits your schedule.' },
      { q: 'Do courses have deadlines?', a: 'Self-paced courses have no deadlines. However, if you enroll in a live cohort-based course, there may be scheduled assignment due dates.' },
      { q: 'Are there quizzes and assignments?', a: 'Yes! Most courses include quizzes after each module and a final project or exam to earn your certificate.' }
    ]
  },
  {
    category: 'Live Tutoring',
    questions: [
      { q: 'How do I book a tutoring session?', a: 'Browse our tutors page, select a tutor, and choose an available time slot. You will receive a confirmation email with the session link.' },
      { q: 'What if I need to reschedule?', a: 'You can reschedule up to 24 hours before your session at no extra cost. Late cancellations may incur a fee.' },
      { q: 'What platform do you use for live sessions?', a: 'We use Zoom for all live tutoring sessions. You will receive a link before your scheduled session.' },
      { q: 'Can I choose a specific tutor?', a: 'Absolutely! You can browse tutor profiles, read reviews, and book directly with the tutor of your choice.' }
    ]
  },
  {
    category: 'Payments & Pricing',
    questions: [
      { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, debit cards, and PayPal.' },
      { q: 'Do you offer refunds?', a: 'Yes, we offer a 30-day money-back guarantee on all courses. For tutoring sessions, refunds are available if canceled 24 hours in advance.' },
      { q: 'Can I switch plans?', a: 'Yes, you can upgrade or downgrade your plan anytime. Changes take effect at the start of your next billing cycle.' },
      { q: 'Is there a free trial?', a: 'We offer a 7-day free trial on our Live Learning and Premium plans. No credit card required.' }
    ]
  },
  {
    category: 'Certificates & Career',
    questions: [
      { q: 'Do I get a certificate?', a: 'Yes! Upon completing a course and passing the final assessment, you receive a certificate of completion.' },
      { q: 'Are the certificates recognized?', a: 'Our certificates are recognized by many employers. You can share them on LinkedIn and add them to your resume.' },
      { q: 'Can I get career support?', a: 'Premium plan members get access to career counseling sessions and resume review services.' }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">Find answers to common questions about our platform</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {faqs.map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.category}</h2>
            <div className="space-y-3">
              {section.questions.map((faq, j) => (
                <div key={j} className="bg-white rounded-lg shadow-sm p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12 p-8 bg-blue-600 text-white rounded-xl">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="mb-4">We're here to help. Send us a message and we'll get back to you within 24 hours.</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}