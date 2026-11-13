import React from 'react'
import logoImg from '../../assets/logo.jpg'
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
  Lock,
  Layers,
  Sparkles,
  ExternalLink,
  Edit3,
  FileText
} from 'lucide-react'

export default function UserProfileModule({ activeRole }) {
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

  const details = profileDetailsMap[activeRole?.id] || profileDetailsMap['upazila-admin']

  return (
    <div className="space-y-4">
      {/* Header Profile Identity Banner */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
            <div className="relative">
              <div className={`w-20 h-20 rounded-2xl ${activeRole?.color || 'bg-[#14532d]'} text-white flex items-center justify-center text-2xl font-bold shadow-xs`}>
                {activeRole?.name ? activeRole.name.charAt(0) : 'অ'}
              </div>
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-600 text-white border-2 border-white flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                <h2 className="text-xl font-bold text-slate-900">{activeRole?.name}</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                  {details.govId}
                </span>
              </div>
              <p className="text-sm font-semibold text-emerald-800">{details.banglaDesignation}</p>
              <p className="text-xs text-slate-500 font-sans">{details.englishDesignation}</p>
              <p className="text-xs text-slate-600 flex items-center justify-center md:justify-start gap-1 pt-1">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{details.office}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>আইডি কার্ড প্রিন্ট</span>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Official Credentials */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 space-y-3 shadow-2xs">
          <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 pb-2 border-b border-slate-100">
            <Award className="w-4 h-4 text-emerald-800" />
            <span>দাপ্তরিক পরিচিতি ও নিয়োগ তথ্য</span>
          </h3>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">স্টেকহোল্ডার ভূমিকা:</span>
              <span className="font-semibold text-slate-800">{activeRole?.label}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">সরকারি গেজেট/আইডি:</span>
              <span className="font-mono font-bold text-slate-800">{details.govId}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">জাতীয় পরিচয়পত্র (NID):</span>
              <span className="font-mono font-semibold text-slate-800">{details.nid}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">নিয়োগের তারিখ:</span>
              <span className="font-medium text-slate-700">{details.joiningDate}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">সংযুক্ত বাফার গুদাম:</span>
              <span className="font-semibold text-emerald-900">{details.bufferLinked}</span>
            </div>
          </div>
        </div>

        {/* Jurisdiction & Security */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 space-y-3 shadow-2xs">
          <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 pb-2 border-b border-slate-100">
            <MapPin className="w-4 h-4 text-emerald-800" />
            <span>এখতিয়ার ও যোগাযোগ তথ্য</span>
          </h3>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">প্রশাসনিক অঞ্চল:</span>
              <span className="font-medium text-slate-800">{details.division}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">দায়িত্বপ্রাপ্ত এলাকা:</span>
              <span className="font-semibold text-emerald-900">{details.jurisdiction}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">দাপ্তরিক মোবাইল:</span>
              <span className="font-mono font-semibold text-slate-800">{details.phone}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">দাপ্তরিক ইমেইল:</span>
              <span className="font-mono text-slate-700">{details.email}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">নিরাপত্তা ও অথেন্টিকেশন:</span>
              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                {details.securityStatus}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Role Governance Responsibility */}
      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 space-y-2">
        <h3 className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
          <FileText className="w-4 h-4 text-emerald-800" />
          <span>প্রশাসনিক দায়িত্ব ও এখতিয়ার বিবরণী</span>
        </h3>
        <p className="text-xs text-slate-700 leading-relaxed">
          {activeRole?.description}
        </p>
      </div>
    </div>
  )
}

