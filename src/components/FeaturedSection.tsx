import SpaceObjectCard from "./SpaceObjectCard";
import { featuredObjects } from "../data/featuredObjects";

type FeaturedSectionProps = {
  searchTerm: string;
  selectedCategory: string;
};

function FeaturedSection({
  searchTerm,
  selectedCategory,
}: FeaturedSectionProps) {
  const filteredObjects = featuredObjects.filter((spaceObject) => {
    const matchesSearch = spaceObject.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || spaceObject.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <section>
      <h2>Featured Object</h2>
      <div>
        {filteredObjects.length === 0 ? (
          <p>No space objects found.</p>
        ) : (
          filteredObjects.map((spaceObject) => {
            return (
              <SpaceObjectCard
                key={spaceObject.id}
                name={spaceObject.name}
                category={spaceObject.category}
                description={spaceObject.description}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default FeaturedSection;
