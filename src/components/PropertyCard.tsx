
import React from 'react';

interface PropertyCardProps {
  name: string;
  price: string;
  type: string;
  location: string;
  sleeps: number;
  description: string;
  amenities: string[];
  activities: string;
  imageUrl?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  price,
  type,
  location,
  sleeps,
  description,
  amenities,
  activities,
  imageUrl
}) => {
  const handleBookingClick = () => {
    // Placeholder for booking calendar functionality
    alert('Booking calendar coming soon!');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
      {/* Image Section */}
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-2xl mx-auto mb-3"></div>
            <p className="text-gray-500 text-sm">Property Photo</p>
          </div>
        )}
        {/* Price Overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-sm">
          {price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 font-light">{type} • {location} • Sleeps {sleeps}</p>
        
        <p className="text-gray-700 mb-6 leading-relaxed font-light text-sm">{description}</p>

        {/* Amenities */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3 text-sm">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-light border border-gray-100"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-2 text-sm">Local Activities</h4>
          <p className="text-gray-600 text-xs leading-relaxed font-light">{activities}</p>
        </div>

        {/* Book Button */}
        <button
          onClick={handleBookingClick}
          className="w-full bg-gray-900 text-white py-3 px-6 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
        >
          Book Your Stay
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;