import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ConversorTest from './test/conversorTest.jsx'
import TestStore from './test/testStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <TestStore /> */}
    {/* <ConversorTest /> */}
  </StrictMode>,
)