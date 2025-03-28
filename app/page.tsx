export default function Home() {
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
            </div>
          </div>
           
        ))}
      </div>

      <button className="fixed bottom-6 left-6 p-4 bg-[#ff7b7b] rounded-xl text-white hover:bg-[#ff6b6b] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
      
      <button className="fixed bottom-6 right-6 p-4 bg-[#67e8f9] rounded-xl text-white hover:bg-[#22d3ee] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
} 