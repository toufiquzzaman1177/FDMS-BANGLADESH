import { useState } from 'react'
import {
  Gavel,
  ShieldAlert,
  AlertOctagon,
  Scale,
  Calendar,
  Search,
  Plus,
  Eye,
  CheckCircle2,
  FileSpreadsheet,
  AlertTriangle
} from 'lucide-react'

export default function MobileCourtModule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCase, setSelectedCase] = useState(null)
  const [isNewCaseModalOpen, setIsNewCaseModalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const [courtCases, setCourtCases] = useState([
    {
      id: 'MC-2026-01',
      caseNo: 'মোকো-বকশী-২০২৬/০৮',
      date: '০৪/১১/২০২৬',
      location: 'বগারচর বাজার, ২ নং বগারচর',
      accusedName: 'মেসার্স নতুন ফসল ট্রেডার্স (সাব-স্টক)',
      magistrate: 'উপজেলা নির্বাহী অফিসার (ইউএনও) ও নির্বাহী ম্যাজিস্ট্রেট',
      agricultureOfficer: 'উপজেলা কৃষি অফিসার (UAO)',
      offense: 'নির্ধারিত মূল্যের চেয়ে বস্তাপ্রতি ১৫০ টাকা অতিরিক্ত আদায়',
      fineAmount: '৫০,০০০',
      fineRaw: 50000,
      seizedFertilizer: '২০০ কেজি ইউরিয়া',
      status: 'resolved',
      actionTaken: 'জরিমানা আদায় এবং সতর্কীকরণ নোটিশ জারি'
    },
    {
      id: 'MC-2026-02',
      caseNo: 'মোকো-বকশী-২০২৬/০৯',
      date: '০৭/১১/২০২৬',
      location: 'ধানুয়া কামালপুর বাজার মোড়',
      accusedName: 'আব্দুর রহিম (অবৈধ খুচরা মজুতদার)',
      magistrate: 'সহকারী কমিশনার (ভূমি) ও নির্বাহী ম্যাজিস্ট্রেট',
      agricultureOfficer: 'অতিরিক্ত কৃষি অফিসার',
      offense: 'লাইসেন্সবিহীন অননুমোদিত গুদামে সার মজুদকরণ',
      fineAmount: '১,০০,০০০',
      fineRaw: 100000,
      seizedFertilizer: '৪৫০ কেজি ডিএপি ও টিএসপি',
      status: 'resolved',
      actionTaken: 'সার জব্দপূর্বক উন্মুক্ত নিলাম এবং অর্থ সরকারি কোষাগারে জমা'
    },
    {
      id: 'MC-2026-03',
      caseNo: 'মোকো-বকশী-২০২৬/১০',
      date: '১০/১১/২০২৬',
      location: 'নিলাখিয়া বাজার',
      accusedName: 'মেসার্স শ্যামল বাংলা সার বিতান',
      magistrate: 'নির্বাহী ম্যাজিস্ট্রেট ও উপজেলা প্রশাসন',
      agricultureOfficer: 'উপজেলা কৃষি অফিসার (UAO)',
      offense: 'বিক্রয় রেজিস্টার সংরক্ষণে ব্যর্থতা ও ভুয়া কৃষক এন্ট্রি',
      fineAmount: '৭৫,০০০',
      fineRaw: 75000,
      seizedFertilizer: '২০০ কেজি ইউরিয়া',
      status: 'resolved',
      actionTaken: 'দোকান সাময়িক সিলগালা ও ডিলারশিপ স্থগিত সুপারিশ'
    },
    {
      id: 'MC-2026-04',
      caseNo: 'মোকো-বকশী-২০২৬/১১',
      date: '১২/১১/২০২৬',
      location: 'সাধুরপাড়া তিনরাস্তার মোড়',
      accusedName: 'হাসান ট্রেডার্স (খুচরা বিক্রেতা)',
      magistrate: 'উপজেলা নির্বাহী অফিসার (ইউএনও)',
      agricultureOfficer: 'উপ-সহকারী কৃষি কর্মকর্তা (SAAO)',
      offense: 'কৃষক প্রতি সরকার নির্ধারিত সিলিংয়ের অতিরিক্ত বিক্রয়',
      fineAmount: '৩০,০০০',
      fineRaw: 30000,
      seizedFertilizer: '—',
      status: 'resolved',
      actionTaken: 'জরিমানা আদায় এবং মুচলেকা গ্রহণ'
    },
    {
      id: 'MC-2026-05',
      caseNo: 'মোকো-বকশী-২০২৬/১২',
      date: 'আজকের অভিযান',
      location: 'বাট্টাজোড় চকবাজার',
      accusedName: 'গোপন অভিযোগের ভিত্তিতে অনুসন্ধান',
      magistrate: 'নির্বাহী ম্যাজিস্ট্রেট',
      agricultureOfficer: 'উপজেলা কৃষি অফিসার (UAO)',
      offense: 'ওজনে কারচুপি ও কম দেওয়ার অভিযোগ',
      fineAmount: 'তদন্তাধীন',
      fineRaw: 0,
      seizedFertilizer: 'নমুনা ল্যাবে প্রেরিত',
      status: 'investigating',
      actionTaken: 'তদন্ত কমিটি গঠিত (প্রতিবেদন ৩ দিনের মধ্যে দাখিল)'
    }
  ])

  // New Case State
  const [formData, setFormData] = useState({
    caseNo: 'মোকো-বকশী-২০২৬/১৩',
    location: 'বকশীগঞ্জ পৌরসভা বাজার',
    accusedName: '',
    magistrate: 'উপজেলা নির্বাহী অফিসার ও নির্বাহী ম্যাজিস্ট্রেট',
    agricultureOfficer: 'উপজেলা কৃষি অফিসার (UAO)',
    offense: 'অতিরিক্ত মূল্যে সার বিক্রয়',
    fineAmount: '৪০,০০০',
    seizedFertilizer: '১০০ কেজি ইউরিয়া',
    actionTaken: 'জরিমানা আদায় ও সরকারি রসিদ প্রদান'
  })

  const totalFines = courtCases.reduce((sum, c) => sum + c.fineRaw, 0)

  const handleCreateCase = (e) => {
    e.preventDefault()
    const newEntry = {
      id: `MC-2026-0${courtCases.length + 1}`,
      caseNo: formData.caseNo,
      date: 'আজ, ১৩/১১/২০২৬',
      location: formData.location,
      accusedName: formData.accusedName,
      magistrate: formData.magistrate,
      agricultureOfficer: formData.agricultureOfficer,
      offense: formData.offense,
      fineAmount: formData.fineAmount,
      fineRaw: parseInt(formData.fineAmount.replace(/,/g, '')) || 0,
      seizedFertilizer: formData.seizedFertilizer,
      status: 'resolved',
      actionTaken: formData.actionTaken
    }
    setCourtCases([newEntry, ...courtCases])
    setIsNewCaseModalOpen(false)
    setToastMessage(`মোবাইল কোর্ট রেকর্ড (${newEntry.caseNo}) সফলভাবে সিস্টেমে যুক্ত হয়েছে!`)
    setTimeout(() => setToastMessage(''), 4500)
  }

  const filteredCases = courtCases.filter(c => 
    c.caseNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.accusedName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              পরিদর্শন ও মোবাইল কোর্ট নজরদারি
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-[10px] font-semibold">
              নির্বাহী ম্যাজিস্ট্রেট ও টাস্কফোর্স
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            উপজেলা সার ও বীজ মনিটরিং টাস্কফোর্সের আকস্মিক অভিযান, কালোবাজারি রোধ ও ভ্রাম্যমাণ আদালতের মামলার নথি
          </p>
        </div>

        <button
          onClick={() => setIsNewCaseModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer transition-all self-start md:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>অভিযান লগ এন্ট্রি</span>
        </button>
      </div>

      {toastMessage && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button onClick={() => setToastMessage('')} className="text-emerald-700 font-bold">✕</button>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">আদায়কৃত জরিমানা</span>
          <div className="text-xl font-bold text-rose-700 mt-1 font-mono">
            ৳ {totalFines.toLocaleString('bn-BD')}
          </div>
          <span className="text-[10px] text-slate-400">সরকারি কোষাগারে জমা</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">মোট পরিচালিত অভিযান</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono">
            {courtCases.length} <span className="text-xs font-normal text-slate-500">টি</span>
          </div>
          <span className="text-[10px] text-emerald-700 font-medium">নিয়মিত টাস্কফোর্স মনিটরিং</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">জব্দকৃত অবৈধ সার</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono">৮৫০ <span className="text-xs font-normal text-slate-500">কেজি</span></div>
          <span className="text-[10px] text-slate-400">নিলামে প্রকৃত কৃষকদের মধ্যে বিক্রয়</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">সিলগালা ও স্থগিত লাইসেন্স</span>
          <div className="text-xl font-bold text-amber-700 mt-1 font-mono">১ <span className="text-xs font-normal text-slate-500">টি</span></div>
          <span className="text-[10px] text-rose-600 font-medium">মেসার্স শ্যামল বাংলা সার বিতান</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl p-4 border border-slate-200/70 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-slate-100">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
            ভ্রাম্যমাণ আদালত ও মাঠ পরিদর্শন মামলা রেজিস্টার
          </h4>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="মামলা নম্বর, স্থান বা অভিযুক্তের নাম..."
              className="pl-8 pr-3 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1.5 focus:ring-emerald-600 w-56 sm:w-72"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-[#f2f7f3] text-emerald-950 font-bold text-[11px]">
              <tr>
                <th className="py-2.5 px-3">মামলা নম্বর</th>
                <th className="py-2.5 px-3">অভিযানের তারিখ</th>
                <th className="py-2.5 px-3">অভিযুক্ত ব্যক্তি / প্রতিষ্ঠান</th>
                <th className="py-2.5 px-3">স্থান</th>
                <th className="py-2.5 px-3">অভিযোগ ও অপরাধের বিবরণ</th>
                <th className="py-2.5 px-3">জরিমানা (টাকা)</th>
                <th className="py-2.5 px-3">জব্দকৃত সার</th>
                <th className="py-2.5 px-3 text-center">স্ট্যাটাস</th>
                <th className="py-2.5 px-3 text-right">আদেশ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCases.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-900">{c.caseNo}</td>
                  <td className="py-2.5 px-3 text-slate-600 font-mono">{c.date}</td>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">{c.accusedName}</td>
                  <td className="py-2.5 px-3 text-slate-600">{c.location}</td>
                  <td className="py-2.5 px-3 text-slate-800 max-w-xs">{c.offense}</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-rose-700">৳ {c.fineAmount}</td>
                  <td className="py-2.5 px-3 text-slate-700">{c.seizedFertilizer}</td>
                  <td className="py-2.5 px-3 text-center">
                    {c.status === 'resolved' ? (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                        নিষ্পন্ন
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-bold">
                        তদন্তাধীন
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <button
                      onClick={() => setSelectedCase(c)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-600/70 rounded-lg text-[11px] font-semibold transition-all cursor-pointer"
                    >
                      আদেশনামা
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Case Details Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded-full">
                  ভ্রাম্যমাণ আদালত আদেশনামা — আইন ও বিচার শাখা
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{selectedCase.caseNo}</h3>
              </div>
              <button onClick={() => setSelectedCase(null)} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer">✕</button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs border border-slate-200/60">
              <div className="flex justify-between">
                <span className="text-slate-500">অভিযুক্ত:</span>
                <span className="font-semibold text-slate-900">{selectedCase.accusedName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">অভিযানের স্থান:</span>
                <span className="font-semibold text-slate-800">{selectedCase.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">বিচারক / ম্যাজিস্ট্রেট:</span>
                <span className="font-semibold text-slate-800">{selectedCase.magistrate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">উপস্থিত কৃষি কর্মকর্তা:</span>
                <span className="font-semibold text-slate-800">{selectedCase.agricultureOfficer}</span>
              </div>
              <div className="border-t border-slate-200 pt-1.5">
                <span className="text-slate-500 block mb-0.5">অপরাধের ধরন:</span>
                <p className="font-medium text-slate-900">{selectedCase.offense}</p>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">অর্থদণ্ড (জরিমানা):</span>
                <span className="font-bold text-rose-700 font-mono text-sm">৳ {selectedCase.fineAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">জব্দকৃত সার:</span>
                <span className="font-bold text-slate-900">{selectedCase.seizedFertilizer}</span>
              </div>
              <div className="border-t border-slate-200 pt-1.5">
                <span className="text-slate-500 block mb-0.5">প্রদত্ত আদেশ ও পদক্ষেপ:</span>
                <p className="font-semibold text-emerald-900">{selectedCase.actionTaken}</p>
              </div>
            </div>

            <button
              onClick={() => alert(`আদেশনামার অনুলিপি ডাউনলোড হচ্ছে: ${selectedCase.caseNo}`)}
              className="w-full py-2 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
            >
              আদেশনামার সার্টিফাইড কপি ডাউনলোড (PDF)
            </button>
          </div>
        </div>
      )}

      {/* New Case Modal */}
      {isNewCaseModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">নতুন মোবাইল কোর্ট মামলা এন্ট্রি</h3>
              <button onClick={() => setIsNewCaseModalOpen(false)} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleCreateCase} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">মামলা নম্বর</label>
                  <input
                    type="text"
                    required
                    value={formData.caseNo}
                    onChange={(e) => setFormData({ ...formData, caseNo: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">অভিযানের স্থান</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">অভিযুক্ত ব্যক্তি বা ডিলারের নাম</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: মেসার্স নতুন ফসল ট্রেডার্স"
                  value={formData.accusedName}
                  onChange={(e) => setFormData({ ...formData, accusedName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1">অভিযোগ ও অপরাধের বিবরণ</label>
                <textarea
                  rows="2"
                  value={formData.offense}
                  onChange={(e) => setFormData({ ...formData, offense: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">জরিমানা অর্থ (টাকা)</label>
                  <input
                    type="text"
                    value={formData.fineAmount}
                    onChange={(e) => setFormData({ ...formData, fineAmount: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">জব্দকৃত সার</label>
                  <input
                    type="text"
                    value={formData.seizedFertilizer}
                    onChange={(e) => setFormData({ ...formData, seizedFertilizer: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  মামলা সংরক্ষণ ও সরকারি নথিভুক্তকরণ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
