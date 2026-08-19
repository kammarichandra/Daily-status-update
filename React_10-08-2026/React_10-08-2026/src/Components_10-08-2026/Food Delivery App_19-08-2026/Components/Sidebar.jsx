import { useDispatch, useSelector } from "react-redux";

import { setCuisine, setMaxPrice, clearFilters } from "../Features/searchSlice";

function Sidebar() {

  const dispatch = useDispatch();

  const { cuisine, maxPrice} = useSelector(
    (state) => state.search
  );

  return (
    <aside>
      <h3>Filters</h3>

      <label>Cuisine</label>

      <select
        value={cuisine}
        onChange={(e) =>
          dispatch(
            setCuisine(e.target.value)
          )
        }
      >
        <option value="All">All</option>
        <option value="Biryani">Biryani</option>
        <option value="Pizza">Pizza</option>
        <option value="Burger">Burger</option>
        <option value="South Indian">
          South Indian
        </option>
      </select>

      <br />

      <label>
        Maximum Price: ₹{maxPrice}
      </label>

      <input type="range" min="100" max="1000" step="50" value={maxPrice} onChange={(e) =>
          dispatch( setMaxPrice(Number(e.target.value)))
        }
      />

      <br />

      <button onClick={() =>
          dispatch(clearFilters())
        }
      >
        Clear Filters
      </button>
    </aside>
  );
}

export default Sidebar;