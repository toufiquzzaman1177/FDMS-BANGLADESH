import { useState } from 'react'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import { 
  Building2, 
  Sprout, 
  PackageCheck, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  LogIn,
  CheckCircle2,
  LayoutDashboard
} from 'lucide-react'

export default function App() {
  // Default to 'dashboard' so user sees the newly designed dashboard immediately
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [loggedInUser, setLoggedInUser] = useState({ name: 'Swapnil', role: 'জেলা অফিসার' })

  const modules = [
    {
      title: 'Dealer Appointment & Licensing',
      description: 'Manage BCIC and BADC dealer credentials, union quotas, and security deposits.',
      icon: Building2,
      badge: 'Admin & DAE',
      color: 'bg-emerald-500'
    },
    {
      title: 'Allocation & Stock Ledger',
      description: 'Track Urea, TSP, DAP, and MOP allotments with real-time digital stock verification.',
      icon: PackageCheck,
      badge: 'Supply Chain',
      color: 'bg-blue-500'
    },
    {
      title: 'Farmer Subsidized Sales (POS)',
      description: 'NID and Krishi Card verified distribution to prevent black-market hoarding.',
      icon: Users,
      badge: 'Field POS',
      color: 'bg-amber-500'
    },
    {
      title: 'DAE & Upazila Monitoring',
      description: 'Upazila Nirbahi Officer (UNO) & Agriculture Officer inspection and grievance ledger.',
      icon: ShieldCheck,
      badge: 'Compliance',
      color: 'bg-purple-500'
    }
  ]

  const stats = [
    { label: 'Authorized Dealers', value: '5,420', change: '+12 this month' },
    { label: 'Fertilizer Dispatched (MT)', value: '1,248,500', change: 'Urea, TSP, DAP, MOP' },
    { label: 'Verified Beneficiaries', value: '3,890,120', change: 'Krishi Card linked' },
    { label: 'Compliance Rate', value: '98.4%', change: 'Fair MRP monitored' }
  ]

  // View 1: Main Admin/Officer Dashboard (Matches target screenshot)
  if (currentPage === 'dashboard') {
    return (
      <Dashboard 
        currentUser={loggedInUser}
        onLogout={() => {
          setLoggedInUser({ name: 'Swapnil', role: 'জেলা অফিসার' })
          setCurrentPage('login')
        }}
      />
    )
  }

  // View 2: High-Fidelity Login Page
  if (currentPage === 'login') {
    return (
      <LoginPage 
        onBackToHome={() => setCurrentPage('home')}
        onLoginSuccess={(user) => {
          setLoggedInUser({ name: user.name || 'Swapnil', role: user.role || 'জেলা অফিসার' })
          setTimeout(() => setCurrentPage('dashboard'), 600)
        }}
      />
    )
  }

  // View 3: Home / Landing Page View
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Banner */}
      <header className="bg-emerald-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-700 rounded-lg">
              <Sprout className="w-8 h-8 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">FDMS BANGLADESH</h1>
                <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-600 rounded-full text-emerald-100">
                  v1.0 MVP
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-200">
                Fertilizer Dealer &amp; Distribution Management System • CSE 3292
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer"
            >
              <LayoutDashboard className="w-4 h-4 text-emerald-200" />
              <span>ড্যাশবোর্ড খুলুন</span>
            </button>
            <button
              onClick={() => setCurrentPage('login')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 text-xs sm:text-sm font-semibold shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <LogIn className="w-4 h-4 text-emerald-700" />
              <span>লগইন করুন</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full mb-3">
                কৃষি মন্ত্রণালয় • গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                জাতীয় রাসায়নিক সার বিতরণ ও ডিলার ব্যবস্থাপনা
              </h2>
              <p className="mt-2 text-slate-600 leading-relaxed text-sm sm:text-base">
                বিসিআইসি ও বিএডিসি বাফার গুদাম থেকে ইউনিয়ন পর্যায়ের অনুমোদিত ডিলার এবং প্রান্তিক কৃষকদের মাঝে ন্যায্যমূল্যে সার বিতরণ নিশ্চিতকরণে ডিজিটাল ট্র্যাকিং প্ল্যাটফর্ম।
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1e6837] hover:bg-emerald-800 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all text-sm cursor-pointer"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>ড্যাশবোর্ডে প্রবেশ করুন</span>
              </button>
              <button
                onClick={() => setCurrentPage('login')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all text-sm cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>লগইন পেজ</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                <p className="text-xs text-emerald-600 font-medium mt-1">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">কোর আর্কিটেকচার মডিউলসমূহ</h3>
              <p className="text-sm text-slate-500">SRS ও ERD ডকুমেন্টেশন অনুযায়ী প্রস্তুতকৃত ফ্রন্টএন্ড মডিউল</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map((mod, idx) => {
              const Icon = mod.icon
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-lg text-white ${mod.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {mod.badge}
                      </span>
                    </div>
                    <h4 className="font-semibold text-slate-900 mt-4 text-base">{mod.title}</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{mod.description}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setCurrentPage('dashboard')}
                      className="text-emerald-700 font-medium hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>ড্যাশবোর্ডে দেখুন</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Developer Guide */}
        <div className="bg-slate-900 text-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>টিম টু ফ্যাক্টর (Team Two Factor)</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">ড্যাশবোর্ড ও লগইন পেজ সক্রিয় রয়েছে</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            উপরে ডান পাশের বোতামে ক্লিক করে সহজেই যেকোনো মুহূর্তে ড্যাশবোর্ড ও লগইন পেজের মাঝে সুইচ করতে পারবেন।
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 space-y-1">
        <p>© সার ডিলার ও বিতরণ ব্যবস্থাপনা সিস্টেম — All Rights Reserved</p>
        <p className="text-slate-400 text-[11px]">
          Developed by <span className="text-slate-600 font-medium">Team Two Factor</span> (Fahad &amp; Toufiq) • CSE 3292
        </p>
      </footer>
    </div>
  )
}
