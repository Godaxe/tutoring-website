// src/app/signup/page.tsx
// Signup page

import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-blue-600">TutorHub</Link>
          <h1 className="text-2xl font-bold text-gray-800 mt-6">Create Your Account</h1>
          <p className="text-gray-600 mt-2">Start learning from industry experts today</p>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          {/* Role Selector */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button className="flex-1 bg-white text-gray-800 py-2 rounded-md font-medium shadow-sm">I want to learn</button>
            <button className="flex-1 text-gray-500 py-2 rounded-md font-medium">I want to teach</button>
          </div>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                placeholder="Create a password" 
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input 
                type="password" 
                placeholder="Confirm your password" 
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 mt-1" />
              <span className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <Link href="/terms" className="text-blue-600 hover:text-blue-700">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
              </span>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">Or sign up with</span>
            </div>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border rounded-lg py-3 hover:bg-gray-50 transition">
              <span className="text-lg">G</span>
              <span className="text-sm text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border rounded-lg py-3 hover:bg-gray-50 transition">
              <span className="text-lg">in</span>
              <span className="text-sm text-gray-700">LinkedIn</span>
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 font-medium hover:text-blue-700">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}