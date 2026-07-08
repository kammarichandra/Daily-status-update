function RenderingVariables() {
  let name = "chandra";
  let age = 23;
  let user = {
    email: "chandra@gmail.com",
    role: "ase",
  };
  let skills = ["HTML", "CSS", "JavaScript"];
  let users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 28 },
    { id: 3, name: "Charlie", age: 30 },
  ];

  function hai(username) {
    return `welcome, ${username}!`;
  }

  return (
    <div>
      <h1>JSX Dynamic Data Rendering</h1>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <h3>{hai(name)}</h3>
      <p>Age Next Year: {age + 1}</p>

      <h2>User Details</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <h2>Status</h2>
      <p>{age >= 18 ? "Adult User" : "Minor User"}</p>

      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h2>Users</h2>
      {users.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <p>Age: {person.age}</p>
        </div>
      ))}
    </div>
  );
}

export default RenderingVariables;