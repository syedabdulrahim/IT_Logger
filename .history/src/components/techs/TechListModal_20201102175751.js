import React,{useEffect,useState} from 'react'

const TechListModal = (props) => {


    useEffect(()=>{
            getTechs();
    },[])


    const [techs,setTechs]=useState([]);
    const [loading,setLoading]=useState(false);

    const getTechs=async ()=>{

        setLoading(true);
         const res= await fetch('/techs');
         const data= await res.json();

         setTechs(data);
         setLoading(false);

    }

   


    return (
        <div id="tech-list-modal">
      </div>
    )
}

export default TechListModal;
