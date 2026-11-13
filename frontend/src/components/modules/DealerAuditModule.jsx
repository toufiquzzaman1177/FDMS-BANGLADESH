import React, { useState } from 'react';
import {
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Award,
  Search,
  Filter,
  FileText,
  Building2,
  Calendar,
  Download,
  Eye,
  SlidersHorizontal,
  ChevronDown,
  ShieldCheck,
  X
} from 'lucide-react';

export default function DealerAuditModule() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAudit, setSelectedAudit] = useState(null);

  const audits = [
    {
      id: 'AUD-2026-110',
      dealer: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
      union: '৩ নং বাট্টাজোড়',
      auditor: 'ড. আহমেদ রফিক (UAO) ও মোঃ শহিদুল (SAAO)',
      auditDate: '১০ নভেম্বর ২০২৬',
      score: 96,
      grade: 'A+ (চমৎকার)',
      compliance: {
        priceBoard: true,
        posSync: true,
        physicalMatch: true,
        memoIssued: true,
        securityValid: true
      },
      status: 'সম্পূর্ণ উত্তীর্ণ',
      remarks: 'মূল্যতালিকা দৃশ্যমান স্থানে টাঙানো এবং কৃষকদের শতভাগ ক্যাশ মেমো প্রদান নিশ্চিত পাওয়া গেছে।'
    },
    {
      id: 'AUD-2026-111',
      dealer: 'মেসার্স কৃষক বন্ধু ঘর',
      union: '৫ নং বকশীগঞ্জ',
      auditor: 'মোঃ শহিদুল ইসলাম (SAAO)',
      auditDate: '০৮ নভেম্বর ২০২৬',
      score: 94,
      grade: 'A (উত্তম)',
      compliance: {
        priceBoard: true,
        posSync: true,
        physicalMatch: true,
        memoIssued: true,
        securityValid: true
      },
      status: 'সম্পূর্ণ উত্তীর্ণ',
      remarks: 'গুদাম ও বিক্রয়কেন্দ্রের স্টক রেজিস্ট্রারের সাথে ডিজিটাল ডাটাবেজের সম্পূর্ণ মিল রয়েছে।'
    },
    {
      id: 'AUD-2026-112',
      dealer: 'মেসার্স নতুন ফসল ট্রেডার্স',
      union: '২ নং বগারচর',
      auditor: 'নাজমুল হাসান (SAAO)',
      auditDate: '০৫ নভেম্বর ২০২৬',
      score: 88,
      grade: 'B+ (সন্তোষজনক)',
      compliance: {
        priceBoard: true,
        posSync: false,
        physicalMatch: true,
        memoIssued: true,
        securityValid: true
      },
      status: 'সংশোধনের নির্দেশ',
      remarks: 'পস মেশিনে ইন্টারনেট জটিলতার কারণে ১ দিনের বিতরণ অফলাইনে ছিল, পরে সিঙ্ক করা হয়েছে।'
    },
    {
      id: 'AUD-2026-113',
      dealer: 'মেসার্স শ্যামল বাংলা সার বিতান',
      union: '৬ নং নিলাখিয়া',
      auditor: 'তানজিলা হক (এক্সিকিউটিভ ম্যাজিস্ট্রেট)',
      auditDate: '২৮ অক্টোবর ২০২৬',
      score: 52,
      grade: 'C (অসন্তোষজনক)',
      compliance: {
        priceBoard: false,
        posSync: false,
        physicalMatch: false,
        memoIssued: false,
        securityValid: true
      },
      status: 'লাইসেন্স সাময়িক স্থগিত',
      remarks: 'শারীরিক মজুতে ইউরিয়ার ঘাটতি এবং মূল্যতালিকা অনুপস্থিত থাকায় শোকজ নোটিশ জারি।'
    }
  ];

  const filteredAudits = audits.filter(a => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        a.dealer.toLowerCase().includes(q) ||
        a.union.toLowerCase().includes(q) ||
        a.id.toLowerCase().includes(q)
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
              <FileCheck className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  নিয়মিত অডিট ও প্রোফাইলিং
                </span>
                <span className="text-xs text-slate-400 font-mono">AUDIT-COMPLIANCE-DAE</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                ডিলার অডিট ও কমপ্লায়েন্স প্রোফাইল
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                মূল্যতালিকা প্রদর্শন, ক্যাশ মেমো বিতরণ, ডিজিটাল স্টক সিঙ্ক ও শারীরিক মজুত নিরীক্ষা রেজিস্টার
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>উপজেলা কমিটির বার্ষিক নিরীক্ষা শতকরা ৯২% উত্তীর্ণ</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 max-w-md relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="ডিলারের নাম বা অডিট আইডি দিয়ে অনুসন্ধান..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Audit List Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">
            সাম্প্রতিক অডিট প্রতিবেদনসমূহ ({filteredAudits.length})
          </h2>
          <span className="text-xs text-slate-400">প্রতি প্রান্তিকে মাঠপর্যায়ে ভৌত নিরীক্ষা বাধ্যতামূলক</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase">
              <tr>
                <th className="py-3 px-4">অডিট নম্বর ও তারিখ</th>
                <th className="py-3 px-4">ডিলারের নাম ও ইউনিয়ন</th>
                <th className="py-3 px-4">নিরীক্ষক কর্মকর্তা</th>
                <th className="py-3 px-4 text-center">স্কোর ও গ্রেড</th>
                <th className="py-3 px-4">কমপ্লায়েন্স পর্যবেক্ষণ</th>
                <th className="py-3 px-4 text-center">স্থিতি</th>
                <th className="py-3 px-4 text-center">সার্টিফিকেট</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAudits.map(audit => (
                <tr key={audit.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-mono font-bold text-slate-800">{audit.id}</div>
                    <div className="text-[10px] text-slate-400">{audit.auditDate}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{audit.dealer}</div>
                    <div className="text-[10px] text-slate-500">{audit.union}</div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-700">{audit.auditor}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`font-mono font-bold text-xs px-2.5 py-1 rounded-md ${
                        audit.score >= 80
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-rose-50 text-rose-800 border border-rose-200'
                      }`}
                    >
                      {audit.score}% ({audit.grade})
                    </span>
                  </td>
                  <td className="py-3.5 px-4 max-w-xs text-slate-600 truncate">{audit.remarks}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        audit.score >= 80
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {audit.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => setSelectedAudit(audit)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-[#14532d] border border-emerald-300 rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>রিপোর্ট</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selectedAudit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  অডিট প্রত্যয়ন ও কমপ্লায়েন্স রিপোর্ট
                </h3>
                <span className="text-xs font-mono text-slate-400">{selectedAudit.id}</span>
              </div>
              <button
                onClick={() => setSelectedAudit(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">{selectedAudit.dealer}</div>
                <div className="text-slate-500">{selectedAudit.union}</div>
                <div className="text-[11px] text-slate-400 font-mono mt-1">তারিখ: {selectedAudit.auditDate}</div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  কমপ্লায়েন্স চেকলিস্ট ফলাফল:
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-200">
                    <span>১. বিক্রয়কেন্দ্রে দৃশ্যমান মূল্যতালিকা বোর্ড</span>
                    <span className="font-bold text-emerald-700">✓ উত্তীর্ণ</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-200">
                    <span>২. কৃষকদের ক্যাশ মেমো / বিক্রয় রসিদ প্রদান</span>
                    <span className="font-bold text-emerald-700">✓ উত্তীর্ণ</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-200">
                    <span>৩. শারীরিক মজুত বনাম খতিয়ান মিল</span>
                    <span className="font-bold text-emerald-700">✓ ১০০% নির্ভুল</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-200">
                    <span>৪. পস মেশিন ও ডিজিটাল ডাটাবেজ সিঙ্ক</span>
                    <span className="font-bold text-emerald-700">✓ নিয়মিত</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                <span className="text-[11px] font-bold text-emerald-900 block">উপজেলা কমিটির সুপারিশ:</span>
                <p className="text-xs text-emerald-800 mt-0.5">{selectedAudit.remarks}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => setSelectedAudit(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#14532d] rounded-lg hover:bg-emerald-900 shadow-sm"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

