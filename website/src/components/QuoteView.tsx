"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Clock, 
  Check, 
  Phone, 
  Mail, 
  User, 
  Building2, 
  Info, 
  TrendingUp,
  FileText,
  DollarSign
} from 'lucide-react';

interface LocalBooking {
  id: string;
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  area: number;
  location: string;
  furnishing: string;
  totalCost: number;
  monthlyEMI: number;
  date: string;
}

export default function QuoteView() {
  // Property Calculator state
  const [propertyType, setPropertyType] = useState<'Apartment' | 'Villa' | 'Penthouse' | 'Commercial' | 'Plot'>('Apartment');
  const [areaSqFt, setAreaSqFt] = useState<number>(1800);
  const [location, setLocation] = useState<string>('Patia');
  const [furnishing, setFurnishing] = useState<'Semi-Furnished' | 'Fully-Furnished' | 'Ultra-Luxury'>('Fully-Furnished');
  const [includeAmenities, setIncludeAmenities] = useState<boolean>(true);
  const [includeParking, setIncludeParking] = useState<boolean>(true);
  
  // Home Loan & EMI State
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  // Contact Form Inputs
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // UI state
  const [submittedBookings, setSubmittedBookings] = useState<LocalBooking[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [activeFormBookingCost, setActiveFormBookingCost] = useState<number>(0);

  // Load existing submitted bookings from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('jagdish_property_bookings');
      if (saved) {
        setSubmittedBookings(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to parse saved bookings', e);
    }
  }, []);

  // Hotspots rates
  const getBaseRatePerSqFt = () => {
    switch (location) {
      case 'Patia': return 6500;
      case 'Jayadev Vihar': return 8500;
      case 'Marine Drive': return 7500;
      case 'Cuttack': return 5500;
      case 'Rourkela': return 4500;
      default: return 5000;
    }
  };

  const getTypeMultiplier = () => {
    switch (propertyType) {
      case 'Apartment': return 1.0;
      case 'Villa': return 1.25;
      case 'Penthouse': return 1.4;
      case 'Commercial': return 1.3;
      case 'Plot': return 0.8;
      default: return 1.0;
    }
  };

  const getFurnishingSurcharge = () => {
    switch (furnishing) {
      case 'Semi-Furnished': return 350;
      case 'Fully-Furnished': return 900;
      case 'Ultra-Luxury': return 1600;
      default: return 0;
    }
  };

  // Pricing calculations
  const calculateCosts = () => {
    const baseRate = getBaseRatePerSqFt();
    const typeMult = getTypeMultiplier();
    const furnSurcharge = getFurnishingSurcharge();
    
    // Core property structure cost
    const basePropertyCost = areaSqFt * (baseRate * typeMult + furnSurcharge);
    
    // Custom amenities surcharges
    const clubhouseAmenitiesCost = includeAmenities ? 350000 : 0;
    const premiumParkingCost = includeParking ? 250000 : 0;
    
    const subtotalCost = basePropertyCost + clubhouseAmenitiesCost + premiumParkingCost;
    
    // Taxes and Stamp Duty
    const stampDutyRegistration = subtotalCost * 0.07; // 7% Stamp duty & registry
    const gstSocietyFund = subtotalCost * 0.055; // 5.5% GST & capital infrastructure fund
    
    const grandTotalValuation = subtotalCost + stampDutyRegistration + gstSocietyFund;
    
    // Loan & EMI calculations
    const estimatedDownPayment = grandTotalValuation * (downPaymentPercent / 100);
    const principalLoanAmount = grandTotalValuation - estimatedDownPayment;
    
    // EMI Formula: [P * R * (1+R)^N] / [(1+R)^N - 1]
    const monthlyRate = interestRate / 12 / 100;
    const totalPaymentsMonths = loanTenureYears * 12;
    
    let monthlyEMI = 0;
    if (principalLoanAmount > 0 && monthlyRate > 0) {
      monthlyEMI = (principalLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPaymentsMonths)) / 
                   (Math.pow(1 + monthlyRate, totalPaymentsMonths) - 1);
    }

    return {
      base: Math.round(basePropertyCost),
      amenities: Math.round(clubhouseAmenitiesCost),
      parking: Math.round(premiumParkingCost),
      stampDuty: Math.round(stampDutyRegistration),
      taxes: Math.round(gstSocietyFund),
      total: Math.round(grandTotalValuation),
      downPayment: Math.round(estimatedDownPayment),
      loanAmount: Math.round(principalLoanAmount),
      emi: Math.round(monthlyEMI)
    };
  };

  const costBreakdown = calculateCosts();

  // Handle Form Submission
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    const newBooking: LocalBooking = {
      id: 'PROP-' + Math.floor(1000 + Math.random() * 9000),
      name: fullName,
      phone,
      email,
      propertyType,
      area: areaSqFt,
      location,
      furnishing,
      totalCost: costBreakdown.total,
      monthlyEMI: costBreakdown.emi,
      date: new Date().toLocaleDateString()
    };

    const updated = [newBooking, ...submittedBookings];
    setSubmittedBookings(updated);
    try {
      localStorage.setItem('jagdish_property_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    setActiveFormBookingCost(costBreakdown.total);
    setShowSuccessModal(true);

    // Reset fields
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString()}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      
      {/* Header Introduction */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-semibold text-xs text-safety-blue tracking-[0.2em] uppercase mb-2 block">
          VALUATION & MORTGAGE ENGINE
        </span>
        <h2 className="text-3xl font-extrabold text-safety-blue">
          Property Calculator & EMI Guide
        </h2>
        <div className="w-16 h-1 bg-caution-yellow mx-auto mt-4" />
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Estimate property valuations, stamp registration fees, down-payment parameters, and monthly mortgage EMIs localized to Bhubaneswar & Odisha real estate markets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Step-by-Step Inputs Form - 7 Cols */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-150">
          
          <h3 className="text-lg font-bold text-safety-blue flex items-center gap-2 mb-6 border-b border-gray-100 pb-3">
            <Calculator className="w-5 h-5 text-caution-yellow" />
            1. Property Configuration
          </h3>

          <div className="space-y-6">
            
            {/* Property Type Selection */}
            <div>
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-3">
                Select Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {(['Apartment', 'Villa', 'Penthouse', 'Commercial', 'Plot'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setPropertyType(type);
                      if (type === 'Villa') setAreaSqFt(3500);
                      else if (type === 'Penthouse') setAreaSqFt(5000);
                      else if (type === 'Plot') setAreaSqFt(2400);
                      else if (type === 'Commercial') setAreaSqFt(4000);
                      else setAreaSqFt(1800);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      propertyType === type 
                        ? 'bg-safety-blue text-white border-safety-blue shadow-sm font-bold' 
                        : 'bg-white hover:bg-slate-50 text-gray-700 border-gray-200'
                    }`}
                  >
                    <span className="text-xs tracking-wide">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Range Slider for Area */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                  Built-up / Plot Area Size
                </label>
                <span className="bg-zinc-50 text-safety-blue font-bold px-3 py-1 text-sm rounded-lg border border-gray-100">
                  {areaSqFt.toLocaleString()} Sq. Ft.
                </span>
              </div>
              <input 
                type="range"
                min={propertyType === 'Apartment' ? 800 : 1200}
                max={propertyType === 'Commercial' ? 25000 : 10000}
                step={propertyType === 'Apartment' ? 50 : 100}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-safety-blue focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1 uppercase">
                <span>Min Size</span>
                <span>Max Size</span>
              </div>
            </div>

            {/* Location & Furnishing Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                  Hotspot Prime Location
                </label>
                <div className="relative">
                  <select 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:border-safety-blue focus:ring-1 focus:ring-safety-blue cursor-pointer"
                  >
                    <option value="Patia">Patia, Bhubaneswar (Premium Hub)</option>
                    <option value="Jayadev Vihar">Jayadev Vihar, Bhubaneswar (Luxury Core)</option>
                    <option value="Marine Drive">Marine Drive, Puri (Seafront Luxury)</option>
                    <option value="Cuttack">Cuttack Central (Urban Commercial)</option>
                    <option value="Rourkela">Rourkela (Rapidly Appreciating Residential)</option>
                  </select>
                  <MapPin className="absolute right-3 top-3.5 w-4 h-4 text-caution-yellow pointer-events-none" />
                </div>
              </div>

              {/* Furnishing Quality Tiers */}
              <div>
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                  Furnishing Standard
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Semi-Furnished', 'Fully-Furnished', 'Ultra-Luxury'] as const).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setFurnishing(tier)}
                      className={`py-3 px-1 rounded-lg border text-[11px] font-bold text-center transition-all cursor-pointer ${
                        furnishing === tier 
                          ? 'bg-safety-blue text-white border-safety-blue' 
                          : 'bg-white hover:bg-slate-50 text-gray-600 border-gray-200'
                      }`}
                    >
                      {tier.split('-')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom checkboxes */}
            <div className="pt-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-3">
                Included Property Accents
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-slate-50 cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={includeAmenities}
                    onChange={(e) => setIncludeAmenities(e.target.checked)}
                    className="w-4.5 h-4.5 text-safety-blue focus:ring-safety-blue rounded border-gray-300 pointer-events-auto cursor-pointer"
                  />
                  <div>
                    <span className="text-xs font-bold text-gray-700 block">Clubhouse & Pool Access</span>
                    <span className="text-[10px] text-gray-400 block">+ ₹3,50,000 flat</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-slate-50 cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={includeParking}
                    onChange={(e) => setIncludeParking(e.target.checked)}
                    className="w-4.5 h-4.5 text-safety-blue focus:ring-safety-blue rounded border-gray-300 pointer-events-auto cursor-pointer"
                  />
                  <div>
                    <span className="text-xs font-bold text-gray-700 block">Dedicated Covered Parking</span>
                    <span className="text-[10px] text-gray-400 block">+ ₹2,50,000 flat</span>
                  </div>
                </label>

              </div>
            </div>

            {/* Home Mortgage EMI Sliders */}
            <div className="border-t border-gray-150 pt-6 space-y-4">
              <h3 className="text-sm font-extrabold text-safety-blue uppercase tracking-wider block">
                Mortgage Loan Estimator
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-600 mb-1.5">
                    <span>Down Payment</span>
                    <span>{downPaymentPercent}% ({formatCurrency(costBreakdown.downPayment)})</span>
                  </div>
                  <input 
                    type="range"
                    min={10}
                    max={90}
                    step={5}
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-caution-yellow focus:outline-none"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-600 mb-1.5">
                    <span>Loan Tenure</span>
                    <span>{loanTenureYears} Years</span>
                  </div>
                  <input 
                    type="range"
                    min={5}
                    max={30}
                    step={5}
                    value={loanTenureYears}
                    onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-caution-yellow focus:outline-none"
                  />
                </div>
              </div>
            </div>

          </div>

          <form onSubmit={handleSubmitBooking} className="mt-8 border-t border-gray-150 pt-6 space-y-4">
            <h3 className="text-base font-bold text-safety-blue flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-caution-yellow" />
              2. Request Callback & Site Visit
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <input 
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Priyabrata Samantaray"
                    className="w-full text-xs bg-white border border-gray-200 rounded-lg p-3 pl-9 text-gray-700 focus:outline-none focus:border-safety-blue focus:ring-1 focus:ring-safety-blue"
                  />
                  <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Contact Number *
                </label>
                <div className="relative">
                  <input 
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 94370 XXXXX"
                    className="w-full text-xs bg-white border border-gray-200 rounded-lg p-3 pl-9 text-gray-700 focus:outline-none focus:border-safety-blue focus:ring-1 focus:ring-safety-blue"
                  />
                  <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                Email Address *
              </label>
              <div className="relative">
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. investor@domain.com"
                  className="w-full text-xs bg-white border border-gray-200 rounded-lg p-3 pl-9 text-gray-700 focus:outline-none focus:border-safety-blue focus:ring-1 focus:ring-safety-blue"
                />
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="bg-safety-blue text-white w-full py-4 font-bold text-xs tracking-widest rounded-xl hover:bg-caution-yellow hover:text-white transition-all uppercase shadow mt-2 flex items-center justify-center gap-2 border-0 cursor-pointer"
            >
              🔒 Lock in Appraisal & Request Tour
            </motion.button>

          </form>

        </div>

        {/* Pricing & Mortgage Summary Panel - 5 Cols */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-[#10233D] text-white p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-caution-yellow/5 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-sm font-bold text-caution-yellow uppercase tracking-widest mb-6 block border-b border-white/10 pb-3">
              Appraisal Summary
            </h3>

            {/* Total Valuation Row */}
            <div className="mb-6">
              <span className="text-xs text-slate-300 uppercase tracking-wider block mb-1">
                Estimated Property Value
              </span>
              <div className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-baseline gap-1">
                {formatCurrency(costBreakdown.total)}
              </div>
              <span className="text-[10px] text-caution-yellow uppercase tracking-wider block mt-1">
                Registry, Taxes & Parking Fees Included
              </span>
            </div>

            <div className="space-y-4 text-xs border-t border-white/10 pt-5">
              
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-caution-yellow" />
                  Base Property Price:
                </span>
                <span className="font-bold text-white">
                  {formatCurrency(costBreakdown.base)}
                </span>
              </div>

              {includeAmenities && (
                <div className="flex justify-between items-center text-slate-300">
                  <span>↳ Clubhouse & Pool Premium:</span>
                  <span className="font-bold text-white">
                    {formatCurrency(costBreakdown.amenities)}
                  </span>
                </div>
              )}

              {includeParking && (
                <div className="flex justify-between items-center text-slate-300">
                  <span>↳ Covered Parking Allotment:</span>
                  <span className="font-bold text-white">
                    {formatCurrency(costBreakdown.parking)}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center text-slate-300">
                <span>↳ Odisha Stamp Registration Fee (7%):</span>
                <span className="font-bold text-white">
                  {formatCurrency(costBreakdown.stampDuty)}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>↳ GST & Capital Infra Taxes (5.5%):</span>
                <span className="font-bold text-white">
                  {formatCurrency(costBreakdown.taxes)}
                </span>
              </div>

            </div>

            {/* Mortgage Calculation Display Card */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-4 bg-white/5 -mx-6 md:-mx-8 px-6 md:px-8 py-5">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-[10px] uppercase text-zinc-300 font-extrabold tracking-wider block">Principal Loan Amount</span>
                  <span className="text-sm font-bold text-white block">{formatCurrency(costBreakdown.loanAmount)}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-caution-yellow font-extrabold tracking-wider block">Estimated EMI</span>
                  <span className="text-lg font-black text-white block">{formatCurrency(costBreakdown.emi)}<span className="text-[10px] font-normal text-slate-300 font-light">/mo</span></span>
                </div>
              </div>
            </div>

            {/* Note alert */}
            <div className="mt-6 bg-white/5 border border-white/10 p-4 rounded-xl text-[11px] text-slate-300 leading-relaxed flex items-start gap-2.5">
              <Info className="w-4 h-4 text-caution-yellow shrink-0 mt-0.5" />
              <div>
                <p>
                  <strong>Disclaimer:</strong> Calculations are indicative models based on Odisha Stamp Act regulations. Final EMI matrices vary by financial institution credit underwriting audits.
                </p>
              </div>
            </div>

          </div>

          {/* Persistent History Panel */}
          {submittedBookings.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm">
              <h4 className="text-sm font-bold text-safety-blue uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Calculated Properties History ({submittedBookings.length})
              </h4>

              <div className="max-h-60 overflow-y-auto space-y-3 pr-1 no-scrollbar">
                {submittedBookings.map((q) => (
                  <div key={q.id} className="p-3 bg-slate-50 border border-gray-200 rounded-xl text-xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-safety-blue text-[11px]">{q.id} • {q.propertyType}</span>
                      <span className="text-[10px] text-gray-400">{q.date}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>{q.area.toLocaleString()} Sqft @ {q.location}</span>
                      <span className="font-bold text-green-700">{formatCurrency(q.totalCost)}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 italic">EMI: {formatCurrency(q.monthlyEMI)}/mo • Requested by {q.name}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  localStorage.removeItem('jagdish_property_bookings');
                  setSubmittedBookings([]);
                }}
                className="mt-4 text-[11px] text-caution-yellow font-semibold hover:underline bg-transparent border-none cursor-pointer p-0"
              >
                Clear Appraisal History
              </button>
            </div>
          )}

          {/* RERA Compliance Checked banner */}
          <div className="bg-gradient-to-r from-safety-blue to-zinc-900 p-6 rounded-2xl text-white text-xs border border-gray-100 flex items-center gap-4">
            <ShieldCheck className="w-12 h-12 text-caution-yellow shrink-0" />
            <div>
              <p className="font-bold text-sm mb-1">100% RERA Registered Platforms</p>
              <p className="text-slate-300 leading-normal">Every listed gated community, apartment, and plot has fully verified clean legal titles compliant with RERA regulations.</p>
            </div>
          </div>

        </div>

      </div>

      {/* SUCCESS MODAL DIALOG */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-8 rounded-2xl max-w-md w-full text-center shadow-2xl relative"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 font-black" />
              </div>

              <h3 className="text-xl font-bold text-safety-blue mb-2">Request Lodged Successfully!</h3>
              
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Your valuation profile of <strong className="text-safety-blue">{formatCurrency(activeFormBookingCost)}</strong> has been logged. A senior relationship advisor from Jagdish Estates will coordinate your site visit tour within 24 working hours.
              </p>

              <button 
                onClick={() => setShowSuccessModal(false)}
                className="bg-safety-blue text-white w-full py-3 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-caution-yellow hover:text-white transition-all shadow border-0 cursor-pointer"
              >
                RETURN TO CALCULATOR
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
