import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a1f36] text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">QuickHire</h3>
            <p className="text-gray-400 text-sm">
              Find your dream job with the best companies around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Technology</li>
              <li>Marketing</li>
              <li>Design</li>
              <li>Sales</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@quickhire.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} QuickHire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
