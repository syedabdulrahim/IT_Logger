import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {



    
    const [firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');

    const onSubmit=()=>{

        
        if(firstName==='' || lastName===''){
            M.toast({html:"Please enter the first and last name"})
        }
        else{
            console.log(firstName,lastName);

            //clear fileds
            setFirstName('');
            setLastName('');
           
    }




    return (
        <div id="tech-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={(event)=>{setMessage(event.target.value)}}></input>
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field">
                       <select name="tech" value={tech} className="browser-default"
                       onChange={(event)=>{setTech(event.target.value)}}>
                           <option value="" disabled >Select Technician</option>
                           <option value="Abdul">Abdul</option>
                           <option value="Syed">Syed</option>
                       </select>
                    </div>

                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention}  value={attention} onChange={()=>{setAttention(!attention)}}></input>
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a  href="#!"className="modal-close waves-effect waves-green btn-flat" onClick={onSubmit}>
                    Enter
                </a>
            </div>

        </div>
    )
}

const modalStyle={
    height:"75%",
    width:"75%"
}

export default AddTechModal;
