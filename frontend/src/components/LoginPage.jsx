import { useState, useEffect } from 'react'
import logoImg from '../assets/logo.jpg'
import loginBg from '../assets/bg.jpg'
import {
  Sprout,
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Globe
} from 'lucide-react'

export default function LoginPage({ onBackToHome, onLoginSuccess }) {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loginSuccessRole, setLoginSuccessRole] = useState(null)

  useEffect(() => {
    document.title = 'লগইন | সার বিতরণ ব্যবস্থাপনা সিস্টেম - FDMS Bangladesh'
  }, [])

  // 6 Official GovMIS Stakeholder Demo Accounts
  const demoAccounts = [
    { label: '১. সুপার অ্যাডমিন (MoA/HQ)', id: 'hq.admin@moa.gov.bd', pass: 'admin123', role: 'সুপার অ্যাডমিন (MoA / DAE HQ)', name: 'ড. মোস্তাফিজুর রহমান', color: 'bg-purple-600' },
    { label: '২. উপজেলা অ্যাডমিন (UNO/UAO)', id: 'uao.chatmohar@dae.gov.bd', pass: 'uao12345', role: 'উপজেলা অ্যাডমিন (UNO / UAO)', name: 'ড. আহমেদ রফিক', color: 'bg-emerald-700' },
    { label: '৩. ইউনিয়ন সার ডিলার (Dealer)', id: 'dealer.union1@fdms.gov.bd', pass: 'dealer123', role: 'ইউনিয়ন সার ডিলার (Dealer)', name: 'আলহাজ্ব মোকাররম হোসেন', color: 'bg-blue-600' },
    { label: '৪. ওয়ার্ড বিক্রয়কেন্দ্র POS', id: 'pos.ward3@fdms.gov.bd', pass: 'pos12345', role: 'ওয়ার্ড বিক্রয়কেন্দ্র অপারেটর (POS)', name: 'মোঃ শফিকুল ইসলাম', color: 'bg-amber-600' },
    { label: '৫. মাঠ কর্মকর্তা (SAAO)', id: 'saao.block1@dae.gov.bd', pass: 'saao12345', role: 'মাঠ কর্মকর্তা (SAAO / উপসহকারী)', name: 'মোঃ শহিদুল ইসলাম', color: 'bg-teal-600' },
    { label: '৬. সাধারণ কৃষক ও নাগরিক', id: 'citizen@fdms.gov.bd', pass: 'public123', role: 'সাধারণ কৃষক ও নাগরিক (Public User)', name: 'উন্মুক্ত নাগরিক', color: 'bg-slate-600' }
  ]

  const handleQuickFill = (account) => {
    setIdentifier(account.id)
    setPassword(account.pass)
    setErrorMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!identifier.trim()) {
      setErrorMessage('অনুগ্রহ করে আপনার ইমেইল বা ইউজার আইডি লিখুন')
      return
    }

    if (!password) {
      setErrorMessage('অনুগ্রহ করে আপনার পাসওয়ার্ড দিন')
      return
    }

    setIsLoading(true)

    // Simulate smart role-based authentication
    setTimeout(() => {
      setIsLoading(false)
      const matched = demoAccounts.find(acc => acc.id === identifier.trim())
      const detectedRole = matched ? matched.role : 'উপজেলা অ্যাডমিন (UNO / UAO)'
      const detectedName = matched ? matched.name : 'ড. আহমেদ রফিক'
      setLoginSuccessRole(detectedRole)

      if (onLoginSuccess) {
        onLoginSuccess({ identifier, role: detectedRole, name: detectedName })
      }
    }, 700)
  }

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-between items-center py-6 sm:py-8 px-4 overflow-hidden select-none font-sans">

      {/* ========================================================
          AGRICULTURAL LANDSCAPE BACKGROUND & OVERLAY
          ======================================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all scale-100"
        style={{ backgroundImage: `url(${loginBg})` }}
      />
      {/* Eye-smoothing formal backdrop overlay so the card and text stand out perfectly */}
      <div className="absolute inset-0 bg-slate-950/35 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-black/20 to-slate-950/45" />

      {/* ========================================================
          TOP NAVIGATION BAR (Back to Home button)
          ======================================================== */}
      <div className="w-full max-w-5xl flex justify-start items-center z-10 mb-2 sm:mb-4">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white text-slate-800 hover:text-emerald-950 text-xs font-semibold rounded-lg shadow-sm border border-white/80 transition-all cursor-pointer backdrop-blur-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-800" />
          <span>হোম পেজে ফিরুন</span>
        </button>
      </div>

      {/* ========================================================
          MAIN LOGIN CARD (Formal Government MIS Standard)
          ======================================================== */}
      <div className="w-full max-w-[420px] sm:max-w-[450px] bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_16px_40px_-8px_rgba(0,0,0,0.35)] border border-white/80 p-6 sm:p-8 z-10 transition-all duration-300">

        {/* Top Logo */}
        <div className="flex justify-center mb-3">
          <div className="p-1.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-2xs">
            <img
              src={logoImg}
              alt="FDMS Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl"
            />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center mb-5">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[10px] font-bold tracking-wide uppercase mb-1.5">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            সার বিতরণ ব্যবস্থাপনা সিস্টেম
          </h1>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            উপজেলা কৃষি অফিস • কৃষি সম্প্রসারণ অধিদপ্তর (DAE)
          </p>
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="mb-4 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Login Success Notification */}
        {loginSuccessRole && (
          <div className="mb-4 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>সফলভাবে যাচাই হয়েছে! প্রবেশ করা হচ্ছে: <strong>{loginSuccessRole}</strong></span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">

          {/* Email / ID Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 text-left">
              ইউজার আইডি / ইমেইল ঠিকানা
            </label>
            <div className="relative">
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="name@example.com বা ইউজার আইডি"
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#14532d] focus:border-[#14532d] transition-all placeholder:text-slate-400 font-sans"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 text-left">
              গোপনীয় পাসওয়ার্ড
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#14532d] focus:border-[#14532d] transition-all placeholder:text-slate-400 font-sans pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-1.5 py-2.5 sm:py-3 px-4 bg-[#14532d] hover:bg-[#0f3d20] active:bg-[#0c311a] text-white font-semibold rounded-xl shadow-xs hover:shadow transition-all duration-150 text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>যাচাই করা হচ্ছে...</span>
              </>
            ) : (
              <span>লগইন করুন</span>
            )}
          </button>
        </form>

        {/* Instructional Note */}
        <p className="text-[11.5px] text-slate-600 text-center leading-relaxed mt-3.5 bg-slate-50 p-2 rounded-xl border border-slate-200/80">
          অ্যাডমিন, UNO, ডিলার, POS অপারেটর ও মাঠ কর্মকর্তা — সবাই এই পোর্টাল দিয়ে লগইন করবেন।
        </p>

        {/* Public Citizen Portal Direct Link */}
        <div className="mt-3 text-center">
          <button
            type="button"
            onClick={() => {
              if (onLoginSuccess) {
                onLoginSuccess({
                  identifier: 'citizen@fdms.gov.bd',
                  role: 'সাধারণ কৃষক ও নাগরিক (Public User)',
                  name: 'উন্মুক্ত নাগরিক'
                });
              }
            }}
            className="w-full py-2 px-3 bg-emerald-50/80 hover:bg-emerald-100 text-[#14532d] border border-emerald-200 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>কোনো লগইন ছাড়াই উন্মুক্ত নাগরিক সেবা দেখুন</span>
          </button>
        </div>

        {/* Quick Demo Selector for Presentation */}
        <div className="mt-4 pt-3.5 border-t border-slate-100">
          <p className="text-[11px] text-slate-500 text-center mb-2 font-semibold">
            স্টেকহোল্ডার ভূমিকাভিত্তিক দ্রুত লগইন টেস্ট:
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {demoAccounts.map((acc, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleQuickFill(acc)}
                className="text-[11px] py-1.5 px-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-950 rounded-lg border border-slate-200 transition-colors text-left truncate cursor-pointer font-medium flex items-center gap-1.5"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${acc.color} shrink-0`}></span>
                <span className="truncate">{acc.label}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================
          FOOTER COPYRIGHT & CREDITS (Clean, Formal Government Style)
          ======================================================== */}
      <footer className="mt-6 text-center text-[11px] text-white/90 z-10 space-y-0.5 drop-shadow-sm">
        <p className="font-semibold text-white">© সার ডিলার ও বিতরণ ব্যবস্থাপনা সিস্টেম — FDMS BANGLADESH</p>
        <p className="text-emerald-100/90 font-medium">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার • Developed by Toufiq &amp; Fahad</p>
      </footer>

    </div>
  )
}
