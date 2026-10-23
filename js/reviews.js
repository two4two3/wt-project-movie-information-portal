import {
    loadMovies,
    removeLoading,
    getParamFromUrl
} from "./helper.js";


function addReview(userReview) {
    let reviews = localStorage.getItem("reviews")
    if (!reviews) {
        let reviews = [{}]
    }
}

function renderMovieInfo([movie]) {
    let name = document.querySelector("#movie")
    name.value = movie.title
}

function renderUserReviews() { }


function main(movies = []) {
    let q = document.location.search

    if (q.includes("id")) {
        document.querySelector(".existing-review").style.display = "none"
        let id = getParamFromUrl("id")
        if (id) {
            renderMovieInfo(movies.filter(mv => mv.id == id));
        } else {
            renderUserReviews();
        }
    } else {
        renderUserReviews();
    }

    document.forms[0].addEventListener("submit", (e => {
        // validation remains
        e.preventDefault();
        document.location.href = "reviews.html"

    }))
}

loadMovies()
    .then(movies_ => {
        removeLoading()
        main(movies_.movies)
    })
    .catch(error => console.error('Error:', error));
