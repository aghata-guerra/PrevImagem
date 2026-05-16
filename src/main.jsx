import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './Footer.jsx'
import Rodape from './Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rodape />
  </StrictMode>,
)
