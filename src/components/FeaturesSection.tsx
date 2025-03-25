
import { Link } from "react-router-dom";
import { TrendingUp, ShieldCheck, Clock, BarChart3, DollarSign, Briefcase, Landmark, Building, Home, CreditCard, ChevronRight } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="feature-card flex flex-col animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-3 rounded-lg bg-brand-gold/10 w-fit mb-4">
        <Icon className="w-6 h-6 text-brand-gold" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

const OtherServicesCard = ({ icon: Icon, title, description, color, delay = 0 }) => {
  return (
    <div 
      className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`p-3 rounded-lg ${color === "dark" ? "bg-brand-darkGray/10" : "bg-brand-gold/10"} w-fit mb-4`}>
        <Icon className={`w-6 h-6 ${color === "dark" ? "text-brand-darkGray" : "text-brand-gold"}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="section-spacing bg-white" id="uslugi">
      <div className="container-custom">
        {/* Leasing Features */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4 text-balance">Dlaczego warto wybrać leasing z <span className="text-brand-gold">Collect</span><span className="text-brand-darkGray">Capital</span>?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Oferujemy kompleksowe rozwiązania leasingowe dopasowane do Twoich potrzeb biznesowych
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={TrendingUp}
            title="Konkurencyjne stawki"
            description="Negocjujemy najlepsze warunki finansowe, zapewniając atrakcyjne oprocentowanie i niskie koszty obsługi."
            delay={0.1}
          />
          <FeatureCard 
            icon={ShieldCheck}
            title="Bezpieczeństwo"
            description="Współpracujemy tylko ze sprawdzonymi instytucjami finansowymi, gwarantując bezpieczeństwo transakcji."
            delay={0.2}
          />
          <FeatureCard 
            icon={Clock}
            title="Szybki proces"
            description="Uproszczone procedury i sprawna obsługa pozwalają na szybkie uzyskanie finansowania."
            delay={0.3}
          />
          <FeatureCard 
            icon={BarChart3}
            title="Indywidualne podejście"
            description="Dostosowujemy ofertę do specyfiki Twojego biznesu i potrzeb finansowych Twojej firmy."
            delay={0.4}
          />
          <FeatureCard 
            icon={DollarSign}
            title="Elastyczne warunki"
            description="Oferujemy różne warianty umów z możliwością dostosowania wysokości rat i okresu leasingu."
            delay={0.5}
          />
          <FeatureCard 
            icon={Briefcase}
            title="Kompleksowa obsługa"
            description="Zapewniamy wsparcie na każdym etapie procesu leasingowego, od wyboru oferty po finalizację umowy."
            delay={0.6}
          />
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/kalkulator-leasing" className="btn-primary flex items-center">
            Sprawdź kalkulator leasingowy
            <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        {/* Other Services */}
        <div className="mt-28">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-lg mb-4 text-balance">Inne usługi finansowe w naszej ofercie</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Oprócz leasingu, oferujemy także inne rozwiązania dopasowane do potrzeb Twojej firmy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <OtherServicesCard 
              icon={Landmark}
              title="Kredyty dla firm"
              description="Pomagamy w uzyskaniu najkorzystniejszych kredytów inwestycyjnych i obrotowych dla Twojego biznesu."
              color="dark"
              delay={0.1}
            />
            <OtherServicesCard 
              icon={Building}
              title="Finansowanie nieruchomości"
              description="Oferujemy wsparcie w zakresie finansowania zakupu, budowy lub modernizacji nieruchomości komercyjnych."
              color="gold"
              delay={0.2}
            />
            <OtherServicesCard 
              icon={Home}
              title="Kredyty hipoteczne"
              description="Pomagamy w uzyskaniu kredytu hipotecznego na najlepszych warunkach dostosowanych do indywidualnych potrzeb."
              color="dark"
              delay={0.3}
            />
            <OtherServicesCard 
              icon={CreditCard}
              title="Kredyty gotówkowe"
              description="Oferujemy wsparcie w uzyskaniu kredytów gotówkowych z niskim oprocentowaniem i dogodnym okresem spłaty."
              color="gold"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
