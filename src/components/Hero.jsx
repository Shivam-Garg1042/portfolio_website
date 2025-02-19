
import { ChevronRight, Package, MapPin, Award,Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero"className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-gray-50 pt-8 pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-8 -top-8 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute -left-8 top-1/2 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Content */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Authorized Texmo Dealer in Rohtak
          </h2>
          <p className="text-lg text-gray-600 mb-8 px-4">
            Your trusted partner for all Texmo motor solutions in Haryana. 
            Providing quality products and excellent service since 1984.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="products">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
              View Products
              <ChevronRight size={20} />
            </button>
            </a>
            <a href="contact">
            <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-all hover:scale-105 flex items-center gap-2">
              Contact Us
              <ChevronRight size={20} />
            </button>
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: MapPin, title: "Visit Our Store", desc: "Experience our products in person" },
            { icon: Award, title: "Authorized Dealer", desc: "Genuine products with warranty" },
            
            { icon: Package, title: "Wide Range", desc: "Comprehensive selection of Texmo products" },
            
            
            { icon: Wrench, title: "Expert Support", desc: "Technical guidance and after-sales service" }
            
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <feature.icon className="text-red-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {[
                { value: "40+", label: "Years in Business" },
                { value: "50000+", label: "Satisfied Customers" },
                { value: "100%", label: "Genuine Products" },
                { value: "Toll-Free", label: "24/7 Support" }
          ].map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;