import React, { useState } from 'react';
import {
  Settings,
  Building2,
  MessageSquare,
  ShieldCheck,
  Save,
  CheckCircle2,
  Calendar,
  Lock,
  Globe,
  Sliders,
  Check
} from 'lucide-react';

export default function SettingsModule() {
  const [settings, setSettings] = useState({
    upazilaName: 'চাটমোহর',
    districtName: 'পাবনা',
    officeCode: 'DAE-UPZ-7601',
    uaoName: 'ড. আহমেদ রফিক',
    unoName: 'তানজিনা চৌধুরী',
    activeSeason: 'রবি মৌসুম ২০২৬-২৭',
    smsMasking: 'FDMS-DAE',
    smsApiKey: '••••••••••••••••••••••••38F2',
    smsAlertActive: true,
    twoFactorAuth: true,
    sessionTimeoutMin: '30',
    autoBackupDaily: true
  });

  const [toastMessage, setToastMessage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setToastMessage('সিস্টেম সেটিংস সফলভাবে সংরক্ষণ ও প্রয়োগ করা হয়েছে।');
      setTimeout(() => setToastMessage(null), 3500);
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#14532d] text-white text-xs font-semibold rounded-xl shadow-lg border border-emerald-700 animate-slide-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shadow-sm flex-shrink-0">
              <Settings className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  সিস্টেম কনফিগারেশন
                </span>
                <span className="text-xs text-slate-400 font-mono">APP-SETTINGS-v2.6</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                সিস্টেম ও প্রশাসনিক সেটিংস
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                উপজেলা কৃষি অফিস, এসএমএস গেটওয়ে, স্বাক্ষরকারী কর্মকর্তা ও জাতীয় ডাটাবেজ সিঙ্ক প্যারামিটার
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#14532d] hover:bg-emerald-900 rounded-lg transition-colors shadow-sm cursor-pointer disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'সংরক্ষণ হচ্ছে...' : 'সেটিংস সংরক্ষণ করুন'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Settings Form */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: Upazila & Officer Setup */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Building2 className="w-4 h-4 text-[#14532d]" />
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              ১. উপজেলা ও সরকারি স্বাক্ষরকারী কর্মকর্তার তথ্য
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">উপজেলার নাম</label>
              <input
                type="text"
                name="upazilaName"
                value={settings.upazilaName}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-medium focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">জেলার নাম</label>
              <input
                type="text"
                name="districtName"
                value={settings.districtName}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-medium focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">দাপ্তরিক কোড</label>
              <input
                type="text"
                name="officeCode"
                value={settings.officeCode}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">উপজেলা কৃষি অফিসার (UAO)</label>
              <input
                type="text"
                name="uaoName"
                value={settings.uaoName}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-medium focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">উপজেলা নির্বাহী অফিসার (UNO)</label>
              <input
                type="text"
                name="unoName"
                value={settings.unoName}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-medium focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">চলতি সক্রিয় মৌসুম</label>
              <select
                name="activeSeason"
                value={settings.activeSeason}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-semibold focus:bg-white focus:border-emerald-600 focus:outline-none"
              >
                <option value="রবি মৌসুম ২০২৬-২৭">রবি মৌসুম ২০২৬-২৭ (বোরো, আলু, গম)</option>
                <option value="খরিফ-২ মৌসুম ২০২৬">খরিফ-২ মৌসুম ২০২৬ (রোপা আমন)</option>
                <option value="খরিফ-১ মৌসুম ২০২৬">খরিফ-১ মৌসুম ২০২৬ (আউশ ও শাকসবজি)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: SMS Gateway & Notifications */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <MessageSquare className="w-4 h-4 text-[#14532d]" />
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              ২. টেলিটক সরকারি এসএমএস গেটওয়ে কনফিগারেশন
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">অনুমোদিত মাস্কিং নাম</label>
              <input
                type="text"
                name="smsMasking"
                value={settings.smsMasking}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono font-bold focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">টেলিটক কোর API কী</label>
              <input
                type="text"
                name="smsApiKey"
                value={settings.smsApiKey}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                name="smsAlertActive"
                checked={settings.smsAlertActive}
                onChange={handleChange}
                className="w-4 h-4 rounded text-[#14532d] focus:ring-emerald-500"
              />
              <span>প্রতিটি সার ক্রয়ের পরপরই স্বয়ংক্রিয়ভাবে কৃষকের মোবাইলে ডিজিটাল কনফার্মেশন এসএমএস প্রেরণ সক্রিয় রাখুন</span>
            </label>
          </div>
        </div>

        {/* Section 3: Security & Session */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <ShieldCheck className="w-4 h-4 text-[#14532d]" />
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              ৩. নিরাপত্তা পলিসি ও স্বয়ংক্রিয় ব্যাকআপ
            </h2>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={settings.twoFactorAuth}
                onChange={handleChange}
                className="w-4 h-4 rounded text-[#14532d] focus:ring-emerald-500"
              />
              <span>কর্মকর্তা লগইনের ক্ষেত্রে টু-ফ্যাক্টর অথেনটিকেশন (2FA OTP) বাধ্যতামূলক রাখুন</span>
            </label>

            <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                name="autoBackupDaily"
                checked={settings.autoBackupDaily}
                onChange={handleChange}
                className="w-4 h-4 rounded text-[#14532d] focus:ring-emerald-500"
              />
              <span>প্রতিদিন রাত ১২:০০ টায় সম্পূর্ণ ডাটাবেজের স্বয়ংক্রিয় ব্যাকআপ তৈরি ও সার্ভার সংরক্ষণ</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
