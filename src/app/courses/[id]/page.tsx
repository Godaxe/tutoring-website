// src/app/courses/[id]/page.tsx
import Link from 'next/link';
import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courses.find(c => c.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-blue-100 mb-4">
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <span>/</span>
            <span>{course.title}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl text-blue-100 mb-6">{course.longDescription}</p>
          <div className="flex items-center space-x-6 text-blue-100">
            <span>⭐ {course.rating} ({course.reviews} reviews)</span>
            <span>👥 {course.students.toLocaleString()} students</span>
            <span>⏱ {course.duration}</span>
            <span>📚 {course.lessons} lessons</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {course.learningPoints.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Course Curriculum</h2>
              {course.curriculum.map((mod, i) => (
                <div key={i} className="border rounded-lg mb-4">
                  <div className="p-4 bg-gray-50 flex justify-between items-center rounded-t-lg">
                    <h3 className="font-semibold text-gray-800">{mod.module}</h3>
                    <span className="text-sm text-gray-500">{mod.lessons} Lessons</span>
                  </div>
                  <div className="p-4 space-y-3">
                    {mod.topics.map((topic, j) => (
                      <div key={j} className="flex items-center space-x-3 text-gray-700">
                        <span className="text-blue-500">▶</span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Instructor</h2>
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600">
                  {course.instructor.initials}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{course.instructor.name}</h3>
                  <p className="text-blue-600 mb-2">{course.instructor.role}</p>
                  <p className="text-gray-600">{course.instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-6">
                <span className="text-6xl text-gray-400">▶</span>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-4">${course.price}</div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3">Enroll Now</button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition mb-6">Add to Wishlist</button>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between"><span>Duration</span><span className="font-semibold">{course.duration}</span></div>
                <div className="flex justify-between"><span>Lessons</span><span className="font-semibold">{course.lessons}</span></div>
                <div className="flex justify-between"><span>Skill Level</span><span className="font-semibold">{course.level}</span></div>
                <div className="flex justify-between"><span>Certificate</span><span className="font-semibold text-green-600">Yes</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}