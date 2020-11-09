import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR
}  from './types';




export const getLogs=()=> async dispatch=>{

    dispatch(setLoading());

    try {

    const res= await fetch('http://localhost:5000/logs');
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

export const setLoading=()=>{

    return{

        type:SET_LOADING
    }
}