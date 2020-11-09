import { setLoading } from '../action/logActions';
import {SET_LOADING,GET_LOGS} from '../action/types';
const initialState={

    logs:null,
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
                logs:[...action.payload]
            }
        }


        default: return state;
    }

}