import React from 'react'
import Moment from 'react-moment';
import PropTypes from 'prop-types'
// import Moment from 'react-moment';

const LogItem = ({log}) => {
    const dateToFormat = new Date(log.date);
    console.log(log.date)

    return (
        
            <li className="collection-item">
                <div>
                    <a href=""
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
                </div>
            </li>
        
    )
}

LogItem.propTypes = {

    log:PropTypes.object.isRequired

}

export default LogItem
