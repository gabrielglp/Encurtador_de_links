import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://youtube.com">
        <BsYoutube color="#fff" size={22} />
      </a>
      <a className="social" href="https://www.instagram.com/_biiel.martins_/">
        <BsInstagram color="#fff" size={22} />
      </a>
      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  )
}
