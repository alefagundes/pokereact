import style from './Home.module.scss'

import axios from 'axios'
import { useState, useEffect } from 'react'
import Pokemon from '../components/Pokemon'
import Pagenation from '../components/Pagenation'

const Home = ({ url }) => {
  const [list, setList] = useState([])
  const [qtn, setQtn] = useState(20)

  const getPagePokemons = (url) => {
    axios
      .get(url)
      .then((response) => setList(response.data.results))
      .catch((err) => console.log(err))

    //logical to get a pokemon by id in page pokemon details
    list.map((e, index) => {
      e.id = index + 1
    })
  }

  useEffect(() => {
    getPagePokemons(`${url}?limit=${qtn}`)
  }, [qtn])

  return (
    <>
      <h1 className={style.title}>
        <span>Poké</span>dex <img src="/pokeball.png" alt="pokeball" />
      </h1>
      <div className={style.container} key={1}>
        {!list && <p>Carregando...</p>}
        {list && list.map((e, index) => <Pokemon key={index} pokemon={e} />)}
      </div>
      <Pagenation setQtn={setQtn} qtn={qtn} />
    </>
  )
}

export default Home
