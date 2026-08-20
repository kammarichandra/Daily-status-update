import { useDispatch, useSelector } from "react-redux";

import { setQuery } from "../Features/searchSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const query = useSelector(
    (state) => state.search?.query || ""
  );

  return (
    <input
      type="text"
      placeholder="Search for food or restaurants..."
      value={query}
      onChange={(e) => dispatch(setQuery(e.target.value))}
    />
  );
}

export default SearchBar;