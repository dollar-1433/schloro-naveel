import React from 'react';
import { MessageCircle, ThumbsUp, Share2 } from 'lucide-react';

export function ActivityFeed() {
  const activities = [
    {
      user: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      action: 'shared notes on',
      subject: 'Advanced Machine Learning Concepts',
      timeAgo: '5 minutes ago',
      likes: 12,
      comments: 3,
    },
    {
      user: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      action: 'started a discussion about',
      subject: 'React vs Vue in 2025',
      timeAgo: '20 minutes ago',
      likes: 8,
      comments: 5,
    },
    {
      user: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      action: 'created a study group for',
      subject: 'Database Systems',
      timeAgo: '1 hour ago',
      likes: 15,
      comments: 7,
    }
  ];

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex space-x-4">
            <img
              className="h-12 w-12 rounded-full"
              src={activity.avatar}
              alt={activity.user}
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">{activity.user}</span>
                <span className="text-gray-500">{activity.action}</span>
                <span className="font-medium text-gray-900">{activity.subject}</span>
              </div>
              <div className="mt-2 text-sm text-gray-500">{activity.timeAgo}</div>
              <div className="mt-3 flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{activity.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                  <MessageCircle className="h-4 w-4" />
                  <span>{activity.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}