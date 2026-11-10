export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <label>
      Search by name
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="e.g. Leanne"
      />
    </label>
  )
}