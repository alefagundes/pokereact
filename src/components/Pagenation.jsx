import style from './Pagenation.module.scss'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Pagenation = ({ qtn, setQtn }) => {
  const handleDecrease = () => {
    if (qtn === 20) {
      return
    } else {
      setQtn((prev) => prev - 20)
    }
  }
  const handleAdd = () => {
    if (qtn === 1260) {
      setQtn(1279)
    } else {
      setQtn((prev) => prev + 20)
    }
  }
  return (
    <div className={style.pagenation}>
      <button onClick={handleDecrease}>
        <FaArrowCircleLeft />
      </button>
      <button onClick={handleAdd}>
        <FaArrowCircleRight />
      </button>
    </div>
  )
}

export default Pagenation
