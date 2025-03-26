
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPostList from "../components/BlogPostList";
import { Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

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
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-brand-lightGray">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        {/* Header sekcji */}
        <div className="bg-brand-darkGray text-white py-16">
          <div className="container-custom">
            <h1 className="heading-xl mb-6 text-center">Blog CollectCapital</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300">
              Najnowsze informacje, poradniki i analizy dotyczące leasingu i finansów dla firm
            </p>
            
            {/* Wyszukiwarka */}
            <div className="max-w-md mx-auto mt-10">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Szukaj artykułów..."
                  className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista artykułów */}
            <div className="lg:col-span-2">
              <BlogPostList />
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Kategorie */}
              <Card className="p-6 border-brand-gold/20">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Kategorie</h3>
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
              <Card className="p-6 border-brand-gold/20">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Ostatnie artykuły</h3>
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
              <Card className="p-6 border-brand-gold/20">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Popularne tagi</h3>
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
              
              {/* Newsletter zapisz się */}
              <Card className="p-6 border-brand-gold/20 bg-gradient-to-br from-brand-darkGray to-black text-white">
                <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
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
