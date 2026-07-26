// src/app/tutors/[id]/page.tsx
import Link from 'next/link';
import { tutors } from '@/data/tutors';
import { notFound } from 'next/navigation';

export default function TutorProfilePage({ params }: { params: { id: string } }) {
  const tutor = tutors.find(t => t.id === params.id);

  if (!tutor) {
    notFound();
  }

  const reviews = [
    { name: 'Alex Thompson', rating: 5, comment: 'An incredible tutor! Explained complex concepts in a way that was easy to understand. My results improved within weeks.', date: '2 weeks ago' },
    { name: 'Maria Santos', rating: 5, comment: 'Best investment I ever made. Gave me a clear action plan and I saw results immediately. Highly recommend!', date: '1 month ago' },
    { name: 'James Wilson', rating: 4, comment: 'Great tutor with deep knowledge. The live session was extremely valuable and practical.', date: '2 months ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-blue-100 mb-4">
            <Link href="/tutors" className="hover:text-white">Tutors</Link>
            <span>/</span>
            <span>{tutor.name}</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-gray-600">
              {tutor.initials}
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{tutor.name}</h1>
              <p className="text-xl text-blue-100">{tutor.expertise}</p>
              <div className="flex items-center space-x-4 mt-2 text-blue-100">
                <span>⭐ {tutor.rating} ({tutor.reviews} reviews)</span>
                <span>👥 {tutor.students.toLocaleString()} students</span>
                <span>📍 {tutor.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">About Me</h2>
              <p className="text-gray-600">{tutor.longBio}</p>
            </div>

            {/* Skills - NOW DYNAMIC */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {tutor.skills.map(skill => (
                  <span key={skill} className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Student Reviews</h2>
              {reviews.map((review, i) => (
                <div key={i} className={`pb-6 mb-6 ${i < reviews.length - 1 ? 'border-b' : ''}`}>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 mr-3">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="ml-auto text-yellow-400">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Sidebar */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600">
                  ${tutor.hourlyRate}<span className="text-lg text-gray-500">/hour</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">1-on-1 Live Session</p>
              </div>

              {/* Calendar Placeholder */}
              <div className="border rounded-lg p-4 mb-4">
                <div className="text-center mb-3">
                  <p className="font-semibold text-gray-800">July 2026</p>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
                    <div key={d} className="text-gray-400 font-medium">{d}</div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => (
                    <div key={i} className={`py-1 rounded ${i === 14 ? 'bg-blue-600 text-white' : 'hover:bg-blue-50 cursor-pointer text-gray-700'}`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <p className="font-medium text-gray-800 mb-2">Available Times</p>
                <div className="grid grid-cols-3 gap-2">
                  {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'].map(time => (
                    <button key={time} className="border border-blue-200 text-blue-600 py-2 rounded text-sm hover:bg-blue-50 transition">
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3">
                Book a Session
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}