import React from 'react'
import logoImg from '../assets/logo.jpg'
import {
  User,
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  Calendar,
  Award,
  CheckCircle2,
  Printer,
  X,
  Lock,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react'

export default function UserProfileModal({ isOpen, onClose, activeRole, onSwitchRole, roles = [] }) {
  if (!isOpen) return null

  // Role Profile Detailed Database
  const profileDetailsMap = {
    'super-admin': {
      banglaDesignation: 'যুগ্ম সচিব (ইনপুট ও সার অনুবিভাগ)',
      englishDesignation: 'Joint Secretary (Fertilizer & Inputs)',
      office: 'কৃষি মন্ত্রণালয়, বাংলাদেশ সচিবালয়, ঢাকা-১০০০',
      division: 'ঢাকা বিভাগ • সচিবালয় সদর দপ্তর',
      jurisdiction: 'জাতীয় পর্যায় (সমগ্র বাংলাদেশ — ৬৪ জেলা)',
      email: 'hq.admin@moa.gov.bd',
      phone: '+880 1711-987654',
      nid: '19722691234567890',
      govId: 'MOA-HQ-SEC-001',
      clearanceLevel: 'লেভেল-১ (সর্বোচ্চ নীতি নির্ধারণ ও কোটা বরাদ্দ)',
      joiningDate: '১২ জানুয়ারি, ২০১৯',
      training: 'ন্যাশনাল পলিসি অ্যান্ড গভর্ন্যান্স ট্রেইনিং (বিপিএটিসি)',
      securityStatus: 'বায়োমেট্রিক ও সিক্রেট কি ভেরিফাইড (Active)',
      bufferLinked: 'কেন্দ্রীয় বিসিআইসি ও বিএডিসি হেডকোয়ার্টার্স'
    },
    'upazila-admin': {
      banglaDesignation: 'উপজেলা কৃষি কর্মকর্তা (UAO)',
      englishDesignation: 'Upazila Agriculture Officer',
      office: 'উপজেলা কৃষি অফিস, চাটমোহর, পাবনা',
      division: 'রাজশাহী বিভাগ • পাবনা জেলা • চাটমোহর উপজেলা',
      jurisdiction: 'চাটমোহর উপজেলা (৮টি ইউনিয়ন ও ১টি পৌরসভা)',
      email: 'uao.chatmohar@dae.gov.bd',
      phone: '+880 1711-234567',
      nid: '19857612345678901',
      govId: 'DAE-UAO-2023-441',
      clearanceLevel: 'লেভেল-২ (উপজেলা প্রধান নির্বাহী ও ডিও অনুমোদন)',
      joiningDate: '১৫ মার্চ, ২০২১',
      training: 'ডিজিটাল কৃষি এক্সটেনশন ও অডিট ট্রেইনিং (DAE)',
      securityStatus: 'ট্রেজারি চালানে ডিজিটাল সাক্ষর ভেরিফাইড (Active)',
      bufferLinked: 'পাবনা বিসিআইসি বাফার গুদাম'
    },
    'union-dealer': {
      banglaDesignation: 'অনুমোদিত ইউনিয়ন সার ডিলার (BCIC Licensee)',
      englishDesignation: 'Licensed Union Fertilizer Dealer',
      office: 'মেসার্স হোসেন ট্রেডার্স, ৩ নং বাট্টাজোড় বাজার, চাটমোহর',
      division: 'রাজশাহী বিভাগ • পাবনা জেলা • চাটমোহর উপজেলা',
      jurisdiction: '৩ নং বাট্টাজোড় ইউনিয়ন (ওয়ার্ড নং ০১, ০২ ও ০৩)',
      email: 'dealer.union1@fdms.gov.bd',
      phone: '+880 1819-345678',
      nid: '19687612345678902',
      govId: 'BCIC-DLR-PAB-102',
      clearanceLevel: 'লেভেল-৩ (বাফার উত্তোলন ও ৩টি ওয়ার্ডে স্টক ট্রান্সফার)',
      joiningDate: '০১ জুলাই, ২০১৮',
      training: 'সোনালী ব্যাংক ট্রেজারি চালান ও স্টক সুরক্ষা কোর্স',
      securityStatus: '৫ লক্ষ টাকা ব্যাংক জামানত হালনাগাদ (Active)',
      bufferLinked: 'পাবনা বাফার গুদাম'
    },
    'ward-pos': {
      banglaDesignation: 'অনুমোদিত ওয়ার্ড বিক্রয়কেন্দ্র পিওএস অপারেটর',
      englishDesignation: 'Certified Ward POS Terminal Operator',
      office: 'ওয়ার্ড আউটলেট নং ০২, বাট্টাজোড় মধ্যপাড়া',
      division: 'রাজশাহী বিভাগ • পাবনা জেলা • চাটমোহর উপজেলা',
      jurisdiction: 'ওয়ার্ড নং ০২, বাট্টাজোড় ইউনিয়ন',
      email: 'pos.ward3@fdms.gov.bd',
      phone: '+880 1912-456789',
      nid: '19927612345678903',
      govId: 'POS-OPR-2024-89',
      clearanceLevel: 'লেভেল-৪ (কৃষক NID সিলিং যাচাই ও কিউআর ক্যাশ মেমো)',
      joiningDate: '১০ ফেব্রুয়ারি, ২০২৪',
      training: 'স্মার্ট কৃষি পিওএস ডিভাইস ও কিউআর মেমো প্রশিক্ষণ',
      securityStatus: 'উপজেলা কৃষি অফিস কর্তৃক অনুমোদিত অপারেটর (Active)',
      bufferLinked: '৩ নং বাট্টাজোড় প্রধান ডিলার গোডাউন'
    },
    'field-saao': {
      banglaDesignation: 'উপসহকারী কৃষি কর্মকর্তা (SAAO)',
      englishDesignation: 'Sub-Assistant Agriculture Officer',
      office: 'ব্লক কৃষি পরামর্শ কেন্দ্র, বাট্টাজোড়, চাটমোহর',
      division: 'রাজশাহী বিভাগ • পাবনা জেলা • চাটমোহর উপজেলা',
      jurisdiction: 'বাট্টাজোড় ব্লক (ওয়ার্ড ১, ২ ও ৩ - কৃষক সংখ্যা ৮৫০+)',
      email: 'saao.block1@dae.gov.bd',
      phone: '+880 1613-567890',
      nid: '19887612345678904',
      govId: 'DAE-SAAO-2021-31',
      clearanceLevel: 'লেভেল-৩ (সরেজমিনে জিপিএস স্টক পরিদর্শন ও সার অডিট)',
      joiningDate: '০৫ সেপ্টেম্বর, ২০২১',
      training: 'মাঠ পরিদর্শন, ফসল সিলিং ও মোবাইল অডিট সিস্টেম',
      securityStatus: 'অনুমোদিত মাঠ কর্মকর্তা (Active Verified)',
      bufferLinked: 'চাটমোহর উপজেলা কৃষি অফিস'
    },
    'public-citizen': {
      banglaDesignation: 'প্রান্তিক কৃষক ও সাধারণ সেবাগ্রহীতা নাগরিক',
      englishDesignation: 'Public Citizen & Beneficiary Farmer',
      office: 'উন্মুক্ত নাগরিক সেবা প্ল্যাটফর্ম, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার',
      division: 'সারাদেশে উন্মুক্ত এক্সেস',
      jurisdiction: 'সর্বজনীন নাগরিক সেবা (লগইন ব্যতীত উন্মুক্ত)',
      email: 'citizen@fdms.gov.bd',
      phone: '+880 1515-678901',
      nid: '19957612345678905',
      govId: 'PUB-CITIZEN-OPEN',
      clearanceLevel: 'উন্মুক্ত নাগরিক সেবা (লাইভ মূল্যবোর্ড ও অভিযোগ বক্স)',
      joiningDate: 'উন্মুক্ত',
      training: 'নাগরিক সেবা ও কৃষক কার্ড ব্যবহারের সাধারণ নিয়মাবলী',
      securityStatus: 'উন্মুক্ত নাগরিক এক্সেস (Active)',
      bufferLinked: 'নিকটস্থ অনুমোদিত ডিলার ও বিক্রয়কেন্দ্র'
    }
  }

  const currentDetails = profileDetailsMap[activeRole?.id] || profileDetailsMap['upazila-admin']

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in select-none">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* ========================================================
            MODAL HEADER (Deep Forest Green Bangladesh GovMIS)
            ======================================================== */}
        <div className="bg-[#14532d] text-white px-4 sm:px-6 py-4 flex items-center justify-between border-b border-emerald-900/50">
          <div className="flex items-center space-x-3">
            <img
              src={logoImg}
              alt="Gov Logo"
              className="w-10 h-10 rounded-full border border-white/30 bg-white object-cover shadow-xs"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold tracking-tight">
                  কর্মকর্তা / ব্যবহারকারী পরিচিতি ও প্রোফাইল
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-800 text-emerald-100 border border-emerald-600/40">
                  GovMIS Verified
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/90">
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার • কৃষি সম্প্রসারণ অধিদপ্তর (DAE)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            title="বন্ধ করুন"
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ========================================================
            MODAL BODY (Scrollable, Clean Formal Design)
            ======================================================== */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs">

          {/* User Hero Identity Card */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 shadow-2xs">
            <div className="relative">
              <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl ${activeRole?.color || 'bg-[#14532d]'} text-white flex items-center justify-center text-xl font-bold border-2 border-white shadow-sm shrink-0`}>
                {activeRole?.name ? activeRole.name.charAt(0) : 'অ'}
              </div>
              <span 
                className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-600 text-white border-2 border-white flex items-center justify-center"
                title="ভেরিফাইড আইডি"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    {activeRole?.name || 'ব্যবহারকারী'}
                  </h4>
                  <p className="text-xs font-semibold text-emerald-800">
                    {currentDetails.banglaDesignation}
                  </p>
                  <p className="text-[11px] text-slate-500 font-sans">
                    {currentDetails.englishDesignation}
                  </p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-1">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-[10.5px] font-bold">
                    {currentDetails.govId}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    আইডি নম্বর
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-600">
                <span className="inline-flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  {currentDetails.office}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {/* Official Credentials */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 space-y-2.5 shadow-2xs">
              <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 pb-1 border-b border-slate-100">
                <Award className="w-3.5 h-3.5 text-emerald-800" />
                <span>দাপ্তরিক পরিচিতি ও নিয়োগ তথ্য</span>
              </h5>

              <div className="space-y-1.5 text-[11.5px]">
                <div className="flex justify-between py-1 border-b border-slate-100/60">
                  <span className="text-slate-500">স্টেকহোল্ডার ভূমিকা:</span>
                  <span className="font-semibold text-slate-800 text-right">{activeRole?.label}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100/60">
                  <span className="text-slate-500">সরকারি গেজেট/আইডি:</span>
                  <span className="font-mono font-bold text-slate-800">{currentDetails.govId}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100/60">
                  <span className="text-slate-500">জাতীয় পরিচয়পত্র (NID):</span>
                  <span className="font-mono font-semibold text-slate-800">{currentDetails.nid}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100/60">
                  <span className="text-slate-500">নিয়োগ / কার্যকাল শুরুর তারিখ:</span>
                  <span className="font-medium text-slate-700">{currentDetails.joiningDate}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">সংযুক্ত বাফার গুদাম:</span>
                  <span className="font-semibold text-emerald-900 text-right">{currentDetails.bufferLinked}</span>
                </div>
              </div>
            </div>

            {/* Jurisdiction & Security */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 space-y-2.5 shadow-2xs">
              <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 pb-1 border-b border-slate-100">
                <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                <span>এখতিয়ার ও যোগাযোগ তথ্য</span>
              </h5>

              <div className="space-y-1.5 text-[11.5px]">
                <div className="flex justify-between py-1 border-b border-slate-100/60">
                  <span className="text-slate-500">প্রশাসনিক অঞ্চল:</span>
                  <span className="font-medium text-slate-800 text-right">{currentDetails.division}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100/60">
                  <span className="text-slate-500">দায়িত্বপ্রাপ্ত এলাকা:</span>
                  <span className="font-semibold text-emerald-900 text-right">{currentDetails.jurisdiction}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100/60">
                  <span className="text-slate-500">দাপ্তরিক মোবাইল:</span>
                  <span className="font-mono font-semibold text-slate-800">{currentDetails.phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100/60">
                  <span className="text-slate-500">দাপ্তরিক ইমেইল:</span>
                  <span className="font-mono text-slate-700">{currentDetails.email}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">নিরাপত্তা ও অথেন্টিকেশন:</span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-[10.5px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    সক্রিয় ও অনুমোদিত
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Governance Responsibility Summary */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3.5 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
              <h6 className="font-bold text-emerald-950 text-xs">
                প্রশাসনিক দায়িত্ব ও এখতিয়ার বিবরণী
              </h6>
            </div>
            <p className="text-[11.5px] text-slate-700 leading-relaxed">
              {activeRole?.description || currentDetails.clearanceLevel}
            </p>
          </div>

          {/* Quick Stakeholder Role Switcher for Demo / Presentation */}
          {roles && roles.length > 0 && onSwitchRole && (
            <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 space-y-2 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">
                  প্রেজেন্টেশন: অন্য স্টেকহোল্ডার হিসেবে প্রোফাইল সুইচ করুন
                </span>
                <span className="text-[10px] text-slate-400">মোট ৬টি রোল</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {roles.map(r => (
                  <button
                    key={r.id}
                    onClick={() => onSwitchRole(r)}
                    className={`py-1.5 px-2 rounded-lg text-left text-[11px] font-medium transition-all flex items-center gap-1.5 cursor-pointer border ${
                      activeRole?.id === r.id
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-2xs'
                        : 'bg-slate-50 border-slate-200 hover:bg-emerald-50/50 hover:border-emerald-200 text-slate-700'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${r.color} shrink-0`}></span>
                    <span className="truncate">{r.label.split('(')[0].trim()}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ========================================================
            MODAL FOOTER (Action Buttons)
            ======================================================== */}
        <div className="bg-slate-50 border-t border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span>আইডি কার্ড প্রিন্ট</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#14532d] hover:bg-[#166534] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-xs"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  )
}

