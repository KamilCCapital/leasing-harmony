
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  const { id } = useParams();
  const postId = parseInt(id || "1");
  
  // Znajdź post o podanym ID
  const post = blogPosts.find(post => post.id === postId) || blogPosts[0];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <div className="container mx-auto px-4 max-w-7xl py-16 pt-28">
          {/* Nawigacja powrót do bloga */}
          <div className="mb-6">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-gray-800 hover:text-brand-gold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Powrót do bloga
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Artykuł */}
            <article className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
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
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-brand-gold hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Udostępnij artykuł
                  </h3>
                  <div className="flex gap-3">
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                      Facebook
                    </button>
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                      Twitter
                    </button>
                    <button className="px-3 py-1.5 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* O autorze */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-brand-gold/20 border">
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
                  <hr className="w-full border-t border-gray-200 mb-4" />
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-600 hover:text-brand-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-brand-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-brand-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Tagi */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-brand-gold/20 border">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Tagi</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link 
                      key={tag}
                      to={`/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-brand-gold hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* CTA Kalkulator leasingowy */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border-brand-gold/20 border">
                <div className="bg-brand-darkGray text-white p-6">
                  <h3 className="text-xl font-semibold mb-3">Sprawdź warunki leasingu</h3>
                  <p className="text-gray-300 mb-4">Skorzystaj z naszego kalkulatora, aby poznać ofertę dopasowaną do Twoich potrzeb</p>
                  <Link to="/kalkulator-leasing">
                    <button className="w-full py-2 px-4 bg-brand-gold hover:bg-brand-lightGold text-white rounded-md transition-colors">
                      Kalkulator leasingowy
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Podobne artykuły */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Podobne artykuły</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {relatedPost.date}
                      </div>
                      <h4 className="font-semibold hover:text-brand-gold transition-colors">
                        {relatedPost.title}
                      </h4>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* CSS Styles for the blog post page */}
      <style jsx>{`
        /* Base styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        /* Colors */
        .bg-brand-darkGray {
          background-color: #333;
        }
        
        .bg-brand-lightGray {
          background-color: #f5f5f5;
        }
        
        .bg-brand-gold {
          background-color: #D4AF37;
        }
        
        .hover\\:bg-brand-lightGold:hover {
          background-color: #E5C158;
        }
        
        .text-brand-gold {
          color: #D4AF37;
        }
        
        .hover\\:text-brand-gold:hover {
          color: #D4AF37;
        }
        
        .border-brand-gold\\/20 {
          border-color: rgba(212, 175, 55, 0.2);
        }
        
        /* Typography */
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body, p, span, a, button {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        /* Prose styles for article content */
        .prose {
          max-width: 65ch;
          line-height: 1.6;
        }
        
        .prose h2 {
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .prose h3 {
          font-size: 1.25rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-weight: 500;
        }
        
        .prose p {
          margin-bottom: 1rem;
        }
        
        .prose ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .prose ul > * + * {
          margin-top: 0.5rem;
        }
        
        .prose table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
        }
        
        .prose th, .prose td {
          border: 1px solid #e5e7eb;
          padding: 0.5rem 1rem;
        }
        
        .prose th {
          background-color: #f9fafb;
        }
        
        /* Flex and Grid */
        .flex {
          display: flex;
        }
        
        .flex-col {
          flex-direction: column;
        }
        
        .flex-wrap {
          flex-wrap: wrap;
        }
        
        .items-center {
          align-items: center;
        }
        
        .justify-center {
          justify-center: center;
        }
        
        .gap-2 {
          gap: 0.5rem;
        }
        
        .gap-3 {
          gap: 0.75rem;
        }
        
        .gap-4 {
          gap: 1rem;
        }
        
        .gap-6 {
          gap: 1.5rem;
        }
        
        .gap-8 {
          gap: 2rem;
        }
        
        .grid {
          display: grid;
        }
        
        .space-y-8 > * + * {
          margin-top: 2rem;
        }
        
        /* Utilities */
        .rounded-xl {
          border-radius: 0.75rem;
        }
        
        .rounded-md {
          border-radius: 0.375rem;
        }
        
        .rounded {
          border-radius: 0.25rem;
        }
        
        .rounded-full {
          border-radius: 9999px;
        }
        
        .overflow-hidden {
          overflow: hidden;
        }
        
        .shadow-sm {
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        
        .transition-colors {
          transition-property: color, background-color, border-color;
          transition-duration: 200ms;
        }
        
        .transition-transform {
          transition-property: transform;
          transition-duration: 500ms;
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        /* Responsive */
        @media (min-width: 768px) {
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          
          .md\\:h-[400px] {
            height: 400px;
          }
          
          .md\\:p-8 {
            padding: 2rem;
          }
          
          .md\\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .lg\\:col-span-2 {
            grid-column: span 2 / span 2;
          }
          
          .lg\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
