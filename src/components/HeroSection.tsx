
import { Link } from "react-router-dom";
import { ChevronRight, Calculator, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white to-brand-gray/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(29,156,100,0.05),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(15,50,116,0.1),transparent_40%)]"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 w-fit">
              <span className="text-sm font-medium">Profesjonalny leasing dla Twojej firmy</span>
            </div>
            
            <h1 className="heading-xl text-balance">
              <span className="block">Optymalne rozwiązania</span>
              <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                leasingowe dla biznesu
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-lg text-balance">
              Zapewniamy eksperckie podejście i profesjonalną pomoc w uzyskaniu najlepszych warunków leasingu dla Twojej firmy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/kalkulator-leasing" className="btn-primary flex items-center justify-center">
                <Calculator className="w-5 h-5 mr-2" />
                Oblicz ratę leasingu
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
              <Link to="/blog" className="btn-outline flex items-center justify-center">
                <FileText className="w-5 h-5 mr-2" />
                Poznaj nasz blog
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="glass-card rounded-2xl overflow-hidden p-6 md:p-8">
              <div className="bg-gradient-to-tr from-brand-blue/10 to-brand-green/10 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-white/40">
                <h3 className="heading-sm text-center mb-8 text-brand-blue">Szybki kalkulator leasingowy</h3>
                <div className="flex flex-col gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Wartość przedmiotu (zł)</label>
                    <input
                      type="number"
                      placeholder="np. 100 000"
                      className="w-full rounded-lg border border-gray-200 p-3 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Okres leasingu (miesiące)</label>
                    <select className="w-full rounded-lg border border-gray-200 p-3 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-200">
                      <option value="24">24 miesiące</option>
                      <option value="36">36 miesięcy</option>
                      <option value="48">48 miesięcy</option>
                      <option value="60">60 miesięcy</option>
                    </select>
                  </div>
                  <Link
                    to="/kalkulator-leasing"
                    className="w-full btn-primary text-center"
                  >
                    Oblicz szczegółowo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
