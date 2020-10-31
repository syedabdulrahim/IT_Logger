import React,{useEffect,useState} from 'react'

const Logs = (props) => {


    const [logs,setLogs]=useState([]);
    const [loading,setLoading]=useState(false);

    const getLogs=async ()=>{

        setLoading(true);
         const res= await fetch('/logs');
         const data= await res.json();

         setLogs(data);
         setLoading(false);

    }

    if(loading){
        return <h4>Loading</h4>
    }


    return (
        <div>
            
        </div>
    )
}

export default Logs
