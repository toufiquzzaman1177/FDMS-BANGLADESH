import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Download,
  Printer,
  Calendar,
  Building2,
  FileCheck2,
  CheckCircle2,
  ChevronDown,
  Layers,
  ArrowDownToLine,
  Eye,
  RefreshCw,
  Search,
  Check,
  FileText
} from 'lucide-react';

export default function GovReportsModule() {
  const [activeForm, setActiveForm] = useState('formKa'); // 'formKa' or 'formKha'
  const [selectedMonth, setSelectedMonth] = useState('নভেম্বর ২০২৬ (কার্তিক ১৪৩১)');
  const [selectedUpazila, setSelectedUpazila] = useState('চাটমোহর, পাবনা');
  const [selectedFertilizer, setSelectedFertilizer] = useState('all');
  const [isExporting, setIsExporting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('approved'); // draft, submitted, approved

  // Form-Ka Data (Dealer distribution statement)
  const formKaRows = [
    {
      id: 1,
      dealer: 'মেসার্স রহমান ট্রেডার্স',
      regNo: 'DLR-2024-001',
      union: 'হরিপুর',
      fertilizer: 'ইউরিয়া',
      opening: 8.5,
      received: 45.0,
      total: 53.5,
      distributed: 42.0,
      closing: 11.5,
      farmers: 184,
      status: 'অনুমোদিত'
    },
    {
      id: 2,
      dealer: 'মেসার্স রহমান ট্রেডার্স',
      regNo: 'DLR-2024-001',
      union: 'হরিপুর',
      fertilizer: 'ডিএপি',
      opening: 4.0,
      received: 20.0,
      total: 24.0,
      distributed: 19.5,
      closing: 4.5,
      farmers: 122,
      status: 'অনুমোদিত'
    },
    {
      id: 3,
      dealer: 'মেসার্স সরকার এন্টারপ্রাইজ',
      regNo: 'DLR-2024-002',
      union: 'বিলচলন',
      fertilizer: 'ইউরিয়া',
      opening: 5.0,
      received: 40.0,
      total: 45.0,
      distributed: 37.0,
      closing: 8.0,
      farmers: 165,
      status: 'অনুমোদিত'
    },
    {
      id: 4,
      dealer: 'মেসার্স সরকার এন্টারপ্রাইজ',
      regNo: 'DLR-2024-002',
      union: 'বিলচলন',
      fertilizer: 'টিএসপি',
      opening: 3.2,
      received: 15.0,
      total: 18.2,
      distributed: 14.0,
      closing: 4.2,
      farmers: 98,
      status: 'অনুমোদিত'
    },
    {
      id: 5,
      dealer: 'মেসার্স আল-মদিনা ফার্টিলাইজার',
      regNo: 'DLR-2024-003',
      union: 'নিমাইচড়া',
      fertilizer: 'ইউরিয়া',
      opening: 6.0,
      received: 35.0,
      total: 41.0,
      distributed: 33.5,
      closing: 7.5,
      farmers: 140,
      status: 'যাচাইাধীন'
    },
    {
      id: 6,
      dealer: 'মেসার্স খান ট্রেডিং কর্পোরেশন',
      regNo: 'DLR-2024-004',
      union: 'হান্ডিয়াল',
      fertilizer: 'এমওপি',
      opening: 2.5,
      received: 12.0,
      total: 14.5,
      distributed: 11.0,
      closing: 3.5,
      farmers: 76,
      status: 'অনুমোদিত'
    },
    {
      id: 7,
      dealer: 'মেসার্স ভাই ভাই এন্টারপ্রাইজ',
      regNo: 'DLR-2024-005',
      union: 'ডিহিভাঙ্গা',
      fertilizer: 'ইউরিয়া',
      opening: 4.8,
      received: 30.0,
      total: 34.8,
      distributed: 28.0,
      closing: 6.8,
      farmers: 115,
      status: 'অনুমোদিত'
    }
  ];

  // Form-Kha Data (Buffer warehouse stock statement)
  const formKhaRows = [
    {
      id: 1,
      godown: 'ঈশ্বরদী বাফার গোডাউন (BCIC)',
      fertilizer: 'ইউরিয়া (গ্র্যানুলার)',
      source: 'কাফকো ও যমুনা সার কারখানা',
      openingStock: 1240.0,
      challanReceipt: 650.0,
      allottedQuota: 550.0,
      dispatchedTon: 520.0,
      transitLossTon: 0.8,
      currentBalance: 1369.2,
      qualityStatus: 'ল্যাব উত্তীর্ণ (BSTI/SRDI)'
    },
    {
      id: 2,
      godown: 'বাঘাবাড়ী ট্রানজিট বাফার',
      fertilizer: 'টিএসপি (আমদানি)',
      source: 'চট্টগ্রাম পোর্ট ট্রানজিট',
      openingStock: 480.0,
      challanReceipt: 200.0,
      allottedQuota: 180.0,
      dispatchedTon: 165.0,
      transitLossTon: 0.3,
      currentBalance: 514.7,
      qualityStatus: 'ল্যাব উত্তীর্ণ'
    },
    {
      id: 3,
      godown: 'ঈশ্বরদী বাফার গোডাউন (BCIC)',
      fertilizer: 'ডিএপি (মরক্কো/সৌদি)',
      source: 'মংলা বন্দর চালান',
      openingStock: 620.0,
      challanReceipt: 250.0,
      allottedQuota: 240.0,
      dispatchedTon: 230.0,
      transitLossTon: 0.5,
      currentBalance: 639.5,
      qualityStatus: 'ল্যাব উত্তীর্ণ'
    },
    {
      id: 4,
      godown: 'বাঘাবাড়ী ট্রানজিট বাফার',
      fertilizer: 'এমওপি (বেলারুশ/কানাডা)',
      source: 'চট্টগ্রাম বন্দর ডিপো',
      openingStock: 350.0,
      challanReceipt: 150.0,
      allottedQuota: 130.0,
      dispatchedTon: 125.0,
      transitLossTon: 0.2,
      currentBalance: 374.8,
      qualityStatus: 'ল্যাব উত্তীর্ণ'
    }
  ];

  const filteredKa = formKaRows.filter(r => {
    if (selectedFertilizer !== 'all' && r.fertilizer !== selectedFertilizer) return false;
    return true;
  });

  const filteredKha = formKhaRows.filter(r => {
    if (selectedFertilizer !== 'all' && !r.fertilizer.includes(selectedFertilizer)) return false;
    return true;
  });

  const totalKaOpening = filteredKa.reduce((s, i) => s + i.opening, 0);
  const totalKaReceived = filteredKa.reduce((s, i) => s + i.received, 0);
  const totalKaDistributed = filteredKa.reduce((s, i) => s + i.distributed, 0);
  const totalKaClosing = filteredKa.reduce((s, i) => s + i.closing, 0);
  const totalKaFarmers = filteredKa.reduce((s, i) => s + i.farmers, 0);

  const totalKhaStock = filteredKha.reduce((s, i) => s + i.currentBalance, 0);
  const totalKhaDispatched = filteredKha.reduce((s, i) => s + i.dispatchedTon, 0);

  const handlePrint = () => {
    window.print();
  };

  const handleExportCSV = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert(`সরকারি ${activeForm === 'formKa' ? 'ফরম-ক' : 'ফরম-খ'} সফলভাবে এক্সেল (CSV) ফরম্যাটে ডাউনলোড হয়েছে।`);
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <FileSpreadsheet className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  কৃষি সম্প্রসারণ অধিদপ্তর (DAE) পরিপত্র মোতাবেক
                </span>
                <span className="text-xs text-slate-400 font-mono">DAE-MIS-REP/2026</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                সরকারি ফরম-ক ও ফরম-খ প্রতিবেদন
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                উপজেলা সার ও বীজ মনিটরিং কমিটির মাসিক বিতরণ হিসাব, বাফার স্টক বিবরণী ও প্রত্যয়ন
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              মুদ্রণ / PDF প্রিন্ট
            </button>
            <button
              onClick={handleExportCSV}
              disabled={isExporting}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors shadow-sm disabled:opacity-50"
            >
              <Download className="w-4 h-4 text-emerald-700" />
              {isExporting ? 'প্রসেসিং...' : 'এক্সেল (CSV) এক্সপোর্ট'}
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              প্রতিবেদনের মাস
            </label>
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={e => setSelectedMonth(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all appearance-none pr-8"
              >
                <option>নভেম্বর ২০২৬ (কার্তিক ১৪৩১)</option>
                <option>অক্টোবর ২০২৬ (আশ্বিন ১৪৩১)</option>
                <option>সেপ্টেম্বর ২০২৬ (ভাদ্র ১৪৩১)</option>
                <option>আগস্ট ২০২৬ (শ্রাবণ ১৪৩১)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              উপজেলা ও জেলা
            </label>
            <div className="relative">
              <select
                value={selectedUpazila}
                onChange={e => setSelectedUpazila(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all appearance-none pr-8"
              >
                <option>চাটমোহর, পাবনা</option>
                <option>ভাঙ্গুড়া, পাবনা</option>
                <option>ফরিদপুর, পাবনা</option>
                <option>ঈশ্বরদী, পাবনা</option>
              </select>
              <Building2 className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              সারের ধরন ফিল্টার
            </label>
            <div className="relative">
              <select
                value={selectedFertilizer}
                onChange={e => setSelectedFertilizer(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all appearance-none pr-8"
              >
                <option value="all">সকল সার (ইউরিয়া, টিএসপি, ডিএপি, এমওপি)</option>
                <option value="ইউরিয়া">ইউরিয়া (Urea)</option>
                <option value="টিএসপি">টিএসপি (TSP)</option>
                <option value="ডিএপি">ডিএপি (DAP)</option>
                <option value="এমওপি">এমওপি (MoP)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              দাখিল ও অনুমোদন স্থিতি
            </label>
            <div className="flex items-center gap-2 h-[35px] px-3 bg-emerald-50/70 border border-emerald-200 rounded-lg text-emerald-900 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>উপজেলা কমিটির চূড়ান্ত অনুমোদন সম্পন্ন</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Tabs Switcher */}
      <div className="flex border-b border-slate-200 gap-2">
        <button
          onClick={() => setActiveForm('formKa')}
          className={`flex items-center gap-2.5 px-5 py-3 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
            activeForm === 'formKa'
              ? 'border-[#14532d] text-[#14532d] bg-white rounded-t-lg'
              : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
          }`}
        >
          <FileText className="w-4 h-4 text-emerald-700" />
          <span>ফরম-ক (ডিলারভিত্তিক মাসিক বিতরণ বিবরণী)</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {filteredKa.length} রেকর্ড
          </span>
        </button>

        <button
          onClick={() => setActiveForm('formKha')}
          className={`flex items-center gap-2.5 px-5 py-3 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
            activeForm === 'formKha'
              ? 'border-[#14532d] text-[#14532d] bg-white rounded-t-lg'
              : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
          }`}
        >
          <Building2 className="w-4 h-4 text-teal-700" />
          <span>ফরম-খ (বাফার গুদাম ও ট্রানজিট মজুত স্থিতি)</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {filteredKha.length} গুদাম
          </span>
        </button>
      </div>

      {/* KPI metric strips */}
      {activeForm === 'formKa' ? (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-medium text-slate-500 block">প্রারম্ভিক মজুত (মে. টন)</span>
            <div className="text-xl font-bold text-slate-800 mt-1 font-mono">{totalKaOpening.toFixed(1)}</div>
            <span className="text-[10px] text-slate-400 mt-0.5 block">১ কার্তিক সকাল ৮:০০</span>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-medium text-slate-500 block">মোট প্রাপ্তি (বাফার হতে)</span>
            <div className="text-xl font-bold text-blue-700 mt-1 font-mono">{totalKaReceived.toFixed(1)}</div>
            <span className="text-[10px] text-blue-600 mt-0.5 block">ডিও ও চালান ভেরিফাইড</span>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-medium text-slate-500 block">কৃষকদের মাঝে বিতরণ</span>
            <div className="text-xl font-bold text-emerald-700 mt-1 font-mono">{totalKaDistributed.toFixed(1)}</div>
            <span className="text-[10px] text-emerald-600 mt-0.5 block">পস/রশিদ এন্ট্রি শতভাগ</span>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-medium text-slate-500 block">সমাপনী মজুত (দোকানে)</span>
            <div className="text-xl font-bold text-slate-800 mt-1 font-mono">{totalKaClosing.toFixed(1)}</div>
            <span className="text-[10px] text-slate-400 mt-0.5 block">পরবর্তী মাসের প্রারম্ভিক</span>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-medium text-slate-500 block">উপকৃত মোট কৃষক</span>
            <div className="text-xl font-bold text-indigo-700 mt-1 font-mono">{totalKaFarmers.toLocaleString('bn-BD')} জন</div>
            <span className="text-[10px] text-indigo-600 mt-0.5 block">কৃষি কার্ড ও এনআইডি সহ</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-medium text-slate-500 block">বাফার গুদাম মোট মজুত</span>
            <div className="text-xl font-bold text-teal-800 mt-1 font-mono">{totalKhaStock.toFixed(1)} মে. টন</div>
            <span className="text-[10px] text-slate-400 mt-0.5 block">নিরাপদ বাফার ক্যাপাসিটি ৮৪%</span>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-medium text-slate-500 block">মাসিক ডিসপ্যাচ (ডিলারে)</span>
            <div className="text-xl font-bold text-slate-800 mt-1 font-mono">{totalKhaDispatched.toFixed(1)} মে. টন</div>
            <span className="text-[10px] text-slate-400 mt-0.5 block">চালান নিশ্চিতকরণ ১০০%</span>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-medium text-slate-500 block">ট্রানজিট লস / সিস্টেম লস</span>
            <div className="text-xl font-bold text-amber-700 mt-1 font-mono">১.৮ মে. টন (০.১৮%)</div>
            <span className="text-[10px] text-amber-600 mt-0.5 block">অনুমোদিত সীমার (০.৫%) নিচে</span>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-medium text-slate-500 block">গুণগত মান পরীক্ষণ (SRDI)</span>
            <div className="text-xl font-bold text-emerald-700 mt-1">ল্যাব টেস্ট উত্তীর্ণ</div>
            <span className="text-[10px] text-emerald-600 mt-0.5 block">ভেজালমুক্ত ও নির্ধারিত আদ্রতা</span>
          </div>
        </div>
      )}

      {/* Main Printable Formal Report Paper Layout */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Formal Government Header for Print & Web */}
        <div className="p-8 text-center border-b border-slate-200 bg-gradient-to-b from-slate-50/70 to-white">
          <div className="inline-block p-2 rounded-full bg-emerald-50 border border-emerald-200 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#14532d] flex items-center justify-center text-white text-xs font-bold font-mono">
              BD
            </div>
          </div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h2>
          <h3 className="text-sm font-semibold text-emerald-900 mt-0.5">কৃষি মন্ত্রণালয় | কৃষি সম্প্রসারণ অধিদপ্তর (DAE)</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            উপজেলা কৃষি অফিসারের কার্যালয়, {selectedUpazila}
          </p>
          <div className="inline-block mt-3 px-4 py-1 rounded-md bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800">
            {activeForm === 'formKa'
              ? 'সরকারি ফরম-ক : ডিলারভিত্তিক মাসিক সার গ্রহণ, বিতরণ ও মজুত বিবরণী'
              : 'সরকারি ফরম-খ : বাফার গোডাউন ও ট্রানজিট সার প্রাপ্তি ও সরবরাহ হিসাব'}
          </div>
          <div className="text-[11px] text-slate-500 mt-2 font-mono">
            প্রতিবেদন প্রস্তুতের সময়কাল: {selectedMonth} | দাখিলের তারিখ: ৩০ নভেম্বর ২০২৬
          </div>
        </div>

        {/* Content Table */}
        <div className="overflow-x-auto">
          {activeForm === 'formKa' ? (
            <table className="w-full text-xs text-left text-slate-700">
              <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase">
                <tr>
                  <th className="py-3 px-4 text-center w-10">ক্রমিক</th>
                  <th className="py-3 px-4">ডিলারের নাম ও কোড</th>
                  <th className="py-3 px-4">ইউনিয়ন</th>
                  <th className="py-3 px-4">সারের ধরন</th>
                  <th className="py-3 px-4 text-right">প্রারম্ভিক (টন)</th>
                  <th className="py-3 px-4 text-right">প্রাপ্তি (টন)</th>
                  <th className="py-3 px-4 text-right">মোট মজুত</th>
                  <th className="py-3 px-4 text-right text-emerald-800">বিতরণ (টন)</th>
                  <th className="py-3 px-4 text-right">সমাপনী (টন)</th>
                  <th className="py-3 px-4 text-center">উপকৃত কৃষক</th>
                  <th className="py-3 px-4 text-center">যাচাই স্থিতি</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredKa.map((row, idx) => (
                  <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 text-center font-mono text-slate-400">
                      {(idx + 1).toString().padStart(2, '0')}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-800">{row.dealer}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{row.regNo}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-600 font-medium">{row.union}</td>
                    <td className="py-3 px-4">
                      <span className="font-semibold text-slate-800 px-2 py-0.5 rounded bg-slate-100">
                        {row.fertilizer}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-mono">{row.opening.toFixed(1)}</td>
                    <td className="py-3 px-4 text-right font-mono text-blue-700 font-semibold">
                      +{row.received.toFixed(1)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-medium">{row.total.toFixed(1)}</td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-700 font-bold">
                      {row.distributed.toFixed(1)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-semibold text-slate-800">
                      {row.closing.toFixed(1)}
                    </td>
                    <td className="py-3 px-4 text-center font-mono text-slate-700 font-medium">
                      {row.farmers.toLocaleString('bn-BD')}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          row.status === 'অনুমোদিত'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        <Check className="w-3 h-3" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {/* Total Row */}
                <tr className="bg-slate-50/90 font-bold text-slate-800 border-t-2 border-slate-300">
                  <td colSpan={4} className="py-3 px-4 text-right text-xs">
                    সর্বমোট যোগফল ({selectedUpazila}):
                  </td>
                  <td className="py-3 px-4 text-right font-mono">{totalKaOpening.toFixed(1)}</td>
                  <td className="py-3 px-4 text-right font-mono text-blue-700">{totalKaReceived.toFixed(1)}</td>
                  <td className="py-3 px-4 text-right font-mono">
                    {(totalKaOpening + totalKaReceived).toFixed(1)}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-emerald-800">
                    {totalKaDistributed.toFixed(1)}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-slate-900">{totalKaClosing.toFixed(1)}</td>
                  <td className="py-3 px-4 text-center font-mono text-indigo-700">
                    {totalKaFarmers.toLocaleString('bn-BD')}
                  </td>
                  <td className="py-3 px-4 text-center text-xs font-semibold text-emerald-800">
                    ১০০% নির্ভুল
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="w-full text-xs text-left text-slate-700">
              <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase">
                <tr>
                  <th className="py-3 px-4 text-center w-10">ক্রমিক</th>
                  <th className="py-3 px-4">বাফার গুদামের নাম</th>
                  <th className="py-3 px-4">সারের ধরন ও উৎস</th>
                  <th className="py-3 px-4 text-right">প্রারম্ভিক (টন)</th>
                  <th className="py-3 px-4 text-right">কারখানা হতে প্রাপ্তি</th>
                  <th className="py-3 px-4 text-right">বরাদ্দকৃত কোটা</th>
                  <th className="py-3 px-4 text-right text-emerald-800">ডিলারে সরবরাহ</th>
                  <th className="py-3 px-4 text-right text-amber-700">ট্রানজিট লস</th>
                  <th className="py-3 px-4 text-right">বর্তমান মজুত</th>
                  <th className="py-3 px-4 text-center">মান নিয়ন্ত্রণ স্থিতি</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredKha.map((row, idx) => (
                  <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 text-center font-mono text-slate-400">
                      {(idx + 1).toString().padStart(2, '0')}
                    </td>
                    <td className="py-3 px-4 font-semibold text-slate-800">{row.godown}</td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-800">{row.fertilizer}</div>
                      <div className="text-[10px] text-slate-500">{row.source}</div>
                    </td>
                    <td className="py-3 px-4 text-right font-mono">{row.openingStock.toFixed(1)}</td>
                    <td className="py-3 px-4 text-right font-mono text-blue-700 font-semibold">
                      +{row.challanReceipt.toFixed(1)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono">{row.allottedQuota.toFixed(1)}</td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-emerald-700">
                      {row.dispatchedTon.toFixed(1)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono text-amber-700">
                      {row.transitLossTon.toFixed(1)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-slate-900">
                      {row.currentBalance.toFixed(1)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {row.qualityStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Official Signatures Section */}
        <div className="p-8 border-t border-slate-200 bg-slate-50/40">
          <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-6">
            দায়িত্বপ্রাপ্ত কর্মকর্তাবৃন্দের যৌথ প্রত্যয়ন ও স্বাক্ষর:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="text-center">
              <div className="h-10 flex items-end justify-center font-serif italic text-slate-400 text-xs">
                স্বাক্ষরিত (ডিজিটাল ভেরিফিকেশন সম্পন্ন)
              </div>
              <div className="w-48 mx-auto border-t border-slate-400 mt-1 pt-1">
                <div className="text-xs font-bold text-slate-800">মোঃ শহিদুল ইসলাম</div>
                <div className="text-[11px] text-slate-500">উপসহকারী কৃষি কর্মকর্তা (SAAO)</div>
                <div className="text-[10px] text-slate-400">চাটমোহর, পাবনা</div>
              </div>
            </div>

            <div className="text-center">
              <div className="h-10 flex items-end justify-center font-serif italic text-emerald-700 text-xs font-semibold">
                যাচাই ও সুপারিশকৃত (Gov ID: 94812)
              </div>
              <div className="w-48 mx-auto border-t border-slate-400 mt-1 pt-1">
                <div className="text-xs font-bold text-slate-800">ড. আহমেদ রফিক</div>
                <div className="text-[11px] text-slate-500">উপজেলা কৃষি অফিসার (UAO)</div>
                <div className="text-[10px] text-slate-400">সদস্য সচিব, উপজেলা সার কমিটি</div>
              </div>
            </div>

            <div className="text-center">
              <div className="h-10 flex items-end justify-center font-serif italic text-emerald-800 text-xs font-semibold">
                অনুমোদিত (সার মনিটরিং কমিটি)
              </div>
              <div className="w-48 mx-auto border-t border-slate-400 mt-1 pt-1">
                <div className="text-xs font-bold text-slate-800">তানজিনা চৌধুরী</div>
                <div className="text-[11px] text-slate-500">উপজেলা নির্বাহী অফিসার (UNO)</div>
                <div className="text-[10px] text-slate-400">সভাপতি, উপজেলা সার কমিটি</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400">
            <div>
              * অত্র সরকারি প্রতিবেদনটি জাতীয় কৃষি তথ্য ভান্ডার (DAE Enterprise MIS) ডাটাবেজের সাথে হুবহু সামঞ্জস্যপূর্ণ।
            </div>
            <div className="font-mono">
              স্মারক নং: ১২.০১.৭৬০০.০১৫.১৮.০৪.২৬-৩২১
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

