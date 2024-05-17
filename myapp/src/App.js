import { useEffect } from "react";

import "./App.css";
// import Home from "./component/home";
// import BackgroundChanger from "./component/BackgroundChanger";
// import Grid from "./component/Grid";
import axios from 'axios'
// import Hello from "./component/Hello";

function App() {
  useEffect(() => {
    const getdata = async ()=>{

      try{
        const response =  await  axios.get('http://localhost:8080/api/posts' , {
          headers : {
            Authorization : {
              "username" : "dhruv@gmail.com",
              "password" : "4521"
            }
          }
        });
        console.log(response.data);

      }catch(err){
        console.log(err.message);
      }
    }
    getdata();

  });
  return (
    <div className="App">
      <h1>Hello</h1>

      {/* <Grid name="Burce" heroName="BatMan">
        <p name="childern">This is a child props . </p>
      </Grid>
      <Grid name="Cleark" heroName="Spiderman">
        <button> Action</button>
      </Grid>
      <Grid name="Diana" heroName="Goku"></Grid>

      <Welcome name="Burce" heroName="BatMan"></Welcome>
      <Welcome name="Cleark" heroName="Spiderman"></Welcome>
      <Welcome name="Diana" heroName="Goku"></Welcome> */}
      {/* <Home name="Abhay"></Home> */}
      {/* <BackgroundChanger /> */}
    </div>
  );
}

export default App;
