
import React from 'react';
import ReviewCard from '../components/ReviewCard';

const Reviews = () => {
  const reviews = [
    {
      text: "The Suburban Nest was absolutely perfect for our family vacation! The location was ideal - close to everything we wanted to see in Towson, but quiet enough to relax. The home was impeccably clean and had everything we needed. We'll definitely be back!",
      author: "- Sarah M., Family Traveler"
    },
    {
      text: "As a traveling nurse, I've stayed in many short-term rentals, but Royal Essence Stays sets the bar high. The Baltimore Escape felt like a luxury hotel but with all the comforts of home. The hot tub was a perfect way to unwind after long shifts.",
      author: "- Michael R., Healthcare Professional"
    },
    {
      text: "Desert Oasis exceeded every expectation! The private pool and hot tub made our Vegas getaway unforgettable. It's amazing how peaceful it was despite being so close to the Strip. The property management was incredibly responsive too.",
      author: "- Jennifer L., Vacationer"
    },
    {
      text: "Our corporate team stayed at The Southern Essence during our Atlanta conference. The space was perfect for our group, and the location made it easy to experience the city's culture. Professional service from booking to checkout.",
      author: "- David K., Corporate Traveler"
    },
    {
      text: "The Garden Manor in Savannah was like stepping into a fairytale! The historic charm combined with modern amenities made our anniversary trip magical. Every detail was thoughtfully considered.",
      author: "- Amanda & Tom H., Couple"
    },
    {
      text: "Lone Star Retreat was the highlight of our Texas adventure! The kids loved the pool, and we adults appreciated the stylish interior and great location. Dallas has so much to offer, and this was the perfect home base.",
      author: "- Carlos F., Family Vacation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">Customer Reviews</h1>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Hear what our guests have to say about their Royal Essence experience
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Ready to create your own story?</h2>
          <p className="text-lg text-gray-600 mb-8 font-light">
            Join hundreds of satisfied guests who have made Royal Essence Stays their home away from home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Book Your Stay
            </button>
            <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              View Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
