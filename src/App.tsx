import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AuthProvider } from './contexts/AuthContext';
import { TrendingTopics } from './components/TrendingTopics';
import { ActivityFeed } from './components/ActivityFeed';
import { QuickStats } from './components/QuickStats';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8 max-w-7xl">
            <Routes>
              <Route path="/login" element={
                <div className="max-w-md mx-auto card p-6">
                  <h2 className="text-2xl font-bold mb-4">Login</h2>
                  <p className="text-gray-600">Login page coming soon</p>
                </div>
              } />
              <Route path="/register" element={
                <div className="max-w-md mx-auto card p-6">
                  <h2 className="text-2xl font-bold mb-4">Register</h2>
                  <p className="text-gray-600">Register page coming soon</p>
                </div>
              } />
              <Route path="/profile" element={
                <div className="max-w-2xl mx-auto card p-6">
                  <h2 className="text-2xl font-bold mb-4">Profile</h2>
                  <p className="text-gray-600">Profile page coming soon</p>
                </div>
              } />
              <Route path="/groups" element={
                <div className="card p-6">
                  <h2 className="text-2xl font-bold mb-4">Groups</h2>
                  <p className="text-gray-600">Groups page coming soon</p>
                </div>
              } />
              <Route path="/posts" element={
                <div className="card p-6">
                  <h2 className="text-2xl font-bold mb-4">Posts</h2>
                  <p className="text-gray-600">Posts page coming soon</p>
                </div>
              } />
              <Route path="/" element={
                <div className="space-y-8">
                  {/* Hero Section */}
                  <div className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl">
                    <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
                    <div className="relative px-6 py-16 sm:px-8 sm:py-24 lg:py-32 lg:px-12">
                      <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                          Welcome to Scholaro
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-indigo-100">
                          Your AI-powered platform for collaborative learning. Connect with peers, share knowledge, and excel in your studies.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                          <a href="/register" className="btn bg-white text-indigo-600 hover:bg-indigo-50">
                            Get started
                          </a>
                          <a href="/about" className="text-sm font-semibold leading-6 text-white">
                            Learn more <span aria-hidden="true">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <QuickStats />

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Activity Feed */}
                    <div className="lg:col-span-2 space-y-6">
                      <ActivityFeed />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      <TrendingTopics />
                      
                      {/* Study Groups */}
                      <div className="card p-6">
                        <h3 className="text-lg font-semibold mb-4">Popular Study Groups</h3>
                        <div className="space-y-4">
                          {[
                            { name: 'Machine Learning', members: 128 },
                            { name: 'Web Development', members: 95 },
                            { name: 'Data Structures', members: 76 }
                          ].map((group, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                              <span className="font-medium">{group.name}</span>
                              <span className="text-sm text-gray-500">{group.members} members</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;