import { useState, useEffect } from 'react'
import {
  LayoutGrid,
  UserPlus,
  Users,
  Package,
  FileCheck,
  FileText,
  Copy,
  UserSearch,
  BarChart3,
  Download,
  Terminal,
  CheckSquare,
  Trash2,
  Settings,
  RefreshCw,
  LogOut,
  Clock,
  Send,
  Truck,
  ShoppingBag,
  User,
  CheckCircle2,
  Search,
  Filter,
  ShieldCheck,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Landmark,
  Store,
  Gavel,
  MessageSquare,
  FileSpreadsheet,
  UserCheck,
  Scale,
  ShieldAlert,
  QrCode,
  MapPin,
  Globe,
  Sparkles,
  Layers
} from 'lucide-react'

// 6 Dedicated Stakeholder Role Dashboards
import SuperAdminDashboard from './dashboards/SuperAdminDashboard'
import UpazilaAdminDashboard from './dashboards/UpazilaAdminDashboard'
import DealerDashboard from './dashboards/DealerDashboard'
import WardPosDashboard from './dashboards/WardPosDashboard'
import FieldSaaoDashboard from './dashboards/FieldSaaoDashboard'
import CitizenDashboard from './dashboards/CitizenDashboard'

// Dedicated Role-Based Specialist Terminal Modules
import WardPosTerminalModule from './modules/WardPosTerminalModule'
import FieldInspectionSaaoModule from './modules/FieldInspectionSaaoModule'
import CitizenPortalModule from './modules/CitizenPortalModule'

// 10 Core Enterprise GovMIS Modules
import QuotaDOModule from './modules/QuotaDOModule'
import BankTreasuryModule from './modules/BankTreasuryModule'
import WardOutletsModule from './modules/WardOutletsModule'
import FarmerDatabaseModule from './modules/FarmerDatabaseModule'
import MobileCourtModule from './modules/MobileCourtModule'
import ComplaintsModule from './modules/ComplaintsModule'
import GovReportsModule from './modules/GovReportsModule'
import UserApprovalModule from './modules/UserApprovalModule'
import PriceCeilingModule from './modules/PriceCeilingModule'
import SmsAlertsModule from './modules/SmsAlertsModule'

// Dedicated Modular Feature Components
import DealersListModule from './modules/DealersListModule'
import AddDealerModule from './modules/AddDealerModule'
import StockManagementModule from './modules/StockManagementModule'
import DealerAuditModule from './modules/DealerAuditModule'
import DistributionRecordsModule from './modules/DistributionRecordsModule'
import DuplicateDataModule from './modules/DuplicateDataModule'
import FarmerSearchModule from './modules/FarmerSearchModule'
import ReportsAnalyticsModule from './modules/ReportsAnalyticsModule'
import DataExportModule from './modules/DataExportModule'
import SystemLogsModule from './modules/SystemLogsModule'
import VerifyStatisticsModule from './modules/VerifyStatisticsModule'
import DataCleanupModule from './modules/DataCleanupModule'
import SettingsModule from './modules/SettingsModule'

