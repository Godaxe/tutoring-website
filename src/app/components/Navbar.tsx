import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            TutorHub
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition">Courses</Link>
            <Link href="/tutors" className="text-gray-600 hover:text-blue-600 transition">Tutors</Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600 transition">How It Works</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-blue-600 transition">Log In</Link>
            <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}