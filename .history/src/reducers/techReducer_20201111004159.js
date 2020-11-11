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

            case ADD_TECH:{
                return{
                    ...state,
                    techs:state.techs.concat(action.payload),
                    loading:false
                }
            }
        case SET_LOADING:
            console.log("tech")
            return{
                ...state,
                loading:true
            }

            case TECH_ERROR:{
                console.log(action.payload);
                return{
                    ...state,
                    error:action.payload,
                    loading:false
                }
            }

        default :return state
    }

}