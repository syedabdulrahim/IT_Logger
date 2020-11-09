import { setLoading } from '../action/logActions';
import {SET_LOADING} from '../action/types';
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


        default: return state;
    }

}