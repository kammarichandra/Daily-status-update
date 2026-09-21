import { getFavorites } from "./Storage.js";

export function showLoading() {
    const loading = document.getElementById("loading");
    if (loading) loading.classList.remove("d-none");
}

export function hideLoading() {
    const loading = document.getElementById("loading");
    if (loading) loading.classList.add("d-none");
}

export function showError(message) {
    const error = document.getElementById("errorMessage");
    if (!error) return;

    error.textContent = message;
    error.classList.remove("d-none");
}

export function hideError() {
    const error = document.getElementById("errorMessage");
    if (error) error.classList.add("d-none");
}

export function renderVehicles(vehicles) {
    const container = document.getElementById("vehicleContainer");
    const empty = document.getElementById("emptyMessage");

    if (!container || !empty) return;

    container.innerHTML = "";

    if (vehicles.length === 0) {
        empty.classList.remove("d-none");
        return;
    }

    empty.classList.add("d-none");

    const favorites = getFavorites();
    const favoriteIds = new Set(favorites.map(vehicle => String(vehicle.id)));

    vehicles.forEach(vehicle => {
        const card = document.createElement("div");
        const isFavorite = favoriteIds.has(String(vehicle.id));

        card.className = "vehicle-card-item";

        card.innerHTML = `
            <div class="vehicle-card">
                <div class="vehicle-card-body">
                    <h4>🚗 ${vehicle.name}</h4>
                    <p><strong>Brand:</strong> ${vehicle.brand}</p>
                    <p><strong>Type:</strong> ${vehicle.type}</p>
                    <p><strong>Year:</strong> ${vehicle.year}</p>
                    <p><strong>Price:</strong> ₹${vehicle.price}</p>
                    <p><strong>Status:</strong> ${vehicle.status || "Available"}</p>

                    <div class="card-actions">
                        <button class="btn delete-btn" data-id="${vehicle.id}">Delete</button>
                        <button class="btn favorite-btn ${isFavorite ? "active" : ""}" data-id="${vehicle.id}">
                            ${isFavorite ? "★ Favorited" : "☆ Favorite"}
                        </button>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}