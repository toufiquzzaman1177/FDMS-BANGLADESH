import { useState } from 'react'
import {
  FileText,
  CheckCircle2,
  Clock,
  XCircle,
  Plus,
  Search,
  Filter,
  Download,
  Printer,
  ChevronRight,
  ShieldCheck,
  Building,
  Calendar,
  AlertCircle
} from 'lucide-react'

export default function QuotaDOModule() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDO, setSelectedDO] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [actionSuccess, setActionSuccess] = useState('')

  // Mock initial Delivery Orders
  const [deliveryOrders, setDeliveryOrders] = useState([
    {
      id: 'DO-2026-NOV-01',
      dealerName: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
      union: '৩ নং বাট্টাজোড়',
      allocationMonth: 'নভেম্বর ২০২৬',
      urea: 15.0,
      tsp: 5.5,
      dap: 4.0,
      mop: 3.5,
      totalTons: 28.0,
      issueDate: '০২/১১/২০২৬',
      status: 'approved',
      challanRef: 'TR-SB-99120',
      warehouse: 'বকশীগঞ্জ বাফার গুদাম',
      approvedBy: 'উপজেলা কৃষি অফিসার (UAO)'
    },
    {
      id: 'DO-2026-NOV-02',
      dealerName: 'মেসার্স কৃষক বন্ধু ঘর',
      union: '৫ নং বকশীগঞ্জ',
      allocationMonth: 'নভেম্বর ২০২৬',
      urea: 14.5,
      tsp: 5.0,
      dap: 4.0,
      mop: 3.0,
      totalTons: 26.5,
      issueDate: '০৩/১১/২০২৬',
      status: 'approved',
      challanRef: 'TR-SB-99134',
      warehouse: 'বকশীগঞ্জ বাফার গুদাম',
      approvedBy: 'উপজেলা কৃষি অফিসার (UAO)'
    },
    {
      id: 'DO-2026-NOV-03',
      dealerName: 'মেসার্স নতুন ফসল ট্রেডার্স',
      union: '২ নং বগারচর',
      allocationMonth: 'নভেম্বর ২০২৬',
      urea: 14.0,
      tsp: 5.0,
      dap: 3.5,
      mop: 3.0,
      totalTons: 25.5,
      issueDate: '০৫/১১/২০২৬',
      status: 'pending',
      challanRef: 'TR-SB-99188',
      warehouse: 'বকশীগঞ্জ বাফার গুদাম',
      approvedBy: 'অপেক্ষমাণ'
    },
    {
      id: 'DO-2026-NOV-04',
      dealerName: 'মেসার্স সবুজ কৃষি ভান্ডার',
      union: '৬ নং ধানুয়া কামালপুর',
      allocationMonth: 'নভেম্বর ২০২৬',
      urea: 12.0,
      tsp: 4.5,
      dap: 3.0,
      mop: 2.5,
      totalTons: 22.0,
      issueDate: '০৬/১১/২০২৬',
      status: 'pending',
      challanRef: 'TR-SB-99201',
      warehouse: 'বকশীগঞ্জ বাফার গুদাম',
      approvedBy: 'অপেক্ষমাণ'
    },
    {
      id: 'DO-2026-NOV-05',
      dealerName: 'মেসার্স সোনালী মাঠ স্টোর',
      union: '৪ নং সাধুরপাড়া',
      allocationMonth: 'নভেম্বর ২০২৬',
      urea: 11.5,
      tsp: 4.0,
      dap: 3.0,
      mop: 2.5,
      totalTons: 21.0,
      issueDate: '০৮/১১/২০২৬',
      status: 'approved',
      challanRef: 'TR-SB-99245',
      warehouse: 'বকশীগঞ্জ বাফার গুদাম',
      approvedBy: 'উপজেলা কৃষি অফিসার (UAO)'
    },
    {
      id: 'DO-2026-NOV-06',
      dealerName: 'মেসার্স শ্যামল বাংলা সার বিতান',
      union: '৬ নং নিলাখিয়া',
      allocationMonth: 'নভেম্বর ২০২৬',
      urea: 0.0,
      tsp: 0.0,
      dap: 0.0,
      mop: 0.0,
      totalTons: 0.0,
      issueDate: '০৯/১১/২০২৬',
      status: 'rejected',
      challanRef: 'অনিষ্পন্ন',
      warehouse: 'স্থগিত',
      approvedBy: 'লাইসেন্স সাময়িক স্থগিত'
    }
  ])

  // New DO Form State
  const [formData, setFormData] = useState({
    dealerName: 'মেসার্স নতুন ফসল ট্রেডার্স',
    union: '২ নং বগারচর',
    allocationMonth: 'নভেম্বর ২০২৬',
    urea: '10',
    tsp: '3',
    dap: '2',
    mop: '2',
    challanRef: 'TR-SB-99300',
    warehouse: 'বকশীগঞ্জ বাফার গুদাম'
  })

  const handleApprove = (id) => {
    setDeliveryOrders(prev => prev.map(item => item.id === id ? { ...item, status: 'approved', approvedBy: 'উপজেলা কৃষি অফিসার (অনুমোদিত)' } : item))
    setActionSuccess(`${id} সফলভাবে অনুমোদন করা হয়েছে! বাফার গুদামে বার্তা পাঠানো হয়েছে।`)
    setTimeout(() => setActionSuccess(''), 4000)
    if (selectedDO?.id === id) setSelectedDO(prev => ({ ...prev, status: 'approved', approvedBy: 'উপজেলা কৃষি অফিসার (অনুমোদিত)' }))
  }

  const handleReject = (id) => {
    setDeliveryOrders(prev => prev.map(item => item.id === id ? { ...item, status: 'rejected', approvedBy: 'বাতিলকৃত' } : item))
    setActionSuccess(`${id} বাতিল করা হয়েছে। ডিলারকে সংশোধনের নোটিশ দেওয়া হয়েছে।`)
    setTimeout(() => setActionSuccess(''), 4000)
    if (selectedDO?.id === id) setSelectedDO(prev => ({ ...prev, status: 'rejected', approvedBy: 'বাতিলকৃত' }))
  }

  const handleCreateDO = (e) => {
    e.preventDefault()
    const total = parseFloat(formData.urea || 0) + parseFloat(formData.tsp || 0) + parseFloat(formData.dap || 0) + parseFloat(formData.mop || 0)
    const newEntry = {
      id: `DO-2026-NOV-0${deliveryOrders.length + 1}`,
      dealerName: formData.dealerName,
      union: formData.union,
      allocationMonth: formData.allocationMonth,
      urea: parseFloat(formData.urea || 0),
      tsp: parseFloat(formData.tsp || 0),
      dap: parseFloat(formData.dap || 0),
      mop: parseFloat(formData.mop || 0),
      totalTons: total,
      issueDate: '১৩/১১/২০২৬',
      status: 'pending',
      challanRef: formData.challanRef,
      warehouse: formData.warehouse,
      approvedBy: 'অপেক্ষমাণ'
    }
    setDeliveryOrders([newEntry, ...deliveryOrders])
    setIsModalOpen(false)
    setActionSuccess(`নতুন ডেলিভারি অর্ডার (${newEntry.id}) সফলভাবে নথিভুক্ত করা হয়েছে!`)
    setTimeout(() => setActionSuccess(''), 4000)
  }

  const filteredOrders = deliveryOrders.filter(order => {
    const matchesSearch = order.dealerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.union.toLowerCase().includes(searchTerm.toLowerCase())
    if (activeTab === 'all') return matchesSearch
    return matchesSearch && order.status === activeTab
  })

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Top Header Card */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              কোটা ও ডিও (DO) বরাদ্দ ব্যবস্থাপনা
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
              মাসিক কোটা বণ্টন ও ডেলিভারি অর্ডার
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            উপজেলা সার ও বীজ মনিটরিং কমিটি কর্তৃক অনুমোদিত মাসিক সার উত্তোলন ও বাফার গুদাম সরবরাহ আদেশ
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>নতুন ডিও (DO) ইস্যু</span>
          </button>
        </div>
      </div>

      {/* Alert toast */}
      {actionSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{actionSuccess}</span>
          </div>
          <button onClick={() => setActionSuccess('')} className="text-emerald-700 hover:text-emerald-900 font-bold">✕</button>
        </div>
      )}

      {/* Top 4 KPI metric cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">মাসিক মোট কোটা</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono">১২৩.০ <span className="text-xs font-normal text-slate-500">মে.টন</span></div>
          <span className="text-[10px] text-emerald-700 font-medium">নভেম্বর ২০২৬ বরাদ্দ</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">অনুমোদিত ডিও</span>
          <div className="text-xl font-bold text-emerald-700 mt-1 font-mono">
            {deliveryOrders.filter(d => d.status === 'approved').length} <span className="text-xs font-normal text-slate-500">টি</span>
          </div>
          <span className="text-[10px] text-slate-400">উত্তোলনের জন্য প্রস্তুত</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">অপেক্ষমাণ অনুমোদন</span>
          <div className="text-xl font-bold text-amber-600 mt-1 font-mono">
            {deliveryOrders.filter(d => d.status === 'pending').length} <span className="text-xs font-normal text-slate-500">টি</span>
          </div>
          <span className="text-[10px] text-amber-700 font-medium">UAO নিরীক্ষা আবশ্যক</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200/70 shadow-xs">
          <span className="text-[11px] text-slate-500 font-medium">উত্তোলিত সার</span>
          <div className="text-xl font-bold text-slate-900 mt-1 font-mono">৭৫.৫ <span className="text-xs font-normal text-slate-500">মে.টন</span></div>
          <span className="text-[10px] text-slate-400">বাফার গুদাম থেকে ছাড়কৃত</span>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-xl p-4 border border-slate-200/70 shadow-xs space-y-3">
        {/* Filters and search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-slate-100">
          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'all' ? 'bg-[#14532d] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              সকল ডিও ({deliveryOrders.length})
            </button>
            <button
              onClick={() => setActiveTab('approved')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'approved' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              অনুমোদিত ({deliveryOrders.filter(d => d.status === 'approved').length})
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'pending' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              অপেক্ষমাণ ({deliveryOrders.filter(d => d.status === 'pending').length})
            </button>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ডিও নম্বর বা ডিলারের নাম খুঁজুন..."
              className="pl-8 pr-3 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1.5 focus:ring-emerald-600 w-52 sm:w-64"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-[#f2f7f3] text-emerald-950 font-bold text-[11px]">
              <tr>
                <th className="py-2.5 px-3">ডিও নম্বর</th>
                <th className="py-2.5 px-3">ডিলারের নাম</th>
                <th className="py-2.5 px-3">ইউনিয়ন</th>
                <th className="py-2.5 px-3">ইউরিয়া (টন)</th>
                <th className="py-2.5 px-3">টিএসপি (টন)</th>
                <th className="py-2.5 px-3">ডিএপি (টন)</th>
                <th className="py-2.5 px-3">এমওপি (টন)</th>
                <th className="py-2.5 px-3 font-semibold text-slate-900">মোট (টন)</th>
                <th className="py-2.5 px-3 text-center">স্ট্যাটাস</th>
                <th className="py-2.5 px-3 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2.5 px-3 font-mono font-medium text-slate-900">{order.id}</td>
                  <td className="py-2.5 px-3 font-medium text-slate-900">{order.dealerName}</td>
                  <td className="py-2.5 px-3 text-slate-600">{order.union}</td>
                  <td className="py-2.5 px-3 font-mono">{order.urea.toFixed(1)}</td>
                  <td className="py-2.5 px-3 font-mono">{order.tsp.toFixed(1)}</td>
                  <td className="py-2.5 px-3 font-mono">{order.dap.toFixed(1)}</td>
                  <td className="py-2.5 px-3 font-mono">{order.mop.toFixed(1)}</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-900">{order.totalTons.toFixed(1)}</td>
                  <td className="py-2.5 px-3 text-center">
                    {order.status === 'approved' && (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                        অনুমোদিত
                      </span>
                    )}
                    {order.status === 'pending' && (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-bold">
                        অপেক্ষমাণ
                      </span>
                    )}
                    {order.status === 'rejected' && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded-full text-[10px] font-bold">
                        বাতিল
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <button
                      onClick={() => setSelectedDO(order)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-600/70 rounded-lg text-[11px] font-semibold transition-all cursor-pointer"
                    >
                      বিস্তারিত
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DO Details Modal */}
      {selectedDO && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">
                  বাংলাদেশ কৃষি মন্ত্রণালয় — DAE
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{selectedDO.id}</h3>
                <p className="text-xs text-slate-500">{selectedDO.dealerName} • {selectedDO.union}</p>
              </div>
              <button
                onClick={() => setSelectedDO(null)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs divide-y divide-slate-100">
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">বরাদ্দ মাস:</span>
                <span className="font-semibold text-slate-800">{selectedDO.allocationMonth}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">সোনালী ব্যাংক চালান নম্বর:</span>
                <span className="font-mono font-semibold text-emerald-800">{selectedDO.challanRef}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">বরাদ্দকৃত বাফার গুদাম:</span>
                <span className="font-semibold text-slate-800">{selectedDO.warehouse}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">অনুমোদনকারী কর্তৃপক্ষ:</span>
                <span className="font-semibold text-slate-800">{selectedDO.approvedBy}</span>
              </div>
              <div className="pt-2">
                <p className="font-bold text-slate-800 mb-1.5">সারের বিবরণ (মেট্রিক টন):</p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <span className="text-[10px] text-slate-500 block">ইউরিয়া</span>
                    <span className="font-bold text-slate-900 font-mono">{selectedDO.urea} টন</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <span className="text-[10px] text-slate-500 block">টিএসপি</span>
                    <span className="font-bold text-slate-900 font-mono">{selectedDO.tsp} টন</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <span className="text-[10px] text-slate-500 block">ডিএপি</span>
                    <span className="font-bold text-slate-900 font-mono">{selectedDO.dap} টন</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <span className="text-[10px] text-slate-500 block">এমওপি</span>
                    <span className="font-bold text-slate-900 font-mono">{selectedDO.mop} টন</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-2">
              {selectedDO.status === 'pending' && (
                <>
                  <button
                    onClick={() => handleApprove(selectedDO.id)}
                    className="flex-1 py-2 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                  >
                    অনুমোদন দিন
                  </button>
                  <button
                    onClick={() => handleReject(selectedDO.id)}
                    className="flex-1 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                  >
                    বাতিল করুন
                  </button>
                </>
              )}
              {selectedDO.status === 'approved' && (
                <button
                  onClick={() => alert(`ডিও প্রিন্ট প্রিভিউ: ${selectedDO.id} মুদ্রণের জন্য প্রস্তুত!`)}
                  className="w-full py-2 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center justify-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>ডিও প্রিন্ট / ডাউনলোড (PDF)</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* New DO Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">নতুন ডেলিভারি অর্ডার (DO) তৈরি</h3>
              <button onClick={() => setIsModalOpen(false)} className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleCreateDO} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 mb-1">ডিলার নির্বাচন</label>
                <select
                  value={formData.dealerName}
                  onChange={(e) => setFormData({ ...formData, dealerName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600 focus:outline-none"
                >
                  <option value="মেসার্স মাটির মানুষ এন্টারপ্রাইজ">মেসার্স মাটির মানুষ এন্টারপ্রাইজ (৩ নং বাট্টাজোড়)</option>
                  <option value="মেসার্স কৃষক বন্ধু ঘর">মেসার্স কৃষক বন্ধু ঘর (৫ নং বকশীগঞ্জ)</option>
                  <option value="মেসার্স নতুন ফসল ট্রেডার্স">মেসার্স নতুন ফসল ট্রেডার্স (২ নং বগারচর)</option>
                  <option value="মেসার্স সবুজ কৃষি ভান্ডার">মেসার্স সবুজ কৃষি ভান্ডার (৬ নং ধানুয়া কামালপুর)</option>
                  <option value="মেসার্স সোনালী মাঠ স্টোর">মেসার্স সোনালী মাঠ স্টোর (৪ নং সাধুরপাড়া)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">বরাদ্দ মাস</label>
                  <input
                    type="text"
                    value={formData.allocationMonth}
                    onChange={(e) => setFormData({ ...formData, allocationMonth: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">ব্যাংক চালান নম্বর</label>
                  <input
                    type="text"
                    value={formData.challanRef}
                    onChange={(e) => setFormData({ ...formData, challanRef: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-1.5 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>
              </div>

              <p className="font-semibold text-slate-800 pt-1">সারের পরিমাণ নির্ধারণ (মেট্রিক টন):</p>
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">ইউরিয়া</label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.urea}
                    onChange={(e) => setFormData({ ...formData, urea: e.target.value })}
                    className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-center font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">টিএসপি</label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.tsp}
                    onChange={(e) => setFormData({ ...formData, tsp: e.target.value })}
                    className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-center font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">ডিএপি</label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.dap}
                    onChange={(e) => setFormData({ ...formData, dap: e.target.value })}
                    className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-center font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">এমওপি</label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.mop}
                    onChange={(e) => setFormData({ ...formData, mop: e.target.value })}
                    className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-center font-mono focus:ring-1.5 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  ডিও অনুমোদন প্রক্রিয়া শুরু করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
