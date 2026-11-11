
export function createStorage(key) {

    // Closure
    
    return {
        save(data) {
            localStorage.setItem(key, JSON.stringify(data));
        },

        get() {
            return JSON.parse(localStorage.getItem(key)) || [];
        }
    };
}
