import React from 'react'
import moment from 'react-moment';
import PropTypes from 'prop-types'

const LogItem = ({log}) => {
    return (
        
            <li className="collection-item">
                <div>
                    <a href="" className={`modal-trigger ${log.attention?'red-text':'blue-text'}`}>{log.message}</a>
                </div>
            </li>
        
    )
}

LogItem.propTypes = {

    log:PropTypes.object.isRequired

}

export default LogItem
