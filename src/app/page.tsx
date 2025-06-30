import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 font-inter">
      {/* Add Google Font links here: */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet" /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-4 animate-fade-in">A Cool Website</h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in">The tagline goes here.  Something catchy and cool.</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full animate-fade-in">Get Started</button>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
          <h2 className="text-xl font-bold mb-2">Feature 1</h2>
          <p>Description of feature 1.  This is a cool feature.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
          <h2 className="text-xl font-bold mb-2">Feature 2</h2>
          <p>Description of feature 2.  Another cool feature.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
          <h2 className="text-xl font-bold mb-2">Feature 3</h2>
          <p>Description of feature 3.  This one is super cool.</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
              <p className="italic text-gray-600 mb-4">"This website is amazing! It's so cool." </p>
              <p className="font-bold"> - John Doe</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
              <p className="italic text-gray-600 mb-4">"I love the design and functionality.  Very cool indeed!"</p>
              <p className="font-bold"> - Jane Doe</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">Ready to get started?</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full">Call to Action</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;