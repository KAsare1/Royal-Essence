import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Where luxury meets<br />
              <span className="font-normal text-primary">the heart of home</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Premium short-term rentals across Towson, Atlanta, Texas, and Nevada. 
              Designed for corporate travelers, families, traveling nurses, and vacationers 
              who value comfort and elegance.
            </p>
            
            <Link 
              to="/properties"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">Why choose Royal Essence</h2>
            <div className="w-12 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">7 Premium Properties</h3>
              <p className="text-gray-600 font-light">Carefully curated luxury accommodations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">4 Key Markets</h3>
              <p className="text-gray-600 font-light">Prime locations across the Southeast and Southwest</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">24/7 Guest Support</h3>
              <p className="text-gray-600 font-light">Always here when you need us most</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">100% Satisfaction Focus</h3>
              <p className="text-gray-600 font-light">Your comfort is our top priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Ready to experience luxury?</h2>
          <p className="text-lg text-gray-600 mb-12 font-light">
            Discover the perfect blend of comfort, elegance, and convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/properties"
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              View Properties
            </Link>
            <Link 
              to="/contact"
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
