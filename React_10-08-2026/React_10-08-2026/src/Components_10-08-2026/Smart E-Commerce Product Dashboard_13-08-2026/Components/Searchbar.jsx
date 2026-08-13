import React from "react";

const Searchbar = React.memo(function SearchBar({
  search,
  onSearchChange,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
      />
    </div>
  );
});

export default Searchbar;