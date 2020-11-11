import React,{useEffect} from 'react'
import LogItem from '../logs/LogItem';
import PreLoader from '../layout/PreLoader';
import { connect } from 'react-redux';
import {getLogs} from '../../action/logActions';

const Logs = ({logs:{logs,loading},getLogs}) => {


    useEffect(()=>{
            getLogs();
    },[])



   
    if(loading || logs==null){
        console.log(loading,logs)
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

const mapStateToProps=state=>{

    return{
        logs:state.log
    }
}

const mapDispatchToProps=dispatch=>{

    return {
        getLogs:()=>dispatch(getLogs() )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Logs)
