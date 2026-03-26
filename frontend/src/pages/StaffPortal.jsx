import React, { useState } from 'react';
import { Mail, Phone, ShieldCheck, UserCircle, Plus, MoreVertical } from 'lucide-react';

function StaffPortal() {
  // Mock data for the FI69 staff team
  const [staff, setStaff] = useState([
    { id: 1, name: "Khensani Molefe", role: "Senior Coordinator", email: "khensani@church.org", phone: "071 234 5678", status: "Active" },
    { id: 2, name: "Samuel Dlamini", role: "Junior Teacher", email: "sam@church.org", phone: "082 345 6789", status: "Active" },
    { id: 3, name: "Grace Phiri", role: "Volunteer", email: "grace@church.org", phone: "061 456 7890", status: "Away" },
  ]);

  return (
    <div className="max-w-5xl animate-in fade-in duration-500">
      
      {/* Top Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-ss-green uppercase tracking-wider">Church Staff Directory</h3>
        <button className="flex items-center gap-2 bg-ss-gold text-ss-green font-black px-6 py-2 rounded-xl shadow-md hover:scale-105 transition">
          <Plus size={20} /> Add Staff Member
        </button>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((person) => (
          <div key={person.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-ss-taupe/20 hover:shadow-md transition-shadow relative overflow-hidden">
            
            {/* Status Ribbon */}
            <div className={`absolute top-0 right-0 px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-bl-xl shadow-sm ${person.status === 'Active' ? 'bg-ss-green text-white' : 'bg-ss-taupe/20 text-ss-taupe'}`}>
              {person.status}
            </div>

            <div className="flex flex-col items-center text-center mt-4">
              <div className="w-20 h-20 bg-ss-taupe/10 rounded-full flex items-center justify-center text-ss-taupe mb-4 border-2 border-dashed border-ss-taupe/30">
                <UserCircle size={48} strokeWidth={1.5} />
              </div>
              
              <h4 className="text-xl font-bold text-ss-green leading-tight">{person.name}</h4>
              <p className="text-ss-gold font-black text-xs uppercase tracking-widest mt-1 flex items-center gap-1">
                <ShieldCheck size={14} /> {person.role}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-ss-taupe/10 space-y-3">
              <div className="flex items-center gap-3 text-ss-taupe text-sm font-medium">
                <Mail size={16} className="text-ss-blue" /> {person.email}
              </div>
              <div className="flex items-center gap-3 text-ss-taupe text-sm font-medium">
                <Phone size={16} className="text-ss-blue" /> {person.phone}
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-ss-taupe/5 hover:bg-ss-taupe/10 text-ss-green font-bold rounded-xl text-sm transition">
              View Full Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaffPortal;