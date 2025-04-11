
 document.getElementById('btn').addEventListener('click', async () => {
     let movieTitle = document.getElementById('movieInput').value;

     let moviesApi = await fetch(`http://www.omdbapi.com/?apikey=61e576a4&t=${movieTitle}`);
     let movie = await moviesApi.json();
     console.log(movie);
     const container = document.getElementById('container');

    container.style.display = 'block';
    container.innerHTML = ''; 


     if (movie.Response  === "False") {
         document.getElementById('container').innerHTML = `<marquee>❌ Movie not found!</marquee>`;
         return;
     }

     container.innerHTML = `
         <h2>${movie.Title} ~ (${movie.Year})</h2>
         <div id="data">
             <div id="data1">
                 <p><strong>Genre: </strong> <span>${movie.Genre}</span></p>
                 <p><strong>IMDB Rating: </strong><mark>${movie.imdbRating}</mark></p>
                 <p><strong>Director: </strong><span> ${movie.Director}</span></p>
                 <p><strong>Actors: </strong><span>${movie.Actors}</span></p>
              </div>
               <div id="data2">
                <img src="${movie.Poster}" alt="Poster" />
             </div>
         </div>
                 <p><strong>Plot: </strong><span> ${movie.Plot}</span></p>
     `;
 });
