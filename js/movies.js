import {
    loadMovies,
    getAllGenres,
    removeLoading
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
    renderAllMovies(movies)
    document.querySelector(".search").addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e.target)
        searchMovies(e.target[0].value, e.target[2].value);
    })
}

loadMovies()
    .then(movies_ => {
        // removeLoading();
        console.log(movies_)
        removeLoading()
        main(movies_.movies)
    })
    .catch(error => console.error('Error:', error));
