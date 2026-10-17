type SpaceObjectCardProps = {
  name: string;
  category: string;
  description: string;
};

function SpaceObjectCard({
  name,
  category,
  description,
}: SpaceObjectCardProps) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{description}</p>
    </article>
  );
}

export default SpaceObjectCard;
