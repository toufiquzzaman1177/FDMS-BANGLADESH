import React, { useState } from 'react';
import {
  Trash2,
  AlertTriangle,
  RotateCcw,
  ShieldAlert,
  CheckCircle2,
  Lock,
  Archive,
  Database,
  X
} from 'lucide-react';

export default function DataCleanupModule() {
  const [confirmText, setConfirmText] = useState('');
  const [selectedAction, setSelectedAction] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const cleanupTasks = [
    {
      id: 'purge_demo_sales',
      title: 'টেস্ট ও ডেমো বিক্রয় রেকর্ড রিসেট',
      description: 'পরীক্ষামূলকভাবে এন্ট্রি করা বিতরণ রেকর্ডগুলো সাফ করে ক্লিন রেজিস্টার প্রস্তুত করবে। নিবন্ধিত ডিলার ও কৃষক অপরিবর্তিত থাকবে।',
      risk: 'মাঝারি ঝুঁকি',
      recordsCount: '২১১ টি বিতরণ রেকর্ড'
    },
    {
      id: 'purge_resolved_duplicates',
      title: 'সমাধানকৃত ডুপ্লিকেট ও অ্যানোমালি ফ্ল্যাগ অপসারণ',
      description: 'যেসব ডুপ্লিকেট এন্ট্রি ইতোমধ্যে অডিট টিম কর্তৃক যাচাই ও মার্জ করা হয়েছে, সেগুলোর হিস্ট্রি আর্কাইভ করবে।',
      risk: 'নিরাপদ',
      recordsCount: '৪ টি ডুপ্লিকেট কেস'
    },
    {
      id: 'clear_sms_cache',
      title: 'পুরানো এসএমএস কিউ ও ডেলিভারি লগ ক্লিনআপ',
      description: 'টেলিটক গেটওয়ের ৯০ দিনের অধিক পুরানো সফল এসএমএস ট্র্যাকিং লগ ডাটাবেজ অপ্টিমাইজেশনের জন্য মুছে ফেলবে।',
      risk: 'নিরাপদ',
      recordsCount: '১২,৪৮৫ টি লগ'
    }
  ];

  const handleExecuteCleanup = () => {
    if (confirmText !== 'মুছে ফেলুন') {
      alert('নিশ্চিত করতে হুবহু "মুছে ফেলুন" টাইপ করুন।');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSelectedAction(null);
      setConfirmText('');
      setToastMessage('নির্বাচিত ডেটা সফলভাবে সিস্টেম থেকে আর্কাইভ ও মুছে ফেলা হয়েছে।');
      setTimeout(() => setToastMessage(null), 3500);
    }, 900);
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
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 shadow-sm flex-shrink-0">
              <Trash2 className="w-6 h-6 text-rose-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800">
                  প্রশাসনিক নিরাপত্তা অ্যাকশন
                </span>
                <span className="text-xs text-slate-400 font-mono">PURGE-SAFEGUARD</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                ডেটা মুছুন ও সিস্টেম রিসেট
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                পরীক্ষামূলক ডেমো ডেটা মুছে ফেলা, ডুপ্লিকেট আর্কাইভ ও ডাটাবেজ অপ্টিমাইজেশন
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>মুছে ফেলার পূর্বে স্বয়ংক্রিয় ব্যাকআপ সংরক্ষিত হবে</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cleanup Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cleanupTasks.map(task => (
          <div
            key={task.id}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between hover:border-rose-300 transition-all"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                  task.risk === 'মাঝারি ঝুঁকি' ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                }`}>
                  {task.risk}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{task.recordsCount}</span>
              </div>

              <h3 className="text-sm font-bold text-slate-800 mt-2.5">{task.title}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{task.description}</p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedAction(task)}
                className="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>প্রসেস শুরু করুন</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {selectedAction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">
                    আপনি কি নিশ্চিত?
                  </h3>
                  <div className="text-xs text-slate-500">{selectedAction.title}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedAction(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <p className="text-slate-600 leading-relaxed">
                এই প্রক্রিয়াটি সম্পাদন করলে সংশ্লিষ্ট ডেটা স্থায়ীভাবে সিস্টেম থেকে মুছে ফেলা হবে। প্রক্রিয়াটি নিশ্চিত করতে নিচের ইনপুট বক্সে <strong className="text-rose-700 font-bold">মুছে ফেলুন</strong> কথাটি টাইপ করুন:
              </p>

              <input
                type="text"
                placeholder="মুছে ফেলুন"
                value={confirmText}
                onChange={e => setConfirmText(e.target.value)}
                className="w-full bg-slate-50 border border-rose-300 rounded-lg px-3 py-2 text-slate-800 font-bold text-center focus:outline-none focus:border-rose-600 focus:bg-white"
              />
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedAction(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                বাতিল
              </button>
              <button
                onClick={handleExecuteCleanup}
                disabled={isProcessing || confirmText !== 'মুছে ফেলুন'}
                className="px-4 py-2 text-xs font-semibold text-white bg-rose-700 rounded-lg hover:bg-rose-800 transition-colors shadow-sm disabled:opacity-40"
              >
                {isProcessing ? 'মুছে ফেলা হচ্ছে...' : 'চূড়ান্ত নিশ্চিতকরণ'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
