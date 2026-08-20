import { useSelector } from "react-redux";

import SearchBar from "../Components/SearchBar";
import Sidebar from "../Components/Sidebar";
import RestaurantCard from "../Components/RestaurantCard";

const EMPTY_ARRAY = [];

function Home() {
  const restaurants = useSelector(
    (state) => state.restaurants ?? EMPTY_ARRAY
  );

  const query = useSelector(
    (state) => state.search?.query ?? ""
  );

  const cuisine = useSelector(
    (state) => state.search?.cuisine ?? "All"
  );

  const maxPrice = useSelector(
    (state) => state.search?.maxPrice ?? 1000
  );

  const searchQuery = query.trim().toLowerCase();

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const restaurantName =
      restaurant.name?.toLowerCase() ?? "";

    const restaurantCuisine =
      restaurant.cuisine?.toLowerCase() ?? "";

    const matchesQuery =
      searchQuery === "" ||
      restaurantName.includes(searchQuery) ||
      restaurantCuisine.includes(searchQuery);

    const matchesCuisine =
      cuisine === "All" ||
      restaurantCuisine === cuisine.toLowerCase();

    const matchesPrice =
      Number(restaurant.priceForTwo) <= Number(maxPrice);

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
          <h2>Restaurants near you</h2>

          {filteredRestaurants.length > 0 ? (
            <div className="restaurant-grid">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))}
            </div>
          ) : (
            <p>No restaurants found.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;