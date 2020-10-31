import React,{useEffect,useState} from 'react'

const Logs = (props) => {


    const [logs,setLogs]=useState([]);
    const [loading,setLoading]=useState(false);

    const getLogs=async ()=>{

        setLoading(true);
         const rawData=fetch('/logs');
         

    }


    return (
        <div>
            
        </div>
    )
}

export default Logs
