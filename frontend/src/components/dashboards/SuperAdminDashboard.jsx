import { useState } from 'react'
import {
  Package,
  Scale,
  UserCheck,
  Terminal,
  FileCheck,
  Landmark,
  ShieldCheck,
  Building2,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  FileText,
  Settings,
  Users
} from 'lucide-react'

export default function SuperAdminDashboard({ onNavigate }) {
  const [approvedUsers, setApprovedUsers] = useState([])
  const [successMsg, setSuccessMsg] = useState('')

  const handleQuickApprove = (name) => {
    setApprovedUsers(prev => [...prev, name])
    setSuccessMsg(`${name}-এর অ্যাকাউন্ট সফলভাবে অনুমোদিত হয়েছে।`)
    setTimeout(() => setSuccessMsg(''), 3000)
  }

  const kpis = [
    {
      title: 'জাতীয় সার কোটা বরাদ্দ',
      value: '১,২৫,০০,০০০ মে.টন',
      subtext: 'চলতি অর্থবছর ২০২৬-২৭ (১০০% বরাদ্দকৃত)',
      icon: Package,
      color: 'purple',
      badge: 'MoA HQ'
    },
    {
      title: 'সরকারি সর্বোচ্চ খুচরা দর (MRP)',
      value: 'ইউরিয়া ২৭৳ | টিএসপি ৩২৳',
      subtext: 'ডিএপি ২১৳ | এমওপি ২০৳ প্রতি কেজি',
      icon: Scale,
      color: 'emerald',
      badge: 'গেজেট কার্যকর'
    },
    {
      title: 'কর্মকর্তা অ্যাকাউন্ট অনুমোদন',
      value: '২ জন অপেক্ষমাণ',
      subtext: 'DAE কেন্দ্রীয় অডিট ও যাচাই তালিকা',
      icon: UserCheck,
      color: 'amber',
      badge: 'অনুমোদন প্রয়োজন'
    },
    {
      title: 'কেন্দ্রীয় অডিট ও নিরাপত্তা লগ',
      value: '১,৪২০ টি ইভেন্ট',
      subtext: '২৪/৭ এনক্রিপ্টেড কেন্দ্রীয় নজরদারি',
      icon: Terminal,
      color: 'blue',
      badge: 'সুরক্ষিত'
    }
  ]

  const bufferGodowns = [
    {
      name: 'বিসিআইসি ঘোড়াশাল কেন্দ্রীয় কারখানা ও বাফার',
      quota: '৫০,০০,০০০ মে.টন',
      delivered: '৪২,০০,০০০ মে.টন',
      stock: '৮,০০,০০০ মে.টন',
      percent: '৮৪.০%',
      status: 'পর্যাপ্ত মজুত'
    },
    {
      name: 'বিসিআইসি চট্টগ্রাম পতেঙ্গা কেমিক্যাল ডিপো',
      quota: '৩৫,০০,০০০ মে.টন',
      delivered: '৩০,৫০,০০০ মে.টন',
      stock: '৪,৫০,০০০ মে.টন',
      percent: '৮৭.১%',
      status: 'পর্যাপ্ত মজুত'
    },
    {
      name: 'বিএডিসি বাঘাবাড়ী ঘাট উত্তরাঞ্চল আমদানি ডিপো',
      quota: '২৫,০০,০০০ মে.টন',
      delivered: '২২,০০,০০০ মে.টন',
      stock: '৩,০০,০০০ মে.টন',
      percent: '৮৮.০%',
      status: 'নিরাপদ স্টক'
    },
    {
      name: 'বিসিআইসি যশোর শিল্প সার গোডাউন',
      quota: '১৫,০০,০০০ মে.টন',
      delivered: '১৩,২০,০০০ মে.টন',
      stock: '১,৮০,০০০ মে.টন',
      percent: '৮৮.০%',
      status: 'নিরাপদ স্টক'
    }
  ]

  const pendingOfficers = [
    {
      name: 'ড. নাজমুল হুদা',
      designation: 'উপজেলা কৃষি কর্মকর্তা (UAO)',
      station: 'ফুলপুর, ময়মনসিংহ',
      date: '১২ নভেম্বর ২০২৬',
      sonaliAcc: 'SB-0982-1102'
    },
    {
      name: 'মোছাঃ রোকসানা পারভীন',
      designation: 'সহকারী পরিচালক (সার নিয়ন্ত্রণ)',
      station: 'বাফার গোডাউন, বগুড়া',
      date: '১৩ নভেম্বর ২০২৬',
      sonaliAcc: 'SB-4412-8871'
    }
  ]

  return (
    <div className="space-y-4 font-sans">
      
      {/* Toast Notification */}
      {successMsg && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs flex items-center gap-2 shadow-xs animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold">{successMsg}</span>
        </div>
      )}

      {/* Sub-Header Banner */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              জাতীয় সার কোটা ও কেন্দ্রীয় কমান্ড ড্যাশবোর্ড
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-[10px] font-bold">
              MoA / DAE HQ লাইভ
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            কৃষি মন্ত্রণালয় • গণপ্রজাতন্ত্রী বাংলাদেশ সরকার — সমগ্র বাংলাদেশের ৬৪ জেলা ও ৪৯৫ উপজেলার কেন্দ্রীয় সার প্রবাহ ট্র্যাকিং
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('quota-do')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>কোটা বণ্টন</span>
          </button>
          <button
            onClick={() => onNavigate('settings')}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-all cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>পলিসি সেটিংস</span>
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
              className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between"
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
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">
                    {k.badge}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Row 2: Central Buffer Godowns & Treasury Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left: National Buffer Godowns Ledger (8 Cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                জাতীয় বাফার গোডাউন ও কেন্দ্রীয় সরবরাহ খতিয়ান
              </h3>
              <p className="text-[11px] text-slate-500">বিসিআইসি ও বিএডিসি কেন্দ্রীয় কারখানা ও আমদানি ডিপো</p>
            </div>
            <button
              onClick={() => onNavigate('quota-do')}
              className="text-xs text-purple-700 hover:text-purple-900 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>বিস্তারিত কোটা</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                  <th className="py-2.5 px-3">বাফার ডিপো ও অবস্থান</th>
                  <th className="py-2.5 px-3 text-right">বার্ষিক কোটা</th>
                  <th className="py-2.5 px-3 text-right">ডেলিভারি</th>
                  <th className="py-2.5 px-3 text-right">বর্তমান মজুত</th>
                  <th className="py-2.5 px-3 text-center">বিতরণ অগ্রগতি</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bufferGodowns.map((depo, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2 px-3 font-semibold text-slate-800">{depo.name}</td>
                    <td className="py-2 px-3 text-right font-mono text-slate-600">{depo.quota}</td>
                    <td className="py-2 px-3 text-right font-mono text-emerald-700 font-bold">{depo.delivered}</td>
                    <td className="py-2 px-3 text-right font-mono text-purple-700 font-bold">{depo.stock}</td>
                    <td className="py-2 px-3 text-center">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {depo.percent}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Sonali Bank Treasury & Subsidy Overview (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                কেন্দ্রীয় ট্রেজারি রাজস্ব ও ভর্তুকি
              </h3>
              <Landmark className="w-4 h-4 text-emerald-700" />
            </div>

            <div className="space-y-3 mt-3">
              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200">
                <span className="text-[10px] text-emerald-800 font-semibold uppercase block">সোনালী ব্যাংক চালান কোড</span>
                <span className="text-sm font-mono font-bold text-emerald-950">১-৪৩৩১-০০০০-২৬৮১</span>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-600">মোট জমা রাজস্ব:</span>
                  <span className="font-bold text-emerald-800 font-mono text-sm">২৪৮.৫০ কোটি ৳</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-600">সরকারি ভর্তুকি সহায়তা:</span>
                  <span className="font-bold text-purple-700">৬১.৫%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">অনুমোদিত ডিলার নেটওয়ার্ক:</span>
                  <span className="font-bold text-slate-800">৫,৪২০ জন</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">চলতি মাসে বরাদ্দকৃত ডিও:</span>
                  <span className="font-bold text-slate-800">৪,৯১২ টি</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('bank-treasury')}
            className="w-full py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>ট্রেজারি ও জামানত অডিট</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Row 3: Pending Officer Approvals & MRP Ceiling Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Officer Approval Queue (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-purple-700" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                নতুন কর্মকর্তা অনুমোদন অপেক্ষমাণ (২)
              </h3>
            </div>
            <button
              onClick={() => onNavigate('user-approval')}
              className="text-xs text-purple-700 hover:underline font-semibold cursor-pointer"
            >
              সব দেখুন &rarr;
            </button>
          </div>

          <div className="space-y-2">
            {pendingOfficers.map((officer, i) => {
              const isApproved = approvedUsers.includes(officer.name)
              return (
                <div key={i} className="p-3 bg-slate-50 hover:bg-purple-50/40 rounded-xl border border-slate-200 flex items-center justify-between gap-2 transition-colors">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{officer.name}</h4>
                    <p className="text-[11px] text-slate-600">{officer.designation} • {officer.station}</p>
                    <span className="text-[10px] text-slate-400 font-mono">আবেদন: {officer.date}</span>
                  </div>
                  {isApproved ? (
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold border border-emerald-300">
                      অনুমোদিত ✓
                    </span>
                  ) : (
                    <button
                      onClick={() => handleQuickApprove(officer.name)}
                      className="px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-xs font-semibold shadow-2xs transition-all cursor-pointer shrink-0"
                    >
                      অনুমোদন দিন
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* MRP Ceiling Policy Summary (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-700" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                জাতীয় সার সর্বোচ্চ খুচরা মূল্য (MRP গেজেট)
              </h3>
            </div>
            <button
              onClick={() => onNavigate('price-ceiling')}
              className="text-xs text-emerald-700 hover:underline font-semibold cursor-pointer"
            >
              সিলিং সেটিংস &rarr;
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <span className="text-[11px] text-emerald-800 font-semibold block">ইউরিয়া (Urea)</span>
              <span className="text-base font-bold text-emerald-950 font-mono">২৭.০০ ৳ / কেজি</span>
              <span className="text-[10px] text-slate-500 block">৫০ কেজি বস্তা: ১,৩৫০ ৳</span>
            </div>
            <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <span className="text-[11px] text-emerald-800 font-semibold block">টিএসপি (TSP)</span>
              <span className="text-base font-bold text-emerald-950 font-mono">৩২.০০ ৳ / কেজি</span>
              <span className="text-[10px] text-slate-500 block">৫০ কেজি বস্তা: ১,৬০০ ৳</span>
            </div>
            <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <span className="text-[11px] text-emerald-800 font-semibold block">ডিএপি (DAP)</span>
              <span className="text-base font-bold text-emerald-950 font-mono">২১.০০ ৳ / কেজি</span>
              <span className="text-[10px] text-slate-500 block">৫০ কেজি বস্তা: ১,০৫০ ৳</span>
            </div>
            <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <span className="text-[11px] text-emerald-800 font-semibold block">এমওপি (MOP)</span>
              <span className="text-base font-bold text-emerald-950 font-mono">২০.০০ ৳ / কেজি</span>
              <span className="text-[10px] text-slate-500 block">৫০ কেজি বস্তা: ১,০০০ ৳</span>
            </div>
          </div>

          <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
            <span>গেজেট নোটিফিকেশন নং: MoA-FD/2026-9902</span>
            <span className="font-semibold text-emerald-800">সারা দেশে কার্যকর</span>
          </div>
        </div>

      </div>

    </div>
  )
}

