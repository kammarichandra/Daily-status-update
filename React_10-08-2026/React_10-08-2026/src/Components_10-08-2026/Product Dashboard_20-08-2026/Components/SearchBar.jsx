import React from 'react'

function SearchBar({ search, onSearch }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                style={styles.input}
            />
        </div>
    )
}

const styles = {
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
};

export default SearchBar