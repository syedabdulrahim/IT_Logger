import React,{useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App=()=> {
  
  useEffect(()=>{

    // initilaization of matearalize JS
    M.AutoInit();

  },[])

  return(
    <div>Hello</div>
  );



}



export default App;
