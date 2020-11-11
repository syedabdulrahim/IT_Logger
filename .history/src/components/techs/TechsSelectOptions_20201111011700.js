import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getTechs} from '../../action/techActions';

const TechsSelectOptions = (props) => {


    useEffect(()=>{
        props.getTechs()
    },[])


    return (!props.loading&&props.techs!=null && props.techs.map(t=><option key={t.id} value={`${t.firstName} ${t.lastName}`}>{t.firstName} {t.lastName}</option>))
}

const mapStateToProps=state=>{

    return{
            techs:state.tech.techs
    }
}



const mapDispatchToProps=dispatch=>{

    return{


        getTechs:()=>dispatch(getTechs())
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TechsSelectOptions);
