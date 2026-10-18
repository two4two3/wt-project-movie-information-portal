
export function removeLoading() {
    let loadingAll = document.querySelectorAll(".loading")
    const elementsArray = Array.from(loadingAll);
    elementsArray.forEach((e) => {
        e.style.display = "none";
    })
}

export async function loadMovies() {
    const response = await fetch('movies.json');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
}

export function getAllGenres(movies = []) {
    return [...new Set(movies.flatMap(movie => movie.genre))]
}
