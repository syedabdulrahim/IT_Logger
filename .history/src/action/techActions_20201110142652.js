import {ADD_TECH,DELETE_TECH,GET_TECHS,SET_LOADING,TECH_ERROR} from './types';





export const getTechs=()=> async dispatch=>{

   
    try {
        dispatch(setLoading());

    const res= await fetch('/techs');
    const data=await res.json();


    dispatch({
        type:GET_TECHS,
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











export const setLoading=()=>{

    return{

        type:SET_LOADING
    }
}