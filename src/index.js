import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Clock2 from './Clock';
import reportWebVitals from './reportWebVitals';

function Clock(props) {
  return (
    <div>
      아래 function 호출이 왜 조금 늦는지는 파악해봐야 할 듯 (아마 setInterval이 조금 늦어저 그럴수도)
      <h1>Hello, world! By Function</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('timer-function')
  );
}
setInterval(tick, 1000);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
