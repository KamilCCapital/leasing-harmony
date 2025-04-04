
document.addEventListener('DOMContentLoaded', function() {
  // Obsługa menu mobilnego
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      
      // Zmiana ikony menu
      const menuIcon = mobileMenuBtn.querySelector('svg');
      if (mobileMenu.classList.contains('open')) {
        menuIcon.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
      } else {
        menuIcon.innerHTML = `
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        `;
      }
    });
  }
  
  // Obsługa wyszukiwania
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
          // W prawdziwej implementacji moglibyśmy przekierować do strony wyników wyszukiwania
          // W tej prostej implementacji po prostu wyświetlimy alert
          alert(`Wyszukujesz: ${query}`);
        }
      }
    });
  }
  
  // Obsługa paginacji
  const paginationButtons = document.querySelectorAll('.pagination-page');
  const prevButton = document.querySelector('.pagination-prev');
  const nextButton = document.querySelector('.pagination-next');
  
  if (paginationButtons.length) {
    let currentPage = 1;
    const totalPages = paginationButtons.length;
    // Zmiana z 5 na 6 wpisów na stronę
    const postsPerPage = 6;
    
    // Funkcja aktualizująca wygląd przycisków paginacji
    const updatePaginationButtons = () => {
      paginationButtons.forEach((button, index) => {
        if (index + 1 === currentPage) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
      
      // Aktualizacja przycisków poprzedni/następny
      if (currentPage === 1) {
        prevButton.classList.add('disabled');
      } else {
        prevButton.classList.remove('disabled');
      }
      
      if (currentPage === totalPages) {
        nextButton.classList.add('disabled');
      } else {
        nextButton.classList.remove('disabled');
      }
      
      // Aktualizacja widoczności wpisów na blogu
      const allPosts = document.querySelectorAll('.blog-card, article.blog-post-item');
      if (allPosts.length) {
        console.log(`Łączna liczba postów: ${allPosts.length}`);
        console.log(`Posty na stronę: ${postsPerPage}`);
        allPosts.forEach((post, index) => {
          const pageOfPost = Math.floor(index / postsPerPage) + 1;
          console.log(`Post ${index+1} powinien być widoczny na stronie ${pageOfPost}`);
          if (pageOfPost === currentPage) {
            post.style.display = 'flex';
          } else {
            post.style.display = 'none';
          }
        });
      }
    };
    
    // Dodanie obsługi kliknięć na przyciski numeryczne
    paginationButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        currentPage = index + 1;
        updatePaginationButtons();
        // Przewinięcie strony do góry po zmianie strony
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
    
    // Obsługa przycisku "poprzedni"
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          updatePaginationButtons();
          // Przewinięcie strony do góry po zmianie strony
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
    
    // Obsługa przycisku "następny"
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          updatePaginationButtons();
          // Przewinięcie strony do góry po zmianie strony
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
    
    // Inicjalizacja paginacji
    updatePaginationButtons();
  }
  
  // Obsługa przycisku udostępniania
  const shareButtons = document.querySelectorAll('.blog-post-share-button');
  if (shareButtons.length) {
    shareButtons.forEach(button => {
      button.addEventListener('click', () => {
        // W prawdziwej implementacji moglibyśmy otworzyć okno udostępniania
        // W tej prostej implementacji po prostu wyświetlimy alert
        alert('Funkcja udostępniania zostanie wdrożona w przyszłości');
      });
    });
  }
  
  // Obsługa dynamicznego pobrania artykułu na stronie pojedynczego wpisu
  if (window.location.pathname.includes('blog-post.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (postId) {
      // W prawdziwej implementacji tutaj byśmy pobierali dane artykułu z API
      // W tej prostej implementacji wszystkie dane mamy już w HTML
      console.log(`Wyświetlanie artykułu o ID: ${postId}`);
      
      // Aktualizacja tytułu strony
      const postTitle = document.querySelector('.blog-post-title');
      if (postTitle) {
        document.title = `${postTitle.textContent} - CollectCapital`;
      }
    }
  }
});
