import style from './PokemonDetails.module.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokemonDetails = ({ url }) => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [nspecies, setNspecies] = useState({})
  const [nsprites, setNsprites] = useState({})
  const [ntypes, setNtypes] = useState([])

  useEffect(() => {
    axios
      .get(`${url}${id}`)
      .then((response) => {
        const { species } = response.data
        const { sprites } = response.data
        const { types } = response.data
        setNspecies(species)
        setNsprites(sprites)
        setNtypes(types)
        setPokemon(response.data)
      })
      .catch((err) => console.log(err))
    console.log(pokemon)
    console.log(nspecies)
    console.log(nsprites)
    console.log(ntypes)
  }, [])

  return (
    <>
      {!pokemon && <p>Carregando...</p>}
      <div key={nspecies.name} className={style.container}>
        <h1>{nspecies.name}</h1>
        <img
          src={nsprites && nsprites.front_default}
          alt={nspecies && nspecies.name}
        />

        <div className={style.types}>
          <h2>Tipo:</h2>
          {ntypes &&
            ntypes.map((e, index) => (
              <span
                key={index}
                className={`${style.type} ${style['type_' + e.type.name]}`}
              >
                {e.type.name}
              </span>
            ))}
        </div>
        <div className={style.wh}>
          <div className={style.divisor}>
            <b>Peso:</b>
            <p>{pokemon.weight / 10} kg</p>
          </div>
          <div>
            <b>Altura:</b>
            <p>{pokemon.height * 10} cm</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonDetails
