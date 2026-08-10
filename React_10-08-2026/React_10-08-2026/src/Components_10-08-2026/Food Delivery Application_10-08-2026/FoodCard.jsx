function FoodCard({ food, onAddToCart }) {

  return (
    
    <div className="food-card">

      <div className="food-image">
        {food.emoji}
      </div>

      <h3>{food.name}</h3>

      <p className="category"> {food.category} </p>

      <p className="price"> <i class="fa-solid fa-indian-rupee-sign"></i>{food.price} </p>

      <button onClick={() => onAddToCart(food)}> Add to Cart </button>

    </div>
  );
}

export default FoodCard;