const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">About Royal Essence</h1>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Where exceptional hospitality meets the comfort of home
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-base text-gray-700 leading-relaxed mb-8 font-light">
              At Royal Essence Stays, we believe that luxury shouldn't be reserved for special occasions—it should be part of every journey. Founded with a passion for exceptional hospitality, we've curated a portfolio of premium short-term rental properties that redefine what it means to feel at home while traveling.
            </p>

            <p className="text-base text-gray-700 leading-relaxed mb-8 font-light">
              Our carefully selected properties span across vibrant markets in Towson, Maryland; Atlanta, Georgia; Texas; and Nevada, each chosen for their unique character, prime locations, and ability to provide an unparalleled guest experience. Whether you're a corporate traveler seeking a peaceful retreat after long days, a family wanting space to create memories, a traveling nurse needing a comfortable base, or vacationers looking to explore new destinations in style, we have the perfect accommodation waiting for you.
            </p>

            <p className="text-base text-gray-700 leading-relaxed mb-12 font-light">
              What sets Royal Essence Stays apart is our unwavering commitment to excellence in every detail. From the moment you book to the moment you check out, we ensure that your stay is nothing short of extraordinary. Our 24/7 guest support team is always ready to assist, and our properties are maintained to the highest standards of cleanliness, comfort, and luxury. We don't just offer a place to stay—we offer an experience that enriches your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl font-light text-primary mb-2">7</div>
              <h3 className="text-lg font-medium text-gray-900">Premium Properties</h3>
              <p className="text-gray-600 mt-2 font-light text-sm">Handpicked for excellence</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl font-light text-primary mb-2">4</div>
              <h3 className="text-lg font-medium text-gray-900">Key Markets</h3>
              <p className="text-gray-600 mt-2 font-light text-sm">Strategic locations across the US</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl font-light text-primary mb-2">24/7</div>
              <h3 className="text-lg font-medium text-gray-900">Guest Support</h3>
              <p className="text-gray-600 mt-2 font-light text-sm">Always here when you need us</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl font-light text-primary mb-2">100%</div>
              <h3 className="text-lg font-medium text-gray-900">Satisfaction Focus</h3>
              <p className="text-gray-600 mt-2 font-light text-sm">Your comfort is our mission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            To provide travelers with luxurious, comfortable, and memorable accommodations that exceed expectations while delivering the warmth and personal touch that makes every stay feel like home.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
