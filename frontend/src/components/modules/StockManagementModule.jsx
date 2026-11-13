import React, { useState } from 'react';
import {
  Package,
  Layers,
  ArrowDownToLine,
  ArrowUpFromLine,
  AlertTriangle,
  RefreshCw,
  Search,
  CheckCircle2,
  Filter,
  Plus,
  SlidersHorizontal,
  ChevronDown,
  Warehouse,
  X
} from 'lucide-react';

export default function StockManagementModule() {
  const [fertilizerFilter, setFertilizerFilter] = useState('all');
  const [dealerFilter, setDealerFilter] = useState('all');
  const [showStockInModal, setShowStockInModal] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [stockData, setStockData] = useState([
    {
      id: 1,
      dealer: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
      union: '৩ নং বাট্টাজোড়',
      ureaKg: 18500,
      tspKg: 9200,
      dapKg: 11400,
      mopKg: 9400,
      capacityKg: 120000,
      lastUpdated: '১৩ নভেম্বর ২০২৬, সকাল ১০:০০',
      reorderAlert: false
    },
    {
      id: 2,
      dealer: 'মেসার্স কৃষক বন্ধু ঘর',
      union: '৫ নং বকশীগঞ্জ',
      ureaKg: 24000,
      tspKg: 12500,
      dapKg: 14000,
      mopKg: 11500,
      capacityKg: 150000,
      lastUpdated: '১৩ নভেম্বর ২০২৬, সকাল ১১:১৫',
      reorderAlert: false
    },
    {
      id: 3,
      dealer: 'মেসার্স নতুন ফসল ট্রেডার্স',
      union: '২ নং বগারচর',
      ureaKg: 15200,
      tspKg: 8100,
      dapKg: 9800,
      mopKg: 8900,
      capacityKg: 110000,
      lastUpdated: '১২ নভেম্বর ২০২৬, বিকাল ৪:০০',
      reorderAlert: false
    },
    {
      id: 4,
      dealer: 'মেসার্স সবুজ কৃষি ভান্ডার',
      union: '৬ নং ধানুয়া কামালপুর',
      ureaKg: 12500,
      tspKg: 6800,
      dapKg: 8200,
      mopKg: 8000,
      capacityKg: 100000,
      lastUpdated: '১২ নভেম্বর ২০২৬, দুপুর ২:৩০',
      reorderAlert: false
    },
    {
      id: 5,
      dealer: 'মেসার্স সোনালী মাঠ স্টোর',
      union: '৪ নং সাধুরপাড়া',
      ureaKg: 19000,
      tspKg: 9500,
      dapKg: 12000,
      mopKg: 10500,
      capacityKg: 130000,
      lastUpdated: '১৩ নভেম্বর ২০২৬, সকাল ৯:০০',
      reorderAlert: false
    },
    {
      id: 6,
      dealer: 'মেসার্স শ্যামল বাংলা সার বিতান',
      union: '৬ নং নিলাখিয়া',
      ureaKg: 1200,
      tspKg: 800,
      dapKg: 900,
      mopKg: 600,
      capacityKg: 90000,
      lastUpdated: '০১ নভেম্বর ২০২৬',
      reorderAlert: true // Alert! Stock low
    }
  ]);

  const totalUrea = stockData.reduce((s, i) => s + i.ureaKg, 0);
  const totalTsp = stockData.reduce((s, i) => s + i.tspKg, 0);
  const totalDap = stockData.reduce((s, i) => s + i.dapKg, 0);
  const totalMop = stockData.reduce((s, i) => s + i.mopKg, 0);
  const grandTotalKg = totalUrea + totalTsp + totalDap + totalMop;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleStockInSubmit = (e) => {
    e.preventDefault();
    setShowStockInModal(false);
    showToast('নতুন চালানের স্টক সফলভাবে ইনভেন্টরিতে অন্তর্ভুক্ত হয়েছে।');
  };

  const filteredStock = stockData.filter(d => {
    if (dealerFilter !== 'all' && d.dealer !== dealerFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Toast */}
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
              <Warehouse className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  রিয়েলটাইম ইনভেন্টরি লেজার
                </span>
                <span className="text-xs text-slate-400 font-mono">STOCK-MIS-2026</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                সার মজুত ও স্টক ব্যবস্থাপনা
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                ডিলারদের গুদামভিত্তিক প্রারম্ভিক মজুত, বাফার চালানের প্রাপ্তি, বিতরণ ও সমাপনী স্টকের হিসাব
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowStockInModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#14532d] hover:bg-emerald-900 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>চালান ইনওয়ার্ড এন্ট্রি</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              ডিলার ফিল্টার
            </label>
            <div className="relative">
              <select
                value={dealerFilter}
                onChange={e => setDealerFilter(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white appearance-none pr-8"
              >
                <option value="all">সকল ডিলার গুদাম (৬টি গুদাম)</option>
                {stockData.map(d => (
                  <option key={d.id} value={d.dealer}>{d.dealer} ({d.union})</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              ইনভেন্টরি স্বাস্থ্য ও সতর্কবার্তা
            </label>
            <div className="flex items-center gap-2 h-[35px] px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>১টি গুদামে রি-অর্ডার লেভেলের নিচে স্টক রয়েছে (শ্যামল বাংলা বিতান)</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-slate-500 block">সর্বমোট সার মজুত</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono">
            {(grandTotalKg / 1000).toFixed(1)} টন
          </div>
          <span className="text-[10px] text-slate-400 mt-0.5 block">{grandTotalKg.toLocaleString('bn-BD')} কেজি</span>
        </div>

        <div className="bg-white rounded-xl border border-emerald-200 bg-emerald-50/20 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-emerald-800 block">ইউরিয়া (Urea)</span>
          <div className="text-xl font-bold text-emerald-700 mt-1 font-mono">
            {(totalUrea / 1000).toFixed(1)} টন
          </div>
          <span className="text-[10px] text-emerald-600 mt-0.5 block">{totalUrea.toLocaleString('bn-BD')} কেজি</span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-slate-500 block">টিএসপি (TSP)</span>
          <div className="text-xl font-bold text-slate-800 mt-1 font-mono">
            {(totalTsp / 1000).toFixed(1)} টন
          </div>
          <span className="text-[10px] text-slate-400 mt-0.5 block">{totalTsp.toLocaleString('bn-BD')} কেজি</span>
        </div>

        <div className="bg-white rounded-xl border border-indigo-200 bg-indigo-50/20 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-indigo-800 block">ডিএপি (DAP)</span>
          <div className="text-xl font-bold text-indigo-700 mt-1 font-mono">
            {(totalDap / 1000).toFixed(1)} টন
          </div>
          <span className="text-[10px] text-indigo-600 mt-0.5 block">{totalDap.toLocaleString('bn-BD')} কেজি</span>
        </div>

        <div className="bg-white rounded-xl border border-amber-200 bg-amber-50/20 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-amber-800 block">এমওপি (MoP)</span>
          <div className="text-xl font-bold text-amber-700 mt-1 font-mono">
            {(totalMop / 1000).toFixed(1)} টন
          </div>
          <span className="text-[10px] text-amber-600 mt-0.5 block">{totalMop.toLocaleString('bn-BD')} কেজি</span>
        </div>
      </div>

      {/* Stock Ledger Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">
            গুদামভিত্তিক বর্তমান সারের মজুত খতিয়ান
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            হালনাগাদ: প্রতিদিন স্বয়ংক্রিয় সিঙ্ক
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase">
              <tr>
                <th className="py-3 px-4">ডিলার ও গুদাম</th>
                <th className="py-3 px-4">ইউনিয়ন</th>
                <th className="py-3 px-4 text-right text-emerald-800">ইউরিয়া (কেজি)</th>
                <th className="py-3 px-4 text-right">টিএসপি (কেজি)</th>
                <th className="py-3 px-4 text-right text-indigo-700">ডিএপি (কেজি)</th>
                <th className="py-3 px-4 text-right text-amber-700">এমওপি (কেজি)</th>
                <th className="py-3 px-4 text-right">মোট মজুত (টন)</th>
                <th className="py-3 px-4 text-center">ধারণক্ষমতা ব্যবহার</th>
                <th className="py-3 px-4 text-center">স্ট্যাটাস</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStock.map(d => {
                const totalDealerKg = d.ureaKg + d.tspKg + d.dapKg + d.mopKg;
                const capacityPct = Math.round((totalDealerKg / d.capacityKg) * 100);
                return (
                  <tr key={d.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{d.dealer}</td>
                    <td className="py-3.5 px-4 text-slate-600">{d.union}</td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-800">
                      {d.ureaKg.toLocaleString('bn-BD')}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-medium">
                      {d.tspKg.toLocaleString('bn-BD')}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-indigo-700">
                      {d.dapKg.toLocaleString('bn-BD')}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-amber-700">
                      {d.mopKg.toLocaleString('bn-BD')}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900">
                      {(totalDealerKg / 1000).toFixed(1)} টন
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              capacityPct < 20 ? 'bg-rose-500' : 'bg-emerald-600'
                            }`}
                            style={{ width: `${Math.min(capacityPct, 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">{capacityPct}%</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {d.reorderAlert ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                          <AlertTriangle className="w-3 h-3" />
                          মজুত ঘাটতি
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          পর্যাপ্ত
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stock Inward Entry Modal */}
      {showStockInModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-800">
                নতুন চালান ইনওয়ার্ড এন্ট্রি
              </h3>
              <button
                onClick={() => setShowStockInModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleStockInSubmit} className="py-4 space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">ডিলার নির্বাচন</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                  {stockData.map(d => (
                    <option key={d.id}>{d.dealer} ({d.union})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">বাফার ডেলিভারি অর্ডার (DO) নম্বর</label>
                <input type="text" placeholder="উদাঃ DO-2026-1049" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">সারের ধরন</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800">
                    <option>ইউরিয়া (Urea)</option>
                    <option>টিএসপি (TSP)</option>
                    <option>ডিএপি (DAP)</option>
                    <option>এমওপি (MoP)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">পরিমাণ (মে. টন)</label>
                  <input type="number" step="0.5" placeholder="উদাঃ ১৫.০" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono" />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">ট্রাক চালান ও চালকের মোবাইল নম্বর</label>
                <input type="text" placeholder="ঢাকা মেট্রো-ট ১১-৯৯৮৮ / ০১৭১১-XXXXXX" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowStockInModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#14532d] rounded-lg hover:bg-emerald-900 shadow-sm"
                >
                  স্টকে যুক্ত করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
