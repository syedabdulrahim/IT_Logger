// import { setLoading } from '../action/logActions';
// import { setCurrent } from '../action/logActions';
import {SET_LOADING,
    GET_LOGS,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG
} from '../action/types';
const initialState={

    logs:null,
    current:null,
    loading:false,
    error:null
}

export default (state=initialState,action)=>{

    switch(action.type){

        case SET_LOADING:
            return{
                ...state,
                loading:true 

            }
        

        case DELETE_LOG:
            return{
                ...state,
                logs:state.logs.filter((log)=>log.id!=action.payload),
                loading:false
            }
        


        case  GET_LOGS:
            return{
                ...state,
                logs:[...action.payload],
                loading:false
            }
        

        case ADD_LOG:
            return{
                ...state,
                logs:state.logs.concat(action.payload),
                loading:false
            }
        
        case LOGS_ERROR:

            console.log(action.payload)

            return {
                ...state,
                error:action.payload,
                loading:false
            }

            case SET_CURRENT:
                // console.log(action)
                return{
                    ...state,
                    current:action.payload,
                    loading:false
                }


                case CLEAR_CURRENT:

                    return{
                        ...state,
                        current:null
                    }

                    case UPDATE_LOG:
                        return{
                            ...state,
                            logs:state.logs.map((log)=>log.id==action.payload.id?action.payload:log),
                            loading:false
                        }
                
        


        default: return state;
    }

}