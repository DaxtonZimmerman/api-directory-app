import { useEffect, useState } from 'react'
import './App.css'
import UserList from './UserList.jsx'
import SearchBar from './SearchBar.jsx'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch users (HTTP ${response.status})`)
        }

        const data = await response.json()
        setUsers(data)
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadUsers()

    return () => controller.abort()
  }, [])

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(normalizedSearch),
  )

  return (
    <main>
      <h1>User Directory</h1>

      {loading && <p>Loading users…</p>}
      {error && <p role="alert">Error: {error}</p>}
      {!loading && !error && (
        <>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          {filteredUsers.length > 0 ? (
            <UserList users={filteredUsers} />
          ) : (
            <p>No users found.</p>
          )}
        </>
      )}
    </main>
  )
}

export default App
