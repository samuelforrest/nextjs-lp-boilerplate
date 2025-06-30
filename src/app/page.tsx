import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 font-inter">
      {/* Add Google Font links here (in the actual HTML file's head):
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet">
      */}

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-4">A Cool Website</h1>
          <p className="text-lg md:text-xl mb-8">Your tagline here.</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg">Get Started</button>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p className="text-gray-600">Description of feature 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p className="text-gray-600">Description of feature 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p className="text-gray-600">Description of feature 3.</p>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <p className="text-gray-700 italic">"This website is amazing!"</p>
              <p className="text-gray-600 text-right mt-2">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <p className="text-gray-700 italic">"I love the design and functionality."</p>
              <p className="text-gray-600 text-right mt-2">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-8 text-center">
        <div className="container mx-auto">
          <p className="text-xl mb-4">Ready to get started?</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;