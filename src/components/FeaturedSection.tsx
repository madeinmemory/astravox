import SpaceObjectCard from "./SpaceObjectCard";
import { featuredObjects } from "../data/featuredObjects";

type FeaturedSectionProps = {
  searchTerm: string;
};

function FeaturedSection({ searchTerm }: FeaturedSectionProps) {
  const filteredObjects = featuredObjects.filter((spaceObject) => {
    return spaceObject.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <section>
      <h2>Featured Object</h2>
      <div>
        {filteredObjects.map((spaceObject) => {
          return (
            <SpaceObjectCard
              key={spaceObject.id}
              name={spaceObject.name}
              category={spaceObject.category}
              description={spaceObject.description}
            />
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedSection;
