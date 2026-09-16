// Save data to Local Storage

export function saveWatchlist(watchlist) {

    localStorage.setItem(
        "watchlist",
        JSON.stringify(watchlist)
    );

}


// Get data from Local Storage

export function getWatchlist() {

    return JSON.parse(
        localStorage.getItem("watchlist")
    ) || [];

}


// Clear Watchlist

export function clearWatchlist() {

    localStorage.removeItem("watchlist");

}