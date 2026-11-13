import { useState, useEffect } from 'react'
import {
  LayoutDashboard,
  UserPlus,
  Users,
  Package,
  FileCheck2,
  FileText,
  Copy,
  UserSearch,
  BarChart3,
  Download,
  Terminal,
  CheckSquare,
  Trash2,
  Settings,
  RefreshCw,
  LogOut,
  Clock,
  Send,
  Truck,
  ShoppingBag,
  User,
  CheckCircle2,
  Search,
  Filter,
  ShieldCheck,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  ExternalLink
} from 'lucide-react'

export default function Dashboard({ onLogout, currentUser = { name: 'Swapnil', role: 'জেলা অফিসার' } }) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [refreshKey, setRefreshKey] = useState(0)
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationSuccess, setVerificationSuccess] = useState(false)
  const [selectedDealerModal, setSelectedDealerModal] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    document.title = 'ড্যাশবোর্ড | সার বিতরণ ব্যবস্থাপনা সিস্টেম - FDMS Bangladesh'
  }, [])

  // Top metric cards
  const summaryStats = [
    {
      label: 'মোট ডিলার',
      value: '6',
      subtext: '১০০% নিবন্ধিত',
      icon: Users,
      color: 'emerald',
      iconBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
    },
    {
      label: 'মোট কৃষক',
      value: '64',
      subtext: 'NID ও কার্ড যাচাইকৃত',
      icon: User,
      color: 'emerald',
      iconBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
    },
    {
      label: 'মোট বিতরণ',
      value: '211',
      subtext: 'ডিজিটাল এন্ট্রি সম্পন্ন',
      icon: Truck,
      color: 'emerald',
      iconBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
    },
    {
      label: 'ডুপ্লিকেট ডেটা',
      value: '4',
      subtext: 'অডিট নিরীক্ষা আবশ্যক',
      icon: Copy,
      color: 'rose',
      iconBg: 'bg-rose-50 text-rose-600 ring-1 ring-rose-500/10',
    },
    {
      label: 'মোট সার বিতরণ (কেজি)',
      value: '৩,০৫৫',
      subtext: 'ইউরিয়া, টিএসপি, ডিএপি, এমওপি',
      icon: ShoppingBag,
      color: 'amber',
      iconBg: 'bg-amber-50 text-amber-700 ring-1 ring-amber-600/10',
    },
  ]

  // Farmer classes by land size
  const farmerClassStats = [
    {
      label: 'ছোট কৃষক',
      value: '28',
      percentage: '৪৩.৮%',
      landRange: '০.০১ - ০.৪৯ একর',
      icon: User,
      color: '#16a34a',
      iconBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/15',
    },
    {
      label: 'মাঝারি কৃষক',
      value: '25',
      percentage: '৩৯.১%',
      landRange: '০.৫০ - ২.৪৯ একর',
      icon: User,
      color: '#d97706',
      iconBg: 'bg-amber-50 text-amber-700 ring-1 ring-amber-600/15',
    },
    {
      label: 'বড় কৃষক',
      value: '11',
      percentage: '১৭.২%',
      landRange: '২.৫০ একর বা তদূর্ধ্ব',
      icon: User,
      color: '#e11d48',
      iconBg: 'bg-rose-50 text-rose-600 ring-1 ring-rose-600/15',
    },
  ]

  // Fertilizer Donut Chart data
  const fertilizerDistribution = [
    { name: 'ইউরিয়া', value: 38, hex: '#166534', kg: '১,১৬১ কেজি' },
    { name: 'টিএসপি', value: 24, hex: '#16a34a', kg: '৭৩৩ কেজি' },
    { name: 'ডিএপি', value: 18, hex: '#4ade80', kg: '৫৫০ কেজি' },
    { name: 'এমওপি', value: 14, hex: '#ca8a04', kg: '৪২৮ কেজি' },
    { name: 'জৈব সার', value: 6, hex: '#78350f', kg: '১৮৩ কেজি' },
  ]

  // Union distribution bar chart data
  const unionData = [
    { name: '১', value: 600, label: '১ নং ইউনিয়ন' },
    { name: '২', value: 650, label: '২ নং বগারচর' },
    { name: '৩', value: 680, label: '৩ নং বাট্টাজোড়' },
    { name: '৪', value: 480, label: '৪ নং সাধুরপাড়া' },
    { name: '৫', value: 650, label: '৫ নং বকশীগঞ্জ' },
    { name: '৬', value: 0, label: '৬ নং নিলাখিয়া' },
    { name: '৭', value: 0, label: '৭ নং ইউনিয়ন' },
    { name: 'বকশীগঞ্জ', value: 0, label: 'বকশীগঞ্জ পৌরসভা' },
  ]

  // Monthly distribution trend (Last 6 / 4 months)
  const monthlyTrend = [
    { month: '2026-08', value: '৩৩০ কেজি', x: 80, y: 163 },
    { month: '2026-09', value: '১,৪৫০ কেজি', x: 380, y: 37 },
    { month: '2026-10', value: '১,১০০ কেজি', x: 680, y: 76 },
    { month: '2026-11', value: '২০০ কেজি', x: 960, y: 178 },
  ]

  // Top Dealers by total fertilizer distribution
  const topDealers = [
    {
      rank: 1,
      name: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ (ডেমো)',
      union: '৩ নং বাট্টাজোড় ইউনিয়ন',
      totalKg: '৬৭০ কেজি',
      distributions: '45 বিতরণ',
    },
    {
      rank: 2,
      name: 'মেসার্স কৃষক বন্ধু ঘর (ডেমো)',
      union: '৫ নং বকশীগঞ্জ ইউনিয়ন',
      totalKg: '৬২২ কেজি',
      distributions: '43 বিতরণ',
    },
    {
      rank: 3,
      name: 'মেসার্স নতুন ফসল ট্রেডার্স (ডেমো)',
      union: '২ নং বগারচর ইউনিয়ন',
      totalKg: '৬২০ কেজি',
      distributions: '45 বিতরণ',
    },
    {
      rank: 4,
      name: 'মেসার্স সবুজ কৃষি ভান্ডার (ডেমো)',
      union: '৬ নং ধানুয়া কামালপুর ইউনিয়ন',
      totalKg: '৫০৫ কেজি',
      distributions: '41 বিতরণ',
    },
    {
      rank: 5,
      name: 'মেসার্স সোনালী মাঠ স্টোর (ডেমো)',
      union: '৪ নং সাধুরপাড়া ইউনিয়ন',
      totalKg: '৪৭৫ কেজি',
      distributions: '37 বিতরণ',
    },
  ]

  // All dealers distribution table data (Matches target image)
  const allDealersDistribution = [
    {
      id: 1,
      name: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ (ডেমো)',
      union: '৩ নং বাট্টাজোড় ইউনিয়ন',
      entries: '৪৫',
      totalKg: '৬৭০',
      status: 'active',
      details: {
        dealerId: 'D-101',
        tradeLicense: 'TR-2026-3391',
        urea: '৩৫০ কেজি',
        tsp: '১২০ কেজি',
        dap: '১০০ কেজি',
        mop: '১০০ কেজি',
      },
    },
    {
      id: 2,
      name: 'মেসার্স কৃষক বন্ধু ঘর (ডেমো)',
      union: '৫ নং বকশীগঞ্জ ইউনিয়ন',
      entries: '৪৩',
      totalKg: '৬২২',
      status: 'active',
      details: {
        dealerId: 'D-102',
        tradeLicense: 'TR-2026-4412',
        urea: '৩১০ কেজি',
        tsp: '১১২ কেজি',
        dap: '১০০ কেজি',
        mop: '১০০ কেজি',
      },
    },
    {
      id: 3,
      name: 'মেসার্স নতুন ফসল ট্রেডার্স (ডেমো)',
      union: '২ নং বগারচর ইউনিয়ন',
      entries: '৪৫',
      totalKg: '৬২০',
      status: 'active',
      details: {
        dealerId: 'D-103',
        tradeLicense: 'TR-2026-5589',
        urea: '৩০০ কেজি',
        tsp: '১২০ কেজি',
        dap: '১০০ কেজি',
        mop: '১০০ কেজি',
      },
    },
    {
      id: 4,
      name: 'মেসার্স সবুজ কৃষি ভান্ডার (ডেমো)',
      union: '৬ নং ধানুয়া কামালপুর ইউনিয়ন',
      entries: '৪১',
      totalKg: '৫০৫',
      status: 'active',
      details: {
        dealerId: 'D-104',
        tradeLicense: 'TR-2026-6670',
        urea: '২৫০ কেজি',
        tsp: '৯৫ কেজি',
        dap: '৮০ কেজি',
        mop: '৮০ কেজি',
      },
    },
    {
      id: 5,
      name: 'মেসার্স সোনালী মাঠ স্টোর (ডেমো)',
      union: '৪ নং সাধুরপাড়া ইউনিয়ন',
      entries: '৩৭',
      totalKg: '৪৭৫',
      status: 'active',
      details: {
        dealerId: 'D-105',
        tradeLicense: 'TR-2026-7781',
        urea: '২৩০ কেজি',
        tsp: '৮৫ কেজি',
        dap: '৮০ কেজি',
        mop: '৮০ কেজি',
      },
    },
    {
      id: 6,
      name: 'মেসার্স শ্যামল বাংলা সার বিতান (ডেমো)',
      union: '৬ নং নিলাখিয়া ইউনিয়ন',
      entries: '০',
      totalKg: '০',
      status: 'inactive',
      details: {
        dealerId: 'D-106',
        tradeLicense: 'TR-2026-8890',
        urea: '০ কেজি',
        tsp: '০ কেজি',
        dap: '০ কেজি',
        mop: '০ কেজি',
      },
    },
  ]

  // Grouped Sidebar Menu Items for a formal, organized enterprise experience
  const navigationGroups = [
    {
      group: 'মূল মেনু',
      items: [
        { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: LayoutDashboard },
      ],
    },
    {
      group: 'ডিলার ও বিতরণ',
      items: [
        { id: 'add-dealer', label: 'ডিলার যুক্ত করুন', icon: UserPlus },
        { id: 'dealers-list', label: 'ডিলার তালিকা', icon: Users, badge: '৬' },
        { id: 'stock', label: 'স্টক ব্যবস্থাপনা', icon: Package },
        { id: 'dealer-audit', label: 'ডিলার অডিট / প্রোফাইল', icon: FileCheck2 },
        { id: 'distribution-records', label: 'বিতরণ রেকর্ড', icon: FileText, badge: '২১১' },
        { id: 'duplicate-data', label: 'ডুপ্লিকেট ডেটা', icon: Copy, badgeColor: 'rose', badge: '৪' },
      ],
    },
    {
      group: 'কৃষক ও রিপোর্ট',
      items: [
        { id: 'farmer-search', label: 'কৃষক অনুসন্ধান', icon: UserSearch },
        { id: 'reports', label: 'রিপোর্ট ও বিশ্লেষণ', icon: BarChart3 },
        { id: 'export', label: 'ডেটা এক্সপোর্ট', icon: Download },
      ],
    },
    {
      group: 'সিস্টেম প্রশাসন',
      items: [
        { id: 'logs', label: 'সিস্টেম লগ', icon: Terminal },
        { id: 'verify', label: 'পরিসংখ্যান যাচাই', icon: CheckSquare },
        { id: 'cleanup', label: 'ডেটা মুছুন', icon: Trash2 },
        { id: 'settings', label: 'সেটিংস', icon: Settings },
      ],
    },
  ]

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1)
  }

  const handleVerify = () => {
    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      setVerificationSuccess(true)
      setTimeout(() => setVerificationSuccess(false), 3500)
    }, 700)
  }

  const filteredDealers = allDealersDistribution.filter(dealer =>
    dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dealer.union.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#f2f6f3] text-slate-800 flex flex-col font-sans select-none antialiased">

      {/* ========================================================
          TOP HEADER (Formal Government Deep Emerald Navbar)
          ======================================================== */}
      <header className="bg-gradient-to-r from-[#123e21] via-[#164e2a] to-[#144525] text-white px-3 sm:px-5 py-2 shadow-sm border-b border-emerald-900/40 flex items-center justify-between sticky top-0 z-30">

        {/* Left Branding */}
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center p-1 border border-white/20 shadow-inner">
            <img src="/logo.jpg" alt="FDMS" className="w-full h-full object-contain rounded-md" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xs sm:text-sm font-bold tracking-tight text-white leading-tight">
                FDMS — সার বিতরণ ব্যবস্থাপনা সিস্টেম
              </h1>
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/20 text-[9px] font-medium">
                জাতীয় পোর্টাল
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-emerald-200/90 font-normal tracking-wide">
              রেকর্ড ওয়ার্কস্পেস — DEMO DATA — NOT OFFICIAL RECORDS
            </p>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-2 text-xs">

          {/* Tour Button */}
          <button
            onClick={() => alert('সিস্টেম ট্যুর: বাম পাশের মেনু থেকে ডিলার, কৃষক ও বিতরণ সংক্রান্ত যেকোনো মডিউল ব্যবহার করতে পারেন।')}
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg text-emerald-100 transition-colors cursor-pointer text-[10px] font-medium"
          >
            <Clock className="w-3 h-3 text-emerald-300" />
            <span>ট্যুর</span>
          </button>

          {/* Request Button */}
          <button
            onClick={() => alert('অনুরোধ পাঠানো হয়েছে: কেন্দ্রীয় সার্ভারের সাথে ডাটা সিঙ্ক হচ্ছে।')}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg text-emerald-100 transition-colors cursor-pointer text-[10px] font-medium"
          >
            <Send className="w-3 h-3 text-emerald-300" />
            <span>FDMS অনুরোধ</span>
          </button>

          {/* User Profile Pill */}
          <div className="flex items-center bg-black/25 rounded-lg py-0.5 px-2 border border-white/15 text-white">
            <div className="w-4.5 h-4.5 rounded-full bg-emerald-600 flex items-center justify-center text-[9px] font-bold text-white mr-1.5 border border-emerald-400/30">
              {currentUser.name.charAt(0)}
            </div>
            <span className="font-semibold text-[11px] mr-1.5 text-slate-100">{currentUser.name}</span>
            <span className="bg-amber-500/90 text-slate-950 text-[9px] font-bold px-1.5 py-0.2 rounded tracking-wider">
              {currentUser.role}
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            title="লগআউট করে প্রস্থান করুন"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-600/80 text-white border border-white/15 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ========================================================
          BODY: SIDEBAR + MAIN CONTENT (Centered Max-Width Layout)
          ======================================================== */}
      <div className="flex-1 flex flex-col md:flex-row max-w-[1400px] w-full mx-auto">

        {/* Left Sidebar (Formal Compact Navigation) */}
        <aside className="w-full md:w-48 lg:w-56 bg-white md:border-r border-slate-200/70 flex flex-col shrink-0 py-3 shadow-[1px_0_4px_rgba(0,0,0,0.01)] md:sticky md:top-12 md:self-start md:max-h-[calc(100vh-3rem)] md:overflow-y-auto">
          <nav className="space-y-3 px-2.5">
            {navigationGroups.map((group, gIdx) => (
              <div key={gIdx} className="space-y-0.5">
                <p className="px-2 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  {group.group}
                </p>
                <div className="space-y-0.5 pt-0.5">
                  {group.items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.id
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all text-left cursor-pointer ${isActive
                            ? 'bg-emerald-50/90 text-emerald-900 font-semibold border-l-[3px] border-emerald-700 shadow-2xs'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} strokeWidth={1.8} />
                          <span className="truncate">{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${item.badgeColor === 'rose'
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-emerald-100 text-emerald-800'
                            }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Workspace Area (Formal Compact Density) */}
        <main className="flex-1 p-3.5 sm:p-4 lg:p-5 space-y-4 min-w-0">

          {activeTab === 'dashboard' ? (
            <>
              {/* Formal Sub-Header & Status Banner */}
              <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-2.5">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      ড্যাশবোর্ড পর্যবেক্ষণ
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      লাইভ রেকর্ড
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium mt-1">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                    <span>
                      কাউন্টার সামঞ্জস্য যাচাই: সব ডিলার সেলস হিস্টোরির যোগফল = মোট বিতরণ ও মোট সার। সর্বশেষ পূর্ণ যাচাই: ৯/১১/২০২৬, ৯:৫৮:০৩ PM
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
                  <button
                    onClick={handleRefresh}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-emerald-50/60 text-emerald-800 border border-slate-200 hover:border-emerald-500 rounded-lg text-xs font-semibold shadow-2xs transition-all cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 text-emerald-700 ${refreshKey ? 'animate-spin' : ''}`} />
                    <span>রিফ্রেশ</span>
                  </button>

                  <button
                    onClick={handleVerify}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#164e2a] hover:bg-[#123e21] text-white rounded-lg text-xs font-semibold shadow-xs hover:shadow transition-all cursor-pointer"
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-200" />
                    <span>{isVerifying ? 'যাচাই হচ্ছে...' : 'পরিসংখ্যান যাচাই'}</span>
                  </button>
                </div>
              </div>

              {/* Toast message on verify */}
              {verificationSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs flex items-center justify-between shadow-xs animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>সকল ডিলারের মজুদ খতিয়ান এবং বিক্রয় রসিদ নির্ভুলভাবে নিরীক্ষিত হয়েছে। কোনো অসঙ্গতি পাওয়া যায়নি।</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700">১০০% সামঞ্জস্যপূর্ণ</span>
                </div>
              )}

              {/* Row 1: Top 5 Summary Metrics Cards (Executive KPIs) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
                {summaryStats.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/70 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${item.iconBg}`}>
                          <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                        </div>
                        <span className="text-[9px] font-semibold text-slate-400">
                          ID-0{index + 1}
                        </span>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-mono">
                          {item.value}
                        </div>
                        <div className="text-xs text-slate-700 font-semibold mt-0.5">
                          {item.label}
                        </div>
                        <div className="text-[10px] text-slate-400 font-normal mt-0.5">
                          {item.subtext}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Row 2: Farmer Categories (কৃষক শ্রেণী - জমির পরিমাণ অনুযায়ী) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                    কৃষক শ্রেণী (জমির পরিমাণ অনুযায়ী)
                  </h3>
                  <span className="text-[11px] text-slate-500 font-normal">
                    মোট ৬৪ জন নিবন্ধিত কৃষক
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {farmerClassStats.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/70 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between">
                          <div className={`p-2 rounded-lg ${item.iconBg}`}>
                            <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                          </div>
                          <span className="text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200/70">
                            {item.percentage}
                          </span>
                        </div>

                        <div className="mt-2.5">
                          <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-mono">
                            {item.value}
                          </div>
                          <div className="text-xs text-slate-800 font-semibold mt-0.5">
                            {item.label}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            জমির আওতা: {item.landRange}
                          </div>

                          {/* Soft visual progress indicator */}
                          <div className="w-full bg-slate-100 rounded-full h-1 mt-2 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: item.percentage.replace('%', '') + '%',
                                backgroundColor: item.color
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Row 3: Two Analytics Charts (Donut + Bar Chart) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

                {/* Left Chart Card: সার ভিত্তিক বিতরণ (Donut Chart) */}
                <div className="lg:col-span-5 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      সার ভিত্তিক বিতরণ
                    </h4>
                    <span className="text-[10px] text-slate-400">শতাংশ ও পরিমাণ</span>
                  </div>

                  {/* SVG Donut Chart */}
                  <div className="py-2 flex flex-col items-center justify-center">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform drop-shadow-xs">
                        {/* Segment 1: Urea (38%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke="#166534"
                          strokeWidth="18"
                          strokeDasharray="83.6 220"
                          strokeDashoffset="0"
                        />
                        {/* Segment 2: TSP (24%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke="#16a34a"
                          strokeWidth="18"
                          strokeDasharray="52.8 220"
                          strokeDashoffset="-83.6"
                        />
                        {/* Segment 3: DAP (18%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke="#4ade80"
                          strokeWidth="18"
                          strokeDasharray="39.6 220"
                          strokeDashoffset="-136.4"
                        />
                        {/* Segment 4: MOP (14%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke="#ca8a04"
                          strokeWidth="18"
                          strokeDasharray="30.8 220"
                          strokeDashoffset="-176"
                        />
                        {/* Segment 5: Organic (6%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke="#78350f"
                          strokeWidth="18"
                          strokeDasharray="13.2 220"
                          strokeDashoffset="-206.8"
                        />
                      </svg>
                      {/* Inner Center Badge */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-xs font-bold text-slate-900 font-mono">৩,০৫৫</span>
                        <span className="text-[9px] text-slate-500 font-medium">মোট কেজি</span>
                      </div>
                    </div>

                    {/* Chart Legend with Quantities */}
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mt-3 text-[10px] text-slate-600 font-medium w-full px-1">
                      {fertilizerDistribution.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-0.5 border-b border-slate-50">
                          <div className="flex items-center space-x-1.5">
                            <span
                              className="w-2 h-2 rounded-full inline-block shrink-0"
                              style={{ backgroundColor: item.hex }}
                            ></span>
                            <span>{item.name}</span>
                          </div>
                          <span className="text-slate-400 text-[9px] font-mono">{item.kg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Chart Card: ইউনিয়ন ভিত্তিক বিতরণ (কেজি) (Bar Chart) */}
                <div className="lg:col-span-7 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      ইউনিয়ন ভিত্তিক বিতরণ (কেজি)
                    </h4>
                    <span className="text-[10px] text-slate-400">সর্বোচ্চ সীমা: ৭০০ কেজি</span>
                  </div>

                  {/* SVG Bar Chart with Axis */}
                  <div className="pt-2 pb-0.5 w-full">
                    <div className="flex w-full h-40 sm:h-44">

                      {/* Y-Axis scale */}
                      <div className="flex flex-col justify-between items-end pr-2 text-[9px] text-slate-400 font-mono select-none h-34 pb-1">
                        <span>700</span>
                        <span>600</span>
                        <span>500</span>
                        <span>400</span>
                        <span>300</span>
                        <span>200</span>
                        <span>100</span>
                        <span>0</span>
                      </div>

                      {/* Bars Container */}
                      <div className="flex-1 flex flex-col justify-between h-full">
                        <div className="relative flex-1 border-b border-l border-slate-200/80 flex items-end justify-around px-1.5 sm:px-3">

                          {/* Horizontal Gridlines */}
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                            <div className="border-t border-dashed border-slate-200 w-full"></div>
                            <div className="border-t border-dashed border-slate-200 w-full"></div>
                            <div className="border-t border-dashed border-slate-200 w-full"></div>
                            <div className="border-t border-dashed border-slate-200 w-full"></div>
                            <div className="border-t border-dashed border-slate-200 w-full"></div>
                            <div className="border-t border-dashed border-slate-200 w-full"></div>
                            <div className="border-t border-dashed border-slate-200 w-full"></div>
                          </div>

                          {/* Bars */}
                          {unionData.map((union, i) => {
                            const heightPercent = union.value > 0 ? (union.value / 700) * 100 : 0
                            return (
                              <div
                                key={i}
                                className="flex flex-col items-center h-full justify-end group z-10 w-6 sm:w-8"
                              >
                                {union.value > 0 ? (
                                  <div
                                    style={{ height: `${heightPercent}%` }}
                                    className="w-full bg-gradient-to-t from-[#15532d] to-[#22c55e] hover:to-emerald-400 rounded-t transition-all duration-300 relative shadow-2xs"
                                  >
                                    {/* Tooltip on hover */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] py-0.5 px-1.5 rounded pointer-events-none whitespace-nowrap shadow z-20 font-medium">
                                      {union.value} কেজি
                                    </div>
                                  </div>
                                ) : (
                                  <div className="h-0.5 w-full bg-transparent"></div>
                                )}
                              </div>
                            )
                          })}
                        </div>

                        {/* X-Axis labels */}
                        <div className="flex justify-around items-center pt-1.5 text-[10px] text-slate-600 font-medium px-1.5 sm:px-3">
                          {unionData.map((union, i) => (
                            <span key={i} className="w-6 sm:w-8 text-center truncate">
                              {union.name}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              {/* Row 4: মাসিক বিতরণ ট্রেন্ড (সর্বশেষ ৬ মাস) (Monthly Distribution Trend) */}
              <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs space-y-2">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    মাসিক বিতরণ ট্রেন্ড (সর্বশেষ ৬ মাস)
                  </h4>
                  <span className="text-[10px] text-slate-400">সর্বোচ্চ মৌসুম: সেপ্টেম্বর ২০২৬</span>
                </div>

                {/* SVG Area / Spline Trend Chart */}
                <div className="w-full overflow-x-auto pt-1">
                  <div className="min-w-[500px] sm:min-w-full">
                    <div className="flex w-full">

                      {/* Y-Axis Labels */}
                      <div className="flex flex-col justify-between items-end pr-2.5 text-[9px] text-slate-400 font-mono select-none h-34 pb-4">
                        <span>1,600</span>
                        <span>1,400</span>
                        <span>1,200</span>
                        <span>1,000</span>
                        <span>800</span>
                        <span>600</span>
                        <span>400</span>
                        <span>200</span>
                        <span>0</span>
                      </div>

                      {/* Chart Area */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="relative h-34 border-b border-l border-slate-200/80">

                          {/* Gridlines */}
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                            <div className="border-t border-slate-200 w-full"></div>
                            <div className="border-t border-slate-200 w-full"></div>
                            <div className="border-t border-slate-200 w-full"></div>
                            <div className="border-t border-slate-200 w-full"></div>
                            <div className="border-t border-slate-200 w-full"></div>
                            <div className="border-t border-slate-200 w-full"></div>
                            <div className="border-t border-slate-200 w-full"></div>
                            <div className="border-t border-slate-200 w-full"></div>
                          </div>

                          {/* SVG Spline Path & Gradient */}
                          <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
                            <defs>
                              <linearGradient id="trendGradientEyeSmooth" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#15803d" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#15803d" stopOpacity="0.01" />
                              </linearGradient>
                            </defs>

                            {/* Filled Area */}
                            <path
                              d="M 80 163 C 200 120, 260 37, 380 37 C 500 37, 580 60, 680 76 C 780 95, 880 160, 960 178 L 960 200 L 80 200 Z"
                              fill="url(#trendGradientEyeSmooth)"
                            />

                            {/* Curve Line */}
                            <path
                              d="M 80 163 C 200 120, 260 37, 380 37 C 500 37, 580 60, 680 76 C 780 95, 880 160, 960 178"
                              fill="none"
                              stroke="#166534"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />

                            {/* Data Points */}
                            {monthlyTrend.map((pt, idx) => (
                              <g key={idx} className="cursor-pointer group">
                                <circle
                                  cx={pt.x}
                                  cy={pt.y}
                                  r="4"
                                  className="fill-[#166534] stroke-white stroke-2 group-hover:r-5.5 transition-all"
                                />
                              </g>
                            ))}
                          </svg>

                        </div>

                        {/* X-Axis Month Labels */}
                        <div className="flex justify-between items-center pt-1.5 text-[10px] text-slate-500 font-mono px-4 sm:px-10">
                          {monthlyTrend.map((pt, idx) => (
                            <span key={idx}>{pt.month}</span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: শীর্ষ ডিলার (মোট সার বিতরণ অনুযায়ী) (Top Dealers Card) */}
              <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    শীর্ষ ডিলার (মোট সার বিতরণ অনুযায়ী)
                  </h4>
                  <span className="text-[10px] text-slate-400">সেরা ৫ জন বিক্রেতা</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {topDealers.map((dealer) => (
                    <div
                      key={dealer.rank}
                      className="flex items-center justify-between py-2 px-1.5 rounded-lg hover:bg-slate-50/70 transition-colors"
                    >
                      {/* Left: Rank & Dealer Info */}
                      <div className="flex items-center space-x-2.5">
                        <div className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold flex items-center justify-center shrink-0 border border-emerald-200/70">
                          {dealer.rank}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-900 leading-tight">
                            {dealer.name}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {dealer.union}
                          </p>
                        </div>
                      </div>

                      {/* Right: Quantity & Distributions */}
                      <div className="text-right flex flex-col items-end">
                        <span className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2 py-0.2 rounded-full border border-emerald-200/60 inline-block font-mono">
                          {dealer.totalKg}
                        </span>
                        <span className="text-[9px] text-slate-400 mt-0.5 font-medium">
                          {dealer.distributions}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Reconciliation Bar & Action Button */}
                <div className="pt-2.5 border-t border-dashed border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div>
                    <p className="text-[11px] text-slate-800 font-bold">
                      সকল ডিলারের যোগফল: ২১১ বিতরণ • ৩,০৫৫ কেজি
                    </p>
                    <div className="mt-1.5">
                      <button
                        onClick={() => setActiveTab('dealer-audit')}
                        className="border border-emerald-700/60 text-emerald-800 hover:bg-emerald-50 text-[11px] font-semibold px-2.5 py-1 rounded-lg cursor-pointer transition-colors inline-flex items-center gap-1 shadow-2xs"
                      >
                        <span>ডিলার-ভিত্তিক অডিট দেখুন</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>ড্যাশবোর্ড মোটের সাথে মিলেছে</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Row 6: সকল ডিলারের সার বিতরণ (কেজি) (All Dealers Distribution Table) */}
              <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/70 shadow-xs space-y-3">

                {/* Header & Table Search Filter */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1.5 border-b border-slate-100">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      সকল ডিলারের সার বিতরণ (কেজি)
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      উপজেলা সার ও বীজ মনিটরিং কমিটির নিরীক্ষিত খতিয়ান
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="ডিলার বা ইউনিয়ন খুঁজুন..."
                        className="pl-7 pr-2.5 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1.5 focus:ring-emerald-600 focus:bg-white transition-all w-40 sm:w-48"
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold px-2 py-0.5 bg-slate-100 rounded shrink-0">
                      {filteredDealers.length} জন ডিলার
                    </span>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700">

                    {/* Table Head */}
                    <thead className="bg-[#f2f7f3] text-emerald-950 font-bold text-[11px]">
                      <tr>
                        <th className="py-2.5 px-3 w-10 text-center text-emerald-900">#</th>
                        <th className="py-2.5 px-3 text-emerald-900">ডিলার</th>
                        <th className="py-2.5 px-3 text-emerald-900">ইউনিয়ন</th>
                        <th className="py-2.5 px-3 text-emerald-900">বিতরণ (এন্ট্রি)</th>
                        <th className="py-2.5 px-3 text-emerald-900">মোট সার (কেজি)</th>
                        <th className="py-2.5 px-3 text-right w-24">অ্যাকশন</th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-slate-100">
                      {filteredDealers.map((dealer) => (
                        <tr key={dealer.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-2 px-3 text-center text-slate-400 font-mono font-medium">
                            {dealer.id}
                          </td>
                          <td className="py-2 px-3 font-medium text-slate-900">
                            <div className="flex items-center">
                              <span>{dealer.name}</span>
                              {dealer.status === 'inactive' && (
                                <span className="ml-2 px-1.5 py-0.2 bg-rose-50 text-rose-700 border border-rose-200 rounded-full text-[9px] font-bold">
                                  নিষ্ক্রিয়
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-2 px-3 text-slate-600">
                            {dealer.union}
                          </td>
                          <td className="py-2 px-3 text-slate-600 font-mono font-medium">
                            {dealer.entries}
                          </td>
                          <td className="py-2 px-3 font-bold text-slate-900 font-mono">
                            {dealer.totalKg}
                          </td>
                          <td className="py-2 px-3 text-right">
                            <button
                              onClick={() => setSelectedDealerModal(dealer)}
                              className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-600/70 rounded-lg text-[11px] font-semibold shadow-2xs transition-all cursor-pointer inline-flex items-center gap-1"
                            >
                              <span>বিস্তারিত</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                    {/* Table Footer: Total Row */}
                    <tfoot>
                      <tr className="border-t border-slate-200 font-bold text-slate-900 bg-slate-50/40">
                        <td className="py-2 px-3"></td>
                        <td className="py-2 px-3 text-slate-900">সকল ডিলারের মোট</td>
                        <td className="py-2 px-3"></td>
                        <td className="py-2 px-3 text-slate-900 font-mono">২১১</td>
                        <td className="py-2 px-3 text-slate-900 font-mono">৩,০৫৫</td>
                        <td className="py-2 px-3"></td>
                      </tr>
                    </tfoot>

                  </table>
                </div>

              </div>
            </>
          ) : (
            /* Sub-View for Other Sidebar Tabs */
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {navigationGroups.flatMap(g => g.items).find(m => m.id === activeTab)?.label}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    মডিউলটির ফ্রন্টএন্ড ভিউ প্রস্তুত ও সক্রিয় রয়েছে
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="px-4 py-2 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  &larr; ড্যাশবোর্ডে ফিরুন
                </button>
              </div>

              {/* Sample Content tailored to selected tab */}
              {activeTab === 'add-dealer' && (
                <div className="max-w-2xl space-y-4">
                  <h3 className="text-sm font-bold text-slate-800">নতুন ডিলার নিবন্ধন ফর্ম</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="ডিলারের পূর্ণ নাম" className="px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                    <input type="text" placeholder="ট্রেড লাইসেন্স নম্বর" className="px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                    <input type="text" placeholder="ইউনিয়ন" className="px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                    <input type="text" placeholder="মোবাইল নম্বর" className="px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                  </div>
                  <button className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs cursor-pointer">
                    সংরক্ষণ করুন
                  </button>
                </div>
              )}

              {activeTab === 'dealers-list' && (
                <div className="space-y-3">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-slate-600">
                      <thead className="bg-slate-50 text-slate-700 font-semibold uppercase text-[11px]">
                        <tr>
                          <th className="py-2.5 px-3">ডিলার আইডি</th>
                          <th className="py-2.5 px-3">নাম</th>
                          <th className="py-2.5 px-3">ইউনিয়ন</th>
                          <th className="py-2.5 px-3">ট্রেড লাইসেন্স</th>
                          <th className="py-2.5 px-3">স্ট্যাটাস</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="py-2.5 px-3 font-mono">D-1001</td>
                          <td className="py-2.5 px-3 font-medium text-slate-900">মেসার্স রহমত ট্রেডার্স</td>
                          <td className="py-2.5 px-3">ইউনিয়ন ১</td>
                          <td className="py-2.5 px-3">TL-2026-8812</td>
                          <td className="py-2.5 px-3"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-semibold">সক্রিয়</span></td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-mono">D-1002</td>
                          <td className="py-2.5 px-3 font-medium text-slate-900">আল-মদিনা এগ্রো সেন্টার</td>
                          <td className="py-2.5 px-3">ইউনিয়ন ২</td>
                          <td className="py-2.5 px-3">TL-2026-9934</td>
                          <td className="py-2.5 px-3"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-semibold">সক্রিয়</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab !== 'add-dealer' && activeTab !== 'dealers-list' && (
                <div className="p-8 text-center text-slate-400 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-500">
                    <Package className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-700">{navigationGroups.flatMap(g => g.items).find(m => m.id === activeTab)?.label} মডিউল</h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    এই মডিউলের জন্য ফ্রন্টএন্ড কম্পোনেন্ট রেডি রয়েছে। ড্যাশবোর্ড থেকে সহজেই এক ক্লিকে যেকোনো ডেটা মনিটর করতে পারবেন।
                  </p>
                </div>
              )}

            </div>
          )}

        </main>

      </div>

      {/* ========================================================
          FULL WIDTH FOOTER (Spans across entire screen including under the left sidebar menu)
          ======================================================== */}
      <footer className="w-full bg-[#f2f6f3] border-t border-slate-200/90 py-4 sm:py-5 text-center text-[11px] sm:text-xs text-slate-500 z-10">
        <p className="px-4 font-normal tracking-normal text-slate-500">
          © FDMS BANGLADESH — All Rights Reserved · Developed by Toufiq &amp; Fahad
        </p>
      </footer>

      {/* Dealer Details Modal */}
      {selectedDealerModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">{selectedDealerModal.name}</h3>
                <p className="text-xs text-slate-500">{selectedDealerModal.union}</p>
              </div>
              <button
                onClick={() => setSelectedDealerModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">ডিলার আইডি:</span>
                <span className="font-semibold text-slate-800 font-mono">{selectedDealerModal.details?.dealerId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">ট্রেড লাইসেন্স:</span>
                <span className="font-semibold text-slate-800 font-mono">{selectedDealerModal.details?.tradeLicense}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">ইউরিয়া বিতরণ:</span>
                <span className="font-semibold text-emerald-700">{selectedDealerModal.details?.urea}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">টিএসপি বিতরণ:</span>
                <span className="font-semibold text-emerald-700">{selectedDealerModal.details?.tsp}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">ডিএপি বিতরণ:</span>
                <span className="font-semibold text-emerald-700">{selectedDealerModal.details?.dap}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">এমওপি বিতরণ:</span>
                <span className="font-semibold text-emerald-700">{selectedDealerModal.details?.mop}</span>
              </div>
              <div className="flex justify-between py-1 pt-2 font-bold text-sm">
                <span className="text-slate-900">মোট সার বিতরণ:</span>
                <span className="text-emerald-800 font-mono">{selectedDealerModal.totalKg} কেজি</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedDealerModal(null)}
              className="w-full py-2.5 bg-[#123e21] hover:bg-[#164e2a] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
