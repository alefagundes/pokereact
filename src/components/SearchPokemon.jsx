import style from './SearchPokemon.module.scss'
import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'
import { AiFillStepBackward } from 'react-icons/ai'
import Message from './Message'

const SearchPokemon = ({ searchPokemon, setName, handleState, msg, type }) => {
  const [pokemon, setPokemon] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setName(pokemon)
    searchPokemon(pokemon)
  }

  return (
    <>
      {msg.length > 0 && <Message msg={msg} type={type} />}
      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.formulario}>
          <input
            type="text"
            placeholder="Busque por um Pokemon..."
            name="search"
            autoComplete="off"
            onChange={(e) => setPokemon(e.target.value)}
          />
          <button type="submit" className={style.button}>
            <BiSearch />
          </button>
        </form>
        <button onClick={handleState} className={style.button}>
          <AiFillStepBackward />
        </button>
      </div>
    </>
  )
}

export default SearchPokemon
