import {
    loadMovies,
    removeLoading,
    getParamFromUrl
} from "./helper.js";


function addReview(userReview) {
    let review = [{
        title: userReview.title,
        name: userReview.name,
        rating: userReview.rating,
        review: userReview.review
    }]
    console.log("review", review);
    let reviews = localStorage.getItem("reviews")

    if (!reviews) {
        localStorage.setItem("reviews", JSON.stringify(review))
    } else {
        reviews = JSON.parse(reviews)
        reviews.push(review[0])

        localStorage.setItem("reviews", JSON.stringify(reviews))
    }
}

function renderMovieInfo([movie]) {
    let name = document.querySelector("#movie")
    name.value = movie.title
}

function renderUserReviews() {
    let reviews = localStorage.getItem("reviews")
    let extra = document.querySelectorAll(".existing-review")[0]
    extra.style.display = "none"

    if (!reviews || !JSON.parse(reviews)) {
        document.querySelector(".page-content").append('No more Review')
    } else {
        let parentCon = document.querySelector(".page-content")
        reviews = JSON.parse(reviews)
        console.log("reviews", reviews);

        reviews.forEach(r => {

            //remove empty review
            extra.style.display = "none"

            let existingReview = document.createElement("div")
            existingReview.className = "existing-review"
            let name = document.createElement("span")
            name.innerHTML = `by - <b>${r.name}</b>`
            name.className = "review-uname"
            let h2 = document.createElement("h2")
            h2.innerHTML = r.title
            let rating = document.createElement("p")
            rating.className = "review-rating"
            rating.innerHTML = r.rating + "/10"
            let review = document.createElement("p")
            review.innerHTML = r.review

            existingReview.appendChild(h2)
            existingReview.appendChild(rating)
            existingReview.appendChild(review)
            existingReview.appendChild(name)

            parentCon.appendChild(existingReview)
        })
    }
}


function main(movies = []) {
    let q = document.location.search

    if (q.includes("id")) {
        document.querySelector(".existing-review").style.display = "none"
        let id = getParamFromUrl("id")
        if (id) {
            document.querySelector(".review-form").style.display = "block"
            renderMovieInfo(movies.filter(mv => mv.id == id));
        } else {
            document.querySelector(".existing-review").style.display = "block"
            document.querySelector(".review-form").style.display = "none"
            renderUserReviews();
        }
    } else {

        document.querySelector(".existing-review").style.display = "block"
        document.querySelector(".review-form").style.display = "none"
        renderUserReviews();
    }

    document.forms[0].addEventListener("submit", (e => {
        // validation remains
        e.preventDefault();

        let mname = e.target["movie"].value
        let name = e.target["name"].value
        let rating = e.target["rating"].value
        let review = e.target["review"].value

        let validationErrors = []
        if (name.length < 3 || name.length > 20) {
            validationErrors.push({ field: "name", message: "Name should be minimum 3 characters or maximum 20 characters long" })
        }
        if (+rating < 1 || +rating > 10) {
            validationErrors.push({ field: "rating", message: "Rating should be between 1-10" })
        }
        if (review.length < 20) {
            validationErrors.push({ field: "review", message: "Your review should be minimum 20 characters long" })
        }
        let span = document.getElementById("error");
        span.innerHTML = ""

        console.log(validationErrors)
        if (validationErrors.length > 0) {
            span.style.display = "inline-block"
            e.target[validationErrors[0].field].focus()
            validationErrors.forEach(e => {
                span.innerHTML = span.innerHTML + "- " + e.message + "<br>"
            })
        } else {

            let userReview = {
                title: mname,
                name: name,
                rating: rating,
                review: review
            }
            addReview(userReview)
            document.location.href = "reviews.html"
        }
    }))
}

loadMovies()
    .then(movies_ => {
        main(movies_.movies)
    })
    .catch(error => console.error('Error:', error));
