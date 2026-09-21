const API_URL = "https://example.com/vehicles";
const STORAGE_KEY = "vehicleManagementLocalData";

const defaultVehicles = [
    {
        id: 1,
        name: "Swift",
        brand: "Maruti",
        type: "Hatchback",
        year: 2023,
        price: 700000,
        status: "Available"
    },
    {
        id: 2,
        name: "City",
        brand: "Honda",
        type: "Sedan",
        year: 2022,
        price: 1200000,
        status: "Sold"
    },
    {
        id: 3,
        name: "Creta",
        brand: "Hyundai",
        type: "SUV",
        year: 2024,
        price: 1600000,
        status: "Available"
    }
];

function readLocalVehicles() {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultVehicles));
        return [...defaultVehicles];
    }

    try {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [...defaultVehicles];
    } catch (error) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultVehicles));
        return [...defaultVehicles];
    }
}

function writeLocalVehicles(vehicles) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
}

export async function getVehicles() {
    return readLocalVehicles();
}

export async function addVehicle(vehicle) {
    const vehicles = readLocalVehicles();
    const newVehicle = {
        id: Date.now(),
        ...vehicle
    };

    const updatedVehicles = [...vehicles, newVehicle];
    writeLocalVehicles(updatedVehicles);
    return newVehicle;
}

export async function updateVehicle(id, vehicle) {
    const vehicles = readLocalVehicles();
    const updatedVehicles = vehicles.map(item =>
        String(item.id) === String(id) ? { ...item, ...vehicle } : item
    );

    writeLocalVehicles(updatedVehicles);
    return updatedVehicles.find(item => String(item.id) === String(id));
}

export async function deleteVehicle(id) {
    const vehicles = readLocalVehicles();
    const updatedVehicles = vehicles.filter(item => String(item.id) !== String(id));
    writeLocalVehicles(updatedVehicles);
    return true;
}