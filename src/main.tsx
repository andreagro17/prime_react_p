// import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Tema principal
// import "primereact/resources/themes/lara-light-cyan/theme.css
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Tema Claro
import 'primereact/resources/themes/lara-dark-indigo/theme.css';  
import 'primereact/resources/themes/mira/theme.css'
import 'primereact/resources/primereact.min.css';               // Estilos de componentes
import 'primeicons/primeicons.css';                             // Íconos
import 'primeflex/primeflex.css'; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import './assets/styles/styles.scss'
import './App.scss';

import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