// 6 Core Stakeholder Roles specified by User
const ROLES = [
  {
    id: 'super-admin',
    label: 'সুপার অ্যাডমিন (MoA / DAE HQ)',
    name: 'ড. মোস্তাফিজুর রহমান',
    roleTitle: 'সুপার অ্যাডমিন (MoA / DAE HQ)',
    color: 'bg-purple-600',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
    defaultTab: 'dashboard',
    description: 'জাতীয় পর্যায়ের সার কোটা বরাদ্দ, সরকারি সর্বোচ্চ খুচরা মূল্য (MRP) ও সিলিং নীতিমালা নির্ধারণ, নতুন কর্মকর্তার অ্যাকাউন্ট অনুমোদন এবং সার্বিক অডিট লগ পরিচালনা।',
    priorityActions: [
      { label: 'জাতীয় কোটা বণ্টন', tab: 'quota-do' },
      { label: 'মূল্য (MRP) ও সিলিং নীতি', tab: 'price-ceiling' },
      { label: 'কর্মকর্তা অনুমোদন', tab: 'user-approval' },
      { label: 'সার্বিক অডিট লগ', tab: 'logs' }
    ]
  },
  {
    id: 'upazila-admin',
    label: 'উপজেলা অ্যাডমিন (UNO / UAO)',
    name: 'ড. আহমেদ রফিক',
    roleTitle: 'উপজেলা অ্যাডমিন (UNO / UAO)',
    color: 'bg-[#14532d]',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    defaultTab: 'dashboard',
    description: 'ডিলার নিয়োগ ও তালিকা নিয়ন্ত্রণ, সোনালী ব্যাংকের ট্রেজারি চালান যাচাই করে ডিও (DO) অনুমোদন, মোবাইল কোর্ট লগ এন্ট্রি, অনিয়মে ডিলার সাসপেন্ড এবং মাসিক ‘ফরম-খ’ প্রতিবেদন তৈরি।',
    priorityActions: [
      { label: 'ডিলার তালিকা ও নিয়ন্ত্রণ', tab: 'dealers-list' },
      { label: 'ট্রেজারি ও ডিও অনুমোদন', tab: 'quota-do' },
      { label: 'মোবাইল কোর্ট ও জরিমানা', tab: 'mobile-court' },
      { label: 'সরকারি ফরম-খ প্রতিবেদন', tab: 'gov-reports' }
    ]
  },
  {
    id: 'union-dealer',
    label: 'ইউনিয়ন সার ডিলার (Dealer)',
    name: 'আলহাজ্ব মোকাররম হোসেন',
    roleTitle: 'ইউনিয়ন সার ডিলার (Dealer)',
    color: 'bg-blue-600',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
    defaultTab: 'dashboard',
    description: 'ব্যাংকে পে-অর্ডার/চালান জমা দেওয়া, বাফার গোডাউন থেকে সার উত্তোলন (Inward), প্রধান গোডাউন থেকে ৩টি ওয়ার্ড বিক্রয়কেন্দ্রে সার পাঠানো (STO) এবং মাসিক ‘ফরম-ক’ দাখিল।',
    priorityActions: [
      { label: 'ব্যাংক চালান জমা', tab: 'bank-treasury' },
      { label: 'বাফার উত্তোলন (Inward)', tab: 'stock' },
      { label: '৩টি ওয়ার্ডে স্টক ট্রান্সফার (STO)', tab: 'ward-outlets' },
      { label: 'মাসিক ফরম-ক দাখিল', tab: 'gov-reports' }
    ]
  },
  {
    id: 'ward-pos',
    label: 'ওয়ার্ড বিক্রয়কেন্দ্র অপারেটর (POS)',
    name: 'মোঃ শফিকুল ইসলাম',
    roleTitle: 'ওয়ার্ড বিক্রয়কেন্দ্র অপারেটর (POS)',
    color: 'bg-amber-600',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    defaultTab: 'dashboard',
    description: 'কৃষকের NID বা কৃষক কার্ড যাচাই করে জমির সিলিং অনুযায়ী সার বিক্রয়, সরকার নির্ধারিত মূল্যে কিউআর কোডযুক্ত ক্যাশ মেমো প্রিন্ট এবং দৈনিক স্টক ক্লোজিং।',
    priorityActions: [
      { label: 'POS সেলস টার্মিনাল', tab: 'ward-pos' },
      { label: 'কৃষক সিলিং যাচাই', tab: 'farmer-search' },
      { label: 'বিতরণ রেকর্ড ও ক্যাশ মেমো', tab: 'distribution-records' }
    ]
  },
  {
    id: 'field-saao',
    label: 'মাঠ কর্মকর্তা (SAAO)',
    name: 'মোঃ শহিদুল ইসলাম',
    roleTitle: 'মাঠ কর্মকর্তা (SAAO / উপসহকারী)',
    color: 'bg-teal-600',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-200',
    defaultTab: 'dashboard',
    description: 'ফসলের মৌসুম অনুযায়ী জমির চাহিদা জরিপ এবং ওয়ার্ড বিক্রয়কেন্দ্রে গিয়ে জিপিএস লোকেশনসহ সরেজমিনে স্টক পরিদর্শন ও অডিট রিপোর্ট জমা দেওয়া।',
    priorityActions: [
      { label: 'জিপিএস সরেজমিনে পরিদর্শন', tab: 'field-saao' },
      { label: 'মৌসুমী জমি ও ফসল জরিপ', tab: 'field-saao' },
      { label: 'ডিলার অডিট নিরীক্ষা', tab: 'dealer-audit' }
    ]
  },
  {
    id: 'public-citizen',
    label: 'সাধারণ কৃষক ও নাগরিক (Public)',
    name: 'উন্মুক্ত নাগরিক সেবা',
    roleTitle: 'সাধারণ কৃষক ও নাগরিক (Public User)',
    color: 'bg-slate-700',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
    defaultTab: 'dashboard',
    description: 'কোনো লগইন ছাড়াই উন্মুক্ত মূল্যবোর্ড দেখা, নিকটস্থ ডিলারের লাইভ স্টক খোঁজা এবং অতিরিক্ত দাম বা অনিয়মের বিরুদ্ধে গোপনীয় অভিযোগ দাখিল করা।',
    priorityActions: [
      { label: 'উন্মুক্ত মূল্যবোর্ড (MRP)', tab: 'citizen-portal' },
      { label: 'নিকটস্থ ডিলার লাইভ স্টক', tab: 'citizen-portal' },
      { label: 'গোপনীয় অভিযোগ দাখিল', tab: 'citizen-portal' }
    ]
  }
];

