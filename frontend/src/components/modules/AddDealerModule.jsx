import React, { useState } from 'react';
import {
  UserPlus,
  Building,
  FileText,
  CreditCard,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Save,
  RotateCcw,
  Check,
  ShieldCheck,
  Building2,
  Store
} from 'lucide-react';

export default function AddDealerModule() {
  const [formData, setFormData] = useState({
    dealerName: '',
    proprietorName: '',
    nid: '',
    phone: '',
    email: '',
    union: '১ নং ইউনিয়ন',
    tradeLicense: '',
    licenseExpiry: '',
    tinNo: '',
    bankName: 'সোনালী ব্যাংক পিএলসি',
    bankBranch: '',
    fdrAmount: '500000',
    godownAddress: '',
    godownCapacityTon: '',
    ward1: '',
    ward2: '',
    ward3: '',
    notes: ''
  });

  const [submittedId, setSubmittedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.dealerName || !formData.proprietorName || !formData.phone) {
      alert('অনুগ্রহ করে আবশ্যকীয় তথ্যগুলো (ডিলারের নাম, মালিকের নাম এবং মোবাইল) সঠিকভাবে পূরণ করুন।');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const generatedCode = `DLR-2026-${Math.floor(100 + Math.random() * 900)}`;
      setSubmittedId(generatedCode);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      dealerName: '',
      proprietorName: '',
      nid: '',
      phone: '',
      email: '',
      union: '১ নং ইউনিয়ন',
      tradeLicense: '',
      licenseExpiry: '',
      tinNo: '',
      bankName: 'সোনালী ব্যাংক পিএলসি',
      bankBranch: '',
      fdrAmount: '500000',
      godownAddress: '',
      godownCapacityTon: '',
      ward1: '',
      ward2: '',
      ward3: '',
      notes: ''
    });
    setSubmittedId(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <UserPlus className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  নতুন নিবন্ধন ফরম
                </span>
                <span className="text-xs text-slate-400 font-mono">FORM-BCIC-ONBOARDING</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                নতুন ডিলার নিবন্ধন ও আউটলেট অনুমোদন
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                কৃষি মন্ত্রণালয় ও বিসিআইসির সার নিয়ন্ত্রণ অধ্যাদেশ ১৯৯৫ মোতাবেক ডিলারশিপ আবেদনের ডেটা এন্ট্রি
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>ন্যূনতম ৫ লক্ষ টাকার ট্রেজারি জামানত বাধ্যতামূলক</span>
            </div>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {submittedId && (
        <div className="p-5 bg-emerald-50 border border-emerald-300 rounded-xl shadow-xs animate-scale-in flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#14532d] flex items-center justify-center text-white flex-shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-emerald-950">
                নতুন ডিলার সফলভাবে নিবন্ধিত হয়েছে!
              </h3>
              <p className="text-xs text-emerald-800 mt-0.5">
                সিস্টেম জেনারেটেড ডিলার কোড: <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-emerald-200">{submittedId}</span>। আবেদনটি উপজেলা সার কমিটির চূড়ান্ত অনুমোদনের জন্য অপেক্ষমাণ তালিকায় পাঠানো হয়েছে।
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition-colors flex-shrink-0"
          >
            আরেকটি ডিলার যুক্ত করুন
          </button>
        </div>
      )}

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
        {/* Section 1: Business and Personal Information */}
        <div>
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Building2 className="w-4 h-4 text-[#14532d]" />
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              ১. ডিলার প্রতিষ্ঠানের মৌলিক ও স্বত্বাধিকারীর তথ্য
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                প্রতিষ্ঠানের নাম <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="dealerName"
                required
                placeholder="উদাঃ মেসার্স জনতা এন্টারপ্রাইজ"
                value={formData.dealerName}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-medium focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                স্বত্বাধিকারীর নাম <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="proprietorName"
                required
                placeholder="মালিকের পূর্ণ নাম"
                value={formData.proprietorName}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-medium focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                জাতীয় পরিচয়পত্র (NID) নম্বর
              </label>
              <input
                type="text"
                name="nid"
                placeholder="১০ বা ১৭ ডিজিটের এনআইডি"
                value={formData.nid}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                মোবাইল নম্বর <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                required
                placeholder="017XX-XXXXXX"
                value={formData.phone}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ইমেইল ঠিকানা (ঐচ্ছিক)
              </label>
              <input
                type="email"
                name="email"
                placeholder="dealer@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                বরাদ্দকৃত ইউনিয়ন <span className="text-rose-500">*</span>
              </label>
              <select
                name="union"
                value={formData.union}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-medium focus:bg-white focus:border-emerald-600 focus:outline-none"
              >
                <option value="১ নং ইউনিয়ন">১ নং ইউনিয়ন</option>
                <option value="২ নং বগারচর ইউনিয়ন">২ নং বগারচর ইউনিয়ন</option>
                <option value="৩ নং বাট্টাজোড় ইউনিয়ন">৩ নং বাট্টাজোড় ইউনিয়ন</option>
                <option value="৪ নং সাধুরপাড়া ইউনিয়ন">৪ নং সাধুরপাড়া ইউনিয়ন</option>
                <option value="৫ নং বকশীগঞ্জ ইউনিয়ন">৫ নং বকশীগঞ্জ ইউনিয়ন</option>
                <option value="৬ নং নিলাখিয়া ইউনিয়ন">৬ নং নিলাখিয়া ইউনিয়ন</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: License and Bank FDR */}
        <div>
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <CreditCard className="w-4 h-4 text-[#14532d]" />
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              ২. ট্রেড লাইসেন্স ও সোনালী ব্যাংক সিকিউরিটি জামানত
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ট্রেড লাইসেন্স নম্বর
              </label>
              <input
                type="text"
                name="tradeLicense"
                placeholder="TR-2026-XXXX"
                value={formData.tradeLicense}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                লাইসেন্সের মেয়াদ উত্তীর্ণ তারিখ
              </label>
              <input
                type="date"
                name="licenseExpiry"
                value={formData.licenseExpiry}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                টিআইএন (TIN) নম্বর
              </label>
              <input
                type="text"
                name="tinNo"
                placeholder="TIN-XXXXXXXXXX"
                value={formData.tinNo}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                জামানত পরিমাণ (টাকায়)
              </label>
              <input
                type="text"
                name="fdrAmount"
                value={formData.fdrAmount}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-bold font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Godown and 3 Ward Outlets */}
        <div>
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Store className="w-4 h-4 text-[#14532d]" />
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              ৩. প্রধান গুদাম ও ৩টি ওয়ার্ড বিক্রয়কেন্দ্র
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                প্রধান গুদামের ঠিকানা
              </label>
              <input
                type="text"
                name="godownAddress"
                placeholder="বাজারের নাম, সড়ক ও মৌজা"
                value={formData.godownAddress}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                গুদাম ধারণক্ষমতা (মেট্রিক টন)
              </label>
              <input
                type="number"
                name="godownCapacityTon"
                placeholder="উদাঃ ১২০"
                value={formData.godownCapacityTon}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            <input
              type="text"
              name="ward1"
              placeholder="১ম অনুমোদিত ওয়ার্ড কেন্দ্র (উদাঃ ১ নং ওয়ার্ড হাট)"
              value={formData.ward1}
              onChange={handleChange}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:border-emerald-600 focus:outline-none"
            />
            <input
              type="text"
              name="ward2"
              placeholder="২য় অনুমোদিত ওয়ার্ড কেন্দ্র (উদাঃ ৪ নং ওয়ার্ড পয়েন্ট)"
              value={formData.ward2}
              onChange={handleChange}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:border-emerald-600 focus:outline-none"
            />
            <input
              type="text"
              name="ward3"
              placeholder="৩য় অনুমোদিত ওয়ার্ড কেন্দ্র (উদাঃ ৭ নং ওয়ার্ড বাজার)"
              value={formData.ward3}
              onChange={handleChange}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:border-emerald-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>রিসেট</span>
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#14532d] hover:bg-emerald-900 rounded-lg transition-colors shadow-sm cursor-pointer inline-flex items-center gap-1.5 disabled:opacity-50"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{isLoading ? 'সংরক্ষণ হচ্ছে...' : 'ডিলার নিবন্ধন সম্পন্ন করুন'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
