import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const hi = 'Hello World';

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    setInterval(()=>setTime(new Date().toLocaleTimeString()), 1000);
  });
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{hi}</div>
        <div>{time}</div>
      </header>
    </div>
  );
}

export default App;
