import React, { useState } from 'react';
import {
  Copy,
  AlertOctagon,
  CheckCircle2,
  XCircle,
  GitMerge,
  Trash2,
  Search,
  Check,
  X,
  Eye,
  Info,
  ShieldAlert
} from 'lucide-react';

export default function DuplicateDataModule() {
  const [toastMessage, setToastMessage] = useState(null);

  const [duplicates, setDuplicates] = useState([
    {
      id: 'DUP-2026-01',
      title: 'একই এনআইডি দিয়ে একই দিনে ২টি পৃথক বিক্রয় রসিদ',
      type: 'ডুপ্লিকেট উত্তোলন (Multiple Purchase)',
      farmerName: 'আব্দুল করিম',
      nid: '197476129845123',
      records: [
        { voucher: 'VCH-2026-0911', time: 'সকাল ১০:১৫', dealer: 'মেসার্স ভাই ভাই এন্টারপ্রাইজ', qty: '৫০ কেজি ইউরিয়া', status: 'এন্ট্রি-১' },
        { voucher: 'VCH-2026-0918', time: 'দুপুর ২:১০', dealer: 'মেসার্স রহমান ট্রেডার্স', qty: '৫০ কেজি ইউরিয়া', status: 'এন্ট্রি-২' }
      ],
      severity: 'high',
      status: 'অমীমাংসিত',
      notes: 'একই কৃষকের এনআইডি ব্যবহার করে ভিন্ন কেন্দ্র থেকে একই দিনে সার উত্তোলন শনাক্ত হয়েছে।'
    },
    {
      id: 'DUP-2026-02',
      title: 'অভিন্ন ভাউচার নম্বর দুইবার ডাটাবেজে এন্ট্রি',
      type: 'সিস্টেম ভাউচার কনফ্লিক্ট',
      farmerName: 'মোঃ শফিকুল ইসলাম',
      nid: '198276182930415',
      records: [
        { voucher: 'VCH-2026-0940', time: '১১ নভেম্বর, সকাল ১১:০০', dealer: 'মেসার্স সরকার এন্টারপ্রাইজ', qty: '৪০ কেজি ডিএপি', status: 'মূল রসিদ' },
        { voucher: 'VCH-2026-0940', time: '১১ নভেম্বর, সকাল ১১:০৩', dealer: 'মেসার্স সরকার এন্টারপ্রাইজ', qty: '৪০ কেজি ডিএপি', status: 'ডুপ্লিকেট কপি' }
      ],
      severity: 'medium',
      status: 'অমীমাংসিত',
      notes: 'ইন্টারনেট ড্রপের কারণে ডিলার অপারেটর পরপর দুইবার ক্লিক করায় ডুপ্লিকেট তৈরি হয়েছে।'
    },
    {
      id: 'DUP-2026-03',
      title: 'একই কৃষকের ভিন্ন মোবাইল নম্বর ও জমির দ্বৈত কোটা দাবি',
      type: 'ভুয়া কোটা প্রোফাইল',
      farmerName: 'রফিকুল ইসলাম',
      nid: '197876123450912',
      records: [
        { voucher: 'KRC-88192', time: '০১ কার্তিক', dealer: 'হরিপুর ইউনিয়ন ব্লক', qty: '৩ বিঘা (বোরো)', status: 'প্রোফাইল-১ (01712-XXXXXX)' },
        { voucher: 'KRC-99014', time: '০৫ কার্তিক', dealer: 'হরিপুর ইউনিয়ন ব্লক', qty: '৩ বিঘা (বোরো)', status: 'প্রোফাইল-২ (01915-XXXXXX)' }
      ],
      severity: 'high',
      status: 'অমীমাংসিত',
      notes: 'একই ব্যক্তির নামে ২টি পৃথক কৃষি কার্ড রেজিস্ট্রি করার চেষ্টা শনাক্ত হয়েছে।'
    },
    {
      id: 'DUP-2026-04',
      title: 'একই সময়ে দুটি ভিন্ন আউটলেটে ডিলার বিক্রয় এন্ট্রি',
      type: 'অসঙ্গতিপূর্ণ টাইমস্ট্যাম্প',
      farmerName: 'তারেক রহমান',
      nid: '198776332211445',
      records: [
        { voucher: 'VCH-2026-0988', time: '১০ নভেম্বর, দুপুর ১২:০০', dealer: 'মেসার্স নতুন ফসল (কেন্দ্র-১)', qty: '২৫ কেজি টিএসপি', status: 'আউটলেট-১' },
        { voucher: 'VCH-2026-0989', time: '১০ নভেম্বর, দুপুর ১২:০১', dealer: 'মেসার্স নতুন ফসল (কেন্দ্র-৩)', qty: '২৫ কেজি টিএসপি', status: 'আউটলেট-৩' }
      ],
      severity: 'low',
      status: 'অমীমাংসিত',
      notes: 'শারীরিকভাবে একই সময়ে ৫ কিমি দূরের আউটলেটে বিতরণ অসম্ভব।'
    }
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleResolve = (id, action) => {
    setDuplicates(prev =>
      prev.map(d => d.id === id ? { ...d, status: action === 'merge' ? 'মার্জ সম্পন্ন' : 'বাতিলকৃত' } : d)
    );
    showToast(action === 'merge' ? 'ডুপ্লিকেট রেকর্ড সফলভাবে মার্জ করা হয়েছে।' : 'ভুল রেকর্ডটি সিস্টেম থেকে সফলভাবে বাতিল করা হয়েছে।');
  };

  const pendingCount = duplicates.filter(d => d.status === 'অমীমাংসিত').length;

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
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 shadow-sm flex-shrink-0">
              <Copy className="w-6 h-6 text-rose-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800">
                  অডিট নিরীক্ষা আবশ্যক
                </span>
                <span className="text-xs text-slate-400 font-mono">DUP-AUDIT-4-FLAGS</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                ডুপ্লিকেট ডেটা নিরীক্ষা ও রেজোলিউশন
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                একই এনআইডি, ভাউচার বা কৃষি কার্ডে একাধিক বিতরণের অসঙ্গতি শনাক্তকরণ ও নিষ্পত্তি
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-xs font-bold flex items-center gap-2">
              <AlertOctagon className="w-4 h-4 text-rose-600" />
              <span>{pendingCount} টি ডুপ্লিকেট কেস পর্যালোচনা প্রয়োজন</span>
            </div>
          </div>
        </div>
      </div>

      {/* Duplicates List */}
      <div className="space-y-4">
        {duplicates.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl border p-5 shadow-xs transition-all ${
              item.status === 'অমীমাংসিত' ? 'border-rose-200 hover:border-rose-300' : 'border-slate-200 bg-slate-50/40'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 font-mono">
                    {item.id}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{item.type}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.status === 'অমীমাংসিত' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600">{item.notes}</p>

                {/* Sub-records comparison table */}
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden bg-white">
                    <thead className="bg-slate-50 text-[10px] uppercase font-semibold text-slate-600">
                      <tr>
                        <th className="p-2">রেকর্ড স্ট্যাটাস</th>
                        <th className="p-2">ভাউচার / আইডি</th>
                        <th className="p-2">সময়কাল</th>
                        <th className="p-2">ডিলার / কেন্দ্র</th>
                        <th className="p-2 text-right">পরিমাণ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {item.records.map((r, i) => (
                        <tr key={i} className="hover:bg-slate-50/50">
                          <td className="p-2 font-bold text-slate-800">{r.status}</td>
                          <td className="p-2 font-mono text-slate-700">{r.voucher}</td>
                          <td className="p-2 text-slate-500">{r.time}</td>
                          <td className="p-2 text-slate-800">{r.dealer}</td>
                          <td className="p-2 text-right font-mono font-bold text-emerald-800">{r.qty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Actions */}
              {item.status === 'অমীমাংসিত' && (
                <div className="flex md:flex-col items-end gap-2 shrink-0 pt-2 md:pt-0">
                  <button
                    onClick={() => handleResolve(item.id, 'merge')}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#14532d] hover:bg-emerald-900 rounded-lg transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <GitMerge className="w-3.5 h-3.5" />
                    <span>মার্জ করুন</span>
                  </button>
                  <button
                    onClick={() => handleResolve(item.id, 'discard')}
                    className="px-3.5 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>ভুল এন্ট্রি মুছুন</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
