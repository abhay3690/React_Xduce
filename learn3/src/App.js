import React,{useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  // const [value, setValue] = useState(0)
  // const count = useRef(0)
  // useEffect(() => {
  //   count.current = count.current+1;
  // });
  const inputElement =useRef();
  const btnClicked = ()=>{
    console.log(inputElement.current);
    inputElement.current.style.background = "blue";
  }
  
  return (
    <div className="App">
     {/* <button oncClick={()=>{setValue(prev => prev-1)}}>-1</button>
     <h1>{value}</h1>
     <button oncClick={()=>{setValue(prev => prev+1)}}>+1</button>
     <h1>Render Count : {count.current} </h1>
     <add></add> */}
     <input type= "text" ref={inputElement}></input>
     <button onClick={btnClicked}>Click here</button>
    </div>

  );
}

export default App;
              