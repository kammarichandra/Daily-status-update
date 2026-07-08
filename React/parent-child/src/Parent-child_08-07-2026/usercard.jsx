function UserCard({ name, course }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Course: {course}</p>
    </div>
  );
}

export default UserCard;