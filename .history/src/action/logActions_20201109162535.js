import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT
}  from './types';




export const getLogs=()=> async dispatch=>{

   
    try {
        dispatch(setLoading());

    const res= await fetch('/logs');
    const data=await res.json();


    dispatch({
        type:GET_LOGS,
        payload:data
    })
    }
    catch(error){


        dispatch({
            type:LOGS_ERROR,
            payload:error.response.data
        })
    }

}




export const addLog=(log)=> async dispatch=>{

   
    try {
        dispatch(setLoading());
        console.log(log);

    const res= await fetch('/logs',{
        method:'POST',
        body:JSON.stringify(log),
        headers:{
            'Content-Type':'application/json'
        }
    });
    const data=await res.json();


    dispatch({
        type:ADD_LOG,
        payload:data
    })
    }
    catch(error){


        dispatch({
            type:LOGS_ERROR,
            payload:error.response.data
        })
    }

}


export const deleteLog=(id)=> async dispatch=>{

   
    try {
        dispatch(setLoading());

    const res= await fetch(`/logs/${id}`,{
        method:'DELETE'
    });
    


    dispatch({
        type:DELETE_LOG,
        payload:id
    })
    }
    catch(error){


        dispatch({
            type:LOGS_ERROR,
            payload:error.response.data
        })
    }

}

export const setLoading=()=>{

    return{

        type:SET_LOADING
    }
}

export const setCurrent=log=>{

    return{
        type:SET_CURRENT,
        payload:log
    }
}

export const clearCurrent=()=>{

    return{
        type:CLEAR_CURRENT
    }
}

