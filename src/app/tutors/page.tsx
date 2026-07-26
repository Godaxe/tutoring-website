// src/app/tutors/page.tsx
import Link from 'next/link';
import { tutors } from '@/data/tutors';

export default function TutorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Tutor</h1>
          <p className="text-xl text-blue-100">Learn from {tutors.length} industry experts with real-world experience</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Tutors</label>
              <input type="text" placeholder="Search by name or skill..." className="border rounded-lg px-4 py-2 w-full text-gray-700" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expertise</label>
              <select className="border rounded-lg px-4 py-2 text-gray-700">
                <option>All</option>
                <option>SEO</option>
                <option>Social Media</option>
                <option>PPC</option>
                <option>Email Marketing</option>
                <option>Analytics</option>
                <option>Content</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select className="border rounded-lg px-4 py-2 text-gray-700">
                <option>Any Price</option>
                <option>Under $60/hr</option>
                <option>$60 - $80/hr</option>
                <option>$80+/hr</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tutor Grid - NOW DYNAMIC */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map(tutor => (
            <div key={tutor.id} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className={`h-32 bg-gradient-to-r ${tutor.color} relative`}>
                <div className="absolute -bottom-10 left-6">
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-white shadow flex items-center justify-center text-2xl font-bold text-gray-600">
                    {tutor.initials}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-12">
                <h3 className="text-xl font-semibold text-gray-800">{tutor.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{tutor.expertise}</p>
                <p className="text-gray-600 text-sm mb-3">{tutor.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutor.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{skill}</span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span>⭐ {tutor.rating} ({tutor.reviews})</span>
                  <span>👥 {tutor.students} students</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">${tutor.hourlyRate}</span>
                    <span className="text-gray-500 text-sm">/hour</span>
                  </div>
                  <Link href={`/tutors/${tutor.id}`} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}