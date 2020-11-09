import React from 'react'
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteLog}  from '../../action/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

// import Moment from 'react-moment';

const LogItem = ({log,deleteLogs}) => {
    const dateToFormat = new Date(log.date);
    // console.log(log.date)


    const deleteLogHandler=()=>{
        deleteLogs(log.id);
        M.toast({
            html:'Log Deleted'
        })
    }

    return (
        
            <li className="collection-item">
                <div>
                    <a href="#edit-log-modal"
                     className={`modal-trigger ${log.attention?'red-text':'blue-text'}`}>
                         {log.message}
                    </a>
                    <br/>
                    <span className="grey-text">
                            <span className="black-text">ID # {log.id}</span>
                               {' '} {'last updated by'}
                            <span className="black-text">{' '}{log.tech}</span>{' '}
                            on{' '} <Moment>{dateToFormat}</Moment>
                    </span>
                    <a href="#" className="secondary-content" >
                        <i className="material-icons grey-text" onClick={()=>deleteLogHandler() } >delete</i>
                    </a>
                </div>
            </li>
        
    )
}

LogItem.propTypes = {

    log:PropTypes.object.isRequired

}

const mapDispatchToProps=(dispatch)=>{

    return{
        deleteLogs:(id)=>dispatch(deleteLog(id))
    }

}

export default connect(null,mapDispatchToProps)(LogItem)
