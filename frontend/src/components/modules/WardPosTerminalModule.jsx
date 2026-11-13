import React, { useState } from 'react';
import {
  Store,
  CreditCard,
  QrCode,
  Printer,
  Search,
  CheckCircle2,
  AlertTriangle,
  UserCheck,
  ShoppingBag,
  RefreshCw,
  Plus,
  Trash2,
  Clock,
  Check,
  X,
  FileText,
  BadgePercent
} from 'lucide-react';

export default function WardPosTerminalModule() {
  const [farmerInput, setFarmerInput] = useState('197876123450912');
  const [verifiedFarmer, setVerifiedFarmer] = useState({
    name: 'মোঃ রফিকুল ইসলাম',
    nid: '197876123450912',
    krishiCard: 'KRC-88192',
    phone: '01712-345678',
    union: '৩ নং বাট্টাজোড়',
    ward: '৩ নং ওয়ার্ড উপ-বিক্রয়কেন্দ্র',
    landBigha: 4.5,
    crop: 'বোরো ধান (উফশী)',
    remainingCeiling: {
      urea: 70, // kg remaining
      tsp: 25,
      dap: 35,
      mop: 35
    }
  });

  const [cartItems, setCartItems] = useState([
    { type: 'ইউরিয়া', qty: 40, rate: 27, total: 1080 },
    { type: 'টিএসপি', qty: 20, rate: 22, total: 440 }
  ]);

  const [selectedFertilizer, setSelectedFertilizer] = useState('ইউরিয়া');
  const [selectedQty, setSelectedQty] = useState(10);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [lastVoucher, setLastVoucher] = useState(null);
  const [dailyClosingDone, setDailyClosingDone] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Daily POS Closing Summary
  const [posDailyStats, setPosDailyStats] = useState({
    terminalId: 'POS-WRD-03A',
    operatorName: 'মোঃ শফিকুল ইসলাম (অপারেটর)',
    date: '১৩ নভেম্বর ২০২৬',
    totalTransactions: 34,
    totalKgSold: 1850,
    totalCashCollected: 45200,
    closingCashBalance: 45200,
    openingStockKg: 5000,
    closingStockKg: 3150
  });

  const fertilizerRates = {
    'ইউরিয়া': 27,
    'টিএসপি': 22,
    'ডিএপি': 21,
    'এমওপি': 20
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLookupFarmer = (e) => {
    e.preventDefault();
    if (!farmerInput.trim()) return;
    setVerifiedFarmer({
      name: 'মোঃ রফিকুল ইসলাম',
      nid: farmerInput,
      krishiCard: 'KRC-88192',
      phone: '01712-345678',
      union: '৩ নং বাট্টাজোড়',
      ward: '৩ নং ওয়ার্ড উপ-বিক্রয়কেন্দ্র',
      landBigha: 4.5,
      crop: 'বোরো ধান (উফশী)',
      remainingCeiling: {
        urea: 70,
        tsp: 25,
        dap: 35,
        mop: 35
      }
    });
    showToast('কৃষকের এনআইডি ও কৃষি কার্ড সিলিং সফলভাবে যাচাই করা হয়েছে।');
  };

  const handleAddToCart = () => {
    const rate = fertilizerRates[selectedFertilizer] || 25;
    const qtyNum = Number(selectedQty) || 0;
    if (qtyNum <= 0) return;

    // Check ceiling limit
    const ceilingKey = selectedFertilizer === 'ইউরিয়া' ? 'urea' : selectedFertilizer === 'টিএসপি' ? 'tsp' : selectedFertilizer === 'ডিএপি' ? 'dap' : 'mop';
    const limit = verifiedFarmer.remainingCeiling[ceilingKey] || 0;
    if (qtyNum > limit) {
      alert(`সতর্কতা: এই কৃষকের চলতি মৌসুমে ${selectedFertilizer} সারের সর্বোচ্চ সিলিং বাকি রয়েছে মাত্র ${limit} কেজি। এর বেশি বিক্রয় সরকারি আইন পরিপন্থী।`);
      return;
    }

    const existingIdx = cartItems.findIndex(i => i.type === selectedFertilizer);
    if (existingIdx > -1) {
      const updated = [...cartItems];
      updated[existingIdx].qty += qtyNum;
      updated[existingIdx].total = updated[existingIdx].qty * rate;
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, {
        type: selectedFertilizer,
        qty: qtyNum,
        rate: rate,
        total: qtyNum * rate
      }]);
    }
    showToast(`${selectedFertilizer} ${qtyNum} কেজি তালিকায় যুক্ত হয়েছে।`);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(cartItems.filter((_, idx) => idx !== index));
  };

  const totalBill = cartItems.reduce((s, i) => s + i.total, 0);
  const totalKg = cartItems.reduce((s, i) => s + i.qty, 0);

  const handleCheckoutAndPrint = () => {
    if (cartItems.length === 0) {
      alert('অনুগ্রহ করে অন্তত একটি সার তালিকায় যুক্ত করুন।');
      return;
    }

    const vch = {
      voucherNo: `POS-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('bn-BD') + ', ' + new Date().toLocaleTimeString('bn-BD'),
      farmer: verifiedFarmer,
      items: cartItems,
      totalKg: totalKg,
      totalBill: totalBill,
      terminal: posDailyStats.terminalId
    };

    setLastVoucher(vch);
    setShowReceiptModal(true);

    // Update daily stats
    setPosDailyStats(prev => ({
      ...prev,
      totalTransactions: prev.totalTransactions + 1,
      totalKgSold: prev.totalKgSold + totalKg,
      totalCashCollected: prev.totalCashCollected + totalBill,
      closingStockKg: prev.closingStockKg - totalKg
    }));
  };

  const handleDailyClosing = () => {
    if (window.confirm('আপনি কি আজকের দিনের জন্য POS স্টক ও ক্যাশ ক্লোজিং সম্পন্ন করতে চান?')) {
      setDailyClosingDone(true);
      showToast('আজকের দিনের পিওএস স্টক ও ক্যাশ ক্লোজিং রেজিস্টার সফলভাবে সংরক্ষিত হয়েছে।');
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#14532d] text-white text-xs font-semibold rounded-xl shadow-lg border border-emerald-700 animate-slide-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm flex-shrink-0">
              <Store className="w-6 h-6 text-[#14532d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  রোল: ওয়ার্ড বিক্রয়কেন্দ্র অপারেটর (Ward POS Operator)
                </span>
                <span className="text-xs text-slate-400 font-mono">TERMINAL: POS-WRD-03A</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
                স্মার্ট পিওএস সেলস টার্মিনাল ও ক্যাশ মেমো
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                কৃষকের NID ও কৃষি কার্ড সিলিং যাচাই, সরকারি নির্ধারিত মূল্যে বিক্রয় ও কিউআর কোডযুক্ত ক্যাশ মেমো প্রস্তুত
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDailyClosing}
              disabled={dailyClosingDone}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-2xs ${
                dailyClosingDone
                  ? 'bg-slate-100 text-slate-500 border border-slate-200'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 cursor-pointer'
              }`}
            >
              <Clock className="w-4 h-4 text-amber-700" />
              <span>{dailyClosingDone ? 'দৈনিক ক্লোজিং সম্পন্ন' : 'দৈনিক স্টক ক্লোজিং'}</span>
            </button>
          </div>
        </div>

        {/* Farmer Lookup Bar */}
        <form onSubmit={handleLookupFarmer} className="mt-6 pt-5 border-t border-slate-100 flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="কৃষকের জাতীয় পরিচয়পত্র (NID) বা কৃষি কার্ড নম্বর স্ক্যান/লিখুন..."
              value={farmerInput}
              onChange={e => setFarmerInput(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#14532d] hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <UserCheck className="w-4 h-4" />
            <span>সিলিং যাচাই</span>
          </button>
        </form>
      </div>

      {/* Main Grid: Left Farmer & Cart, Right Receipt Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Farmer Profile & Add Items */}
        <div className="lg:col-span-7 space-y-6">
          {/* Farmer Verification Box */}
          {verifiedFarmer && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#14532d] flex items-center justify-center font-bold text-sm">
                    {verifiedFarmer.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{verifiedFarmer.name}</h3>
                    <p className="text-xs text-slate-500 font-mono">
                      NID: {verifiedFarmer.nid} | কার্ড: {verifiedFarmer.krishiCard}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  যাচাইকৃত কৃষক
                </span>
              </div>

              {/* Land & Remaining Quota */}
              <div>
                <span className="text-[11px] font-semibold text-slate-500 block mb-2">
                  জমির পরিমাণ: <strong className="text-slate-800">{verifiedFarmer.landBigha} বিঘা</strong> ({verifiedFarmer.crop}) — অবশিষ্ট অনুমোদিত সিলিং:
                </span>
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-200">
                    <span className="text-[10px] text-slate-500 block">ইউরিয়া</span>
                    <span className="font-mono font-bold text-emerald-800 mt-0.5 block">{verifiedFarmer.remainingCeiling.urea} কেজি</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">টিএসপি</span>
                    <span className="font-mono font-bold text-slate-800 mt-0.5 block">{verifiedFarmer.remainingCeiling.tsp} কেজি</span>
                  </div>
                  <div className="p-2 rounded-lg bg-indigo-50/60 border border-indigo-200">
                    <span className="text-[10px] text-slate-500 block">ডিএপি</span>
                    <span className="font-mono font-bold text-indigo-800 mt-0.5 block">{verifiedFarmer.remainingCeiling.dap} কেজি</span>
                  </div>
                  <div className="p-2 rounded-lg bg-amber-50/60 border border-amber-200">
                    <span className="text-[10px] text-slate-500 block">এমওপি</span>
                    <span className="font-mono font-bold text-amber-800 mt-0.5 block">{verifiedFarmer.remainingCeiling.mop} কেজি</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Item Picker */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider pb-2 border-b border-slate-100">
              বিক্রয় তালিকায় সার যোগ করুন (সরকারি দর মোতাবেক)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">সারের ধরন</label>
                <select
                  value={selectedFertilizer}
                  onChange={e => setSelectedFertilizer(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-semibold focus:bg-white focus:border-emerald-600 focus:outline-none"
                >
                  <option value="ইউরিয়া">ইউরিয়া (৳২৭/কেজি)</option>
                  <option value="টিএসপি">টিএসপি (৳২২/কেজি)</option>
                  <option value="ডিএপি">ডিএপি (৳২১/কেজি)</option>
                  <option value="এমওপি">এমওপি (৳২০/কেজি)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">পরিমাণ (কেজি)</label>
                <input
                  type="number"
                  min="5"
                  step="5"
                  value={selectedQty}
                  onChange={e => setSelectedQty(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono font-bold focus:bg-white focus:border-emerald-600 focus:outline-none"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full py-2 bg-[#14532d] hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>তালিকায় যোগ</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Live POS Cart & Checkout */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#14532d]" />
                <h3 className="text-sm font-bold text-slate-900">বর্তমান বিক্রয় রসিদ</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">{cartItems.length} টি আইটেম</span>
            </div>

            {/* Cart Items List */}
            <div className="divide-y divide-slate-100">
              {cartItems.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-800">{item.type}</span>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {item.qty} কেজি × ৳{item.rate}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-slate-900">৳{item.total}</span>
                    <button
                      onClick={() => handleRemoveFromCart(idx)}
                      className="text-slate-400 hover:text-rose-600 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Summary */}
            <div className="pt-3 border-t-2 border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>মোট ওজন:</span>
                <span className="font-mono font-bold text-slate-800">{totalKg} কেজি</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold pt-1 border-t border-slate-100">
                <span className="text-slate-900">সর্বমোট প্রদেয় বিল:</span>
                <span className="text-xl text-[#14532d] font-mono">৳{totalBill.toLocaleString('bn-BD')}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckoutAndPrint}
              className="w-full py-3 bg-[#14532d] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <QrCode className="w-4 h-4" />
              <span>বিক্রয় সম্পন্ন ও কিউআর মেমো প্রিন্ট</span>
            </button>
          </div>

          {/* Daily Terminal Status Pill */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 text-xs space-y-1.5">
            <div className="flex justify-between text-slate-500">
              <span>টার্মিনাল আইডি:</span>
              <span className="font-mono font-bold text-slate-700">{posDailyStats.terminalId}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>আজকের মোট লেনদেন:</span>
              <span className="font-mono font-bold text-slate-700">{posDailyStats.totalTransactions} টি</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>আজকের মোট ক্যাশ সংগ্রহ:</span>
              <span className="font-mono font-bold text-emerald-800">৳{posDailyStats.totalCashCollected.toLocaleString('bn-BD')}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>বিক্রয়কেন্দ্রে অবশিষ্ট স্টক:</span>
              <span className="font-mono font-bold text-slate-700">{posDailyStats.closingStockKg} কেজি</span>
            </div>
          </div>
        </div>
      </div>

      {/* QR-Coded Cash Memo Receipt Modal */}
      {showReceiptModal && lastVoucher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            {/* Modal Header */}
            <div className="text-center pb-4 border-b border-dashed border-slate-300">
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded uppercase">
                বাংলাদেশ সরকার অনুমোদিত বিক্রয় রসিদ
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-1">
                মেসার্স মাটির মানুষ এন্টারপ্রাইজ
              </h3>
              <p className="text-[11px] text-slate-500">ওয়ার্ড বিক্রয়কেন্দ্র: ৩ নং বাট্টাজোড়</p>
              <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                ভাউচার: {lastVoucher.voucherNo} | সময়: {lastVoucher.date}
              </p>
            </div>

            {/* Receipt Details */}
            <div className="py-4 space-y-3 text-xs">
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">কৃষকের নাম:</span>
                  <span className="font-bold text-slate-800">{lastVoucher.farmer.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">এনআইডি নম্বর:</span>
                  <span className="font-mono text-slate-700">{lastVoucher.farmer.nid}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">কৃষি কার্ড নং:</span>
                  <span className="font-mono text-slate-700">{lastVoucher.farmer.krishiCard}</span>
                </div>
              </div>

              {/* Items */}
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-[10px] uppercase">
                    <th className="py-1 text-left">সার</th>
                    <th className="py-1 text-right">পরিমাণ</th>
                    <th className="py-1 text-right">দর</th>
                    <th className="py-1 text-right">টাকা</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {lastVoucher.items.map((it, i) => (
                    <tr key={i}>
                      <td className="py-1.5 font-bold text-slate-800">{it.type}</td>
                      <td className="py-1.5 text-right font-mono">{it.qty} কেজি</td>
                      <td className="py-1.5 text-right font-mono">৳{it.rate}</td>
                      <td className="py-1.5 text-right font-mono font-bold text-slate-900">৳{it.total}</td>
                    </tr>
                  ))}
                  <tr className="font-bold text-sm border-t-2 border-slate-300">
                    <td colSpan={3} className="py-2 text-right">সর্বমোট:</td>
                    <td className="py-2 text-right font-mono text-[#14532d]">
                      ৳{lastVoucher.totalBill.toLocaleString('bn-BD')}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* QR Code Simulation */}
              <div className="pt-2 text-center flex flex-col items-center">
                <div className="w-24 h-24 p-2 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center">
                  <QrCode className="w-20 h-20 text-slate-800" />
                </div>
                <span className="text-[9px] text-slate-400 font-mono mt-1">
                  VERIFY: https://fdms-bangladesh.gov.bd/v/{lastVoucher.voucherNo}
                </span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setShowReceiptModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                বন্ধ করুন
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#14532d] rounded-lg hover:bg-emerald-900 shadow-sm inline-flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>প্রিন্ট রসিদ</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
