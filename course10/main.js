
document.addEventListener('DOMContentLoaded', function() {
    
    async function fetchJokeCategories() {
      try {
        
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
              
        const categories = await response.json();
        
        console.log('Chuck Norris Joke Categories:', categories);
      } 
    }

    fetchJokeCategories();
  });
  
  