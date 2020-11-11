import React from 'react';
import {connect} from 'react-redux';

const SearchBar = () => {
    return (
        <nav style={{
            marginBottom:'30px' 
        }} className="indigo darken-1">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required/>
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

  }
}

const mapStateToProps=(state)=>{

  return {

  }
}

export default connect()(SearchBar);
