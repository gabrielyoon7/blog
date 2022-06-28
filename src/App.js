import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import WelcomeCard from './component/WelcomeCard';

function App() {

  const [name, setName] = useState('Unkown');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello World</div>
        <WelcomeCard name={name} setName={setName}/>
      </header>
    </div>
  );
}

export default App;
