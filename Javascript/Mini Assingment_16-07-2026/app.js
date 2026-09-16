import { movies } from "./movies.js";

import {
    saveWatchlist,
    getWatchlist
} from "./storage.js";

import {
    searchMovies
} from "./api.js";


// -----------------------------
// DOM Elements
// -----------------------------

const movieContainer =
    document.getElementById("movieContainer");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const errorMessage =
    document.getElementById("errorMessage");

const loading =
    document.getElementById("loading");

const genreFilter =
    document.getElementById("genreFilter");

const sortSelect =
    document.getElementById("sortSelect");

const watchlistBtn =
    document.getElementById("watchlistBtn");

const watchlistSection =
    document.getElementById("watchlistSection");

const closeWatchlist =
    document.getElementById("closeWatchlist");

const watchlistContainer =
    document.getElementById("watchlistContainer");

const watchlistCount =
    document.getElementById("watchlistCount");


// -----------------------------
// Application Data
// -----------------------------

let movieList = [...movies];

let watchlist = getWatchlist();


// -----------------------------
// Display Movies
// -----------------------------

function displayMovies(movieArray) {

    if (movieArray.length === 0) {

        movieContainer.innerHTML = `
            <div class="empty">
                No movies found.
            </div>
        `;

        return;
    }


    movieContainer.innerHTML =
        movieArray.map(movie => {

            const {
                id,
                title,
                genre,
                rating,
                year,
                image,
                description
            } = movie;


            const alreadyAdded =
                watchlist.some(
                    item => item.id === id
                );


            return `

                <div class="movie-card">

                    <img
                        src="${image}"
                        alt="${title}"
                    >

                    <div class="movie-content">

                        <h3>${title}</h3>

                        <p>
                            ${genre} • ${year}
                        </p>

                        <p class="rating">
                            ⭐ ${rating}
                        </p>

                        <p>
                            ${description}
                        </p>


                        <div class="movie-buttons">

                            <button
                                class="details-btn"
                                onclick="showDetails(${id})"
                            >
                                Details
                            </button>


                            <button
                                class="watch-btn"
                                onclick="toggleWatchlist(${id})"
                            >
                                ${
                                    alreadyAdded
                                    ? "❤️ Added"
                                    : "🤍 Watchlist"
                                }
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");
}

function renderMovies() {

    const selectedGenre = genreFilter.value;
    const sortValue = sortSelect.value;

    let visibleMovies = selectedGenre === "all"
        ? [...movieList]
        : movieList.filter(movie => movie.genre === selectedGenre);

    if (sortValue === "name") {

        visibleMovies.sort((a, b) =>
            a.title.localeCompare(b.title)
        );

    }

    if (sortValue === "rating") {

        visibleMovies.sort((a, b) =>
            b.rating - a.rating
        );

    }

    displayMovies(visibleMovies);
}


// -----------------------------
// Add / Remove Watchlist
// -----------------------------

function toggleWatchlist(id) {

    const movie =
        movieList.find(
            movie => movie.id === id
        ) || watchlist.find(
            movie => movie.id === id
        );


    const exists =
        watchlist.some(
            item => item.id === id
        );


    if (!movie && !exists) {

        return;

    }


    if (exists) {

        watchlist =
            watchlist.filter(
                item => item.id !== id
            );

    } else {

        watchlist = [
            ...watchlist,
            movie
        ];

    }


    saveWatchlist(watchlist);

    updateWatchlistCount();

    renderMovies();

    displayWatchlist();
}


// Make function available to HTML onclick

window.toggleWatchlist =
    toggleWatchlist;


// -----------------------------
// Movie Details
// -----------------------------

function showDetails(id) {

    const movie =
        movieList.find(
            movie => movie.id === id
        );


    if (!movie) {

        return;

    }


    alert(`
Movie: ${movie.title}

Genre: ${movie.genre}

Rating: ⭐ ${movie.rating}

Year: ${movie.year}

Description:
${movie.description}
    `);
}


window.showDetails =
    showDetails;


// -----------------------------
// Search
// -----------------------------

searchBtn.addEventListener(
    "click",
    async () => {

        const keyword =
            searchInput.value.trim();


        if (!keyword) {

            errorMessage.textContent =
                "Please enter a movie name.";

            return;

        }


        errorMessage.textContent = "";

        loading.style.display = "block";


        try {

            const apiData =
                await searchMovies(keyword);


            /*
                Convert API response
                into our movie format
            */

            movieList =
                apiData.map(item => {

                    const show =
                        item.show;


                    return {

                        id: show.id,

                        title: show.name,

                        genre:
                            show.genres?.[0]
                            || "Unknown",

                        rating:
                            show.rating?.average
                            || 0,

                        year:
                            show.premiered
                            ? show.premiered.substring(0, 4)
                            : "Unknown",

                        image:
                            show.image?.medium
                            ||
                            "https://via.placeholder.com/300x400",

                        description:
                            show.summary
                            ?.replace(/<[^>]*>/g, "")
                            ||
                            "No description available."

                    };

                });


            renderMovies();


        } catch (error) {

            errorMessage.textContent =
                error.message;

            movieContainer.innerHTML = "";

        } finally {

            loading.style.display = "none";

        }

    }
);


// -----------------------------
// Enter Key Search
// -----------------------------

searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            searchBtn.click();

        }

    }
);


// -----------------------------
// Genre Filter
// -----------------------------

genreFilter.addEventListener(
    "change",
    () => {
        renderMovies();

    }
);


// -----------------------------
// Sort Movies
// -----------------------------

sortSelect.addEventListener(
    "change",
    () => {
        renderMovies();

    }
);


// -----------------------------
// Display Watchlist
// -----------------------------

function displayWatchlist() {

    if (watchlist.length === 0) {

        watchlistContainer.innerHTML = `

            <div class="empty">

                ❤️ Your watchlist is empty.

            </div>

        `;

        return;

    }


    watchlistContainer.innerHTML =
        watchlist.map(movie => {

            return `

                <div class="movie-card">

                    <img
                        src="${movie.image}"
                        alt="${movie.title}"
                    >

                    <div class="movie-content">

                        <h3>
                            ${movie.title}
                        </h3>

                        <p>
                            ⭐ ${movie.rating}
                        </p>

                        <button
                            class="watch-btn"
                            onclick="toggleWatchlist(${movie.id})"
                        >
                            🗑️ Remove
                        </button>

                    </div>

                </div>

            `;

        }).join("");
}


// -----------------------------
// Watchlist Count
// -----------------------------

function updateWatchlistCount() {

    watchlistCount.textContent =
        watchlist.length;

}


// -----------------------------
// Open Watchlist
// -----------------------------

watchlistBtn.addEventListener(
    "click",
    () => {

        displayWatchlist();

        watchlistSection.style.display =
            "block";

    }
);


// -----------------------------
// Close Watchlist
// -----------------------------

closeWatchlist.addEventListener(
    "click",
    () => {

        watchlistSection.style.display =
            "none";

    }
);


// -----------------------------
// Initial Application
// -----------------------------

displayMovies(movieList);

updateWatchlistCount();

displayWatchlist();