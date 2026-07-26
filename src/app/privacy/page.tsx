// src/app/privacy/page.tsx

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">How we collect, use, and protect your data</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide when creating an account, enrolling in courses, or booking sessions. This includes your name, email address, and payment information.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">2. How We Use Your Information</h2>
            <p>We use your information to provide our services, process payments, send course updates, and improve your learning experience. We never sell your personal data to third parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">3. Data Protection</h2>
            <p>We implement industry-standard security measures to protect your data. All payment information is processed securely through Stripe, and we do not store full credit card details.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">4. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information at any time. Contact us at privacy@tutorhub.com for any data-related requests.</p>
          </section>
        </div>
      </div>
    </div>
  );
}