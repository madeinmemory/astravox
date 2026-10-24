import { useState } from "react";
import type { SpaceObject } from "../types/SpaceObjects";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import CategorySection from "../components/CategorySection";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedObject, setSelectedObject] = useState<SpaceObject | null>(
    null,
  );

  function handleSearch(searchValue: string) {
    setSearchTerm(searchValue);
  }
  return (
    <>
      <Header />

      <main>
        <Hero />
        <h2>Explore the Universe</h2>
        <p>Search and Discover objects across the cosmos.</p>
        <SearchBar onSearch={handleSearch} />
        <FeaturedSection
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />
        <CategorySection
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </main>
    </>
  );
}

export default Home;
