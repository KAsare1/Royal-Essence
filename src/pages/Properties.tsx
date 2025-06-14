
import React from 'react';
import PropertyCard from '../components/PropertyCard';

const Properties = () => {
  const properties = [
    {
      name: "The Suburban Nest",
      price: "$286/night",
      type: "3BR / 2BA",
      location: "Towson, MD",
      sleeps: 6,
      description: "Step into comfort at The Suburban Nest, a charming 3-bedroom, 2-bath family-friendly home nestled in the heart of Towson, MD. Perfect for travelers seeking a quiet retreat with quick access to urban conveniences.",
      amenities: ["Wi-Fi", "Full Kitchen", "Parking", "Washer/Dryer", "Smart TV", "Coffee Maker"],
      activities: "Towson Town Center (5 min) • Loch Raven Reservoir • Johns Hopkins University (15 min) • Hiking trails • Farmers markets"
    },
    {
      name: "The Baltimore Escape",
      price: "$295/night",
      type: "3BR / 2BA",
      location: "Baltimore, MD",
      sleeps: 6,
      description: "Discover urban sophistication at The Baltimore Escape. This sleek 3-bedroom, 2-bath townhouse offers modern comforts just a short drive from Baltimore's iconic Inner Harbor.",
      amenities: ["Hot Tub", "Wi-Fi", "Full Kitchen", "Parking", "Modern Furnishing", "Smart TV"],
      activities: "Inner Harbor (20 min) • National Aquarium • Baltimore Museum of Art • Harbor cruises • Waterfront dining"
    },
    {
      name: "The Southern Essence",
      price: "$315/night",
      type: "3BR / 2BA",
      location: "Atlanta, GA",
      sleeps: 6,
      description: "Welcome to The Southern Essence — your chic escape in the heart of Atlanta. This 3-bedroom, 2-bath gem offers a fresh, cozy interior with easy access to all of Atlanta's cultural hot spots.",
      amenities: ["Hot Tub", "Patio", "Wi-Fi", "Full Kitchen", "Modern Decor", "Coffee Station"],
      activities: "Atlanta BeltLine • Ponce City Market • Fox Theatre • Civil Rights Museum • MLK Historic Site • Sports games"
    },
    {
      name: "The Garden Manor",
      price: "$294/night",
      type: "4BR / 3BA",
      location: "Savannah, GA",
      sleeps: 8,
      description: "Let The Garden Manor welcome you with warm Southern hospitality and elegant touches. This 4-bedroom, 3-bath sanctuary blends old-world beauty with modern comforts.",
      amenities: ["Historic Charm", "Garden Views", "Wi-Fi", "Full Kitchen", "Elegant Furnishing", "Parking"],
      activities: "Ghost tours • Forsyth Park • Savannah River cruises • Historic homes • City Market • Tybee Island (30 min)"
    },
    {
      name: "Lone Star Retreat",
      price: "$287/night",
      type: "3BR / 2BA",
      location: "Dallas, TX",
      sleeps: 6,
      description: "Kick back Texas-style at Lone Star Retreat, a spacious 3-bedroom, 2-bath home featuring a sparkling private pool perfect for soaking up the sun.",
      amenities: ["Private Pool", "Pool Deck", "Wi-Fi", "Full Kitchen", "BBQ Grill", "Parking"],
      activities: "Dallas Arboretum • Deep Ellum (music scene) • White Rock Lake • Live music venues • Botanical gardens"
    },
    {
      name: "Desert Oasis",
      price: "$415/night",
      type: "4BR / 3BA",
      location: "Las Vegas, NV",
      sleeps: 8,
      description: "Experience the ultimate getaway at Desert Oasis, a luxurious 4-bedroom, 3-bath villa boasting a private pool and serene desert vibes just minutes from the dazzling Las Vegas Strip.",
      amenities: ["Private Pool", "Hot Tub", "Desert Views", "Luxury Furnishing", "Full Kitchen", "Wi-Fi"],
      activities: "Las Vegas Strip (15 min) • Red Rock Canyon • Fremont Street • Desert hiking • Casino entertainment"
    },
    {
      name: "Alamo Luxe Retreat",
      price: "$250/night",
      type: "3BR / 2BA",
      location: "San Antonio, TX",
      sleeps: 6,
      description: "Welcome to Alamo Luxe Retreat, your spacious 3-bedroom, 2-bath home just minutes from San Antonio's historic sites and Lackland Air Force Base.",
      amenities: ["Private Pool", "Full Kitchen", "Wi-Fi", "Open Living", "Military Friendly", "Parking"],
      activities: "The Alamo • San Antonio River Walk • Lackland AFB • San Antonio Missions • SeaWorld • Botanical Garden"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">Our Properties</h1>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Discover luxury accommodations across Towson, Atlanta, Texas, and Nevada
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Ready to book your stay?</h2>
          <p className="text-lg text-gray-600 mb-8 font-light">
            Experience the Royal Essence difference at any of our premium properties.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Properties;
