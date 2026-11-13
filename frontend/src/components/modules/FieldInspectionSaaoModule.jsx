import React, { useState } from 'react';
import {
  MapPin,
  ClipboardCheck,
  Navigation,
  Camera,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Layers,
  Send,
  Building2,
  FileCheck,
  Search,
  Check,
  X
} from 'lucide-react';

export default function FieldInspectionSaaoModule() {
  const [activeTab, setActiveTab] = useState('inspection'); // 'inspection' or 'survey'
  const [isGpsLocating, setIsGpsLocating] = useState(false);
  const [gpsCoordinates, setGpsCoordinates] = useState('24.2341° N, 89.2812° E (সরেজমিন অবস্থান সনাক্তকৃত)');
  const [toastMessage, setToastMessage] = useState(null);

  // Field inspection checklist form
  const [inspectionForm, setInspectionForm] = useState({
    dealerName: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
    outletName: '৩ নং ওয়ার্ড উপ-বিক্রয়কেন্দ্র (বাট্টাজোড়)',
    inspectionDate: '১৩ নভেম্বর ২০২৬',
    ureaBagsCount: '২৪০ বস্তা (শারীরিক গণনা সম্পন্ন)',
    tspBagsCount: '১২০ বস্তা',
    dapBagsCount: '১১০ বস্তা',
    mopBagsCount: '৯৫ বস্তা',
    priceBoardDisplayed: true,
    cashMemoGiven: true,
    overpricingObserved: false,
    weightAccuracyOk: true,
    remarks: 'বিক্রয়কেন্দ্রে সরকারি মূল্যে সার বিক্রয় হচ্ছে এবং কৃষকদের সন্তুষ্টি পাওয়া গেছে।'
  });

  // Seasonal Crop Demand Survey Data
  const cropSurveyData = [
    {
      blockName: 'বাট্টাজোড় ব্লক-১',
      totalLandHectare: 420,
      mainCrop: 'বোরো ধান (উফশী)',
      estimatedUreaTon: 145.0,
      estimatedTspTon: 54.0,
      estimatedDapTon: 75.0,
      estimatedMopTon: 68.0,
      status: 'জরিপ চূড়ান্ত'
    },
    {
      blockName: 'বাট্টাজোড় ব্লক-২',
      totalLandHectare: 380,
      mainCrop: 'গোল আলু ও গম',
      estimatedUreaTon: 160.0,
      estimatedTspTon: 82.0,
      estimatedDapTon: 95.0,
      estimatedMopTon: 140.0,
      status: 'জরিপ চূড়ান্ত'
    },
    {
      blockName: 'বগারচর ব্লক-১',
      totalLandHectare: 510,
      mainCrop: 'বোরো ধান ও ভুট্টা',
      estimatedUreaTon: 195.0,
      estimatedTspTon: 78.0,
      estimatedDapTon: 98.0,
      estimatedMopTon: 92.0,
      status: 'জরিপ চূড়ান্ত'
    },
    {
      blockName: 'সাধুরপাড়া ব্লক',
      totalLandHectare: 360,
      mainCrop: 'উন্নত জাতের সরিষা ও রবি ডাল',
      estimatedUreaTon: 58.0,
      estimatedTspTon: 36.0,
      estimatedDapTon: 42.0,
      estimatedMopTon: 35.0,
      status: 'যাচাইাধীন'
    }
  ];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleRefreshGps = () => {
    setIsGpsLocating(true);
    setTimeout(() => {
      setIsGpsLocating(false);
      setGpsCoordinates('24.2389° N, 89.2845° E (জিপিএস সিঙ্ক সম্পন্ন: ৩ নং বাট্টাজোড় হাট)');
      showToast('জিপিএস জিও-ট্যাগ সফলভাবে অবস্থান শনাক্ত করেছে।');
    }, 700);
  };

  const handleSubmitInspection = (e) => {
    e.preventDefault();
    showToast('মাঠ পরিদর্শন প্রতিবেদন এবং জিপিএস অডিট লগ উপজেলা কৃষি অফিসার (UAO) বরাবর দাখিল সম্পন্ন হয়েছে।');
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
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <ClipboardCheck className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  রোল: মাঠ কর্মকর্তা (SAAO / উপসহকারী কৃষি কর্মকর্তা)
                </span>
                <span className="text-xs text-slate-400 font-mono">SAAO-OFFICER-PORTAL</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                মাঠ পরিদর্শন, জিপিএস অডিট ও মৌসুমী চাহিদা জরিপ
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                ওয়ার্ড বিক্রয়কেন্দ্রে সরেজমিনে গিয়ে জিপিএস জিও-ট্যাগিং সহ শারীরিক স্টক যাচাই ও ব্লকভিত্তিক ফসলি জমির চাহিদা জরিপ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>মাঠ দায়িত্ব: বাট্টাজোড় ব্লক-১ ও ২</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('inspection')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'inspection'
                ? 'bg-[#14532d] text-white shadow-2xs'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <Navigation className="w-4 h-4" />
            <span>১. জিপিএস লোকেশনযুক্ত সরেজমিনে আউটলেট পরিদর্শন</span>
          </button>

          <button
            onClick={() => setActiveTab('survey')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'survey'
                ? 'bg-[#14532d] text-white shadow-2xs'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>২. মৌসুমী ফসলি জমির সারের চাহিদা জরিপ ({cropSurveyData.length} ব্লক)</span>
          </button>
        </div>
      </div>

      {activeTab === 'inspection' ? (
        <form onSubmit={handleSubmitInspection} className="space-y-6">
          {/* GPS Live Tag Bar */}
          <div className="bg-emerald-50/70 border border-emerald-300 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#14532d] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-800 uppercase block">রিয়েলটাইম জিপিএস লোকেশন (Geo-Stamp)</span>
                <span className="text-xs font-mono font-bold text-slate-800">{gpsCoordinates}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleRefreshGps}
              className="px-3.5 py-1.5 bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-lg text-xs font-semibold transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <Navigation className={`w-3.5 h-3.5 ${isGpsLocating ? 'animate-spin' : ''}`} />
              <span>{isGpsLocating ? 'চিহ্নিত হচ্ছে...' : 'জিপিএস রিফ্রেশ'}</span>
            </button>
          </div>

          {/* Inspection Details Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">পরিদর্শনকৃত ডিলার</label>
                <input
                  type="text"
                  value={inspectionForm.dealerName}
                  disabled
                  className="w-full text-xs bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">পরিদর্শনকৃত বিক্রয়কেন্দ্র</label>
                <input
                  type="text"
                  value={inspectionForm.outletName}
                  disabled
                  className="w-full text-xs bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">পরিদর্শনের তারিখ</label>
                <input
                  type="text"
                  value={inspectionForm.inspectionDate}
                  disabled
                  className="w-full text-xs bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono"
                />
              </div>
            </div>

            {/* Physical Bag Counting Grid */}
            <div>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2 pb-2 border-b border-slate-100">
                শারীরিক মজুত গণনা (Physical Bag Counting at Godown)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">ইউরিয়া বস্তা গণনা</label>
                  <input
                    type="text"
                    value={inspectionForm.ureaBagsCount}
                    onChange={e => setInspectionForm({ ...inspectionForm, ureaBagsCount: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono font-bold focus:bg-white focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">টিএসপি বস্তা গণনা</label>
                  <input
                    type="text"
                    value={inspectionForm.tspBagsCount}
                    onChange={e => setInspectionForm({ ...inspectionForm, tspBagsCount: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono font-bold focus:bg-white focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">ডিএপি বস্তা গণনা</label>
                  <input
                    type="text"
                    value={inspectionForm.dapBagsCount}
                    onChange={e => setInspectionForm({ ...inspectionForm, dapBagsCount: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono font-bold focus:bg-white focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">এমওপি বস্তা গণনা</label>
                  <input
                    type="text"
                    value={inspectionForm.mopBagsCount}
                    onChange={e => setInspectionForm({ ...inspectionForm, mopBagsCount: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono font-bold focus:bg-white focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Compliance Checklist */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2 pb-2 border-b border-slate-100">
                মাঠপর্যায়ের কমপ্লায়েন্স চেকলিস্ট
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inspectionForm.priceBoardDisplayed}
                    onChange={e => setInspectionForm({ ...inspectionForm, priceBoardDisplayed: e.target.checked })}
                    className="w-4 h-4 rounded text-[#14532d] focus:ring-emerald-500"
                  />
                  <span>১. নির্ধারিত স্থানে দৃশ্যমান মূল্যের তালিকা বোর্ড উপস্থিত রয়েছে</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inspectionForm.cashMemoGiven}
                    onChange={e => setInspectionForm({ ...inspectionForm, cashMemoGiven: e.target.checked })}
                    className="w-4 h-4 rounded text-[#14532d] focus:ring-emerald-500"
                  />
                  <span>২. কৃষকদের কিউআর কোডযুক্ত ক্যাশ মেমো প্রদান নিশ্চিত করা হচ্ছে</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inspectionForm.weightAccuracyOk}
                    onChange={e => setInspectionForm({ ...inspectionForm, weightAccuracyOk: e.target.checked })}
                    className="w-4 h-4 rounded text-[#14532d] focus:ring-emerald-500"
                  />
                  <span>৩. ডিজিটাল ওয়েট স্কেলে প্রতি বস্তা ৫০ কেজি ওজন সঠিক রয়েছে</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!inspectionForm.overpricingObserved}
                    onChange={e => setInspectionForm({ ...inspectionForm, overpricingObserved: !e.target.checked })}
                    className="w-4 h-4 rounded text-[#14532d] focus:ring-emerald-500"
                  />
                  <span>৪. কোনো প্রকার অতিরিক্ত মূল্য বা বাধ্যতামূলক অন্য সার চাপানো হয়নি</span>
                </label>
              </div>
            </div>

            {/* SAAO Final Remarks */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                সরেজমিন পরিদর্শন মন্তব্য ও সুপারিশ
              </label>
              <textarea
                rows={2}
                value={inspectionForm.remarks}
                onChange={e => setInspectionForm({ ...inspectionForm, remarks: e.target.value })}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-800 focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#14532d] hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm cursor-pointer inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>পরিদর্শন রিপোর্ট ইউএও বরাবর জমা দিন</span>
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-800">
                চলতি রবি মৌসুমের ব্লকভিত্তিক সারের চাহিদা প্রাক্কলন
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                কৃষকদের আবাদি জমি ও ফসলভিত্তিক সারের মাঠ চাহিদা সমীক্ষা (SAAO সারভে)
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-mono font-medium">
              মৌসুম: রবি ২০২৬-২৭
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700">
              <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase">
                <tr>
                  <th className="py-3 px-4">ব্লকের নাম</th>
                  <th className="py-3 px-4">মোট আবাদি জমি (হেক্টর)</th>
                  <th className="py-3 px-4">প্রধান ফসল</th>
                  <th className="py-3 px-4 text-right text-emerald-800">ইউরিয়া চাহিদা (টন)</th>
                  <th className="py-3 px-4 text-right">টিএসপি (টন)</th>
                  <th className="py-3 px-4 text-right text-indigo-700">ডিএপি (টন)</th>
                  <th className="py-3 px-4 text-right text-amber-700">এমওপি (টন)</th>
                  <th className="py-3 px-4 text-center">স্থিতি</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cropSurveyData.map((b, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{b.blockName}</td>
                    <td className="py-3.5 px-4 font-mono font-medium">{b.totalLandHectare} হেক্টর</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">{b.mainCrop}</td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-800">
                      {b.estimatedUreaTon.toFixed(1)} টন
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-medium">
                      {b.estimatedTspTon.toFixed(1)} টন
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-indigo-700">
                      {b.estimatedDapTon.toFixed(1)} টন
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-amber-700">
                      {b.estimatedMopTon.toFixed(1)} টন
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

