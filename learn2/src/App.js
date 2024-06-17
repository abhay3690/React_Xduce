import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("GratStack")
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count => count + 1);  
      setName(name => name + 1);  
    },2000)
  },[count, name])
  return (
    <div className="App">
      <h1>I have renderd {count} times! {name}</h1>
      
    </div>
  );
}

export default App;
