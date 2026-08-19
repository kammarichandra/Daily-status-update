import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="restaurant-card"
    >
      <img
        src={restaurant.image}
        alt={restaurant.name}
      />

      <h3>{restaurant.name}</h3>

      <p> {restaurant.rating}</p>

      <p>{restaurant.cuisine}</p>

      <p>{restaurant.deliveryTime}</p>

      <p>
        ₹{restaurant.priceForTwo} for two
      </p>
    </Link>
  );
}

export default RestaurantCard;