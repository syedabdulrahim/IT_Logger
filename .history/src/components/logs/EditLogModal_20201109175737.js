import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import {updateLog} from '../../action/logActions';

const EditLogModal = (props) => {


    useEffect(()=>{
       
        if(props.currentLog){

            console.log(props.currentLog.message)
            setMessage(props.currentLog.message);
        }

    },[props.currentLog])


    const onSubmit=()=>{

        console.log(message,attention,tech);
        if(message==='' || tech===''){
            M.toast({html:"Please enter details"})
        }

        else{
              //clear fileds
              setMessage('');
              setAttention('false');
              setTech('')
        }
    }


    const [message,setMessage]=useState('');
    const[attention,setAttention]=useState(true);
    const [tech,setTech]=useState('');


    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
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

const mapStateToProps=(state)=>{

    return{
        currentLog:state.current
    }

    
}


const  mapDispatchToProps=(dispatch)=>{

    return{
        updateLog:(log)=>dispatch(updateLog(log))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(EditLogModal);
