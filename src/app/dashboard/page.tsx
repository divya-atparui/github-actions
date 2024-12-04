'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock data - replace with actual data fetching
const mockStats = {
  totalStudents: 156,
  activeStudents: 142,
  averageGrade: '3.8',
  coursesOffered: 12
};

const mockRecentStudents = [
  { id: 1, name: 'John Doe', grade: '12th', status: 'Active' },
  { id: 2, name: 'Jane Smith', grade: '11th', status: 'Active' },
  { id: 3, name: 'Mike Johnson', grade: '12th', status: 'Inactive' },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search students..."
                  className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Add Student
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{mockStats.totalStudents}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Active Students</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{mockStats.activeStudents}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Average Grade</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{mockStats.averageGrade}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Courses Offered</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{mockStats.coursesOffered}</p>
          </div>
        </div>

        {/* Recent Students */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Students</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {mockRecentStudents.map((student) => (
              <div key={student.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{student.name}</h3>
                  <p className="text-sm text-gray-500">Grade: {student.grade}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {student.status}
                </span>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-gray-200">
            <Link href="/students" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all students →
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <button className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Generate Report
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            Schedule Class
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
            Send Notifications
          </button>
        </div>
      </main>
    </div>
  );
}
