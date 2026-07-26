// src/app/dashboard/page.tsx
import Link from 'next/link';
import { courses } from '@/data/courses';
import { enrolledCourses, upcomingSessions, recentActivity } from '@/data/dashboard';

export default function DashboardPage() {
  const totalCompletedLessons = enrolledCourses.reduce((total, ec) => {
    const course = courses.find(c => c.id === ec.courseId);
    return total + Math.round((ec.progress / 100) * (course?.lessons || 0));
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome back, Alex!</h1>
              <p className="text-gray-600">Keep up the great work on your learning journey.</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative text-gray-600 hover:text-blue-600">
                🔔
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats - NOW DYNAMIC */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Enrolled Courses', value: enrolledCourses.length, icon: '📚', color: 'bg-blue-100 text-blue-600' },
                { label: 'Completed Lessons', value: totalCompletedLessons, icon: '✅', color: 'bg-green-100 text-green-600' },
                { label: 'Certificates', value: 2, icon: '🏆', color: 'bg-purple-100 text-purple-600' }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-lg`}>{stat.icon}</div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enrolled Courses - NOW DYNAMIC */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">My Courses</h2>
              <div className="space-y-4">
                {enrolledCourses.map(ec => {
                  const course = courses.find(c => c.id === ec.courseId);
                  if (!course) return null;
                  return (
                    <div key={ec.courseId} className="bg-white rounded-xl shadow-sm p-5">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${course.color} flex-shrink-0 flex items-center justify-center text-white font-bold text-sm text-center`}>
                          {course.title.split(' ')[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-gray-800">{course.title}</h3>
                              <p className="text-sm text-gray-500">Instructor: {course.instructor.name}</p>
                            </div>
                            <span className="text-sm text-orange-600 font-medium">Due: {ec.dueDate}</span>
                          </div>
                          <div className="mt-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Progress</span>
                              <span className="text-blue-600 font-medium">{ec.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${ec.progress}%` }}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-3">
                            <p className="text-sm text-gray-500">
                              📖 Next: <span className="text-gray-700">{ec.nextLesson}</span>
                            </p>
                            <Link href={`/courses/${ec.courseId}`} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition">
                              Continue
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions - NOW DYNAMIC */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-semibold text-gray-800 mb-4">Upcoming Sessions</h3>
              <div className="space-y-4">
                {upcomingSessions.map(session => (
                  <div key={session.id} className="border rounded-lg p-3">
                    <div className="mb-2">
                      <p className="font-medium text-gray-800 text-sm">{session.topic}</p>
                      <p className="text-xs text-gray-500">with {session.tutor}</p>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mb-2 space-x-3">
                      <span>📅 {session.date}</span>
                      <span>🕐 {session.time}</span>
                    </div>
                    <button className="w-full bg-green-600 text-white py-1.5 rounded text-sm hover:bg-green-700 transition">
                      Join Session
                    </button>
                  </div>
                ))}
              </div>
              <Link href="/tutors" className="block text-center text-blue-600 text-sm mt-4 hover:text-blue-700">
                Book New Session →
              </Link>
            </div>

            {/* Recent Activity - NOW DYNAMIC */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm text-gray-700">{activity.text}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: 'My Certificates', link: '/dashboard/certificates', icon: '🏆' },
                  { label: 'Messages', link: '/dashboard/messages', icon: '💬' },
                  { label: 'Wishlist', link: '/dashboard/wishlist', icon: '❤️' },
                  { label: 'Settings', link: '/dashboard/settings', icon: '⚙️' }
                ].map((link, i) => (
                  <Link key={i} href={link.link} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition text-gray-700">
                    <span>{link.icon}</span>
                    <span className="text-sm">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}