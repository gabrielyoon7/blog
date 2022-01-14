/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //ES6 desturcturing 문법
  let [글제목,글제목변경] = useState('남자 코트 추천');
  let [글제목2,글제목변경2] = useState(['남자 코트 추천','여자 코트 추천','바지 추천']);
  // 이렇게 state로 해야 html이 재렌더링이 된다

  let [따봉, 따봉변경] = useState(0);

  let posts = '강남 고기 맛집';
  function 함수(){
    return 100;
  }

  function 제목바꾸기(){
    let newArray = [...글제목];
    newArray = '여자코트 추천';
    글제목변경(newArray);
  }

  function 제목여러개바꾸기(){
    글제목변경2(['곱창 맛집','아구찜 맛집','강남 우동 맛집']);
  }

  function 제목여러개중하나바꾸기(){
    let newArray = [...글제목2];
    newArray[0] = '바뀜~~';
    글제목변경(newArray);
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼1</button>
      <button onClick={ 제목여러개바꾸기 }>버튼2</button>
      <button onClick={ 제목여러개중하나바꾸기 }>버튼3</button>
      <img src={logo}/>
      <h4 style={{color:'blue', fontStyle:'italic'}}> {posts}</h4>
      <h4> {함수()}</h4>
      <div className='list'>
        <h3> { 글제목 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목2[0] } <span onClick={ 함수() }>♥</span> 0 </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목2[1] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>♥</span> {따봉}  </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목2[2] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>♥</span> 0  </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <Modal title="hihi"></Modal>
      <Modal title="wowow"></Modal>
    </div>
  );
}

function Modal(props){
  //Component의 이름은 항상 대문자로 시작해야한다.
  //return 속 태그는 반드시 하나로 묶어야함 (연속되게 등장 못함)
  //의미없는 div 같은걸로 묶기 싫으면 <> </>와 같이 fragment로 묶어도 ㄱㅊ
  return(
    <div className='modal'>
      <h2>{props.title}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
