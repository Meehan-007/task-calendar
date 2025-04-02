"use client";

import React, { useState } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  day: string;
}

export default function Home() { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const showModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setTitle('');
    setDescription('');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a new task as a post-it note
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      day: "Wednesday" // Default to Wednesday
    };
    
    // Add the task to our tasks array
    setTasks([...tasks, newTask]);
    console.log('New task:', newTask);
    closeModal();
  }

  return (
    <div className="min-h-screen bg-[#1e1b4b] p-4">
      <div className="grid grid-cols-7 gap-4 h-[calc(100vh-2rem)]">
        {/* Calendar Columns */}
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
          <div key={day} className="flex flex-col h-full rounded-2xl overflow-hidden">
            {/* Day header - light blue */}
            <div className="bg-[#b8c1ff] py-3 px-4 text-center">
              <h2 className="text-[#1e1b4b] font-medium">{day}</h2>
            </div>
            
            {/* Day content area - medium blue with grid lines */}
            <div className="bg-[#4254c5] flex-grow relative">
              {/* Grid lines */}
              {[...Array(24)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-full border-t border-[#5a6ac9]" 
                  style={{ top: `${(i + 1) * (100 / 24)}%` }}
                />
              ))}
              
              {/* Post-it notes */}
              {tasks.filter(task => task.day === day).map((task) => (
                <div 
                  key={task.id}
                  className="absolute p-2 bg-yellow-200 rounded shadow-md w-[90%] left-[5%] top-[10%] z-10"
                  style={{ minHeight: '80px' }}
                >
                  <h3 className="font-bold text-gray-800 text-sm truncate">{task.title}</h3>
                  <p className="text-xs text-gray-700 overflow-hidden line-clamp-3">{task.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-6 left-6 p-4 bg-[#ff7b7b] rounded-xl text-white hover:bg-[#ff6b6b] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
      
      <button className="fixed bottom-6 right-6 p-4 bg-[#67e8f9] rounded-xl text-white hover:bg-[#22d3ee] transition-colors" onClick={showModal}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-md overflow-hidden">
            <div className="p-4 bg-[#4254c5] text-white">
              <h3 className="text-lg font-medium">Add New Task</h3>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4254c5] focus:ring-[#4254c5] p-2 border"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4254c5] focus:ring-[#4254c5] p-2 border"
                />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#4254c5] text-white rounded-md hover:bg-[#3245b6]"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 