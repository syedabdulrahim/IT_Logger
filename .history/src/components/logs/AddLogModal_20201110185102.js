import React,{useState} from 'react';
import {connect} from 'react-redux'
import {addLog} from '../../action/logActions'
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOptions from '../techs/TechsSelectOptions';

const AddLogModal = (props) => {


    const onSubmit=()=>{

        
        if(message==='' || tech===''){
            M.toast({html:"Please enter details"})
        }
        else{

            const data={
                message:message,
                attention:attention,
                tech:tech
            }

            console.log(data);
           props.addLog(data);
           M.toast({html:`Log Added By ${tech}`})

            //clear fileds
            setMessage('');
            setAttention('false');
            setTech('')
        }
    }


    const [message,setMessage]=useState('');
    const[attention,setAttention]=useState(false);
    const [tech,setTech]=useState('');


    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
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
                           <TechSelectOptions/>
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
                <a  href="#!" className="modal-close waves-effect blue waves-light btn" onClick={onSubmit}>
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

const mapDispatchToProps=(dispatch)=>{

    return{
        addLog:(log)=>dispatch(addLog(log))
    }
}

export default connect(null,mapDispatchToProps)(AddLogModal);