import { getVehicles, addVehicle, deleteVehicle } from "./api.js";
import { renderVehicles, showLoading, hideLoading, showError, hideError } from "./Ui.js";
import { toggleFavorite } from "./Storage.js";

let vehicles = [];

const modal = document.getElementById("vehicleModal");
const addVehicleBtn = document.getElementById("addVehicleBtn");
const closeVehicleModal = document.getElementById("closeVehicleModal");
const vehicleForm = document.getElementById("vehicleForm");

function openModal() {
    if (modal) modal.classList.add("show");
}

function closeModal() {
    if (modal) modal.classList.remove("show");
    if (vehicleForm) vehicleForm.reset();
}

async function loadVehicles() {
    try {
        showLoading();
        hideError();

        vehicles = await getVehicles();
        renderVehicles(vehicles);
        updateDashboard();
    } catch (error) {
        showError("Unable to load vehicles. Please try again.");
        console.error(error);
    } finally {
        hideLoading();
    }
}

function updateDashboard() {
    const total = vehicles.length;
    const available = vehicles.filter(vehicle => vehicle.status === "Available").length;
    const sold = vehicles.filter(vehicle => vehicle.status === "Sold").length;

    const totalVehicles = document.getElementById("totalVehicles");
    const availableVehicles = document.getElementById("availableVehicles");
    const soldVehicles = document.getElementById("soldVehicles");

    if (totalVehicles) totalVehicles.textContent = total;
    if (availableVehicles) availableVehicles.textContent = available;
    if (soldVehicles) soldVehicles.textContent = sold;
}

function filterVehicles() {
    const searchInput = document.getElementById("searchInput");
    const typeFilter = document.getElementById("typeFilter");

    if (!searchInput || !typeFilter) return;

    const search = searchInput.value.toLowerCase();
    const type = typeFilter.value;

    const filtered = vehicles.filter(vehicle => {
        const nameMatches = (vehicle.name || "").toLowerCase().includes(search);
        const brandMatches = (vehicle.brand || "").toLowerCase().includes(search);
        const matchesSearch = nameMatches || brandMatches;
        const matchesType = type === "all" || vehicle.type === type;

        return matchesSearch && matchesType;
    });

    renderVehicles(filtered);
}

if (addVehicleBtn) {
    addVehicleBtn.addEventListener("click", openModal);
}

if (closeVehicleModal) {
    closeVehicleModal.addEventListener("click", closeModal);
}

if (modal) {
    modal.addEventListener("click", event => {
        if (event.target === modal) closeModal();
    });
}

document.getElementById("searchInput")?.addEventListener("input", filterVehicles);
document.getElementById("typeFilter")?.addEventListener("change", filterVehicles);

document.getElementById("vehicleContainer")?.addEventListener("click", async event => {
    const deleteBtn = event.target.closest(".delete-btn");
    const favoriteBtn = event.target.closest(".favorite-btn");

    if (deleteBtn) {
        const id = deleteBtn.dataset.id;

        try {
            await deleteVehicle(id);
            vehicles = vehicles.filter(vehicle => String(vehicle.id) !== String(id));
            renderVehicles(vehicles);
            updateDashboard();
        } catch (error) {
            showError("Unable to delete vehicle.");
        }
    }

    if (favoriteBtn) {
        const id = favoriteBtn.dataset.id;
        const vehicle = vehicles.find(item => String(item.id) === String(id));

        if (!vehicle) return;

        toggleFavorite(vehicle);
        renderVehicles(vehicles);
    }
});

document.getElementById("vehicleForm")?.addEventListener("submit", async event => {
    event.preventDefault();

    const vehicle = {
        name: document.getElementById("vehicleName")?.value.trim(),
        brand: document.getElementById("vehicleBrand")?.value.trim(),
        type: document.getElementById("vehicleType")?.value,
        year: Number(document.getElementById("vehicleYear")?.value),
        price: Number(document.getElementById("vehiclePrice")?.value),
        status: "Available"
    };

    if (!vehicle.name || !vehicle.brand || !vehicle.year || !vehicle.price) {
        showError("Please fill in all vehicle details.");
        return;
    }

    try {
        const newVehicle = await addVehicle(vehicle);
        vehicles.push(newVehicle);
        renderVehicles(vehicles);
        updateDashboard();
        closeModal();
    } catch (error) {
        showError("Unable to add vehicle.");
    }
});

loadVehicles();