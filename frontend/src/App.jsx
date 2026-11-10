import { useState } from 'react'
import { 
  Building2, 
  Sprout, 
  PackageCheck, 
  Users, 
  ShieldCheck, 
  FileSpreadsheet, 
  TrendingUp, 
  AlertTriangle 
} from 'lucide-react'

export default function App() {
  const [activeTab, setActiveTab] = useState('overview')

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
                Fertilizer Dealer & Distribution Management System • CSE 3292
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-900 text-emerald-300 font-mono">
              <span className="w-2 h-2 mr-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              React + Tailwind + Vite Active
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              National Chemical Fertilizer Distribution Management
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Digitizing end-to-end supply chain logistics from BCIC/BADC buffer godowns to Union level dealers and marginal farmers across Bangladesh. Built with Spring Boot, PostgreSQL, and React.js.
            </p>
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
              <h3 className="text-lg font-bold text-slate-900">Core Architecture Modules</h3>
              <p className="text-sm text-slate-500">Specified in the project SRS and ERD documentation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map((mod, idx) => {
              const Icon = mod.icon
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
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
                    <span className="text-emerald-700 font-medium hover:underline cursor-pointer">
                      Module Ready &rarr;
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick Developer Guide */}
        <div className="bg-slate-900 text-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Developer Next Steps</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">Frontend is Ready for Development</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            To start the development server locally, run:
          </p>
          <div className="mt-3 bg-black/40 rounded-lg p-3 font-mono text-xs text-emerald-300 border border-slate-800 flex items-center justify-between overflow-x-auto">
            <code>cd frontend &amp;&amp; npm run dev</code>
            <span className="text-[10px] text-slate-500">Localhost: 5173</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        FDMS BANGLADESH • Department of Computer Science &amp; Engineering • CSE 3292
      </footer>
    </div>
  )
}
