import type { SpaceObject } from "../types/SpaceObjects";

export const featuredObjects: SpaceObject[] = [
  {
    id: "andromeda",
    name: "Andromeda Galaxy",
    category: "Galaxy",
    description: "One of the closest major galaxies to the Milky Way.",
    distance: "2.5 million light-years",
    constellation: "Andromeda",
  },
  {
    id: "saturn",
    name: "Saturn",
    category: "Planet",
    description: "A gas giant famous for its extensive ring system",
    distance: "1.4 billion km from the sun",
    constellation: "N/A",
  },
  {
    id: "orion-nebula",
    name: "Orion Nebula",
    category: "Nebula",
    description: "A massive stellas nursery located in the constellation Orion",
    distance: "1,344 light-years",
    constellation: "Orion",
  },
];
