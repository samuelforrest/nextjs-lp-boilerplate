import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Add Google Font links here (or in the HTML head): */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet"/> */}

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-4 animate-fade-in">j</h1>
          <p className="text-2xl font-inter mb-8 animate-fade-in">Your tagline goes here.</p>
          <button className="bg-white text-blue-500 py-3 px-6 rounded-full font-bold hover:bg-blue-100 animate-fade-in">Get Started</button>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Feature 1</h2>
            <p className="text-gray-700">Description of feature 1.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Feature 2</h2>
            <p className="text-gray-700">Description of feature 2.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Feature 3</h2>
            <p className="text-gray-700">Description of feature 3.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
              <p className="text-gray-700 italic">"Amazing product! Highly recommend." </p>
              <p className="text-gray-600 mt-2"> - John Doe</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
              <p className="text-gray-700 italic">"Exceeded my expectations!"</p>
              <p className="text-gray-600 mt-2"> - Jane Smith</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="text-xl font-bold mb-4">Ready to get started?</p>
          <button className="bg-white text-blue-500 py-3 px-6 rounded-full font-bold hover:bg-blue-100">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;