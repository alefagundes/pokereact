import style from './Home.module.scss'

import axios from 'axios'
import { useState, useEffect } from 'react'
import Pokemon from '../components/Pokemon'

const url = import.meta.env.VITE_URL
const maxPokemons = 250
const Home = () => {
  const [list, setList] = useState([])

  const getPagePokemons = (url) => {
    axios
      .get(url)
      .then((response) => setList(response.data.results))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getPagePokemons(`${url}?limit=${maxPokemons}`)
  }, [])

  return (
    <>
      <h1 className={style.title}>
        <span>Poké</span>dex <img src="/pokeball.png" alt="pokeball" />
      </h1>
      <div className={style.container}>
        {!list && <p>Carregando...</p>}
        {list && list.map((e) => <Pokemon key={e.name} pokemon={e} />)}
      </div>
    </>
  )
}

export default Home
