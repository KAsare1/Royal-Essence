
import { useState } from 'react';
import { Mail, Clock, Home, Phone } from 'lucide-react';

const Contact = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      content: (
        <div>
          <p className="mb-2 font-light"><strong>General:</strong> info@royalessencestays.com</p>
          <p className="font-light"><strong>24/7 Support:</strong> support@royalessencestays.com</p>
        </div>
      )
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      content: (
        <div>
          <p className="mb-2 font-light"><strong>24/7 Hotline:</strong> (XXX) XXX-XXXX</p>
          <p className="font-light">Available for emergencies and urgent assistance</p>
        </div>
      )
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: (
        <div>
          <p className="mb-2 font-light"><strong>General:</strong> Monday - Friday, 7:00 AM - 5:00 PM</p>
          <p className="font-light"><strong>Support:</strong> Available 24/7</p>
        </div>
      )
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Pet Inquiries",
      content: (
        <div>
          <p className="mb-2 font-light">Traveling with pets? Contact us for special accommodation requests</p>
          <p className="font-light"><strong>Email:</strong> info@royalessencestays.com</p>
        </div>
      )
    }
  ];

  const policies = [
    {
      id: "checkin",
      title: "Check-In & Check-Out",
      content: "Standard check-in time is 3:00 PM and check-out is 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability. All guests must complete the check-in process and provide valid identification."
    },
    {
      id: "noise",
      title: "Noise Policy",
      content: (
        <div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-800 font-medium">Important Noise Policy</p>
            <p className="text-red-700 font-light">Quiet hours are from 10:00 PM to 8:00 AM. Excessive noise that disturbs neighbors will result in immediate termination of your stay without refund.</p>
          </div>
          <p className="font-light">We respect our neighbors and local communities. Please keep noise levels considerate at all times, especially during quiet hours.</p>
        </div>
      )
    },
    {
      id: "rules",
      title: "House Rules",
      content: "No smoking inside the property. Maximum occupancy must be respected. No parties or events without prior approval. Guests are responsible for any damage during their stay. Please treat the property with respect and care."
    },
    {
      id: "safety",
      title: "Safety & Security",
      content: "All properties are equipped with smoke detectors and fire extinguishers. Emergency contact information is provided upon check-in. Please familiarize yourself with emergency exits and safety procedures. Report any safety concerns immediately."
    },
    {
      id: "cleanliness",
      title: "Cleanliness Standards",
      content: "All properties are professionally cleaned between stays. We maintain the highest standards of cleanliness and sanitization. Please leave the property in the same condition you found it. Additional cleaning fees may apply for excessive messes."
    },
    {
      id: "pool",
      title: "Pool & Hot Tub Guidelines",
      content: "Pool and hot tub use is at your own risk. Children must be supervised at all times. No glass containers in pool areas. Shower before entering hot tub. Pool heating is seasonal and subject to weather conditions."
    },
    {
      id: "firepit",
      title: "Fire Pit Safety",
      content: "Fire pits must be attended at all times when in use. Only use provided firewood. Completely extinguish fires before leaving or going to sleep. Check local fire restrictions before use. Never leave fire unattended."
    },
    {
      id: "cancellation",
      title: "Cancellation Policy",
      content: "Cancellation policies vary by property and season. Please review the specific cancellation policy for your booking. Cancellations made within 48 hours of check-in may incur full charges. Travel insurance is recommended."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">Contact Us</h1>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            We're here to help make your stay exceptional
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactCards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{card.title}</h3>
                <div className="text-gray-600 text-sm">
                  {card.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Policies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">Guest Policies</h2>
            <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
            <p className="text-base text-gray-600 font-light">
              Please review our policies to ensure a smooth and enjoyable stay
            </p>
          </div>

          <div className="space-y-4">
            {policies.map((policy) => (
              <div key={policy.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                <button
                  onClick={() => toggleAccordion(policy.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-base font-medium text-gray-900">{policy.title}</h3>
                  <span className="text-xl text-gray-400 transform transition-transform">
                    {openAccordion === policy.id ? '−' : '+'}
                  </span>
                </button>
                
                {openAccordion === policy.id && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <div className="pt-4 text-gray-700 leading-relaxed text-sm font-light">
                      {policy.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Questions about your stay?</h2>
          <p className="text-lg text-gray-600 mb-8 font-light">
            Our guest support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Email Support
            </button>
            <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
