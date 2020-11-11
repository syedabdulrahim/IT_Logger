import {ADD_TECH,DELETE_TECH,GET_TECHS,SET_LOADING,TECH_ERROR} from '../action/types';

const initialState={

    techs:null,
    loading:false,
    error:null
}


export default (state=initialState,action)=>{

    switch(action.type){

        case GET_TECHS:
            return{
                ...state,
                loading:false,
                techs:action.payload
            }

        case SET_LOADING:
            return{
                ...state,
                loading:true
            }

        default :return state
    }

}