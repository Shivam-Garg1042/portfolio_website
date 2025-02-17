const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Texmo Motors</h3>
            <p className="text-gray-400">
              Authorized dealer for Texmo products in Rohtak, Haryana. Providing quality 
              motor solutions since 2000.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="text-gray-400">
              <li>Monday - Saturday: 9:00 AM - 7:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Texmo Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;