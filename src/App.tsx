import React, { useState } from 'react'
import './App.css'
import { Button } from 'primereact/button';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { ProgressBar } from 'primereact/progressbar';

function App() {

  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'profile':
        return <UserProfile />;
      case 'destinations':
        return <Destinations />; 
      default:
        return <h1>Página no encontrada</h1>;
    }
  };

  return (
    <>
      <Header setActivePage={setActivePage} /> {/* Pasa la función setActivePage al Header */}
      
      <div style={{ padding: '20px' }}>      
        <Button label="Acción" icon="pi pi-check" onClick={() => alert('Botón presionado!')} />
      </div>
      
      <div className="dashboard">
        <div className="main-content">
            {renderContent()} 
        </div>
      </div>
    </>
  );
}

const Home: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <>
      <h1>Bienvenido a la página de inicio</h1>
      <div className="header-content">

      <div className="slider-container">
          <h3>Selecciona tu interés</h3>
          <Slider
              value={sliderValue}
              onChange={(e) => setSliderValue(e.value)}
              min={0}
              max={100}
              step={1}
              style={{ width: "100%" }}
          />
          <div className="slider-value">Valor del Slider: {sliderValue}%</div>
              <ProgressBar value={sliderValue} showValue={false} style={{ marginTop: "20px" }} />
          </div>
    </div>
    </>
  );
};

const Destinations: React.FC = () => {
  return (
    <div className="search-container">
      <InputText placeholder="Busca tu destino..." style={{ width: "400px" }} />
      <Button label="Buscar" icon="pi pi-search" className="search-button" />
    </div>
  );
};

export default App;
