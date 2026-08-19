import { useCart } from "../Context/CartContext";
import { useNotification } from "../Context/NotificationContext";

function FoodCard({ food }) {

  const { addToCart } = useCart();

  const { showNotification } = useNotification();

  const handleAddToCart = () => {
     addToCart(food);

    showNotification(
      `${food.name} added to cart`
    );
  };

  return (
    <div className="food-card">
      <img
        src={food.image}
        alt={food.name}
      />

      <div>
        
        <h3>
          {food.isVeg && "🟢 "}
          {food.name}
        </h3>

        <p>{food.description}</p>

        <strong>₹{food.price}</strong>

        <br />

        <button onClick={handleAddToCart}> Add to Cart </button>

      </div>
    </div>
  );
}

export default FoodCard;