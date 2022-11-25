import { useState } from "react";

function App() {

  const[cal,setCalc] = useState("");
  const[result,setResult] = useState("");
  const ops = ['/','*','+','-','.'];
  const updateCalc = value =>{
    if(
      (ops.includes(value) && cal === '' )||
      (ops.includes(value) && ops.includes(cal.slice(-1))) 
    ){
      return;
    }
    setCalc(cal+value);
    if(!ops.includes(value)){
      setResult(eval(cal+value).toString());
    }
  }
  const createDigit = () =>{
    
    const digits = [];

    for(let i=1;i<10;i++){
      digits.push(
        <button onClick={()=> updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculate = ()=>{
    setCalc(eval(cal).toString());
  }
  const deleteLast = () =>{
    if(cal == ''){
      return;
    }
    const value = cal.slice(0,-1);
    setCalc(value);
    
  }
  const deleteAll = ()=>{
    if(cal == ''){
      return;
    }
    setResult("");
    const value = "";
    setCalc(value);
  }
  return (
    <div className="App">
      <div className="header">
          Simple Calculator
      </div>
      <div className="calculator">
        <div className="display">
          {cal || "0"}
        </div>

        <div  className="operators">
          <button onClick={()=> updateCalc('/')}>/</button>
          <button onClick={()=> updateCalc('*')}>*</button>
          <button onClick={()=> updateCalc('+')}>+</button>
          <button onClick={()=> updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={deleteAll}>AC</button>
        </div>

        <div className="digits">

          {createDigit()}
          <button onClick={()=> updateCalc('0')}>0</button>
          <button onClick={()=> updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
