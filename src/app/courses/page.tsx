// src/app/courses/page.tsx
import Link from 'next/link';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  const categories = ['All', ...new Set(courses.map(c => c.category))];
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-blue-100">
            Choose from {courses.length} digital marketing courses taught by industry experts
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="border rounded-lg px-4 py-2 text-gray-700">
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
              <select className="border rounded-lg px-4 py-2 text-gray-700">
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input type="text" placeholder="Search courses..." className="border rounded-lg px-4 py-2 w-full text-gray-700" />
            </div>
          </div>
        </div>

        {/* Course Grid - NOW DYNAMIC */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className={`h-48 bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                <span className="text-white text-lg font-semibold text-center px-4">{course.title}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">{course.category}</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{course.level}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span>⏱ {course.duration}</span>
                  <span>📚 {course.lessons} lessons</span>
                  <span>⭐ {course.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                  <Link href={`/courses/${course.id}`} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    View Course
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