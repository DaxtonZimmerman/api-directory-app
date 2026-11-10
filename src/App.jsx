import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  return (
    <main>
      <h1>User Directory</h1>

      {loading && <p>Loading users…</p>}
      {error && <p role="alert">Error: {error}</p>}
      {!loading && !error && <p>{users.length} users loaded</p>}
    </main>
  )
}

export default App