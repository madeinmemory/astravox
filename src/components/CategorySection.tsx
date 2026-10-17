type CategorySectionProps = {
  onCategorySelect: (category: string) => void;
};

function CategorySetion({ onCategorySelect }: CategorySectionProps) {
  return (
    <section>
      <h2>Explore by Category</h2>

      <div>
        <button onClick={() => onCategorySelect("")}>All</button>
        <button onClick={() => onCategorySelect("Planet")}>Planets</button>
        <button onClick={() => onCategorySelect("Star")}>Stars</button>
        <button onClick={() => onCategorySelect("Galaxy")}>Galaxies</button>
        <button onClick={() => onCategorySelect("Nebula")}>Nebulae</button>
      </div>
    </section>
  );
}

export default CategorySetion;
