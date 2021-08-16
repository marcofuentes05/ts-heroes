export interface Hero {
  id: number,
  name: string,
  slug: string,
  powerstats: {
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number
  }
}