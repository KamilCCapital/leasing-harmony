
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Dane blogowe - w prawdziwej implementacji mogłyby być pobierane z API
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
  }
];

// Kategorie bloga
const categories = [
  "Leasing",
  "Finanse",
  "Prawo",
  "Pojazdy",
  "Nieruchomości",
  "Kredyty"
];

// Popularne tagi
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

// Ostatnie artykuły (sidebar)
const recentPosts = [
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

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  
  const postsPerPage = 3;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  // Filtrowanie postów na podstawie wyszukiwania
  const filteredPosts = searchQuery 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;
    
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col bg-brand-lightGray">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        {/* Header sekcji */}
        <div className="bg-brand-darkGray text-white py-10">
          <div className="container-custom">
            <h1 className="heading-lg mb-4 text-center">Blog CollectCapital</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300">
              Informacje i poradniki dotyczące leasingu i finansów dla firm
            </p>
            
            {/* Wyszukiwarka */}
            <div className="max-w-md mx-auto mt-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Szukaj artykułów..."
                  className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
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
        
        <div className="container-custom py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista artykułów */}
            <div className="lg:col-span-2">
              {currentPosts.map((post) => (
                <Card key={post.id} className="mb-8 overflow-hidden border-0 shadow-sm">
                  <div className="grid md:grid-cols-5 gap-4">
                    <div className="md:col-span-2">
                      <Link to={`/blog/${post.id}`}>
                        <div className="relative h-48 md:h-full overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 bg-brand-gold text-white text-xs font-medium px-2 py-1">
                            {post.category}
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="p-4 md:p-6 md:col-span-3">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        <span>Dodano: {post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3">
                        <Link to={`/blog/${post.id}`} className="hover:text-brand-gold transition-colors duration-200">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link to={`/blog/${post.id}`}>
                        <Button className="text-brand-gold hover:text-white hover:bg-brand-gold border border-brand-gold bg-transparent transition-colors">
                          Czytaj Więcej
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
              
              {/* Paginacja */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) paginate(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault(); 
                            paginate(i + 1);
                          }}
                          isActive={currentPage === i + 1}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) paginate(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Kategorie */}
              <Card className="p-5 border-brand-gold/20">
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">Kategorie</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link 
                        to={`/blog/kategoria/${category.toLowerCase()}`} 
                        className="text-gray-700 hover:text-brand-gold transition-colors duration-200 flex items-center"
                      >
                        <span className="mr-2">•</span>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
              
              {/* Ostatnie artykuły */}
              <Card className="p-5 border-brand-gold/20">
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">Ostatnie artykuły</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="pb-3 last:pb-0 last:border-0">
                      <Link to={`/blog/${post.id}`} className="group">
                        <h4 className="text-gray-800 group-hover:text-brand-gold transition-colors duration-200 text-balance">
                          {post.title}
                        </h4>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <Calendar className="w-3.5 h-3.5 mr-1.5" />
                          {post.date}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-2 border-t border-gray-200">
                  <Link to="/blog">
                    <Button variant="outline" className="w-full border-brand-gold/60 text-brand-darkGray hover:bg-brand-gold hover:text-white">
                      Zobacz wszystkie
                    </Button>
                  </Link>
                </div>
              </Card>
              
              {/* Tagi */}
              <Card className="p-5 border-brand-gold/20">
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">Popularne tagi</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
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
              
              {/* Kalkulator leasingowy CTA */}
              <Card className="overflow-hidden border-brand-gold/20">
                <div className="bg-brand-darkGray text-white p-5">
                  <h3 className="text-lg font-semibold mb-3">Sprawdź warunki leasingu</h3>
                  <p className="text-gray-300 mb-4">Skorzystaj z naszego kalkulatora, aby poznać ofertę dopasowaną do Twoich potrzeb</p>
                  <Link to="/kalkulator-leasing">
                    <Button className="w-full bg-brand-gold hover:bg-brand-lightGold text-white">
                      Kalkulator leasingowy
                    </Button>
                  </Link>
                </div>
              </Card>
              
              {/* Newsletter */}
              <Card className="p-5 border-brand-gold/20 bg-gradient-to-br from-brand-darkGray to-black text-white">
                <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
                <p className="text-gray-300 mb-4">Bądź na bieżąco z nowymi artykułami i poradami</p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Twój adres email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
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

export default Blog;
