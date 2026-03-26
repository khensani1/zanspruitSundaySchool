import React, { useState } from 'react';
import { Search, CheckCircle, Circle, User, Heart } from 'lucide-react';

function MarkAttendance() {
  // Added "isZccMember" to our mock data
  const [students, setStudents] = useState([
    { id: 1, name: "Khensani Molefe", ageGroup: "Junior", isZccMember: true, present: false },
    { id: 2, name: "Thabo Ndlovu", ageGroup: "Teen", isZccMember: true, present: false },
    { id: 3, name: "Lerato Sebeko", ageGroup: "Toddler", isZccMember: false, present: false },
    { id: 4, name: "Junior Mbeki", ageGroup: "Junior", isZccMember: true, present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, present: !s.present } : s
    ));
  };

  return (
    <div className="max-w-4xl animate-in fade-in duration-500">
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-3.5 text-ss-taupe" size={20} />
        <input 
          type="text" 
          placeholder="Search for a child..." 
          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-ss-taupe/20 focus:outline-none focus:ring-2 focus:ring-ss-gold bg-white shadow-sm font-medium"
        />
      </div>

      {/* Attendance List Card */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-ss-taupe/20 overflow-hidden">
        <div className="p-6 border-b border-ss-taupe/10 flex justify-between items-center bg-ss-taupe/5">
          <span className="font-bold text-ss-green uppercase tracking-wider text-sm">Child's Details</span>
          <span className="font-bold text-ss-green uppercase tracking-wider text-sm">Attendance Status</span>
        </div>

        <div className="divide-y divide-ss-taupe/10">
          {students.map((student) => (
            <div 
              key={student.id} 
              className="p-6 flex items-center justify-between hover:bg-ss-taupe/5 transition-all"
            >
              <div className="flex items-center gap-4">
                {/* User Icon with specific ZCC styling if member */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${student.isZccMember ? 'bg-ss-gold/20 text-ss-gold' : 'bg-ss-taupe/10 text-ss-taupe'}`}>
                  <User size={24} />
                </div>
                
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-ss-green text-lg leading-tight">{student.name}</p>
                    {/* The ZCC Membership Badge */}
                    {student.isZccMember && (
                      <span className="flex items-center gap-1 bg-ss-gold/10 text-ss-gold text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-tighter border border-ss-gold/20">
                        <Heart size={10} fill="#C79803" /> ZCC Member
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ss-taupe font-bold uppercase tracking-widest mt-1">{student.ageGroup}</p>
                </div>
              </div>

              {/* Toggle Button */}
              <button 
                onClick={() => toggleAttendance(student.id)}
                className={`flex items-center gap-3 px-8 py-3 rounded-2xl font-bold transition-all shadow-sm active:scale-95
                  ${student.present 
                    ? 'bg-ss-green text-white shadow-ss-green/20' 
                    : 'bg-ss-taupe/10 text-ss-taupe hover:bg-ss-taupe/20 border border-ss-taupe/20'}`}
              >
                {student.present ? <CheckCircle size={20} /> : <Circle size={20} />}
                {student.present ? 'Present' : 'Mark Present'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-8 flex items-center justify-between bg-ss-green/5 p-6 rounded-3xl border border-ss-green/10">
        <p className="text-ss-green font-bold">
          Total Present: <span className="text-2xl ml-2">{students.filter(s => s.present).length}</span>
        </p>
        <button className="bg-ss-blue hover:bg-blue-800 text-white font-bold py-4 px-12 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95">
          Submit Today's Register
        </button>
      </div>
    </div>
  );
}

export default MarkAttendance;