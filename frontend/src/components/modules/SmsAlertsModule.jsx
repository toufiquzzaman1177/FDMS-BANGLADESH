import React, { useState } from 'react';
import {
  MessageSquare,
  AlertTriangle,
  ShieldAlert,
  Send,
  CheckCircle2,
  XCircle,
  Clock,
  Search,
  Filter,
  RefreshCw,
  Bell,
  Eye,
  SlidersHorizontal,
  Flame,
  AlertOctagon,
  ChevronDown,
  Info,
  Check,
  X,
  Smartphone
} from 'lucide-react';

export default function SmsAlertsModule() {
  const [activeTab, setActiveTab] = useState('anomalies'); // 'anomalies' or 'smsLogs'
  const [searchQuery, setSearchQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  // Anomaly Alerts Data
  const [anomalies, setAnomalies] = useState([
    {
      id: 'ALT-2026-901',
      title: 'একই এনআইডি দিয়ে একই দিনে ২টি ভিন্ন কেন্দ্রে সার উত্তোলন',
      type: 'ডুপ্লিকেট উত্তোলন (Hoarding Suspected)',
      severity: 'critical', // critical, high, medium
      dealer: 'মেসার্স ভাই ভাই এন্টারপ্রাইজ & রহমান ট্রেডার্স',
      farmer: 'আব্দুল করিম (কার্ড: KRC-7819)',
      nid: '197476129845123',
      details: 'সকাল ১০:১৫ এ নিমাইচড়া কেন্দ্রে ৫০ কেজি ইউরিয়া এবং দুপুর ২:১০ এ হরিপুর কেন্দ্রে পুনরায় ৫০ কেজি ইউরিয়া উত্তোলন শনাক্ত।',
      timestamp: '১৩ নভেম্বর ২০২৬, দুপুর ২:১৫',
      status: 'তদন্তাধীন', // তদন্তাধীন, সমাধানকৃত, স্থগিত
      recommendedAction: 'ডিলারের পস পয়েন্ট তাৎক্ষণিক ফ্রিজ ও এসএএও পরিদর্শন'
    },
    {
      id: 'ALT-2026-902',
      title: 'মধ্যরাতে অস্বাভাবিক অফ-আওয়ার বিক্রয় এন্ট্রি',
      type: 'কালোবাজারি বা গোডাউন পাচার আশঙ্কা',
      severity: 'critical',
      dealer: 'মেসার্স নিউ আজাদ ফার্টিলাইজার',
      farmer: 'বাল্ক এন্ট্রি (৮ জন কৃষক একসাথে)',
      nid: 'একাধিক এনআইডি',
      details: 'রাত ০১:৩৫ মিনিটে একযোগে ৩.৫ টন ইউরিয়া বিক্রয় রসিদ তৈরি শনাক্ত হয়েছে। ডিলার আউটলেটের সরকারি সময় সকাল ৮টা - বিকাল ৫টা।',
      timestamp: '১২ নভেম্বর ২০২৬, রাত ১:৪০',
      status: 'তদন্তাধীন',
      recommendedAction: 'উপজেলা কৃষি অফিসার কর্তৃক তাৎক্ষণিক স্টক যাচাই'
    },
    {
      id: 'ALT-2026-903',
      title: 'জমির সর্বোচ্চ সিলিং এর অতিরিক্ত সার বিতরণ এন্ট্রি',
      type: 'কোটা লঙ্ঘন (Quota Ceiling Breach)',
      severity: 'high',
      dealer: 'মেসার্স সরকার এন্টারপ্রাইজ',
      farmer: 'মোঃ শফিকুল ইসলাম (২ বিঘা জমি)',
      nid: '198276182930415',
      details: '২ বিঘা বোরো ধানের জন্য সর্বোচ্চ অনুমোদিত ইউরিয়া ৭০ কেজি, কিন্তু বিতরণ এন্ট্রি হয়েছে ১৫০ কেজি (৮০ কেজি অতিরিক্ত)।',
      timestamp: '১২ নভেম্বর ২০২৬, বিকাল ৪:০০',
      status: 'তদন্তাধীন',
      recommendedAction: 'অতিরিক্ত সারের চালান ব্লক এবং কারণ দর্শাও নোটিশ'
    },
    {
      id: 'ALT-2026-904',
      title: 'ডিলারের স্টক অস্বাভাবিক দ্রুত নিঃশেষ (Spike Consumption)',
      type: 'অস্বাভাবিক বিক্রয় হার',
      severity: 'medium',
      dealer: 'মেসার্স খান ট্রেডিং কর্পোরেশন',
      farmer: 'সাধারণ কৃষকবৃন্দ (হান্ডিয়াল ইউনিয়ন)',
      nid: 'সাধারণ বিতরণ',
      details: 'বাফার থেকে প্রাপ্ত ১৫ টন টিএসপি সার মাত্র ৩ ঘণ্টার ব্যবধানে সম্পূর্ণ স্টক শূন্য দেখানো হয়েছে।',
      timestamp: '১১ নভেম্বর ২০২৬, সকাল ১১:৫০',
      status: 'সমাধানকৃত',
      recommendedAction: 'উপসহকারী কৃষি কর্মকর্তা কর্তৃক সশরীরে রেজিস্টার নিরীক্ষা'
    }
  ]);

  // SMS Gateway Logs Data
  const [smsLogs, setSmsLogs] = useState([
    {
      id: 'SMS-10921',
      recipientPhone: '01712-345678',
      farmerName: 'মোঃ রফিকুল ইসলাম',
      nid: '197876123450912',
      text: 'প্রিয় কৃষক, মেসার্স রহমান ট্রেডার্স হতে ৪০ কেজি ইউরিয়া ও ২০ কেজি টিএসপি সংগ্রহ করেছেন। সরকারি মূল্য ৳১৫২০। অনিয়মে কল ১৬১২৩। - FDMS BD',
      status: 'delivered', // delivered, sent, failed
      gateway: 'Teletalk Gov Gateway (Mask: FDMS-DAE)',
      sentTime: '১৩ নভেম্বর ২০২৬, দুপুর ২:০৫',
      cost: '৳০.২৫'
    },
    {
      id: 'SMS-10922',
      recipientPhone: '01719-876543',
      farmerName: 'মোছাঃ মমতাজ বেগম',
      nid: '198376998811223',
      text: 'প্রিয় কৃষক, মেসার্স সরকার এন্টারপ্রাইজ হতে ৫০ কেজি ডিএপি সার সংগ্রহ করেছেন। সরকারি মূল্য ৳১০৫০। অনিয়মে কল ১৬১২৩। - FDMS BD',
      status: 'delivered',
      gateway: 'Teletalk Gov Gateway (Mask: FDMS-DAE)',
      sentTime: '১৩ নভেম্বর ২০২৬, দুপুর ১:৪৫',
      cost: '৳০.২৫'
    },
    {
      id: 'SMS-10923',
      recipientPhone: '01811-223344',
      farmerName: 'আব্দুল কাদের',
      nid: '199076554433221',
      text: 'প্রিয় কৃষক, মেসার্স খান ট্রেডিং কর্পোরেশন হতে ২৫ কেজি এমওপি সার সংগ্রহ করেছেন। সরকারি মূল্য ৳৫০০। অনিয়মে কল ১৬১২৩। - FDMS BD',
      status: 'failed',
      gateway: 'Teletalk Gov Gateway (Mask: FDMS-DAE)',
      sentTime: '১৩ নভেম্বর ২০২৬, দুপুর ১:৩০',
      cost: '৳০.০০ (নেটওয়ার্ক ত্রুটি)'
    },
    {
      id: 'SMS-10924',
      recipientPhone: '01915-667788',
      farmerName: 'মোঃ তারেক রহমান',
      nid: '198776332211445',
      text: 'প্রিয় কৃষক, মেসার্স আল-মদিনা ফার্টিলাইজার হতে ৬০ কেজি ইউরিয়া সার সংগ্রহ করেছেন। সরকারি মূল্য ৳১৬২০। অনিয়মে কল ১৬১২৩। - FDMS BD',
      status: 'delivered',
      gateway: 'Teletalk Gov Gateway (Mask: FDMS-DAE)',
      sentTime: '১৩ নভেম্বর ২০২৬, দুপুর ১২:১৫',
      cost: '৳০.২৫'
    }
  ]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleResolveAlert = (id) => {
    setAnomalies(prev =>
      prev.map(a => a.id === id ? { ...a, status: 'সমাধানকৃত' } : a)
    );
    showToast('সতর্কবার্তাটি তদন্ত সাপেক্ষে সমাধানকৃত হিসেবে মার্ক করা হয়েছে।');
    if (selectedAlert?.id === id) {
      setSelectedAlert(prev => ({ ...prev, status: 'সমাধানকৃত' }));
    }
  };

  const handleResendSMS = (id) => {
    setSmsLogs(prev =>
      prev.map(s => s.id === id ? { ...s, status: 'delivered', sentTime: 'এইমাত্র প্রেরিত' } : s)
    );
    showToast('কৃষকের নম্বরে এসএমএস সফলভাবে পুনরায় প্রেরণ করা হয়েছে।');
  };

  const filteredAnomalies = anomalies.filter(a => {
    if (severityFilter !== 'all' && a.severity !== severityFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        a.title.toLowerCase().includes(q) ||
        a.dealer.toLowerCase().includes(q) ||
        a.farmer.toLowerCase().includes(q) ||
        a.id.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const criticalCount = anomalies.filter(a => a.severity === 'critical' && a.status === 'তদন্তাধীন').length;

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#14532d] text-white text-xs font-semibold rounded-xl shadow-lg border border-emerald-700 animate-slide-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-800 shadow-sm flex-shrink-0">
              <ShieldAlert className="w-6 h-6 text-rose-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800">
                  রিয়েলটাইম ফ্রড ডিটেকশন ও টেলিটক গেটওয়ে
                </span>
                <span className="text-xs text-slate-400 font-mono">GATEWAY-LOGS-AI-900</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                এসএমএস লগ ও অ্যানোমালি অ্যালার্ট
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                কৃষককে বিতরণকৃত সারের নিশ্চিতকরণ মেসেজ ও অস্বাভাবিক কালোবাজারি/সিলিং লঙ্ঘনের স্বয়ংক্রিয় সতর্কবার্তা
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {criticalCount > 0 && (
              <div className="px-3.5 py-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-xs font-bold flex items-center gap-2 animate-pulse">
                <AlertOctagon className="w-4 h-4 text-rose-600" />
                <span>{criticalCount} টি জরুরি অ্যানোমালি পর্যালোচনা প্রয়োজন</span>
              </div>
            )}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('anomalies')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'anomalies'
                ? 'bg-rose-900 text-white shadow-xs'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>১. অ্যানোমালি ও ফ্রড অ্যালার্ট ({anomalies.filter(a => a.status === 'তদন্তাধীন').length})</span>
          </button>

          <button
            onClick={() => setActiveTab('smsLogs')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'smsLogs'
                ? 'bg-[#14532d] text-white shadow-xs'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>২. কৃষক এসএমএস গেটওয়ে লগ ({smsLogs.length})</span>
          </button>
        </div>
      </div>

      {activeTab === 'anomalies' ? (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="অ্যালার্ট শিরোনাম, ডিলার বা কৃষকের নাম দিয়ে অনুসন্ধান..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
              />
            </div>

            <div>
              <select
                value={severityFilter}
                onChange={e => setSeverityFilter(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-rose-600 focus:bg-white"
              >
                <option value="all">সকল তীব্রতা (All Severities)</option>
                <option value="critical">জরুরি / ক্রিটিক্যাল (Critical)</option>
                <option value="high">উচ্চ ঝুঁকি (High Risk)</option>
                <option value="medium">মাঝারি সতর্কতা (Medium)</option>
              </select>
            </div>
          </div>

          {/* Anomaly Cards Grid */}
          <div className="grid grid-cols-1 gap-4">
            {filteredAnomalies.map(alert => (
              <div
                key={alert.id}
                className={`bg-white rounded-xl border p-5 shadow-xs transition-all ${
                  alert.severity === 'critical'
                    ? 'border-rose-300 hover:border-rose-400 bg-rose-50/10'
                    : alert.severity === 'high'
                    ? 'border-amber-300 hover:border-amber-400 bg-amber-50/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                          alert.severity === 'critical'
                            ? 'bg-rose-100 text-rose-800 border border-rose-200'
                            : alert.severity === 'high'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}
                      >
                        {alert.severity === 'critical'
                          ? 'ক্রিটিক্যাল ঝুঁকি'
                          : alert.severity === 'high'
                          ? 'উচ্চ ঝুঁকি'
                          : 'সতর্কতা'}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{alert.id}</span>
                      <span className="text-[11px] text-slate-500 font-medium">· {alert.type}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-800">{alert.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{alert.details}</p>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block">সংশ্লিষ্ট ডিলার:</span>
                        <span className="font-semibold text-slate-800">{alert.dealer}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">অভিযুক্ত সত্ত্বা / কৃষক:</span>
                        <span className="font-semibold text-slate-800">{alert.farmer}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">শনাক্তের সময়কাল:</span>
                        <span className="font-mono text-slate-600">{alert.timestamp}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-end justify-between gap-3 border-t md:border-t-0 pt-3 md:pt-0">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        alert.status === 'তদন্তাধীন'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      }`}
                    >
                      {alert.status}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedAlert(alert)}
                        className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-xs"
                      >
                        অ্যাকশন ও লগ
                      </button>

                      {alert.status === 'তদন্তাধীন' && (
                        <button
                          onClick={() => handleResolveAlert(alert.id)}
                          className="px-3 py-1.5 text-xs font-semibold text-white bg-[#14532d] rounded-lg hover:bg-emerald-900 transition-colors shadow-xs"
                        >
                          মীমাংসা সম্পন্ন
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* SMS Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
              <span className="text-[11px] font-medium text-slate-500 block">মোট প্রেরিত এসএমএস</span>
              <div className="text-2xl font-bold text-slate-800 mt-1 font-mono">১২,৪৮৫ টি</div>
              <span className="text-[10px] text-slate-400 mt-0.5 block">চলতি মৌসুমে কৃষকদের ফোনে</span>
            </div>

            <div className="bg-white rounded-xl border border-emerald-200 bg-emerald-50/20 p-4 shadow-xs">
              <span className="text-[11px] font-medium text-emerald-800 block">সফলভাবে প্রাপ্ত (Delivered)</span>
              <div className="text-2xl font-bold text-emerald-700 mt-1 font-mono">৯৯.২%</div>
              <span className="text-[10px] text-emerald-600 mt-0.5 block">টেলিটক কোর গেটওয়ে নিশ্চিত</span>
            </div>

            <div className="bg-white rounded-xl border border-amber-200 bg-amber-50/20 p-4 shadow-xs">
              <span className="text-[11px] font-medium text-amber-800 block">প্রক্রিয়াধীন / কাতারভুক্ত</span>
              <div className="text-2xl font-bold text-amber-700 mt-1 font-mono">১৮ টি</div>
              <span className="text-[10px] text-amber-600 mt-0.5 block">নেটওয়ার্ক কিউতে অপেক্ষমান</span>
            </div>

            <div className="bg-white rounded-xl border border-rose-200 bg-rose-50/20 p-4 shadow-xs">
              <span className="text-[11px] font-medium text-rose-800 block">ব্যর্থ এসএমএস (Failed)</span>
              <div className="text-2xl font-bold text-rose-700 mt-1 font-mono">০.৮%</div>
              <span className="text-[10px] text-rose-600 mt-0.5 block">বন্ধ সিম / ইনভ্যালিড নম্বর</span>
            </div>
          </div>

          {/* SMS Logs Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-slate-800">
                  সাম্প্রতিক কৃষক নিশ্চিতকরণ বার্তা (SMS Gateway Logs)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  মাস্কিং: FDMS-DAE | সরকারি ট্রেজারি ফান্ড হতে প্রতিটি লেনদেনের ডিজিটাল রসিদ
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-mono">
                API: v2.4/teletalk-bulk
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-700">
                <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase">
                  <tr>
                    <th className="py-3 px-4">আইডি ও সময়</th>
                    <th className="py-3 px-4">কৃষকের নাম ও মোবাইল</th>
                    <th className="py-3 px-4">জাতীয় পরিচয়পত্র</th>
                    <th className="py-3 px-4">এসএমএস বার্তা প্রিভিউ</th>
                    <th className="py-3 px-4 text-center">ডেলিভারি স্থিতি</th>
                    <th className="py-3 px-4 text-center">পদক্ষেপ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {smsLogs.map(sms => (
                    <tr key={sms.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-mono font-bold text-slate-800">{sms.id}</div>
                        <div className="text-[10px] text-slate-400">{sms.sentTime}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-800">{sms.farmerName}</div>
                        <div className="text-[11px] text-emerald-800 font-mono font-medium">
                          {sms.recipientPhone}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-600">{sms.nid}</td>
                      <td className="py-3.5 px-4 max-w-sm">
                        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-700 font-sans leading-relaxed">
                          {sms.text}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {sms.status === 'delivered' ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" />
                            বিতরণ সফল
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                            <XCircle className="w-3 h-3" />
                            ব্যর্থ
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => handleResendSMS(sms.id)}
                          title="পুনরায় এসএমএস পাঠান"
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-2xs"
                        >
                          <Send className="w-3 h-3 text-slate-500" />
                          <span>রিসেন্ড</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Alert Investigation Modal */}
      {selectedAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">
                    অ্যানোমালি বিস্তারিত ও প্রশাসনিক অ্যাকশন
                  </h3>
                  <div className="text-xs text-slate-500 font-mono">{selectedAlert.id}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedAlert(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                    সন্দেহজনক ঘটনার বিবরণ
                  </span>
                  <div className="font-semibold text-slate-800 text-xs mt-0.5">
                    {selectedAlert.title}
                  </div>
                  <div className="text-slate-600 mt-1">{selectedAlert.details}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase">সংশ্লিষ্ট ডিলার</span>
                    <span className="font-medium text-slate-800">{selectedAlert.dealer}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase">সনাক্তের সময়</span>
                    <span className="font-mono text-slate-700">{selectedAlert.timestamp}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                <span className="text-[11px] font-bold text-rose-900 block">
                  সিস্টেম প্রস্তাবিত পদক্ষেপ (AI Recommendation):
                </span>
                <p className="text-xs text-rose-800 mt-0.5">{selectedAlert.recommendedAction}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedAlert(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                বন্ধ করুন
              </button>
              {selectedAlert.status === 'তদন্তাধীন' && (
                <button
                  onClick={() => {
                    handleResolveAlert(selectedAlert.id);
                    setSelectedAlert(null);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#14532d] rounded-lg hover:bg-emerald-900 shadow-sm"
                >
                  তদন্ত নিষ্পত্তি ও অনুমোদন
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
