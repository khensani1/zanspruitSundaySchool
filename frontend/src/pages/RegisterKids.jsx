import React, { useState } from 'react';
import { Save, User, Phone, MapPin, Heart } from 'lucide-react';

function RegisterKids() {
  // This "Object" holds all our form data in one place
  const [formData, setFormData] = useState({
    fullName: '',
    ageGroup: 'Junior',
    guardianName: '',
    contactNumber: '',
    isZccMember: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving to Supabase:", formData);
    alert(`Successfully registered ${formData.fullName}!`);
  };

  return (
    <div className="max-w-2xl animate-in fade-in duration-500">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-[2rem] shadow-sm border border-ss-taupe/20">
        
        {/* Full Name */}
        <div>
          <label className="block text-ss-green font-bold mb-2 flex items-center gap-2">
            <User size={18} /> Full Name of Child
          </label>
          <input 
            type="text" 
            className="w-full p-3 rounded-xl border border-ss-taupe/40 focus:outline-none focus:ring-2 focus:ring-ss-gold transition"
            placeholder="Enter name and surname"
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Age Group */}
          <div>
            <label className="block text-ss-green font-bold mb-2">Age Group</label>
            <select 
              className="w-full p-3 rounded-xl border border-ss-taupe/40 bg-white"
              onChange={(e) => setFormData({...formData, ageGroup: e.target.value})}
            >
              <option>Toddler (2-5)</option>
              <option>Junior (6-12)</option>
              <option>Teen (13-18)</option>
            </select>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-ss-green font-bold mb-2 flex items-center gap-2">
              <Phone size={18} /> Guardian Contact
            </label>
            <input 
              type="tel" 
              className="w-full p-3 rounded-xl border border-ss-taupe/40 focus:outline-none focus:ring-2 focus:ring-ss-gold"
              placeholder="081..."
              onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
            />
          </div>
        </div>

        {/* ZCC Membership Toggle */}
        <div className="flex items-center justify-between p-4 bg-ss-taupe/10 rounded-2xl border border-ss-taupe/20">
          <div className="flex items-center gap-3">
            <Heart className="text-ss-gold" fill="#C79803" />
            <span className="font-bold text-ss-green">ZCC Church Member?</span>
          </div>
          <input 
            type="checkbox" 
            className="w-6 h-6 accent-ss-green"
            onChange={(e) => setFormData({...formData, isZccMember: e.target.checked})}
          />
        </div>

        {/* Submit Button - Your Action Blue #2E5AA7 */}
        <button 
          type="submit"
          className="w-full bg-ss-blue hover:bg-blue-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg transition transform active:scale-95"
        >
          <Save size={20} /> Complete Registration
        </button>
      </form>
    </div>
  );
}

export default RegisterKids;