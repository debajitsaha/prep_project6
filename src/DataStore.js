import {createContext, useState} from 'react';
export const Store = createContext();


function DataStore(props){
    const [data,setdata]=useState([
        {
        id:'1',
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        heading:"Bholaa Movie Review : Bholaa serves great action in this fast-paced thriller",
        description:"Bholaa (Ajay Devgn), who is released from prison after 10 years, is desperately waiting to meet his daughter for the first time. However, he finds himself in a precarious situation when IPS officer Diana Joseph (Tabu) leaves him with no choice but to help her in a high-pressure situation that involves the drug mafia, the common man and a truck-load of cops.",
        cat:"Bollywood"


    },
    {
        id:'2',
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdS0SfR5wav6MlRgYHuTUFLVwp6wuG6iNWdnetOMG5Dy7i9tCy",
        heading:"Adipurush is a 2023 Indian mythological action film based on the Hindu epic Ramayana.",
        description:"A modern adaptation of the Indian epic Ramayana which follows the exiled prince Raghav's journey to rescue his wife Janaki from the demon king Lankesh.",
        cat:"Bollywood"


    },
    {
        id:'3',
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        heading:"Bholaa Movie Review : Bholaa serves great action in this fast-paced thriller",
        description:"Bholaa (Ajay Devgn), who is released from prison after 10 years, is desperately waiting to meet his daughter for the first time. However, he finds himself in a precarious situation when IPS officer Diana Joseph (Tabu) leaves him with no choice but to help her in a high-pressure situation that involves the drug mafia, the common man and a truck-load of cops.",
        cat:"Bollywood"


    }
    ])
    return(
       <Store.Provider value={[data,setdata]}>
        {props.children}
       </Store.Provider>
    )
}
export default DataStore;