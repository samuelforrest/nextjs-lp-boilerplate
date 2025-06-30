import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Google Fonts (add these links to your HTML head) */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet" /> */}

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-4 animate-fade-in">PGA Pro Shop</h1>
          <p className="text-xl font-inter mb-8 animate-fade-in">Your one-stop shop for all your golfing needs.</p>
          <button className="bg-white text-blue-500 py-3 px-6 rounded-full font-bold hover:bg-blue-100 animate-fade-in">Shop Now</button>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h2 className="text-xl font-inter font-bold mb-2">High-Quality Clubs</h2>
            <p className="text-gray-600 font-inter">Experience the difference with our premium golf clubs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h2 className="text-xl font-inter font-bold mb-2">Expert Fitting</h2>
            <p className="text-gray-600 font-inter">Get custom-fitted for clubs that perfectly match your swing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h2 className="text-xl font-inter font-bold mb-2">Unbeatable Prices</h2>
            <p className="text-gray-600 font-inter">Get the best deals on top-quality golf equipment.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <p className="text-gray-600 italic font-inter">"I've never had such a great experience buying golf clubs. The fitting was perfect!"</p>
              <p className="text-gray-800 font-bold mt-2 font-inter"> - John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <p className="text-gray-600 italic font-inter">"These clubs are amazing! I've already lowered my score by 5 strokes."</p>
              <p className="text-gray-800 font-bold mt-2 font-inter"> - Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-xl font-inter mb-4">Ready to improve your game?</p>
          <button className="bg-white text-blue-500 py-3 px-6 rounded-full font-bold hover:bg-blue-100">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;