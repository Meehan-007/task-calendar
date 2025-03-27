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
    </div>
  );
} 