import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Calendar,
  Download,
  Printer,
  ChevronDown,
  Building2,
  Users,
  Layers,
  ShoppingBag
} from 'lucide-react';

export default function ReportsAnalyticsModule() {
  const [selectedSeason, setSelectedSeason] = useState('রবি মৌসুম ২০২৬-২৭');

  const monthlyData = [
    { month: 'আগস্ট ২০২৬', kg: 330, ton: 0.33, pct: 15 },
    { month: 'সেপ্টেম্বর ২০২৬', kg: 1450, ton: 1.45, pct: 65 },
    { month: 'অক্টোবর ২০২৬', kg: 1100, ton: 1.10, pct: 50 },
    { month: 'নভেম্বর ২০২৬ (চলতি)', kg: 200, ton: 0.20, pct: 10 }
  ];

  const unionPerformance = [
    { union: '৩ নং বাট্টাজোড়', totalKg: 680, farmers: 45, pct: 22 },
    { union: '৫ নং বকশীগঞ্জ', totalKg: 650, farmers: 43, pct: 21 },
    { union: '২ নং বগারচর', totalKg: 620, farmers: 45, pct: 20 },
    { union: '৬ নং ধানুয়া কামালপুর', totalKg: 505, farmers: 41, pct: 17 },
    { union: '৪ নং সাধুরপাড়া', totalKg: 475, farmers: 37, pct: 16 },
    { union: '৬ নং নিলাখিয়া', totalKg: 125, farmers: 12, pct: 4 }
  ];

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <BarChart3 className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  কৃষি সম্প্রসারণ অধিদপ্তর এনালাইটিক্স
                </span>
                <span className="text-xs text-slate-400 font-mono">ANALYTICS-2026</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                রিপোর্ট, পরিসংখ্যান ও বিতরণ বিশ্লেষণ
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                মাসভিত্তিক সারের চাহিদা, ইউনিয়ন অনুযায়ী বিতরণ তুলনা ও কৃষক শ্রেণীভিত্তিক সার ব্যয়ের বিস্তারিত চিত্র
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>মুদ্রণ / PDF</span>
            </button>
          </div>
        </div>

        {/* Season Selector */}
        <div className="mt-6 pt-5 border-t border-slate-100 max-w-xs relative">
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            মৌসুম নির্বাচন
          </label>
          <div className="relative">
            <select
              value={selectedSeason}
              onChange={e => setSelectedSeason(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white appearance-none pr-8"
            >
              <option>রবি মৌসুম ২০২৬-২৭ (বোরো, আলু, সরিষা)</option>
              <option>খরিফ-২ মৌসুম ২০২৬ (রোপা আমন)</option>
              <option>খরিফ-১ মৌসুম ২০২৬ (আউশ ও গ্রীষ্মকালীন)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Row 1: Graphical Breakdown Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend Bar Chart */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              মাসভিত্তিক বিতরণ প্রবণতা (কেজি)
            </h2>
            <span className="text-[10px] text-slate-400">সর্বমোট ৩,০৫৫ কেজি</span>
          </div>

          <div className="space-y-3 pt-2">
            {monthlyData.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-700">{m.month}</span>
                  <span className="font-mono font-bold text-emerald-800">{m.kg.toLocaleString('bn-BD')} কেজি ({m.ton} টন)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-600 to-[#14532d] rounded-full transition-all duration-500"
                    style={{ width: `${m.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Union Performance Comparison */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              ইউনিয়নভিত্তিক মোট সার বিতরণ
            </h2>
            <span className="text-[10px] text-slate-400">৬টি ইউনিয়ন</span>
          </div>

          <div className="space-y-2.5 pt-1">
            {unionPerformance.map((u, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                <div>
                  <span className="font-bold text-slate-800">{u.union}</span>
                  <span className="text-[10px] text-slate-400 ml-2 font-mono">({u.farmers} কৃষক)</span>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-slate-900">{u.totalKg.toLocaleString('bn-BD')} কেজি</span>
                  <span className="text-[10px] text-emerald-700 font-semibold ml-2">({u.pct}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Fertilizer Share Matrix */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
        <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider pb-2 border-b border-slate-100">
          সারের প্রকারভেদ অনুযায়ী বিতরণ শতকরা হার (চলতি মৌসুম)
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20 text-center">
            <span className="text-xs font-bold text-slate-700 block">ইউরিয়া</span>
            <span className="text-2xl font-bold text-emerald-800 font-mono mt-1 block">৩৮%</span>
            <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">১,১৬১ কেজি</span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-center">
            <span className="text-xs font-bold text-slate-700 block">টিএসপি</span>
            <span className="text-2xl font-bold text-slate-800 font-mono mt-1 block">২৪%</span>
            <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">৭৩৩ কেজি</span>
          </div>

          <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/20 text-center">
            <span className="text-xs font-bold text-slate-700 block">ডিএপি</span>
            <span className="text-2xl font-bold text-indigo-700 font-mono mt-1 block">১৮%</span>
            <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">৫৫০ কেজি</span>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/20 text-center">
            <span className="text-xs font-bold text-slate-700 block">এমওপি</span>
            <span className="text-2xl font-bold text-amber-700 font-mono mt-1 block">১৪%</span>
            <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">৪২৮ কেজি</span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-center">
            <span className="text-xs font-bold text-slate-700 block">জৈব সার</span>
            <span className="text-2xl font-bold text-slate-700 font-mono mt-1 block">৬%</span>
            <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">১৮৩ কেজি</span>
          </div>
        </div>
      </div>
    </div>
  );
}

