import { useMemo, useState } from "react";

function FilteringLargeList() {
  let [search, setSearch] = useState("");
  let [theme, setTheme] = useState(true);

  let users = [
    "chandra",
    "Shekar",
    "kcs",
    "Ramesh",
    "Suresh",
    "Akhil",
    "Rahul"
  ];

  let filteredUsers = useMemo(() => {

    console.log("Filtering users...");

    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    
    <div>

      <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />

      <button onClick={() => setTheme(!theme)}> Toggle Theme </button>

      <ul>

        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}

      </ul>
    </div>
  );
}

export default FilteringLargeList;