
// <section class="movie-details">
function loadMovieDetails(mId, movies = []) {
    let movie = movies.filter((mv) => mv.id == mId)
    let movieDetailsContainer = document.querySelector("movie-details")

    let posterContainer = document.createElement("div")
    posterContainer.className = "details-poster"
    let img = document.createElement("img")
    img.src = "/img/" + movie.path
    img.alt = movie.title
    posterContainer.appendChild(img)

    let detailsContent = document.createElement("div")
    detailsContent.className = "details-content"

    let title = document.createElement("h1")
    title.innerText = movie.title

    let description = document.createElement("p")
    description.className = "description"
    description.innerText = movie.description

    let movieInfo = document.createElement("div")
    movieInfo.className = "movie-info"

    // Create genre
    let genre = document.createElement("p")
    genre.innerText = "Genre: Crime / Drama"

    // Create release year
    let year = document.createElement("p")
    year.innerText = "Release Year: 1974"

    // Create language
    let language = document.createElement("p")
    language.innerText = "Language: English"

    // Create duration
    let duration = document.createElement("p")
    duration.innerText = "Duration: 202 minutes"

    // Create director
    let director = document.createElement("p")
    director.innerText = "Director: Francis Ford Coppola"

    // Create cast
    let cast = document.createElement("p")
    cast.innerText =
        "Cast: Al Pacino, Robert De Niro, Robert Duvall, Diane Keaton, John Cazale"

    // Create rating
    let rating = document.createElement("p")
    rating.innerText = "Rating: 9/10"

    // Append movie information to movie-info container
    movieInfo.appendChild(genre)
    movieInfo.appendChild(year)
    movieInfo.appendChild(language)
    movieInfo.appendChild(duration)
    movieInfo.appendChild(director)
    movieInfo.appendChild(cast)
    movieInfo.appendChild(rating)

    // Create buttons container
    let buttonsContainer = document.createElement("div")
    buttonsContainer.className = "details-buttons"

    // Create Add to Favorites link
    let favorites = document.createElement("a")
    favorites.href = "favorites.html"
    favorites.innerText = "Add to Favorites"

    // Create Write a Review link
    let review = document.createElement("a")
    review.href = "reviews.html"
    review.innerText = "Write a Review"

    // Append links to buttons container
    buttonsContainer.appendChild(favorites)
    buttonsContainer.appendChild(review)

    // Append elements to details-content
    detailsContent.appendChild(title)
    detailsContent.appendChild(description)
    detailsContent.appendChild(movieInfo)
    detailsContent.appendChild(buttonsContainer)

    // Append poster and content to main container
    detailsContainer.appendChild(posterContainer)
    detailsContainer.appendChild(detailsContent)

    // Add the complete structure to the HTML page
    document.body.appendChild(detailsContainer)
    // <div class="details-poster">
    //   <img src="img/godfather_2.jpeg" alt="The Godfather Part II poster" />
    // </div>
    // <div class="details-content">
    //   <h1>The Godfather Part II</h1>
    //
    //   <p class="description">
    //     The early life and career of Vito Corleone in 1920s New York is
    //     portrayed while his son Michael expands and strengthens the family
    //     crime business.
    //   </p>
    //
    //   <div class="movie-info">
    //     <p>Genre: Crime / Drama</p>
    //     <p>Release Year: 1974</p>
    //     <p>Language: English</p>
    //     <p>Duration: 202 minutes</p>
    //     <p>Director: Francis Ford Coppola</p>
    //     <p>
    //       Cast: Al Pacino, Robert De Niro, Robert Duvall, Diane Keaton, John
    //       Cazale
    //     </p>
    //     <p>Rating: 9/10</p>
    //   </div>
    //
    //   <div class="details-buttons">
    //     <a href="favorites.html">Add to Favorites</a>
    //     <a href="reviews.html">Write a Review</a>
    //   </div>
}

