import React from 'react';
import { TrendingUp } from 'lucide-react';

export function TrendingTopics() {
  const topics = [
    { name: 'Artificial Intelligence', posts: 156, trend: '+12%' },
    { name: 'Data Science', posts: 124, trend: '+8%' },
    { name: 'Web Development', posts: 98, trend: '+5%' },
    { name: 'Cybersecurity', posts: 87, trend: '+15%' },
  ];

  return (
    <div className="card p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="h-5 w-5 text-indigo-600" />
        <h3 className="text-lg font-semibold">Trending Topics</h3>
      </div>
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div>
              <p className="font-medium text-gray-900">{topic.name}</p>
              <p className="text-sm text-gray-500">{topic.posts} posts</p>
            </div>
            <span className="text-green-600 text-sm font-medium">{topic.trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
}