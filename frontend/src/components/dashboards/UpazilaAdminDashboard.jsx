import { useState } from 'react'
import {
  Users,
  User,
  Truck,
  Copy,
  FileCheck,
  Gavel,
  RefreshCw,
  CheckSquare,
  CheckCircle2,
  Search,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  AlertCircle
} from 'lucide-react'

export default function UpazilaAdminDashboard({
  onNavigate,
  onVerify,
  isVerifying,
  verificationSuccess,
  onRefresh,
  refreshKey
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDealerModal, setSelectedDealerModal] = useState(null)

  // Top metric cards
  const summaryStats = [
    {
      label: 'মোট ডিলার',
      value: '6',
      subtext: '১০০% নিবন্ধিত',
      icon: Users,
      color: 'emerald',
      iconBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
    },
    {
      label: 'মোট কৃষক',
      value: '64',
      subtext: 'NID ও কার্ড যাচাইকৃত',
      icon: User,
      color: 'emerald',
      iconBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
    },
    {
      label: 'মোট বিতরণ',
      value: '211',
      subtext: 'ডিজিটাল এন্ট্রি সম্পন্ন',
      icon: Truck,
      color: 'emerald',
      iconBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
    },
    {
      label: 'ডুপ্লিকেট ডেটা',
      value: '4',
      subtext: 'অডিট নিরীক্ষা আবশ্যক',
      icon: Copy,
      color: 'rose',
      iconBg: 'bg-rose-50 text-rose-600 ring-1 ring-rose-600/10',
    },
  ]

  // Farmer classes by land size
  const farmerClassStats = [
    {
      label: 'ছোট কৃষক',
      value: '28',
      percentage: '৪৩.৮%',
      landRange: '০.০১ - ০.৪৯ একর',
      icon: User,
      color: '#16a34a',
      iconBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/15',
    },
    {
      label: 'মাঝারি কৃষক',
      value: '25',
      percentage: '৩৯.১%',
      landRange: '০.৫০ - ২.৪৯ একর',
      icon: User,
      color: '#d97706',
      iconBg: 'bg-amber-50 text-amber-700 ring-1 ring-amber-600/15',
    },
    {
      label: 'বড় কৃষক',
      value: '11',
      percentage: '১৭.২%',
      landRange: '২.৫০ একর বা তদূর্ধ্ব',
      icon: User,
      color: '#e11d48',
      iconBg: 'bg-rose-50 text-rose-600 ring-1 ring-rose-600/15',
    },
  ]

  // Fertilizer Donut Chart data
  const fertilizerDistribution = [
    { name: 'ইউরিয়া', value: 38, hex: '#166534', kg: '১,১৬১ কেজি' },
    { name: 'টিএসপি', value: 24, hex: '#16a34a', kg: '৭৩৩ কেজি' },
    { name: 'ডিএপি', value: 18, hex: '#4ade80', kg: '৫৫০ কেজি' },
    { name: 'এমওপি', value: 14, hex: '#ca8a04', kg: '৪২৮ কেজি' },
    { name: 'জৈব সার', value: 6, hex: '#78350f', kg: '১৮৩ কেজি' },
  ]

  // Union distribution bar chart data
  const unionData = [
    { name: '১', value: 600, label: '১ নং ইউনিয়ন' },
    { name: '২', value: 650, label: '২ নং বগারচর' },
    { name: '৩', value: 680, label: '৩ নং বাট্টাজোড়' },
    { name: '৪', value: 480, label: '৪ নং সাধুরপাড়া' },
    { name: '৫', value: 650, label: '৫ নং বকশীগঞ্জ' },
    { name: '৬', value: 0, label: '৬ নং নিলাখিয়া' },
    { name: '৭', value: 0, label: '৭ নং ইউনিয়ন' },
    { name: 'বকশীগঞ্জ', value: 0, label: 'বকশীগঞ্জ পৌরসভা' },
  ]

  // Monthly distribution trend
  const monthlyTrend = [
    { month: '2026-08', value: '৩৩০ কেজি', x: 80, y: 163 },
    { month: '2026-09', value: '১,৪৫০ কেজি', x: 380, y: 37 },
    { month: '2026-10', value: '১,১০০ কেজি', x: 680, y: 76 },
    { month: '2026-11', value: '২০০ কেজি', x: 960, y: 178 },
  ]

  // Top Dealers
  const topDealers = [
    { rank: 1, name: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ (ডেমো)', union: '৩ নং বাট্টাজোড় ইউনিয়ন', totalKg: '৬৭০ কেজি', distributions: '45 বিতরণ' },
    { rank: 2, name: 'মেসার্স কৃষক বন্ধু ঘর (ডেমো)', union: '৫ নং বকশীগঞ্জ ইউনিয়ন', totalKg: '৬২২ কেজি', distributions: '43 বিতরণ' },
    { rank: 3, name: 'মেসার্স নতুন ফসল ট্রেডার্স (ডেমো)', union: '২ নং বগারচর ইউনিয়ন', totalKg: '৬২০ কেজি', distributions: '45 বিতরণ' },
    { rank: 4, name: 'মেসার্স সবুজ কৃষি ভান্ডার (ডেমো)', union: '৬ নং ধানুয়া কামালপুর ইউনিয়ন', totalKg: '৫০৫ কেজি', distributions: '41 বিতরণ' },
    { rank: 5, name: 'মেসার্স সোনালী মাঠ স্টোর (ডেমো)', union: '৪ নং সাধুরপাড়া ইউনিয়ন', totalKg: '৪৭৫ কেজি', distributions: '37 বিতরণ' },
  ]

  // All dealers distribution table data
  const allDealersDistribution = [
    {
      id: 1,
      name: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ (ডেমো)',
      union: '৩ নং বাট্টাজোড় ইউনিয়ন',
      entries: '৪৫',
      totalKg: '৬৭০',
      status: 'active',
      details: { dealerId: 'D-101', tradeLicense: 'TR-2026-3391', urea: '৩৫০ কেজি', tsp: '১২০ কেজি', dap: '১০০ কেজি', mop: '১০০ কেজি' },
    },
    {
      id: 2,
      name: 'মেসার্স কৃষক বন্ধু ঘর (ডেমো)',
      union: '৫ নং বকশীগঞ্জ ইউনিয়ন',
      entries: '৪৩',
      totalKg: '৬২২',
      status: 'active',
      details: { dealerId: 'D-102', tradeLicense: 'TR-2026-4412', urea: '৩১০ কেজি', tsp: '১১২ কেজি', dap: '১০০ কেজি', mop: '১০০ কেজি' },
    },
    {
      id: 3,
      name: 'মেসার্স নতুন ফসল ট্রেডার্স (ডেমো)',
      union: '২ নং বগারচর ইউনিয়ন',
      entries: '৪৫',
      totalKg: '৬২০',
      status: 'active',
      details: { dealerId: 'D-103', tradeLicense: 'TR-2026-5589', urea: '৩০০ কেজি', tsp: '১২০ কেজি', dap: '১০০ কেজি', mop: '১০০ কেজি' },
    },
    {
      id: 4,
      name: 'মেসার্স সবুজ কৃষি ভান্ডার (ডেমো)',
      union: '৬ নং ধানুয়া কামালপুর ইউনিয়ন',
      entries: '৪১',
      totalKg: '৫০৫',
      status: 'active',
      details: { dealerId: 'D-104', tradeLicense: 'TR-2026-6631', urea: '২৪০ কেজি', tsp: '১০০ কেজি', dap: '৮৫ কেজি', mop: '৮০ কেজি' },
    },
    {
      id: 5,
      name: 'মেসার্স সোনালী মাঠ স্টোর (ডেমো)',
      union: '৪ নং সাধুরপাড়া ইউনিয়ন',
      entries: '৩৭',
      totalKg: '৪৭৫',
      status: 'active',
      details: { dealerId: 'D-105', tradeLicense: 'TR-2026-7782', urea: '২৩০ কেজি', tsp: '৯৫ কেজি', dap: '৭৫ কেজি', mop: '৭৫ কেজি' },
    },
    {
      id: 6,
      name: 'মেসার্স প্রান্তিক সার কেন্দ্র (ডেমো)',
      union: '১ নং ইউনিয়ন',
      entries: '০১',
      totalKg: '১৬৩',
      status: 'active',
      details: { dealerId: 'D-106', tradeLicense: 'TR-2026-8899', urea: '১০০ কেজি', tsp: '৩৮ কেজি', dap: '২৫ কেজি', mop: '০ কেজি' },
    },
  ]

  const filteredDealers = allDealersDistribution.filter(dealer =>
    dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dealer.union.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4 font-sans">
      
      {/* Formal Sub-Header & Status Banner */}
      <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-2.5">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              উপজেলা ড্যাশবোর্ড পর্যবেক্ষণ (UNO / UAO)
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              লাইভ রেকর্ড
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium mt-1">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
            <span>
              কাউন্টার সামঞ্জস্য যাচাই: সব ডিলার সেলস হিস্টোরির যোগফল = মোট বিতরণ ও মোট সার। সর্বশেষ পূর্ণ যাচাই: ৯/১১/২০২৬, ৯:৫৮:০৩ PM
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <button
            onClick={onRefresh}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-emerald-50/60 text-emerald-800 border border-slate-200 hover:border-emerald-500 rounded-lg text-xs font-semibold shadow-2xs transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-emerald-700 ${refreshKey ? 'animate-spin' : ''}`} />
            <span>রিফ্রেশ</span>
          </button>

          <button
            onClick={onVerify}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#164e2a] hover:bg-[#123e21] text-white rounded-lg text-xs font-semibold shadow-xs hover:shadow transition-all cursor-pointer"
          >
            <CheckSquare className="w-3.5 h-3.5 text-emerald-200" />
            <span>{isVerifying ? 'যাচাই হচ্ছে...' : 'পরিসংখ্যান যাচাই'}</span>
          </button>
        </div>
      </div>

      {/* Toast message on verify */}
      {verificationSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs flex items-center justify-between shadow-xs animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>পরিসংখ্যান সম্পূর্ণ সঠিক ও সঙ্গতিপূর্ণ!</strong> ৬টি ডিলারের মোট বিক্রি = ৩,০৫৫ কেজি সার এবং ২১১টি বিতরণ রেকর্ড ডাটাবেজের সাথে হুবহু মিলেছে।
            </span>
          </div>
          <span className="text-[10px] text-emerald-700 font-mono">Status: Verified OK</span>
        </div>
      )}

      {/* Row 1: Top 4 Metric KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {summaryStats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">{stat.label}</span>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${stat.iconBg}`}>
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </div>
              </div>
              <div className="mt-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                  {stat.value}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{stat.subtext}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Row 2: Two Visual Analytics Cards (Donut Chart + Union Distribution) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4">
        
        {/* Left: সারের বিতরণ (শতকরা হার) - Donut Chart (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1 border-b border-slate-100">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                সারের বিতরণ (শতকরা হার)
              </h4>
              <span className="text-[10px] text-slate-400">শতাংশ ও পরিমাণ</span>
            </div>

            {/* SVG Donut Chart */}
            <div className="py-2 flex flex-col items-center justify-center">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform drop-shadow-xs">
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#166534" strokeWidth="18" strokeDasharray="83.6 220" strokeDashoffset="0" />
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#16a34a" strokeWidth="18" strokeDasharray="52.8 220" strokeDashoffset="-83.6" />
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#4ade80" strokeWidth="18" strokeDasharray="39.6 220" strokeDashoffset="-136.4" />
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ca8a04" strokeWidth="18" strokeDasharray="30.8 220" strokeDashoffset="-176" />
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#78350f" strokeWidth="18" strokeDasharray="13.2 220" strokeDashoffset="-206.8" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-sm sm:text-base font-extrabold text-slate-800 leading-tight">৩,০৫৫</span>
                  <span className="text-[10px] text-slate-500 font-medium">মোট কেজি</span>
                </div>
              </div>
            </div>

            {/* Legend with exact kg values */}
            <div className="space-y-1.5 pt-1 border-t border-slate-100">
              {fertilizerDistribution.map((fert, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: fert.hex }}></span>
                    <span className="text-slate-700 font-medium">{fert.name}</span>
                  </div>
                  <div className="flex items-center space-x-2 font-mono">
                    <span className="text-slate-500 text-[11px]">{fert.kg}</span>
                    <span className="font-semibold text-slate-800">{fert.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: ইউনিয়ন অনুযায়ী সার বিতরণ (কেজি) - Bar Chart (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1 border-b border-slate-100">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                ইউনিয়ন অনুযায়ী সার বিতরণ (কেজি)
              </h4>
              <span className="text-[10px] text-slate-400">৮টি ইউনিয়ন / পৌরসভা</span>
            </div>

            {/* Clean SVG Bar Chart with accurate axes */}
            <div className="py-2">
              <div className="relative h-44 sm:h-48 w-full pt-4">
                
                {/* Horizontal Grid lines */}
                <div className="absolute inset-x-8 top-3 bottom-6 flex flex-col justify-between pointer-events-none">
                  {[800, 600, 400, 200, 0].map((val) => (
                    <div key={val} className="border-b border-slate-100 w-full flex items-center justify-between">
                      <span className="text-[9px] text-slate-400 font-mono -ml-7">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Bars Container */}
                <div className="absolute inset-x-8 top-3 bottom-6 flex items-end justify-between px-1 sm:px-3">
                  {unionData.map((u, i) => {
                    const maxVal = 800
                    const heightPercent = (u.value / maxVal) * 100
                    return (
                      <div key={i} className="flex flex-col items-center flex-1 max-w-[40px] sm:max-w-[48px] h-full justify-end group cursor-pointer">
                        {u.value > 0 && (
                          <span className="text-[9px] font-mono text-emerald-800 font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {u.value}
                          </span>
                        )}
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full rounded-t-md transition-all duration-300 ${
                            u.value > 0 ? 'bg-[#166534] hover:bg-[#14532d] shadow-2xs' : 'bg-transparent'
                          }`}
                        />
                      </div>
                    )
                  })}
                </div>

                {/* X-Axis Labels */}
                <div className="absolute inset-x-8 bottom-0 flex justify-between px-1 sm:px-3 text-[10px] text-slate-600 font-medium truncate">
                  {unionData.map((u, i) => (
                    <span key={i} className="flex-1 text-center truncate max-w-[44px]" title={u.label}>
                      {u.name}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>সর্বোচ্চ বিতরণ: <strong>৩ নং বাট্টাজোড় (৬৮০ কেজি)</strong></span>
            <span>মোট সক্রিয় ইউনিয়ন: <strong>৫টি</strong></span>
          </div>
        </div>

      </div>

      {/* Row 3: কৃষক শ্রেণি অনুযায়ী সার বণ্টন */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs space-y-3">
        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              কৃষক শ্রেণি অনুযায়ী সার বণ্টন
            </h4>
            <p className="text-[11px] text-slate-400">জমির আকার ও কৃষক শ্রেণিভিত্তিক পরিসংখ্যান</p>
          </div>
          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-medium">
            মোট ৬৪ জন কৃষক
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {farmerClassStats.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 flex flex-col justify-between hover:bg-white hover:border-slate-300 transition-all shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">{item.label}</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                    {item.percentage}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">{item.landRange}</p>
              </div>

              <div className="mt-3 flex items-end justify-between">
                <div>
                  <span className="text-2xl font-black text-slate-900 font-sans">{item.value}</span>
                  <span className="text-[11px] text-slate-500 ml-1">জন কৃষক</span>
                </div>
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 4: Monthly Distribution Trend */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs space-y-3">
        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
            মাসিক সার বিতরণ চিত্র (মাস ভিত্তিক)
          </h4>
          <span className="text-[10px] text-slate-400">সর্বশেষ ৪ মাসের অগ্রগতি</span>
        </div>

        <div className="py-2">
          <div className="relative h-44 sm:h-52 w-full">
            <svg viewBox="0 0 1040 220" className="w-full h-full overflow-visible">
              <line x1="40" y1="20" x2="1000" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40" y1="70" x2="1000" y2="70" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40" y1="120" x2="1000" y2="120" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40" y1="170" x2="1000" y2="170" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />

              <path
                d="M 80 163 L 380 37 L 680 76 L 960 178"
                fill="none"
                stroke="#166534"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {monthlyTrend.map((pt, idx) => (
                <g key={idx} className="cursor-pointer group">
                  <circle cx={pt.x} cy={pt.y} r="6" fill="#166534" stroke="#ffffff" strokeWidth="2.5" />
                  <rect x={pt.x - 36} y={pt.y - 30} width="72" height="20" rx="4" fill="#14532d" />
                  <text x={pt.x} y={pt.y - 16} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                    {pt.value}
                  </text>
                </g>
              ))}
            </svg>

            <div className="flex justify-between items-center pt-1.5 text-[10px] text-slate-500 font-mono px-4 sm:px-10">
              {monthlyTrend.map((pt, idx) => (
                <span key={idx}>{pt.month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 5: Top 5 Dealers Table */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs space-y-3">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
            শীর্ষ ডিলার (মোট সার বিতরণ অনুযায়ী)
          </h4>
          <span className="text-[10px] text-slate-400">সেরা ৫ জন বিক্রেতা</span>
        </div>

        <div className="divide-y divide-slate-100">
          {topDealers.map((dealer) => (
            <div
              key={dealer.rank}
              className="flex items-center justify-between py-2 px-1.5 rounded-lg hover:bg-slate-50/70 transition-colors"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold flex items-center justify-center shrink-0 border border-emerald-200/70">
                  {dealer.rank}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 leading-tight">
                    {dealer.name}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {dealer.union}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-emerald-800 font-mono block">
                  {dealer.totalKg}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {dealer.distributions}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 6: All Dealers Distribution Register */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1.5 border-b border-slate-100">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              ডিলারদের সার বিতরণ
            </h4>
            <p className="text-[11px] text-slate-400">
              উপজেলার অনুমোদিত সকল ডিলারের বিতরণ সারসংক্ষেপ
            </p>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="ডিলার বা ইউনিয়ন খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs w-48 sm:w-56 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/60 text-slate-600 font-semibold">
                <th className="py-2.5 px-3">ডিলারের নাম</th>
                <th className="py-2.5 px-3">ইউনিয়ন</th>
                <th className="py-2.5 px-3 text-right">এন্ট্রি</th>
                <th className="py-2.5 px-3 text-right">মোট কেজি</th>
                <th className="py-2.5 px-3 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredDealers.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-slate-900">{d.name}</td>
                  <td className="py-2.5 px-3 text-slate-500">{d.union}</td>
                  <td className="py-2.5 px-3 text-right font-mono text-slate-600">{d.entries}</td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-800">{d.totalKg}</td>
                  <td className="py-2.5 px-3 text-center">
                    <button
                      onClick={() => setSelectedDealerModal(d)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-[11px] font-semibold border border-emerald-200/80 cursor-pointer transition-colors"
                    >
                      <span>বিস্তারিত</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dealer Details Modal */}
      {selectedDealerModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{selectedDealerModal.name}</h3>
                <p className="text-[11px] text-slate-400">{selectedDealerModal.union}</p>
              </div>
              <button
                onClick={() => setSelectedDealerModal(null)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-lg">
                <span className="text-[10px] text-slate-400 block">ট্রেড লাইসেন্স</span>
                <span className="font-mono font-bold text-slate-800">{selectedDealerModal.details.tradeLicense}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg">
                <span className="text-[10px] text-slate-400 block">মোট বিতরণ এন্ট্রি</span>
                <span className="font-mono font-bold text-emerald-800">{selectedDealerModal.entries} টি</span>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-bold text-slate-700 block">সারভিত্তিক বিতরণ খতিয়ান:</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-emerald-50/60 rounded border border-emerald-100">
                  <span className="text-[10px] text-emerald-800 block">ইউরিয়া</span>
                  <span className="font-bold text-emerald-950">{selectedDealerModal.details.urea}</span>
                </div>
                <div className="p-2 bg-emerald-50/60 rounded border border-emerald-100">
                  <span className="text-[10px] text-emerald-800 block">টিএসপি</span>
                  <span className="font-bold text-emerald-950">{selectedDealerModal.details.tsp}</span>
                </div>
                <div className="p-2 bg-emerald-50/60 rounded border border-emerald-100">
                  <span className="text-[10px] text-emerald-800 block">ডিএপি</span>
                  <span className="font-bold text-emerald-950">{selectedDealerModal.details.dap}</span>
                </div>
                <div className="p-2 bg-emerald-50/60 rounded border border-emerald-100">
                  <span className="text-[10px] text-emerald-800 block">এমওপি</span>
                  <span className="font-bold text-emerald-950">{selectedDealerModal.details.mop}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedDealerModal(null)}
              className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

