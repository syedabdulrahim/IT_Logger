import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTech} from '../../action/techActions';

const TechItem = ({tech,deleteTech}) => {
    return (

        <li className="collection-item">
                <div>
                    {tech.lastName} { tech.firstName}
                    <a href="#!" className="secondary-content" onClick={()=>deleteTech(tech.id)}> 
                            <i className="material-icons grey-text"> delete</i>
                    </a>
                </div>
        </li>
    )
}

TechItem.propTypes={

    tech:PropTypes.object.isRequired

}


const mapDispatchToProps=(disptch)=>{
    return {
        deleteTech:(id)=>disptch(deleteTech(id))
    }
}


export default connect()(TechItem);
