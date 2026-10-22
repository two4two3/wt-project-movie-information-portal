import { loadMovies, getAllGenres, removeLoading } from "./helper.js"

function renderFeaturedMovies(featuredMovies = []) {
    let featuredContainer = document.querySelector(".featured");
    console.log(featuredMovies);
    featuredMovies.forEach((el) => {
        let img = document.createElement("img")
        img.src = "/img/" + el.path;
        img.alt = el.title;
        img.id = el.id
        featuredContainer.appendChild(img);
    })
}
function renderPopularMovies(popularMovies = []) {
    let popularContainer = document.querySelector(".popular");
    console.log(popularMovies);
    popularMovies.forEach((el) => {
        let img = document.createElement("img")
        img.src = "/img/" + el.path;
        img.id = el.id
        img.alt = el.title;
        popularContainer.appendChild(img);
    })
}

function renderGenres(moviesGenres = []) {
    let genreContainer = document.querySelector(".genres");
    moviesGenres.forEach((el) => {
        let btn = document.createElement("button")
        btn.className = btn.className + " genre-btn"
        btn.innerText = el
        btn.id = "genre" + el
        genreContainer.appendChild(btn);
    })
    let btns = document.querySelectorAll(".genre-btn")
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            document.location.href = `movies.html?search-movie-genre=${btn.id.slice(5)}&search-movie-title=`
        })
    })
}

function main(moviesData) {
    renderFeaturedMovies(moviesData.movies.filter((element) => [4, 1, 3, 2].includes(element.id)));
    renderPopularMovies(moviesData.movies.filter((element) => [5, 6, 7].includes(element.id)));
    renderGenres(getAllGenres(moviesData.movies));

    document.querySelectorAll("img").forEach(e => {
        e.addEventListener("click", (ev) => {
            document.location.href = `details.html?id=${ev.target.id}`
        })
    })
}

loadMovies()
    .then(movies_ => {
        // setTimeout(() => {
        //     removeLoading();
        //     main(movies_)
        // }, 1300)
        removeLoading();
        main(movies_)
    })
    .catch(error => console.error('Error:', error));
