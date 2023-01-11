import style from './Navbar.module.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to={'/'} className={style.logoNav}>
        <span>Poké</span>React <img src="/pikachu.png" alt="pikachu" />
      </Link>
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </ul>
    </nav>
  )
}

export default Navbar
