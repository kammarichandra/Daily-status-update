const API = "https://dummyjson.com/products";

let products = [];

// Fetch products
async function getProducts() {

    document.getElementById("loading").innerText = "Loading products...";

    try {

        let response = await fetch(API);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        let data = await response.json();

        products = data.products;

        displayProducts(products);
        loadCategories();

    } catch (error) {

        document.getElementById("loading").innerText =
            error.message;

    } finally {

        document.getElementById("loading").style.display = "none";
    }
}

// Display products

function displayProducts(data) {

    let container = document.getElementById("products");

    container.innerHTML = "";

    data.forEach(product => {

        container.innerHTML += `
            <div class="product">

                <h3>${product.title}</h3>

                <p>Price: $${product.price}</p>

                <p>Category: ${product.category}</p>

                <button class="edit"
                    onclick="editProduct(${product.id})">
                    Edit
                </button>

                <button class="delete"
                    onclick="deleteProduct(${product.id})">
                    Delete
                </button>

            </div>
        `;
    });
}

// Load categories
function loadCategories() {

    let categories = [...new Set( products.map(p => p.category))];

    let select = document.getElementById("category");

    select.innerHTML = '<option value="">All Categories</option>';

    categories.forEach(category => {

        select.innerHTML += ` <option value="${category}">${category}</option> `;

    });
}

// Search products

document.getElementById("search").addEventListener("input", filterProducts);

// Filter products

document.getElementById("category").addEventListener("change", filterProducts);

function filterProducts() {

    let search = document.getElementById("search").value.toLowerCase();

    let category = document.getElementById("category").value;

    let filtered = products.filter(product => {

        return product.title.toLowerCase().includes(search) &&
            (category === "" || product.category === category);

    });

    displayProducts(filtered);
}

// Add product
async function addProduct() {

    let title = document.getElementById("name").value;

    let price = Number(document.getElementById("price").value);

    if (!title || !price || price <= 0) {
        alert("Enter valid product details");
        return;
    }

    try {

        let response = await fetch(`${API}/add`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: title,
                price: price
            })

        });

        if (!response.ok) {
            throw new Error("Product addition failed");
        }

        let newProduct = await response.json();

        products.unshift(newProduct);

        displayProducts(products);

        document.getElementById("name").value = "";
        document.getElementById("price").value = "";

        alert("Product added successfully");

    } catch (error) {
        alert(error.message);
    }
}

// Edit product
async function editProduct(id) {

    let product = products.find(p => p.id === id);

    let newName = prompt("Enter new product name", product.title);

    if (!newName || !newName.trim()) return;

    try {

        let response = await fetch(`${API}/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: newName
            })

        });

        if (!response.ok) {
            throw new Error("Update failed");
        }

        let updatedProduct = await response.json();

        products = products.map(p =>
            p.id === id ? { ...p, ...updatedProduct } : p
        );

        displayProducts(products);

        alert("Product updated successfully");

    } catch (error) {
        alert(error.message);
    }
}

// Delete product

async function deleteProduct(id) {

    if (!confirm("Are you sure you want to delete?")) return;

    try {

        let response = await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Delete failed");
        }

        products = products.filter(p => p.id !== id);

        displayProducts(products);

        alert("Product deleted successfully");

    } catch (error) {
        alert(error.message);
    }
}

// Initial API call

getProducts();