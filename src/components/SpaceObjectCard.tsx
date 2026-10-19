type SpaceObjectCardProps = {
  name: string;
  category: string;
  description: string;
  distance: string;
  constellation: string;
  imageUrl: string;
};

function SpaceObjectCard({
  name,
  category,
  description,
  distance,
  constellation,
  imageUrl,
}: SpaceObjectCardProps) {
  return (
    <article className="space-card">
      <img className="space-card-image" src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{description}</p>

      <p>
        <strong>Distance:</strong> {distance}
      </p>
      <p>
        <strong>Constellation: </strong> {constellation}
      </p>
    </article>
  );
}

export default SpaceObjectCard;
