import { useAuth } from "../Context/AuthContext";


export default function Header() {
  const { user } = useAuth();

  return (
    <header className="header">
      <div>
        <h2>TeamSync</h2>
        <p>Employee Management System</p>
      </div>

      <div className="user-info">
        <div className="avatar">
          {user.name.charAt(0)}
        </div>
        <div>
          <strong>{user.name}</strong>
          <p>{user.role}</p>
        </div>
      </div>
    </header>
  );
}