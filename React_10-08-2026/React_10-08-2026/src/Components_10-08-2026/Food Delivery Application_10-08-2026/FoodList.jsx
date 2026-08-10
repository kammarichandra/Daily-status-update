import FoodCard from "./FoodCard";

function FoodList({ foods, onAddToCart }) {
  return (
    <section>
      <h2>Popular Food</h2>

      <div className="food-list">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default FoodList;