import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {addTech} from '../../action/techActions';
import {connect} from 'react-redux'
const AddTechModal = (props) => {



    
    const [firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');

    const onSubmit=()=>{

         
        if(firstName==='' || lastName===''){
            M.toast({html:"Please enter the first and last name"})
        }
        else{
            console.log(firstName,lastName);
            props.addTechs({firstName,lastName});
            M.toast({html:`${firstName} ${lastName} has been added`})
            //clear fileds
            setFirstName('');
            setLastName('');
           
    }
}




    return (
        <div id="add-tech-modal" className="modal" >
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}></input>
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={(event)=>{setLastName(event.target.value)}}></input>
                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>

                </div>

            </div>
            <div className="modal-footer">
                <a  href="#!" className="modal-close waves-effect blue waves-light btn"  onClick={onSubmit}>
                    Enter
                </a>
            </div>

        </div>
    )
}


const mapDispatchToProps=(dispatch)=>{

    return{
        addTechs:(tech)=>dispatch(addTech(tech))
    }
}

export default connect(null,mapDispatchToProps)(AddTechModal);