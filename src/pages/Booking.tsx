// BookingModal.tsx
import React, { useState } from 'react';
import { Calendar, Users, Mail, Phone, CreditCard, Check, X, MapPin, Home } from 'lucide-react';

interface PropertyDetails {
  name: string;
  price: string;
  type: string;
  location: string;
  sleeps: number;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: PropertyDetails;
}

interface FormData {
  checkIn: string;
  checkOut: string;
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, property }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    checkIn: '',
    checkOut: '',
    guests: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
      if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
      if (formData.guests < 1 || formData.guests > property.sleeps) {
        newErrors.guests = `Number of guests must be between 1 and ${property.sleeps}`;
      }
    } else if (step === 2) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    } else if (step === 3) {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.nameOnCard) newErrors.nameOnCard = 'Name on card is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      setCurrentStep(4);
      // Here you would send booking data to your backend
      console.log('Booking submitted:', { property, ...formData });
    }
  };

  const calculateNights = (): number => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const basePrice = parseFloat(property.price.replace(/[^0-9.]/g, ''));
    const subtotal = nights * basePrice;
    const taxes = subtotal * 0.12;
    const serviceFee = 29.99;
    return {
      nights,
      basePrice,
      subtotal,
      taxes,
      serviceFee,
      total: subtotal + taxes + serviceFee
    };
  };

  const pricing = calculateTotal();

  return (
    <div className="fixed inset-0 z-50 bg-black/80">
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] bg-white shadow-lg rounded-2xl overflow-hidden max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h2 className="text-xl font-medium text-gray-900">{property.name}</h2>
              <p className="text-sm text-gray-600 font-light">{property.type} • {property.location}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            title="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Form */}
          <div className="flex-1 p-6 overflow-y-auto max-h-[70vh]">
            
            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-8">
              {[1, 2, 3, 4].map((step) => (
                <React.Fragment key={step}>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                    currentStep >= step 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {currentStep > step ? <Check className="w-4 h-4" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-12 h-0.5 mx-2 transition-colors ${
                      currentStep > step ? 'bg-gray-900' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Step 1: Dates & Guests */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">When would you like to stay?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleInputChange('checkIn', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                          errors.checkIn ? 'border-red-300' : 'border-gray-200'
                        }`}
                        min={new Date().toISOString().split('T')[0]}
                        placeholder="Select check-in date"
                        title="Check-in date"
                      />
                    </div>
                    {errors.checkIn && <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleInputChange('checkOut', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                          errors.checkOut ? 'border-red-300' : 'border-gray-200'
                        }`}
                        min={formData.checkIn || new Date().toISOString().split('T')[0]}
                        placeholder="Select check-out date"
                        title="Check-out date"
                      />
                    </div>
                    {errors.checkOut && <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="guests-select" className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      id="guests-select"
                      value={formData.guests}
                      onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                      className={`w-full pl-10 pr-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                        errors.guests ? 'border-red-300' : 'border-gray-200'
                      }`}
                      aria-label="Number of Guests"
                    >
                      {Array.from({ length: property.sleeps }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Guest Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Guest Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                        errors.firstName ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="Enter first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                        errors.lastName ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="Enter last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                        errors.email ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="Enter email address"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                        errors.phone ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="Enter phone number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 resize-none"
                    placeholder="Any special requests or accommodations needed?"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                        errors.cardNumber ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                        errors.expiryDate ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                    {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                        errors.cvv ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="123"
                      maxLength={4}
                    />
                    {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                  <input
                    type="text"
                    value={formData.nameOnCard}
                    onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 ${
                      errors.nameOnCard ? 'border-red-300' : 'border-gray-200'
                    }`}
                    placeholder="Enter name as it appears on card"
                  />
                  {errors.nameOnCard && <p className="text-red-500 text-xs mt-1">{errors.nameOnCard}</p>}
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">Secure Payment</span>
                  </div>
                  <p className="text-xs text-gray-600 font-light">
                    Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600 font-light">
                    Your reservation has been confirmed. You'll receive a confirmation email shortly.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl text-left">
                  <h4 className="font-medium text-gray-900 mb-3">Booking Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property:</span>
                      <span className="font-medium">{property.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dates:</span>
                      <span className="font-medium">{formData.checkIn} to {formData.checkOut}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-medium">{formData.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-medium">${pricing.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={currentStep === 3 ? handleSubmit : nextStep}
                  className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
                >
                  {currentStep === 3 ? 'Confirm Booking' : 'Continue'}
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Booking Summary */}
          <div className="lg:w-80 border-l border-gray-100 p-6 bg-gray-50">
            <h4 className="font-medium text-gray-900 mb-4">Booking Summary</h4>
            
            <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4 flex items-center justify-center">
              <Home className="w-8 h-8 text-gray-500" />
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-900">{property.name}</h5>
                <p className="text-sm text-gray-600 font-light flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {property.location}
                </p>
              </div>

              {formData.checkIn && formData.checkOut && (
                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-in:</span>
                      <span className="font-medium">{formData.checkIn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-out:</span>
                      <span className="font-medium">{formData.checkOut}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-medium">{formData.guests}</span>
                    </div>
                  </div>
                </div>
              )}

              {pricing.nights > 0 && (
                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{property.price} × {pricing.nights} nights</span>
                      <span className="font-medium">${pricing.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service fee</span>
                      <span className="font-medium">${pricing.serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxes & fees</span>
                      <span className="font-medium">${pricing.taxes.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between">
                      <span className="font-medium text-gray-900">Total</span>
                      <span className="font-medium text-gray-900 text-lg">${pricing.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Close button for confirmation step */}
        {currentStep === 4 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <button
              onClick={onClose}
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;