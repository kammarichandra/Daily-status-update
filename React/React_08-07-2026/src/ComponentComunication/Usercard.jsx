function UserCard({ name, role }) {

  return (
    <div>

      <h3>{name}</h3>

      <p>
        Role: {role}
      </p>

    </div>
  );
}

export default UserCard;