import React, { useState } from 'react';
import {
  Download,
  FileSpreadsheet,
  FileText,
  Calendar,
  CheckCircle2,
  Filter,
  Check,
  Layers,
  Archive,
  Database
} from 'lucide-react';

export default function DataExportModule() {
  const [selectedFormat, setSelectedFormat] = useState('csv');
  const [dateRange, setDateRange] = useState('currentSeason');
  const [downloadingId, setDownloadingId] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  const datasets = [
    {
      id: 'dealers',
      title: 'অনুমোদিত ডিলার তালিকা ও ব্যাংক জামানত রেজিস্টার',
      description: 'উপজেলার সকল ডিলারের লাইসেন্স নম্বর, গুদাম ক্যাপাসিটি ও সোনালী ব্যাংক সিকিউরিটি তথ্য।',
      recordsCount: '৬ টি ডিলার',
      size: '২৪ KB',
      formats: ['CSV', 'XLSX', 'PDF']
    },
    {
      id: 'farmers',
      title: 'নিবন্ধিত কৃষক ডেটাবেজ ও ফসলি জমির সিলিং তালিকা',
      description: 'কৃষকের জাতীয় পরিচয়পত্র, কৃষি কার্ড নম্বর, জমির পরিমাণ এবং মৌসুমভিত্তিক বরাদ্দকৃত কোটা।',
      recordsCount: '৬৪ জন কৃষক',
      size: '১১৮ KB',
      formats: ['CSV', 'XLSX']
    },
    {
      id: 'distribution',
      title: 'সার বিতরণ রেকর্ড ও ডিজিটাল ক্যাশ মেমো হিস্ট্রি',
      description: 'প্রতিটি লেনদেনের ভাউচার নং, তারিখ, কৃষকের তথ্য, সারের প্রকার, কেজি ও সংগৃহীত সরকারি মূল্য।',
      recordsCount: '২১১ টি বিতরণ',
      size: '৩৪০ KB',
      formats: ['CSV', 'XLSX', 'PDF']
    },
    {
      id: 'govReports',
      title: 'সরকারি ফরম-ক ও ফরম-খ মাসিক সংকলন বিবরণী',
      description: 'কৃষি সম্প্রসারণ অধিদপ্তরের নির্ধারিত ছকে প্রস্তুতকৃত যৌথ স্বাক্ষরিত সরকারি মাসিক প্রতিবেদন।',
      recordsCount: 'চলতি মাস (নভেম্বর)',
      size: '৫১২ KB',
      formats: ['PDF', 'XLSX']
    },
    {
      id: 'stock',
      title: 'সার মজুত ও গুদাম ইনভেন্টরি লেজার (Urea, TSP, DAP, MoP)',
      description: 'বাফার গোডাউন থেকে প্রাপ্ত চালান, ওয়ার্ড আউটলেটে ট্রান্সফার এবং বর্তমান সমাপনী মজুত।',
      recordsCount: '৬টি গুদাম লেজার',
      size: '৮৫ KB',
      formats: ['CSV', 'XLSX']
    },
    {
      id: 'mobileCourt',
      title: 'মোবাইল কোর্ট অভিযান ও কৃষক অভিযোগ নিষ্পত্তি রেজিস্টার',
      description: 'ভ্রাম্যমাণ আদালতের জরিমানা আদেশ, জব্দকৃত সার নিলাম ও জিআরএস অভিযোগ সমাধানের লগ।',
      recordsCount: '১২টি কেস রেকর্ড',
      size: '৭৪ KB',
      formats: ['PDF', 'CSV']
    }
  ];

  const handleDownload = (dataset) => {
    setDownloadingId(dataset.id);
    setTimeout(() => {
      setDownloadingId(null);
      setToastMsg(`"${dataset.title}" সফলভাবে ${selectedFormat.toUpperCase()} ফরম্যাটে ডাউনলোড সম্পন্ন হয়েছে।`);
      setTimeout(() => setToastMsg(null), 3500);
    }, 900);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#14532d] text-white text-xs font-semibold rounded-xl shadow-lg border border-emerald-700 animate-slide-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <Download className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  সরকারি ডেটা এক্সপোর্ট সেন্টার
                </span>
                <span className="text-xs text-slate-400 font-mono">EXPORT-MIS-DAE</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                ডেটা এক্সপোর্ট ও ডাউনলোড সেন্টার
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                ডিলার, কৃষক, বিতরণ ও গুদাম মজুতের ডাটাবেজ এক্সেল (CSV/XLSX) ও সরকারি প্রত্যয়নযোগ্য PDF ফরম্যাটে সংরক্ষণ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-700" />
              <span>ইউনিকোড (UTF-8) বাংলা ফন্ট এনকোডেড</span>
            </div>
          </div>
        </div>

        {/* Global Format Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">পছন্দসই ফাইল ফরম্যাট:</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-xs font-medium">
              <button
                onClick={() => setSelectedFormat('csv')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedFormat === 'csv' ? 'bg-[#14532d] text-white font-bold shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                CSV (.csv)
              </button>
              <button
                onClick={() => setSelectedFormat('xlsx')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedFormat === 'xlsx' ? 'bg-[#14532d] text-white font-bold shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Excel (.xlsx)
              </button>
              <button
                onClick={() => setSelectedFormat('pdf')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedFormat === 'pdf' ? 'bg-[#14532d] text-white font-bold shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                PDF (.pdf)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">সময়সীমা:</span>
            <select
              value={dateRange}
              onChange={e => setDateRange(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:border-emerald-600"
            >
              <option value="currentSeason">চলতি মৌসুম (রবি ২০২৬-২৭)</option>
              <option value="currentMonth">চলতি মাস (নভেম্বর ২০২৬)</option>
              <option value="allTime">সম্পূর্ণ ঐতিহাসিক ডেটা</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dataset Export Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {datasets.map(dataset => (
          <div
            key={dataset.id}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:border-emerald-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-800">{dataset.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{dataset.description}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">আওতা: {dataset.recordsCount}</span>
                <span className="font-mono text-slate-400">সাইজ: ~{dataset.size}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex gap-1">
                {dataset.formats.map((fmt, i) => (
                  <span key={i} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {fmt}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleDownload(dataset)}
                disabled={downloadingId === dataset.id}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#14532d] hover:bg-emerald-900 rounded-lg transition-colors shadow-2xs cursor-pointer disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === dataset.id ? 'প্রস্তুত হচ্ছে...' : 'ডাউনলোড'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

