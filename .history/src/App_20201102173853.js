import React,{useEffect} from 'react';
import SearchBar from '../src/components/layout/SearchBar';
import Logs from '../src/components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';

// import logo from './logo.svg';
import './App.css';
import AddBtn from './components/layout/AddBtn';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';


const App=()=> {
  
  useEffect(()=>{

    // initilaization of matearalize JS
    M.AutoInit();

  },[])

  return(
    <React.Fragment>
        <SearchBar></SearchBar>
        <div className="container">
          <AddBtn></AddBtn>
          <AddLogModal></AddLogModal>
          <EditLogModal></EditLogModal>
          <AddTechModal></AddTechModal>
          <Logs/>
        </div>
    </React.Fragment>
  );



}



export default App;
