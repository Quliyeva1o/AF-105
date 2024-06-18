import {  useMemo, useState } from "react";

const Memo = () => {
  const [num, setNum] = useState(0);
  const[theme, setTheme] = useState('light');


  const themeStyle = useMemo(()=>{
    return {
        backgroundColor: theme=='dark' ? 'black' : 'white',
        color: theme=='dark' ? 'white' : 'black'
      }
  },[theme]);

  const doubledNumber = useMemo(()=>{
    return slowFun(num)
  },[num]);

  return (
    <>
      <input onChange={(e)=>setNum(e.target.value)} type="number" placeholder="enter number" />
      <br />
      <hr />
      <button onClick={()=>setTheme((theme)=>{
        return theme == 'light' ? 'dark' : 'light';
      })}>change theme</button>
      <hr />
      <span style={themeStyle}>
        <b>double num: </b> {doubledNumber}
      </span>
    </>
  );
};

function slowFun(num){
    for (let i = 0; i < 50_000; i++) {
        console.log('test 20 million times');
    }
    return num*2;
}

export default Memo;
