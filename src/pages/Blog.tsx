
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Blog post data - in a real implementation this would be fetched from an API
const blogPosts = [
  {
    id: 1,
    title: "Leasing używanych pojazdów ciężarowych",
    excerpt: "W branży transportowej czas to pieniądz. Leasing używanych pojazdów to rozwiązanie, które coraz częściej wybierają firmy transportowe.",
    date: "25.01.2024",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=500&auto=format&fit=crop",
    category: "Leasing"
  },
  {
    id: 2,
    title: "Czy leasing obniża zdolność kredytową?",
    excerpt: "Myślisz o leasingu dla swojej firmy, ale martwisz się, że w przyszłości utrudni Ci to uzyskanie kredytu hipotecznego? Sprawdź jak jest!",
    date: "21.01.2024",
    image: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?w=800&h=500&auto=format&fit=crop",
    category: "Finanse"
  },
  {
    id: 3,
    title: "Różnice pomiędzy leasingiem operacyjnym - pożyczką leasingową - kredytem samochodowym",
    excerpt: "Zastanawiasz się, która forma finansowania będzie dla Ciebie najkorzystniejsza? Poniżej przedstawiamy różnice i pomagamy wybrać.",
    date: "15.01.2024",
    image: "https://images.unsplash.com/photo-1593672715438-d88a70629abe?w=800&h=500&auto=format&fit=crop",
    category: "Porównanie"
  },
  {
    id: 4,
    title: "Leasing dla nowych firm - co warto wiedzieć",
    excerpt: "Rozpoczynasz działalność i potrzebujesz finansowania? Leasing dla nowych firm może być dobrym rozwiązaniem. Poznaj warunki i możliwości.",
    date: "08.01.2024",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&auto=format&fit=crop",
    category: "Poradnik"
  },
  {
    id: 5,
    title: "Jak przygotować się do leasingu maszyn i urządzeń",
    excerpt: "Planowanie leasingu maszyn i urządzeń wymaga odpowiedniego przygotowania. Poznaj kluczowe aspekty, na które warto zwrócić uwagę.",
    date: "02.01.2024",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&h=500&auto=format&fit=crop",
    category: "Leasing"
  },
  {
    id: 6,
    title: "Leasing w 2024 roku - najważniejsze zmiany",
    excerpt: "Nowy rok przynosi nowe regulacje. Sprawdź, co się zmieniło w leasingu w 2024 roku i jak to wpłynie na Twoją firmę.",
    date: "12.05.2024",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&auto=format&fit=crop",
    category: "Leasing"
  },
  {
    id: 7,
    title: "Jak uniknąć błędów przy wyborze oferty leasingowej",
    excerpt: "Wybór odpowiedniej oferty leasingowej może być wyzwaniem. Poznaj najczęstsze błędy i dowiedz się, jak ich uniknąć.",
    date: "05.05.2024",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&auto=format&fit=crop",
    category: "Poradnik"
  },
  {
    id: 8,
    title: "Leasing vs kredyt - co lepsze dla małych firm",
    excerpt: "Porównanie dwóch popularnych form finansowania dla małych przedsiębiorstw. Sprawdź, która opcja będzie korzystniejsza w Twojej sytuacji.",
    date: "28.04.2024",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&auto=format&fit=crop",
    category: "Porównanie"
  },
  {
    id: 9,
    title: "Koszty leasingu - na co zwrócić uwagę",
    excerpt: "Analiza kosztów leasingu to ważny etap podejmowania decyzji o finansowaniu. Dowiedz się, jakie elementy powinny znaleźć się w Twoich kalkulacjach.",
    date: "20.04.2024",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&auto=format&fit=crop",
    category: "Finanse"
  },
  {
    id: 10,
    title: "Leasing konsumencki - kiedy warto rozważyć",
    excerpt: "Leasing nie jest dostępny tylko dla firm. Dowiedz się, kiedy leasing konsumencki może być dobrą opcją dla osób prywatnych.",
    date: "15.04.2024",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&auto=format&fit=crop",
    category: "Leasing"
  }
];

// Popular articles (sidebar)
const popularPosts = [
  {
    id: 1,
    title: "Leasing w 2024 roku - najważniejsze zmiany",
    date: "12.05.2024"
  },
  {
    id: 2,
    title: "Jak uniknąć błędów przy wyborze oferty leasingowej",
    date: "05.05.2024"
  },
  {
    id: 3,
    title: "Leasing vs kredyt - co lepsze dla małych firm",
    date: "28.04.2024"
  },
  {
    id: 4,
    title: "Koszty leasingu - na co zwrócić uwagę",
    date: "20.04.2024"
  }
];

