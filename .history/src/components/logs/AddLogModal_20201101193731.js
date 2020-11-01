import React,{useState} from 'react'

const AddLogModal = () => {



    const [message,setMessage]=useState('');
    const[attention,setAttention]=useState(true);
    const [tech,setTech]=useState('');


    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={(event)=>{setMessage(event.target.value)}}></input>

                    </div>

                </div>
            </div>

        </div>
    )
}

const modalStyle={
    height:"75%",
    width:"75%"
}

export default AddLogModal
