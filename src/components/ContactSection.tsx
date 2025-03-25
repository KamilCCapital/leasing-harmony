
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-spacing bg-white" id="kontakt">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="max-w-lg">
              <h2 className="heading-lg mb-6">Skontaktuj się z nami</h2>
              <p className="text-lg text-gray-600 mb-8 text-balance">
                Potrzebujesz pomocy w doborze odpowiedniego leasingu? Nasi eksperci są gotowi odpowiedzieć na Twoje pytania.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-brand-green/10 mr-4">
                    <Phone className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a href="tel:+48123456789" className="text-gray-600 hover:text-brand-green transition-colors">
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-brand-green/10 mr-4">
                    <Mail className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:kontakt@collectcapital.pl" className="text-gray-600 hover:text-brand-green transition-colors">
                      kontakt@collectcapital.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-brand-green/10 mr-4">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="font-medium">Adres</p>
                    <p className="text-gray-600">
                      ul. Przykładowa 123<br />
                      00-000 Warszawa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-right">
            <h3 className="heading-sm mb-6 text-center">Wyślij zapytanie</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-lg border border-gray-200 p-3 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Nazwa firmy
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full rounded-lg border border-gray-200 p-3 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                    placeholder="Twoja Firma Sp. z o.o."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-lg border border-gray-200 p-3 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                    placeholder="jan@twojafirma.pl"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-lg border border-gray-200 p-3 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Temat
                </label>
                <select
                  id="subject"
                  className="w-full rounded-lg border border-gray-200 p-3 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                >
                  <option value="">Wybierz temat</option>
                  <option value="leasing">Leasing</option>
                  <option value="kredyt">Kredyt</option>
                  <option value="nieruchomosci">Finansowanie nieruchomości</option>
                  <option value="inne">Inne</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 p-3 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                  placeholder="Jak możemy Ci pomóc?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Wyślij wiadomość
              </button>

              <p className="text-xs text-gray-500 text-center">
                Wysyłając formularz, wyrażasz zgodę na przetwarzanie Twoich danych osobowych zgodnie z naszą polityką prywatności.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
