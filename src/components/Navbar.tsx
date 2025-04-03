import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, LogOut, User } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <BookOpen className="h-8 w-8" />
              <span className="text-xl font-bold">Scholaro</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/groups" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Groups
            </Link>
            <Link 
              to="/posts" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Posts
            </Link>
            <Link 
              to="/profile" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Profile"
            >
              <User className="h-6 w-6" />
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Logout"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}