import { setLoading } from '../action/logActions';
import {SET_LOADING,GET_LOGS,LOGS_ERROR} from '../action/types';
const initialState={

    logs:[]],
    current:null,
    loading:false,
    error:null
}

export default (state=initialState,action)=>{

    switch(action.type){

        case SET_LOADING:{
            return{
                ...state,
                loading:true 
            }
        }


        case  GET_LOGS:{
            return{
                ...state,
                logs:[...action.payload],
                loading:false
            }
        }

        case LOGS_ERROR:{

            console.log(action.payload)

            return {
                ...state,
                error:action.payload,
                loading:false
            }
        }


        default: return state;
    }

}