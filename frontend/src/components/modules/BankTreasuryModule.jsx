import { useState } from 'react'
import {
  Landmark,
  ShieldCheck,
  CheckCircle2,
  Clock,
  XCircle,
  Search,
  Plus,
  Eye,
  FileCheck,
  Building,
  Receipt,
  Download,
  AlertTriangle
} from 'lucide-react'

export default function BankTreasuryModule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedChallan, setSelectedChallan] = useState(null)
  const [filterStatus, setFilterStatus] = useState('all')
  const [isEntryModalOpen, setIsEntryModalOpen] = useState(false)
  const [verifyToast, setVerifyToast] = useState('')

  const [challans, setChallans] = useState([
    {
      id: 'CH-SB-2026-901',
      challanNo: 'TR-2026-11890',
      dealerName: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
      union: '৩ নং বাট্টাজোড়',
      bankName: 'সোনালী ব্যাংক পিএলসি',
      branch: 'বকশীগঞ্জ শাখা, জামালপুর',
      code: '১-৪৩২১-০০০০-২৬৮১',
      amount: '৳ ৬,৮০,০০০',
      rawAmount: 680000,
      depositDate: '০২/১১/২০২৬',
      verifiedDate: '০৩/১১/২০২৬',
      status: 'verified',
      securityDeposit: '৳ ৫,০০,০০০ (হালনাগাদ)',
      verifiedBy: 'ট্রেজারি অফিসার — সোনালী ব্যাংক'
    },
    {
      id: 'CH-SB-2026-902',
      challanNo: 'TR-2026-11945',
      dealerName: 'মেসার্স কৃষক বন্ধু ঘর',
      union: '৫ নং বকশীগঞ্জ',
      bankName: 'সোনালী ব্যাংক পিএলসি',
      branch: 'বকশীগঞ্জ শাখা, জামালপুর',
      code: '১-৪৩২১-০০০০-২৬৮১',
      amount: '৳ ৬,৫০,০০০',
      rawAmount: 650000,
      depositDate: '০৩/১১/২০২৬',
      verifiedDate: '০৪/১১/২০২৬',
      status: 'verified',
      securityDeposit: '৳ ৫,০০,০০০ (হালনাগাদ)',
      verifiedBy: 'ট্রেজারি অফিসার — সোনালী ব্যাংক'
    },
    {
      id: 'CH-SB-2026-903',
      challanNo: 'TR-2026-12011',
      dealerName: 'মেসার্স নতুন ফসল ট্রেডার্স',
      union: '২ নং বগারচর',
      bankName: 'সোনালী ব্যাংক পিএলসি',
      branch: 'বকশীগঞ্জ শাখা, জামালপুর',
      code: '১-৪৩২১-০০০০-২৬৮১',
      amount: '৳ ৬,২০,০০০',
      rawAmount: 620000,
      depositDate: '০৫/১১/২০২৬',
      verifiedDate: 'অপেক্ষমাণ',
      status: 'pending',
      securityDeposit: '৳ ৫,০০,০০০ (হালনাগাদ)',
      verifiedBy: 'যাচাই প্রক্রিয়াধীন'
    },
    {
      id: 'CH-SB-2026-904',
      challanNo: 'TR-2026-12089',
      dealerName: 'মেসার্স সবুজ কৃষি ভান্ডার',
      union: '৬ নং ধানুয়া কামালপুর',
      bankName: 'সোনালী ব্যাংক পিএলসি',
      branch: 'বকশীগঞ্জ শাখা, জামালপুর',
      code: '১-৪৩২১-০০০০-২৬৮১',
      amount: '৳ ৫,১০,০০০',
      rawAmount: 510000,
      depositDate: '০৭/১১/২০২৬',
      verifiedDate: '০৮/১১/২০২৬',
      status: 'verified',
      securityDeposit: '৳ ৫,০০,০০০ (হালনাগাদ)',
      verifiedBy: 'ট্রেজারি অফিসার — সোনালী ব্যাংক'
    },
    {
      id: 'CH-SB-2026-905',
      challanNo: 'TR-2026-12150',
      dealerName: 'মেসার্স সোনালী মাঠ স্টোর',
      union: '৪ নং সাধুরপাড়া',
      bankName: 'সোনালী ব্যাংক পিএলসি',
      branch: 'বকশীগঞ্জ শাখা, জামালপুর',
      code: '১-৪৩২১-০০০০-২৬৮১',
      amount: '৳ ৪,৭৫,০০০',
      rawAmount: 475000,
      depositDate: '০৯/১১/২০২৬',
      verifiedDate: 'অপেক্ষমাণ',
      status: 'pending',
      securityDeposit: '৳ ৪,০০,০০০ (১ লাখ বকেয়া)',
      verifiedBy: 'যাচাই প্রক্রিয়াধীন'
    },
    {
      id: 'CH-SB-2026-906',
      challanNo: 'TR-2026-12200',
      dealerName: 'মেসার্স শ্যামল বাংলা সার বিতান',
      union: '৬ নং নিলাখিয়া',
      bankName: 'সোনালী ব্যাংক পিএলসি',
      branch: 'বকশীগঞ্জ শাখা, জামালপুর',
      code: '১-৪৩২১-০০০০-২৬৮১',
      amount: '৳ ০',
      rawAmount: 0,
      depositDate: '—',
      verifiedDate: '—',
      status: 'rejected',
      securityDeposit: '৳ ০ (জামানত অকার্যকর)',
      verifiedBy: 'অনুমোদনহীন'
    }
  ])

  // New Challan Form
  const [newChallan, setNewChallan] = useState({
    dealerName: 'মেসার্স নতুন ফসল ট্রেডার্স',
    union: '২ নং বগারচর',
    challanNo: 'TR-2026-12340',
    amount: '600000',
    depositDate: '১২/১১/২০২৬',
    branch: 'বকশীগঞ্জ শাখা, জামালপুর'
  })

  const handleVerifyChallan = (id) => {
    setChallans(prev => prev.map(c => c.id === id ? { ...c, status: 'verified', verifiedDate: 'আজ, লাইভ যাচাইকৃত', verifiedBy: 'অনলাইন ট্রেজারি সিস্টেম (স্বয়ংক্রিয়)' } : c))
    setVerifyToast(`${id} সোনালী ব্যাংক সেন্ট্রাল সার্ভার হতে সফলভাবে যাচাই ও নিশ্চিত করা হয়েছে!`)
    setTimeout(() => setVerifyToast(''), 4500)
    if (selectedChallan?.id === id) {
      setSelectedChallan(prev => ({ ...prev, status: 'verified', verifiedDate: 'আজ, লাইভ যাচাইকৃত', verifiedBy: 'অনলাইন ট্রেজারি সিস্টেম (স্বয়ংক্রিয়)' }))
    }
  }

  const handleCreateChallan = (e) => {
    e.preventDefault()
    const entry = {
      id: `CH-SB-2026-90${challans.length + 1}`,
      challanNo: newChallan.challanNo,
      dealerName: newChallan.dealerName,
      union: newChallan.union,
      bankName: 'সোনালী ব্যাংক পিএলসি',
      branch: newChallan.branch,
      code: '১-৪৩২১-০০০০-২৬৮১',
      amount: `৳ ${parseInt(newChallan.amount).toLocaleString('bn-BD')}`,
      rawAmount: parseInt(newChallan.amount),
      depositDate: newChallan.depositDate,
      verifiedDate: 'অপেক্ষমাণ',
      status: 'pending',
      securityDeposit: '৳ ৫,০০,০০০ (যাচাইকৃত)',
      verifiedBy: 'যাচাই প্রক্রিয়াধীন'
    }
    setChallans([entry, ...challans])
    setIsEntryModalOpen(false)
    setVerifyToast(`চালান (${entry.challanNo}) সফলভাবে সিস্টেমে যুক্ত হয়েছে। যাচাইয়ের জন্য প্রেরিত।`)
    setTimeout(() => setVerifyToast(''), 4500)
  }

  const filteredChallans = challans.filter(c => {
    const matches = c.dealerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.challanNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.id.toLowerCase().includes(searchTerm.toLowerCase())
    if (filterStatus === 'all') return matches
    return matches && c.status === filterStatus
  })

  const totalVerifiedAmount = challans.filter(c => c.status === 'verified').reduce((sum, c) => sum + c.rawAmount, 0)

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              ব্যাংক চালান ও জামানত যাচাই
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
              সোনালী ব্যাংক ট্রেজারি খতিয়ান
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            সরকারি সার সরবরাহ কোড ১-৪৩২১-০০০০-২৬৮১ এ জমাকৃত অর্থ এবং ডিলারের ব্যাংক জামানত সত্যতা পরীক্ষণ
          </p>
        </div>

        <button
          onClick={() => setIsEntryModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer transition-all self-start md:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>নতুন চালান দাখিল</span>
        </button>
      </div>

      {verifyToast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{verifyToast}</span>
          </div>
          <button onClick={() => setVerifyToast('')} className="text-emerald-700 font-bold">✕</button>
        </div>
      )}

      {/* 4 Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">যাচাইকৃত মোট জমা</span>
          <div className="text-xl font-bold text-emerald-800 mt-1 font-mono">
            ৳ {totalVerifiedAmount.toLocaleString('bn-BD')}
          </div>
          <span className="text-[10px] text-emerald-700 font-medium">সোনালী ব্যাংকে জমা নিশ্চিত</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">যাচাইকৃত চালান</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono">
            {challans.filter(c => c.status === 'verified').length} <span className="text-xs font-normal text-slate-500">টি</span>
          </div>
          <span className="text-[10px] text-slate-400">ডিও ইস্যুর উপযুক্ত</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">অপেক্ষমাণ চালান</span>
          <div className="text-xl font-bold text-amber-600 mt-1 font-mono">
            {challans.filter(c => c.status === 'pending').length} <span className="text-xs font-normal text-slate-500">টি</span>
          </div>
          <span className="text-[10px] text-amber-700">ব্যাংক স্ক্রুটিনি চলছে</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">মোট নিরাপত্তা জামানত</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono">৳ ২৫,০০,০০০</div>
          <span className="text-[10px] text-slate-400">ডিলার লাইসেন্স বাবদ গ্যারান্টি</span>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-xl p-4 border border-slate-200/70 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-slate-100">
          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                filterStatus === 'all' ? 'bg-[#14532d] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              সকল চালান ({challans.length})
            </button>
            <button
              onClick={() => setFilterStatus('verified')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                filterStatus === 'verified' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              যাচাইকৃত ({challans.filter(c => c.status === 'verified').length})
            </button>
            <button
              onClick={() => setFilterStatus('pending')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                filterStatus === 'pending' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              অপেক্ষমাণ ({challans.filter(c => c.status === 'pending').length})
            </button>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="চালান নম্বর বা ডিলারের নাম খুঁজুন..."
              className="pl-8 pr-3 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1.5 focus:ring-emerald-600 w-52 sm:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-[#f2f7f3] text-emerald-950 font-bold text-[11px]">
              <tr>
                <th className="py-2.5 px-3">চালান ট্র্যাকিং</th>
                <th className="py-2.5 px-3">ট্রেজারি চালান নম্বর</th>
                <th className="py-2.5 px-3">ডিলারের নাম</th>
                <th className="py-2.5 px-3">ব্যাংক ও শাখা</th>
                <th className="py-2.5 px-3">জমার তারিখ</th>
                <th className="py-2.5 px-3">জমার পরিমাণ</th>
                <th className="py-2.5 px-3">নিরাপত্তা জামানত</th>
                <th className="py-2.5 px-3 text-center">অবস্থা</th>
                <th className="py-2.5 px-3 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredChallans.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2.5 px-3 font-mono font-medium text-slate-900">{c.id}</td>
                  <td className="py-2.5 px-3 font-mono font-semibold text-emerald-800">{c.challanNo}</td>
                  <td className="py-2.5 px-3 font-medium text-slate-900">{c.dealerName}</td>
                  <td className="py-2.5 px-3 text-slate-600">{c.branch}</td>
                  <td className="py-2.5 px-3 text-slate-600 font-mono">{c.depositDate}</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900 font-mono">{c.amount}</td>
                  <td className="py-2.5 px-3 text-slate-600">{c.securityDeposit}</td>
                  <td className="py-2.5 px-3 text-center">
                    {c.status === 'verified' && (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                        যাচাইকৃত
                      </span>
                    )}
                    {c.status === 'pending' && (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-bold">
                        অপেক্ষমাণ
                      </span>
                    )}
                    {c.status === 'rejected' && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded-full text-[10px] font-bold">
                        বাতিল
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <button
                      onClick={() => setSelectedChallan(c)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-600/70 rounded-lg text-[11px] font-semibold transition-all cursor-pointer"
                    >
                      রসিদ দেখুন
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Challan Receipt Modal */}
      {selectedChallan && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">
                  সোনালী ব্যাংক পিএলসি — ট্রেজারি চালান ভেরিফিকেশন
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{selectedChallan.challanNo}</h3>
              </div>
              <button onClick={() => setSelectedChallan(null)} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer">✕</button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs border border-slate-200/60">
              <div className="flex justify-between">
                <span className="text-slate-500">ডিলার:</span>
                <span className="font-semibold text-slate-900">{selectedChallan.dealerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ইউনিয়ন:</span>
                <span className="font-semibold text-slate-800">{selectedChallan.union}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">অর্থনৈতিক কোড:</span>
                <span className="font-mono font-semibold text-emerald-800">{selectedChallan.code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ব্যাংক ও শাখা:</span>
                <span className="font-semibold text-slate-800">{selectedChallan.bankName}, {selectedChallan.branch}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">জমাকৃত অর্থ:</span>
                <span className="font-bold text-emerald-900 text-sm font-mono">{selectedChallan.amount}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-1.5">
                <span className="text-slate-500">যাচাইয়ের স্থিতি:</span>
                <span className="font-bold text-slate-800">{selectedChallan.verifiedBy}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              {selectedChallan.status === 'pending' ? (
                <button
                  onClick={() => handleVerifyChallan(selectedChallan.id)}
                  className="w-full py-2 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  সোনালী ব্যাংক সার্ভার হতে অনলাইন যাচাই করুন
                </button>
              ) : (
                <button
                  onClick={() => alert(`চালান কপি ডাউনলোড হচ্ছে: ${selectedChallan.challanNo}`)}
                  className="w-full py-2 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  চালান মুদ্রণ করুন (Official Copy)
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Entry Modal */}
      {isEntryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">নতুন ব্যাংক চালান এন্ট্রি</h3>
              <button onClick={() => setIsEntryModalOpen(false)} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleCreateChallan} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 mb-1">ডিলার নির্বাচন</label>
                <select
                  value={newChallan.dealerName}
                  onChange={(e) => setNewChallan({ ...newChallan, dealerName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                >
                  <option value="মেসার্স মাটির মানুষ এন্টারপ্রাইজ">মেসার্স মাটির মানুষ এন্টারপ্রাইজ</option>
                  <option value="মেসার্স কৃষক বন্ধু ঘর">মেসার্স কৃষক বন্ধু ঘর</option>
                  <option value="মেসার্স নতুন ফসল ট্রেডার্স">মেসার্স নতুন ফসল ট্রেডার্স</option>
                  <option value="মেসার্স সবুজ কৃষি ভান্ডার">মেসার্স সবুজ কৃষি ভান্ডার</option>
                  <option value="মেসার্স সোনালী মাঠ স্টোর">মেসার্স সোনালী মাঠ স্টোর</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">ট্রেজারি চালান নম্বর</label>
                <input
                  type="text"
                  required
                  value={newChallan.challanNo}
                  onChange={(e) => setNewChallan({ ...newChallan, challanNo: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">জমাকৃত অর্থ (টাকা)</label>
                  <input
                    type="number"
                    required
                    value={newChallan.amount}
                    onChange={(e) => setNewChallan({ ...newChallan, amount: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">জমার তারিখ</label>
                  <input
                    type="text"
                    value={newChallan.depositDate}
                    onChange={(e) => setNewChallan({ ...newChallan, depositDate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  চালান জমা ও যাচাই প্রক্রিয়ায় পাঠান
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

