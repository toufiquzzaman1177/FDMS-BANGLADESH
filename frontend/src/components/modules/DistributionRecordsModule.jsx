import React, { useState } from 'react';
import {
  FileText,
  Search,
  Filter,
  Download,
  Printer,
  Calendar,
  CheckCircle2,
  ChevronDown,
  User,
  ShoppingBag,
  Building2,
  Eye,
  X
} from 'lucide-react';

export default function DistributionRecordsModule() {
  const [searchQuery, setSearchQuery] = useState('');
  const [fertilizerFilter, setFertilizerFilter] = useState('all');
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  // Distribution records dataset
  const records = [
    {
      id: 'VCH-2026-1021',
      date: '১৩ নভেম্বর ২০২৬, দুপুর ২:০৫',
      farmerName: 'মোঃ রফিকুল ইসলাম',
      farmerNid: '197876123450912',
      krishiCard: 'KRC-88192',
      dealer: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
      outlet: '৩ নং ওয়ার্ড উপ-বিক্রয়কেন্দ্র',
      union: '৩ নং বাট্টাজোড়',
      items: [
        { type: 'ইউরিয়া', qty: 40, rate: 27, total: 1080 },
        { type: 'টিএসপি', qty: 20, rate: 22, total: 440 }
      ],
      totalKg: 60,
      totalAmount: 1520,
      status: 'পরিশোধিত',
      paymentMethod: 'নগদ ক্যাশ মেমো'
    },
    {
      id: 'VCH-2026-1022',
      date: '১৩ নভেম্বর ২০২৬, দুপুর ১:৪৫',
      farmerName: 'মোছাঃ মমতাজ বেগম',
      farmerNid: '198376998811223',
      krishiCard: 'KRC-88193',
      dealer: 'মেসার্স কৃষক বন্ধু ঘর',
      outlet: '৫ নং বকশীগঞ্জ প্রধান কেন্দ্র',
      union: '৫ নং বকশীগঞ্জ',
      items: [
        { type: 'ডিএপি', qty: 50, rate: 21, total: 1050 }
      ],
      totalKg: 50,
      totalAmount: 1050,
      status: 'পরিশোধিত',
      paymentMethod: 'নগদ ক্যাশ মেমো'
    },
    {
      id: 'VCH-2026-1023',
      date: '১৩ নভেম্বর ২০২৬, দুপুর ১২:৩০',
      farmerName: 'আব্দুল কাদের',
      farmerNid: '199076554433221',
      krishiCard: 'KRC-88194',
      dealer: 'মেসার্স নতুন ফসল ট্রেডার্স',
      outlet: '২ নং বগারচর আউটলেট',
      union: '২ নং বগারচর',
      items: [
        { type: 'ইউরিয়া', qty: 35, rate: 27, total: 945 },
        { type: 'এমওপি', qty: 25, rate: 20, total: 500 }
      ],
      totalKg: 60,
      totalAmount: 1445,
      status: 'পরিশোধিত',
      paymentMethod: 'নগদ ক্যাশ মেমো'
    },
    {
      id: 'VCH-2026-1024',
      date: '১৩ নভেম্বর ২০২৬, সকাল ১১:১৫',
      farmerName: 'মোঃ তারেক রহমান',
      farmerNid: '198776332211445',
      krishiCard: 'KRC-88195',
      dealer: 'মেসার্স সবুজ কৃষি ভান্ডার',
      outlet: '৬ নং ধানুয়া কামালপুর কেন্দ্র',
      union: '৬ নং ধানুয়া কামালপুর',
      items: [
        { type: 'ইউরিয়া', qty: 50, rate: 27, total: 1350 },
        { type: 'টিএসপি', qty: 25, rate: 22, total: 550 }
      ],
      totalKg: 75,
      totalAmount: 1900,
      status: 'পরিশোধিত',
      paymentMethod: 'নগদ ক্যাশ মেমো'
    },
    {
      id: 'VCH-2026-1025',
      date: '১২ নভেম্বর ২০২৬, বিকাল ৪:২০',
      farmerName: 'মোঃ আকমল হোসেন',
      farmerNid: '197576223344556',
      krishiCard: 'KRC-88196',
      dealer: 'মেসার্স সোনালী মাঠ স্টোর',
      outlet: '৪ নং সাধুরপাড়া আউটলেট',
      union: '৪ নং সাধুরপাড়া',
      items: [
        { type: 'ডিএপি', qty: 30, rate: 21, total: 630 },
        { type: 'এমওপি', qty: 20, rate: 20, total: 400 }
      ],
      totalKg: 50,
      totalAmount: 1030,
      status: 'পরিশোধিত',
      paymentMethod: 'নগদ ক্যাশ মেমো'
    }
  ];

  const filteredRecords = records.filter(r => {
    if (fertilizerFilter !== 'all' && !r.items.some(i => i.type === fertilizerFilter)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        r.farmerName.toLowerCase().includes(q) ||
        r.farmerNid.includes(q) ||
        r.id.toLowerCase().includes(q) ||
        r.dealer.toLowerCase().includes(q)
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
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <FileText className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  ডিজিটাল ক্যাশ মেমো রেজিস্টার
                </span>
                <span className="text-xs text-slate-400 font-mono">DIST-LOG-211-ENTRIES</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                সার বিতরণ রেকর্ড ও ভাউচার রেজিস্টার
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                কৃষকদের মাঝে সরকার নির্ধারিত সর্বোচ্চ খুচরা মূল্যে (MRP) সারের ডিজিটাল ক্যাশ মেমো ও বিক্রয় ইতিহাস
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>মোট ২১১ টি সফল বিতরণ সম্পন্ন</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="কৃষকের নাম, এনআইডি, ভাউচার নম্বর বা ডিলারের নাম দিয়ে খুঁজুন..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
            />
          </div>

          <div className="relative">
            <select
              value={fertilizerFilter}
              onChange={e => setFertilizerFilter(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white appearance-none pr-8"
            >
              <option value="all">সকল সারের বিতরণ</option>
              <option value="ইউরিয়া">ইউরিয়া (Urea)</option>
              <option value="টিএসপি">টিএসপি (TSP)</option>
              <option value="ডিএপি">ডিএপি (DAP)</option>
              <option value="এমওপি">এমওপি (MoP)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Records Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">
            বিতরণ রসিদসমূহ ({filteredRecords.length})
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            সর্বমোট সার বিতরণ: ৩,০৫৫ কেজি
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase">
              <tr>
                <th className="py-3 px-4">ভাউচার নং ও তারিখ</th>
                <th className="py-3 px-4">কৃষকের নাম ও এনআইডি</th>
                <th className="py-3 px-4">ডিলার ও আউটলেট</th>
                <th className="py-3 px-4">বিতরণকৃত সার</th>
                <th className="py-3 px-4 text-right">মোট পরিমাণ</th>
                <th className="py-3 px-4 text-right text-emerald-800">মোট টাকা</th>
                <th className="py-3 px-4 text-center">স্থিতি</th>
                <th className="py-3 px-4 text-center">মেমো প্রিন্ট</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map(record => (
                <tr key={record.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-mono font-bold text-slate-900">{record.id}</div>
                    <div className="text-[10px] text-slate-400">{record.date}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-800">{record.farmerName}</div>
                    <div className="text-[10px] text-slate-400 font-mono">NID: {record.farmerNid}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-slate-800">{record.dealer}</div>
                    <div className="text-[10px] text-slate-500">{record.outlet}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1">
                      {record.items.map((i, idx) => (
                        <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                          {i.type}: {i.qty} কেজি
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900">
                    {record.totalKg} কেজি
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-700">
                    ৳{record.totalAmount.toLocaleString('bn-BD')}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      {record.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => setSelectedReceipt(record)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-[#14532d] border border-emerald-300 rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>রসিদ</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cash Memo Receipt Modal */}
      {selectedReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  সরকারি সার বিতরণ ক্যাশ মেমো
                </h3>
                <span className="text-xs font-mono text-slate-400">{selectedReceipt.id}</span>
              </div>
              <button
                onClick={() => setSelectedReceipt(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">ডিলার:</span>
                  <span className="font-bold text-slate-800">{selectedReceipt.dealer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">বিক্রয় কেন্দ্র:</span>
                  <span className="text-slate-700">{selectedReceipt.outlet}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">তারিখ ও সময়:</span>
                  <span className="font-mono text-slate-700">{selectedReceipt.date}</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-200 space-y-1">
                <div className="flex justify-between">
                  <span className="text-emerald-900 font-semibold">কৃষকের নাম:</span>
                  <span className="font-bold text-emerald-950">{selectedReceipt.farmerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-900">এনআইডি নম্বর:</span>
                  <span className="font-mono text-emerald-950">{selectedReceipt.farmerNid}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-900">কৃষি কার্ড নম্বর:</span>
                  <span className="font-mono text-emerald-950">{selectedReceipt.krishiCard}</span>
                </div>
              </div>

              <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50 text-[11px] uppercase font-semibold text-slate-600">
                  <tr>
                    <th className="p-2">সারের প্রকার</th>
                    <th className="p-2 text-right">পরিমাণ</th>
                    <th className="p-2 text-right">দর/কেজি</th>
                    <th className="p-2 text-right">টাকা</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedReceipt.items.map((item, i) => (
                    <tr key={i}>
                      <td className="p-2 font-semibold text-slate-800">{item.type}</td>
                      <td className="p-2 text-right font-mono">{item.qty} কেজি</td>
                      <td className="p-2 text-right font-mono">৳{item.rate}</td>
                      <td className="p-2 text-right font-mono font-bold">৳{item.total}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 font-bold border-t border-slate-200 text-slate-900">
                    <td colSpan={3} className="p-2 text-right">সর্বমোট প্রদেয় মূল্য:</td>
                    <td className="p-2 text-right text-emerald-800 font-mono font-bold">
                      ৳{selectedReceipt.totalAmount.toLocaleString('bn-BD')}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="text-[10px] text-slate-400 italic text-center pt-2">
                * সরকারি ভর্তুকিপ্রাপ্ত সার। অতিরিক্ত মূল্যে বিক্রয় দণ্ডনীয় অপরাধ।
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedReceipt(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                বন্ধ করুন
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#14532d] rounded-lg hover:bg-emerald-900 shadow-sm inline-flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>প্রিন্ট রসিদ</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
