import style from './Pokemon.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
      {!pokemon && <p>Carrregando...</p>}
      {poke && (
        <div className={style.card} key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <p>XP: {poke.base_experience}</p>
          <p>Peso: {poke.weight / 10} kg</p>
          <img src={poke.sprites.front_default} alt={pokemon.name} />
          <Link to={`pokemon/${poke.id}`}>Ver mais</Link>
        </div>
      )}
    </>
  )
}

export default Pokemon
