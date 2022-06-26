import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './component/Card';

function App() {
  const hi = 'Hello World';

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    setInterval(()=>setTime(new Date().toLocaleTimeString()), 1000);
  });

  const ArrowFunctionCard = (props) => {
    return(
      <div style={{backgroundColor:"white", color:"black", width:"300px", borderRadius:5, margin:5}}>
        this is {props.name}
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{hi}</div>
        <div>{time}</div>
        <ArrowFunctionCard name="화살표 함수"/>
        <Card name="바깥에 있는 화살표 함수"/>
        <Card name="카드드"/>
        <Card name="가브리엘"/>
      </header>
    </div>
  );
}

export default App;
