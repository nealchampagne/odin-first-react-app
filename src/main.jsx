import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Example from './Example.jsx'
import Greeting from './Greeting.jsx'
import { Biscuits } from './Biscuits.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Example />
  </StrictMode>,
);
