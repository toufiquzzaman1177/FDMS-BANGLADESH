import { useState, useEffect } from 'react'
import logoImg from '../assets/logo.jpg'
import { 
  Sprout, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  CheckCircle2, 
  AlertCircle 
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
    { label: '১. সুপার অ্যাডমিন (MoA/HQ)', id: 'hq.admin@moa.gov.bd', pass: 'admin123', role: 'সুপার অ্যাডমিন (MoA / DAE HQ)', name: 'ড. মোস্তাফিজুর রহমান' },
    { label: '২. উপজেলা অ্যাডমিন (UNO/UAO)', id: 'uao.chatmohar@dae.gov.bd', pass: 'uao12345', role: 'উপজেলা অ্যাডমিন (UNO / UAO)', name: 'ড. আহমেদ রফিক' },
    { label: '৩. ইউনিয়ন সার ডিলার (Dealer)', id: 'dealer.union1@fdms.gov.bd', pass: 'dealer123', role: 'ইউনিয়ন সার ডিলার (Dealer)', name: 'আলহাজ্ব মোকাররম হোসেন' },
    { label: '৪. ওয়ার্ড বিক্রয়কেন্দ্র POS', id: 'pos.ward3@fdms.gov.bd', pass: 'pos12345', role: 'ওয়ার্ড বিক্রয়কেন্দ্র অপারেটর (POS)', name: 'মোঃ শফিকুল ইসলাম' },
    { label: '৫. মাঠ কর্মকর্তা (SAAO)', id: 'saao.block1@dae.gov.bd', pass: 'saao12345', role: 'মাঠ কর্মকর্তা (SAAO / উপসহকারী)', name: 'মোঃ শহিদুল ইসলাম' },
    { label: '৬. সাধারণ কৃষক ও নাগরিক', id: 'citizen@fdms.gov.bd', pass: 'public123', role: 'সাধারণ কৃষক ও নাগরিক (Public User)', name: 'উন্মুক্ত নাগরিক' }
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
    }, 900)
  }

  return (
    <div className="min-h-screen w-full bg-[#f4f7f4] relative flex flex-col justify-between items-center py-8 px-4 overflow-hidden select-none">
      
      {/* ========================================================
          DECORATIVE BOTANICAL WATERMARKS (Left & Right background)
          ======================================================== */}
      {/* Left Leaf Silhouettes */}
      <div className="absolute left-[-60px] sm:left-[-20px] lg:left-8 top-1/4 -translate-y-1/2 pointer-events-none opacity-25 lg:opacity-35 transition-opacity">
        <svg width="220" height="420" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-700">
          <path d="M100 380V40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Leaves along stem */}
          <path d="M98 320C60 310 30 270 30 230C70 230 95 280 98 320Z" fill="currentColor" opacity="0.4" />
          <path d="M102 280C140 270 170 230 170 190C130 190 105 240 102 280Z" fill="currentColor" opacity="0.4" />
          <path d="M98 220C60 210 30 170 30 130C70 130 95 180 98 220Z" fill="currentColor" opacity="0.4" />
          <path d="M102 170C140 160 170 120 170 80C130 80 105 130 102 170Z" fill="currentColor" opacity="0.4" />
          <path d="M98 100C75 90 55 60 55 30C85 30 96 70 98 100Z" fill="currentColor" opacity="0.4" />
          <path d="M100 40C100 20 110 5 120 5C120 20 110 35 100 40Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Right Leaf Silhouettes */}
      <div className="absolute right-[-60px] sm:right-[-20px] lg:right-8 bottom-1/6 pointer-events-none opacity-25 lg:opacity-35 transition-opacity">
        <svg width="220" height="420" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-700">
          <path d="M100 380V40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M98 320C60 310 30 270 30 230C70 230 95 280 98 320Z" fill="currentColor" opacity="0.4" />
          <path d="M102 280C140 270 170 230 170 190C130 190 105 240 102 280Z" fill="currentColor" opacity="0.4" />
          <path d="M98 220C60 210 30 170 30 130C70 130 95 180 98 220Z" fill="currentColor" opacity="0.4" />
          <path d="M102 170C140 160 170 120 170 80C130 80 105 130 102 170Z" fill="currentColor" opacity="0.4" />
          <path d="M98 100C75 90 55 60 55 30C85 30 96 70 98 100Z" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      {/* ========================================================
          TOP NAVIGATION BAR (Back to Home button)
          ======================================================== */}
      <div className="w-full max-w-6xl flex justify-start items-center z-10 mb-4 sm:mb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-emerald-800 hover:text-emerald-900 text-sm font-medium rounded-xl shadow-xs hover:shadow-sm border border-emerald-100 transition-all transform hover:-translate-x-0.5 active:translate-x-0 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-700" />
          <span>হোম পেজে ফিরুন</span>
        </button>
      </div>

      {/* ========================================================
          MAIN LOGIN CARD (Exact match to target design)
          ======================================================== */}
      <div className="w-full max-w-[430px] sm:max-w-[460px] bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100/80 p-8 sm:p-10 z-10 transition-all duration-300">
        
        {/* Top Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src={logoImg} 
            alt="SarDistributor Logo" 
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-xl hover:scale-105 transition-transform duration-200" 
          />
        </div>

        {/* Title & Subtitle */}
        <div className="text-center mb-7">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            উপজেলা সার বিতরণ
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 -mt-0.5">
            ব্যবস্থাপনা সিস্টেম
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
            উপজেলা কৃষি অফিসার — লংগদু, রাঙ্গামাটি
          </p>
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Login Success Notification */}
        {loginSuccessRole && (
          <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>সফলভাবে যাচাই হয়েছে! প্রবেশ করা হচ্ছে: <strong>{loginSuccessRole}</strong></span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email / ID Field */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 text-left">
              ইমেইল
            </label>
            <div className="relative">
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="name@example.com বা ইউজার আইডি"
                className="w-full px-3.5 py-2.5 sm:py-3 bg-white text-slate-800 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 text-left">
              পাসওয়ার্ড
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 sm:py-3 bg-white text-slate-800 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent transition-all placeholder:text-slate-400 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
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
            className="w-full mt-2 py-3 px-4 bg-[#2e8b57] hover:bg-[#257347] active:bg-[#1f5f3a] text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
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

        {/* Instructional Note (Matching target image text) */}
        <p className="text-[12px] sm:text-xs text-slate-500 text-center leading-relaxed mt-5">
          অ্যাডমিন, UNO, ডিলার, POS অপারেটর ও মাঠ কর্মকর্তা — সবাই একই ফর্ম দিয়ে লগইন করবেন। আপনার রোল অনুযায়ী নির্দিষ্ট কন্ট্রোল প্যানেল খুলবে।
        </p>

        {/* Public Citizen Portal Direct Link */}
        <div className="mt-4 text-center">
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
            className="w-full py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-[#14532d] border border-emerald-300 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>🌐 কোনো লগইন ছাড়াই উন্মুক্ত নাগরিক সেবা দেখুন</span>
          </button>
        </div>

        {/* Quick Demo Selector for Presentation */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <p className="text-[11px] text-slate-400 text-center mb-2 font-medium">
            ৬টি স্টেকহোল্ডার রোলে দ্রুত লগইন টেস্ট করুন:
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {demoAccounts.map((acc, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleQuickFill(acc)}
                className="text-[10.5px] py-1.5 px-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 rounded-lg border border-slate-200 transition-colors text-left truncate cursor-pointer font-medium"
              >
                {acc.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================
          FOOTER COPYRIGHT & CREDITS (Matching target style)
          ======================================================== */}
      <footer className="mt-8 text-center text-xs text-slate-500 z-10">
        <p>© FDMS BANGLADESH — All Rights Reserved · Developed by Toufiq &amp; Fahad</p>
      </footer>

    </div>
  )
}