// All 26 Modules Grouped
const allNavigationGroups = [
  {
    group: 'মূল মেনু',
    items: [
      { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: LayoutGrid },
    ],
  },
  {
    group: 'কোটা ও সরকারি সরবরাহ',
    items: [
      { id: 'quota-do', label: 'কোটা ও ডিও (DO) বরাদ্দ', icon: FileCheck, badge: 'অনুমোদন' },
      { id: 'bank-treasury', label: 'ব্যাংক চালান ও জামানত', icon: Landmark },
      { id: 'ward-outlets', label: 'ওয়ার্ড বিক্রয়কেন্দ্র ও স্টক', icon: Store },
      { id: 'price-ceiling', label: 'মূল্য (MRP) ও সিলিং নীতি', icon: Scale },
    ],
  },
  {
    group: 'ডিলার ও বিতরণ কার্যক্রম',
    items: [
      { id: 'ward-pos', label: 'ওয়ার্ড POS সেলস টার্মিনাল', icon: QrCode, badge: 'POS' },
      { id: 'dealers-list', label: 'ডিলার তালিকা', icon: Users, badge: '৬' },
      { id: 'add-dealer', label: 'ডিলার যুক্ত করুন', icon: UserPlus },
      { id: 'stock', label: 'স্টক ব্যবস্থাপনা', icon: Package },
      { id: 'dealer-audit', label: 'ডিলার অডিট / প্রোফাইল', icon: FileCheck },
      { id: 'distribution-records', label: 'বিতরণ রেকর্ড', icon: FileText, badge: '২১১' },
      { id: 'duplicate-data', label: 'ডুপ্লিকেট ডেটা', icon: Copy, badgeColor: 'rose', badge: '৪' },
    ],
  },
  {
    group: 'কৃষক ও নাগরিক সেবা',
    items: [
      { id: 'citizen-portal', label: 'উন্মুক্ত নাগরিক সেবা পোর্টাল', icon: Globe, badge: 'উন্মুক্ত' },
      { id: 'farmer-database', label: 'কৃষক নিবন্ধন ও ডেটাবেজ', icon: Users, badge: '৬৪' },
      { id: 'complaints', label: 'অভিযোগ ও প্রতিকার বক্স', icon: MessageSquare, badgeColor: 'rose', badge: '৩' },
      { id: 'farmer-search', label: 'কৃষক অনুসন্ধান', icon: UserSearch },
    ],
  },
  {
    group: 'তদারকি, আইন ও অ্যালার্ট',
    items: [
      { id: 'field-saao', label: 'মাঠ পরিদর্শন ও জিপিএস অডিট', icon: MapPin, badge: 'SAAO' },
      { id: 'mobile-court', label: 'পরিদর্শন ও মোবাইল কোর্ট', icon: Gavel },
      { id: 'sms-alerts', label: 'এসএমএস ও অ্যানোমালি অ্যালার্ট', icon: ShieldAlert, badgeColor: 'rose', badge: 'অ্যালার্ট' },
    ],
  },
  {
    group: 'সরকারি প্রতিবেদন ও এক্সপোর্ট',
    items: [
      { id: 'gov-reports', label: 'সরকারি ফরম-ক ও ফরম-খ', icon: FileSpreadsheet },
      { id: 'reports', label: 'রিপোর্ট ও বিশ্লেষণ', icon: BarChart3 },
      { id: 'export', label: 'ডেটা এক্সপোর্ট', icon: Download },
    ],
  },
  {
    group: 'প্রশাসন ও নিয়ন্ত্রণ',
    items: [
      { id: 'user-approval', label: 'কর্মকর্তা ও ইউজার অনুমোদন', icon: UserCheck, badge: '২' },
      { id: 'logs', label: 'সিস্টেম লগ', icon: Terminal },
      { id: 'verify', label: 'পরিসংখ্যান যাচাই', icon: CheckSquare },
      { id: 'cleanup', label: 'ডেটা মুছুন', icon: Trash2 },
      { id: 'settings', label: 'সেটিংস', icon: Settings },
    ],
  },
];

