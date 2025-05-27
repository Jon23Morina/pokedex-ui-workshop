export default interface PokemonCard {
  pokemonNumber: number;
  attack: number;
  defense: number;
  devolution: string;
  evolution: string;
  evolutionFamily: string[];
  healthPoints: number;
  mainImage: string;
  pokemonName: string;
  pokemonType: string[];
  speed: number;
}

// {
//    "pokemonNumber": 7,
//    "attack": 48,
//    "defense": 65,
//    "devolution": "",
//    "evolution": "Wartortle",
//    "evolutionFamily": [
//        "Squirtle",
//        "Wartortle",
//        "Blastoise"
//    ],
//    "healthPoints": 44,
//    "mainImage": "https://pokemon-aub-awe-workshop.s3.eu-west-2.amazonaws.com/7/mainImage.png",
//    "pokemonName": "Squirtle",
//    "pokemonType": [
//        "Water"
//    ],
//    "speed": 43
// }
