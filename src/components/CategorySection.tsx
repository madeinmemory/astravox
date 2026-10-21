type CategorySectionProps = {
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
};

function CategorySection({
  onCategorySelect,
  selectedCategory,
}: CategorySectionProps) {
  return (
    <section>
      <h2>Explore by Category</h2>

      <div>
        <button
          onClick={() => onCategorySelect("")}
          className={selectedCategory === "" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => onCategorySelect("Planet")}
          className={selectedCategory === "Planet" ? "active" : ""}
        >
          Planets
        </button>
        <button
          onClick={() => onCategorySelect("Star")}
          className={selectedCategory === "Star" ? "active" : ""}
        >
          Stars
        </button>
        <button
          onClick={() => onCategorySelect("Galaxy")}
          className={selectedCategory === "Galaxy" ? "active" : ""}
        >
          Galaxies
        </button>
        <button
          onClick={() => onCategorySelect("Nebula")}
          className={selectedCategory === "Nebula" ? "active" : ""}
        >
          Nebulae
        </button>
      </div>
    </section>
  );
}

export default CategorySection;
