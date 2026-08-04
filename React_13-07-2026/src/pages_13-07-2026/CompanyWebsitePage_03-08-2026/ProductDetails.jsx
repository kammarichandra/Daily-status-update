import { useParams } from "react-router-dom";

function ProductDetails() {

  let { id } = useParams();

  let products = {

    101: {
      name: "CRM Software",
      price: "₹50,000",
      description: "Customer Relationship Management System"
    },

    102: {
      name: "HR Management",
      price: "₹35,000",
      description: "Employee & Payroll Management"
    },

    103: {
      name: "Inventory System",
      price: "₹45,000",
      description: "Stock & Warehouse Management"
    },

    104: {
      name: "ERP Solution",
      price: "₹1,20,000",
      description: "Complete Business Management"
    }

  };

  const product = products[id];

  return (

    <div>

      <h1>{product.name}</h1>

      <h3>{product.price}</h3>

      <p>{product.description}</p>

    </div>

  );

}

export default ProductDetails;