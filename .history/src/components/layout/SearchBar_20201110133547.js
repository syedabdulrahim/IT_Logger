import React,{useRef} from 'react';
import {connect} from 'react-redux';
import {searchLogs} from   '../../action/logActions';
const SearchBar = () => {

    const searchField=useRef()

    return (
        <nav style={{
            marginBottom:'30px' 
        }} className="indigo darken-1">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" placeholder="Search Logs"/>
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

const mapStateToProps=(state)=>{

  return {

  }
}

export default connect()(SearchBar);
