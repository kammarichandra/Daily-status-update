

// local storage

let key = "favorites";

export function saveFavorites(task) {
  localStorage.setItem(key, JSON.stringify(task));
}

export function getFavorites() {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : [];
}

// session storage


export function saveSessionTask(task) {
  sessionStorage.setItem("lasttask", JSON.stringify(task));
}

