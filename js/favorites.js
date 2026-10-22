import {
    loadMovies,
    removeLoading,
    getIdFromUrl
} from "./helper.js";

export function addToFav(mid) {
    let fav = localStorage.getItem("favorites")
    fav = JSON.parse(fav)
    if (fav && !fav.ids.includes(mid)) {
        fav.ids.push(mid)
        localStorage.setItem("favorites", JSON.stringify(fav))
        return
    }
    fav = {
        "ids": [mid]
    }
    localStorage.setItem("favorites", JSON.stringify(fav))
}

export function removeFromFav(mid) {

    let fav = localStorage.getItem("favorites")
    fav = JSON.parse(fav)
    if (fav) {
        fav.ids = fav.ids.filter(id_ => id_ != mid)
        localStorage.setItem("favorites", JSON.stringify(fav))
    }
}

function createFavoriteCard(movie) {

    let favCard = document.createElement("div")
    favCard.className = "favorite-card"

    let img = document.createElement("img")
    img.src = "img/" + movie.path

    let info = document.createElement("div")
    info.className = "favorite-info"

    let title = document.createElement("h2")
    title.textContent = movie.title

    let year = document.createElement("p")
    year.textContent = movie.year

    let genres = document.createElement("p")
    genres.textContent = movie.genre

    let rating = document.createElement("p")
    rating.textContent = movie.rating

    let anchor = document.createElement("a")
    anchor.href = `details.html?id=${movie.id}`
    anchor.textContent = "View Details"

    let remove = document.createElement("a")
    remove.href = `favorites.html?id=${movie.id}&remove`
    remove.textContent = "Remove"

    info.appendChild(title)
    info.appendChild(year)
    info.appendChild(genres)
    info.appendChild(rating)
    info.appendChild(anchor)
    info.appendChild(remove)

    favCard.appendChild(img)
    favCard.appendChild(info)
    return favCard
}

function loadFavoritesMovies(movies = []) {

    let favoriteMovies = localStorage.getItem("favorites");
    favoriteMovies = JSON.parse(favoriteMovies)
    let pageContent = document.querySelector(".page-content")
    if (favoriteMovies && favoriteMovies.ids) {
        movies.forEach(mv => {
            if (favoriteMovies.ids.includes(mv.id)) {
                let card = createFavoriteCard(mv)
                pageContent.appendChild(card)
                console.log("appending")
            }
        })
        return
    }
    pageContent.append("No Favorites")
    return


}


function main(movies = []) {
    let id = getIdFromUrl()
    if (document.location.search.includes("remove")) {
        removeFromFav(Number(id))
    }
    else if (id) {
        addToFav(Number(id))
    }
    loadFavoritesMovies(movies)
}

loadMovies()
    .then(movies_ => {
        removeLoading()
        main(movies_.movies)
    })
    .catch(error => console.error('Error:', error));
