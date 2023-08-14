import {createContext, useState} from 'react';
export const Store = createContext();


function DataStore(props){
    const [data,setdata]=useState([
        {
            id:'1',
            image:'https://stat4.bollywoodhungama.in/wp-content/uploads/2023/01/Pathaan-01.jpeg',
            heading:'Pathaan',
            description:'Bollywood',
            cat:"Bollywoo"
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
        image:"https://www.hindustantimes.com/ht-img/img/2023/05/05/550x309/PTI05-02-2023-000271B-0_1683130111776_1683271693893.jpg",
        heading:"The Kerala Story",
        description:"he Kerala Story was released in theatres on 5 May 2023. With a worldwide gross of ₹303.97 crore (US$38 million), it became the third-highest-grossing Hindi film of 2023.[10] It was heavily promoted by the incumbent Bharatiya Janata Party (BJP), which leveraged the film in its campaigning for the Karnataka assembly election.[11][12] However, film critics accorded it overwhelmingly negative reviews, characterizing the work as Islamophobic propaganda.[13][14][6] The film has also faced protracted litigation and protests, primarily in Kerala, West Bengal and Tamil Nadu.",
        cat:"Bollywood"


    },
    {
      id:'4',
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Brahmastra_Teaser.jpeg/220px-Brahmastra_Teaser.jpeg",
      heading:"Brahmāstra: Part One Shiva (pronounced [bɾəɦmastrə]) is a 2022 Indian Hindi-language fantasy action-adventure film[c] written and directed by Ayan Mukerji and produced by Karan Johar, Apoorva Mehta, Namit Malhotra, and Mukerji (in his debut production) –  ",
      description:" In ancient India, a group of sages in the Himalayas collide with the energy Brahm-shakti, which produces many celestial weapons of great power called astras. The strongest among them, the Brahmāstra, has the capacity to destroy the world. ",
      cat:"Bollywood"
    },
    {
        id:'5',
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQF6Uu6Ifsf4I0Hx50yTL8CoOAnmZoFJrIeRgPzz97xIcsXVrR6",
        heading:" ",
        description:" ",
        cat:"Bollywood"
      },
      {
        id:'6',
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        heading:"Bholaa Movie Review : Bholaa serves great action in this fast-paced thriller",
        description:"Bholaa (Ajay Devgn), who is released from prison after 10 years, is desperately waiting to meet his daughter for the first time. However, he finds himself in a precarious situation when IPS officer Diana Joseph (Tabu) leaves him with no choice but to help her in a high-pressure situation that involves the drug mafia, the common man and a truck-load of cops.",
        cat:"Bollywood"


    },
      {
        id:'7',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'8',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'9',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'10',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'11',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'12',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'13',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'14',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'15',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'16',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'17',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'18',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'19',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'20',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'21',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'22',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'23',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'24',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'25',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'26',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'27',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'28',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'29',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'30',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'31',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'32',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'33',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'34',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'35',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'36',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'37',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'38',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'39',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'40',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'41',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'42',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'43',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'44',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'45',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'46',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'47',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'48',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'49',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'50',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'51',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'52',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'53',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },

    {
        id:'54',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },{
        id:'55',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'56',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'57',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'58',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'59',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'60',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'61',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'62',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'63',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'64',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'65',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'66',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'67',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'68',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'69',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'70',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'71',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'72',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'73',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'74',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'75',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'76',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'77',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'78',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'79',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'80',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'81',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'82',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'83',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    },
    {
        id:'84',
        image:" ",
        heading:" ",
        description:" ",
        cat:" "
    }

    


    ])
    return(
       <Store.Provider value={[data,setdata]}>
        {props.children}
       </Store.Provider>
    )
}
export default DataStore;