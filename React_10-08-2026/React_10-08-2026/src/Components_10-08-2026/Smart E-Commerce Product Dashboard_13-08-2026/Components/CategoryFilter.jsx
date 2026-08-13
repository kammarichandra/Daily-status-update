import React from "react";

let CategoryFilter = React.memo(function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  sort,
  onSortChange,
}) {
  return (
    <div className="filters">
      <select
        value={selectedCategory}
        onChange={(event) =>
          onCategoryChange(event.target.value)
        }
      >
        <option value="All">All Categories</option>

        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(event) =>
          onSortChange(event.target.value)
        }
      >
        <option value="default">
          Sort By
        </option>

        <option value="low">
          Price: Low to High
        </option>

        <option value="high">
          Price: High to Low
        </option>
      </select>
    </div>
  );
});

export default CategoryFilter;