import { useState } from 'react'
import {
  Store,
  Truck,
  ArrowRightLeft,
  Package,
  MapPin,
  CheckCircle2,
  Clock,
  Plus,
  Search,
  Filter,
  UserCheck
} from 'lucide-react'

export default function WardOutletsModule() {
  const [selectedDealerId, setSelectedDealerId] = useState(1)
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false)
  const [transferToast, setTransferToast] = useState('')

  // Dealers with their 3 approved ward outlets
  const [dealers, setDealers] = useState([
    {
      id: 1,
      name: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
      union: '৩ নং বাট্টাজোড়',
      mainWarehouseStock: { urea: 350, tsp: 120, dap: 100, mop: 100 },
      outlets: [
        {
          id: 'OUT-101-W1',
          name: '১ নং ওয়ার্ড বিক্রয়কেন্দ্র',
          location: 'বাট্টাজোড় বাজার মোড়',
          inCharge: 'আব্দুল করিম (সহকারী ডিলার)',
          mobile: '01712-345671',
          stock: { urea: 120, tsp: 40, dap: 35, mop: 30 },
          capacity: '২৫০ বস্তা',
          status: 'active'
        },
        {
          id: 'OUT-101-W2',
          name: '২ নং ওয়ার্ড বিক্রয়কেন্দ্র',
          location: 'পূর্বপাড়া সরকারি প্রাথমিক বিদ্যালয় সংলগ্ন',
          inCharge: 'মো. রফিকুল ইসলাম',
          mobile: '01712-345672',
          stock: { urea: 110, tsp: 40, dap: 35, mop: 35 },
          capacity: '২০০ বস্তা',
          status: 'active'
        },
        {
          id: 'OUT-101-W3',
          name: '৩ নং ওয়ার্ড বিক্রয়কেন্দ্র',
          location: 'নদীর ঘাট পয়েন্ট',
          inCharge: 'শাহাদাত হোসেন',
          mobile: '01712-345673',
          stock: { urea: 120, tsp: 40, dap: 30, mop: 35 },
          capacity: '২০০ বস্তা',
          status: 'active'
        }
      ]
    },
    {
      id: 2,
      name: 'মেসার্স কৃষক বন্ধু ঘর',
      union: '৫ নং বকশীগঞ্জ',
      mainWarehouseStock: { urea: 310, tsp: 112, dap: 100, mop: 100 },
      outlets: [
        {
          id: 'OUT-102-W4',
          name: '৪ নং ওয়ার্ড বিক্রয়কেন্দ্র',
          location: 'বকশীগঞ্জ পুরাতন বাসস্ট্যান্ড',
          inCharge: 'মোস্তাফিজুর রহমান',
          mobile: '01819-223341',
          stock: { urea: 110, tsp: 38, dap: 35, mop: 35 },
          capacity: '২৫০ বস্তা',
          status: 'active'
        },
        {
          id: 'OUT-102-W5',
          name: '৫ নং ওয়ার্ড বিক্রয়কেন্দ্র',
          location: 'উপজেলা ডাকবাংলো মোড়',
          inCharge: 'কামাল উদ্দিন',
          mobile: '01819-223342',
          stock: { urea: 100, tsp: 37, dap: 33, mop: 32 },
          capacity: '২০০ বস্তা',
          status: 'active'
        },
        {
          id: 'OUT-102-W6',
          name: '৬ নং ওয়ার্ড বিক্রয়কেন্দ্র',
          location: 'মরিচাপাড়া বাজার',
          inCharge: 'মো. জহিরুল ইসলাম',
          mobile: '01819-223343',
          stock: { urea: 100, tsp: 37, dap: 32, mop: 33 },
          capacity: '২০০ বস্তা',
          status: 'active'
        }
      ]
    },
    {
      id: 3,
      name: 'মেসার্স নতুন ফসল ট্রেডার্স',
      union: '২ নং বগারচর',
      mainWarehouseStock: { urea: 300, tsp: 120, dap: 100, mop: 100 },
      outlets: [
        {
          id: 'OUT-103-W1',
          name: '১ নং ওয়ার্ড বিক্রয়কেন্দ্র',
          location: 'বগারচর বাজার',
          inCharge: 'হেলাল উদ্দিন',
          mobile: '01911-556671',
          stock: { urea: 100, tsp: 40, dap: 35, mop: 35 },
          capacity: '২০০ বস্তা',
          status: 'active'
        },
        {
          id: 'OUT-103-W2',
          name: '২ নং ওয়ার্ড বিক্রয়কেন্দ্র',
          location: 'সারমারা মোড়',
          inCharge: 'আব্দুস সাত্তার',
          mobile: '01911-556672',
          stock: { urea: 100, tsp: 40, dap: 33, mop: 32 },
          capacity: '২০০ বস্তা',
          status: 'active'
        },
        {
          id: 'OUT-103-W3',
          name: '৩ নং ওয়ার্ড বিক্রয়কেন্দ্র',
          location: 'টেংরাকান্দা পয়েন্ট',
          inCharge: 'ফরিদ মিয়া',
          mobile: '01911-556673',
          stock: { urea: 100, tsp: 40, dap: 32, mop: 33 },
          capacity: '২০০ বস্তা',
          status: 'active'
        }
      ]
    }
  ])

  // Transfer Log
  const [transfers, setTransfers] = useState([
    {
      id: 'TRF-881',
      date: '০৮/১১/২০২৬, সকাল ১০:১৫',
      from: 'প্রধান গুদাম (বাট্টাজোড়)',
      to: '১ নং ওয়ার্ড বিক্রয়কেন্দ্র',
      items: 'ইউরিয়া: ৫০ বস্তা, টিএসপি: ২০ বস্তা',
      status: 'completed',
      authorizedBy: 'মো. রফিকুল ইসলাম (SAAO)'
    },
    {
      id: 'TRF-882',
      date: '০৯/১১/২০২৬, দুপুর ২:৩০',
      from: 'প্রধান গুদাম (বকশীগঞ্জ)',
      to: '৫ নং ওয়ার্ড বিক্রয়কেন্দ্র',
      items: 'ইউরিয়া: ৪০ বস্তা, ডিএপি: ২০ বস্তা',
      status: 'completed',
      authorizedBy: 'কামরুল হাসান (SAAO)'
    },
    {
      id: 'TRF-883',
      date: '১০/১১/২০২৬, বিকাল ৪:০০',
      from: 'প্রধান গুদাম (বগারচর)',
      to: '২ নং ওয়ার্ড বিক্রয়কেন্দ্র',
      items: 'ইউরিয়া: ৩০ বস্তা, এমওপি: ১৫ বস্তা',
      status: 'in-transit',
      authorizedBy: 'সাকলাইন আহমেদ (SAAO)'
    }
  ])

  // Transfer Form State
  const [transferForm, setTransferForm] = useState({
    targetOutlet: 'OUT-101-W1',
    urea: '20',
    tsp: '10',
    dap: '10',
    mop: '5'
  })

  const currentDealer = dealers.find(d => d.id === selectedDealerId) || dealers[0]

  const handleCreateTransfer = (e) => {
    e.preventDefault()
    const target = currentDealer.outlets.find(o => o.id === transferForm.targetOutlet)
    const newTrf = {
      id: `TRF-${Math.floor(100 + Math.random() * 900)}`,
      date: 'আজ, এইমাত্র',
      from: `প্রধান গুদাম (${currentDealer.union})`,
      to: target ? target.name : 'ওয়ার্ড আউটলেট',
      items: `ইউরিয়া: ${transferForm.urea} বস্তা, টিএসপি: ${transferForm.tsp} বস্তা, ডিএপি: ${transferForm.dap} বস্তা`,
      status: 'in-transit',
      authorizedBy: 'উপজেলা কৃষি কর্মকর্তা (অনুমোদিত)'
    }
    setTransfers([newTrf, ...transfers])
    setIsTransferModalOpen(false)
    setTransferToast(`স্টক ট্রান্সফার চালান (${newTrf.id}) সফলভাবে ইস্যু করা হয়েছে! আউটলেটে প্রেরিত।`)
    setTimeout(() => setTransferToast(''), 4500)
  }

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Top Header */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              ওয়ার্ড বিক্রয়কেন্দ্র ও আউটলেট ব্যবস্থাপনা
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
              ডিলার প্রতি ৩টি অনুমোদিত ওয়ার্ড পয়েন্ট
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            প্রত্যন্ত অঞ্চলের কৃষকদের সার প্রাপ্তি সহজতর করতে প্রতিটি ডিলারের ৩টি বিক্রয়কেন্দ্রের স্টক ও ট্রান্সফার মনিটরিং
          </p>
        </div>

        <button
          onClick={() => setIsTransferModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer transition-all self-start md:self-auto"
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span>আউটলেটে স্টক ট্রান্সফার</span>
        </button>
      </div>

      {transferToast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{transferToast}</span>
          </div>
          <button onClick={() => setTransferToast('')} className="text-emerald-700 font-bold">✕</button>
        </div>
      )}

      {/* Dealer Selection Tabs */}
      <div className="bg-white rounded-xl p-3 border border-slate-200/70 shadow-xs flex items-center gap-2 overflow-x-auto">
        <span className="text-xs font-bold text-slate-700 shrink-0 mr-1 flex items-center gap-1">
          <Store className="w-3.5 h-3.5 text-emerald-700" />
          <span>ডিলার বাছাই:</span>
        </span>
        {dealers.map((dealer) => (
          <button
            key={dealer.id}
            onClick={() => setSelectedDealerId(dealer.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 cursor-pointer transition-all ${
              selectedDealerId === dealer.id
                ? 'bg-[#14532d] text-white font-semibold shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {dealer.name} ({dealer.union})
          </button>
        ))}
      </div>

      {/* 3 Outlets for selected Dealer */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xs sm:text-sm font-bold text-slate-900">
            {currentDealer.name} — ৩টি অনুমোদিত ওয়ার্ড বিক্রয়কেন্দ্র
          </h3>
          <span className="text-[11px] text-slate-500 font-medium">
            প্রধান গুদাম ব্যালেন্স: ইউরিয়া {currentDealer.mainWarehouseStock.urea} কেজি • টিএসপি {currentDealer.mainWarehouseStock.tsp} কেজি
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {currentDealer.outlets.map((outlet, idx) => (
            <div
              key={outlet.id}
              className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-3 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center justify-center font-mono">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{outlet.name}</h4>
                      <span className="text-[10px] text-slate-400 font-mono">{outlet.id}</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[9px] font-bold">
                    সক্রিয় পয়েন্ট
                  </span>
                </div>

                <div className="space-y-1.5 pt-2 text-xs">
                  <div className="flex items-start gap-1 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-[11px]">{outlet.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <UserCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-[11px]">{outlet.inCharge} ({outlet.mobile})</span>
                  </div>
                </div>

                {/* Outlet Fertilizer Stock */}
                <div className="mt-3 pt-2.5 border-t border-dashed border-slate-200">
                  <p className="text-[11px] font-bold text-slate-800 mb-1.5">বর্তমান বিক্রয়যোগ্য স্টক:</p>
                  <div className="grid grid-cols-4 gap-1 text-center font-mono text-xs">
                    <div className="bg-slate-50 p-1.5 rounded">
                      <span className="text-[9px] text-slate-400 block font-sans">ইউরিয়া</span>
                      <span className="font-bold text-slate-900">{outlet.stock.urea} কেজি</span>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded">
                      <span className="text-[9px] text-slate-400 block font-sans">টিএসপি</span>
                      <span className="font-bold text-slate-900">{outlet.stock.tsp} কেজি</span>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded">
                      <span className="text-[9px] text-slate-400 block font-sans">ডিএপি</span>
                      <span className="font-bold text-slate-900">{outlet.stock.dap} কেজি</span>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded">
                      <span className="text-[9px] text-slate-400 block font-sans">এমওপি</span>
                      <span className="font-bold text-slate-900">{outlet.stock.mop} কেজি</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">ধারণক্ষমতা: {outlet.capacity}</span>
                <button
                  onClick={() => {
                    setTransferForm(prev => ({ ...prev, targetOutlet: outlet.id }))
                    setIsTransferModalOpen(true)
                  }}
                  className="text-emerald-800 hover:text-emerald-950 font-semibold cursor-pointer underline"
                >
                  স্টক পাঠান &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Stock Transfer Log */}
      <div className="bg-white rounded-xl p-4 border border-slate-200/70 shadow-xs space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
            সাম্প্রতিক স্টক ট্রান্সফার লগ
          </h4>
          <span className="text-[11px] text-slate-400">প্রধান গুদাম হতে ওয়ার্ড আউটলেট চালানের খতিয়ান</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-[#f2f7f3] text-emerald-950 font-bold text-[11px]">
              <tr>
                <th className="py-2.5 px-3">চালান আইডি</th>
                <th className="py-2.5 px-3">তারিখ ও সময়</th>
                <th className="py-2.5 px-3">উৎস গুদাম</th>
                <th className="py-2.5 px-3">গন্তব্য বিক্রয়কেন্দ্র</th>
                <th className="py-2.5 px-3">স্থানান্তরিত সারের পরিমাণ</th>
                <th className="py-2.5 px-3">অনুমোদনকারী কর্মকর্তা</th>
                <th className="py-2.5 px-3 text-center">স্ট্যাটাস</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transfers.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2.5 px-3 font-mono font-medium text-slate-900">{t.id}</td>
                  <td className="py-2.5 px-3 text-slate-600">{t.date}</td>
                  <td className="py-2.5 px-3 text-slate-700">{t.from}</td>
                  <td className="py-2.5 px-3 font-medium text-slate-900">{t.to}</td>
                  <td className="py-2.5 px-3 font-mono font-medium text-slate-800">{t.items}</td>
                  <td className="py-2.5 px-3 text-slate-600">{t.authorizedBy}</td>
                  <td className="py-2.5 px-3 text-center">
                    {t.status === 'completed' && (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                        পৌঁছেছে
                      </span>
                    )}
                    {t.status === 'in-transit' && (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-bold">
                        চলমান পথে
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transfer Modal */}
      {isTransferModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">ওয়ার্ড আউটলেটে স্টক ট্রান্সফার</h3>
              <button onClick={() => setIsTransferModalOpen(false)} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleCreateTransfer} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 mb-1">গন্তব্য বিক্রয়কেন্দ্র নির্বাচন</label>
                <select
                  value={transferForm.targetOutlet}
                  onChange={(e) => setTransferForm({ ...transferForm, targetOutlet: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                >
                  {currentDealer.outlets.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.name} ({o.location})
                    </option>
                  ))}
                </select>
              </div>

              <p className="font-semibold text-slate-800 pt-1">ট্রান্সফার পরিমাণ (বস্তা / ৫০ কেজি):</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">ইউরিয়া (বস্তা)</label>
                  <input
                    type="number"
                    value={transferForm.urea}
                    onChange={(e) => setTransferForm({ ...transferForm, urea: e.target.value })}
                    className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">টিএসপি (বস্তা)</label>
                  <input
                    type="number"
                    value={transferForm.tsp}
                    onChange={(e) => setTransferForm({ ...transferForm, tsp: e.target.value })}
                    className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">ডিএপি (বস্তা)</label>
                  <input
                    type="number"
                    value={transferForm.dap}
                    onChange={(e) => setTransferForm({ ...transferForm, dap: e.target.value })}
                    className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">এমওপি (বস্তা)</label>
                  <input
                    type="number"
                    value={transferForm.mop}
                    onChange={(e) => setTransferForm({ ...transferForm, mop: e.target.value })}
                    className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  ট্রান্সফার গেটপাস তৈরি করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
