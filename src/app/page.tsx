import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 font-inter">
      {/* Add Google Fonts links here (or in your HTML head) */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet" /> */}

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-4 animate-fade-in">Hello, World!</h1>
          <p className="text-2xl mb-8 animate-fade-in">Welcome to our amazing landing page.</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg animate-fade-in">Get Started</button>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Feature 1</h2>
            <p>Description of feature 1.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Feature 2</h2>
            <p>Description of feature 2.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Feature 3</h2>
            <p>Description of feature 3.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
              <p className="text-lg italic mb-4">"This is a great product!"</p>
              <p className="font-bold">John Doe</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
              <p className="text-lg italic mb-4">"I love using this!"</p>
              <p className="font-bold">Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-8 text-center">
        <div className="container mx-auto">
          <p className="text-xl mb-4">Ready to get started?</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg animate-fade-in">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;