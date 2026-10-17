import { useState } from "react";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    onSearch(searchTerm);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a planet, star, galaxy..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
