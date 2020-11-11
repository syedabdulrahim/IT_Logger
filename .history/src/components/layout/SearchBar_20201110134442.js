import React,{useRef} from 'react';
import {connect} from 'react-redux';
import {searchLogs} from   '../../action/logActions';
const SearchBar = (props) => {

    const searchField=useRef();

    const onChange=(event)=>{
      props.searchLogs(event.target.value)
    }

    return (
        <nav style={{
            marginBottom:'30px' 
        }} className="indigo darken-1">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" placeholder="Search Logs" ref={searchField} onChange={onChange}/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
}


const mapDispatchToProps=(dispatch)=>{

  return{

    searchLogs:()=>dispatch(searchLogs())
  }
}



export default connect(null,mapDispatchToProps)(SearchBar);
