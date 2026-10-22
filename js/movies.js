import {
    loadMovies,
    getAllGenres,
    removeLoading,
    getParamFromUrl
} from "./helper.js";

function renderAllGenresOption(genres = []) {
    let searchForm = document.querySelector(".search")
    let searchSelect = searchForm[2]
    genres.forEach(e => {
        let opt = document.createElement("option")
        opt.value = e
        opt.innerText = e
        searchSelect.appendChild(opt)
    })
}

function renderAllMovies(movies = []) {

    let movieCardsContainer = document.querySelector(".movie-cards")

    movies.forEach(movie => {
        let movieCard = document.createElement("div")
        movieCard.className = movieCard.className + "card "

        let img = document.createElement("img")
        img.src = "/img/" + movie.path
        img.alt = movie.title
        img.className = "card-poster"
        let title = document.createElement("span")
        title.className = "title"
        title.innerText = movie.title
        let year = document.createElement("span")
        year.className = "year"
        year.innerText = movie.year
        let genre = document.createElement("span")
        genre.className = "genre"
        genre.innerText = movie.genre
        let rating = document.createElement("span")
        rating.className = "rating"
        rating.innerText = movie.rating + "/10"
        // let description = document.createElement("p")
        // description.className = "description"
        // description.innerText = movie.description
        let anchor = document.createElement("a")
        anchor.className = "view-details"
        anchor.innerText = "View Details"
        anchor.href = `details.html?id=${movie.id}`

        movieCard.appendChild(img)
        movieCard.appendChild(title)
        movieCard.appendChild(year)
        movieCard.appendChild(genre)
        movieCard.appendChild(rating)
        // movieCard.appendChild(description)
        movieCard.appendChild(anchor)

        movieCardsContainer.appendChild(movieCard)
    })
}

function searchMovies(title, genre) {
    console.log(title, genre)
}


function main(movies = []) {
    renderAllGenresOption(getAllGenres(movies));
    let q = document.location.search
    console.log(q)
    if (q.includes("search-movie-title") && q.includes("search-movie-genre")) {
        renderAllMovies(movies.filter(mv => {
            if (mv.title.toLowerCase().includes(getParamFromUrl("search-movie-title").toLowerCase())
                && mv.genre.includes(getParamFromUrl("search-movie-genre"))) {
                return true
            } else {
                false
            }
        }))
    } else if (q.includes("search-movie-title")) {
        renderAllMovies(movies.filter(mv => {
            if (mv.title.toLowerCase().includes(getParamFromUrl("search-movie-title").toLowerCase())) {
                return true
            }
        }))
    } else {
        renderAllMovies(movies)
    }
}

loadMovies()
    .then(movies_ => {
        // removeLoading();
        console.log(movies_)
        removeLoading()
        main(movies_.movies)
    })
    .catch(error => console.error('Error:', error));
