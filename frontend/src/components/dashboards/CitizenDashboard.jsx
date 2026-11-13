import { useState } from 'react'
import {
  Scale,
  Globe,
  Store,
  MessageSquare,
  ShieldAlert,
  ArrowRight,
  Calculator,
  CheckCircle2,
  AlertTriangle,
  HelpCircle
} from 'lucide-react'

export default function CitizenDashboard({ onNavigate }) {
  const [calcFertilizer, setCalcFertilizer] = useState('urea')
  const [calcKg, setCalcKg] = useState('50')

  const rates = {
    urea: { name: 'ইউরিয়া (Urea)', rate: 27, bag: 1350 },
    tsp: { name: 'টিএসপি (TSP)', rate: 32, bag: 1600 },
    dap: { name: 'ডিএপি (DAP)', rate: 21, bag: 1050 },
    mop: { name: 'এমওপি (MOP)', rate: 20, bag: 1000 }
  }

  const selectedRate = rates[calcFertilizer]
  const parsedKg = parseFloat(calcKg) || 0
  const totalCost = (parsedKg * selectedRate.rate).toLocaleString('bn-BD')

  const kpis = [
    {
      title: 'ইউরিয়া সরকারি MRP দর',
      value: '২৭.০০ ৳ / কেজি',
      subtext: '৫০ কেজির বস্তা ১,৩৫০ টাকা',
      icon: Scale,
      color: 'emerald',
      badge: 'সর্বোচ্চ খুচরা মূল্য'
    },
    {
      title: 'টিএসপি সরকারি MRP দর',
      value: '৩২.০০ ৳ / কেজি',
      subtext: '৫০ কেজির বস্তা ১,৬০০ টাকা',
      icon: Scale,
      color: 'emerald',
      badge: 'ভর্তুকিমূল্য'
    },
    {
      title: 'ডিএপি সরকারি MRP দর',
      value: '২১.০০ ৳ / কেজি',
      subtext: '৫০ কেজির বস্তা ১,০৫০ টাকা',
      icon: Scale,
      color: 'emerald',
      badge: 'ভর্তুকিমূল্য'
    },
    {
      title: 'এমওপি সরকারি MRP দর',
      value: '২০.০০ ৳ / কেজি',
      subtext: '৫০ কেজির বস্তা ১,০০০ টাকা',
      icon: Scale,
      color: 'emerald',
      badge: 'ভর্তুকিমূল্য'
    }
  ]

  const dealersSummary = [
    { name: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ', union: '৩ নং বাট্টাজোড় ইউনিয়ন', stock: '৭.৫ মে.টন মজুত', status: 'পর্যাপ্ত' },
    { name: 'মেসার্স কৃষক বন্ধু ঘর', union: '৫ নং বকশীগঞ্জ ইউনিয়ন', stock: '৬.২ মে.টন মজুত', status: 'পর্যাপ্ত' },
    { name: 'মেসার্স নতুন ফসল ট্রেডার্স', union: '২ নং বগারচর ইউনিয়ন', stock: '৫.৮ মে.টন মজুত', status: 'পর্যাপ্ত' },
    { name: 'মেসার্স সবুজ কৃষি ভান্ডার', union: '৬ নং ধানুয়া কামালপুর ইউনিয়ন', stock: '৪.৫ মে.টন মজুত', status: 'পর্যাপ্ত' }
  ]

  return (
    <div className="space-y-4 font-sans">
      
      {/* Sub-Header Banner */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              উন্মুক্ত সার বিতরণ তথ্য ও নাগরিক সেবা পোর্টাল
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
              লগইনবিহীন উন্মুক্ত সেবা
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার • কৃষি মন্ত্রণালয় — ন্যায্যমূল্যে প্রান্তিক কৃষকের হাতে রাসায়নিক সার বিতরণ নিশ্চিতকরণ
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('citizen-portal')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#14532d] hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>লাইভ স্টক পোর্টাল</span>
          </button>
          <button
            onClick={() => onNavigate('complaints')}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 rounded-lg text-xs font-semibold transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>গোপনীয় অভিযোগ</span>
          </button>
        </div>
      </div>

      {/* Top 4 KPI Cards (Gazette MRP) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((k, i) => {
          const Icon = k.icon
          return (
            <div
              key={i}
              className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">{k.title}</span>
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-2">
                <p className="text-xl sm:text-2xl font-bold text-emerald-950 font-mono tracking-tight">{k.value}</p>
                <div className="flex items-center justify-between mt-1 text-[11px]">
                  <span className="text-slate-500">{k.subtext}</span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    {k.badge}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Row 2: Live MRP Calculator & Local Dealers Live Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left: Government Fair Price Calculator (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-emerald-700" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                সরকারি সার ন্যায্যমূল্য ক্যালকুলেটর
              </h3>
            </div>
            <button
              onClick={() => onNavigate('price-ceiling')}
              className="text-xs text-emerald-700 hover:text-emerald-900 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>গেজেট নোটিশ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">সারের ধরন নির্বাচন করুন</label>
              <select
                value={calcFertilizer}
                onChange={(e) => setCalcFertilizer(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer"
              >
                <option value="urea">ইউরিয়া (Urea) — ২৭ ৳/কেজি</option>
                <option value="tsp">টিএসপি (TSP) — ৩২ ৳/কেজি</option>
                <option value="dap">ডিএপি (DAP) — ২১ ৳/কেজি</option>
                <option value="mop">এমওপি (MOP) — ২০ ৳/কেজি</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">পরিমাণ (কেজি)</label>
              <input
                type="number"
                min="1"
                value={calcKg}
                onChange={(e) => setCalcKg(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-emerald-800 font-semibold block">{selectedRate.name} এর সরকারি মোট মূল্য:</span>
              <span className="text-xl font-bold text-emerald-950 font-mono">{totalCost} টাকা</span>
            </div>
            <div className="text-right text-[11px] text-emerald-700">
              <span className="block font-semibold">দর: {selectedRate.rate} ৳ / কেজি</span>
              <span className="text-[10px] text-slate-500">৫০ কেজির বস্তা: {selectedRate.bag} ৳</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-200">
            ⚠️ <strong>সতর্কতা:</strong> কোনো ডিলার বা বিক্রয়কেন্দ্র যদি উপরের হিসাবের চেয়ে ১ টাকাও বেশি দাবি করে বা কিউআর কোডযুক্ত ক্যাশ মেমো দিতে অস্বীকৃতি জানায়, তবে নিচের বোতাম চেপে সরাসরি অভিযোগ দাখিল করুন।
          </p>
        </div>

        {/* Right: Authorized Dealers & Live Stock Search (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                নিকটস্থ অনুমোদিত ডিলার ও স্টক
              </h3>
              <Store className="w-4 h-4 text-emerald-700" />
            </div>

            <div className="space-y-2 mt-3 text-xs">
              {dealersSummary.map((d, i) => (
                <div key={i} className="p-2 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800 block">{d.name}</span>
                    <span className="text-[10px] text-slate-400">{d.union}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {d.stock}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate('citizen-portal')}
            className="w-full py-2 bg-[#14532d] hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>সম্পূর্ণ লাইভ স্টক ম্যাপ ও আউটলেট দেখুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Row 3: Anonymous Grievance Submission Card */}
      <div className="p-4 bg-gradient-to-r from-rose-50 via-white to-amber-50 rounded-xl border border-rose-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl border border-rose-200 shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              অতিরিক্ত দাম বা ওজনে কারচুপির বিরুদ্ধে গোপনীয় অভিযোগ দাখিল
            </h4>
            <p className="text-[11px] text-slate-600 mt-0.5">
              আপনার নাম ও পরিচয় গোপন থাকবে। অভিযোগ সরাসরি উপজেলা নির্বাহী কর্মকর্তা (UNO) ও কৃষি কর্মকর্তার টেবিলে পৌঁছাবে।
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('complaints')}
          className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
        >
          গোপনীয় অভিযোগ জানান &rarr;
        </button>
      </div>

    </div>
  )
}

