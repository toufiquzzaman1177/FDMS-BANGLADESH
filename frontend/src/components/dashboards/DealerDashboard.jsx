import { useState } from 'react'
import {
  Package,
  Store,
  Landmark,
  FileText,
  ShoppingBag,
  Send,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Truck
} from 'lucide-react'

export default function DealerDashboard({ onNavigate }) {
  const [stoSuccess, setStoSuccess] = useState('')

  const handleQuickSto = (wardName) => {
    setStoSuccess(`${wardName}-এ ৫০০ কেজি সার ট্রান্সফার নির্দেশ পাঠানো হয়েছে।`)
    setTimeout(() => setStoSuccess(''), 3000)
  }

  const kpis = [
    {
      title: 'বাফার থেকে উত্তোলন (Inward)',
      value: '৪২.৫ মে.টন',
      subtext: 'জামালপুর ও শেরপুর বাফার গোডাউন',
      icon: Package,
      color: 'blue',
      badge: 'অনুমোদিত'
    },
    {
      title: 'সোনালী ব্যাংক চালান জমা',
      value: '৪,২০,০০০ ৳',
      subtext: 'ট্রেজারি চালানে পরিশোধিত জামানত',
      icon: Landmark,
      color: 'emerald',
      badge: 'ভেরিফাইড'
    },
    {
      title: '৩টি ওয়ার্ডে স্টক ট্রান্সফার (STO)',
      value: '৩৫.০ মে.টন',
      subtext: 'অনুমোদিত ওয়ার্ড আউটলেটে প্রেরিত',
      icon: Store,
      color: 'amber',
      badge: '৩টি আউটলেট'
    },
    {
      title: 'প্রধান গোডাউন বর্তমান মজুত',
      value: '৭.৫ মে.টন',
      subtext: 'নিরাপদ বাফার রিজার্ভ স্টক',
      icon: ShoppingBag,
      color: 'purple',
      badge: 'পর্যাপ্ত মজুত'
    }
  ]

  const wardOutlets = [
    {
      ward: '১ নং ওয়ার্ড বিক্রয়কেন্দ্র',
      location: 'বাট্টাজোড় বাজার পয়েন্ট',
      sent: '১২.০ মে.টন',
      stock: '২.৪ মে.টন',
      sales: '৮৫০ কেজি / দিন',
      operator: 'মোঃ হাবিবুর রহমান (POS-01)',
      status: 'সক্রিয়'
    },
    {
      ward: '২ নং ওয়ার্ড বিক্রয়কেন্দ্র',
      location: 'চরপাড়া আউটলেট কাউন্টার',
      sent: '১১.৫ মে.টন',
      stock: '১.৮ মে.টন',
      sales: '৭২০ কেজি / দিন',
      operator: 'আব্দুল করিম (POS-02)',
      status: 'সক্রিয়'
    },
    {
      ward: '৩ নং ওয়ার্ড বিক্রয়কেন্দ্র',
      location: 'দক্ষিণপাড়া বিক্রয় পয়েন্ট',
      sent: '১১.৫ মে.টন',
      stock: '৩.৩ মে.টন',
      sales: '৯৮০ কেজি / দিন',
      operator: 'মোঃ শফিকুল ইসলাম (POS-03)',
      status: 'সক্রিয়'
    }
  ]

  const bufferInward = [
    {
      doNo: 'DO-2026-9912',
      challan: 'BF-2026-8812',
      source: 'জামালপুর বিসিআইসি বাফার গুদাম',
      type: 'ইউরিয়া (Urea)',
      qty: '২৫.০ মে.টন',
      date: '০৪ নভেম্বর ২০২৬',
      bankChallan: 'TR-77401'
    },
    {
      doNo: 'DO-2026-9988',
      challan: 'BF-2026-8890',
      source: 'শেরপুর বাফার আমদানি ডিপো',
      type: 'টিএসপি ও ডিএপি',
      qty: '১৭.৫ মে.টন',
      date: '০৭ নভেম্বর ২০২৬',
      bankChallan: 'TR-77402'
    }
  ]

  return (
    <div className="space-y-4 font-sans">
      
      {/* Toast Notification */}
      {stoSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs flex items-center gap-2 shadow-xs animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold">{stoSuccess}</span>
        </div>
      )}

      {/* Sub-Header Banner */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              মেসার্স মাটির মানুষ এন্টারপ্রাইজ — ডিলার কনসোল
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold">
              ৩ নং বাট্টাজোড় ইউনিয়ন ডিলার
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            লাইসেন্স নং: TR-2026-3391 • সোনালী ব্যাংক হিসাব: ০৮১২-২২৯১-০০৪১ • বাফার গোডাউন থেকে সার উত্তোলন ও ৩টি ওয়ার্ডে সরবরাহ
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('ward-outlets')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>নতুন STO পাঠান</span>
          </button>
          <button
            onClick={() => onNavigate('gov-reports')}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-all cursor-pointer"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>মাসিক ফরম-ক</span>
          </button>
        </div>
      </div>

      {/* Top 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((k, i) => {
          const Icon = k.icon
          return (
            <div
              key={i}
              className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">{k.title}</span>
                <div className={`p-1.5 rounded-lg bg-${k.color}-50 text-${k.color}-700 border border-${k.color}-100`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-2">
                <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{k.value}</p>
                <div className="flex items-center justify-between mt-1 text-[11px]">
                  <span className="text-slate-500">{k.subtext}</span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                    {k.badge}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Row 2: 3 Ward Outlets Network & Godown Balance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left: 3 Ward Outlets STO Ledger (8 Cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                ৩টি অনুমোদিত ওয়ার্ড বিক্রয়কেন্দ্র ও লাইভ স্টক ট্র্যাকিং (STO)
              </h3>
              <p className="text-[11px] text-slate-500">সরকারি নীতিমালা অনুযায়ী প্রতিটি ডিলারের অধীন ৩টি শাখা বিক্রয় পয়েন্ট</p>
            </div>
            <button
              onClick={() => onNavigate('ward-outlets')}
              className="text-xs text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>সকল আউটলেট</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {wardOutlets.map((outlet, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-50 hover:bg-blue-50/40 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <h4 className="text-xs font-bold text-slate-900">{outlet.ward}</h4>
                    <span className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 font-medium">
                      {outlet.location}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    অপারেটর: {outlet.operator} • গড় বিক্রি: {outlet.sales}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">বর্তমান স্টক</span>
                    <span className="text-xs font-bold text-blue-700 font-mono">{outlet.stock}</span>
                  </div>
                  <button
                    onClick={() => handleQuickSto(outlet.ward)}
                    className="px-2.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-[11px] font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0"
                  >
                    + STO পাঠান
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Main Godown Live Stock Balance (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                প্রধান গোডাউন মজুত হিসাব
              </h3>
              <ShoppingBag className="w-4 h-4 text-blue-700" />
            </div>

            <div className="space-y-2 mt-3">
              <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-800 font-semibold uppercase block">ইউরিয়া (Urea)</span>
                  <span className="text-xs font-bold text-emerald-950">৪,২০০ কেজি</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700">৮৪ বস্তা</span>
              </div>

              <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-800 font-semibold uppercase block">টিএসপি (TSP)</span>
                  <span className="text-xs font-bold text-emerald-950">১,৮০০ কেজি</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700">৩৬ বস্তা</span>
              </div>

              <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-800 font-semibold uppercase block">ডিএপি (DAP)</span>
                  <span className="text-xs font-bold text-emerald-950">৯৫০ কেজি</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700">১৯ বস্তা</span>
              </div>

              <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-800 font-semibold uppercase block">এমওপি (MOP)</span>
                  <span className="text-xs font-bold text-emerald-950">৫৫০ কেজি</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700">১১ বস্তা</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('stock')}
            className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>সম্পূর্ণ স্টক লেজার</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Row 3: Buffer Inward Inward Challans & Form-K Filing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Buffer Godown Inward (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-blue-700" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                বাফার গোডাউন থেকে সার উত্তোলন চালান (Inward)
              </h3>
            </div>
            <button
              onClick={() => onNavigate('stock')}
              className="text-xs text-blue-700 hover:underline font-semibold cursor-pointer"
            >
              লেজার &rarr;
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {bufferInward.map((item, i) => (
              <div key={i} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">{item.source}</span>
                  <span className="text-[11px] text-slate-500 font-mono">চালান: {item.challan} • ডিও: {item.doNo}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-emerald-700 font-mono block">{item.qty}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Form-K Submission Card (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                  সরকারি মাসিক 'ফরম-ক' দাখিল
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                চলতি মাস প্রস্তুত
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 mt-3 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-600">মোট প্রাপ্তি (Inward):</span>
                <span className="font-bold text-slate-900 font-mono">৪২.৫০ মে.টন</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">৩টি ওয়ার্ডে বিতরণ (Sales):</span>
                <span className="font-bold text-slate-900 font-mono">৩৫.০০ মে.টন</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-1.5">
                <span className="text-slate-700 font-semibold">মাসান্তিক মজুত (Balance):</span>
                <span className="font-bold text-blue-700 font-mono">৭.৫০ মে.টন</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('gov-reports')}
            className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>উপজেলা কৃষি অফিসে ফরম-ক দাখিল করুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  )
}
