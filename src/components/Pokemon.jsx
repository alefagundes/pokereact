import style from './Pokemon.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = ({ pokemon }) => {
  const [poke, setPoke] = useState(null)

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => setPoke(response.data))
      .catch((err) => console.log(err))
    console.log(poke)
  }, [])

  return (
    <>
      {!poke && <p>Carregando</p>}
      {poke && (
        <div className={style.card}>
          <h2>{pokemon.name}</h2>
          <p>XP: {poke.base_experience}</p>
          <p>Peso: {poke.weight}</p>
          <img src={poke.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </>
  )
}

export default Pokemon
