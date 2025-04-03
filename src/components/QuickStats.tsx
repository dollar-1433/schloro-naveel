import React from 'react';
import { Users, BookOpen, MessageSquare, Trophy } from 'lucide-react';

export function QuickStats() {
  const stats = [
    { name: 'Active Users', value: '2.7k+', icon: Users },
    { name: 'Study Notes', value: '15k+', icon: BookOpen },
    { name: 'Daily Messages', value: '8.2k+', icon: MessageSquare },
    { name: 'Success Rate', value: '94%', icon: Trophy },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="card p-6 flex items-center space-x-4">
            <div className="rounded-full bg-indigo-100 p-3">
              <Icon className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}