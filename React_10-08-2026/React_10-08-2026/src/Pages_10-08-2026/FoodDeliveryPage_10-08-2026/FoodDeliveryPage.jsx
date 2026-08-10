import { useState } from "react";
import Header from "../../Components_10-08-2026/Food Delivery Application_10-08-2026/Header";
import FoodList from './../../Components_10-08-2026/Food Delivery Application_10-08-2026/FoodList';
import Cart from './../../Components_10-08-2026/Food Delivery Application_10-08-2026/Cart';
import OrderSuccess from './../../Components_10-08-2026/Food Delivery Application_10-08-2026/OrderSuccess';

function FoodDeliveryPage() {
  let [cart, setCart] = useState([]);
  let [orderPlaced, setOrderPlaced] = useState(false);

  let  foods = [
    {
      id: 1,
      name: "Chicken Burger",
      price: 150,
      category: "Burger",
      emoji: "🍔",
    },
    {
      id: 2,
      name: "Veg Pizza",
      price: 250,
      category: "Pizza",
      emoji: "🍕",
    },
    {
      id: 3,
      name: "French Fries",
      price: 100,
      category: "Snacks",
      emoji: "🍟",
    },
    {
      id: 4,
      name: "Cold Coffee",
      price: 120,
      category: "Drinks",
      emoji: "🥤",
    },
   
  ];

  let addToCart = (food) => {
    let existingItem = cart.find(
      (item) => item.id === food.id
    );

    if (existingItem) {
      setCart(
        cart.map((item) => item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } 
    else {
      setCart([
        ...cart,
        {
          ...food,
          quantity: 1,
        },
      ]);
    }
  };

  let increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  let decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  let placeOrder = () => {
    if (cart.length > 0) {
      setOrderPlaced(true);
      setCart([]);
    }
  };

  return (

    <div>
      <Header cartCount={cart.length} />

      <main className="container">
        {orderPlaced ? (

          <OrderSuccess onNewOrder={() => setOrderPlaced(false)}/>

        ) : (
          <>

            <FoodList foods={foods} onAddToCart={addToCart} />

            <Cart cart={cart} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onPlaceOrder={placeOrder}/>

          </>
        )}
      </main>
    </div>
  );
}

export default FoodDeliveryPage;