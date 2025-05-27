"use client";

import { Container, Image, Spinner, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import React from "react";
import type Pokemon from "../../model/pokemon";
import PokemonComponent from "./pokemon";
import PokeNavBar from "../../components/pokemNavBarComp";

export default function PokemonPage({
  params,
}: {
  params: Promise<{ pokemon_id: string }>;
}) {
  const { pokemon_id } = React.use(params);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isPokemonLoaded, setPokemonLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("/api/pokemon/" + pokemon_id);
      // Creating a Map out of the raw json
      const pokemons: Map<string, Pokemon> = new Map(
        Object.entries(await resp.json())
      );
      const currentPokemon = pokemons.get(pokemon_id);
      setPokemon(currentPokemon);
      console.log(currentPokemon);
      setPokemonLoaded(true);
    };

    fetchData()
      // Making sure to log errors on the console
      .catch((error) => {
        console.error(error);
      });
  }, [pokemon_id]);

  return (
    <>
      <PokeNavBar></PokeNavBar>
      {isPokemonLoaded ? (
        pokemon ? (
          <PokemonComponent pokemon={pokemon}></PokemonComponent>
        ) : (
          <Image
            className="img-fluid mx-auto d-block rounded"
            src="https://cdn.dribbble.com/users/2805817/screenshots/13206178/media/6bd36939f8a01d4480cb1e08147e20f3.png"
          />
        )
      ) : (
        <Container>
          <Row className="justify-content-md-center p-2">
            <Spinner className="p-2" animation="border" role="status" />
          </Row>
          <Row className="justify-content-md-center p-2">
            Loading Pokémon...
          </Row>
        </Container>
      )}
    </>
  );
}
