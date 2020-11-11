import {ADD_TECH,DELETE_TECH,GET_TECHS,SET_LOADING,TECH_ERROR,SET_LOADING_TECH} from './types';





export const getTechs=()=> async dispatch=>{

   
    try {
        dispatch(setLoadingTech());

    const res= await fetch('/techs');
    const data=await res.json();


    dispatch({
        type:GET_TECHS,
        payload:data
    });
    }
    catch(error){


        dispatch({
            type:TECH_ERROR,
            payload:error.response.statusText
        })
    }

}


export const addTech=(tech)=> async dispatch=>{

   
    try {
        dispatch(setLoadingTech());

    const res= await fetch('/techs',{
        method:"POST",
        body:JSON.stringify(tech),
        headers:{
            'Content-Type':'application/json'
        }
    });
    const data=await res.json();


    dispatch({
        type:ADD_TECH,
        payload:data
    })
    }
    catch(error){


        dispatch({
            type:TECH_ERROR,
            payload:error.response.statusText
        })
    }

}











export const setLoadingTech=()=>{

    return{

        type:SET_LOADING_TECH
    }
}