import { useState } from 'react'
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
  PlusCircle,
  AlertTriangle
} from 'lucide-react'

export default function Dashboard({ onLogout, currentUser = { name: 'Swapnil', role: 'জেলা অফিসার' } }) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [refreshKey, setRefreshKey] = useState(0)
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationSuccess, setVerificationSuccess] = useState(false)

  // Top metric cards
  const summaryStats = [
    {
      label: 'মোট ডিলার',
      value: '6',
      icon: Users,
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      label: 'মোট কৃষক',
      value: '64',
      icon: User,
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      label: 'মোট বিতরণ',
      value: '211',
      icon: Truck,
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      label: 'ডুপ্লিকেট ডেটা',
      value: '4',
      icon: Copy,
      iconBg: 'bg-rose-50 text-rose-500',
    },
    {
      label: 'মোট সার বিতরণ (কেজি)',
      value: '৩,০৫৫',
      icon: ShoppingBag,
      iconBg: 'bg-amber-50 text-amber-700',
    },
  ]

  // Farmer classes by land size
  const farmerClassStats = [
    {
      label: 'ছোট কৃষক',
      value: '28',
      icon: User,
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      label: 'মাঝারি কৃষক',
      value: '25',
      icon: User,
      iconBg: 'bg-amber-50 text-amber-700',
    },
    {
      label: 'বড় কৃষক',
      value: '11',
      icon: User,
      iconBg: 'bg-rose-50 text-rose-500',
    },
  ]

  // Fertilizer Donut Chart data
  const fertilizerDistribution = [
    { name: 'ইউরিয়া', value: 38, color: '#1f6a39', hex: '#1f6a39' },
    { name: 'টিএসপি', value: 24, color: '#22c55e', hex: '#22c55e' },
    { name: 'ডিএপি', value: 18, color: '#4ade80', hex: '#4ade80' },
    { name: 'এমওপি', value: 14, color: '#ca8a04', hex: '#ca8a04' },
    { name: 'জৈব সার', value: 6, color: '#78350f', hex: '#78350f' },
  ]

  // Union distribution bar chart data
  const unionData = [
    { name: '১', value: 600 },
    { name: '২', value: 650 },
    { name: '৩', value: 680 },
    { name: '৪', value: 480 },
    { name: '৫', value: 650 },
    { name: '৬', value: 0 },
    { name: '৭', value: 0 },
    { name: 'বকশীগঞ্জ', value: 0 },
  ]

  // Sidebar Menu Items (Exact match to target design)
  const menuItems = [
    { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: LayoutDashboard },
    { id: 'add-dealer', label: 'ডিলার যুক্ত করুন', icon: UserPlus },
    { id: 'dealers-list', label: 'ডিলার তালিকা', icon: Users },
    { id: 'stock', label: 'স্টক ব্যবস্থাপনা', icon: Package },
    { id: 'dealer-audit', label: 'ডিলার অডিট / প্রোফাইল', icon: FileCheck2 },
    { id: 'distribution-records', label: 'বিতরণ রেকর্ড', icon: FileText },
    { id: 'duplicate-data', label: 'ডুপ্লিকেট ডেটা', icon: Copy },
    { id: 'farmer-search', label: 'কৃষক অনুসন্ধান', icon: UserSearch },
    { id: 'reports', label: 'রিপোর্ট', icon: BarChart3 },
    { id: 'export', label: 'ডেটা এক্সপোর্ট', icon: Download },
    { id: 'logs', label: 'সিস্টেম লগ', icon: Terminal },
    { id: 'verify', label: 'পরিসংখ্যান যাচাই', icon: CheckSquare },
    { id: 'cleanup', label: 'ডেটা মুছুন', icon: Trash2 },
    { id: 'settings', label: 'সেটিংস', icon: Settings },
  ]

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1)
  }

  const handleVerify = () => {
    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      setVerificationSuccess(true)
      setTimeout(() => setVerificationSuccess(false), 3000)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-[#f3f6f3] flex flex-col font-sans select-none text-slate-800">
      
      {/* ========================================================
          TOP HEADER (Green Navbar)
          ======================================================== */}
      <header className="bg-[#1e6837] text-white px-4 py-2.5 sm:px-6 shadow-md flex items-center justify-between sticky top-0 z-30">
        
        {/* Left Branding */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1 border border-white/20">
            <img src="/logo.jpg" alt="FDMS" className="w-full h-full object-contain rounded-full" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold tracking-tight text-white leading-tight">
              FDMS — সার বিতরণ ব্যবস্থাপনা সিস্টেম
            </h1>
            <p className="text-[10px] sm:text-[11px] text-emerald-200 font-medium">
              রেকর্ড ওয়ার্কস্পেস — DEMO DATA — NOT OFFICIAL RECORDS
            </p>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs">
          
          {/* Tour Button */}
          <button 
            onClick={() => alert('সিস্টেম ট্যুর: বাম পাশের মেনু থেকে যেকোনো মডিউলে নেভিগেট করতে পারবেন।')}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-colors cursor-pointer"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>ট্যুর</span>
          </button>

          {/* Request Button */}
          <button 
            onClick={() => alert('অনুরোধ পাঠানো হয়েছে: কেন্দ্রীয় সার্ভারের সাথে ডাটা সিঙ্ক হচ্ছে।')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>FDMS অনুরোধ</span>
          </button>

          {/* User Profile Pill */}
          <div className="flex items-center bg-black/20 rounded-full py-0.5 px-1.5 pl-3 border border-white/10 text-white">
            <span className="font-semibold text-xs mr-2">{currentUser.name}</span>
            <span className="bg-amber-600/90 text-amber-50 text-[10px] font-semibold px-2 py-0.5 rounded-full">
              {currentUser.role}
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            title="লগআউট"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-red-600/80 text-white border border-white/20 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ========================================================
          BODY: SIDEBAR + MAIN CONTENT
          ======================================================== */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar */}
        <aside className="w-52 sm:w-60 bg-white border-r border-slate-200/80 flex flex-col shrink-0 overflow-y-auto py-3">
          <nav className="space-y-0.5 px-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-emerald-100/80 text-emerald-900 font-bold shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-800' : 'text-slate-500'}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Main Workspace Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 space-y-6">
          
          {activeTab === 'dashboard' ? (
            <>
              {/* Dashboard Sub-Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200/60">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    ড্যাশবোর্ড
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      কাউন্টার সামঞ্জস্য যাচাই: সব ডিলার সেলস হিস্টোরির যোগফল = মোট বিতরণ ও মোট সার। সর্বশেষ পূর্ণ যাচাই: ৯/১১/২০২৬, ৯:৫৮:০৩ PM
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-[11px] text-slate-500 hidden xl:inline">সিস্টেমের সামগ্রিক অবস্থা</span>
                  
                  <button
                    onClick={handleRefresh}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-600 rounded-full text-xs font-medium shadow-2xs transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${refreshKey ? 'animate-spin' : ''}`} />
                    <span>রিফ্রেশ</span>
                  </button>

                  <button
                    onClick={handleVerify}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-600 rounded-full text-xs font-medium shadow-2xs transition-colors cursor-pointer"
                  >
                    <CheckSquare className="w-3.5 h-3.5" />
                    <span>{isVerifying ? 'যাচাই হচ্ছে...' : 'পরিসংখ্যান যাচাই'}</span>
                  </button>
                </div>
              </div>

              {verificationSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>সকল ডিলার স্টক ও বিক্রয় হিস্টোরি নির্ভুলভাবে মিলিয়ে যাচাই সম্পন্ন হয়েছে!</span>
                </div>
              )}

              {/* Row 1: Top 5 Summary Metrics Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
                {summaryStats.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
                    >
                      <div className={`w-fit p-2 rounded-xl mb-3 ${item.iconBg}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          {item.value}
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-1">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Row 2: Farmer Categories (কৃষক শ্রেণী - জমির পরিমাণ অনুযায়ী) */}
              <div className="space-y-2.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  কৃষক শ্রেণী (জমির পরিমাণ অনুযায়ী)
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {farmerClassStats.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
                      >
                        <div className={`w-fit p-2 rounded-xl mb-3 ${item.iconBg}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            {item.value}
                          </div>
                          <div className="text-xs text-slate-500 font-medium mt-1">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Row 3: Two Analytics Charts (Donut + Bar Chart) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                
                {/* Left Chart Card: সার ভিত্তিক বিতরণ (Donut Chart) */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">
                    সার ভিত্তিক বিতরণ
                  </h4>

                  {/* SVG Donut Chart */}
                  <div className="py-4 flex flex-col items-center justify-center">
                    <div className="relative w-44 h-44">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                        {/* Circle circumference = 2 * PI * 35 = ~220 */}
                        {/* Segment 1: Urea (38%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke="#1f6a39"
                          strokeWidth="20"
                          strokeDasharray="83.6 220"
                          strokeDashoffset="0"
                        />
                        {/* Segment 2: TSP (24%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke="#22c55e"
                          strokeWidth="20"
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
                          strokeWidth="20"
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
                          strokeWidth="20"
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
                          strokeWidth="20"
                          strokeDasharray="13.2 220"
                          strokeDashoffset="-206.8"
                        />
                      </svg>
                      {/* Inner Hole for Donut */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-xs font-bold text-slate-700">১০০%</span>
                        <span className="text-[10px] text-slate-400">মোট সার</span>
                      </div>
                    </div>

                    {/* Chart Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 mt-5 text-[11px] text-slate-600 font-medium">
                      {fertilizerDistribution.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-xs inline-block"
                            style={{ backgroundColor: item.hex }}
                          ></span>
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Chart Card: ইউনিয়ন ভিত্তিক বিতরণ (কেজি) (Bar Chart) */}
                <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">
                    ইউনিয়ন ভিত্তিক বিতরণ (কেজি)
                  </h4>

                  {/* SVG Bar Chart with Axis */}
                  <div className="pt-2 pb-1 w-full">
                    <div className="flex w-full h-56">
                      
                      {/* Y-Axis scale */}
                      <div className="flex flex-col justify-between items-end pr-2.5 text-[10px] text-slate-400 font-mono select-none h-48">
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
                        <div className="relative flex-1 border-b border-l border-slate-200 flex items-end justify-around px-2 sm:px-4">
                          
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
                            // Max value 700
                            const heightPercent = union.value > 0 ? (union.value / 700) * 100 : 0
                            return (
                              <div
                                key={i}
                                className="flex flex-col items-center h-full justify-end group z-10 w-8 sm:w-11"
                              >
                                {union.value > 0 ? (
                                  <div
                                    style={{ height: `${heightPercent}%` }}
                                    className="w-full bg-[#2e8b57] hover:bg-emerald-600 rounded-t-sm transition-all duration-300 relative"
                                  >
                                    {/* Tooltip on hover */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none whitespace-nowrap shadow-xs">
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
                        <div className="flex justify-around items-center pt-2 text-[11px] text-slate-500 font-medium px-2 sm:px-4">
                          {unionData.map((union, i) => (
                            <span key={i} className="w-8 sm:w-11 text-center truncate">
                              {union.name}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </>
          ) : (
            /* Sub-View for Other Sidebar Tabs */
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {menuItems.find(m => m.id === activeTab)?.label}
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
                  <h4 className="text-sm font-semibold text-slate-700">{menuItems.find(m => m.id === activeTab)?.label} মডিউল</h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    এই মডিউলের জন্য ফ্রন্টএন্ড কম্পোনেন্ট রেডি রয়েছে। ড্যাশবোর্ড থেকে সহজেই এক ক্লিকে যেকোনো ডেটা মনিটর করতে পারবেন।
                  </p>
                </div>
              )}

            </div>
          )}

        </main>

      </div>

    </div>
  )
}
