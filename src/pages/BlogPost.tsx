
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Calendar, User, Tag, Share2, FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Przykładowe dane blogowe - w prawdziwej implementacji mogłyby być pobierane z API
const blogPosts = [
  {
    id: 1,
    title: "Jak wybrać najlepszą formę leasingu dla swojej firmy?",
    content: `
      <p class="mb-4">Wybór odpowiedniej formy leasingu to jedna z kluczowych decyzji finansowych dla przedsiębiorców. W zależności od profilu działalności, strategii podatkowej i długoterminowych planów biznesowych, różne formy leasingu mogą przynieść odmienne korzyści.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Leasing operacyjny - główne cechy</h2>
      <p class="mb-4">Leasing operacyjny to forma leasingu, w której przedmiot umowy jest traktowany jako własność leasingodawcy. To oznacza, że:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Raty leasingowe są w całości zaliczane do kosztów uzyskania przychodu</li>
        <li>VAT jest rozliczany wraz z każdą ratą</li>
        <li>Przedmiot nie jest amortyzowany przez leasingobiorcę</li>
        <li>Zazwyczaj okres umowy wynosi co najmniej 40% normatywnego okresu amortyzacji</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Leasing finansowy - główne cechy</h2>
      <p class="mb-4">W przypadku leasingu finansowego, przedmiot umowy jest traktowany jako własność leasingobiorcy. To z kolei oznacza:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Leasingobiorca amortyzuje przedmiot leasingu</li>
        <li>Tylko część odsetkowa raty leasingowej stanowi koszt uzyskania przychodu</li>
        <li>VAT jest rozliczany z góry za całą umowę</li>
        <li>Okres umowy jest zazwyczaj zbliżony do okresu ekonomicznej użyteczności przedmiotu</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Który leasing wybrać?</h2>
      <p class="mb-4">Wybór między leasingiem operacyjnym a finansowym zależy od wielu czynników:</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">Leasing operacyjny będzie korzystniejszy gdy:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Zależy Ci na optymalizacji podatkowej w krótkim okresie</li>
        <li>Chcesz mieć możliwość wymiany przedmiotu leasingu na nowszy model po zakończeniu umowy</li>
        <li>Potrzebujesz maksymalnie obniżyć bieżące obciążenia podatkowe</li>
        <li>Korzystasz z przedmiotów szybko tracących wartość lub technologicznie szybko się dezaktualizujących</li>
      </ul>
      
      <h3 class="text-xl font-medium mt-6 mb-3">Leasing finansowy będzie korzystniejszy gdy:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Planujesz długoterminowe użytkowanie przedmiotu leasingu</li>
        <li>Chcesz rozliczyć VAT od razu na początku umowy</li>
        <li>Zależy Ci na tym, by przedmiot od początku figurował w Twoich aktywach</li>
        <li>Korzystasz z przedmiotów o długim okresie użytkowania i powolnej utracie wartości</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Przykładowe kalkulacje</h2>
      <p class="mb-4">Załóżmy, że przedsiębiorca planuje wziąć w leasing samochód o wartości 100 000 zł netto (123 000 zł brutto) na okres 3 lat:</p>
      
      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Parametr</th>
              <th class="border border-gray-300 px-4 py-2">Leasing operacyjny</th>
              <th class="border border-gray-300 px-4 py-2">Leasing finansowy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Wpłata własna (20%)</td>
              <td class="border border-gray-300 px-4 py-2">20 000 zł netto</td>
              <td class="border border-gray-300 px-4 py-2">20 000 zł netto</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Miesięczna rata</td>
              <td class="border border-gray-300 px-4 py-2">2 400 zł netto</td>
              <td class="border border-gray-300 px-4 py-2">2 300 zł netto</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">VAT</td>
              <td class="border border-gray-300 px-4 py-2">Rozliczany z każdą ratą</td>
              <td class="border border-gray-300 px-4 py-2">Rozliczany jednorazowo</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Koszty podatkowe w 1 roku</td>
              <td class="border border-gray-300 px-4 py-2">48 800 zł</td>
              <td class="border border-gray-300 px-4 py-2">32 600 zł</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Wykup</td>
              <td class="border border-gray-300 px-4 py-2">1% (1 000 zł)</td>
              <td class="border border-gray-300 px-4 py-2">0 zł (już jest własnością)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Podsumowanie</h2>
      <p class="mb-4">Wybór formy leasingu powinien być zawsze dopasowany do indywidualnej sytuacji firmy. Warto przed podjęciem decyzji skonsultować się z doradcą podatkowym i finansowym, który pomoże przeanalizować wszystkie aspekty i wybrać najkorzystniejsze rozwiązanie.</p>
      
      <p class="mb-4">Pamiętaj również, że przepisy podatkowe mogą się zmieniać, dlatego warto na bieżąco śledzić aktualne regulacje dotyczące leasingu.</p>
      
      <p class="italic text-gray-600 mt-6">Artykuł ma charakter informacyjny i nie stanowi porady podatkowej ani finansowej.</p>
    `,
    date: "15.05.2023",
    author: "Michał Kowalski",
    category: "Leasing",
    tags: ["leasing operacyjny", "leasing finansowy", "porównanie", "podatki", "finanse"],
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=800&h=500&auto=format&fit=crop",
    readTime: "8 min"
  }
  // Więcej postów można dodać tutaj
];

