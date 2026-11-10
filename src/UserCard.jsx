export default function UserCard({ user }) {
  return (
    <article>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
    </article>
  )
}