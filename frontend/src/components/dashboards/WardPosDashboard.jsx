import { useState } from 'react'
import {
  QrCode,
  Users,
  ShoppingBag,
  FileText,
  Truck,
  CheckCircle2,
  Printer,
  Search,
  ArrowRight,
  Store,
  DollarSign,
  AlertCircle
} from 'lucide-react'

export default function WardPosDashboard({ onNavigate }) {
  const [closingDone, setClosingDone] = useState(false)
  const [quickPrintMemo, setQuickPrintMemo] = useState(null)
  const [nidInput, setNidInput] = useState('')
  const [quickSearchMsg, setQuickSearchMsg] = useState('')

  const handleNidCheck = (e) => {
    e.preventDefault()
    if (!nidInput.trim()) {
      setQuickSearchMsg('অনুগ্রহ করে কৃষকের NID বা কার্ড নম্বর দিন।')
      return
    }
    setQuickSearchMsg(`NID: ${nidInput} — কৃষক: মোঃ আতিকুর রহমান (আবাদি জমি ১.২০ একর • বোরো সিলিং অবশিষ্ট: ১০০ কেজি)`)
  }

  const kpis = [
    {
      title: 'আজ বিতরণকৃত মোট সার',
      value: '৯৮০ কেজি',
      subtext: 'আজকের মোট কাউন্টার সেলস',
      icon: Truck,
      color: 'amber',
      badge: '২৮ জন কৃষক'
    },
    {
      title: 'আজকের সফল কিউআর মেমো',
      value: '২৮ টি মেমো',
      subtext: 'ডিজিটাল কিউআর কোডযুক্ত ক্যাশ মেমো',
      icon: QrCode,
      color: 'emerald',
      badge: '১০০% ডিজিটাল'
    },
    {
      title: 'আজকের মোট সংগৃহীত ক্যাশ',
      value: '২১,৪৬০ ৳',
      subtext: 'সরকার নির্ধারিত নগদ ক্যাশ কালেকশন',
      icon: DollarSign,
      color: 'blue',
      badge: 'ড্রয়ারে জমা'
    },
    {
      title: 'বিক্রয়কেন্দ্রে অবশিষ্ট মজুত',
      value: '৩,২০০ কেজি',
      subtext: 'ইউরিয়া ১.৪ টন | টিএসপি ০.৯ টন',
      icon: Store,
      color: 'purple',
      badge: 'নিরাপদ স্টক'
    }
  ]

  const recentMemos = [
    { memoNo: 'CM-9941', farmer: 'মোঃ আতিকুর রহমান', nid: '1984269120', item: 'ইউরিয়া ৫০ কেজি', total: '১,৩৫০ ৳', time: '০৩:৪৫ PM', status: 'পরিশোধিত' },
    { memoNo: 'CM-9942', farmer: 'আব্দুল জলিল মণ্ডল', nid: '1979269345', item: 'টিএসপি ৫০ কেজি, ডিএপি ৫০ কেজি', total: '২,৬৫০ ৳', time: '০৩:১২ PM', status: 'পরিশোধিত' },
    { memoNo: 'CM-9943', farmer: 'মোছাঃ ফরিদা বেগম', nid: '1991269882', item: 'ইউরিয়া ২৫ কেজি', total: '৬৭৫ ৳', time: '০২:৪০ PM', status: 'পরিশোধিত' },
    { memoNo: 'CM-9944', farmer: 'মোঃ হাফিজুর রহমান', nid: '1982269550', item: 'ইউরিয়া ১০০ কেজি, এমওপি ৫০ কেজি', total: '৩,৭০০ ৳', time: '০১:১৫ PM', status: 'পরিশোধিত' },
    { memoNo: 'CM-9945', farmer: 'সোহেল রানা', nid: '1995269771', item: 'ইউরিয়া ৫০ কেজি', total: '১,৩৫০ ৳', time: '১২:২০ PM', status: 'পরিশোধিত' }
  ]

  return (
    <div className="space-y-4 font-sans">
      
      {/* Toast Notification */}
      {quickPrintMemo && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs flex items-center justify-between shadow-xs animate-fadeIn">
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>ক্যাশ মেমো <strong>#{quickPrintMemo}</strong> প্রিন্টারে পাঠানো হয়েছে (কিউআর ভেরিফাইড)।</span>
          </div>
          <button onClick={() => setQuickPrintMemo(null)} className="text-emerald-700 font-bold hover:underline">✕</button>
        </div>
      )}

      {/* Sub-Header Banner */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              ওয়ার্ড নং ৩ বিক্রয়কেন্দ্র (দক্ষিণপাড়া শাখা) — পিওএস টার্মিনাল
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold">
              কাউন্টার POS সক্রিয়
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            অপারেটর: মোঃ শফিকুল ইসলাম (POS-03) • মেসার্স মাটির মানুষ এন্টারপ্রাইজ • কৃষকের কার্ড যাচাই ও ক্যাশ মেমো ইস্যু
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('ward-pos')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>পূর্ণাঙ্গ POS টার্মিনাল</span>
          </button>
          <button
            onClick={() => onNavigate('farmer-search')}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-all cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span>সিলিং চেক</span>
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
              className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between"
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
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    {k.badge}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Row 2: Live Quick POS Billing & Cash Closing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left: Quick Farmer Ceiling Check & POS Bill (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                দ্রুত কৃষক NID যাচাই ও সার বিলিং
              </h3>
              <p className="text-[11px] text-slate-500">জাতীয় পরিচয়পত্র বা কৃষক কার্ড দিয়ে তৎক্ষণাৎ সিলিং পরীক্ষা</p>
            </div>
            <button
              onClick={() => onNavigate('ward-pos')}
              className="text-xs text-amber-700 hover:text-amber-900 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>টার্মিনাল ভিউ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <form onSubmit={handleNidCheck} className="flex gap-2">
            <input
              type="text"
              value={nidInput}
              onChange={(e) => setNidInput(e.target.value)}
              placeholder="কৃষকের NID বা কার্ড নম্বর লিখুন (উদা: 1984269120)..."
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              যাচাই করুন
            </button>
          </form>

          {quickSearchMsg && (
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-medium">
              {quickSearchMsg}
            </div>
          )}

          <div className="grid grid-cols-4 gap-2 pt-2 text-center text-xs">
            <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-[10px] text-slate-400 block">ইউরিয়া দর</span>
              <span className="font-bold text-slate-800">২৭ ৳ / কেজি</span>
            </div>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-[10px] text-slate-400 block">টিএসপি দর</span>
              <span className="font-bold text-slate-800">৩২ ৳ / কেজি</span>
            </div>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-[10px] text-slate-400 block">ডিএপি দর</span>
              <span className="font-bold text-slate-800">২১ ৳ / কেজি</span>
            </div>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-[10px] text-slate-400 block">এমওপি দর</span>
              <span className="font-bold text-slate-800">২০ ৳ / কেজি</span>
            </div>
          </div>
        </div>

        {/* Right: Daily Cash & Stock Closing (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                দৈনিক বিক্রয় ও স্টক ক্লোজিং
              </h3>
              <DollarSign className="w-4 h-4 text-emerald-700" />
            </div>

            <div className="space-y-2 mt-3 text-xs">
              <div className="flex justify-between p-2 bg-emerald-50/70 rounded-lg border border-emerald-200">
                <span className="text-slate-600">আজকের মোট ক্যাশ সংগ্রহ:</span>
                <span className="font-bold text-emerald-950 font-mono">২১,৪৬০ টাকা</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-600">বিক্রয়কৃত মোট বস্তা:</span>
                <span className="font-bold text-slate-800 font-mono">১৯.৬ বস্তা (৯৮০ কেজি)</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-600">ক্যাশ ড্রয়ার মেলানো:</span>
                <span className="font-bold text-emerald-700">সম্পূর্ণ সঠিক (০ অমিল)</span>
              </div>
            </div>
          </div>

          {closingDone ? (
            <div className="p-2.5 bg-emerald-100 text-emerald-900 rounded-lg text-xs font-bold text-center border border-emerald-300">
              ✓ আজকের দৈনিক ক্লোজিং সফলভাবে সম্পন্ন হয়েছে
            </div>
          ) : (
            <button
              onClick={() => setClosingDone(true)}
              className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>আজকের বিক্রয় ও স্টক ক্লোজ করুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

      {/* Row 3: Today's Recent QR Cash Memos */}
      <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <QrCode className="w-4 h-4 text-emerald-700" />
            <h3 className="text-xs sm:text-sm font-bold text-slate-900">
              আজকের সর্বশেষ ৫টি কিউআর ক্যাশ মেমো লেনদেন
            </h3>
          </div>
          <button
            onClick={() => onNavigate('distribution-records')}
            className="text-xs text-amber-700 hover:underline font-semibold cursor-pointer"
          >
            সকল মেমো রেকর্ড &rarr;
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <th className="py-2.5 px-3">মেমো নম্বর</th>
                <th className="py-2.5 px-3">কৃষকের নাম ও NID</th>
                <th className="py-2.5 px-3">সারের বিবরণ</th>
                <th className="py-2.5 px-3 text-right">মোট টাকা</th>
                <th className="py-2.5 px-3 text-center">সময়</th>
                <th className="py-2.5 px-3 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentMemos.map((m, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2 px-3 font-mono font-bold text-amber-800">{m.memoNo}</td>
                  <td className="py-2 px-3 font-semibold text-slate-800">
                    <div>{m.farmer}</div>
                    <div className="text-[10px] text-slate-400 font-mono">NID: {m.nid}</div>
                  </td>
                  <td className="py-2 px-3 text-slate-600">{m.item}</td>
                  <td className="py-2 px-3 text-right font-mono font-bold text-emerald-700">{m.total}</td>
                  <td className="py-2 px-3 text-center text-slate-400 font-mono text-[11px]">{m.time}</td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => setQuickPrintMemo(m.memoNo)}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 rounded text-[11px] font-semibold border border-slate-200 cursor-pointer transition-colors"
                    >
                      <Printer className="w-3 h-3 text-emerald-700" />
                      <span>প্রিন্ট</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

