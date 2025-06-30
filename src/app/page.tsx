import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 font-inter">
      {/* Add Google Font links in your HTML head: */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"> */}
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet"> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-4 animate-fade-in">Cool CV Website</h1>
          <p className="text-lg mb-8 animate-fade-in">Showcase your skills and experience with a modern, responsive CV.</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full animate-fade-in">Get Started</button>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <h3 className="text-xl font-medium mb-2">Modern Design</h3>
              <p>A clean and professional design that makes a great first impression.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <h3 className="text-xl font-medium mb-2">Fully Responsive</h3>
              <p>Looks great on any device, from desktop to mobile.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <h3 className="text-xl font-medium mb-2">Easy to Customize</h3>
              <p>Easily tailor it to your specific needs and preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-8">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <p className="text-gray-700 italic mb-4">"This CV website is amazing! It helped me land my dream job." </p>
              <p className="text-gray-600">- John Doe, Software Engineer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <p className="text-gray-700 italic mb-4">"Easy to use and highly effective.  Highly recommended!"</p>
              <p className="text-gray-600">- Jane Smith, Data Analyst</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">Ready to create your stunning CV?</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full">Create Your CV</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;