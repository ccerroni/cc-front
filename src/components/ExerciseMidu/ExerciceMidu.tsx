import { useCallback, useState } from "react"
import { useFetchUsers } from "../../hooks/useFetchUsers"
import { UserList } from "./UserList/UserList"

export const ExerciseMidu: React.FC = () => {
  const { users, setUsers, originalUsers, isLoading, error } = useFetchUsers()

  const [colored, setColored] = useState<boolean>(false)
  const [isSortedCountry, setIsSortedCountry] = useState<boolean>(false)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  const handleFindUserByCountry = (country: string) => {
    setFilterCountry(country)
  }

  const filterUsers = useCallback(() => {
    const res = filterCountry && filterCountry.length ?
    users.filter((user) => user.location.country.toLowerCase().includes(filterCountry.toLowerCase()))
    : users
    return res
  }, [filterCountry, users])

  const filteredUser = filterUsers()

  const sortUsers = useCallback(() => {
    const res = isSortedCountry && filteredUser ?
    [...filteredUser].sort((a, b) => a.location.country.localeCompare(b.location.country))
    : filteredUser
    return res
  }, [filteredUser, isSortedCountry])

  const sortedUsers = sortUsers()

  const handleRemove = (username: string) => {
    const newUsers = sortedUsers.filter((user) => user.login.username !== username)
    setUsers(newUsers)
  }

  const handleColored = () => {
    setColored(!colored)
  }

  const handleSort = () => {
    setIsSortedCountry(prev => !prev)
  }

  const handleReset = () => {
    setUsers(originalUsers)
  }


  return (
    <>
      <h1>Exercise Midu</h1>
      <header>
        <button onClick={handleColored}>
          {colored ? 'Clear table colors' : 'Color table rows'}
        </button>

        <button onClick={handleSort}>
          {isSortedCountry ? 'Clear sort by country' : 'Sort by Country'}
        </button>

        <button onClick={handleReset}>
          Reset users
        </button>
        <input type="text" placeholder="Find user by country" onChange={(e) => handleFindUserByCountry(e.target.value)} />
      </header>
      <main>
        {!isLoading && !error && (
          <UserList users={sortedUsers} onRemoveUser={handleRemove} colored={colored} />
        )}
      </main>
    </>
  )
}