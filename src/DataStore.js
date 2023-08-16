import {createContext, useState} from 'react';
export const Store = createContext();


function DataStore(props){
    const [data,setdata]=useState([
        {
            id:'1',
            image:'https://stat4.bollywoodhungama.in/wp-content/uploads/2023/01/Pathaan-01.jpeg',
            heading:'Pathaan',
            description:'Pathaan (pronounced [pəʈʰaːn]) is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Shridhar Raghavan and Abbas Tyrewala, from a story by Anand. The fourth installment in the YRF Spy Universe, it stars Shah Rukh Khan in the titular role with Deepika Padukone, John Abraham, Dimple Kapadia, and Ashutosh Rana. In the film, Pathaan (Khan), an exiled RAW agent, works with ISI agent Rubina Mohsin (Padukone) to take down Jim (Abraham), a former RAW agent, who plans to attack India with a deadly virus.',
            cat:"Bollywoo"
        },
        
    {
        id:'2',
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdS0SfR5wav6MlRgYHuTUFLVwp6wuG6iNWdnetOMG5Dy7i9tCy",
        heading:"Adipurush ",
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
      heading:"Brahmāstra",
      description:" In ancient India, a group of sages in the Himalayas collide with the energy Brahm-shakti, which produces many celestial weapons of great power called astras. The strongest among them, the Brahmāstra, has the capacity to destroy the world. ",
      cat:"Bollywood"
    },
    {
        id:'5',
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQF6Uu6Ifsf4I0Hx50yTL8CoOAnmZoFJrIeRgPzz97xIcsXVrR6",
        heading:"Drishyam 2",
        description:"Drishyam 2 (transl. Visual 2) is a 2022 Indian Hindi-language crime thriller film directed and co-produced by Abhishek Pathak. It is a remake of the 2021 Malayalam film of the same name and a sequel to the 2015 film Drishyam. It was jointly produced by Panorama Studios, Viacom18 Studios, and T-Series Films. The film stars Ajay Devgn, Akshaye Khanna, Tabu, and Shriya Saran.[5][6] It also features Saurabh Shukla, Rajat Kapoor, Ishita Dutta, Mrunal Jadhav and Kamlesh Sawant in supporting roles. The story is set seven years after the events of the last film.",
        cat:"Bollywood"
      },
      {
        id:'6',
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        heading:"Bholaa ",
        description:"Bholaa (Ajay Devgn), who is released from prison after 10 years, is desperately waiting to meet his daughter for the first time. However, he finds himself in a precarious situation when IPS officer Diana Joseph (Tabu) leaves him with no choice but to help her in a high-pressure situation that involves the drug mafia, the common man and a truck-load of cops.",
        cat:"Bollywood"


    },
      {
        id:'7',
        image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSSaD2bSPOgmgsn4-09dF2l8mHbuvHhJxbkL7rvD1uEpAxKnLX",
        heading:"PK ",
        description:"PK (transl. Tipsy) is a 2014 Indian Hindi-language science fiction satirical comedy drama film[5][6][7][8] edited and directed by Rajkumar Hirani and written by Hirani and Abhijat Joshi, and jointly produced by Hirani and Vidhu Vinod Chopra under the banners Rajkumar Hirani Films and Vinod Chopra Films respectively. The plot follows an innocent alien (Aamir Khan) who lands on Earth but loses his communication device. He meets Jaggu (Anushka Sharma), a heartbroken reporter, and tries to find his device. With time, he raises many thought-provoking questions.",
        cat:"Bollywood"
    },
    {
        id:'8',
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSaAgEKGAhM-PkFO0PbwPvuttF3X7d0BlqMHAm5tTKQtPqIheT",
        heading:"3 Idiots",
        description:"3 Idiots is a 2009 Indian Hindi-language coming-of-age comedy-drama film written, edited and directed by Rajkumar Hirani, co-written by Abhijat Joshi and produced by Vidhu Vinod Chopra. Adapted loosely from Chetan Bhagat's novel Five Point Someone,[5] the film stars Aamir Khan, R. Madhavan and Sharman Joshi in the titular roles, marking their reunion three years after Rang De Basanti (2006), while Kareena Kapoor, Omi Vaidya and Boman Irani appear in pivotal roles. Narrated through two parallel dramas, one in the present and the other set ten years in the past, the story follows the friendship of three students at an Indian engineering college and is a satire about the social pressures under the Indian education system.[6 ",
        cat:"Bollywood"
    },
    {
        id:'9',
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcGEy2HE1cMaVD3t9ir_Ld7A5xb9723xGt3U12sIQaEI4_lBMF",
        heading:"Chennai Express",
        description:" Chennai Express is a 2013 Indian Hindi-language action comedy film[9][3] directed by Rohit Shetty and produced by UTV Motion Pictures and Red Chillies Entertainment. It stars Deepika Padukone and Shah Rukh Khan with Nikitin Dheer, Sathyaraj, Kamini Kaushal and Lekh Tandon in supporting roles. The film revolves around Rahul Mithaiwala, a rich man who accidentally boards the eponymous train and journeys from Mumbai to Rameswaram with the daughter of an influential don.",
        cat:"Bollywood"
    },
    {
        id:'10',
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQihcmz7lVUdOVJr3TXG8AWBrd9HrJRp5P-b47rW-J7Pg_UYbFe",
        heading:"Koi... Mil Gaya",
        description:"A developmentally disabled young man tries to continue the work his father did in communicating with extra-terrestrials from outer space, which leads to something miraculous and wonderful.",
        cat:"Bollywood"
    },
    {
        id:'11',
        image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyFPZ0pCOPFdiXT-rbvi-Za2LxoqSWEt3zxnAtPgfcGcAjDY9X",
        heading:"Shershaah",
        description:"Shershaah (transl. Lion king) is a 2021 Indian Hindi-language biographical war film based on the life of Vikram Batra, killed in action in the Kargil War, directed by Vishnuvardhan in his Hindi film debut and written by Sandeep Shrivastava. The film was produced by Dharma Productions and Kaash Entertainment, with Hiroo Yash Johar, Karan Johar, Apoorva Mehta, Shabbir Boxwala, Ajay Shah and Himanshu Gandhi serving as producers. Sidharth Malhotra stars in dual roles as Vikram Batra and his twin brother Vishal, with Kiara Advani as his girlfriend Dimple Cheema.[2]",
        cat:"Bollywood"
    },
    {
        id:'12',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Airlift_poster.jpg/220px-Airlift_poster.jpg",
        heading:"Airlift",
        description:"Airlift is a 2016 Indian Hindi-language drama thriller film directed by Raja Krishna Menon starring Akshay Kumar and Nimrat Kaur, that follows Ranjit Katyal (played by Kumar), a Kuwait-based businessman as he carries out the evacuation of Indians based in Kuwait during the Invasion of Kuwait by Saddam Hussein's Iraq which lead to the beginning of the Gulf War.[1] The film was jointly produced by Abundantia Entertainment, Cape of Good Films, Emmay Entertainment, Hari Om Entertainment, T-Series and Viacom 18 Motion Pictures on a total budget of ₹320 million.[4] The plot is adapted from real life story of a Kuwait-based Malayali businessman Mathunny Mathews.[5]",
        cat:"Bollywood"
    },
    {
        id:'13',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Lagaan.jpg/220px-Lagaan.jpg",
        heading:"Lagaan",
        description:"Lagaan: Once Upon a Time in India (transl. Land tax) is a 2001 Indian Hindi-language epic musical[5] sports drama film written and directed by Ashutosh Gowariker. The film was produced by Aamir Khan, who stars alongside debutant Gracy Singh and British actors Rachel Shelley and Paul Blackthorne. Set in 1893, during the late Victorian period of India's colonial British Raj, the film follows the inhabitants of a village in Central India, who, burdened by high taxes and several years of drought, are challenged by an arrogant British Indian Army officer to a game of cricket as a wager to avoid paying the taxes they owe. The villagers face the arduous task of learning a game that is alien to them and play for a victory.",
        cat:"Bollywood"
    },
    {
        id:'14',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Bajirao_Mastani_poster.jpg/220px-Bajirao_Mastani_poster.jpg",
        heading:"Bajirao Mastani",
        description:"Bajirao Mastani is a 2015 Indian Hindi-language epic historical romance film directed by Sanjay Leela Bhansali, who co-produced it with Eros International and composed its soundtrack. The film stars Ranveer Singh, Deepika Padukone and Priyanka Chopra with Tanvi Azmi, Vaibhav Tatwawaadi, Milind Soman, Mahesh Manjrekar and Aditya Pancholi in supporting roles. Based on Nagnath S. Inamdar's Marathi novel Rau, Bajirao Mastani narrates the story of the Maratha Peshwa Bajirao I (1700–1740 AD) and his second wife, Mastani.",
        cat:"Bollywood"
    },
    {
        id:'15',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Bhuj-_The_Pride_of_India_film_poster.jpg/220px-Bhuj-_The_Pride_of_India_film_poster.jpg",
        heading:"Bhuj: The Pride of India",
        description:"Bhuj: The Pride of India is a 2021 Indian Hindi-language war film[2] directed by Abhishek Dudhaiya.[3] Set during the Indo-Pakistani War of 1971, it follows Indian Air Force Squadron Leader Vijay Karnik — then in-charge of the Bhuj Air Force Base who, with the help of 300 local women, reconstructed the damaged landing strip in 72 hours.[4] The film features Ajay Devgn as Karnik, alongside Sanjay Dutt, Sonakshi Sinha, Nora Fatehi, Sharad Kelkar, Ammy Virk and Ihana Dhillon.[5]",
        cat:"Bollywood"
    },
    {
        id:'16',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Commando_%282013_film%29.jpg/220px-Commando_%282013_film%29.jpg",
        heading:"Commando: A One Man Army",
        description:"A One Man Army[3] is a 2013 Indian Hindi-language action thriller film directed by Dilip Ghosh and produced by Vipul Amrutlal Shah and Reliance Entertainment. It is the first installment of Commando film series. The film features Vidyut Jammwal, Pooja Chopra and Jaideep Ahlawat in the lead roles. Jammwal, who is trained in the Indian martial arts of Kalaripayattu, performs martial arts in the film's action sequences.A One Man Army was released theatrically on 12 April 2013. It was followed by two sequels, Commando 2: The Black Money Trail in 2017 and Commando 3 in 2019.",
        cat:"Bollywood"
    },
    {
        id:'17',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Gabbar_is_back_first_look.jpg/220px-Gabbar_is_back_first_look.jpg",
        heading:"Gabbar Is Back",
        description:"Gabbar Is Back is a 2015 Indian Hindi-language vigilante action film directed by Krish in his Hindi debut, written by Rajat Arora and produced by Sanjay Leela Bhansali. The film stars Akshay Kumar and Shruti Haasan with Kareena Kapoor in a special appearance.[2][3]An official remake of A. R. Murugadoss's 2002 Tamil film Ramanaa, it is named after the titular antagonist played by Amjad Khan from the 1975 film Sholay. The film was released theatrically on 1 May 2015 and became a critical and commercial success.",
        cat:"Bollywood"
    },
    {
        id:'18',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Special_26_poster.jpg/220px-Special_26_poster.jpg",
        heading:"Special 26",
        description:"Special 26 is a 2013 Indian Hindi-language period heist thriller film written and directed by Neeraj Pandey. Based on the 1987 Opera House heist, the plot follows a team of criminals (Akshay Kumar with Anupam Kher), who pose as CBI officers and conduct raids, robbing politicians and businessmen of their black money. With the real CBI ( Manoj Bajpayee) on their trail, they decide to pull off their biggest heist yet. The film also stars Jimmy Sheirgill, Kajal Aggarwal, Rajesh Sharma, Divya Dutta and Kishor Kadam.Filming began on 23 February 2012 in Delhi. The film was shot in Chandni Chowk, near Jama Masjid, [3] and Mumbai. A theatrical trailer was released online on 20 December 2012.[4] The film was distributed all over India by Viacom 18 Motion Pictures and Wide Frame Pictures.",
        cat:"Bollywood"
    },
    {
        id:'19',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/7/77/A_Wednesday_Poster.JPG/220px-A_Wednesday_Poster.JPG",
        heading:"A Wednesday!",
        description:"A Wednesday! is a 2008 Indian Hindi-language thriller film written and directed by Neeraj Pandey and produced by Ronnie Screwvala, Anjum Rizvi and Shital Bhatia under UTV Motion Pictures and Friday Filmworks.[3] The film stars Naseeruddin Shah and Anupam Kher, and set between 2 pm and 6 pm on a Wednesday,[4] the film depicts a confrontation between a police commissioner and an anonymous caller who threatens to detonate bombs throughout Mumbai if four terrorists are not freed from police custody.",
        cat:"Bollywood"
    },
    {
        id:'20',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Agneepath_poster.jpg/220px-Agneepath_poster.jpg",
        heading:"Agneepath",
        description:"Agneepath (transl. Path of Fire) is a 2012 Indian Hindi-language action drama film produced by Hiroo Yash Johar and Karan Johar under Dharma Productions and directed by Karan Malhotra in his directorial debut. A remake of 1990 film of the same name directed by Mukul S. Anand and starring Amitabh Bachchan, it centers on a screenplay written by Malhotra and Ila Dutta Bedi, with dialogues written by Piyush Mishra. The film stars Hrithik Roshan, Sanjay Dutt, Rishi Kapoor, Priyanka Chopra, Kanika Tiwari, Om Puri and Zarina Wahab. It follows Vijay Deenanath Chauhan (Roshan), a common man from the island village of Mandwa who seeks revenge for his father's humiliation and murder at the hands of Kancha Cheena (Dutt); in the process, he befriends Rauf Lala (Kapoor), an underworld gangster, and falls in love with a loquacious girl, Kaali Gawde (Chopra).",
        cat:"Bollywood"
    },
    {
        id:'21',
        image:"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ1cKFVOpdVZUwqTxGf39TETI0OV4oUndFrzzAzSu8IOP4p-hVF2ErA9heqqjQ9BUWy",
        heading:"Avatar",
        description:"Avatar (marketed as James Cameron's Avatar) is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez,[6] and Sigourney Weaver. It is the first installment in the Avatar film series. It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.[a] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi, a humanoid species indigenous to Pandora. The title of the film refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.",
        cat:"Hollyw"
    },
    {
        id:'22',
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmyM6ZWyvIA4_Pe2GvYZmKB-zscbt_KaL4LQWqyRh39bir4FrO",
        heading:"Sherlock Holmes",
        description:" Sherlock Holmes  is a fictional detective created by British author Arthur Conan Doyle. Referring to himself as a consulting detective in the stories, Holmes is known for his proficiency with observation, deduction, forensic science and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.First appearing in print in 1887s A Study in Scarlet, the characters popularity became widespread with the first series of short stories in The Strand Magazine, beginning with A Scandal in Bohemia in 1891; additional tales appeared from then until 1927, eventually totalling four novels and 56 short stories. All but one[a] are set in the Victorian or Edwardian eras, between about 1880 and 1914. Most are narrated by the character of Holmes's friend and biographer Dr. John H. Watson, who usually accompanies Holmes during his investigations and often shares quarters with him at the address of 221B Baker Street, London, where many of the stories begin.",
        cat:"Hollywood"
    },
    {
        id:'23',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rXF2W055oWbs2Dt0cAnpaLPG3osVFZ-xMlBeFnDnoon_G1kf",
        heading:"RocknRolla",
        description:"RocknRolla is a 2008 action crime film[3] written and directed by Guy Ritchie, featuring an ensemble cast that includes Gerard Butler, Tom Wilkinson, Thandiwe Newton, Mark Strong, Idris Elba, Tom Hardy, Toby Kebbell, Jeremy Piven, and Chris Bridges. It was released in the United Kingdom on 5 September 2008, hitting number one in the UK box office in its first week of release.[4] The film also received mixed reviews from critics.",
        cat:"Hollywood"
    },
    {
        id:'24',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/02/The_Woman_in_Green_-_1945_-_Poster.png/220px-The_Woman_in_Green_-_1945_-_Poster.png",
        heading:"The Woman in Green",
        description:"The Woman in Green is a 1945 American film, the eleventh of the fourteen Sherlock Holmes films based on the characters created by Arthur Conan Doyle. Produced and directed by Roy William Neill, it stars Basil Rathbone as Sherlock Holmes and Nigel Bruce as Dr. Watson, with Hillary Brooke as the woman of the title and Henry Daniell as Professor Moriarty. The film follows an original premise with material taken from The Final Problem (1893) and The Adventure of the Empty House (1903).",
        cat:"Hollywood"
    },
    {
        id:'25',
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmXio-vXY2xWOkTCldE6uc4--beyQRghf0b_d7Yv4DenceTOUx",
        heading:"Grown Ups",
        description:"Grown Ups is a 2010 American comedy film directed by Dennis Dugan, written by Adam Sandler and Fred Wolf, produced by Sandler and Jack Giarraputo, and starring Sandler, Kevin James, Chris Rock, David Spade, Rob Schneider, Salma Hayek, Maria Bello, and Maya Rudolph. The film tells a story of five lifelong friends who won their junior high school basketball championship in 1978. They reunite three decades later for a 4th of July weekend after learning about the sudden death of their basketball coach.",
        cat:"Hollywood"
    },
    {
        id:'26',
        image:"https://upload.wikimedia.org/wikipedia/en/f/f2/Fast_X_poster.jpg",
        heading:"Fast X",
        description:"Fast X (also known as Fast & Furious 10) is a 2023 American action film directed by Louis Leterrier from a screenplay written by Dan Mazeau and Justin Lin, both of whom also co-wrote the story with Zach Dean. It is the sequel to F9 (2021), the tenth main installment, and the eleventh installment overall in the Fast & Furious franchise. It stars Vin Diesel as Dominic Toretto alongside an ensemble cast including Michelle Rodriguez, Tyrese Gibson, Chris Ludacris Bridges, John Cena, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Scott Eastwood, Daniela Melchior, Alan Ritchson, Helen Mirren, Brie Larson, Rita Moreno, Jason Statham, Jason Momoa, and Charlize Theron. In the film, Toretto must protect his family from Dante Reyes (Momoa), who seeks revenge for his father's death and the loss of his family's fortune.",
        cat:"Hollywood"
    },
    {
        id:'27',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/The_Fate_of_The_Furious_Theatrical_Poster.jpg/220px-The_Fate_of_The_Furious_Theatrical_Poster.jpg",
        heading:"The Fate of the Furious",
        description:"The Fate of the Furious (also known as Fast & Furious 8 internationally) is a 2017 American action film directed by F. Gary Gray and written by Chris Morgan. It is the sequel to Furious 7 (2015) and the eighth installment in the Fast & Furious franchise. The film stars Vin Diesel as Dominic Toretto, alongside Dwayne Johnson, Jason Statham, Michelle Rodriguez, Tyrese Gibson, Chris Ludacris Bridges, Scott Eastwood, Nathalie Emmanuel, Elsa Pataky, Kurt Russell, and Charlize Theron. In the film, Dom has settled down with his wife Letty Ortiz, until cyberterrorist Cipher (Theron) coerces him into working for her and turns him against his team, forcing them to find Dom and take down Cipher.",
        cat:"Hollywood"
    },
    {
        id:'28',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/S_w_a_t_ver6.jpg/220px-S_w_a_t_ver6.jpg",
        heading:"S.W.A.T.",
        description:"S.W.A.T. is a 2003 American action crime thriller film directed by Clark Johnson and written by David Ayer and David McKenna, with the story credited to Ron Mita and Jim McClain. Produced by Neal H. Moritz, it is based on the 1975 television series of the same name and stars Samuel L. Jackson, Colin Farrell, Michelle Rodriguez, LL Cool J, Josh Charles, Jeremy Renner, Brian Van Holt and Olivier Martinez. The plot follows Hondo (Jackson) and his SWAT team as they are tasked to escort an imprisoned drug kingpin/international fugitive to prison after he offers a $100 million reward to anyone who can break him out of police custody.",
        cat:"Hollywood"
    },
    {
        id:'29',
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDFmqpSvJ9_5ceDra-IgsYJ_PnR5UB2aorI2Uiz4ffKePNJ56N",
        heading:"ALTITUDE",
        description:"Gretchen Blair is a headstrong FBI agent who goes rogue during a hostage negotiation and is sent packing to a desk job back in Washington, D.C. As soon as her flight takes off, her seatmate offers her millions of dollars if she can get him off the plane alive. As his ex-partners stage a brutal hijacking, Gretchen finds herself in the fight of her life -- choosing sides between two factions of a criminal gang while trying to keep the plane from going down.",
        cat:"Hollywood"
    },
    {
        id:'30',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/The_Inspection_%28film%29.jpg/220px-The_Inspection_%28film%29.jpg",
        heading:"The Inspection",
        description:"The Inspection is a 2022 American drama film written and directed by Elegance Bratton. Inspired by Bratton's real-life experiences, the film follows a young gay black man who defiantly endures brutal training at a Marine Corps boot camp, seeking approval from his homophobic mother. It stars Jeremy Pope, Raúl Castillo, McCaul Lombardi, Aaron Dominguez, Nicholas Logan, Eman Esfandi, Andrew Kai, Aubrey Joseph, Bokeem Woodbine, and Gabrielle Union.",
        cat:"Hollywood"
    },
    {
        id:'31',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_Adventures_of_Tintin_-_Secret_of_the_Unicorn.jpg/220px-The_Adventures_of_Tintin_-_Secret_of_the_Unicorn.jpg",
        heading:"The Adventures of Tintin",
        description:"The Adventures of Tintin (also known as The Adventures of Tintin: The Secret of the Unicorn)[2] is a 2011 computer-animated action-adventure film based on Hergé's comic book series of the same name. It was directed by Steven Spielberg, produced by Spielberg, Peter Jackson and Kathleen Kennedy, and written by Steven Moffat, Edgar Wright, and Joe Cornish. The film stars Jamie Bell as Tintin, alongside Andy Serkis, and Daniel Craig.[5][6][7] In the film, Tintin, Snowy, and Captain Haddock (Serkis) search for the treasure of the Unicorn, a ship once captained by Haddock's ancestor Sir Francis Haddock, but face dangerous pursuit by Ivan Ivanovitch Sakharine (Craig), the descendant of Sir Francis's nemesis, Red Rackham",
        cat:"Hollywood"
    },
    {
        id:'32',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Untraceableposter08.jpg/220px-Untraceableposter08.jpg",
        heading:"Untraceable",
        description:"Untraceable is a 2008 American psychological thriller film directed by Gregory Hoblit and starring Diane Lane, Colin Hanks, Billy Burke, and Joseph Cross. It was distributed by Screen Gems.Set in Portland, Oregon, the film involves a serial killer who rigs contraptions that kill his victims based on the number of hits received by a website, KillWithMe.com, that features a live streaming video of the victim. Millions of people log on, hastening the victims' deaths",
        cat:"Hollywood"
    },
    {
        id:'33',
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeqJvZ_DETV_n926IWSGjl_HRjecy6QIqO6naa9dk9bvi-LYmP",
        heading:"The Town",
        description:"The Town (Ciudad de ladrones en España y Atracción peligrosa en Hispanoamérica) es la segunda película dirigida y protagonizada por Ben Affleck, enmarcada en el género de acción y thriller dramático. Es una producción inspirada en el libro de Chuck Hogan El Príncipe de los Ladrones y cuyo estreno en septiembre de 2010 ha generado muy buenas críticas del medio especializado.",
        cat:"Hollywood"
    },
    {
        id:'34',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Black_Mass_%28film%29_poster.jpg/220px-Black_Mass_%28film%29_poster.jpg",
        heading:"Black Mass",
        description:"Black Mass is a 2015 American biographical crime drama film about American mobster Whitey Bulger. Directed by Scott Cooper and written by Mark Mallouk and Jez Butterworth, it is based on Dick Lehr and Gerard O'Neill's 2001 book Black Mass: The True Story of an Unholy Alliance Between the FBI and the Irish Mob. The film features an ensemble cast led by Johnny Depp as Bulger, alongside Joel Edgerton, Benedict Cumberbatch, Kevin Bacon, Jesse Plemons, Peter Sarsgaard, Dakota Johnson, and Corey Stoll.",
        cat:"Hollywood"
    },
    {
        id:'35',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Findingneverlandposter.jpg/220px-Findingneverlandposter.jpg",
        heading:"Finding Neverland ",
        description:"Finding Neverland is a 2004 biographical fantasy film directed by Marc Forster and written by David Magee, based on the 1998 play The Man Who Was Peter Pan by Allan Knee. The film is about playwright J. M. Barrie and his relationship with a family who inspired him to create Peter Pan. The film earned seven nominations at the 77th Academy Awards, including Best Picture, Best Adapted Screenplay, and Best Actor for Johnny Depp, and won for Best Original Score. The film was the inspiration for the stage musical of the same name in 2012.",
        cat:"Hollywood"
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