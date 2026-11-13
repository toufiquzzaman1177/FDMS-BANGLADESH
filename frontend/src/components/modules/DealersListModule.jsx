import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Eye,
  CheckCircle2,
  XCircle,
  Phone,
  MapPin,
  Building2,
  FileText,
  Award,
  Layers,
  ExternalLink,
  ChevronDown,
  X,
  PackageCheck
} from 'lucide-react';

export default function DealersListModule() {
  const [searchQuery, setSearchQuery] = useState('');
  const [unionFilter, setUnionFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedDealer, setSelectedDealer] = useState(null);

  const dealers = [
    {
      id: 'DLR-2024-001',
      name: 'মেসার্স মাটির মানুষ এন্টারপ্রাইজ',
      proprietor: 'আলহাজ্ব মোকাররম হোসেন',
      union: '৩ নং বাট্টাজোড় ইউনিয়ন',
      tradeLicense: 'TR-2026-3391',
      tinNo: 'TIN-8891230491',
      phone: '01711-223344',
      godownCapacityTon: 120,
      currentStockTon: 48.5,
      wardOutletsCount: 3,
      status: 'active',
      licenseExpiry: '৩০ জুন ২০২৭',
      monthlyQuotaTon: 65.0,
      totalFarmersServed: 412,
      fdrSecurityTk: '৫,০০,০০০'
    },
    {
      id: 'DLR-2024-002',
      name: 'মেসার্স কৃষক বন্ধু ঘর',
      proprietor: 'মোঃ রফিকুল ইসলাম',
      union: '৫ নং বকশীগঞ্জ ইউনিয়ন',
      tradeLicense: 'TR-2026-4412',
      tinNo: 'TIN-4491029381',
      phone: '01712-998877',
      godownCapacityTon: 150,
      currentStockTon: 62.0,
      wardOutletsCount: 3,
      status: 'active',
      licenseExpiry: '৩০ জুন ২০২৭',
      monthlyQuotaTon: 70.0,
      totalFarmersServed: 489,
      fdrSecurityTk: '৫,০০,০০০'
    },
    {
      id: 'DLR-2024-003',
      name: 'মেসার্স নতুন ফসল ট্রেডার্স',
      proprietor: 'হাজী জয়নাল আবেদীন',
      union: '২ নং বগারচর ইউনিয়ন',
      tradeLicense: 'TR-2026-5589',
      tinNo: 'TIN-5591028374',
      phone: '01715-667788',
      godownCapacityTon: 110,
      currentStockTon: 42.0,
      wardOutletsCount: 3,
      status: 'active',
      licenseExpiry: '৩০ জুন ২০২৭',
      monthlyQuotaTon: 60.0,
      totalFarmersServed: 395,
      fdrSecurityTk: '৫,০০,০০০'
    },
    {
      id: 'DLR-2024-004',
      name: 'মেসার্স সবুজ কৃষি ভান্ডার',
      proprietor: 'কবির আহমেদ',
      union: '৬ নং ধানুয়া কামালপুর ইউনিয়ন',
      tradeLicense: 'TR-2026-6670',
      tinNo: 'TIN-6691028372',
      phone: '01819-334455',
      godownCapacityTon: 100,
      currentStockTon: 35.5,
      wardOutletsCount: 3,
      status: 'active',
      licenseExpiry: '৩০ জুন ২০২৭',
      monthlyQuotaTon: 55.0,
      totalFarmersServed: 320,
      fdrSecurityTk: '৫,০০,০০০'
    },
    {
      id: 'DLR-2024-005',
      name: 'মেসার্স সোনালী মাঠ স্টোর',
      proprietor: 'আনিসুর রহমান',
      union: '৪ নং সাধুরপাড়া ইউনিয়ন',
      tradeLicense: 'TR-2026-7781',
      tinNo: 'TIN-7791028365',
      phone: '01911-556677',
      godownCapacityTon: 130,
      currentStockTon: 51.0,
      wardOutletsCount: 3,
      status: 'active',
      licenseExpiry: '৩০ জুন ২০২৭',
      monthlyQuotaTon: 62.0,
      totalFarmersServed: 378,
      fdrSecurityTk: '৫,০০,০০০'
    },
    {
      id: 'DLR-2024-006',
      name: 'মেসার্স শ্যামল বাংলা সার বিতান',
      proprietor: 'আবু তাহের',
      union: '৬ নং নিলাখিয়া ইউনিয়ন',
      tradeLicense: 'TR-2026-8890',
      tinNo: 'TIN-8891028399',
      phone: '01718-445566',
      godownCapacityTon: 90,
      currentStockTon: 0.0,
      wardOutletsCount: 3,
      status: 'inactive',
      licenseExpiry: '৩১ ডিসেম্বর ২০২৫',
      monthlyQuotaTon: 0.0,
      totalFarmersServed: 120,
      fdrSecurityTk: '৫,০০,০০০ (নবায়ন স্থগিত)'
    }
  ];

  const filteredDealers = dealers.filter(d => {
    if (unionFilter !== 'all' && d.union !== unionFilter) return false;
    if (statusFilter !== 'all' && d.status !== statusFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        d.name.toLowerCase().includes(q) ||
        d.proprietor.toLowerCase().includes(q) ||
        d.tradeLicense.toLowerCase().includes(q) ||
        d.id.toLowerCase().includes(q) ||
        d.phone.includes(q)
      );
    }
    return true;
  });

  const activeCount = dealers.filter(d => d.status === 'active').length;
  const totalStock = dealers.reduce((acc, d) => acc + d.currentStockTon, 0);
  const totalCapacity = dealers.reduce((acc, d) => acc + d.godownCapacityTon, 0);

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <Users className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  বিসিআইসি ও ডিএই অনুমোদিত
                </span>
                <span className="text-xs text-slate-400 font-mono">BCIC-DEALER-REG-2026</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                অনুমোদিত ডিলার তালিকা ও তথ্যভাণ্ডার
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                উপজেলার সকল ইউনিয়নভিত্তিক অনুমোদিত বিসিআইসি সার ডিলারের লাইসেন্স, জামানত ও বিক্রয় কেন্দ্র তদারকি
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{activeCount} টি ডিলারশিপ সক্রিয়</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="ডিলারের নাম, লাইসেন্স বা মোবাইল দিয়ে খুঁজুন..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
            />
          </div>

          <div className="relative">
            <select
              value={unionFilter}
              onChange={e => setUnionFilter(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white appearance-none pr-8"
            >
              <option value="all">সকল ইউনিয়ন (৬টি ইউনিয়ন)</option>
              <option value="৩ নং বাট্টাজোড় ইউনিয়ন">৩ নং বাট্টাজোড় ইউনিয়ন</option>
              <option value="৫ নং বকশীগঞ্জ ইউনিয়ন">৫ নং বকশীগঞ্জ ইউনিয়ন</option>
              <option value="২ নং বগারচর ইউনিয়ন">২ নং বগারচর ইউনিয়ন</option>
              <option value="৬ নং ধানুয়া কামালপুর ইউনিয়ন">৬ নং ধানুয়া কামালপুর ইউনিয়ন</option>
              <option value="৪ নং সাধুরপাড়া ইউনিয়ন">৪ নং সাধুরপাড়া ইউনিয়ন</option>
              <option value="৬ নং নিলাখিয়া ইউনিয়ন">৬ নং নিলাখিয়া ইউনিয়ন</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white appearance-none pr-8"
            >
              <option value="all">সকল স্ট্যাটাস (সক্রিয় ও স্থগিত)</option>
              <option value="active">সক্রিয় ডিলারশিপ (Active)</option>
              <option value="inactive">স্থগিত / নবায়নহীন (Inactive)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* KPI Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-slate-500 block">মোট তালিকাভুক্ত ডিলার</span>
          <div className="text-2xl font-bold text-slate-800 mt-1 font-mono">{dealers.length} টি</div>
          <span className="text-[10px] text-slate-400 mt-0.5 block">১০০% বিসিআইসি লাইসেন্সপ্রাপ্ত</span>
        </div>

        <div className="bg-white rounded-xl border border-emerald-200 bg-emerald-50/20 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-emerald-800 block">মোট অনুমোদিত আউটলেট</span>
          <div className="text-2xl font-bold text-emerald-700 mt-1 font-mono">{dealers.length * 3} টি</div>
          <span className="text-[10px] text-emerald-600 mt-0.5 block">প্রতি ডিলারের ৩টি ওয়ার্ড কেন্দ্র</span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-slate-500 block">মোট গুদাম ক্যাপাসিটি</span>
          <div className="text-2xl font-bold text-slate-800 mt-1 font-mono">{totalCapacity} মে. টন</div>
          <span className="text-[10px] text-slate-400 mt-0.5 block">উপজেলা বাফার সহযোগী ধারণক্ষমতা</span>
        </div>

        <div className="bg-white rounded-xl border border-emerald-200 bg-emerald-50/20 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-emerald-800 block">বর্তমান কার্যকর মজুত</span>
          <div className="text-2xl font-bold text-[#14532d] mt-1 font-mono">{totalStock.toFixed(1)} মে. টন</div>
          <span className="text-[10px] text-emerald-600 mt-0.5 block">দোকান ও উপ-কেন্দ্রে সংরক্ষিত</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">
            ডিলারদের তালিকা ({filteredDealers.length})
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            হালনাগাদ: নভেম্বর ২০২৬
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase">
              <tr>
                <th className="py-3 px-4">ডিলার আইডি ও নাম</th>
                <th className="py-3 px-4">স্বত্বাধিকারী</th>
                <th className="py-3 px-4">ইউনিয়ন</th>
                <th className="py-3 px-4">ট্রেড লাইসেন্স ও মেয়াদ</th>
                <th className="py-3 px-4">যোগাযোগ</th>
                <th className="py-3 px-4 text-right">গুদাম ধারণ (টন)</th>
                <th className="py-3 px-4 text-right text-emerald-800">বর্তমান স্টক (টন)</th>
                <th className="py-3 px-4 text-center">স্ট্যাটাস</th>
                <th className="py-3 px-4 text-center">পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDealers.map(dealer => (
                <tr key={dealer.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{dealer.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{dealer.id}</div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">{dealer.proprietor}</td>
                  <td className="py-3.5 px-4 text-slate-600">{dealer.union}</td>
                  <td className="py-3.5 px-4">
                    <div className="font-mono text-slate-800 font-medium">{dealer.tradeLicense}</div>
                    <div className="text-[10px] text-slate-400">মেয়াদ: {dealer.licenseExpiry}</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">{dealer.phone}</td>
                  <td className="py-3.5 px-4 text-right font-mono font-medium">{dealer.godownCapacityTon} টন</td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-700">
                    {dealer.currentStockTon.toFixed(1)} টন
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {dealer.status === 'active' ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        সক্রিয়
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                        <XCircle className="w-3 h-3" />
                        স্থগিত
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => setSelectedDealer(dealer)}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-[#14532d] border border-emerald-300 rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>প্রোফাইল</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Modal */}
      {selectedDealer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#14532d]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">{selectedDealer.name}</h3>
                  <div className="text-xs text-slate-500">{selectedDealer.union}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedDealer(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">স্বত্বাধিকারী</span>
                  <span className="font-semibold text-slate-800">{selectedDealer.proprietor}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">যোগাযোগ নম্বর</span>
                  <span className="font-mono text-slate-800 font-bold">{selectedDealer.phone}</span>
                </div>
                <div className="mt-2">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">ট্রেড লাইসেন্স</span>
                  <span className="font-mono text-slate-700">{selectedDealer.tradeLicense}</span>
                </div>
                <div className="mt-2">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">করদাতা শনাক্তকরণ (TIN)</span>
                  <span className="font-mono text-slate-700">{selectedDealer.tinNo}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl border border-slate-200 bg-white">
                  <span className="text-[10px] text-slate-400 block">মাসিক কোটা</span>
                  <span className="text-sm font-bold text-slate-800 font-mono mt-0.5 block">{selectedDealer.monthlyQuotaTon} টন</span>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-200 bg-white">
                  <span className="text-[10px] text-slate-400 block">বর্তমান স্টক</span>
                  <span className="text-sm font-bold text-emerald-700 font-mono mt-0.5 block">{selectedDealer.currentStockTon} টন</span>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-200 bg-white">
                  <span className="text-[10px] text-slate-400 block">সেবাপ্রাপ্ত কৃষক</span>
                  <span className="text-sm font-bold text-slate-800 font-mono mt-0.5 block">{selectedDealer.totalFarmersServed} জন</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                <span className="text-[11px] font-bold text-emerald-900 block">ব্যাংক জামানত (FDR / সিকিউরিটি):</span>
                <p className="text-xs text-emerald-800 mt-0.5 font-mono">{selectedDealer.fdrSecurityTk}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => setSelectedDealer(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#14532d] rounded-lg hover:bg-emerald-900 shadow-sm"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
