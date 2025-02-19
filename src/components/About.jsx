
import { useState } from 'react';
import { Phone } from 'lucide-react';


const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);

 

  return (

    <section id="about" className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-36 bg-red-600">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-90" />
        <div className="container mx-auto px-6 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center z-10">
            About Texmo Motors Rohtak
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-2">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 text-lg leading-relaxed">
            As an authorized dealer of Texmo products in Rohtak, we take pride in providing 
            top-quality pumping solutions to our valued customers across Haryana.
          </p>
        </div>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Trusted Partner in Pumping Solutions
            </h2>
            <p className="text-gray-600">
              Since our establishment in 2000, we have been at the forefront of providing 
              innovative pumping solutions to both agricultural and industrial sectors. Our 
              commitment to excellence and customer satisfaction has made us one of the most 
              trusted Texmo dealers in the region.
            </p>
            <p className="text-gray-600">
              We offer a comprehensive range of Texmo products, including submersible pumps, 
              openwell pumps, monoblock pumps, and industrial solutions. Our team of experts 
              ensures that you get the right product for your specific needs.
            </p>
          </div>
          
          <div 
            className="relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img 
                src="/api/placeholder/800/600"
                alt="Texmo Motors Showroom" 
                className="object-cover w-full h-full"
              />
              {isHovered && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Our Showroom</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        

        {/* CTA Section */}
        <div className="bg-red-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to find your perfect pumping solution?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team of experts is here to help you choose the right Texmo product for your needs.
          </p>
          <a href="tel:919812254513">
          <button className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
            <Phone className="w-5 h-5 mr-2" />
            Contact Us Today
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;