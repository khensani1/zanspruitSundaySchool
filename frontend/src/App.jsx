import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  UserPlus, 
  CheckSquare, 
  Users, 
  FileText, 
  PlusCircle,
  TrendingUp,
  ArrowLeft
} from 'lucide-react';

// Pages
import RegisterKids from './pages/RegisterKids';
import MarkAttendance from './pages/MarkAttendance';
import StaffPortal from './pages/StaffPortal';
import Reports from './pages/Reports';

function App() {
  // State to manage navigation
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-ss-taupe/10 font-sans">
      
      {/* SIDEBAR - Forest Green #182D09 */}
      <aside className="w-72 bg-ss-green text-white shadow-2xl flex flex-col">
        <div className="p-8">
          <h1 className="text-xl font-bold text-ss-gold leading-tight tracking-wider uppercase">
            Zandspruit <br/> Sunday School FI69
          </h1>
          <p className="text-xs text-ss-taupe mt-1 opacity-80 uppercase tracking-widest font-semibold">Admin Portal</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <SidebarItem 
            icon={<LayoutDashboard size={20}/>} 
            label="Dashboard" 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
          />
          <SidebarItem 
            icon={<UserPlus size={20}/>} 
            label="Register Kids" 
            active={activeTab === 'kids'} 
            onClick={() => setActiveTab('kids')} 
          />
          <SidebarItem 
            icon={<CheckSquare size={20}/>} 
            label="Mark Attendance" 
            active={activeTab === 'attendance'} 
            onClick={() => setActiveTab('attendance')} 
          />
          <SidebarItem 
            icon={<Users size={20}/>} 
            label="Staff Portal" 
            active={activeTab === 'staff'} 
            onClick={() => setActiveTab('staff')} 
          />
          <SidebarItem 
            icon={<FileText size={20}/>} 
            label="Reports" 
            active={activeTab === 'reports'} 
            onClick={() => setActiveTab('reports')} 
          />
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto bg-[#FDFBF7] p-10">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {activeTab !== 'dashboard' && (
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className="text-ss-taupe hover:text-ss-green transition p-1 hover:bg-ss-taupe/10 rounded-lg"
                >
                  <ArrowLeft size={24} />
                </button>
              )}
              <h2 className="text-3xl font-bold text-ss-green tracking-tight capitalize">
                {activeTab === 'kids' && 'Student Registration'}
                {activeTab === 'attendance' && 'Daily Register'}
                {activeTab === 'dashboard' && 'Dashboard Overview'}
                {!['kids', 'attendance', 'dashboard'].includes(activeTab) && `${activeTab} Portal`}
              </h2>
            </div>
            <p className="text-ss-taupe font-medium">
              {activeTab === 'kids' && 'Add a new learner to the FI69 database.'}
              {activeTab === 'attendance' && 'Marking attendance for today\'s session.'}
              {activeTab === 'dashboard' && 'Welcome back! Here is what\'s happening today.'}
            </p>
          </div>

          {/* Action Button - Only shows when NOT on the registration page */}
          {activeTab !== 'kids' && (
            <button 
              onClick={() => setActiveTab('kids')}
              className="bg-ss-blue hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-3 shadow-lg transform transition hover:-translate-y-1 active:scale-95 font-bold"
            >
              <PlusCircle size={20} /> Register New Kid
            </button>
          )}
        </header>

        {/* --- DYNAMIC CONTENT SWITCHING --- */}

        {/* 1. DASHBOARD VIEW */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-ss-taupe/20">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-ss-green">Weekly Attendance</h3>
                <span className="text-sm font-semibold text-ss-taupe bg-ss-taupe/10 px-3 py-1 rounded-full">Last 4 Weeks</span>
              </div>
              
              <div className="h-64 flex items-end justify-around gap-4 border-b-2 border-ss-taupe/20 pb-2">
                <div className="w-full bg-ss-gold rounded-t-xl" style={{height: '60%'}}></div>
                <div className="w-full bg-ss-gold rounded-t-xl" style={{height: '85%'}}></div>
                <div className="w-full bg-ss-gold rounded-t-xl" style={{height: '45%'}}></div>
                <div className="w-full bg-ss-gold rounded-t-xl" style={{height: '95%'}}></div>
              </div>
              <div className="flex justify-around mt-4 text-xs font-bold text-ss-taupe uppercase tracking-widest">
                <span>Mar 01</span><span>Mar 08</span><span>Mar 15</span><span>Mar 22</span>
              </div>
            </div>

            <div className="space-y-6">
              <StatCard label="Total Students" value="124" color="bg-ss-green" />
              <StatCard label="Staff Active" value="12" color="bg-ss-blue" />
              <StatCard label="ZCC Members" value="85%" color="bg-ss-gold" />
            </div>
          </div>
        )}

        {/* 2. REGISTER KIDS VIEW */}
        {activeTab === 'kids' && (
          <div className="flex justify-start animate-in zoom-in-95 duration-300">
            <RegisterKids />
          </div>
        )}

        {/* 3. MARK ATTENDANCE VIEW */}
        {activeTab === 'attendance' && (
          <div className="animate-in fade-in duration-500">
            <MarkAttendance />
          </div>
        )}

       {/* 4. STAFF PORTAL VIEW */}
{activeTab === 'staff' && (
  <StaffPortal />
)}

{/* 5. REPORTS VIEW */}
{activeTab === 'reports' && (
  <Reports />
  
)}

      </main>
    </div>
  );
}

// Sidebar Button Helper
function SidebarItem({ icon, label, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 font-semibold
      ${active ? 'bg-ss-gold text-ss-green shadow-lg scale-105' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
    >
      {icon} {label}
    </button>
  );
}

// Stat Card Helper
function StatCard({ label, value, color }) {
  return (
    <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-ss-taupe/20 flex items-center justify-between">
      <div>
        <p className="text-ss-taupe text-sm font-bold uppercase tracking-wider">{label}</p>
        <p className="text-3xl font-black text-ss-green mt-1">{value}</p>
      </div>
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white shadow-inner`}>
        <TrendingUp size={20} />
      </div>
    </div>
  );
}

export default App;