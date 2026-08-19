import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import FoodCard from "../Components/FoodCard";

function Restaurant() {
    
  const { id } = useParams();

  const restaurantId = Number(id);

  const restaurant = useSelector(
    (state) =>
      state.restaurants.data.find(
        (item) =>
          item.id === restaurantId
      )
  );

  const foods = useSelector(
    (state) =>
      state.foods.data.filter(
        (food) =>
          food.restaurantId === restaurantId
      )
  );

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>

      <p> {restaurant.rating} </p>

      <p> {restaurant.cuisine} </p>

      <p> Delivery: {restaurant.deliveryTime} </p>

      <hr />

      <h2>Menu</h2>

      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
        />
      ))}
    </div>
  );
}

export default Restaurant;