// Podobne artykuły
const relatedPosts = [
  {
    id: 2,
    title: "Zmiany w przepisach leasingowych 2023 - co musisz wiedzieć",
    date: "03.06.2023",
    image: "https://images.unsplash.com/photo-1621942303262-7de44685e14a?q=80&w=300&h=200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Leasing czy kredyt - porównanie kosztów i korzyści",
    date: "22.06.2023",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=300&h=200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Optymalizacja podatkowa w leasingu - praktyczny poradnik",
    date: "10.07.2023",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=300&h=200&auto=format&fit=crop"
  }
];

const BlogPost = () => {
  const { id } = useParams<{id: string}>();
  const postId = parseInt(id || "1");
  
  // Znajdź post o podanym ID
  const post = blogPosts.find(post => post.id === postId) || blogPosts[0];
  
  return (
    <div className="min-h-screen flex flex-col bg-brand-lightGray">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom">
          {/* Nawigacja powrót do bloga */}
          <div className="mb-6">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-brand-darkGray hover:text-brand-gold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót do bloga
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Artykuł */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Header artykułu */}
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-gold/90 text-white text-sm font-medium px-3 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  {/* Meta informacje */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <User className="w-4 h-4 mr-1.5" />
                      <span>{post.author}</span>
                    </div>
                    <div className="text-gray-600 ml-auto">{post.readTime} czytania</div>
                  </div>
                  
                  {/* Tytuł */}
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
                  
                  {/* Tagi */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map(tag => (
                      <Link 
                        key={tag}
                        to={`/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-brand-gold hover:text-white transition-colors duration-200"
                      >
                        <Tag className="w-3.5 h-3.5" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Treść artykułu */}
                  <div 
                    className="prose prose-lg max-w-none" 
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Udostępnij */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Share2 className="w-5 h-5 mr-2" />
                      Udostępnij artykuł
                    </h3>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="gap-2">
                        <FacebookIcon className="w-4 h-4" />
                        Facebook
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <TwitterIcon className="w-4 h-4" />
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <LinkedinIcon className="w-4 h-4" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Podobne artykuły */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Podobne artykuły</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Card key={relatedPost.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                      <Link to={`/blog/${relatedPost.id}`} className="block">
                        <div className="aspect-[3/2] overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center text-xs text-gray-500 mb-2">
                            <Calendar className="w-3.5 h-3.5 mr-1" />
                            {relatedPost.date}
                          </div>
                          <h4 className="font-semibold text-balance hover:text-brand-gold transition-colors duration-200">
                            {relatedPost.title}
                          </h4>
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Komentarze można dodać tutaj */}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* O autorze */}
              <Card className="p-6 border-brand-gold/20">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://randomuser.me/api/portraits/men/75.jpg" 
                      alt={post.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                  <p className="text-gray-600 mb-4">Ekspert ds. leasingu z wieloletnim doświadczeniem. Specjalizuje się w optymalizacji finansowania dla małych i średnich przedsiębiorstw.</p>
                  <Separator className="mb-4" />
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-600 hover:text-brand-gold">
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-brand-gold">
                      <TwitterIcon className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-brand-gold">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
              
              {/* Tagi */}
              <Card className="p-6 border-brand-gold/20">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Tagi</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link 
                      key={tag}
                      to={`/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-brand-gold hover:text-white transition-colors duration-200"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </Card>
              
              {/* CTA Kalkulator leasingowy */}
              <Card className="overflow-hidden border-brand-gold/20">
                <div className="bg-brand-darkGray text-white p-6">
                  <h3 className="text-xl font-semibold mb-3">Sprawdź warunki leasingu</h3>
                  <p className="text-gray-300 mb-4">Skorzystaj z naszego kalkulatora, aby poznać ofertę dopasowaną do Twoich potrzeb</p>
                  <Link to="/kalkulator-leasing">
                    <Button className="w-full bg-brand-gold hover:bg-brand-lightGold text-white">
                      Kalkulator leasingowy
                    </Button>
                  </Link>
                </div>
              </Card>
              
              {/* Newsletter */}
              <Card className="p-6 border-brand-gold/20 bg-gradient-to-br from-brand-darkGray to-black text-white">
                <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
                <p className="text-gray-300 mb-4">Bądź na bieżąco z nowymi artykułami i poradami</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Twój adres email"
                    className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button className="w-full bg-brand-gold hover:bg-brand-lightGold text-white">
                    Zapisz się
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
