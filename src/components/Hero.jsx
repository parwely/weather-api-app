const Hero = () => {
    return (
      <section className="bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Supercharge your Workflow with <span className="text-blue-600">SaaSify</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            SaaSify helps teams launch products faster, collaborate smarter, and stay focused on what matters most.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="bg-white border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  