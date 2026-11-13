import React, { useState } from 'react';
import {
  Tag,
  Scale,
  Calculator,
  ShieldCheck,
  AlertCircle,
  FileText,
  Edit3,
  CheckCircle2,
  Sliders,
  DollarSign,
  TrendingDown,
  Info,
  ChevronRight,
  Layers,
  Save,
  X
} from 'lucide-react';

export default function PriceCeilingModule() {
  const [activeTab, setActiveTab] = useState('mrp'); // 'mrp' or 'ceiling'
  const [calculatorCrop, setCalculatorCrop] = useState('boro');
  const [calculatorLandBigha, setCalculatorLandBigha] = useState(3);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [successToast, setSuccessToast] = useState(null);

  // MRP Official Gazette Data
  const [mrpPrices, setMrpPrices] = useState([
    {
      id: 1,
      name: 'ইউরিয়া (Urea)',
      composition: '৪৬% নাইট্রোজেন (Granular/Prilled)',
      govtSubsidyPct: '৬২%',
      dealerPurchaseRate: 25.0, // Per kg
      mrpPerKg: 27.0,
      bagSizeKg: 50,
      bagPrice: 1350,
      lastUpdated: '১ জুলাই ২০২৩',
      gazetteNo: 'কৃম/সার-১/২০২৩-১০৪'
    },
    {
      id: 2,
      name: 'টিএসপি (TSP)',
      composition: '৪৬% ফসফেট ট্রিপল সুপার ফসফেট',
      govtSubsidyPct: '৫৫%',
      dealerPurchaseRate: 20.0,
      mrpPerKg: 22.0,
      bagSizeKg: 50,
      bagPrice: 1100,
      lastUpdated: '১ জুলাই ২০২৩',
      gazetteNo: 'কৃম/সার-১/২০২৩-১০৪'
    },
    {
      id: 3,
      name: 'ডিএপি (DAP)',
      composition: '১৮% নাইট্রোজেন + ৪৬% ফসফরাস',
      govtSubsidyPct: '৫৮%',
      dealerPurchaseRate: 19.0,
      mrpPerKg: 21.0,
      bagSizeKg: 50,
      bagPrice: 1050,
      lastUpdated: '১ জুলাই ২০২৩',
      gazetteNo: 'কৃম/সার-১/২০২৩-১০৪'
    },
    {
      id: 4,
      name: 'এমওপি (MoP)',
      composition: '৬০% পটাশিয়াম মিউরেট অব পটাশ',
      govtSubsidyPct: '৫০%',
      dealerPurchaseRate: 18.0,
      mrpPerKg: 20.0,
      bagSizeKg: 50,
      bagPrice: 1000,
      lastUpdated: '১ জুলাই ২০২৩',
      gazetteNo: 'কৃম/সার-১/২০২৩-১০৪'
    },
    {
      id: 5,
      name: 'জিপসাম (Gypsum)',
      composition: 'ক্যালসিয়াম সালফেট (সালফার ও চুন)',
      govtSubsidyPct: '৩০%',
      dealerPurchaseRate: 10.0,
      mrpPerKg: 12.0,
      bagSizeKg: 50,
      bagPrice: 600,
      lastUpdated: '১ জুলাই ২০২৩',
      gazetteNo: 'কৃম/সার-১/২০২৩-১০৪'
    },
    {
      id: 6,
      name: 'দস্তা সার (Zinc Sulphate)',
      composition: 'মনোহাইড্রেট ৩৬% জিঙ্ক',
      govtSubsidyPct: '২৫%',
      dealerPurchaseRate: 145.0,
      mrpPerKg: 160.0,
      bagSizeKg: 5,
      bagPrice: 800,
      lastUpdated: '১ জুলাই ২০২৩',
      gazetteNo: 'কৃম/সার-১/২০২৩-১০৪'
    }
  ]);

  // Crop Ceiling Rates (kg per bigha - 33 decimals)
  const cropCeilings = [
    {
      cropKey: 'boro',
      cropName: 'উফশী ও হাইব্রিড বোরো ধান',
      season: 'রবি মৌসুম (অক্টোবর - মার্চ)',
      ureaPerBigha: 35,
      tspPerBigha: 13,
      dapPerBigha: 18,
      mopPerBigha: 16,
      gypsumPerBigha: 10,
      notes: 'ইউরিয়া ৩ কিস্তিতে প্রয়োগ বাধ্যতামূলক'
    },
    {
      cropKey: 'aman',
      cropName: 'রোপা আমন ধান',
      season: 'খরিফ-২ মৌসুম (জুলাই - নভেম্বর)',
      ureaPerBigha: 25,
      tspPerBigha: 10,
      dapPerBigha: 12,
      mopPerBigha: 12,
      gypsumPerBigha: 8,
      notes: 'বন্যা পরবর্তী জমিতে ডিএপি প্রাধান্য পাবে'
    },
    {
      cropKey: 'potato',
      cropName: 'গোল আলু (উচ্চ ফলনশীল)',
      season: 'রবি মৌসুম (নভেম্বর - ফেব্রুয়ারি)',
      ureaPerBigha: 42,
      tspPerBigha: 22,
      dapPerBigha: 25,
      mopPerBigha: 38,
      gypsumPerBigha: 15,
      notes: 'পটাশ সার কন্দ গঠনে বিশেষ ভূমিকা রাখে'
    },
    {
      cropKey: 'maize',
      cropName: 'হাইব্রিড ভুট্টা',
      season: 'রবি ও খরিফ-১',
      ureaPerBigha: 45,
      tspPerBigha: 18,
      dapPerBigha: 22,
      mopPerBigha: 24,
      gypsumPerBigha: 12,
      notes: 'উচ্চ পুষ্টি চাহিদাসম্পন্ন ফসল'
    },
    {
      cropKey: 'mustard',
      cropName: 'উন্নত জাতের সরিষা (বারি-১৪/১৭)',
      season: 'রবি মৌসুম (অক্টোবর - জানুয়ারি)',
      ureaPerBigha: 16,
      tspPerBigha: 10,
      dapPerBigha: 12,
      mopPerBigha: 10,
      gypsumPerBigha: 18,
      notes: 'সালফার ও জিপসাম তেল উৎপাদন বৃদ্ধি করে'
    }
  ];

  // Selected crop calculation
  const currentCropObj = cropCeilings.find(c => c.cropKey === calculatorCrop) || cropCeilings[0];
  const bighaNum = Number(calculatorLandBigha) || 0;

  const calculatedQuota = {
    urea: Math.round(currentCropObj.ureaPerBigha * bighaNum),
    tsp: Math.round(currentCropObj.tspPerBigha * bighaNum),
    dap: Math.round(currentCropObj.dapPerBigha * bighaNum),
    mop: Math.round(currentCropObj.mopPerBigha * bighaNum),
    gypsum: Math.round(currentCropObj.gypsumPerBigha * bighaNum)
  };

  const calculatedCost =
    calculatedQuota.urea * 27 +
    calculatedQuota.tsp * 22 +
    calculatedQuota.dap * 21 +
    calculatedQuota.mop * 20 +
    calculatedQuota.gypsum * 12;

  const handleEditClick = (item) => {
    setEditItem({ ...item });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    setMrpPrices(prev => prev.map(p => p.id === editItem.id ? editItem : p));
    setShowEditModal(false);
    setSuccessToast(`"${editItem.name}" এর সরকারি নির্ধারিত সর্বোচ্চ খুচরা মূল্য সফলভাবে আপডেট করা হয়েছে।`);
    setTimeout(() => setSuccessToast(null), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {successToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#14532d] text-white text-xs font-semibold rounded-xl shadow-lg border border-emerald-700 animate-slide-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Top Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <Scale className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  সরকারি গেজেট ও সার নিয়ন্ত্রণ আদেশ ১৯৯৫
                </span>
                <span className="text-xs text-slate-400 font-mono">GAZETTE-SEC-MRP-2023</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                মূল্য (MRP) ও সিলিং নীতিমালা
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                কৃষি মন্ত্রণালয় কর্তৃক নির্ধারিত সারের সর্বোচ্চ খুচরা দর এবং জমি ও ফসলভিত্তিক সারের সিলিং বরাদ্দ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>গেজেট বলবৎ: ১ জুলাই ২০২৩ হতে কার্যকর</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('mrp')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'mrp'
                ? 'bg-[#14532d] text-white shadow-xs'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>১. সরকার নির্ধারিত সর্বোচ্চ খুচরা মূল্য (MRP)</span>
          </button>

          <button
            onClick={() => setActiveTab('ceiling')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'ceiling'
                ? 'bg-[#14532d] text-white shadow-xs'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>২. ফসল ও জমিভিত্তিক সর্বোচ্চ সীমা (Ceiling)</span>
          </button>
        </div>
      </div>

      {activeTab === 'mrp' ? (
        <div className="space-y-6">
          {/* Important Gazette Notice Box */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-800 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-900 leading-relaxed">
              <span className="font-bold">আইনি নির্দেশিকা:</span> সার নিয়ন্ত্রণ অধ্যাদেশ ১৯৯৫ এবং ভোক্তা অধিকার সংরক্ষণ আইন ২০০৯ অনুযায়ী ডিলার বা খুচরা বিক্রেতা কর্তৃক নির্ধারিত সর্বোচ্চ মূল্যের (MRP) অতিরিক্ত এক টাকাও গ্রহণ শাস্তিযোগ্য অপরাধ। সকল ডিলারকে তাদের বিক্রয়কেন্দ্রের দৃশ্যমান স্থানে এই মূল্যতালিকা প্রদর্শন করতে হবে।
            </div>
          </div>

          {/* MRP Price Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mrpPrices.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                        ভর্তুকি {item.govtSubsidyPct}
                      </span>
                      <h3 className="text-base font-bold text-slate-800 mt-2">{item.name}</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.composition}</p>
                    </div>
                    <button
                      onClick={() => handleEditClick(item)}
                      title="দর সংশোধন"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">প্রতি কেজি সরকারি দর:</span>
                      <span className="text-lg font-bold text-[#14532d] font-mono">
                        ৳{item.mrpPerKg.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{item.bagSizeKg} কেজির ১ বস্তা দর:</span>
                      <span className="text-sm font-bold text-slate-800 font-mono">
                        ৳{item.bagPrice.toLocaleString('bn-BD')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>ডিলারের ক্রয়মূল্য (বাফার গেট):</span>
                      <span className="font-mono">৳{item.dealerPurchaseRate.toFixed(2)}/কেজি</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="font-mono">{item.gazetteNo}</span>
                  <span>আপডেট: {item.lastUpdated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Crop Ceiling Matrix Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-slate-800">
                  ফসলভিত্তিক প্রতি বিঘা (৩৩ শতক) সর্বোচ্চ অনুমোদিত সারের সিলিং
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  বাংলাদেশ কৃষি গবেষণা কাউন্সিল (BARC) ও DAE মৃত্তিকা নির্দেশিকা অনুযায়ী সিলিং ধার্য
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                পরিমাপ একক: কেজি / বিঘা
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-700">
                <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase">
                  <tr>
                    <th className="py-3 px-4">ফসলের নাম</th>
                    <th className="py-3 px-4">মৌসুম</th>
                    <th className="py-3 px-4 text-center">ইউরিয়া (কেজি)</th>
                    <th className="py-3 px-4 text-center">টিএসপি (কেজি)</th>
                    <th className="py-3 px-4 text-center">ডিএপি (কেজি)</th>
                    <th className="py-3 px-4 text-center">এমওপি (কেজি)</th>
                    <th className="py-3 px-4 text-center">জিপসাম (কেজি)</th>
                    <th className="py-3 px-4">প্রয়োগের বিশেষ নির্দেশনা</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {cropCeilings.map(c => (
                    <tr key={c.cropKey} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-800">{c.cropName}</td>
                      <td className="py-3.5 px-4 text-slate-500">{c.season}</td>
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-emerald-800">
                        {c.ureaPerBigha}
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-700">
                        {c.tspPerBigha}
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-indigo-700">
                        {c.dapPerBigha}
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-amber-700">
                        {c.mopPerBigha}
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono text-slate-600">
                        {c.gypsumPerBigha}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 italic text-[11px]">{c.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Farmer Quota Ceiling Calculator */}
          <div className="bg-gradient-to-br from-emerald-50/60 via-white to-slate-50 rounded-2xl border border-emerald-200/80 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#14532d] flex items-center justify-center text-white">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  ইন্টারেক্টিভ কৃষক সার সিলিং ও খরচের হিসাব ক্যালকুলেটর
                </h3>
                <p className="text-xs text-slate-500">
                  জমির পরিমাণ ও ফসল দিলে সিস্টেম স্বয়ংক্রিয়ভাবে সিলিং ও সরকারি নির্ধারিত সর্বমোট মূল্য হিসাব করবে
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ফসলের ধরন নির্বাচন
                </label>
                <select
                  value={calculatorCrop}
                  onChange={e => setCalculatorCrop(e.target.value)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 font-semibold focus:outline-none focus:border-emerald-600 shadow-xs"
                >
                  {cropCeilings.map(c => (
                    <option key={c.cropKey} value={c.cropKey}>
                      {c.cropName} ({c.season})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  আবাদি জমির পরিমাণ (বিঘা হিসেবে)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0.5"
                    step="0.5"
                    max="100"
                    value={calculatorLandBigha}
                    onChange={e => setCalculatorLandBigha(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 font-bold font-mono focus:outline-none focus:border-emerald-600 shadow-xs"
                  />
                  <span className="text-xs text-slate-400 absolute right-3 top-2.5 pointer-events-none">
                    বিঘা ({(bighaNum * 33).toFixed(0)} শতক)
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  সরকারি নির্ধারিত মোট খরচ
                </label>
                <div className="h-[42px] px-4 rounded-lg bg-emerald-100/70 border border-emerald-300 flex items-center justify-between">
                  <span className="text-xs text-emerald-900 font-medium">সর্বোচ্চ সরকারি মূল্য:</span>
                  <span className="text-base font-bold text-[#14532d] font-mono">
                    ৳{calculatedCost.toLocaleString('bn-BD')}
                  </span>
                </div>
              </div>
            </div>

            {/* Quota Breakdown Result Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-emerald-100">
              <div className="bg-white rounded-xl border border-slate-200 p-3 text-center">
                <span className="text-[11px] font-semibold text-slate-500 block">ইউরিয়া সিলিং</span>
                <span className="text-lg font-bold text-emerald-800 font-mono block mt-1">
                  {calculatedQuota.urea} কেজি
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  ({(calculatedQuota.urea / 50).toFixed(1)} বস্তা)
                </span>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-3 text-center">
                <span className="text-[11px] font-semibold text-slate-500 block">টিএসপি সিলিং</span>
                <span className="text-lg font-bold text-slate-800 font-mono block mt-1">
                  {calculatedQuota.tsp} কেজি
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  ({(calculatedQuota.tsp / 50).toFixed(1)} বস্তা)
                </span>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-3 text-center">
                <span className="text-[11px] font-semibold text-slate-500 block">ডিএপি সিলিং</span>
                <span className="text-lg font-bold text-indigo-700 font-mono block mt-1">
                  {calculatedQuota.dap} কেজি
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  ({(calculatedQuota.dap / 50).toFixed(1)} বস্তা)
                </span>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-3 text-center">
                <span className="text-[11px] font-semibold text-slate-500 block">এমওপি সিলিং</span>
                <span className="text-lg font-bold text-amber-700 font-mono block mt-1">
                  {calculatedQuota.mop} কেজি
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  ({(calculatedQuota.mop / 50).toFixed(1)} বস্তা)
                </span>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-3 text-center">
                <span className="text-[11px] font-semibold text-slate-500 block">জিপসাম সিলিং</span>
                <span className="text-lg font-bold text-slate-700 font-mono block mt-1">
                  {calculatedQuota.gypsum} কেজি
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  ({(calculatedQuota.gypsum / 50).toFixed(1)} বস্তা)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit MRP Modal */}
      {showEditModal && editItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-800">
                সারের দর ও নীতিমালা হালনাগাদ
              </h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">সারের নাম</label>
                <input
                  type="text"
                  disabled
                  value={editItem.name}
                  className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-semibold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    খুচরা দর (টাকা/কেজি)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={editItem.mrpPerKg}
                    onChange={e => {
                      const val = parseFloat(e.target.value) || 0;
                      setEditItem({
                        ...editItem,
                        mrpPerKg: val,
                        bagPrice: val * editItem.bagSizeKg
                      });
                    }}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 font-bold font-mono focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    ১ বস্তার দর (৫০ কেজি)
                  </label>
                  <input
                    type="number"
                    value={editItem.bagPrice}
                    disabled
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-bold font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">
                  গেজেট প্রজ্ঞাপন রেফারেন্স
                </label>
                <input
                  type="text"
                  value={editItem.gazetteNo}
                  onChange={e => setEditItem({ ...editItem, gazetteNo: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 font-mono focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                বাতিল
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#14532d] rounded-lg hover:bg-emerald-900 shadow-sm"
              >
                সংরক্ষণ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
