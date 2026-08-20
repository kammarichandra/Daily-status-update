function Navbar({ onNavigate, currentPage }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "products", label: "Products" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>ShopAdmin</h2>

      <div style={styles.menu}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              ...styles.button,
              ...(currentPage === item.id
                ? styles.activeButton
                : {}),
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#111827",
    color: "white",
  },

  logo: {
    margin: 0,
  },

  menu: {
    display: "flex",
    gap: "10px",
  },

  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#374151",
    color: "white",
  },

  activeButton: {
    background: "#2563eb",
  },
};

export default Navbar;