// Role-Tailored Navigation Menus
const roleNavigationGroups = {
  'super-admin': [
    {
      group: 'মূল মেনু',
      items: [
        { id: 'dashboard', label: 'জাতীয় সার ড্যাশবোর্ড', icon: LayoutGrid },
      ],
    },
    {
      group: 'জাতীয় কোটা ও সরবরাহ',
      items: [
        { id: 'quota-do', label: 'জাতীয় কোটা ও ডিও (DO)', icon: FileCheck, badge: 'বরাদ্দ' },
        { id: 'price-ceiling', label: 'সর্বোচ্চ খুচরা মূল্য (MRP)', icon: Scale, badge: 'গেজেট' },
        { id: 'stock', label: 'বাফার গোডাউন ও জাতীয় মজুত', icon: Package },
      ],
    },
    {
      group: 'সারাদেশে ডিলার নেটওয়ার্ক',
      items: [
        { id: 'dealers-list', label: 'অনুমোদিত ডিলার তালিকা', icon: Users, badge: '৫,৪২০' },
        { id: 'dealer-audit', label: 'ডিলার নিরীক্ষা ও কমপ্লায়েন্স', icon: FileCheck },
        { id: 'gov-reports', label: 'জাতীয় ফরম-ক ও ফরম-খ সংকলন', icon: FileSpreadsheet },
      ],
    },
    {
      group: 'কেন্দ্রীয় প্রশাসন ও অডিট',
      items: [
        { id: 'user-approval', label: 'কর্মকর্তা ও ইউজার অনুমোদন', icon: UserCheck, badge: '২' },
        { id: 'logs', label: 'সার্বিক অডিট ও নিরাপত্তা লগ', icon: Terminal },
        { id: 'export', label: 'জাতীয় ডেটা এক্সপোর্ট', icon: Download },
        { id: 'settings', label: 'কেন্দ্রীয় নীতি সেটিংস', icon: Settings },
      ],
    },
  ],

  'upazila-admin': [
    {
      group: 'মূল মেনু',
      items: [
        { id: 'dashboard', label: 'উপজেলা ড্যাশবোর্ড', icon: LayoutGrid },
      ],
    },
    {
      group: 'ডিলার ও ডিও অনুমোদন',
      items: [
        { id: 'dealers-list', label: 'ডিলার তালিকা ও নিয়ন্ত্রণ', icon: Users, badge: '৬' },
        { id: 'add-dealer', label: 'ডিলার নিয়োগ ফরম', icon: UserPlus },
        { id: 'quota-do', label: 'ট্রেজারি চালান ও ডিও (DO)', icon: FileCheck, badge: 'অনুমোদন' },
        { id: 'bank-treasury', label: 'সোনালী ব্যাংক চালান ও জামানত', icon: Landmark },
        { id: 'stock', label: 'উপজেলা সার মজুত লেজার', icon: Package },
        { id: 'duplicate-data', label: 'ডুপ্লিকেট ডেটা নিরীক্ষা', icon: Copy, badgeColor: 'rose', badge: '৪' },
      ],
    },
    {
      group: 'মাঠ পরিদর্শন ও আইন',
      items: [
        { id: 'mobile-court', label: 'ভ্রাম্যমাণ আদালত ও সার জব্দ', icon: Gavel },
        { id: 'field-saao', label: 'মাঠ পরিদর্শন (SAAO)', icon: MapPin, badge: 'SAAO' },
        { id: 'complaints', label: 'কৃষক অভিযোগ ও সমাধান', icon: MessageSquare, badgeColor: 'rose', badge: '৩' },
        { id: 'sms-alerts', label: 'এসএমএস লগ ও অ্যালার্ট', icon: ShieldAlert, badgeColor: 'rose', badge: 'অ্যালার্ট' },
      ],
    },
    {
      group: 'সরকারি প্রতিবেদন ও এক্সপোর্ট',
      items: [
        { id: 'gov-reports', label: 'উপজেলা মাসিক ‘ফরম-খ’', icon: FileSpreadsheet },
        { id: 'reports', label: 'বিতরণ ও পরিসংখ্যান রিপোর্ট', icon: BarChart3 },
        { id: 'export', label: 'প্রতিবেদন এক্সপোর্ট', icon: Download },
        { id: 'verify', label: 'পরিসংখ্যান যাচাই', icon: CheckSquare },
      ],
    },
  ],

  'union-dealer': [
    {
      group: 'মূল মেনু',
      items: [
        { id: 'dashboard', label: 'ডিলার ড্যাশবোর্ড', icon: LayoutGrid },
      ],
    },
    {
      group: 'ব্যাংক ও বাফার উত্তোলন',
      items: [
        { id: 'bank-treasury', label: 'সোনালী ব্যাংক চালান ও পে-অর্ডার', icon: Landmark },
        { id: 'stock', label: 'বাফার গোডাউন উত্তোলন (Inward)', icon: Package },
        { id: 'dealer-audit', label: 'নিজস্ব ডিলার প্রোফাইল', icon: FileCheck },
      ],
    },
    {
      group: 'ওয়ার্ড বিক্রয়কেন্দ্র নেটওয়ার্ক',
      items: [
        { id: 'ward-outlets', label: '৩টি ওয়ার্ডে সার প্রেরণ (STO)', icon: Store, badge: '৩টি কেন্দ্র' },
        { id: 'distribution-records', label: 'বিতরণ রেকর্ড ও চালান রশিদ', icon: FileText, badge: '২১১' },
        { id: 'farmer-search', label: 'কৃষক কার্ড ও সিলিং যাচাই', icon: UserSearch },
      ],
    },
    {
      group: 'সরকারি ফরম ও মূল্য',
      items: [
        { id: 'gov-reports', label: 'মাসিক সরকারি ‘ফরম-ক’ দাখিল', icon: FileSpreadsheet },
        { id: 'price-ceiling', label: 'অনুমোদিত সরকারি সার দর (MRP)', icon: Scale },
        { id: 'export', label: 'ডিলার লেজার এক্সপোর্ট', icon: Download },
      ],
    },
  ],

  'ward-pos': [
    {
      group: 'মূল মেনু',
      items: [
        { id: 'dashboard', label: 'POS সার বিক্রয় ড্যাশবোর্ড', icon: LayoutGrid },
      ],
    },
    {
      group: 'সার বিক্রয় টার্মিনাল',
      items: [
        { id: 'ward-pos', label: 'লাইভ POS সেলস টার্মিনাল', icon: QrCode, badge: 'কাউন্টার' },
        { id: 'farmer-search', label: 'NID ও কৃষক কার্ড অনুসন্ধান', icon: UserSearch },
        { id: 'distribution-records', label: 'দৈনিক বিক্রয় ও ক্যাশ মেমো', icon: FileText, badge: '২৮টি আজ' },
      ],
    },
    {
      group: 'আউটলেট ও কৃষক ডেটাবেজ',
      items: [
        { id: 'ward-outlets', label: 'ওয়ার্ড বিক্রয়কেন্দ্র মজুত (STO)', icon: Store },
        { id: 'farmer-database', label: 'নিবন্ধিত কৃষক তালিকা', icon: Users, badge: '৬৪' },
        { id: 'price-ceiling', label: 'সরকার নির্ধারিত দর (MRP)', icon: Scale },
        { id: 'complaints', label: 'কৃষক সহায়তা ও অভিযোগ গ্রহণ', icon: MessageSquare },
      ],
    },
  ],

  'field-saao': [
    {
      group: 'মূল মেনু',
      items: [
        { id: 'dashboard', label: 'মাঠ কর্মকর্তা ড্যাশবোর্ড', icon: LayoutGrid },
      ],
    },
    {
      group: 'সরেজমিনে পরিদর্শন ও অডিট',
      items: [
        { id: 'field-saao', label: 'জিপিএস সরেজমিনে পরিদর্শন', icon: MapPin, badge: 'SAAO' },
        { id: 'ward-outlets', label: 'ওয়ার্ড বিক্রয়কেন্দ্র পরিদর্শন', icon: Store },
        { id: 'dealer-audit', label: 'ডিলার গুদাম ও খতিয়ান অডিট', icon: FileCheck },
        { id: 'mobile-court', label: 'পরিদর্শন ও মোবাইল কোর্ট রিপোর্ট', icon: Gavel },
      ],
    },
    {
      group: 'কৃষক ও ফসল জরিপ',
      items: [
        { id: 'farmer-database', label: 'কৃষক নিবন্ধন ও জমি হালনাগাদ', icon: Users, badge: '৬৪' },
        { id: 'farmer-search', label: 'কৃষকের জমি ও সিলিং খতিয়ান', icon: UserSearch },
        { id: 'sms-alerts', label: 'অস্বাভাবিক বিক্রয় সতর্কতা', icon: ShieldAlert, badgeColor: 'rose', badge: 'অ্যালার্ট' },
        { id: 'complaints', label: 'মাঠ পর্যায়ের কৃষক অভিযোগ', icon: MessageSquare },
      ],
    },
  ],

  'public-citizen': [
    {
      group: 'মূল মেনু',
      items: [
        { id: 'dashboard', label: 'নাগরিক সেবা ড্যাশবোর্ড', icon: LayoutGrid },
      ],
    },
    {
      group: 'উন্মুক্ত নাগরিক তথ্যসেবা',
      items: [
        { id: 'citizen-portal', label: 'উন্মুক্ত মূল্যবোর্ড ও লাইভ স্টক', icon: Globe, badge: 'উন্মুক্ত' },
        { id: 'price-ceiling', label: 'সরকারি সর্বোচ্চ খুচরা মূল্য (MRP)', icon: Scale },
        { id: 'dealers-list', label: 'অনুমোদিত ডিলারদের তালিকা', icon: Users, badge: '৬' },
        { id: 'farmer-search', label: 'আমার কৃষক কার্ড ও কোটা তথ্য', icon: UserSearch },
      ],
    },
    {
      group: 'জনপ্রতিকার ও অভিযোগ',
      items: [
        { id: 'complaints', label: 'গোপনীয় অভিযোগ দাখিল বক্স', icon: MessageSquare, badge: 'জিআরএস' },
      ],
    },
  ],
};

