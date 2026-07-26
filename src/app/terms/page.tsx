// src/app/terms/page.tsx

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-100">Rules and guidelines for using TutorHub</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">1. Acceptance of Terms</h2>
            <p>By creating an account on TutorHub, you agree to these Terms of Service. If you do not agree, please do not use our platform.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">2. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate information when creating your account.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">3. Payments & Refunds</h2>
            <p>All payments are processed securely. Refunds are available within 30 days of purchase for courses and 24 hours before scheduled tutoring sessions.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">4. Code of Conduct</h2>
            <p>Users must treat tutors and fellow students with respect. Harassment, hate speech, or any form of discrimination will result in immediate account termination.</p>
          </section>
        </div>
      </div>
    </div>
  );
}