
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Tag, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Przykładowe dane blogowe - w prawdziwej implementacji mogłyby być pobierane z API
const blogPosts = [
  {
    id: 1,
    title: "Jak wybrać najlepszą formę leasingu dla swojej firmy?",
    excerpt: "Porównanie leasingu operacyjnego i finansowego oraz wskazówki, który z nich będzie lepszy dla różnych typów działalności. Analiza korzyści podatkowych i księgowych.",
    date: "15.05.2023",
    author: "Michał Kowalski",
    category: "Leasing",
    tags: ["leasing operacyjny", "leasing finansowy", "porównanie"],
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=800&h=500&auto=format&fit=crop",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Zmiany w przepisach leasingowych 2023 - co musisz wiedzieć",
    excerpt: "Omówienie najnowszych zmian w przepisach dotyczących leasingu i ich wpływ na przedsiębiorców. Dowiedz się, jak dostosować swoje działania do nowych regulacji.",
    date: "03.06.2023",
    author: "Anna Nowak",
    category: "Prawo",
    tags: ["przepisy", "zmiany w prawie", "podatki"],
    image: "https://images.unsplash.com/photo-1621942303262-7de44685e14a?q=80&w=800&h=500&auto=format&fit=crop",
    readTime: "10 min"
  },
  {
    id: 3,
    title: "Leasing czy kredyt - porównanie kosztów i korzyści",
    excerpt: "Szczegółowa analiza różnic między leasingiem a kredytem w kontekście finansowania pojazdów i sprzętu dla firm. Kalkulacje i studia przypadków.",
    date: "22.06.2023",
    author: "Piotr Wiśniewski",
    category: "Finanse",
    tags: ["leasing", "kredyt", "finansowanie"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&h=500&auto=format&fit=crop",
    readTime: "12 min"
  },
  {
    id: 4,
    title: "Optymalizacja podatkowa w leasingu - praktyczny poradnik",
    excerpt: "Jakie są legalne metody optymalizacji podatkowej przy korzystaniu z leasingu? W artykule przedstawiamy strategie, które pomogą Ci maksymalnie wykorzystać korzyści podatkowe.",
    date: "10.07.2023",
    author: "Aleksandra Jaworska",
    category: "Podatki",
    tags: ["optymalizacja podatkowa", "VAT", "koszty uzyskania"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&h=500&auto=format&fit=crop",
    readTime: "9 min"
  },
  {
    id: 5,
    title: "Jak negocjować warunki umowy leasingowej",
    excerpt: "Praktyczne wskazówki dotyczące negocjacji umów leasingowych. Dowiedz się, na co zwrócić uwagę i jakie zapisy można próbować modyfikować na swoją korzyść.",
    date: "05.08.2023",
    author: "Tomasz Adamski",
    category: "Porady",
    tags: ["negocjacje", "umowa leasingu", "warunki"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&h=500&auto=format&fit=crop",
    readTime: "7 min"
  }
];

const BlogPostList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  
  // Obliczenia dla paginacji
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <div className="space-y-12">
      {currentPosts.map((post, index) => (
        <article key={post.id} className="border-b border-gray-200 pb-10 last:border-0 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
          <Link to={`/blog/${post.id}`} className="group">
            <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-brand-gold/90 text-white text-sm font-medium px-3 py-1 rounded">
                {post.category}
              </div>
            </div>
          </Link>
          
          <div className="flex flex-wrap gap-3 mb-4 text-sm">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-1.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <User className="w-4 h-4 mr-1.5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Tag className="w-4 h-4 mr-1.5" />
              <span>{post.tags[0]}</span>
              {post.tags.length > 1 && <span>, +{post.tags.length - 1}</span>}
            </div>
            <div className="text-gray-600 ml-auto">{post.readTime} czytania</div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-brand-gold transition-colors duration-200">
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h2>
          
          <p className="text-gray-700 mb-5">{post.excerpt}</p>
          
          <Link 
            to={`/blog/${post.id}`} 
            className="inline-flex items-center font-semibold text-brand-darkGray hover:text-brand-gold transition-colors duration-200"
          >
            Czytaj więcej
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </article>
      ))}
      
      {/* Paginacja */}
      <Pagination>
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
    </div>
  );
};

export default BlogPostList;
