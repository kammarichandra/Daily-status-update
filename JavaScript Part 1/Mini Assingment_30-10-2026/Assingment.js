const API_URL = "https://dummyjson.com/products";

let products = [];

const productList = document.getElementById("productList");
const message = document.getElementById("message");
const productForm = document.getElementById("productForm");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Fetch products from API
async function fetchProducts() {
    try {
        message.textContent = "Loading products...";

        const response = await fetch(`${API_URL}?limit=100`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        products = data.products;

        displayProducts(products);
        loadCategories();

        message.textContent = "";

    } catch (error) {
        message.textContent = error.message;
    }
}

// Display products
function displayProducts(productData) {
    productList.innerHTML = "";

    if (productData.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
    }

    productData.forEach(product => {
        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>

            <button onclick="editProduct(${product.id})">
                Edit
            </button>

            <button onclick="deleteProduct(${product.id})">
                Delete
            </button>
        `;

        productList.appendChild(card);
    });
}

// Load categories
function loadCategories() {
    const categories = [
        ...new Set(products.map(product => product.category))
    ];

    categoryFilter.innerHTML = `
        <option value="">All Categories</option>
    `;

    categories.forEach(category => {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);
    });
}

// Search and filter
function searchAndFilter() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(searchValue);

        const matchesCategory =
            selectedCategory === "" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
}

searchInput.addEventListener("input", searchAndFilter);
categoryFilter.addEventListener("change", searchAndFilter);

// Open form
function openForm() {
    productForm.reset();
    document.getElementById("productId").value = "";

    productForm.classList.remove("hidden");
}

// Close form
function closeForm() {
    productForm.classList.add("hidden");
}

// Add or edit product
productForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const id = document.getElementById("productId").value;
    const title = document.getElementById("title").value;
    const price = Number(document.getElementById("price").value);

    const productData = {
        title,
        price
    };

    try {
        if (id) {
            // Update product
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error("Failed to update product");
            }

            const updatedProduct = await response.json();

            products = products.map(product =>
                product.id === Number(id)
                    ? { ...product, ...updatedProduct }
                    : product
            );

        } else {
            // Add product
            const response = await fetch(`${API_URL}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error("Failed to add product");
            }

            const newProduct = await response.json();

            products.unshift({
                ...newProduct,
                category: "new",
                thumbnail: ""
            });
        }

        displayProducts(products);
        loadCategories();
        closeForm();

        message.textContent = "Product saved successfully.";

    } catch (error) {
        message.textContent = error.message;
    }
});

// Edit product
function editProduct(id) {
    const product = products.find(product => product.id === id);

    if (!product) return;

    document.getElementById("productId").value = product.id;
    document.getElementById("title").value = product.title;
    document.getElementById("price").value = product.price;

    productForm.classList.remove("hidden");
}

// Delete product
async function deleteProduct(id) {
    const confirmDelete = confirm(
        "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete product");
        }

        products = products.filter(product => product.id !== id);

        displayProducts(products);

        message.textContent = "Product deleted successfully.";

    } catch (error) {
        message.textContent = error.message;
    }
}

// Initial API call
fetchProducts();