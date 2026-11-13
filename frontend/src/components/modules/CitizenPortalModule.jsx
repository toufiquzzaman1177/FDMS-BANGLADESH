import React, { useState } from 'react';
import {
  Globe,
  Tag,
  Search,
  Building2,
  AlertTriangle,
  Phone,
  Send,
  CheckCircle2,
  Lock,
  ChevronDown,
  Info,
  MapPin,
  FileText,
  ShieldCheck,
  Check,
  Package
} from 'lucide-react';

export default function CitizenPortalModule({ onBackToDashboard }) {
  const [activeTab, setActiveTab] = useState('priceBoard'); // 'priceBoard', 'dealerStock', 'anonymousComplaint'
  const [selectedUnion, setSelectedUnion] = useState('all');
  const [searchDealer, setSearchDealer] = useState('');

  // Anonymous Complaint Form
  const [complaintForm, setComplaintForm] = useState({
    dealerName: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
    union: '৩ নং বাট্টাজোড়',
    category: 'অতিরিক্ত মূল্য আদায় (Overpricing)',
    description: '',
    incidentDate: '১৩ নভেম্বর ২০২৬',
    anonymousMobile: '',
    keepAnonymous: true
  });

  const [generatedTicket, setGeneratedTicket] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gazetted Prices
  const prices = [
    { name: 'ইউরিয়া (Urea)', rateKg: 27, bagKg: 50, bagPrice: 1350, subsidy: '৬২%' },
    { name: 'টিএসপি (TSP)', rateKg: 22, bagKg: 50, bagPrice: 1100, subsidy: '৫৫%' },
    { name: 'ডিএপি (DAP)', rateKg: 21, bagKg: 50, bagPrice: 1050, subsidy: '৫৮%' },
    { name: 'এমওপি (MoP)', rateKg: 20, bagKg: 50, bagPrice: 1000, subsidy: '৫০%' }
  ];

  // Public Dealer Live Stocks
  const dealerStocks = [
    {
      id: 1,
      dealer: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
      proprietor: 'আলহাজ্ব মোকাররম হোসেন',
      union: '৩ নং বাট্টাজোড়',
      marketAddress: 'বাট্টাজোড় কেন্দ্রীয় হাট রোড',
      phone: '01711-223344',
      stocks: { urea: '১৮.৫ টন', tsp: '৯.২ টন', dap: '১১.৪ টন', mop: '৯.৪ টন' },
      status: 'স্টক পর্যাপ্ত'
    },
    {
      id: 2,
      dealer: 'মেসার্স কৃষক বন্ধু ঘর',
      proprietor: 'মোঃ রফিকুল ইসলাম',
      union: '৫ নং বকশীগঞ্জ',
      marketAddress: 'বকশীগঞ্জ সার বাজার মোড়',
      phone: '01712-998877',
      stocks: { urea: '২৪.০ টন', tsp: '১২.৫ টন', dap: '১৪.০ টন', mop: '১১.৫ টন' },
      status: 'স্টক পর্যাপ্ত'
    },
    {
      id: 3,
      dealer: 'মেসার্স নতুন ফসল ট্রেডার্স',
      proprietor: 'হাজী জয়নাল আবেদীন',
      union: '২ নং বগারচর',
      marketAddress: 'বগারচর বাজার পয়েন্ট',
      phone: '01715-667788',
      stocks: { urea: '১৫.২ টন', tsp: '৮.১ টন', dap: '৯.৮ টন', mop: '৮.৯ টন' },
      status: 'স্টক পর্যাপ্ত'
    },
    {
      id: 4,
      dealer: 'মেসার্স সবুজ কৃষি ভান্ডার',
      proprietor: 'কবির আহমেদ',
      union: '৬ নং ধানুয়া কামালপুর',
      marketAddress: 'কামালপুর বর্ডার হাট সংলগ্ন',
      phone: '01819-334455',
      stocks: { urea: '১২.৫ টন', tsp: '৬.৮ টন', dap: '৮.২ টন', mop: '৮.০ টন' },
      status: 'স্টক পর্যাপ্ত'
    },
    {
      id: 5,
      dealer: 'মেসার্স সোনালী মাঠ স্টোর',
      proprietor: 'আনিসুর রহমান',
      union: '৪ নং সাধুরপাড়া',
      marketAddress: 'সাধুরপাড়া নতুন বাজার',
      phone: '01911-556677',
      stocks: { urea: '১৯.০ টন', tsp: '৯.৫ টন', dap: '১২.০ টন', mop: '১০.৫ টন' },
      status: 'স্টক পর্যাপ্ত'
    }
  ];

  const filteredDealers = dealerStocks.filter(d => {
    if (selectedUnion !== 'all' && d.union !== selectedUnion) return false;
    if (searchDealer) {
      const q = searchDealer.toLowerCase();
      return d.dealer.toLowerCase().includes(q) || d.marketAddress.toLowerCase().includes(q);
    }
    return true;
  });

  const handleSubmitComplaint = (e) => {
    e.preventDefault();
    if (!complaintForm.description.trim()) {
      alert('অনুগ্রহ করে অনিয়ম বা অতিরিক্ত মূল্যের বিস্তারিত বিবরণ লিখুন।');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const ticket = `CITIZEN-GRS-${Math.floor(10000 + Math.random() * 90000)}`;
      setGeneratedTicket(ticket);
    }, 700);
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <Globe className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  উন্মুক্ত নাগরিক সেবা (Public Citizen Portal)
                </span>
                <span className="text-xs text-slate-400 font-mono">NO-LOGIN-REQUIRED</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                কৃষক ও নাগরিক সেবা পোর্টাল
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                কোনো লগইন ছাড়াই সরকার নির্ধারিত মূল্যবোর্ড, নিকটস্থ ডিলারের লাইভ মজুত ও অনিয়মের বিরুদ্ধে গোপনীয় অভিযোগ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>কৃষি হেল্পলাইন: ১৬১২৩ (টোল ফ্রি)</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('priceBoard')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'priceBoard'
                ? 'bg-[#14532d] text-white shadow-2xs'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>১. উন্মুক্ত লাইভ সরকারি মূল্যবোর্ড (MRP)</span>
          </button>

          <button
            onClick={() => setActiveTab('dealerStock')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'dealerStock'
                ? 'bg-[#14532d] text-white shadow-2xs'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>২. নিকটস্থ ডিলারের লাইভ স্টক অনুসন্ধান</span>
          </button>

          <button
            onClick={() => setActiveTab('anonymousComplaint')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'anonymousComplaint'
                ? 'bg-[#14532d] text-white shadow-2xs'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>৩. গোপনীয় অভিযোগ দাখিল (Whistleblower Box)</span>
          </button>
        </div>
      </div>

      {/* 1. Price Board View */}
      {activeTab === 'priceBoard' && (
        <div className="space-y-6">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-950 leading-relaxed">
              <strong className="font-bold">প্রিয় কৃষক ভাই ও বোনেরা:</strong> সরকার নির্ধারিত সারের সর্বোচ্চ খুচরা মূল্যের (MRP) অতিরিক্ত এক টাকাও কাউকে দেবেন না। ডিলার বা খুচরা বিক্রেতা ক্যাশ মেমো দিতে বাধ্য। অতিরিক্ত মূল্য দাবি করলে অবিলম্বে নিচের ফর্ম বা হটলাইন ১৬১২৩-এ জানান।
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {prices.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      ভর্তুকি {p.subsidy}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">GAZETTE FIXED</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-2">{p.name}</h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="text-xs text-slate-500">প্রতি কেজি সরকারি দর:</div>
                    <div className="text-2xl font-bold text-[#14532d] font-mono">
                      ৳{p.rateKg.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{p.bagKg} কেজি বস্তার দর:</span>
                  <span className="font-bold text-slate-800 font-mono">৳{p.bagPrice.toLocaleString('bn-BD')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Dealer Live Stock View */}
      {activeTab === 'dealerStock' && (
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="বাজারের নাম বা ডিলারের নাম দিয়ে খুঁজুন..."
                value={searchDealer}
                onChange={e => setSearchDealer(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <select
                value={selectedUnion}
                onChange={e => setSelectedUnion(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:bg-white focus:border-emerald-600 focus:outline-none"
              >
                <option value="all">সকল ইউনিয়ন (সকল ডিলার)</option>
                <option value="৩ নং বাট্টাজোড়">৩ নং বাট্টাজোড়</option>
                <option value="৫ নং বকশীগঞ্জ">৫ নং বকশীগঞ্জ</option>
                <option value="২ নং বগারচর">২ নং বগারচর</option>
                <option value="৬ নং ধানুয়া কামালপুর">৬ নং ধানুয়া কামালপুর</option>
                <option value="৪ নং সাধুরপাড়া">৪ নং সাধুরপাড়া</option>
              </select>
            </div>
          </div>

          {/* Dealers Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDealers.map(dealer => (
              <div
                key={dealer.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:border-emerald-300 transition-all space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{dealer.dealer}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">স্বত্বাধিকারী: {dealer.proprietor}</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{dealer.marketAddress} ({dealer.union})</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    {dealer.status}
                  </span>
                </div>

                {/* Stock Chips */}
                <div className="grid grid-cols-4 gap-2 text-center text-xs pt-2 border-t border-slate-100">
                  <div className="p-2 rounded bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">ইউরিয়া</span>
                    <span className="font-mono font-bold text-slate-800">{dealer.stocks.urea}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">টিএসপি</span>
                    <span className="font-mono font-bold text-slate-800">{dealer.stocks.tsp}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">ডিএপি</span>
                    <span className="font-mono font-bold text-slate-800">{dealer.stocks.dap}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">এমওপি</span>
                    <span className="font-mono font-bold text-slate-800">{dealer.stocks.mop}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1 font-mono text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    {dealer.phone}
                  </span>
                  <span className="text-[11px] text-emerald-800 font-semibold">দোকান খোলা: সকাল ৮টা - বিকাল ৫টা</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Anonymous Complaint Box View */}
      {activeTab === 'anonymousComplaint' && (
        <div className="space-y-6">
          {generatedTicket ? (
            <div className="bg-white rounded-2xl border border-emerald-300 shadow-sm p-6 text-center space-y-3 animate-scale-in">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#14532d] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                আপনার অভিযোগটি সফলভাবে দাখিল হয়েছে!
              </h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                আপনার পরিচয় সম্পূর্ণ গোপন রাখা হয়েছে। উপজেলা নির্বাহী অফিসার (UNO) ও উপজেলা কৃষি অফিসার (UAO) সরেজমিনে তদন্ত করে আইনগত পদক্ষেপ গ্রহণ করবেন।
              </p>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 inline-block font-mono text-sm font-bold text-emerald-900">
                অভিযোগ ট্র্যাকিং আইডি: {generatedTicket}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setGeneratedTicket(null);
                    setComplaintForm({
                      dealerName: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
                      union: '৩ নং বাট্টাজোড়',
                      category: 'অতিরিক্ত মূল্য আদায় (Overpricing)',
                      description: '',
                      incidentDate: '১৩ নভেম্বর ২০২৬',
                      anonymousMobile: '',
                      keepAnonymous: true
                    });
                  }}
                  className="px-4 py-2 bg-[#14532d] text-white rounded-lg text-xs font-semibold hover:bg-emerald-900"
                >
                  আরেকটি অভিযোগ দাখিল করুন
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitComplaint} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <Lock className="w-4 h-4 text-[#14532d]" />
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  গোপনীয় অভিযোগ ফরম (Whistleblower Protection Enabled)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    অভিযুক্ত ডিলার / দোকানের নাম
                  </label>
                  <select
                    value={complaintForm.dealerName}
                    onChange={e => setComplaintForm({ ...complaintForm, dealerName: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-semibold focus:bg-white focus:border-emerald-600 focus:outline-none"
                  >
                    <option>মেসার্স মাটির মানুষ এন্টারপ্রাইজ</option>
                    <option>মেসার্স কৃষক বন্ধু ঘর</option>
                    <option>মেসার্স নতুন ফসল ট্রেডার্স</option>
                    <option>মেসার্স সবুজ কৃষি ভান্ডার</option>
                    <option>মেসার্স সোনালী মাঠ স্টোর</option>
                    <option>মেসার্স শ্যামল বাংলা সার বিতান</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    অভিযোগের ধরন
                  </label>
                  <select
                    value={complaintForm.category}
                    onChange={e => setComplaintForm({ ...complaintForm, category: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-semibold focus:bg-white focus:border-emerald-600 focus:outline-none"
                  >
                    <option>অতিরিক্ত মূল্য আদায় (Overpricing)</option>
                    <option>বস্তায় ওজনে কারচুপি (Underweight)</option>
                    <option>অন্য অপ্রয়োজনীয় সার কিনতে বাধ্য করা (Forced Tying)</option>
                    <option>ক্যাশ মেমো বা রসিদ না দেওয়া (No Receipt)</option>
                    <option>কৃত্রিম সংকট সৃষ্টি বা কালোবাজারি (Hoarding)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ঘটনার বিস্তারিত বিবরণ <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="কত টাকা অতিরিক্ত দাবি করা হয়েছে, কোনো তারিখ বা সময়ে ঘটনা ঘটেছে তা বিস্তারিত লিখুন..."
                  value={complaintForm.description}
                  onChange={e => setComplaintForm({ ...complaintForm, description: e.target.value })}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-800 focus:bg-white focus:border-emerald-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  আপনার মোবাইল নম্বর (ঐচ্ছিক - তদন্ত কর্মকর্তা যোগাযোগের জন্য)
                </label>
                <input
                  type="text"
                  placeholder="017XX-XXXXXX (সম্পূর্ণ গোপন রাখা হবে)"
                  value={complaintForm.anonymousMobile}
                  onChange={e => setComplaintForm({ ...complaintForm, anonymousMobile: e.target.value })}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono focus:bg-white focus:border-emerald-600 focus:outline-none max-w-sm"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={complaintForm.keepAnonymous}
                    onChange={e => setComplaintForm({ ...complaintForm, keepAnonymous: e.target.checked })}
                    className="w-4 h-4 rounded text-[#14532d] focus:ring-emerald-500"
                  />
                  <span>আমার নাম ও ফোন নম্বর ডিলার বা তৃতীয় পক্ষের কাছে সম্পূর্ণ গোপন রাখুন</span>
                </label>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-[#14532d] hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm cursor-pointer inline-flex items-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'দাখিল হচ্ছে...' : 'গোপনীয় অভিযোগ দাখিল করুন'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
