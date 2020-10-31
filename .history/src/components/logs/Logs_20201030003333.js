import React,{useEffect,useState} from 'react'
import LogItem from '../logs/LogItem';
import PreLoader from '../layout/PreLoader';

const Logs = (props) => {


    useEffect(()=>{
            getLogs();
    },[])


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
        return <PreLoader></PreLoader>
    }


    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">System Logs</h4>
                </li>
        {!loading&&logs.length===0?(<p className="center">No Logs to show...</p>):
        (
            logs.map((log)=><LogItem log={log}></LogItem>)
        )}
            </ul>
            
        </div>
    )
}

export default Logs
