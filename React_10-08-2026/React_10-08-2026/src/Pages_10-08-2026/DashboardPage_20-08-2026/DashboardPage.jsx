import React, { Suspense } from 'react'
import Dashboard from '../../Components_10-08-2026/Product Dashboard_20-08-2026/Pages/Dashboard';
import Products from '../../Components_10-08-2026/Product Dashboard_20-08-2026/Pages/Products';
import ProductDetails from '../../Components_10-08-2026/Product Dashboard_20-08-2026/Pages/ProductDetails';
import Reports from '../../Components_10-08-2026/Product Dashboard_20-08-2026/Pages/Reports';
import Settings from '../../Components_10-08-2026/Product Dashboard_20-08-2026/Pages/Settings';
// import Dashboard from './../../Components_10-08-2026/Product Dashboard_20-08-2026/Pages/Dashboard';
import Navbar from '../../Components_10-08-2026/Product Dashboard_20-08-2026/Components/Navbar';
import { useState } from 'react';


function DashboardPage() {

    const [page, setPage] = useState("dashboard");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelect = (product) => {

        setSelectedProduct(product);
        setPage("details");
    };

    const renderPage = () => {

        switch (page) {
            case "dashboard":
                return <Dashboard />;

            case "products":
                return (
                    <Products
                        onProductSelect={handleProductSelect}
                    />
                );

            case "details":
                return (
                    <ProductDetails
                        product={selectedProduct}
                        onBack={() => setPage("products")}
                    />
                );

            case "reports":
                return <Reports />;

            case "settings":
                return <Settings />;

            default:
                return <Dashboard />;
        }
    };

    return (
        <div>
            <Navbar onNavigate={setPage} currentPage={page} />

            <main style={styles.main}>
                <Suspense fallback={<h2> Loading...</h2>}>
                    {renderPage()}
                </Suspense>
            </main>
        </div>
    )
}

// function Loading() {
//   return (
//     <div style={styles.loading}>
//       <h2>Loading...</h2>
//       <p>Please wait...</p>
//     </div>
//   );
// }

const styles = {
  main: {
    padding: "30px",
    maxWidth: "1200px",
    margin: "auto",
  },

  loading: {
    textAlign: "center",
    padding: "100px",
  },
};


export default DashboardPage