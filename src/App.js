


import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {


  // let[val,setval]=useState("HELLO");
  // let[val1,setval1]=useState(12);
  let[val,setval]=useState("");
  let[val1,setval1]=useState("");
  let[ans,setans]=useState("");


  // const btn=()=>{
  //   // setval("WEL-COME");
  //   // setval1(val1+10);

    
  // }
  


  const sum=()=>{
    setans(parseInt(val)+parseInt(val1));
  }
  const sub=()=>{
    setans(parseInt(val)-parseInt(val1));
  }
  const mul=()=>{
    setans(parseInt(val)*parseInt(val1));
  }
  const div=()=>{
    setans(parseInt(val)/parseInt(val1));
  }
  return (
  <>
    {/* <h1>{val}</h1>  
    <h1>{val1}</h1> */}


    <h1>Addition,subtraction,multiplication,divison</h1>

   VALUE 01: <input type='text' onChange={(e)=>setval(e.target.value)} className='space'></input><br></br>
   VALUE 02: <input type='text' onChange={(e)=>setval1(e.target.value)} className='space'></input><br></br>


   <input type='button' value={"Addition" } onClick={sum} className='s_right'></input>
    <input type='button' value={"subtraction" } onClick={sub} className='s_right'></input>
    <input type='button' value={"multiplication" } onClick={mul} className='s_right'></input>
    <input type='button' value={"divison" } onClick={div} className='s_right'></input><br></br>

    ANS :<input value={ans} className='m_top'></input>

    {/* <input type='button' value={"Click Here..!"} onClick={btn}></input> */}
   
  </>
  );
}

export default App;
