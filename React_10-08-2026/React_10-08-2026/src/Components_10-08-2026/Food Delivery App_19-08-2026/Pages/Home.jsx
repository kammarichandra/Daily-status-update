import { useSelector } from "react-redux";

import SearchBar from "../Components/SearchBar";
import Sidebar from "../Components/Sidebar";
import RestaurantCard from "../Components/RestaurantCard";

function Home() {
  const restaurants = useSelector(
    (state) => state.restaurants.data
  );

  const {
    query,
    cuisine,
    maxPrice
  } = useSelector(
    (state) => state.search
  );

  const filteredRestaurants =
    restaurants.filter((restaurant) => {
      const matchesQuery =
        restaurant.name
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        restaurant.cuisine
          .toLowerCase()
          .includes(query.toLowerCase());

      const matchesCuisine = restaurant.cuisine === cuisine;

      const matchesPrice = restaurant.priceForTwo <= maxPrice;

      return (
        matchesQuery &&
        matchesCuisine &&
        matchesPrice
      );
    });

  return (
    <div>
      <h1>What are you craving? 🍔</h1>

      <SearchBar />

      <div className="home-layout">
        <Sidebar />

        <main>
          <h2>
            Restaurants near you
          </h2>

          <div className="restaurant-grid">
            {filteredRestaurants.map(
              (restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;