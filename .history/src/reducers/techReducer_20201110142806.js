import {ADD_TECH,DELETE_TECH,GET_TECHS,SET_LOADING,TECH_ERROR} from '../action/types';

const initialState={

    techs:null,
    loading:false,
    error:null
}


export default (state=initialState,action)=>{

    switch(action.type){



        default :return state
    }

}