import React,{useEffect} from 'react';
import TechItem from './TechItem';
import {connect} from 'react-redux';
import {getTechs} from '../../action/techActions';

const TechListModal = (props) => {


    useEffect(()=>{

            // props.getTechs();
    },[])




    // const getTechs=async ()=>{

    //     setLoading(true);
    //      const res= await fetch('/techs');
    //      const data= await res.json();

    //      setTechs(data);
    //      setLoading(false);

    // }

   


    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {
                        (!props.loading && props.techs.map((tech)=>{
                                return <TechItem tech={tech} key={tech.id}></TechItem>
                        }))
                    }
                </ul>

            </div>
      </div>
    )
}


const mapDispatchToProps=(dispatch)=>{
    return{
        getTechs:dispatch(getTechs())
    }
}


const mapStateToProps=state=>{
    return{
        techs:state.tech.techs,
        loading:state.tech.loading
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TechListModal);
