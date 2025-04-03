// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let pokemonList = [];
  for (let i = 1; i <= 151; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const { id, stats, types, name } = await response.json();
    pokemonList.push({ id, stats, name, types });
  }

  console.log(pokemonList);
  res.status(200).json(pokemonList);
}
