async function loadMovies() {
    const response = await fetch('movies.json');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
}

function removeLoading() {
    let loadingAll = document.querySelectorAll(".loading")
    const elementsArray = Array.from(loadingAll);
    elementsArray.forEach((e) => {
        e.style.display = "none";
    })
    console.log(elementsArray)
}
function renderFeaturedMovies(featuredMovies = []) {
    let featuredContainer = document.querySelector(".featured");
    console.log(featuredMovies);
    featuredMovies.forEach((el) => {
        let img = document.createElement("img")
        img.src = el.path;
        img.alt = el.title;
        featuredContainer.appendChild(img);
    })
}
function renderPopularMovies(popularMovies = []) {
    let popularContainer = document.querySelector(".popular");
    console.log(popularMovies);
    popularMovies.forEach((el) => {
        let img = document.createElement("img")
        img.src = el.path;
        img.alt = el.title;
        popularContainer.appendChild(img);
    })
}

function renderGenres(moviesGenres = []) {
    let genreContainer = document.querySelector(".genres");
    moviesGenres.forEach((el) => {
        let btn = document.createElement("button")
        btn.innerText = el
        btn.id = "genre" + el
        genreContainer.appendChild(btn);
    })
}

function main(moviesData = []) {
    renderFeaturedMovies(moviesData.movies.filter((element) => [4, 1, 3, 2].includes(element.id)));
    renderPopularMovies(moviesData.movies.filter((element) => [5, 6, 7].includes(element.id)));
    renderGenres([...new Set(moviesData.movies.flatMap(movie => movie.genre))]);
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