// Popular tags
const tags = [
  "leasing operacyjny",
  "leasing finansowy",
  "VAT w leasingu",
  "kalkulator leasingowy",
  "wykup przedmiotu",
  "umowa leasingu",
  "refinansowanie",
  "odliczenia podatkowe"
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  
  const postsPerPage = 5;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  // Filter posts based on search query
  const filteredPosts = searchQuery 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;
    
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Blog Header */}
        <div className="bg-brand-darkGray text-white py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Blog CollectCapital</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300">
              Informacje i poradniki dotyczące leasingu i finansów dla firm
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Szukaj artykułów..."
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="py-12 bg-brand-lightGray">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Articles Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {currentPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
                      <Link to={`/blog/${post.id}`}>
                        <div className="relative h-44 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 bg-brand-gold text-white text-xs font-medium px-2 py-1">
                            {post.category}
                          </div>
                        </div>
                      </Link>
                      <div className="p-4 flex-grow flex flex-col">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Dodano: {post.date}</span>
                        </div>
                        <h2 className="text-base font-bold mb-2 line-clamp-2">
                          <Link to={`/blog/${post.id}`} className="hover:text-brand-gold transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow">{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`} className="mt-auto">
                          <button className="text-xs px-3 py-1.5 text-brand-gold hover:text-white hover:bg-brand-gold border border-brand-gold bg-transparent rounded-sm transition-colors inline-flex items-center">
                            Czytaj Więcej
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-10">
                    <nav className="flex items-center gap-1">
                      <button 
                        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                        className={`w-9 h-9 flex items-center justify-center rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                        disabled={currentPage === 1}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => paginate(i + 1)}
                          className={`w-9 h-9 flex items-center justify-center rounded-md ${currentPage === i + 1 ? 'bg-brand-gold text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      
                      <button 
                        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                        className={`w-9 h-9 flex items-center justify-center rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                        disabled={currentPage === totalPages}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Popular articles */}
                <div className="bg-white rounded-xl shadow-sm p-5 border-brand-gold/20 border">
                  <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">Popularne artykuły</h3>
                  <ul className="space-y-4">
                    {popularPosts.map((post) => (
                      <li key={post.id} className="pb-3 last:pb-0 last:border-0">
                        <Link to={`/blog/${post.id}`} className="group">
                          <h4 className="text-gray-800 group-hover:text-brand-gold transition-colors">
                            {post.title}
                          </h4>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {post.date}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-2 border-t border-gray-200">
                    <Link to="/blog">
                      <button className="w-full py-2 border border-brand-gold/60 text-brand-darkGray hover:bg-brand-gold hover:text-white rounded-md transition-colors">
                        Zobacz wszystkie
                      </button>
                    </Link>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="bg-white rounded-xl shadow-sm p-5 border-brand-gold/20 border">
                  <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">Popularne tagi</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
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
                
                {/* Leasing calculator CTA */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border-brand-gold/20 border">
                  <div className="bg-brand-darkGray text-white p-5">
                    <h3 className="text-lg font-semibold mb-3">Sprawdź warunki leasingu</h3>
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
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* CSS Styles for the blog page */}
      <style>
        {`
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Flex and Grid */
        .flex {
          display: flex;
        }
        
        .flex-col {
          flex-direction: column;
        }
        
        .flex-grow {
          flex-grow: 1;
        }
        
        .items-center {
          align-items: center;
        }
        
        .justify-center {
          justify-content: center;
        }
        
        .grid {
          display: grid;
        }
        
        .gap-6 {
          gap: 1.5rem;
        }
        
        .gap-8 {
          gap: 2rem;
        }
        
        .space-y-4 > * + * {
          margin-top: 1rem;
        }
        
        .space-y-6 > * + * {
          margin-top: 1.5rem;
        }
        
        /* Utilities */
        .rounded-xl {
          border-radius: 0.75rem;
        }
        
        .rounded-md {
          border-radius: 0.375rem;
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
        
        .transition-all {
          transition-property: all;
          transition-duration: 300ms;
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        /* Responsive */
        @media (min-width: 768px) {
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          
          .md\\:text-5xl {
            font-size: 3rem;
            line-height: 1;
          }
          
          .md\\:text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }
        
        @media (min-width: 1024px) {
          .lg\\:col-span-3 {
            grid-column: span 3 / span 3;
          }
          
          .lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        
        @media (min-width: 1280px) {
          .xl\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        `}
      </style>
    </div>
  );
};

export default Blog;
