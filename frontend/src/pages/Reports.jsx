import React, { useState } from 'react';
import { 
  BarChart3, PieChart, Download, Calendar, Users, Star, 
  Clock, BookOpen, Utensils, UserCheck, ShieldCheck, Save, ClipboardList 
} from 'lucide-react';

/* --- SUB-COMPONENT: SUNDAY SESSION LOGBOOK --- */
function SundayLogForm() {
  const [log, setLog] = useState({
    startTime: '',
    pastorPrayerTime: '',
    pastorName: '',
    teachersPresent: '',
    activities: '',
    bibleStudyTime: '',
    bibleStudyTeacher: '',
    scriptureVerse: '',
    lessonTopic: '',
    mealTime: '',
    mealServed: '',
    cooksDetails: '',
    dismissalTime: '',
    finalPrayerTime: ''
  });

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving Sunday Log to Supabase:", log);
    alert("Sunday Session Log for today has been recorded!");
  };

  return (
    <div className="mt-12 bg-white rounded-[2.5rem] shadow-xl border border-ss-taupe/20 overflow-hidden animate-in slide-in-from-bottom-8 duration-700">
      {/* Header */}
      <div className="bg-ss-green p-8 text-white flex items-center gap-4">
        <div className="bg-ss-gold p-3 rounded-2xl text-ss-green shadow-lg">
          <ClipboardList size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tight leading-none">Sunday Session Logbook</h3>
          <p className="text-ss-taupe text-sm font-bold opacity-80 mt-1">Detailed record for FI69 Branch Records</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="p-10 space-y-10">
        
        {/* SECTION 1: THE SERVICE & STAFF */}
        <section>
          <div className="flex items-center gap-2 mb-6 border-b border-ss-taupe/20 pb-2">
            <Users className="text-ss-gold" size={20} />
            <h4 className="font-black text-ss-green uppercase tracking-widest text-sm">Service & Leadership</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputGroup label="Start Time" type="time" icon={<Clock size={16}/>} 
              onChange={(e) => setLog({...log, startTime: e.target.value})} />
            
            <InputGroup label="Pastor Prayer Time" type="time" icon={<ShieldCheck size={16}/>} 
              onChange={(e) => setLog({...log, pastorPrayerTime: e.target.value})} />

            <InputGroup label="Pastor's Name" placeholder="Who prayed?" 
              onChange={(e) => setLog({...log, pastorName: e.target.value})} />

            <div className="md:col-span-3">
              <label className="block text-ss-green font-bold text-xs uppercase mb-2">Teachers Present (Names)</label>
              <textarea 
                className="w-full p-4 rounded-2xl border border-ss-taupe/30 focus:ring-2 focus:ring-ss-gold focus:outline-none bg-ss-taupe/5 font-medium"
                placeholder="List all teachers on duty today..."
                rows="2"
                onChange={(e) => setLog({...log, teachersPresent: e.target.value})}
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: BIBLE STUDY & LESSONS */}
        <section>
          <div className="flex items-center gap-2 mb-6 border-b border-ss-taupe/20 pb-2">
            <BookOpen className="text-ss-gold" size={20} />
            <h4 className="font-black text-ss-green uppercase tracking-widest text-sm">Bible Study & Activities</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup label="Bible Study Time" type="time" 
              onChange={(e) => setLog({...log, bibleStudyTime: e.target.value})} />
            
            <InputGroup label="Bible Study Teacher" placeholder="Teacher name" 
              onChange={(e) => setLog({...log, bibleStudyTeacher: e.target.value})} />

            <InputGroup label="Scripture Verse" placeholder="e.g. Psalm 23:1" 
              onChange={(e) => setLog({...log, scriptureVerse: e.target.value})} />

            <div className="md:col-span-2">
              <label className="block text-ss-green font-bold text-xs uppercase mb-2">Activities & Lesson Teachings</label>
              <textarea 
                className="w-full p-4 rounded-2xl border border-ss-taupe/30 focus:ring-2 focus:ring-ss-gold focus:outline-none bg-ss-taupe/5 font-medium"
                placeholder="What did they learn about today?"
                rows="3"
                onChange={(e) => setLog({...log, lessonTopic: e.target.value})}
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: CATERING (COOKS & FOOD) */}
        <section className="bg-ss-taupe/5 p-8 rounded-[2rem] border border-ss-taupe/10">
          <div className="flex items-center gap-2 mb-6 border-b border-ss-taupe/20 pb-2">
            <Utensils className="text-ss-blue" size={20} />
            <h4 className="font-black text-ss-green uppercase tracking-widest text-sm">Catering & Nutrition</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup label="Meal Time" type="time" 
              onChange={(e) => setLog({...log, mealTime: e.target.value})} />
            
            <InputGroup label="What did they eat?" placeholder="e.g. Rice and Stew" 
              onChange={(e) => setLog({...log, mealServed: e.target.value})} />

            <div className="md:col-span-2">
              <label className="block text-ss-green font-bold text-xs uppercase mb-2">Cooks List (Names & Phone Numbers)</label>
              <textarea 
                className="w-full p-4 rounded-2xl border border-ss-taupe/30 focus:ring-2 focus:ring-ss-blue focus:outline-none bg-white font-medium"
                placeholder="Mama Thabo (081...), etc."
                rows="2"
                onChange={(e) => setLog({...log, cooksDetails: e.target.value})}
              />
            </div>
          </div>
        </section>

        {/* SECTION 4: DISMISSAL */}
        <section>
          <div className="flex items-center gap-2 mb-6 border-b border-ss-taupe/20 pb-2">
            <UserCheck className="text-ss-green" size={20} />
            <h4 className="font-black text-ss-green uppercase tracking-widest text-sm">Dismissal & Prayer</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup label="Final Prayer Time" type="time" 
              onChange={(e) => setLog({...log, finalPrayerTime: e.target.value})} />
            
            <InputGroup label="Dismissal Time" type="time" 
              onChange={(e) => setLog({...log, dismissalTime: e.target.value})} />
          </div>
        </section>

        <button 
          type="submit"
          className="w-full bg-ss-blue hover:bg-blue-800 text-white font-black py-5 rounded-3xl flex items-center justify-center gap-4 shadow-2xl transition transform active:scale-95"
        >
          <Save size={24} /> Finalize Today's Session Log
        </button>
      </form>
    </div>
  );
}

