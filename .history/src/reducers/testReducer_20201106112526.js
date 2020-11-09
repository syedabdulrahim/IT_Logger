const initialState={

    testing:{
        a:1,
        b:2
    }
}
export default (state=initialState,action)=>{

switch(action.type){

    default :{
        console.log(state)
        return state}
}

}