export default function Dashboard({ onLogout, currentUser = { name: 'ড. আহমেদ রফিক', role: 'উপজেলা অ্যাডমিন (UNO / UAO)' } }) {
  const userRole = currentUser?.role || 'উপজেলা অ্যাডমিন (UNO / UAO)';
  const matchedRole = ROLES.find(r => r.roleTitle === userRole || (userRole && r.label?.includes(userRole))) || ROLES[1];
  
  const [activeRole, setActiveRole] = useState(matchedRole);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [refreshKey, setRefreshKey] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  useEffect(() => {
    document.title = `${activeRole?.label || 'ড্যাশবোর্ড'} | সার বিতরণ ব্যবস্থাপনা সিস্টেম - FDMS Bangladesh`
  }, [activeRole]);

  // Synchronize role if currentUser prop changes
  useEffect(() => {
    const roleStr = currentUser?.role || 'উপজেলা অ্যাডমিন (UNO / UAO)';
    const matched = ROLES.find(r => r.roleTitle === roleStr || (roleStr && r.label?.includes(roleStr))) || ROLES[1];
    setActiveRole(matched);
    setActiveTab('dashboard');
  }, [currentUser]);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationSuccess(true);
      setTimeout(() => setVerificationSuccess(false), 3500);
    }, 700);
  };

  // Determine which navigation groups to display in the sidebar
  const currentNavigationGroups = roleNavigationGroups[activeRole.id] || allNavigationGroups;

  return (
    <div className="min-h-screen bg-[#f2f6f3] text-slate-800 flex flex-col font-sans select-none antialiased">

      {/* ========================================================
          TOP HEADER (Formal Government Deep Emerald Navbar)
          Fixed & Sticky
          ======================================================== */}
      <header className="bg-gradient-to-r from-[#123e21] via-[#164e2a] to-[#144525] text-white px-3 sm:px-5 shadow-sm border-b border-emerald-900/40 flex items-center justify-between sticky top-0 z-40 h-14">

        {/* Left Branding */}
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center p-1 border border-white/20 shadow-inner">
            <img src="/logo.jpg" alt="FDMS" className="w-full h-full object-contain rounded-md" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xs sm:text-sm font-bold tracking-tight text-white leading-tight">
                FDMS BANGLADESH — সার বিতরণ ব্যবস্থাপনা
              </h1>
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/20 text-[9px] font-medium">
                জাতীয় পোর্টাল
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-emerald-200/90 font-normal tracking-wide">
              {activeRole.label} কনসোল — DEMO WORKSPACE
            </p>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-2 text-xs">

          {/* Quick Help / Info Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-white/10 border border-white/15 rounded-lg text-emerald-100 text-[11px] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span>সিস্টেম স্টেটাস: ১০০% সক্রিয়</span>
          </div>

          {/* Interactive Role Switcher Pill & Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              className="flex items-center bg-black/35 hover:bg-black/50 rounded-xl py-1 px-2.5 border border-white/20 text-white cursor-pointer transition-colors shadow-2xs"
              title="ক্লিক করে স্টেকহোল্ডার ভূমিকা পরিবর্তন করুন"
            >
              <div className={`w-5 h-5 rounded-full ${activeRole.color} flex items-center justify-center text-[10px] font-bold text-white mr-1.5 border border-white/30 shrink-0`}>
                {activeRole.name.charAt(0)}
              </div>
              <div className="flex flex-col text-left mr-1.5">
                <span className="font-bold text-[11px] text-white leading-tight">{activeRole.name}</span>
                <span className="text-[9px] text-emerald-200 font-medium leading-tight">{activeRole.roleTitle}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-emerald-300 ml-0.5 shrink-0" />
            </button>

            {/* Dropdown Menu for 6 Stakeholder Roles */}
            {showRoleDropdown && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 p-2 text-slate-800 animate-scale-in">
                <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">স্টেকহোল্ডার ভূমিকা পরিবর্তন</span>
                    <span className="text-[11px] text-slate-600">৬টি অনুমোদিত গভমেন্ট রোলে ইন্টারফেস রূপান্তর</span>
                  </div>
                  <button
                    onClick={() => setShowRoleDropdown(false)}
                    className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
                  >
                    ✕
                  </button>
                </div>
                <div className="py-1 space-y-1 max-h-[380px] overflow-y-auto">
                  {ROLES.map(r => (
                    <button
                      key={r.id}
                      onClick={() => {
                        setActiveRole(r);
                        setShowRoleDropdown(false);
                        setActiveTab('dashboard');
                      }}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 cursor-pointer ${
                        activeRole.id === r.id ? 'bg-emerald-50 text-emerald-950 border border-emerald-300' : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 rounded-full ${r.color} mt-0.5 shrink-0 shadow-2xs`}></div>
                      <div>
                        <div className="text-xs font-bold">{r.label}</div>
                        <div className="text-[10px] text-slate-500 leading-relaxed mt-0.5">{r.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            title="লগআউট করে প্রস্থান করুন"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-600/80 text-white border border-white/15 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ========================================================
          BODY: SIDEBAR + MAIN CONTENT
          Sidebar is FIXED & STICKY, Scrolling Independently
          ======================================================== */}
      <div className="flex-1 flex flex-col md:flex-row max-w-[1440px] w-full mx-auto">

        {/* Left Sidebar (Formal Grouped Navigation - Fixed & Sticky) */}
        <aside className="w-full md:w-64 lg:w-72 bg-white md:border-r border-slate-200/80 flex flex-col shrink-0 py-3.5 px-3 shadow-[1px_0_4px_rgba(0,0,0,0.02)] md:sticky md:top-14 md:self-start md:h-[calc(100vh-3.5rem)] md:overflow-y-auto">
          <div className="space-y-3.5">
            {/* Role Header Badge in Sidebar */}
            <div className="px-2 pb-2.5 border-b border-slate-100 flex items-center gap-2 truncate">
              <span className={`w-2.5 h-2.5 rounded-full ${activeRole.color} shrink-0`}></span>
              <span className="text-[11.5px] font-bold text-slate-800 truncate">
                {activeRole.label}
              </span>
            </div>

            <nav className="space-y-4">
              {currentNavigationGroups.map((group, gIdx) => (
                <div key={gIdx} className="space-y-1">
                  <p className="px-3 text-xs font-semibold text-slate-500 tracking-normal mb-1">
                    {group.group}
                  </p>
                  <div className="space-y-0.5">
                    {group.items.map((item) => {
                      const Icon = item.icon
                      const isActive = activeTab === item.id
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium transition-all text-left cursor-pointer group ${isActive
                              ? 'bg-[#ecf8ef] text-[#14532d] font-bold border-l-4 border-[#166534] shadow-2xs'
                              : 'text-slate-700 hover:bg-slate-50/90 hover:text-slate-900'
                            }`}
                        >
                          <div className="flex items-center space-x-2.5 truncate">
                            <Icon
                              className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-[#166534]' : 'text-slate-400 group-hover:text-slate-600'
                                }`}
                              strokeWidth={1.85}
                            />
                            <span className="truncate">{item.label}</span>
                          </div>
                          {item.badge && (
                            <span
                              className={`text-[11px] font-bold px-1.5 py-0.2 rounded-full font-mono transition-transform ${item.badgeColor === 'rose'
                                  ? 'bg-rose-100/90 text-rose-700'
                                  : 'bg-emerald-100/90 text-emerald-800'
                                }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Workspace Area (Formal Compact Density) */}
        <main className="flex-1 p-3.5 sm:p-4 lg:p-5 space-y-4 min-w-0">

          {activeTab === 'dashboard' ? (
            <>
              {/* Active Role Governance & Responsibility Card */}
              <div className="bg-gradient-to-r from-emerald-50/90 via-white to-slate-50 border border-emerald-200/90 rounded-xl p-3.5 shadow-2xs">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg ${activeRole?.color || 'bg-[#14532d]'} text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs mt-0.5`}>
                      {activeRole?.name ? activeRole.name.charAt(0) : 'অ'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-emerald-200 text-emerald-900">
                          সক্রিয় স্টেকহোল্ডার ভূমিকা: {activeRole?.label || 'অ্যাডমিন'}
                        </span>
                        <span className="text-xs font-bold text-slate-800">{activeRole?.name || 'ব্যবহারকারী'}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                        {activeRole?.description || ''}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap shrink-0">
                    {(activeRole?.priorityActions || []).map((act, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(act.tab)}
                        className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer shadow-2xs"
                      >
                        {act.label} &rarr;
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Role-Specific Dedicated Dashboard Content */}
              {activeRole.id === 'super-admin' && (
                <SuperAdminDashboard onNavigate={setActiveTab} />
              )}

              {activeRole.id === 'upazila-admin' && (
                <UpazilaAdminDashboard
                  onNavigate={setActiveTab}
                  onVerify={handleVerify}
                  isVerifying={isVerifying}
                  verificationSuccess={verificationSuccess}
                  onRefresh={handleRefresh}
                  refreshKey={refreshKey}
                />
              )}

              {activeRole.id === 'union-dealer' && (
                <DealerDashboard onNavigate={setActiveTab} />
              )}

              {activeRole.id === 'ward-pos' && (
                <WardPosDashboard onNavigate={setActiveTab} />
              )}

              {activeRole.id === 'field-saao' && (
                <FieldSaaoDashboard onNavigate={setActiveTab} />
              )}

              {activeRole.id === 'public-citizen' && (
                <CitizenDashboard onNavigate={setActiveTab} />
              )}

            </>
          ) : (
            /* Sub-View for Enterprise Modules and Other Sidebar Tabs */
            <div className="space-y-4">
              {/* Back to dashboard button & breadcrumb bar */}
              <div className="bg-white rounded-xl p-3 px-4 border border-slate-200 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-[#14532d] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    &larr; ড্যাশবোর্ডে ফিরুন
                  </button>
                  <span className="text-slate-300">/</span>
                  <span className="text-xs font-semibold text-slate-800">
                    {allNavigationGroups.flatMap(g => g.items).find(m => m.id === activeTab)?.label || 'মডিউল বিবরণ'}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
                  FDMS-MIS-BANGLADESH • {activeRole?.label}
                </div>
              </div>

              {/* Role-Specific Specialist Terminal Modules */}
              {activeTab === 'ward-pos' && <WardPosTerminalModule />}
              {activeTab === 'field-saao' && <FieldInspectionSaaoModule />}
              {activeTab === 'citizen-portal' && <CitizenPortalModule onBackToDashboard={() => setActiveTab('dashboard')} />}

              {/* Dedicated Modular Views for All Features */}
              {activeTab === 'quota-do' && <QuotaDOModule />}
              {activeTab === 'bank-treasury' && <BankTreasuryModule />}
              {activeTab === 'ward-outlets' && <WardOutletsModule />}
              {activeTab === 'price-ceiling' && <PriceCeilingModule />}

              {activeTab === 'dealers-list' && <DealersListModule />}
              {activeTab === 'add-dealer' && <AddDealerModule />}
              {activeTab === 'stock' && <StockManagementModule />}
              {activeTab === 'dealer-audit' && <DealerAuditModule />}
              {activeTab === 'distribution-records' && <DistributionRecordsModule />}
              {activeTab === 'duplicate-data' && <DuplicateDataModule />}

              {activeTab === 'farmer-database' && <FarmerDatabaseModule />}
              {activeTab === 'complaints' && <ComplaintsModule />}
              {activeTab === 'farmer-search' && <FarmerSearchModule />}

              {activeTab === 'mobile-court' && <MobileCourtModule />}
              {activeTab === 'sms-alerts' && <SmsAlertsModule />}

              {activeTab === 'gov-reports' && <GovReportsModule />}
              {activeTab === 'reports' && <ReportsAnalyticsModule />}
              {activeTab === 'export' && <DataExportModule />}

              {activeTab === 'user-approval' && <UserApprovalModule />}
              {activeTab === 'logs' && <SystemLogsModule />}
              {activeTab === 'verify' && <VerifyStatisticsModule />}
              {activeTab === 'cleanup' && <DataCleanupModule />}
              {activeTab === 'settings' && <SettingsModule />}
            </div>
          )}

        </main>

      </div>

      {/* ========================================================
          FORMAL GOVERNMENT FOOTER
          ======================================================== */}
      <footer className="mt-auto border-t border-slate-200/90 bg-white py-3.5 px-4 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between max-w-[1440px] w-full mx-auto">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-slate-700">FDMS BANGLADESH</span>
          <span className="text-slate-300">|</span>
          <span>সার ডিলার ও বিতরণ ব্যবস্থাপনা সিস্টেম</span>
        </div>
        <div className="text-[11px] text-slate-400 mt-1 sm:mt-0 font-medium">
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার • Developed by Toufiq &amp; Fahad
        </div>
      </footer>

    </div>
  )
}
