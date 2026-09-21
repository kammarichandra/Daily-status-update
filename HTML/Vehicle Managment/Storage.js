const STORAGE_KEY = "favoriteVehicles";


export function getFavorites() {

    return JSON.parse( localStorage.getItem(STORAGE_KEY)) || [];

}


export function saveFavorites(favorites) {

    localStorage.setItem( STORAGE_KEY, JSON.stringify(favorites));

}


export function toggleFavorite(vehicle) {

    const favorites = getFavorites();

    const exists = favorites.some(
        item => item.id === vehicle.id
    );

    const updatedFavorites = exists

        ? favorites.filter(
            item => item.id !== vehicle.id
        )

        : [...favorites, vehicle];


    saveFavorites(updatedFavorites);

    return updatedFavorites;
}