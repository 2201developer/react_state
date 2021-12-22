import { useState } from "react";

const arr = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
const len = arr.length;
const deg = 360/len;
const path = process.env.PUBLIC_URL;

/*
  useState hook을 이용하면 state로 자주 변경되는 값을 관리 가능
  hook은 무조건 컴포넌트 함수 안쪽에서 실행
  state값이 변경되면 해당 state값의 영향을 받는 모든 JSX가상DOM이 자동으로 재 랜더딩됨
  
  사용법
  useState()함수 호출시 인수로 관리할 데이터값을 넣어서 실행하면 리턴값으로 배열을 반환
  첫번째 배열값 - state로 관리되는 값
  두번째 배열값 - 해당 state를 변경할수 있는 함수
  state값은 무조건 state변경함수를 통해서만 변경가능 (재 랜더링 가능)
*/

function Panels(){

  let [names, setNames] = useState(arr);
  
  const changeState=()=>{
    //기존의 전개 연산자를 이용해서 새로운 배열로 복사
    let newArr = [...arr];
    //복사가된 새로운 배열의 첫번째 값을 변경
    newArr[0]  = 'Escape';
    //setNames라는 state변경 전용함수로 위에서 복사한 배열값으로 기존 state값을 바꿔치기
    setNames(newArr);
  }

  return (    
    <>
      <button onClick={changeState}>button</button>
      <section>
      {
        names.map((data,index)=>{
          let style = {transform: `rotate(${deg*index}deg) translateY(-100vh)`}
          let imgSrc = `${path}/img/${data}.jpg`;
      
          return (
            <article key={index} style={style}>
              <div className="inner">
                <div className="pic">
                  <img src={imgSrc}  />
                </div>
                <h2>{data}</h2>
              </div>
            </article>
          )
        })
      }
      </section>
    </>
  )
}

export default Panels;