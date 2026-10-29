import type { SpaceObject } from "../types/SpaceObjects";

type SpaceObjectDetailProps = {
  spaceObject: SpaceObject;
};

function SpaceObjectDetails({ spaceObject }: SpaceObjectDetailProps) {
  return (
    <div className="space-object-details">
      <h2>{spaceObject.name}</h2>
      <p>{spaceObject.category}</p>
      <p>{spaceObject.description}</p>
    </div>
  );
}

export default SpaceObjectDetails;
