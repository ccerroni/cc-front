import { User } from "../../../models/RandomUserApiData"
import './UserList.style.css'

interface UserListProps {
  users: User[],
  colored: boolean,
  onRemoveUser: (username: string) => void
}

export const UserList: React.FC<UserListProps> = ({ users, colored, onRemoveUser }) => {
  return (
    <table width="100%" className={colored ? 'painted' : ''}>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user: User) => (
          <tr key={user.login.uuid}>
            <td>
              <img src={user.picture.thumbnail} alt="user-photo" />
            </td>
            <td>
              {user.name.first}
            </td>
            <td>
              {user.name.last}
            </td>
            <td>
              {user.location.country}
            </td>
            <td>
              <button onClick={() => onRemoveUser(user.login.username)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}