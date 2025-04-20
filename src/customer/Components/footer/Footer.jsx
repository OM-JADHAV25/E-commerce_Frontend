import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-white text-sm">
      {/* Back to Top */}
      <div
        className="text-center py-3 bg-[#37475A] cursor-pointer hover:bg-[#485769] transition"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
      </div>

      {/* Link Sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10">
        <div>
          <h3 className="font-bold mb-2">Get to Know Us</h3>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:underline">About Me</Link></li>
            <li><Link to="/project" className="hover:underline">Hackathon Project</Link></li>
            <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Connect With Me</h3>
          <ul className="space-y-1">
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
            <li><a href="mailto:youremail@example.com" className="hover:underline">Email</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Make Money with Me</h3>
          <ul className="space-y-1">
            <li><Link to="/hire" className="hover:underline">Hire Me</Link></li>
            <li><Link to="/freelance" className="hover:underline">Freelance Projects</Link></li>
            <li><Link to="/opensource" className="hover:underline">Open Source Contributions</Link></li>
            <li><Link to="/sponsor" className="hover:underline">Sponsor Me</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Let Us Help You</h3>
          <ul className="space-y-1">
            <li><Link to="/help" className="hover:underline">Help Center</Link></li>
            <li><Link to="/shipping" className="hover:underline">Shipping Info</Link></li>
            <li><Link to="/returns" className="hover:underline">Returns</Link></li>
            <li><Link to="/order-status" className="hover:underline">Order Status</Link></li>
          </ul>
        </div>
      </div>

      {/* Logo and Region Selector */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0 px-6">
          {/* Logo */}
          <div className="text-lg font-semibold">🛒 ShopMate</div>

          {/* Region Dropdown */}
          <div className="flex items-center space-x-2">
            <span>🌍</span>
            <select
              className="bg-[#232F3E] border border-gray-500 px-2 py-1 rounded text-white text-sm"
              defaultValue="US"
            >
              <option value="US">United States</option>
              <option value="IN">India</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Legal Links */}
      <div className="bg-[#131A22] py-4">
        <div className="max-w-7xl mx-auto text-center text-xs text-gray-400 space-x-4">
          <Link to="/terms" className="hover:underline">Conditions of Use</Link>
          <Link to="/privacy" className="hover:underline">Privacy Notice</Link>
          <span>© 2025 Your Name</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
