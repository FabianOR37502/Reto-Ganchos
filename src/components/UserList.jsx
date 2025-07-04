import { useUsers } from '../useUsers';
import './UserList.css';

const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <div className="loading">Cargando usuarios...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="user-list-container">
      <h1>Lista de Usuarios</h1>
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>{user.company.catchPhrase}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;