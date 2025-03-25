
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

// Przykładowe dane blogowe
const blogPosts = [
  {
    id: 1,
    title: "Jak wybrać najlepszą formę leasingu dla swojej firmy?",
    excerpt: "Porównanie leasingu operacyjnego i finansowego oraz wskazówki, który z nich będzie lepszy dla różnych typów działalności.",
    date: "15.05.2023",
    category: "Leasing",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=600&h=400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Zmiany w przepisach leasingowych 2023 - co musisz wiedzieć",
    excerpt: "Omówienie najnowszych zmian w przepisach dotyczących leasingu i ich wpływ na przedsiębiorców.",
    date: "03.06.2023",
    category: "Prawo",
    image: "https://images.unsplash.com/photo-1621942303262-7de44685e14a?q=80&w=600&h=400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Leasing czy kredyt - porównanie kosztów i korzyści",
    excerpt: "Szczegółowa analiza różnic między leasingiem a kredytem w kontekście finansowania pojazdów i sprzętu dla firm.",
    date: "22.06.2023",
    category: "Finanse",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=600&h=400&auto=format&fit=crop"
  }
];

const BlogCard = ({ post, delay = 0 }) => {
  return (
    <article 
      className="blog-card flex flex-col h-full animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-brand-green/90 text-white text-xs font-medium px-2 py-1 rounded">
          {post.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{post.date}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 hover:text-brand-green transition-colors duration-200">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
        
        <Link 
          to={`/blog/${post.id}`} 
          className="text-brand-green font-medium inline-flex items-center hover:text-brand-lightGreen transition-colors duration-200"
        >
          Czytaj więcej
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </article>
  );
};

const BlogSection = () => {
  return (
    <section className="section-spacing bg-brand-gray/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 animate-fade-in">
          <div>
            <h2 className="heading-lg mb-4">Aktualności z naszego bloga</h2>
            <p className="text-lg text-gray-600 max-w-xl text-balance">
              Najnowsze artykuły i poradniki na temat leasingu i finansów dla firm
            </p>
          </div>
          <Link 
            to="/blog" 
            className="mt-4 md:mt-0 text-brand-blue font-medium inline-flex items-center hover:text-brand-lightBlue transition-colors duration-200"
          >
            Zobacz wszystkie artykuły
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} delay={0.1 * (index + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
