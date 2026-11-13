import React, { useState } from 'react';
import {
  UserSearch,
  Search,
  CheckCircle2,
  XCircle,
  CreditCard,
  MapPin,
  Calendar,
  Layers,
  Scale,
  ShoppingBag,
  Clock,
  Phone,
  UserCheck
} from 'lucide-react';

export default function FarmerSearchModule() {
  const [searchTerm, setSearchTerm] = useState('197876123450912');
  const [searchedFarmer, setSearchedFarmer] = useState({
    id: 1,
    name: 'মোঃ রফিকুল ইসলাম',
    fatherName: 'মরহুম আব্দুল জব্বার',
    nid: '197876123450912',
    krishiCard: 'KRC-88192',
    phone: '01712-345678',
    union: '৩ নং বাট্টাজোড় ইউনিয়ন',
    village: 'পূর্ব বাট্টাজোড়',
    category: 'মাঝারি কৃষক',
    landHoldingAcre: '১.৮৫ একর (৫.৫ বিঘা)',
    currentCrop: 'বোরো ধান (উফশী)',
    quotaCeiling: {
      urea: 190,
      tsp: 70,
      dap: 95,
      mop: 85
    },
    drawnThisSeason: {
      urea: 120,
      tsp: 45,
      dap: 60,
      mop: 50
    },
    lastPurchaseDate: '১৩ নভেম্বর ২০২৬, দুপুর ২:০৫',
    dealer: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
    status: 'ভেরিফাইড'
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    // Mock instant response for any search
    setSearchedFarmer(prev => ({
      ...prev,
      nid: searchTerm.length === 10 || searchTerm.length === 17 ? searchTerm : prev.nid,
      name: searchTerm.includes('017') ? 'মোঃ রফিকুল ইসলাম' : prev.name
    }));
  };

  const remainingQuota = {
    urea: searchedFarmer.quotaCeiling.urea - searchedFarmer.drawnThisSeason.urea,
    tsp: searchedFarmer.quotaCeiling.tsp - searchedFarmer.drawnThisSeason.tsp,
    dap: searchedFarmer.quotaCeiling.dap - searchedFarmer.drawnThisSeason.dap,
    mop: searchedFarmer.quotaCeiling.mop - searchedFarmer.drawnThisSeason.mop
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <UserSearch className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  মাঠপর্যায় যাচাইকরণ টুল
                </span>
                <span className="text-xs text-slate-400 font-mono">FARMER-LOOKUP-API</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                কৃষক অনুসন্ধান ও প্রাপ্যতা যাচাই
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                জাতীয় পরিচয়পত্র, কৃষি কার্ড বা মোবাইল নম্বর দিয়ে কৃষকের জমির পরিমাণ ও অবশিষ্ট সারের কোটা যাচাই
              </p>
            </div>
          </div>
        </div>

        {/* Search Input Box */}
        <form onSubmit={handleSearch} className="mt-6 pt-5 border-t border-slate-100 flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="কৃষকের ১০/১৭ ডিজিটের NID, কৃষি কার্ড নং (উদাঃ KRC-88192) বা মোবাইল নম্বর লিখুন..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-xs"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-[#14532d] hover:bg-emerald-900 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <Search className="w-4 h-4" />
            <span>অনুসন্ধান</span>
          </button>
        </form>
      </div>

      {/* Searched Farmer Result Card */}
      {searchedFarmer && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-fadeIn">
          {/* Top Banner */}
          <div className="p-6 bg-gradient-to-r from-emerald-50/80 via-white to-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#14532d] text-white flex items-center justify-center text-xl font-bold font-sans shadow-md">
                {searchedFarmer.name.substring(0, 2)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-slate-900">{searchedFarmer.name}</h2>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {searchedFarmer.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">পিতা: {searchedFarmer.fatherName} | {searchedFarmer.village}, {searchedFarmer.union}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-2xs">
                শ্রেণী: <span className="font-bold text-emerald-800">{searchedFarmer.category}</span> ({searchedFarmer.landHoldingAcre})
              </span>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Row 1: Identification & Location Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50/70 p-4 rounded-xl border border-slate-200">
              <div>
                <span className="text-[10px] font-semibold text-slate-400 block uppercase">জাতীয় পরিচয়পত্র (NID)</span>
                <span className="text-xs font-mono font-bold text-slate-800 mt-0.5 block">{searchedFarmer.nid}</span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-slate-400 block uppercase">ডিজিটাল কৃষি কার্ড</span>
                <span className="text-xs font-mono font-bold text-emerald-800 mt-0.5 block">{searchedFarmer.krishiCard}</span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-slate-400 block uppercase">মোবাইল নম্বর</span>
                <span className="text-xs font-mono font-medium text-slate-700 mt-0.5 block">{searchedFarmer.phone}</span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-slate-400 block uppercase">চলতি মৌসুমের আবাদ</span>
                <span className="text-xs font-bold text-slate-800 mt-0.5 block">{searchedFarmer.currentCrop}</span>
              </div>
            </div>

            {/* Row 2: Fertilizer Quota vs Drawn vs Remaining Table */}
            <div>
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                মৌসুমি সারের সিলিং প্রাপ্যতা ও উত্তোলনের হিসাব
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30">
                  <span className="text-xs font-bold text-emerald-900 block">ইউরিয়া (Urea)</span>
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>সিলিং বরাদ্দ:</span>
                      <span className="font-mono font-semibold">{searchedFarmer.quotaCeiling.urea} কেজি</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>উত্তোলিত:</span>
                      <span className="font-mono font-semibold text-slate-800">{searchedFarmer.drawnThisSeason.urea} কেজি</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-emerald-200 font-bold text-emerald-800">
                      <span>অবশিষ্ট প্রাপ্যতা:</span>
                      <span className="font-mono text-sm">{remainingQuota.urea} কেজি</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <span className="text-xs font-bold text-slate-800 block">টিএসপি (TSP)</span>
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>সিলিং বরাদ্দ:</span>
                      <span className="font-mono font-semibold">{searchedFarmer.quotaCeiling.tsp} কেজি</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>উত্তোলিত:</span>
                      <span className="font-mono font-semibold text-slate-800">{searchedFarmer.drawnThisSeason.tsp} কেজি</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-slate-200 font-bold text-slate-800">
                      <span>অবশিষ্ট প্রাপ্যতা:</span>
                      <span className="font-mono text-sm">{remainingQuota.tsp} কেজি</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/30">
                  <span className="text-xs font-bold text-indigo-900 block">ডিএপি (DAP)</span>
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>সিলিং বরাদ্দ:</span>
                      <span className="font-mono font-semibold">{searchedFarmer.quotaCeiling.dap} কেজি</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>উত্তোলিত:</span>
                      <span className="font-mono font-semibold text-slate-800">{searchedFarmer.drawnThisSeason.dap} কেজি</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-indigo-200 font-bold text-indigo-800">
                      <span>অবশিষ্ট প্রাপ্যতা:</span>
                      <span className="font-mono text-sm">{remainingQuota.dap} কেজি</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/30">
                  <span className="text-xs font-bold text-amber-900 block">এমওপি (MoP)</span>
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>সিলিং বরাদ্দ:</span>
                      <span className="font-mono font-semibold">{searchedFarmer.quotaCeiling.mop} কেজি</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>উত্তোলিত:</span>
                      <span className="font-mono font-semibold text-slate-800">{searchedFarmer.drawnThisSeason.mop} কেজি</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-amber-200 font-bold text-amber-800">
                      <span>অবশিষ্ট প্রাপ্যতা:</span>
                      <span className="font-mono text-sm">{remainingQuota.mop} কেজি</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Last transaction footer */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
              <span>সর্বশেষ সার ক্রয়ের তারিখ: <strong className="text-slate-800 font-mono">{searchedFarmer.lastPurchaseDate}</strong></span>
              <span>সরবরাহকারী ডিলার: <strong className="text-slate-800">{searchedFarmer.dealer}</strong></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
