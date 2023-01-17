import style from './Home.module.scss'

import axios from 'axios'
import { useState, useEffect } from 'react'
import Pokemon from '../components/Pokemon'
import Pagenation from '../components/Pagenation'
import SearchPokemon from '../components/SearchPokemon'

const Home = ({ url }) => {
  const [list, setList] = useState([])
  const [qtn, setQtn] = useState(20)
  //state to show the correct list
  const [render, setRender] = useState(1)
  //list o pokemon search by name
  const [search, setSearch] = useState([])
  const [allPoke, setAllPoke] = useState([])
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')

  //name pokemons
  const [name, setName] = useState('')

  //get All pokemons to filter
  const getAllPokemons = () => {
    axios
      .get(`${url}?limit=1279`)
      .then((response) => setAllPoke(response.data.results))
      .catch((err) => console.log(err))
  }

  const getPagePokemons = (url) => {
    axios
      .get(url)
      .then((response) => setList(response.data.results))
      .catch((err) => console.log(err))

    //logical to get a pokemon by id in page pokemon details
    list.map((e, index) => {
      e.id = index + 1
    })
    setRender(1)
  }
  //get Pokemon by name in api
  const getPokemon = (value) => {
    let arr = []
    console.log(value)
    if (allPoke) {
      arr = allPoke.filter((e) => {
        return e.name.includes(value.toLowerCase())
      })
      if (arr.length > 0) {
        setMessage(`Resultados para: ${value}`)
        setRender(2)
        setSearch(arr)
        setType('sucess')
        setTimeout(() => {
          setMessage('')
        }, 3000)
      } else {
        setMessage(`Nenhum resultados para: ${value}!`)
        setType('error')
        setTimeout(() => {
          setMessage('')
        }, 5000)
      }
    }
  }

  //back to state initial
  const handleState = () => {
    setRender(1)
  }

  useEffect(() => {
    getPagePokemons(`${url}?limit=${qtn}`)
    getAllPokemons()
  }, [qtn])

  return (
    <>
      <h1 className={style.title}>
        <span>Poké</span>dex <img src="/pokeball.png" alt="pokeball" />
      </h1>
      <SearchPokemon
        searchPokemon={getPokemon}
        setName={setName}
        handleState={handleState}
        msg={message}
        type={type}
      />
      <div className={style.container} key={1}>
        {!list && <p>Carregando...</p>}
        {render === 1 &&
          list.map((e, index) => <Pokemon key={index} pokemon={e} />)}
        {/*logical render pokemons Pokemons*/}
        {render === 2 &&
          search.map((e, index) => (
            <Pokemon key={index} pokemon={e} name={name} />
          ))}
      </div>
      <Pagenation setQtn={setQtn} qtn={qtn} />
    </>
  )
}

export default Home
