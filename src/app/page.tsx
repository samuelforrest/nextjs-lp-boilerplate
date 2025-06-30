import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Add Google Font links here (or in your HTML's <head>) */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet" /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-4 animate-fade-in">Make Your Money Work Harder</h1>
          <p className="text-2xl font-inter mb-8 animate-fade-in">Grow your wealth with our smart financial tools.</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-xl font-bold py-3 px-8 rounded-full animate-fade-in">Get Started</button>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h2 className="text-xl font-montserrat font-bold mb-2">Smart Investing</h2>
            <p className="font-inter text-gray-600">Algorithmic trading for optimized returns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h2 className="text-xl font-montserrat font-bold mb-2">Secure Banking</h2>
            <p className="font-inter text-gray-600">Top-tier encryption for your financial security.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h2 className="text-xl font-montserrat font-bold mb-2">Financial Planning</h2>
            <p className="font-inter text-gray-600">Personalized plans to reach your financial goals.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <p className="font-inter text-gray-600 italic">"This platform has completely transformed my financial life!"</p>
              <p className="font-inter font-bold mt-2"> - John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <p className="font-inter text-gray-600 italic">"I'm amazed by the ease of use and the results I've seen."</p>
              <p className="font-inter font-bold mt-2"> - Jane Smith</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-8 text-center animate-fade-in">
        <div className="container mx-auto">
          <p className="text-2xl font-inter mb-4">Ready to take control of your finances?</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-xl font-bold py-3 px-8 rounded-full">Start Now</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;