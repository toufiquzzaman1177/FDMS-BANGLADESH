import { useState } from 'react'
import {
  MapPin,
  TrendingUp,
  Users,
  AlertCircle,
  FileCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Gavel,
  Store,
  ShieldCheck
} from 'lucide-react'

export default function FieldSaaoDashboard({ onNavigate }) {
  const [visitedPoints, setVisitedPoints] = useState([])
  const [visitMsg, setVisitMsg] = useState('')

  const handleLogVisit = (pointName) => {
    setVisitedPoints(prev => [...prev, pointName])
    setVisitMsg(`${pointName}-এ জিপিএস লোকেশনসহ সরেজমিনে পরিদর্শন সম্পন্ন ও সিঙ্ক হয়েছে।`)
    setTimeout(() => setVisitMsg(''), 3000)
  }

  const kpis = [
    {
      title: 'ব্লকের নিবন্ধিত কৃষক',
      value: '৩৪০ জন',
      subtext: 'বাট্টাজোড় ব্লক-১ (খতিয়ানভুক্ত)',
      icon: Users,
      color: 'teal',
      badge: '১০০% নিবন্ধিত'
    },
    {
      title: 'মৌসুমী জমি ও ফসল চাহিদা জরিপ',
      value: '৯৪.০%',
      subtext: '৩২০ জন কৃষকের বোরো জমি যাচাইকৃত',
      icon: TrendingUp,
      color: 'emerald',
      badge: 'জরিপ শেষপর্যায়ে'
    },
    {
      title: 'জিপিএস সরেজমিনে পরিদর্শন',
      value: '১৮ টি অডিট',
      subtext: 'ওয়ার্ড আউটলেটে জিপিএস ভেরিফিকেশন',
      icon: MapPin,
      color: 'blue',
      badge: 'জিও-ট্যাগড'
    },
    {
      title: 'সার মজুত অডিট সতর্কতা',
      value: '১ টি ফ্ল্যাগ',
      subtext: 'চরপাড়া কেন্দ্রে বাড়তি কৃষক ভিড়',
      icon: AlertCircle,
      color: 'amber',
      badge: 'নজরদারি'
    }
  ]

  const inspectionSchedule = [
    {
      outlet: '১ নং ওয়ার্ড বিক্রয়কেন্দ্র (বাট্টাজোড় বাজার)',
      gps: '25.1294° N, 89.8451° E',
      time: 'সকাল ১০:৩০',
      finding: 'স্টক রেজিস্টার ও ক্যাশ মেমো সঠিক রয়েছে। কোনো বাড়তি দাম নেওয়া হয়নি।',
      completed: true
    },
    {
      outlet: '৩ নং ওয়ার্ড বিক্রয়কেন্দ্র (দক্ষিণপাড়া শাখা)',
      gps: '25.1388° N, 89.8512° E',
      time: 'দুপুর ০২:০০',
      finding: 'বিক্রয়কেন্দ্র পরিদর্শন শিডিউল করা হয়েছে।',
      completed: false
    }
  ]

  return (
    <div className="space-y-4 font-sans">
      
      {/* Toast Notification */}
      {visitMsg && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs flex items-center gap-2 shadow-xs animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold">{visitMsg}</span>
        </div>
      )}

      {/* Sub-Header Banner */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              উপসহকারী কৃষি কর্মকর্তার কার্য্যালয় — মাঠ পরিদর্শন ড্যাশবোর্ড
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-[10px] font-bold">
              বাট্টাজোড় ব্লক-১ (SAAO)
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            কর্মকর্তা: মোঃ শহিদুল ইসলাম (উপসহকারী কৃষি কর্মকর্তা) • কৃষি সম্প্রসারণ অধিদপ্তর (DAE) • সরেজমিনে পরিদর্শন ও ফসল চাহিদা জরিপ
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('field-saao')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>নতুন পরিদর্শন</span>
          </button>
          <button
            onClick={() => onNavigate('farmer-database')}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-all cursor-pointer"
          >
            <Users className="w-3.5 h-3.5" />
            <span>কৃষক খতিয়ান</span>
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
              className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs hover:border-teal-300 transition-all flex flex-col justify-between"
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
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">
                    {k.badge}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Row 2: GPS Inspection Schedule & Seasonal Crop Demand */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left: Today's GPS Inspection Routine (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                আজকের জিপিএস সরেজমিনে পরিদর্শন রুটিন
              </h3>
              <p className="text-[11px] text-slate-500">ওয়ার্ড বিক্রয়কেন্দ্রে গিয়ে ভৌতিক স্টক ও কৃষকের ক্যাশ মেমো অডিট</p>
            </div>
            <button
              onClick={() => onNavigate('field-saao')}
              className="text-xs text-teal-700 hover:text-teal-900 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>পরিদর্শন মডিউল</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {inspectionSchedule.map((item, idx) => {
              const isDone = item.completed || visitedPoints.includes(item.outlet)
              return (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 ${isDone ? 'text-emerald-600' : 'text-amber-500'}`} />
                      <h4 className="text-xs font-bold text-slate-900">{item.outlet}</h4>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{item.time}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-mono">{item.gps}</span>
                    {isDone ? (
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        পরিদর্শন সম্পন্ন ✓
                      </span>
                    ) : (
                      <button
                        onClick={() => handleLogVisit(item.outlet)}
                        className="px-2.5 py-1 bg-teal-700 hover:bg-teal-800 text-white rounded text-[11px] font-semibold cursor-pointer shadow-2xs"
                      >
                        সরেজমিনে যাচাই শুরু
                      </button>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-600 bg-white p-2 rounded-lg border border-slate-100">
                    {item.finding}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Seasonal Crop & Fertilizer Demand Survey (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                মৌসুমী ফসল ও জমি চাহিদা জরিপ
              </h3>
              <TrendingUp className="w-4 h-4 text-teal-700" />
            </div>

            <div className="space-y-2 mt-3 text-xs">
              <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                <span className="font-bold text-emerald-950 block">বোরো ধান (১৮০ একর আবাদি জমি)</span>
                <div className="flex justify-between mt-1 text-[11px] text-slate-600">
                  <span>ইউরিয়া চাহিদা: ১৮ মে.টন</span>
                  <span>টিএসপি: ৯ মে.টন</span>
                </div>
              </div>

              <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                <span className="font-bold text-emerald-950 block">ভুট্টা ও রবি গম (৮৫ একর জমি)</span>
                <div className="flex justify-between mt-1 text-[11px] text-slate-600">
                  <span>ইউরিয়া চাহিদা: ১০.২ মে.টন</span>
                  <span>ডিএপি: ৫.৯ মে.টন</span>
                </div>
              </div>

              <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                <span className="font-bold text-emerald-950 block">আলু ও শীতকালীন সবজি (৪৫ একর)</span>
                <div className="flex justify-between mt-1 text-[11px] text-slate-600">
                  <span>এমওপি চাহিদা: ৩.৫ মে.টন</span>
                  <span>জৈব সার: ৫ টন</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('farmer-database')}
            className="w-full py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>কৃষক ডেটাবেজ ও জমি হালনাগাদ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Row 3: Dealer Audit & Enforcement Actions */}
      <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-teal-50 text-teal-800 rounded-xl border border-teal-200">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">ডিলার অডিট নিরীক্ষা ও মোবাইল কোর্টে তথ্য প্রদান</h4>
            <p className="text-[11px] text-slate-500">সরেজমিনে পরিদর্শনে কোনো ডিলার বা আউটলেটে ওভারপ্রাইসিং বা ভুয়া স্টক মিললে নির্বাহী ম্যাজিস্ট্রেটকে জানান</p>
          </div>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => onNavigate('dealer-audit')}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            ডিলার অডিট
          </button>
          <button
            onClick={() => onNavigate('mobile-court')}
            className="px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            মোবাইল কোর্ট লগ
          </button>
        </div>
      </div>

    </div>
  )
}

