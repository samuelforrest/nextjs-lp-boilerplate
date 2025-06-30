import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Add Google Font links here (in the actual HTML head) */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"> */}
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;500&display=swap" rel="stylesheet"> */}

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-4 animate-fade-in">Powerful Landing Page</h1>
          <p className="text-2xl font-inter mb-8 animate-fade-in">A tagline that describes your product or service.</p>
          <button className="bg-white text-blue-500 px-8 py-4 rounded-full font-bold hover:bg-blue-100 animate-fade-in">Get Started</button>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p className="text-gray-600">Description of feature 1.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p className="text-gray-600">Description of feature 2.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
            <p className="text-gray-600">Description of feature 3.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
              <p className="text-gray-600 italic mb-4">"Great product! Highly recommend it."</p>
              <p className="font-semibold">John Doe</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
              <p className="text-gray-600 italic mb-4">"This tool has simplified my workflow significantly."</p>
              <p className="font-semibold">Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="text-xl font-inter mb-4">Ready to get started?</p>
          <button className="bg-white text-blue-500 px-8 py-4 rounded-full font-bold hover:bg-blue-100">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;