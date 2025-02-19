import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Texmo Motors</h3>
            <p className="text-gray-400">
              Authorized dealer for Texmo products in Rohtak, Haryana. Providing quality 
              motor solutions since 1984.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="text-gray-400">
              <li>Monday - Saturday: 10AM - 7PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100090640266599" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/weareaquagroup/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@aquagroup1395" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
              <a href="https://in.linkedin.com/company/aquasub-engineering-aqua-group-" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-4 pt-4 text-center text-gray-400">
          <p>&copy; 2024 Texmo Motors. All rights reserved.</p>
          <p className="mt-2">Designed by <a href="https://www.linkedin.com/in/shivam-garg-a5a5a9301/" target="blank" className="text-white hover:text-red-400">Shivam</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
