import { useState } from 'react'
import {
  User,
  Users,
  UserPlus,
  Search,
  Filter,
  CheckCircle2,
  FileCheck,
  CreditCard,
  Phone,
  MapPin,
  Sprout,
  Eye,
  Plus
} from 'lucide-react'

export default function FarmerDatabaseModule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [selectedFarmer, setSelectedFarmer] = useState(null)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const [farmers, setFarmers] = useState([
    {
      id: 'F-1001',
      name: 'মো. রফিকুল ইসলাম',
      fatherName: 'মরহুম আব্দুল আলী',
      union: '৩ নং বাট্টাজোড়',
      ward: '১ নং ওয়ার্ড',
      mobile: '01712-889911',
      nid: '19852691234567890',
      krishiCard: 'KC-2026-3391',
      landAmount: '০.৪৫ একর (৪৫ শতক)',
      category: 'ছোট কৃষক',
      categoryType: 'small',
      primaryCrop: 'আমন ধান ও ভুট্টা',
      entitledQuota: 'ইউরিয়া ৫০ কেজি • টিএসপি ২৫ কেজি',
      assignedDealer: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ'
    },
    {
      id: 'F-1002',
      name: 'আব্দুস সোবহান মিয়া',
      fatherName: 'মরহুম মোবারক আলী',
      union: '৫ নং বকশীগঞ্জ',
      ward: '৪ নং ওয়ার্ড',
      mobile: '01819-334455',
      nid: '19782691234567891',
      krishiCard: 'KC-2026-4412',
      landAmount: '১.২০ একর (১২০ শতক)',
      category: 'মাঝারি কৃষক',
      categoryType: 'medium',
      primaryCrop: 'বোরো ধান ও আলু',
      entitledQuota: 'ইউরিয়া ১৫০ কেজি • টিএসপি ৭৫ কেজি',
      assignedDealer: 'মেসার্স কৃষক বন্ধু ঘর'
    },
    {
      id: 'F-1003',
      name: 'মো. জয়নাল আবেদীন',
      fatherName: 'মরহুম সোনা মিয়া',
      union: '২ নং বগারচর',
      ward: '২ নং ওয়ার্ড',
      mobile: '01911-667788',
      nid: '19692691234567892',
      krishiCard: 'KC-2026-5589',
      landAmount: '৩.১০ একর (৩১০ শতক)',
      category: 'বড় কৃষক',
      categoryType: 'large',
      primaryCrop: 'গম ও আউশ ধান',
      entitledQuota: 'ইউরিয়া ৩০০ কেজি • টিএসপি ১৫০ কেজি',
      assignedDealer: 'মেসার্স নতুন ফসল ট্রেডার্স'
    },
    {
      id: 'F-1004',
      name: 'শফিকুল ইসলাম',
      fatherName: 'মজিবুর রহমান',
      union: '৬ নং ধানুয়া কামালপুর',
      ward: '৩ নং ওয়ার্ড',
      mobile: '01715-442211',
      nid: '19922691234567893',
      krishiCard: 'KC-2026-6670',
      landAmount: '০.৩০ একর (৩০ শতক)',
      category: 'ছোট কৃষক',
      categoryType: 'small',
      primaryCrop: 'সরিষা ও শাকসবজি',
      entitledQuota: 'ইউরিয়া ৫০ কেজি • ডিএপি ২৫ কেজি',
      assignedDealer: 'মেসার্স সবুজ কৃষি ভান্ডার'
    },
    {
      id: 'F-1005',
      name: 'মো. হাবিবুর রহমান',
      fatherName: 'মরহুম নূরুল হক',
      union: '৪ নং সাধুরপাড়া',
      ward: '৫ নং ওয়ার্ড',
      mobile: '01718-990022',
      nid: '19812691234567894',
      krishiCard: 'KC-2026-7781',
      landAmount: '০.৮০ একর (৮০ শতক)',
      category: 'মাঝারি কৃষক',
      categoryType: 'medium',
      primaryCrop: 'আমন ধান',
      entitledQuota: 'ইউরিয়া ১০০ কেজি • টিএসপি ৫০ কেজি',
      assignedDealer: 'মেসার্স সোনালী মাঠ স্টোর'
    },
    {
      id: 'F-1006',
      name: 'আমিনুল হক',
      fatherName: 'মরহুম জহুরুল হক',
      union: '৬ নং নিলাখিয়া',
      ward: '১ নং ওয়ার্ড',
      mobile: '01711-223388',
      nid: '19882691234567895',
      krishiCard: 'KC-2026-8890',
      landAmount: '২.৭৫ একর (২৭৫ শতক)',
      category: 'বড় কৃষক',
      categoryType: 'large',
      primaryCrop: 'ভুট্টা ও আলু',
      entitledQuota: 'ইউরিয়া ৩০০ কেজি • ডিএপি ১২০ কেজি',
      assignedDealer: 'মেসার্স কৃষক বন্ধু ঘর'
    }
  ])

  // New Farmer Registration Form State
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    union: '৩ নং বাট্টাজোড়',
    ward: '১ নং ওয়ার্ড',
    mobile: '',
    nid: '',
    krishiCard: '',
    landDecimals: '40',
    primaryCrop: 'আমন ধান',
    assignedDealer: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ'
  })

  const handleRegister = (e) => {
    e.preventDefault()
    const landVal = parseFloat(formData.landDecimals || 0)
    let cat = 'ছোট কৃষক'
    let catType = 'small'
    let quota = 'ইউরিয়া ৫০ কেজি • টিএসপি ২৫ কেজি'

    if (landVal >= 250) {
      cat = 'বড় কৃষক'
      catType = 'large'
      quota = 'ইউরিয়া ৩০০ কেজি • টিএসপি ১৫০ কেজি'
    } else if (landVal >= 50) {
      cat = 'মাঝারি কৃষক'
      catType = 'medium'
      quota = 'ইউরিয়া ১৫০ কেজি • টিএসপি ৭৫ কেজি'
    }

    const newFarmer = {
      id: `F-${1000 + farmers.length + 1}`,
      name: formData.name,
      fatherName: formData.fatherName,
      union: formData.union,
      ward: formData.ward,
      mobile: formData.mobile,
      nid: formData.nid,
      krishiCard: formData.krishiCard || `KC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      landAmount: `${(landVal / 100).toFixed(2)} একর (${landVal} শতক)`,
      category: cat,
      categoryType: catType,
      primaryCrop: formData.primaryCrop,
      entitledQuota: quota,
      assignedDealer: formData.assignedDealer
    }

    setFarmers([newFarmer, ...farmers])
    setIsRegisterModalOpen(false)
    setToastMessage(`নতুন কৃষক (${newFarmer.name}) সফলভাবে নিবন্ধিত হয়েছে! কৃষি কার্ড নম্বর বরাদ্দ সম্পন্ন।`)
    setTimeout(() => setToastMessage(''), 4500)
  }

  const filteredFarmers = farmers.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          f.nid.includes(searchTerm) ||
                          f.krishiCard.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          f.union.toLowerCase().includes(searchTerm.toLowerCase())
    if (categoryFilter === 'all') return matchesSearch
    return matchesSearch && f.categoryType === categoryFilter
  })

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              কৃষক নিবন্ধন ও ডেটাবেজ
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
              জাতীয় কৃষি কার্ড ও NID যাচাইকৃত
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            উপজেলা কৃষি সম্প্রসারণ অধিদপ্তরের অধীন সকল প্রান্তিক, ক্ষুদ্র ও বড় কৃষকের জমি, ফসল ও সার বরাদ্দ খতিয়ান
          </p>
        </div>

        <button
          onClick={() => setIsRegisterModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer transition-all self-start md:self-auto"
        >
          <UserPlus className="w-3.5 h-3.5" />
          <span>নতুন কৃষক নিবন্ধন</span>
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

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">মোট নিবন্ধিত কৃষক</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono">{farmers.length} <span className="text-xs font-normal text-slate-500">জন</span></div>
          <span className="text-[10px] text-emerald-700 font-medium">১০০% ডিজিটাল এনআইডি ভেরিফাইড</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">ছোট কৃষক (০.০১ - ০.৪৯ একর)</span>
          <div className="text-xl font-bold text-emerald-700 mt-1 font-mono">
            {farmers.filter(f => f.categoryType === 'small').length} <span className="text-xs font-normal text-slate-500">জন</span>
          </div>
          <span className="text-[10px] text-slate-400">সর্বোচ্চ অগ্রাধিকার প্রাপ্ত</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">মাঝারি কৃষক (০.৫০ - ২.৪৯ একর)</span>
          <div className="text-xl font-bold text-amber-700 mt-1 font-mono">
            {farmers.filter(f => f.categoryType === 'medium').length} <span className="text-xs font-normal text-slate-500">জন</span>
          </div>
          <span className="text-[10px] text-slate-400">নির্ধারিত কোটা প্রাপ্ত</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">বড় কৃষক (২.৫০+ একর)</span>
          <div className="text-xl font-bold text-rose-700 mt-1 font-mono">
            {farmers.filter(f => f.categoryType === 'large').length} <span className="text-xs font-normal text-slate-500">জন</span>
          </div>
          <span className="text-[10px] text-slate-400">বিশেষ স্ক্রুটিনি সাপেক্ষে</span>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-xl p-4 border border-slate-200/70 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-slate-100">
          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                categoryFilter === 'all' ? 'bg-[#14532d] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              সকল কৃষক ({farmers.length})
            </button>
            <button
              onClick={() => setCategoryFilter('small')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                categoryFilter === 'small' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              ছোট কৃষক
            </button>
            <button
              onClick={() => setCategoryFilter('medium')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                categoryFilter === 'medium' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              মাঝারি কৃষক
            </button>
            <button
              onClick={() => setCategoryFilter('large')}
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                categoryFilter === 'large' ? 'bg-rose-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              বড় কৃষক
            </button>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="নাম, NID বা কৃষি কার্ড নং খুঁজুন..."
              className="pl-8 pr-3 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1.5 focus:ring-emerald-600 w-52 sm:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-[#f2f7f3] text-emerald-950 font-bold text-[11px]">
              <tr>
                <th className="py-2.5 px-3">কৃষক আইডি</th>
                <th className="py-2.5 px-3">নাম ও পিতার নাম</th>
                <th className="py-2.5 px-3">ইউনিয়ন ও ওয়ার্ড</th>
                <th className="py-2.5 px-3">মোবাইল নম্বর</th>
                <th className="py-2.5 px-3">এনআইডি (NID)</th>
                <th className="py-2.5 px-3">কৃষি কার্ড নম্বর</th>
                <th className="py-2.5 px-3">জমির পরিমাণ</th>
                <th className="py-2.5 px-3 text-center">কৃষক শ্রেণী</th>
                <th className="py-2.5 px-3 text-right">প্রোফাইল</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredFarmers.map((f) => (
                <tr key={f.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2.5 px-3 font-mono font-medium text-slate-900">{f.id}</td>
                  <td className="py-2.5 px-3 font-medium text-slate-900">
                    <div>{f.name}</div>
                    <div className="text-[10px] text-slate-400">{f.fatherName}</div>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600">
                    <div>{f.union}</div>
                    <div className="text-[10px] text-slate-400">{f.ward}</div>
                  </td>
                  <td className="py-2.5 px-3 font-mono text-slate-600">{f.mobile}</td>
                  <td className="py-2.5 px-3 font-mono text-slate-500">{f.nid}</td>
                  <td className="py-2.5 px-3 font-mono font-semibold text-emerald-800">{f.krishiCard}</td>
                  <td className="py-2.5 px-3 text-slate-800 font-medium">{f.landAmount}</td>
                  <td className="py-2.5 px-3 text-center">
                    {f.categoryType === 'small' && (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                        ছোট কৃষক
                      </span>
                    )}
                    {f.categoryType === 'medium' && (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-bold">
                        মাঝারি কৃষক
                      </span>
                    )}
                    {f.categoryType === 'large' && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded-full text-[10px] font-bold">
                        বড় কৃষক
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <button
                      onClick={() => setSelectedFarmer(f)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-600/70 rounded-lg text-[11px] font-semibold transition-all cursor-pointer inline-flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>বিস্তারিত</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Farmer Profile Modal */}
      {selectedFarmer && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">
                  বাংলাদেশ কৃষি কার্ড প্রোফাইল
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{selectedFarmer.name}</h3>
                <p className="text-xs text-slate-500 font-mono">{selectedFarmer.krishiCard}</p>
              </div>
              <button onClick={() => setSelectedFarmer(null)} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer">✕</button>
            </div>

            <div className="space-y-2 text-xs divide-y divide-slate-100">
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">পিতার নাম:</span>
                <span className="font-semibold text-slate-800">{selectedFarmer.fatherName}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">জাতীয় পরিচয়পত্র (NID):</span>
                <span className="font-mono font-semibold text-slate-900">{selectedFarmer.nid}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">মোবাইল নম্বর:</span>
                <span className="font-mono font-semibold text-slate-800">{selectedFarmer.mobile}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">ঠিকানা:</span>
                <span className="font-semibold text-slate-800">{selectedFarmer.ward}, {selectedFarmer.union}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">জমির মোট পরিমাণ:</span>
                <span className="font-bold text-slate-900">{selectedFarmer.landAmount}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">প্রধান আবাদি ফসল:</span>
                <span className="font-semibold text-emerald-800">{selectedFarmer.primaryCrop}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">বরাদ্দকৃত সার কোটা:</span>
                <span className="font-bold text-emerald-900">{selectedFarmer.entitledQuota}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">নির্ধারিত ডিলার:</span>
                <span className="font-semibold text-slate-800">{selectedFarmer.assignedDealer}</span>
              </div>
            </div>

            <button
              onClick={() => alert(`কৃষি কার্ড প্রিন্ট হচ্ছে: ${selectedFarmer.name} (${selectedFarmer.krishiCard})`)}
              className="w-full py-2 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
            >
              স্মার্ট কৃষি কার্ড প্রিন্ট করুন
            </button>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">নতুন কৃষক নিবন্ধন ফর্ম</h3>
              <button onClick={() => setIsRegisterModalOpen(false)} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleRegister} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">কৃষকের পূর্ণ নাম</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="যেমন: মো. কামরুল ইসলাম"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">পিতার নাম</label>
                  <input
                    type="text"
                    required
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    placeholder="যেমন: মরহুম আব্দুল আলী"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">এনআইডি নম্বর (NID)</label>
                  <input
                    type="text"
                    required
                    value={formData.nid}
                    onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
                    placeholder="১০ বা ১৭ ডিজিটের এনআইডি"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">মোবাইল নম্বর</label>
                  <input
                    type="text"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="017XXXXXXXX"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">ইউনিয়ন</label>
                  <select
                    value={formData.union}
                    onChange={(e) => setFormData({ ...formData, union: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  >
                    <option value="৩ নং বাট্টাজোড়">৩ নং বাট্টাজোড়</option>
                    <option value="৫ নং বকশীগঞ্জ">৫ নং বকশীগঞ্জ</option>
                    <option value="২ নং বগারচর">২ নং বগারচর</option>
                    <option value="৬ নং ধানুয়া কামালপুর">৬ নং ধানুয়া কামালপুর</option>
                    <option value="৪ নং সাধুরপাড়া">৪ নং সাধুরপাড়া</option>
                    <option value="৬ নং নিলাখিয়া">৬ নং নিলাখিয়া</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">ওয়ার্ড নম্বর</label>
                  <input
                    type="text"
                    value={formData.ward}
                    onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                    placeholder="যেমন: ৩ নং ওয়ার্ড"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">জমির পরিমাণ (শতক হিসেবে)</label>
                  <input
                    type="number"
                    required
                    value={formData.landDecimals}
                    onChange={(e) => setFormData({ ...formData, landDecimals: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">প্রধান আবাদি ফসল</label>
                  <input
                    type="text"
                    value={formData.primaryCrop}
                    onChange={(e) => setFormData({ ...formData, primaryCrop: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  কৃষক নিবন্ধন সম্পন্ন করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

