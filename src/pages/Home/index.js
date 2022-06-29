import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'

import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'

export default function Home() {
  const [Link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  async function shortLink() {
    try {
      const response = await api.post('/shorten', { long_url: Link })
      setData(response.data)
      setShowModal(true)
      saveLink('@encurtaLinkTurbo', response.data)
      setLink('')
    } catch {
      alert('Ops parece que algo deu errado!')
      setLink('') /*limpar - zerando o campo */
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="logo"></img>
        <h1>Encurta Links Turbo</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder="Cole seu link aqui..."
            value={Link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={shortLink}>Encurtar Link</button>
      </div>

      <Menu />

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  )
}
