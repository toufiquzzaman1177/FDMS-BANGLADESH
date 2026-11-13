import React, { useState } from 'react';
import {
  UserCheck,
  Shield,
  KeyRound,
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  FileText,
  Building,
  Mail,
  Phone,
  Filter,
  Check,
  X,
  Lock,
  Eye,
  SlidersHorizontal,
  ChevronDown,
  UserPlus
} from 'lucide-react';

export default function UserApprovalModule() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'মোঃ হাফিজুর রহমান',
      designation: 'উপসহকারী কৃষি কর্মকর্তা (SAAO)',
      agency: 'কৃষি সম্প্রসারণ অধিদপ্তর, চাটমোহর',
      email: 'hafizur.saao@dae.gov.bd',
      phone: '01712-445588',
      nid: '198776123450001',
      govId: 'DAE-OFF-2024-81',
      role: 'SAAO Field Officer',
      permissions: ['কৃষক যাচাই', 'বিতরণ নিরীক্ষা', 'ওয়ার্ড পরিদর্শন'],
      status: 'pending', // pending, approved, suspended, rejected
      appliedDate: '১২ নভেম্বর ২০২৬',
      avatarColor: 'bg-amber-100 text-amber-800'
    },
    {
      id: 2,
      name: 'তানজিলা হক',
      designation: 'সহকারী কমিশনার (ভূমি) ও এক্সিকিউটিভ ম্যাজিস্ট্রেট',
      agency: 'উপজেলা প্রশাসন, চাটমোহর',
      email: 'acland.chatmohar@mopa.gov.bd',
      phone: '01711-998877',
      nid: '199276543210009',
      govId: 'MOPA-EXEC-1102',
      role: 'Magistrate Inspector',
      permissions: ['মোবাইল কোর্ট পরিচালনা', 'জরিমানা আদেশ', 'সার জব্দ'],
      status: 'pending',
      appliedDate: '১১ নভেম্বর ২০২৬',
      avatarColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: 3,
      name: 'ড. আহমেদ রফিক',
      designation: 'উপজেলা কৃষি অফিসার (UAO)',
      agency: 'কৃষি সম্প্রসারণ অধিদপ্তর, চাটমোহর',
      email: 'uao.chatmohar@dae.gov.bd',
      phone: '01713-112233',
      nid: '197976192837465',
      govId: 'DAE-UAO-4491',
      role: 'Upazila Admin',
      permissions: ['কোটা বণ্টন', 'ডিও অনুমোদন', 'চালান নিরীক্ষা', 'কর্মকর্তা অনুমোদন'],
      status: 'approved',
      appliedDate: '০২ অক্টোবর ২০২৬',
      avatarColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      id: 4,
      name: 'ফারুক হোসেন',
      designation: 'ডিলার বিক্রয়কেন্দ্র অপারেটর (POS Operator)',
      agency: 'মেসার্স সরকার এন্টারপ্রাইজ (বিলচলন ইউনিয়ন)',
      email: 'pos.sarker@fdms.local',
      phone: '01822-334455',
      nid: '199576889900112',
      govId: 'DLR-OP-002-A',
      role: 'Dealer Operator',
      permissions: ['কৃষক বিক্রয় এন্ট্রি', 'স্টক ইনভেন্টরি রিডিং'],
      status: 'approved',
      appliedDate: '১৫ অক্টোবর ২০২৬',
      avatarColor: 'bg-indigo-100 text-indigo-800'
    },
    {
      id: 5,
      name: 'নাজমুল হাসান',
      designation: 'উপসহকারী কৃষি কর্মকর্তা (SAAO)',
      agency: 'কৃষি সম্প্রসারণ অধিদপ্তর, নিমাইচড়া ব্লক',
      email: 'nazmul.saao@dae.gov.bd',
      phone: '01912-778899',
      nid: '198576445566778',
      govId: 'DAE-OFF-2023-19',
      role: 'SAAO Field Officer',
      permissions: ['কৃষক যাচাই', 'বিতরণ নিরীক্ষা'],
      status: 'suspended',
      appliedDate: '২০ জুলাই ২০২৬',
      avatarColor: 'bg-rose-100 text-rose-800'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null); // For modal inspection
  const [actionSuccessMsg, setActionSuccessMsg] = useState(null);

  const pendingCount = users.filter(u => u.status === 'pending').length;
  const approvedCount = users.filter(u => u.status === 'approved').length;
  const suspendedCount = users.filter(u => u.status === 'suspended').length;

  const filteredUsers = users.filter(u => {
    if (statusFilter !== 'all' && u.status !== statusFilter) return false;
    if (roleFilter !== 'all' && u.role !== roleFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.phone.includes(q) ||
        u.nid.includes(q) ||
        u.govId.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleApprove = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: 'approved' } : u));
    showToast('কর্মকর্তার অ্যাকাউন্ট সফলভাবে অনুমোদিত ও সক্রিয় করা হয়েছে।');
    if (selectedUser?.id === id) {
      setSelectedUser(prev => ({ ...prev, status: 'approved' }));
    }
  };

  const handleSuspend = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: 'suspended' } : u));
    showToast('কর্মকর্তার অ্যাকাউন্টের অ্যাক্সেস সাময়িকভাবে স্থগিত করা হয়েছে।');
    if (selectedUser?.id === id) {
      setSelectedUser(prev => ({ ...prev, status: 'suspended' }));
    }
  };

  const handleReject = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: 'rejected' } : u));
    showToast('অ্যাকাউন্টের আবেদন বাতিল করা হয়েছে।');
    if (selectedUser?.id === id) {
      setSelectedUser(prev => ({ ...prev, status: 'rejected' }));
    }
  };

  const showToast = (msg) => {
    setActionSuccessMsg(msg);
    setTimeout(() => setActionSuccessMsg(null), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {actionSuccessMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#14532d] text-white text-xs font-semibold rounded-xl shadow-lg border border-emerald-700 animate-slide-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{actionSuccessMsg}</span>
        </div>
      )}

      {/* Top Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-800 shadow-sm flex-shrink-0">
              <UserCheck className="w-6 h-6 text-indigo-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                  অ্যাক্সেস কন্ট্রোল ও RBAC নিরাপত্তা
                </span>
                <span className="text-xs text-slate-400 font-mono">ROLE-SECURITY-MIS</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                ইউজার ও কর্মকর্তা অনুমোদন
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                উপজেলা কর্মকর্তা, ম্যাজিস্ট্রেট, এসএএও ও ডিলার অপারেটরের এনআইডি যাচাই এবং ভূমিকা ভিত্তিক অনুমতি নিয়ন্ত্রণ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>{pendingCount} টি আবেদন যাচাইয়ের অপেক্ষায়</span>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="md:col-span-2 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="কর্মকর্তার নাম, ইমেইল, পদবি বা সরকারি আইডি দিয়ে খুঁজুন..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all font-medium"
            />
          </div>

          <div>
            <div className="relative">
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-indigo-600 focus:bg-white transition-all appearance-none pr-8"
              >
                <option value="all">সকল স্থিতি (সকল কর্মকর্তা)</option>
                <option value="pending">অপেক্ষমান (Pending Verification)</option>
                <option value="approved">অনুমোদিত ও সক্রিয় (Active)</option>
                <option value="suspended">স্থগিত (Suspended)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <div className="relative">
              <select
                value={roleFilter}
                onChange={e => setRoleFilter(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 font-medium focus:outline-none focus:border-indigo-600 focus:bg-white transition-all appearance-none pr-8"
              >
                <option value="all">সকল রোল / পদমর্যাদা</option>
                <option value="Upazila Admin">Upazila Admin (UAO/UNO)</option>
                <option value="SAAO Field Officer">SAAO Field Officer</option>
                <option value="Magistrate Inspector">Magistrate Inspector</option>
                <option value="Dealer Operator">Dealer POS Operator</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* KPI Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-slate-500 block">মোট তালিকাভুক্ত ব্যবহারকারী</span>
          <div className="text-2xl font-bold text-slate-800 mt-1 font-mono">{users.length}</div>
          <span className="text-[10px] text-slate-400 mt-0.5 block">সকল সরকারি ও মাঠ পর্যায়ের অপারেটর</span>
        </div>

        <div className="bg-white rounded-xl border border-amber-200 bg-amber-50/20 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-amber-800 block">অনুমোদনের অপেক্ষায়</span>
          <div className="text-2xl font-bold text-amber-700 mt-1 font-mono">{pendingCount}</div>
          <span className="text-[10px] text-amber-600 mt-0.5 block">এনআইডি ও পদবি যাচাই প্রয়োজন</span>
        </div>

        <div className="bg-white rounded-xl border border-emerald-200 bg-emerald-50/20 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-emerald-800 block">অনুমোদিত ও সক্রিয় কর্মকর্তা</span>
          <div className="text-2xl font-bold text-emerald-700 mt-1 font-mono">{approvedCount}</div>
          <span className="text-[10px] text-emerald-600 mt-0.5 block">লগইন ও ডেটা এন্ট্রি সক্রিয়</span>
        </div>

        <div className="bg-white rounded-xl border border-rose-200 bg-rose-50/20 p-4 shadow-xs">
          <span className="text-[11px] font-medium text-rose-800 block">স্থগিতকৃত / নিষ্ক্রিয় অ্যাকাউন্ট</span>
          <div className="text-2xl font-bold text-rose-700 mt-1 font-mono">{suspendedCount}</div>
          <span className="text-[10px] text-rose-600 mt-0.5 block">বদলিজাত বা তদন্তাধীন কারণে স্থগিত</span>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">
            কর্মকর্তা ও অপারেটরদের তালিকা ({filteredUsers.length})
          </h2>
          <span className="text-xs text-slate-500">
            সরকারি প্রোটোকল অনুযায়ী প্রতি ৯০ দিন অন্তর পাসওয়ার্ড পুনর্নির্ধারণ বাধ্যতামূলক
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] font-semibold text-slate-700 bg-slate-50 border-b border-slate-200 uppercase">
              <tr>
                <th className="py-3 px-4">কর্মকর্তার নাম ও পরিচয়</th>
                <th className="py-3 px-4">দপ্তর ও পদবি</th>
                <th className="py-3 px-4">যোগাযোগ (ইমেইল ও ফোন)</th>
                <th className="py-3 px-4">নির্ধারিত ভূমিকা (Role)</th>
                <th className="py-3 px-4">মডিউল পারমিশন</th>
                <th className="py-3 px-4 text-center">স্থিতি</th>
                <th className="py-3 px-4 text-center">পদক্ষেপ / অনুমোদন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map(u => (
                <tr key={u.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${u.avatarColor} flex-shrink-0`}>
                        {u.name.substring(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">{u.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">আইডি: {u.govId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-slate-800">{u.designation}</div>
                    <div className="text-[10px] text-slate-500">{u.agency}</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono">
                    <div className="text-slate-700">{u.email}</div>
                    <div className="text-[10px] text-slate-400">{u.phone}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium text-[11px]">
                      <Shield className="w-3 h-3 text-slate-500" />
                      {u.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                      {u.permissions.map((p, idx) => (
                        <span key={idx} className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-100">
                          {p}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {u.status === 'approved' && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        অনুমোদিত
                      </span>
                    )}
                    {u.status === 'pending' && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 animate-pulse">
                        <Clock className="w-3 h-3" />
                        অপেক্ষমান
                      </span>
                    )}
                    {u.status === 'suspended' && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                        <Lock className="w-3 h-3" />
                        স্থগিত
                      </span>
                    )}
                    {u.status === 'rejected' && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        <XCircle className="w-3 h-3" />
                        বাতিলকৃত
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => setSelectedUser(u)}
                        title="বিস্তারিত ও সনদ যাচাই"
                        className="p-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {u.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApprove(u.id)}
                            title="অনুমোদন করুন"
                            className="p-1.5 rounded-md text-emerald-700 hover:bg-emerald-50 border border-emerald-200 transition-colors"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleReject(u.id)}
                            title="বাতিল করুন"
                            className="p-1.5 rounded-md text-rose-700 hover:bg-rose-50 border border-rose-200 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      {u.status === 'approved' && (
                        <button
                          onClick={() => handleSuspend(u.id)}
                          title="অ্যাকাউন্ট স্থগিত করুন"
                          className="px-2 py-1 text-[10px] font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded hover:bg-amber-100 transition-colors"
                        >
                          স্থগিত
                        </button>
                      )}

                      {u.status === 'suspended' && (
                        <button
                          onClick={() => handleApprove(u.id)}
                          title="পুনরায় সক্রিয় করুন"
                          className="px-2 py-1 text-[10px] font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded hover:bg-emerald-100 transition-colors"
                        >
                          সক্রিয় করুন
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Details & Document Inspection Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${selectedUser.avatarColor}`}>
                  {selectedUser.name.substring(0, 2)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">{selectedUser.name}</h3>
                  <div className="text-xs text-slate-500">{selectedUser.designation}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">দপ্তর / কার্যালয়</span>
                  <span className="font-semibold text-slate-800">{selectedUser.agency}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">সরকারি পরিচয়পত্র নং</span>
                  <span className="font-mono text-slate-800 font-bold">{selectedUser.govId}</span>
                </div>
                <div className="mt-2">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">জাতীয় পরিচয়পত্র (NID)</span>
                  <span className="font-mono text-slate-700">{selectedUser.nid}</span>
                </div>
                <div className="mt-2">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">আবেদনের তারিখ</span>
                  <span className="text-slate-700">{selectedUser.appliedDate}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase mb-1">
                  নিয়োগপত্র / সরকারি গ্যাজেট ভেরিফিকেশন
                </span>
                <div className="p-3 bg-emerald-50/50 border border-emerald-200 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-700" />
                    <span className="text-slate-700 font-medium">official_posting_order_2026.pdf</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                    যাচাইকৃত (DAE Verified)
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase mb-1">
                  বরাদ্দকৃত সিস্টেম অনুমতিসমূহ (Permissions)
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedUser.permissions.map((p, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-slate-100 text-slate-800 font-medium text-[11px] border border-slate-200">
                      ✓ {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                বন্ধ করুন
              </button>
              {selectedUser.status === 'pending' && (
                <button
                  onClick={() => {
                    handleApprove(selectedUser.id);
                    setSelectedUser(null);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#14532d] rounded-lg hover:bg-emerald-900 transition-colors shadow-sm"
                >
                  অনুমোদন চূড়ান্ত করুন
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