/* --- MAIN REPORTS PAGE --- */
function Reports() {
  return (
    <div className="max-w-6xl animate-in fade-in duration-700">
      
      {/* Top Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <ReportMiniCard icon={<Users size={20}/>} label="Avg. Attendance" value="92" color="text-ss-blue" />
        <ReportMiniCard icon={<Star size={20}/>} label="New Members" value="+12" color="text-ss-gold" />
        <ReportMiniCard icon={<Calendar size={20}/>} label="Sessions" value="48" color="text-ss-green" />
        <button className="bg-ss-green text-white rounded-2xl flex flex-col items-center justify-center p-4 hover:bg-opacity-90 transition shadow-lg">
          <Download size={24} className="mb-1" />
          <span className="text-xs font-bold uppercase tracking-widest">Export PDF</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Monthly Trend Chart */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-ss-taupe/20">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="text-ss-blue" />
            <h4 className="font-bold text-ss-green uppercase tracking-tight">Monthly Attendance Trend</h4>
          </div>
          <div className="h-64 bg-ss-taupe/5 rounded-2xl border-2 border-dashed border-ss-taupe/20 flex flex-col items-center justify-center text-ss-taupe text-center p-4">
             <div className="flex gap-2 items-end h-32 mb-4">
                <div className="w-8 bg-ss-blue/40 rounded-t-lg" style={{height: '40%'}}></div>
                <div className="w-8 bg-ss-blue/60 rounded-t-lg" style={{height: '70%'}}></div>
                <div className="w-8 bg-ss-blue/80 rounded-t-lg" style={{height: '55%'}}></div>
                <div className="w-8 bg-ss-blue rounded-t-lg" style={{height: '90%'}}></div>
             </div>
             <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Visual Data will sync with Supabase</p>
          </div>
        </div>

        {/* Breakdown Chart */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-ss-taupe/20">
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="text-ss-gold" />
            <h4 className="font-bold text-ss-green uppercase tracking-tight">Student Breakdown</h4>
          </div>
          <div className="space-y-4 mt-8">
            <ProgressRow label="ZCC Members" percentage={85} color="bg-ss-gold" />
            <ProgressRow label="Junior Group" percentage={60} color="bg-ss-green" />
            <ProgressRow label="Teen Group" percentage={25} color="bg-ss-blue" />
          </div>
        </div>
      </div>

      {/* RECENT ACTIVITY TABLE */}
      <div className="mt-8 bg-white rounded-[2rem] shadow-sm border border-ss-taupe/20 overflow-hidden">
        <div className="p-6 bg-ss-green text-white font-bold uppercase tracking-widest text-sm flex justify-between items-center">
          Recent Sunday Sessions
          <span className="text-[10px] bg-ss-gold text-ss-green px-2 py-0.5 rounded-full">LIVE DATA</span>
        </div>
        <table className="w-full text-left">
          <thead className="bg-ss-taupe/5 text-ss-green text-xs font-black uppercase">
            <tr>
              <th className="p-4">Date</th>
              <th className="p-4">Total Present</th>
              <th className="p-4">Staff on Duty</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ss-taupe/10">
            <ReportRow date="22 Mar 2026" present="112" staff="8" status="Complete" />
            <ReportRow date="15 Mar 2026" present="98" staff="6" status="Complete" />
          </tbody>
        </table>
      </div>

      {/* --- RENDER THE NEW SUNDAY LOGBOOK FORM HERE --- */}
      <SundayLogForm />

    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function ReportMiniCard({ icon, label, value, color }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-ss-taupe/20 shadow-sm">
      <div className={`${color} mb-2`}>{icon}</div>
      <p className="text-[10px] font-black text-ss-taupe uppercase tracking-widest leading-none">{label}</p>
      <p className="text-2xl font-black text-ss-green mt-1">{value}</p>
    </div>
  );
}

function ProgressRow({ label, percentage, color }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] font-black text-ss-green uppercase mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-ss-taupe/10 rounded-full overflow-hidden">
        <div className={`h-full ${color} transition-all duration-1000`} style={{width: `${percentage}%`}}></div>
      </div>
    </div>
  );
}

function ReportRow({ date, present, staff, status }) {
  return (
    <tr className="hover:bg-ss-taupe/5 transition">
      <td className="p-4 font-bold text-ss-green">{date}</td>
      <td className="p-4 text-ss-taupe font-medium">{present} Students</td>
      <td className="p-4 text-ss-taupe font-medium">{staff} Teachers</td>
      <td className="p-4"><span className="bg-ss-green/10 text-ss-green px-3 py-1 rounded-full text-[10px] font-black uppercase">Complete</span></td>
    </tr>
  );
}

function InputGroup({ label, type = "text", placeholder, icon, onChange }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-ss-green font-bold text-xs uppercase mb-2">
        {icon} {label}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-3.5 rounded-xl border border-ss-taupe/30 focus:outline-none focus:ring-2 focus:ring-ss-gold bg-ss-taupe/5 font-medium transition"
      />
    </div>
  );
}

export default Reports;