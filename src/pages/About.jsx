import style from './About.module.scss'
import { SiPokemon } from 'react-icons/si'

const About = () => {
  return (
    <div className={style.container}>
      <h1>
        Sobre o <span> Poké</span>React <SiPokemon />
      </h1>
      <p>
        Projeto desenvolvido com <span className={style.react}>React.JS</span>{' '}
        utilizando a <a href="https://pokeapi.co/">PokéAPI</a> e hospedado na
        Vercel com o objetivo de demostrar meus conhecimentos com essa excelente
        biblioteca!
      </p>
      <img src="/poke.png" alt="poke" />
    </div>
  )
}

export default About
