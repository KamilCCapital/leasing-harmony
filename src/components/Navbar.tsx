
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calculator, FileText, HelpCircle, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 transition-opacity duration-300 hover:opacity-80"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              Collect<span className="text-brand-green">Capital</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/kalkulator-leasing"
              className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-brand-gray transition-colors duration-200"
            >
              <Calculator className="w-4 h-4 mr-2 text-brand-green" />
              <span>Kalkulator leasingowy</span>
            </Link>
            <Link
              to="/blog"
              className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-brand-gray transition-colors duration-200"
            >
              <FileText className="w-4 h-4 mr-2 text-brand-blue" />
              <span>Blog</span>
            </Link>
            <Link
              to="/#uslugi"
              className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-brand-gray transition-colors duration-200"
            >
              <HelpCircle className="w-4 h-4 mr-2 text-brand-green" />
              <span>Usługi</span>
            </Link>
            <Link
              to="/#kontakt"
              className="flex items-center px-4 py-2 ml-2 btn-primary"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>Kontakt</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col py-2 space-y-2 px-2">
            <Link
              to="/kalkulator-leasing"
              className="flex items-center p-3 rounded-md text-gray-700 hover:bg-brand-gray transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Calculator className="w-5 h-5 mr-3 text-brand-green" />
              <span>Kalkulator leasingowy</span>
            </Link>
            <Link
              to="/blog"
              className="flex items-center p-3 rounded-md text-gray-700 hover:bg-brand-gray transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-5 h-5 mr-3 text-brand-blue" />
              <span>Blog</span>
            </Link>
            <Link
              to="/#uslugi"
              className="flex items-center p-3 rounded-md text-gray-700 hover:bg-brand-gray transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <HelpCircle className="w-5 h-5 mr-3 text-brand-green" />
              <span>Usługi</span>
            </Link>
            <Link
              to="/#kontakt"
              className="flex items-center p-3 rounded-md bg-brand-green text-white hover:bg-brand-lightGreen transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="w-5 h-5 mr-3" />
              <span>Kontakt</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
