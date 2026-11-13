import { useState } from 'react'
import {
  Inbox,
  AlertCircle,
  CheckCircle2,
  Clock,
  Search,
  Plus,
  MessageSquare,
  ShieldAlert,
  User,
  Phone,
  Store
} from 'lucide-react'

export default function ComplaintsModule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedComplaint, setSelectedComplaint] = useState(null)
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const [complaints, setComplaints] = useState([
    {
      id: 'CMP-2026-101',
      farmerName: 'মো. হাবিবুর রহমান',
      mobile: '01712-334411',
      nid: '19852691234567890',
      dealerName: 'মেসার্স নতুন ফসল ট্রেডার্স',
      union: '২ নং বগারচর',
      category: 'অতিরিক্ত মূল্য আদায়',
      categoryType: 'price',
      date: '০৮/১১/২০২৬',
      details: 'সরকার নির্ধারিত ইউরিয়া সারের বস্তা ১৩৫০ টাকার পরিবর্তে ডিলার ১৪৮০ টাকা করে নিয়েছে এবং কোনো রসিদ দেয়নি।',
      status: 'resolved',
      resolution: 'ডিলারকে অতিরিক্ত টাকা ফেরত দিতে বাধ্য করা হয়েছে এবং ভ্রাম্যমাণ আদালত ৫০,০০০ টাকা জরিমানা করেছে।'
    },
    {
      id: 'CMP-2026-102',
      farmerName: 'আব্দুল করিম',
      mobile: '01819-445522',
      nid: '19782691234567891',
      dealerName: 'মেসার্স কৃষক বন্ধু ঘর',
      union: '৫ নং বকশীগঞ্জ',
      category: 'ওজনে কারচুপি',
      categoryType: 'weight',
      date: '১০/১১/২০২৬',
      details: '৫০ কেজির ডিএপি সারের বস্তায় মেপে দেখা যায় ৪৬.৫ কেজি সার আছে। সিল খোলা ছিল।',
      status: 'investigating',
      resolution: 'উপ-সহকারী কৃষি কর্মকর্তা (SAAO) কে সরেজমিনে ওজন যাচাইয়ের জন্য পাঠানো হয়েছে।'
    },
    {
      id: 'CMP-2026-103',
      farmerName: 'মো. রফিকুল ইসলাম',
      mobile: '01911-889933',
      nid: '19692691234567892',
      dealerName: 'মেসার্স সোনালী মাঠ স্টোর',
      union: '৪ নং সাধুরপাড়া',
      category: 'কৃত্রিম সার সংকট সৃষ্টি',
      categoryType: 'shortage',
      date: '১১/১১/২০২৬',
      details: 'গুদামে সার থাকা সত্ত্বেও কৃষকদের বলা হচ্ছে সার নেই, পরে রাতের আঁধারে বেশি দামে বিক্রি করা হচ্ছে।',
      status: 'pending',
      resolution: 'শুনানির নোটিশ জারি করা হয়েছে। আগামী ১৫/১১/২০২৬ তারিখে ডিলারকে তলব করা হয়েছে।'
    },
    {
      id: 'CMP-2026-104',
      farmerName: 'আমিনুল হক',
      mobile: '01715-667744',
      nid: '19922691234567893',
      dealerName: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
      union: '৩ নং বাট্টাজোড়',
      category: 'সার প্রদানে অনিয়ম ও হয়রানি',
      categoryType: 'harassment',
      date: '১২/১১/২০২৬',
      details: 'কৃষি কার্ড নিয়ে গেলে সার দিতে অনীহা প্রকাশ করা হয় এবং দীর্ঘক্ষণ লাইনে দাঁড় করিয়ে রাখা হয়।',
      status: 'resolved',
      resolution: 'ডিলারকে মৌখিক সতর্কবার্তা প্রদান এবং সুষ্ঠু লাইনে সার বিতরণের নির্দেশনা দেওয়া হয়েছে।'
    }
  ])

  // New Complaint State
  const [newCmp, setNewCmp] = useState({
    farmerName: '',
    mobile: '',
    dealerName: 'মেসার্স নতুন ফসল ট্রেডার্স',
    union: '২ নং বগারচর',
    category: 'অতিরিক্ত মূল্য আদায়',
    details: ''
  })

  const handleResolve = (id, resolutionText) => {
    setComplaints(prev => prev.map(c => c.id === id ? { ...c, status: 'resolved', resolution: resolutionText || 'অভিযোগটি তদন্তপূর্বক সমাধান করা হয়েছে।' } : c))
    setToastMessage(`অভিযোগ (${id}) সফলভাবে নিষ্পত্তি করা হয়েছে! কৃষককে এসএমএসে জানানো হয়েছে।`)
    setTimeout(() => setToastMessage(''), 4500)
    if (selectedComplaint?.id === id) {
      setSelectedComplaint(prev => ({ ...prev, status: 'resolved', resolution: resolutionText || 'অভিযোগটি তদন্তপূর্বক সমাধান করা হয়েছে।' }))
    }
  }

  const handleCreateComplaint = (e) => {
    e.preventDefault()
    const entry = {
      id: `CMP-2026-${100 + complaints.length + 1}`,
      farmerName: newCmp.farmerName,
      mobile: newCmp.mobile,
      nid: 'যাচাই প্রক্রিয়াধীন',
      dealerName: newCmp.dealerName,
      union: newCmp.union,
      category: newCmp.category,
      categoryType: 'price',
      date: 'আজ, ১৩/১১/২০২৬',
      details: newCmp.details,
      status: 'pending',
      resolution: 'উপজেলা কৃষি কর্মকর্তার দপ্তরে শুনানির অপেক্ষায়।'
    }
    setComplaints([entry, ...complaints])
    setIsSubmitModalOpen(false)
    setToastMessage(`অভিযোগ (${entry.id}) সিস্টেমে জমা হয়েছে। ট্র্যাকিং নম্বর প্রেরিত।`)
    setTimeout(() => setToastMessage(''), 4500)
  }

  const filteredComplaints = complaints.filter(c => {
    const matches = c.farmerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.dealerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.category.toLowerCase().includes(searchTerm.toLowerCase())
    if (statusFilter === 'all') return matches
    return matches && c.status === statusFilter
  })

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              কৃষক অভিযোগ ও প্রতিকার বক্স (GRS)
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
              অনিয়ম ও অতিরিক্ত মূল্য প্রতিরোধ সেল
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            সার ক্রয়ে প্রতারণা, ওজনে কম বা ডিলারদের অনিয়মের বিরুদ্ধে সাধারণ কৃষকদের দাখিলকৃত অভিযোগ ও নিষ্পত্তির খতিয়ান
          </p>
        </div>

        <button
          onClick={() => setIsSubmitModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer transition-all self-start md:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>নতুন অভিযোগ দাখিল</span>
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
          <span className="text-[11px] text-slate-500 font-medium">মোট দাখিলকৃত অভিযোগ</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono">
            {complaints.length} <span className="text-xs font-normal text-slate-500">টি</span>
          </div>
          <span className="text-[10px] text-slate-400">হটলাইন ও অনলাইন সেল</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">সফল নিষ্পত্তি</span>
          <div className="text-xl font-bold text-emerald-700 mt-1 font-mono">
            {complaints.filter(c => c.status === 'resolved').length} <span className="text-xs font-normal text-slate-500">টি</span>
          </div>
          <span className="text-[10px] text-emerald-700 font-medium">সমাধানের হার ৮৫%</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">তদন্তাধীন অভিযোগ</span>
          <div className="text-xl font-bold text-amber-600 mt-1 font-mono">
            {complaints.filter(c => c.status === 'investigating').length} <span className="text-xs font-normal text-slate-500">টি</span>
          </div>
          <span className="text-[10px] text-amber-700 font-medium">মাঠপর্যায়ে তদন্ত চলমান</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">অপেক্ষমাণ অভিযোগ</span>
          <div className="text-xl font-bold text-rose-700 mt-1 font-mono">
            {complaints.filter(c => c.status === 'pending').length} <span className="text-xs font-normal text-slate-500">টি</span>
          </div>
          <span className="text-[10px] text-rose-700">দ্রুত শুনানি প্রয়োজন</span>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-xl p-4 border border-slate-200/70 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-slate-100">
          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                statusFilter === 'all' ? 'bg-[#14532d] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              সকল অভিযোগ ({complaints.length})
            </button>
            <button
              onClick={() => setStatusFilter('pending')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                statusFilter === 'pending' ? 'bg-rose-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              অপেক্ষমাণ
            </button>
            <button
              onClick={() => setStatusFilter('investigating')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                statusFilter === 'investigating' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              তদন্তাধীন
            </button>
            <button
              onClick={() => setStatusFilter('resolved')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                statusFilter === 'resolved' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              নিষ্পন্ন
            </button>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="অভিযোগ ট্র্যাকিং, কৃষক বা ডিলার..."
              className="pl-8 pr-3 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1.5 focus:ring-emerald-600 w-56 sm:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-[#f2f7f3] text-emerald-950 font-bold text-[11px]">
              <tr>
                <th className="py-2.5 px-3">ট্র্যাকিং নম্বর</th>
                <th className="py-2.5 px-3">অভিযোগকারী কৃষক</th>
                <th className="py-2.5 px-3">মোবাইল নম্বর</th>
                <th className="py-2.5 px-3">অভিযুক্ত ডিলার</th>
                <th className="py-2.5 px-3">ইউনিয়ন</th>
                <th className="py-2.5 px-3">অভিযোগের বিষয়</th>
                <th className="py-2.5 px-3">দাখিলের তারিখ</th>
                <th className="py-2.5 px-3 text-center">স্ট্যাটাস</th>
                <th className="py-2.5 px-3 text-right">পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredComplaints.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-900">{c.id}</td>
                  <td className="py-2.5 px-3 font-medium text-slate-900">{c.farmerName}</td>
                  <td className="py-2.5 px-3 font-mono text-slate-600">{c.mobile}</td>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">{c.dealerName}</td>
                  <td className="py-2.5 px-3 text-slate-600">{c.union}</td>
                  <td className="py-2.5 px-3 font-medium text-rose-700">{c.category}</td>
                  <td className="py-2.5 px-3 text-slate-600 font-mono">{c.date}</td>
                  <td className="py-2.5 px-3 text-center">
                    {c.status === 'resolved' && (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                        নিষ্পন্ন
                      </span>
                    )}
                    {c.status === 'investigating' && (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-bold">
                        তদন্তাধীন
                      </span>
                    )}
                    {c.status === 'pending' && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded-full text-[10px] font-bold">
                        অপেক্ষমাণ
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <button
                      onClick={() => setSelectedComplaint(c)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-600/70 rounded-lg text-[11px] font-semibold transition-all cursor-pointer"
                    >
                      বিবরণ ও সমাধান
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Complaint Details Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded-full">
                  কৃষক অভিযোগ প্রতিকার ব্যবস্থা (GRS)
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{selectedComplaint.id}</h3>
              </div>
              <button onClick={() => setSelectedComplaint(null)} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer">✕</button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs border border-slate-200/60">
              <div className="flex justify-between">
                <span className="text-slate-500">অভিযোগকারী কৃষক:</span>
                <span className="font-semibold text-slate-900">{selectedComplaint.farmerName} ({selectedComplaint.mobile})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">অভিযুক্ত ডিলার:</span>
                <span className="font-semibold text-slate-900">{selectedComplaint.dealerName} ({selectedComplaint.union})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">অভিযোগের বিষয়:</span>
                <span className="font-bold text-rose-700">{selectedComplaint.category}</span>
              </div>
              <div className="border-t border-slate-200 pt-1.5">
                <span className="text-slate-500 block mb-0.5">অভিযোগের বিস্তারিত বিবরণ:</span>
                <p className="font-medium text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200/70">{selectedComplaint.details}</p>
              </div>
              <div className="border-t border-slate-200 pt-1.5">
                <span className="text-slate-500 block mb-0.5">পদক্ষেপ ও নিষ্পত্তি রেকর্ড:</span>
                <p className="font-semibold text-emerald-900 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-200/60">{selectedComplaint.resolution}</p>
              </div>
            </div>

            {selectedComplaint.status !== 'resolved' && (
              <button
                onClick={() => handleResolve(selectedComplaint.id, 'তদন্তপূর্বক কৃষকের ক্ষতিপূরণ নিশ্চিত করা হয়েছে এবং বিষয়টি নিষ্পত্তি করা হলো।')}
                className="w-full py-2 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
              >
                অভিযোগটি সমাধান ও নিষ্পত্তি ঘোষণা করুন
              </button>
            )}
          </div>
        </div>
      )}

      {/* New Complaint Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">নতুন কৃষক অভিযোগ দাখিল</h3>
              <button onClick={() => setIsSubmitModalOpen(false)} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleCreateComplaint} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">কৃষকের নাম</label>
                  <input
                    type="text"
                    required
                    placeholder="যেমন: মো. আব্দুল হামিদ"
                    value={newCmp.farmerName}
                    onChange={(e) => setNewCmp({ ...newCmp, farmerName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">মোবাইল নম্বর</label>
                  <input
                    type="text"
                    required
                    placeholder="01XXXXXXXXX"
                    value={newCmp.mobile}
                    onChange={(e) => setNewCmp({ ...newCmp, mobile: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">অভিযুক্ত ডিলার</label>
                  <select
                    value={newCmp.dealerName}
                    onChange={(e) => setNewCmp({ ...newCmp, dealerName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  >
                    <option value="মেসার্স নতুন ফসল ট্রেডার্স">মেসার্স নতুন ফসল ট্রেডার্স</option>
                    <option value="মেসার্স কৃষক বন্ধু ঘর">মেসার্স কৃষক বন্ধু ঘর</option>
                    <option value="মেসার্স মাটির মানুষ এন্টারপ্রাইজ">মেসার্স মাটির মানুষ এন্টারপ্রাইজ</option>
                    <option value="মেসার্স সবুজ কৃষি ভান্ডার">মেসার্স সবুজ কৃষি ভান্ডার</option>
                    <option value="মেসার্স সোনালী মাঠ স্টোর">মেসার্স সোনালী মাঠ স্টোর</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">অভিযোগের বিষয়</label>
                  <select
                    value={newCmp.category}
                    onChange={(e) => setNewCmp({ ...newCmp, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  >
                    <option value="অতিরিক্ত মূল্য আদায়">অতিরিক্ত মূল্য আদায়</option>
                    <option value="ওজনে কারচুপি">ওজনে কারচুপি</option>
                    <option value="কৃত্রিম সার সংকট সৃষ্টি">কৃত্রিম সার সংকট সৃষ্টি</option>
                    <option value="সার প্রদানে অনিয়ম ও হয়রানি">সার প্রদানে অনিয়ম ও হয়রানি</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">অভিযোগের বিস্তারিত ঘটনা</label>
                <textarea
                  rows="3"
                  required
                  placeholder="ঘটনাস্থল, সারের বস্তা প্রতি দাবিকৃত অতিরিক্ত মূল্য বা তারিখ উল্লেখ করুন..."
                  value={newCmp.details}
                  onChange={(e) => setNewCmp({ ...newCmp, details: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  অভিযোগটি মনিটরিং সেলে দাখিল করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
