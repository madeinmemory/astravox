import { useState } from "react";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(searchTerm.trim());
  }
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a planet, star, galaxy..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button type="submit">Search</button>
      {searchTerm !== "" && (
        <button
          type="button"
          onClick={() => {
            setSearchTerm("");
            onSearch("");
          }}
        >
          Clear
        </button>
      )}
    </form>
  );
}

export default SearchBar;
