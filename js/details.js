import {
    loadMovies,
    removeLoading,
    getIdFromUrl
} from "./helper.js";

function loadMovieDetails(mId, movies = []) {
    let [movie] = movies.filter((mv) => mv.id == mId)
    let movieDetailsContainer = document.querySelector(".movie-details")
    // let movieDetailsContainer = document.createElement("section")
    // movieDetailsContainer.className = "movie-details"

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
    favorites.className = "add-to-fav"
    favorites.href = `favorites.html?id=${movie.id}`
    favorites.innerText = "Add to Favorites"

    // Create Write a Review link
    let review = document.createElement("a")
    review.href = `reviews.html?id=${movie.id}`
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
    movieDetailsContainer.appendChild(posterContainer)
    movieDetailsContainer.appendChild(detailsContent)

}


function main(movies = []) {
    let id = getIdFromUrl();
    loadMovieDetails(id, movies)
}

loadMovies()
    .then(movies_ => {
        removeLoading()
        main(movies_.movies)
    })
    .catch(error => { console.error('Error:', error) });
