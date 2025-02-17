import { useState } from 'react';
import { Phone, X } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Info Popup */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 animate-fade-up">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="text-red-500 mr-2" size={16} />
                <span>91-9812254513</span>
              </div>
              <p className="text-sm text-gray-600">

                Available Mon-Sat : 10AM - 7PM

              </p>
              <a 
                href="tel:+919812254513"
                className="block text-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 mt-3"
              >
                Call Now
              </a>
            </div>
          </div>
        )}

        {/* Floating Button - Always in the same position */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg transition duration-300 flex items-center justify-center"
        >
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
};

export default FloatingContact;
