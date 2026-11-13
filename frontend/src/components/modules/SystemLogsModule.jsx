import React, { useState } from 'react';
import {
  Terminal,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Info,
  Clock,
  ShieldCheck,
  RefreshCw,
  ChevronDown
} from 'lucide-react';

export default function SystemLogsModule() {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');

  const logs = [
    {
      id: 'LOG-9921',
      event: 'DO_APPROVAL',
      description: 'নভেম্বর ২০২৬ মাসের জন্য মেসার্স রহমান ট্রেডার্সের ডিও (DO-2026-1044) অনুমোদিত হয়েছে।',
      user: 'ড. আহমেদ রফিক (UAO)',
      ip: '103.114.98.12',
      timestamp: '১৩ নভেম্বর ২০২৬, দুপুর ২:১০:২২',
      level: 'success'
    },
    {
      id: 'LOG-9920',
      event: 'ANOMALY_FLAG',
      description: 'একই এনআইডি (197476129845123) দিয়ে ২ কেন্দ্রে সার ক্রয়ের চেষ্টা স্বয়ংক্রিয় সতর্কবার্তা জারি।',
      user: 'সিস্টেম ফ্রড ডিটেকশন ইঞ্জিন',
      ip: '127.0.0.1 (Internal)',
      timestamp: '১৩ নভেম্বর ২০২৬, দুপুর ২:১৫:০৩',
      level: 'warning'
    },
    {
      id: 'LOG-9919',
      event: 'TREASURY_VERIFY',
      description: 'সোনালী ব্যাংক ট্রেজারি চালান নং 1432100002681-4491 এর ৮,৮৭,৫০০ টাকা ভেরিফিকেশন সফল।',
      user: 'তানজিনা চৌধুরী (UNO)',
      ip: '103.114.98.10',
      timestamp: '১৩ নভেম্বর ২০২৬, দুপুর ১:৩৫:১২',
      level: 'success'
    },
    {
      id: 'LOG-9918',
      event: 'USER_LOGIN',
      description: 'জেলা অফিসার (Swapnil) ড্যাশবোর্ডে সফলভাবে লগইন করেছেন।',
      user: 'Swapnil (জেলা অফিসার)',
      ip: '119.30.38.14',
      timestamp: '১৩ নভেম্বর ২০২৬, দুপুর ১২:০০:০২',
      level: 'info'
    },
    {
      id: 'LOG-9917',
      event: 'STOCK_TRANSFER',
      description: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ হতে ৩ নং ওয়ার্ড কেন্দ্রে ৫.০ টন ইউরিয়া ট্রান্সফার সম্পন্ন।',
      user: 'মোকাররম হোসেন (ডিলার)',
      ip: '103.221.254.90',
      timestamp: '১৩ নভেম্বর ২০২৬, সকাল ১০:৩০:৪৫',
      level: 'info'
    },
    {
      id: 'LOG-9916',
      event: 'PRICE_UPDATE',
      description: 'সরকারি গেজেট অনুযায়ী এমওপি সারের সর্বোচ্চ খুচরা দর ২০.০০ টাকা নির্ধারণ হালনাগাদ।',
      user: 'সিস্টেম অ্যাডমিন',
      ip: '10.0.4.15',
      timestamp: '১২ নভেম্বর ২০২৬, বিকাল ৪:৫০:০০',
      level: 'success'
    }
  ];

  const filteredLogs = logs.filter(l => {
    if (levelFilter !== 'all' && l.level !== levelFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        l.description.toLowerCase().includes(q) ||
        l.user.toLowerCase().includes(q) ||
        l.event.toLowerCase().includes(q) ||
        l.id.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shadow-sm flex-shrink-0">
              <Terminal className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono">
                  অডিট ট্রেইল ও নিরাপত্তা লগ
                </span>
                <span className="text-xs text-slate-400 font-mono">SYSTEM-AUDIT-TRAIL</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                সিস্টেম অ্যাক্টিভিটি ও অডিট লগ
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                কর্মকর্তা ও ডিলারদের প্রতিটি প্রশাসনিক পদক্ষেপ, ডিও অনুমোদন ও আর্থিক লেনদেনের অপরিবর্তনীয় টাইমস্ট্যাম্প
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>এনক্রিপ্টেড অডিট লগ সক্রিয়</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="ঘটনার বিবরণ, কর্মকর্তার নাম বা আইপি দিয়ে খুঁজুন..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:border-slate-600 focus:bg-white transition-all font-mono"
            />
          </div>

          <div className="relative">
            <select
              value={levelFilter}
              onChange={e => setLevelFilter(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-slate-600 focus:bg-white appearance-none pr-8"
            >
              <option value="all">সকল লগ লেভেল (All Events)</option>
              <option value="success">সফল প্রশাসনিক কার্যক্রম (Success)</option>
              <option value="warning">নিরাপত্তা সতর্কতা (Warning)</option>
              <option value="info">তথ্যমূলক ও লগইন (Info)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800 font-mono">
            ইভেন্ট ট্রেইল রেকর্ড ({filteredLogs.length})
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            লগ রিটেনশন: ৩৬৫ দিন
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase font-mono">
              <tr>
                <th className="py-3 px-4">লগ আইডি ও ইভেন্ট</th>
                <th className="py-3 px-4">সম্পাদিত কাজের বিবরণ</th>
                <th className="py-3 px-4">কর্মকর্তা / ব্যবহারকারী</th>
                <th className="py-3 px-4">আইপি অ্যাড্রেস</th>
                <th className="py-3 px-4 text-center">সময়কাল</th>
                <th className="py-3 px-4 text-center">স্থিতি</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.map(log => (
                <tr key={log.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-mono">
                    <div className="font-bold text-slate-800">{log.id}</div>
                    <div className="text-[10px] text-slate-400 font-semibold">{log.event}</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 font-medium max-w-sm">
                    {log.description}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-slate-800">{log.user}</span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-500 text-[11px]">{log.ip}</td>
                  <td className="py-3.5 px-4 text-center font-mono text-[11px] text-slate-400">
                    {log.timestamp}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {log.level === 'success' && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        সফল
                      </span>
                    )}
                    {log.level === 'warning' && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        সতর্কতা
                      </span>
                    )}
                    {log.level === 'info' && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        ইনফো
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
