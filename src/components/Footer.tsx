
import { Link } from "react-router-dom";
import { Heart, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue/95 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-5">
              <Link to="/" className="text-2xl font-bold text-white">
                Collect<span className="text-brand-lightGreen">Capital</span>
              </Link>
            </div>
            <p className="text-gray-300 mb-6 text-balance">
              Profesjonalne usługi finansowe dla biznesu. Specjalizujemy się w leasingu oraz innych formach finansowania przedsiębiorstw.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Usługi</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/leasing" className="text-gray-300 hover:text-white flex items-center transition-colors duration-200">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Leasing
                </Link>
              </li>
              <li>
                <Link to="/kredyty" className="text-gray-300 hover:text-white flex items-center transition-colors duration-200">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Kredyty dla firm
                </Link>
              </li>
              <li>
                <Link to="/nieruchomosci" className="text-gray-300 hover:text-white flex items-center transition-colors duration-200">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Finansowanie nieruchomości
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Przydatne linki</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/kalkulator-leasing" className="text-gray-300 hover:text-white flex items-center transition-colors duration-200">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Kalkulator leasingowy
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white flex items-center transition-colors duration-200">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="text-gray-300 hover:text-white flex items-center transition-colors duration-200">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/polityka-prywatnosci" className="text-gray-300 hover:text-white flex items-center transition-colors duration-200">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-brand-lightGreen" />
                <a href="tel:+48123456789" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-brand-lightGreen" />
                <a href="mailto:kontakt@collectcapital.pl" className="text-gray-300 hover:text-white transition-colors duration-200">
                  kontakt@collectcapital.pl
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-brand-lightGreen" />
                <address className="text-gray-300 not-italic">
                  ul. Przykładowa 123<br />
                  00-000 Warszawa
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center">
            &copy; {currentYear} CollectCapital. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
