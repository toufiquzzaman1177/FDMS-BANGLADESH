import React, { useState } from 'react';
import {
  CheckSquare,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  FileCheck2,
  Layers,
  Database,
  Building2,
  Award
} from 'lucide-react';

export default function VerifyStatisticsModule() {
  const [isRunningVerify, setIsRunningVerify] = useState(false);
  const [lastVerifiedTime, setLastVerifiedTime] = useState('১৩ নভেম্বর ২০২৬, দুপুর ২:৩০');
  const [showSuccessBanner, setShowSuccessBanner] = useState(true);

  const verificationPoints = [
    {
      title: '১. সোনালী ব্যাংক ট্রেজারি চালান ও ডিও বরাদ্দের আর্থিক সমতা',
      details: 'ট্রেজারি কোড ১-৪৩২১-০০০০-২৬৮১ এ জমাকৃত টাকা এবং অনুমোদিত ডিও-র মূল্য শতভাগ নির্ভুল।',
      status: 'উত্তীর্ণ (100% Match)',
      passed: true
    },
    {
      title: '২. বাফার গোডাউন ছাড়পত্র বনাম ডিলার প্রধান গুদাম প্রাপ্তি',
      details: 'বাঘাবাড়ী ও ঈশ্বরদী বাফার হতে ট্রাকে প্রেরিত সার ও ডিলারদের রসিদপ্রাপ্ত স্টক সম্পূর্ণ সামঞ্জস্যপূর্ণ।',
      status: 'উত্তীর্ণ (100% Match)',
      passed: true
    },
    {
      title: '৩. কৃষকদের ডিজিটাল বিক্রয় রসিদ (২১১টি) বনাম মোট বিতরণ (৩,০৫৫ কেজি)',
      details: 'প্রতিটি কৃষকের এনআইডি ও কৃষি কার্ডের অধীনে রক্ষিত চালানের গাণিতিক যোগফল নির্ভুল।',
      status: 'উত্তীর্ণ (100% Match)',
      passed: true
    },
    {
      title: '৪. ওয়ার্ড বিক্রয়কেন্দ্র ও প্রধান গুদামের স্টক ব্যালেন্স রিকনসিলিয়েশন',
      details: '১৮টি ওয়ার্ড আউটলেটে স্থানান্তরিত স্টক ও মূল গুদামের সমাপনী ব্যালেন্সে কোনো ঘাটতি নেই।',
      status: 'উত্তীর্ণ (100% Match)',
      passed: true
    },
    {
      title: '৫. সরকারি নির্ধারিত মূল্য (MRP) পরিপালন অডিট',
      details: 'ইউরিয়া ৳২৭, টিএসপি ৳২২, ডিএপি ৳২১ ও এমওপি ৳২০ মূল্যে বিক্রয় নিশ্চিত করা হয়েছে।',
      status: 'উত্তীর্ণ (100% Match)',
      passed: true
    }
  ];

  const handleRunVerify = () => {
    setIsRunningVerify(true);
    setTimeout(() => {
      setIsRunningVerify(false);
      setLastVerifiedTime('এইমাত্র যাচাইকৃত');
      setShowSuccessBanner(true);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <CheckSquare className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  ডিজিটাল ইন্টিগ্রিটি ও ডেটা অডিট
                </span>
                <span className="text-xs text-slate-400 font-mono">INTEGRITY-CHECKSUM-OK</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                পরিসংখ্যান ও খতিয়ান যাচাইকরণ
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                বাফার মজুত, ডিলারদের শারীরিক স্টক, বিতরণ রসিদ ও ব্যাংকের ট্রেজারি চালানের ক্রস-রিকনসিলিয়েশন
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunVerify}
              disabled={isRunningVerify}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#14532d] hover:bg-emerald-900 rounded-lg transition-colors shadow-sm cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRunningVerify ? 'animate-spin' : ''}`} />
              <span>{isRunningVerify ? 'ক্রস-চেক চলছে...' : 'পুনরায় পরিসংখ্যান যাচাই করুন'}</span>
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>সর্বশেষ সার্বিক যাচাইয়ের সময়কাল: <strong className="text-slate-800 font-mono">{lastVerifiedTime}</strong></span>
          <span className="font-semibold text-emerald-800">অডিট স্কোর: ১০০% নির্ভুল ও সামঞ্জস্যপূর্ণ</span>
        </div>
      </div>

      {/* Success Notification Banner */}
      {showSuccessBanner && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-900">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>সকল ডিলারের মজুদ খতিয়ান এবং বিক্রয় রসিদ শতভাগ নির্ভুলভাবে নিরীক্ষিত হয়েছে। কোনো সিস্টেমিক অসঙ্গতি বা রাজস্ব ঘাটতি পাওয়া যায়নি।</span>
          </div>
          <span className="text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
            সম্পূর্ণ নিরাপদ
          </span>
        </div>
      )}

      {/* Integrity Checklist Items */}
      <div className="space-y-3">
        {verificationPoints.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
              <p className="text-xs text-slate-500">{item.details}</p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
