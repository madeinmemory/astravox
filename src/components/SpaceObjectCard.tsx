type SpaceObjectCardProps = {
  name: string;
  category: string;
  description: string;
  distance: string;
  constellation: string;
  imageUrl: string;
  onSelect: () => void;
};

function SpaceObjectCard({
  name,
  category,
  description,
  distance,
  constellation,
  imageUrl,
  onSelect,
}: SpaceObjectCardProps) {
  return (
    <article className="space-card" onClick={onSelect}>
      <img className="space-card-image" src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p className="space-card-category">{category}</p>
      <p>{description}</p>

      <div className="space-card-meta">
        <p>
          <strong>Distance:</strong> {distance}
        </p>
        <p>
          <strong>Constellation: </strong> {constellation}
        </p>
      </div>
    </article>
  );
}

export default SpaceObjectCard;
