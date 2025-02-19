
import { Phone, Mail } from 'lucide-react';

const CustomerCare = () => {
  return (
    <section id="customer" className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Customer Care 
        <span className="text-red-500"> Support</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Call Section */}
          <div className="bg-white rounded-lg p-8 text-center flex flex-col items-center shadow-md">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">Give us a ring</h3>
            <p className="text-gray-600 mb-6">
              For any queries, support & complaints, feel free to reach out to us at our Toll Free number 18005722324
            </p>
            <a href="tel:18005722324">
            <button 
              className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors"
            >
              Get In Touch / Contact Us
            </button></a>
          </div>

          {/* Email Section */}
          <div className="bg-white rounded-lg p-8 text-center flex flex-col items-center shadow-md">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">Write to us</h3>
            <p className="text-gray-600 mb-6">
              For product related queries, please get in touch with us on:
              <br/>
              enquiry@aquagroup.in
            </p>
            <button 
              className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors"
            >
              Email Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCare;