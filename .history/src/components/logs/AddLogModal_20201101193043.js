import React,{useState} from 'react'

const AddLogModal = () => {



    const [message,setMessage]=useState('');
    const[attention,setAttention]=useState(true);
    const [tech,setTech]=useState('');


    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>

        </div>
    )
}

const modalStyle={
    height:"75%",
    width:"75%"
}

export default AddLogModal
