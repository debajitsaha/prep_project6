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
        image:"https://images.indianexpress.com/2023/08/open-ai-chatgpt.jpg?w=640",
        heading:"OpenAI says AI tools can be effective in content moderation",
        description:"ChatGPT creator OpenAI made a strong case for the use of AI in content moderation, saying it can unlock efficiencies at social media firms by speeding up the time it takes to handle some of the grueling tasks.Despite the hype around generative AI, companies such as Microsoft and Google-owner Alphabet are yet to monetize the technology in which they have been pumping billions of dollars in the hope that it will have a big impact across industries.",
        cat:"Technology"
    },
    {
        id:'37',
        image:"https://images.indianexpress.com/2023/08/xiaomi-mix-fold3.jpg?w=640",
        heading:"Xiaomi’s latest foldable is lighter and cheaper than Galaxy Z Fold5",
        description:"Samsung Galaxy Z Fold5 is undoubtedly one of the best folding smartphones of 2023 and the Chinese contemporaries are catching up with the Korean tech giant, and the latest one to do so is the Xiaomi Mix Fold 3. The third iteration of Xiaomi’s foldable is thinner than Samsung’s offering. However, you won’t be able to buy one anytime soon.Samsung’s latest Z Fold5 has gotten a lot more thinner than its predecessor. However, it is still not as thin as the Xiaomi Mix Fold 3, which has a thickness of 10.3mm when folded and when unfolded, it just measures 5.6mm. The Mix Fold 3 weighs 259 grams, which makes it slightly heavier than Samsung’s offering",
        cat:"Technology"
    },
    {
        id:'38',
        image:"https://images.indianexpress.com/2023/08/ai-1.jpg?w=640",
        heading:"Moderate Democratic coalition creates AI working group",
        description:"Moderate Democrats in the U.S. House of Representatives have formed a working group on artificial intelligence aimed at tackling the issue of what restrictions, if any, should be put on the technology.The New Democrat Coalition announced the formation of the group on Tuesday, saying it would work with the Biden administration, companies and other lawmakers to develop “sensible, bipartisan policies to address this emerging technology.”",
        cat:"Technology"
    },
    {
        id:'39',
        image:"https://images.indianexpress.com/2022/08/OnePlus-10T-5G-gallery-1.jpg?w=630",
        heading:"OnePlus 10T 5G: Check out the latest flagship phone from OnePlus",
        description:"The OnePlus 10T 5G was launched at a company event in New York yesterday. Here's a closer look at the device. (Image credit: Nandagopal Rajan / Indian Express).The phone comes with 150W SuperVooc fast charging. The OnePlus 10T is powered by the Snapdragon 8 Gen 1, with improved thermal performance.  ",
        cat:"Technology"
    },
    {
        id:'40',
        image:"https://images.indianexpress.com/2023/08/transcribeglass.jpg?w=640",
        heading:"This smart AR wearable can convert any eyeglass into TranscribeGlass",
        description:"The rapid progress in technology has significantly improved the accessibility of hearing aids. However, even with these advancements, a quality hearing aid from a reputable company could still cost upwards of $3000, making them inaccessible to many. In response to this, two Stanford students have developed an innovative and affordable solution called TranscribeGlass.The gadget can be attached to any eyeglass, transforming them into a compact smart glass with a display that projects subtitles in real-time using speech-to-text recognition technology",
        cat:"Technology"
    },
    {
        id:'41',
        image:"https://images.indianexpress.com/2023/08/ole-electric.jpg?w=640",
        heading:"India’s Ola Electric eyes higher sales with affordable e-scooters",
        description:" Ola Electric, India’s largest maker of electric scooters, launched its most affordable rides on Tuesday, in an effort to woo more buyers as the price of e-scooters moves closer to gasoline models.The SoftBank Group-backed company also plans to launch four e-motorcycles by end-2024. The new e-scooter models, S1X and S1X+, will be priced at 99,999 rupees ($1,199.15) and 109,999 rupees, respectively, with the cheapest variant of S1X about 36% lower than Bangalore-based Ola’s most expensive e-scooter, the S1 Pro, which sells for 140,000 rupees.",
        cat:"Technology"
    },
    {
        id:'42',
        image:"https://images.indianexpress.com/2023/08/chandrayaan-1.jpg?w=640",
        heading:"Chandrayaan-3 reaches final orbit around moon, lander to separate on Thursday ",
        description:"Chandrayaan-3 reached its final 153×163 km orbit around the moon on Wednesday, completing the series of manoeuvres to reduce the orbit and velocity of the spacecraft, the Indian Space Research Organisation (Isro) said. The lander-rover module will separate on Thursday from the propulsion module that carried it to the moon.“It’s time for preparations as the Propulsion Module and the Lander Module gear up for their separate journeys,” the space agency said. After separation, the lander-rover module will prepare for the powered descent to the lunar surface scheduled for August 23",
        cat:"Technology"
    },
    {
        id:'43',
        image:"https://images.indianexpress.com/2022/10/N-3-1.jpg?w=630",
        heading:"NASA and SpaceX’s historic Crew-5 launch to International Space Station",
        description:"NewsPhotosTechnology GalleryPhotos: NASA and SpaceX's historic Crew-5 launch to International Space Station.A SpaceX rocket soared into orbit from Florida on Wednesday carrying the next long-term International Space Station crew, with a Russian cosmonaut, two Americans and a Japanese astronaut flying together in a demonstration of US-Russian teamwork in space despite Ukraine war tensions.",
        cat:"Technology"
    },
    {
        id:'44',
        image:" https://images.indianexpress.com/2023/08/Brown-dwarf-20230816.jpg?w=640",
        heading:"Failed star is a record-breaking Jupiter hotter than the Sun",
        description:"Hot Jupiters are curious cosmic bodies. They are kind of like our Jupiter but they orbit very close to their stars, sometimes completing an entire orbit in just weeks or even hours, meaning that they have extremely hot surface temperatures. A new hot Jupiter discovered by astronomers has a surface temperature 2,000 degrees hotter than that of our Sun.In a study published in Nature Astronomy, scientists write on the discovery of a system that consists of two bodies located about 1,400 light-years away. This system offers an unprecedented opportunity to study hot Jupiter atmospheres in particular while also helping advance our understanding of planetary and stellar evolution, according to the Weizmann Institute of Science.",
        cat:"Technology"
    },
    {
        id:'45',
        image:"https://images.indianexpress.com/2022/09/WhatsApp-Image-2022-09-03-at-15.11.07-1.jpeg?w=630",
        heading:" Nokia 8210 4G, Nokia 2660 Flip: Check out the latest Nokia retro phones",
        description:"Nokia 8210 is a throwback to the early days of Nokia, when it was all about solving the most basic of problems.It's 4G-enabled and comes with dual SIM slots.Available in three beautiful colors - red, green and black, the Nokia 8210 4G is sleek, simple and best-in-class with its many cutting-edge features.The phone is priced at Rs 3,999 and can be purchased via Amazon and Nokia online store along with offline retail stores across the country.Nokia's back with the Nokia 2660 Flip.You can get the 2660 Flip in three colour options: Blue, Red, and Black.",
        cat:"Technology"
    },
    {
        id:'46',
        image:"https://images.indianexpress.com/2023/08/apple-macbook-face-id-featured.jpg?w=640",
        heading:" Notch on iMac? Apple patent reveals plans for Face ID on MacBooks & desktops",
        description:"First introduced on the MacBooks back in 2016, Touch ID has remained the staple form of authentication on those macOS-powered devices ever since. It’s convenient, it’s fast, and nothing beats the technology in terms of security. However, a new patent hints that Apple could be working on an alternative to the touch-powered authentication method.As reported by Apple Insider, the patent titled “Light Recognition Module for Determining a User of a Computing Device” describes how the camera on top of the display (now in a notch) could recognize the user’s face and take them to the home screen automatically. The patent says that “to prevent unauthorized users from accessing this sensitive data, these computing devices may incorporate systems and mechanisms for authenticating users.”",
        cat:"Technology"
    },
    {
        id:'47',
        image:"https://images.indianexpress.com/2023/08/elon-musk-x-twitter.jpg?w=640",
        heading:" TweetDeck, now XPro, has become a paid service",
        description:"Elon Musk s social media platform, X, formerly known as Twitter, has recently imposed restrictions on its TweetDeck (XPro) social media management dashboard, limiting access to only paid Blue subscribers. Users who do not have a Blue subscription and attempt to access TweetDeck are now redirected to X’s Blue subscription page.TweetDeck is a widely utilised service within the media industry for account scheduling and management. This restriction effectively encourages users to subscribe to the company’s service to access TweetDeck. On July 3rd, the company officially announced the shift of TweetDeck to a premium service and granted a 30-day transition period.",
        cat:"Technology"
    },
    {
        id:'48',
        image:"https://images.indianexpress.com/2023/08/e-cycle-review.jpg?w=640",
        heading:"Virtus Motors Alpha M e-bike review: An Indian cycle for Indian roads",
        description:"I have tried a couple of electric bikes over the past few years and while the convenience of an electric motor that assists your pedalling efforts is understandable, I have not really been a big fan of the concept and might as well buy a more comfortable electric scooter at a slightly higher cost. But clearly, my opinion is in the minority and this is why companies big and small are entering this segment.The Virtus Motors Alpha M is also vying for attention in the electric bicycle segment touting its made-in-India credentials and relatively affordable price tag. But is that enough in this segment and how will users compare it with let’s say a more popular brand like Hero? This was top of my mind when I started my review.",
        cat:"Technology"
    },
    {
        id:'49',
        image:"https://images.indianexpress.com/2023/08/redmi-watch-3-active-review-featured.jpg?w=640",
        heading:"Redmi Watch 3 Active review: A fine example for watch software design",
        description:"Smartwatches have come a long way. Nowadays, you can hardly go wrong with any smartwatch above Rs 2,000. But some brands still do it better than others. One of them is Redmi, whose Watch 3 Active has been on my wrist for a week now. And I love it. It’s ridiculously easy to use, is packed with features, and has an interface that makes you wonder if you really need a full-fledged smartwatch. Here’s my review.Let’s start with the design. The Redmi Watch 3 Active has a solid metal frame that feels durable and premium. Its display is the kind that doesn’t sit flush into the frame – it pops out a little which gives it a more premium look. The watch comes in two colours – black and off-white – but you can also spice things up with an olive green strap for Rs 499 (that’s like a sixth of the watch’s price itself) if you’re feeling adventurous. I got the black one for review and I like its sleek and minimalist look",
        cat:"Technology"
    },
    {
        id:'50',
        image:"https://images.indianexpress.com/2023/08/apple-imac-g3-touch-elo-featured.png?w=640",
        heading:"Your dream of a touchscreen Mac was already realised back in the 90s",
        description:" The closest thing to a Mac with touch support Apple has ever blessed us with is an iPad that runs on the same chips as the latest MacBooks. Yes, we are talking about the iPad Pro M2. But that doesn’t really run macOS, so it doesn’t count. What a bummer.And Windows PCs that support touch are everywhere, so it’s not like Apple can’t make a Mac with a touch screen. The almost $3 trillion-worth company definitely has the resources to create one – it simply doesn’t want to. But what if we told you that the Mac of our dreams does exist? You just can’t have one.Back in the olden days of the late 90s, a company called Elo decided to do what Apple wouldn’t and added touchscreen capabilities to the iconic iMac G3. Apple has been stubborn about not making a Mac with touchscreen support, so it took an outsider to do it.",
        cat:"Technology"
    },
    {
        id:'51',
        image:"https://i.guim.co.uk/img/media/cf2f0d65fd3c285d1985dd59d0f0f411589f1adb/0_52_5125_3075/master/5125.jpg?width=620&dpr=1&s=none",
        heading:" Fitness earlier in life reduces cancer risk when older, study shows",
        description:"Being fit earlier in life is associated with a reduced risk, in some cases of up to 42%, of developing nine different types of cancer in later life, according to a large long-term study.While exercise has been previously linked with a lower risk of certain cancers, long-term and large cohort studies on multiple cancer sites are sparse.The new study, published in the British Journal of Sports Medicine, drew on data from more than 1 million male Swedish conscripts between 16 and 25, who were followed for an average of 33 years from 1968 to 2005. The results suggested that good cardiorespiratory fitness – an individual’s ability to engage in sustained aerobic exercises such as running, cycling, and swimming – was associated with a 42% reduced risk of lung cancer, a 40% reduced risk of liver cancer and a 39% reduced risk of oesophageal cancer.",
        cat:" Fitness"
    },
    {
        id:'52',
        image:"https://www.helpguide.org/wp-content/uploads/2023/02/Mental-Health-Benefits-of-Exercise.jpeg",
        heading:" The Mental Health Benefits of Exercise",
        description:"Exercise is not just about aerobic capacity and muscle size. Sure, exercise can improve your physical health and your physique, trim your waistline, improve your sex life, and even add years to your life. But that’s not what motivates most people to stay active.People who exercise regularly tend to do so because it gives them an enormous sense of well-being. They feel more energetic throughout the day, sleep better at night, have sharper memories, and feel more relaxed and positive about themselves and their lives. And it’s also a powerful medicine for many common mental health challenges.",
        cat:"Fitness"
    },
    {
        id:'53',
        image:"https://www.helpguide.org/wp-content/uploads/2023/08/ChoosingAlcoholTreatment.png",
        heading:"Choosing an Alcohol Rehab Treatment Program",
        description:"Your alcohol use disorder may be a new issue, and you increasingly use drinking to cope with stressful events. You might feel like life is slipping out of your control, as if you’re entering a gradual but dangerous spiral. Or your addiction may be something you've struggled with for a long time, and it repeatedly weighs on your work, relationships, and mental and physical health. You might feel stuck in place, ashamed of repeated relapses and your inability to stay sober.No matter how severe your addiction, alcohol rehab can offer a path forward. The challenge comes in identifying which level of treatment is best for you. Once you decide on the level of treatment, you will then need to find a local rehab center or treatment program that works for you.",
        cat:"Fitness"
    },

    {
        id:'54',
        image:"https://www.helpguide.org/wp-content/uploads/2023/02/How-to-Build-an-Exercise-Plan-1200x800.jpeg",
        heading:"How to Build an Exercise Plan",
        description:"So what does a balanced exercise plan consist of? The Physical Activity Guidelines for Americans from the U.S. Department of Health and Human Services urge all adults to include the following types of exercise in their weekly routines:150 minutes of moderate aerobic exercise per week (for example, 30 minutes on each of five days).or 75 minutes of vigorous aerobic activity or an equiva- lent mix of the two.",
        cat:"Fitness"
    },{
        id:'55',
        image:"https://www.helpguide.org/wp-content/uploads/2023/02/Walking-Easy-Way-to-Get-Fit-1200x800.jpeg",
        heading:"Walking: An Easy Way to Get Fit",
        description:"The next time you have a check-up, don’t be surprised if your doctor hands you a prescription to walk. Yes, this familiar activity is now being touted (along with other forms of regular physical activity) as the closest thing we have to a wonder drug.Walking can have a bigger impact on disease risk and various health conditions than just about any other remedy that’s readily available to you. What’s more, it’s free and has practically no negative side effects. Walking for 2.5 hours a week—that’s just 21 minutes a day—can cut your risk of heart disease by 30%. In addition, this do-anywhere, no-equipment-required activity has also been shown to reduce the risk of diabetes and cancer, lower blood pressure and cholesterol, and keep you mentally sharp. Even a quick one-minute jaunt pays off. A University of Utah study in 2014 found that for every minute of brisk walking that women did throughout the day, they lowered their risk of obesity by 5%. No more “I don’t have time” excuses!",
        cat:"Fitness"
    },
    {
        id:'56',
        image:"https://www.helpguide.org/wp-content/uploads/2023/02/Best-Exercises-for-Health-and-Weight-Loss-1200x794.jpeg",
        heading:"Best Exercises for Health and Weight Loss",
        description:"For many of us, even when we understand how much regular exercise can improve our mental and physical health, the real challenge lies in developing an exercise routine that we can stick with. It’s much easier to get up and get moving every day when you actually experience the results you’re looking for—whether that’s trimming your waistline, improving your sleep, mood, and energy, or easing symptoms of stress, anxiety, or depression.Whatever benefits you’re looking for from a fitness plan—and whatever your current fitness level—the key is to mix different types of physical activity. The most effective exercise plans should include a mix of three elements: cardio (or aerobic) training, strength training, and flexibility and balance exercises. This will not only maximize the health benefits, it will also keep your workouts varied and interesting.",
        cat:"Fitness"
    },
    {
        id:'57',
        image:"https://www.helpguide.org/wp-content/uploads/2023/02/Senior-Exercise-1200x800.jpeg",
        heading:"Senior Exercise and Fitness Tips",
        description:"There are many reasons why we tend to slow down and become more sedentary with age. It may be due to health problems, weight or pain issues, or worries about falling. Or perhaps you think that exercising simply isn’t for you. But as you grow older, an active lifestyle becomes more important than ever to your health.A recent Swedish study found that physical activity was the number one contributor to longevity, adding extra years to your life—even if you don’t start exercising until your senior years. But getting active is not just about adding years to your life, it’s about adding life to your years.",
        cat:"Fitness"
    },
    {
        id:'58',
        image:"https://www.helpguide.org/wp-content/uploads/2023/02/Sleep-in-Older-Adults-1200x800.jpeg",
        heading:"Sleep and Aging: Sleep Tips for Older Adults",
        description:"As we age, we often experience normal changes in our sleeping patterns, such as becoming sleepy earlier, waking up earlier, or not sleeping as deeply. However, disturbed sleep, waking up tired every day, and other symptoms of insomnia are NOT a normal part of aging.Sleep is just as important to your physical and emotional health as it was when you were younger. A good night’s sleep helps improve concentration and memory formation, allows your body to repair any cell damage that occurred during the day, and refreshes your immune system, which in turn helps to prevent disease.",
        cat:"Fitness"
    },
    {
        id:'59',
        image:"https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        heading:"How to Meditate: A Step-by-Step Guide to Reduce Stress and Find Inner Peace",
        description:"In today’s fast-paced and chaotic world, finding inner peace and reducing stress can seem like an impossible task, which is why we want to help you learn how to meditate. One practice that has gained significant popularity and proven effectiveness is mindfulness meditation. This step-by-step guide will walk you through the process of incorporating mindfulness meditation into your daily routine. Find a quiet and comfortable space to sit or lie down without distractions. Ensure that you have enough time to devote to the practice without feeling rushed.Close your eyes and take a few deep breaths, allowing your body to relax and your mind to settle. Focus on your breath, the sensation of air flowing in and out of your nostrils.",
        cat:"Fitness"
    },
    {
        id:'60',
        image:"https://asmy.org.au/app/uploads/2020/03/Robina-Header-1-1024x819.png",
        heading:"Yoga Asana ",
        description:"Yoga improves strength, balance and flexibility.Yoga helps with back pain relief. Yoga can ease arthritis symptoms.Yoga benefits heart health.Yoga relaxes you, to help you sleep better.Yoga can mean more energy and brighter moods.Yoga helps you manage stress. Yoga connects you with a supportive community.Yoga promotes better self-care. ",
        cat:"Fitness"
    },
    {
        id:'61',
        image:"https://images.indianexpress.com/2023/08/shilpa-shetty_1200_insta-1.jpg?w=640",
        heading:" Here’s a sneak peek into Shilpa Shetty Kundra’s diet",
        description:"Shilpa Shetty Kundra is known not just for her acting skills but her fitness-oriented lifestyle with a commitment to staying healthy through wholesome diet too. As such, when we cam across a glimpse of her enjoying a wholesome meal, we decided to deep dive.",
        cat:"Fitness"
    },
    {
        id:'62',
        image:"https://images.indianexpress.com/2023/07/fruits.jpg?w=640",
        heading:"How to incorporate protein into your diet for muscle-building",
        description:"You’re back to the gym to get those six-pack abs or enviable muscles, but you don’t know where to begin. Well, the first thing you should be focusing on is your food. Namely, a protein-heavy diet.According to Dr Shuchin Bajaj, Founder Director, Ujala Cygnus Group of Hospitals, consuming a protein-heavy diet is important for muscle building because protein is essential for muscle growth, repair, and maintenance. “When you engage in activities that break down muscle tissue, such as resistance training, your body requires an adequate amount of protein to rebuild and strengthen the muscles,” he said.",
        cat:"Fitness"
    },
    {
        id:'63',
        image:"https://images.indianexpress.com/2023/08/indian-dishes.jpg?w=640",
        heading:"On Independence Day, Taste Atlas reveals the 50 best foods and drinks in India",
        description:"One thing that unites people across borders irrespective of their gender, caste or religion, is their love for food. Especially in India, where history has been full of conflicts, wars, protests to negotiations for freedom, food has kept people connected. Moreover, Indian cuisine is recognised worldwide for its unique taste, style of preparation and local spices that enrich the palate.",
        cat:"Fitness"
    },
    {
        id:'64',
        image:"https://images.indianexpress.com/2023/08/malaika-arora-1.jpg?w=640",
        heading:" Malaika Arora on finding balance through yoga: Inhale serenity and exhale chaos",
        description:"Malaika Arora never ceases to amaze us with her dedication to fitness. Despite her busy schedule, she is committed to her fitness and is often seen encouraging her fans as well to stay on top of their fitness game. She is also fond of yoga and regularly posts videos of herself engaging in the practice. Recently, Malaika shared a post on Instagram motivating her followers to find their balance through practising yoga regularly.",
        cat:"Fitness"
    },
    {
        id:'65',
        image:"https://images.indianexpress.com/2023/08/ananya-panday-1200-1.jpg?w=640",
        heading:"Style alert: Ananya Panday turns into Dream Girl for film promotions",
        description:"For all the Gen-Z out there, Ananya Panday’s wardrobe serves as the perfect source of inspiration. Whether it’s her stylish monotone ensembles or graceful traditional outfits, the actor undeniably excels at expressing herself through her fashion choices. As the promotions for Ananya’s upcoming movie, Dream Girl 2, unfold, we are being treated to yet another stunning display of her sartorial prowess.",
        cat:"Fitness"
    },
    {
        id:'66',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/2/3/0/hmm_pumpkin-rice-pudding_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539244103.jpeg",
        heading:"Rice Pudding, Lightened Up",
        description:" I was never a rice pudding fan until a few years ago when my middle daughter starting requesting it daily. Since then I’ve been experimenting with a few variations of this classic to help lighten up the creamy calories while still maintaining its delicious flavor.",
        cat:"Food"
    },
    {
        id:'67',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/CN1B01_oven-baked-salmon_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382545141944.jpeg",
        heading:"122 Weeknight Dinners That Make It Easy to Eat Healthy",
        description:"We know that getting dinner on the table every night can be difficult: You need to have time, energy and a plan, not to mention a good recipe! And if you want that dinner to be nutritious, you might find this task to be even more burdensome — but we’re here to help. We rounded up over 100 of our very best healthy dinners that are perfect for weeknights. From low-carb meals to flavor-packed pastas, we have you covered. Don't worry about spending a lot of cash, either, as cheap healthy meals exist and they can be quite delicious. This salmon dinner couldn't be simpler. Season the fish with salt and pepper, then pop it in the oven to bake to perfection in 15 minutes. An easy-to-make parsley and almond salsa goes on top.",
        cat:"Food"
    },
    {
        id:'68',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/11/8/0/FN_Spaghetti-012_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382539775009.jpeg",
        heading:"17 Healthy Pasta Dinners to Satisfy Your Craving ",
        description:" ",
        cat:"Food"
    },
    {
        id:'69',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/4/26/0/HE_kwon-Ground-Turkey-Enchilada-Stir-Fry-with-Couscous_s4x3.jpg.rend.hgtvcom.966.725.suffix/1461695054811.jpeg",
        heading:"107 Healthy Dinners That Are Ready in 40 Minutes or Less ",
        description:"Inspired by Spanish garlic shrimp, this ultra-simple dish is cooked entirely in a rice cooker. It’s boosted with the smoky flavors of chorizo and paprika, then rounded out with crunchy red peppers and a bright squeeze of lemon at the end. Layering the cooked chorizo on the bottom of the rice cooker releases a bright orange oil that flavors the rice. And the steam helps soften the sausage in a way that other cooking methods do not. Jumbo shrimp work better than large shrimp for this recipe because they won't overcook.",
        cat:"Food"
    },
    {
        id:'70',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/08/19/WU3203-ree-drummond-crispy-everything-chicken-cutlets_4x3.jpg.rend.hgtvcom.966.725.suffix/1660928170362.jpeg",
        heading:"30-Minute Dinner Recipes That’ll Save Your Weeknights",
        description:"There’s no denying that getting a family-friendly dinner on the table can be tricky at the best of times, let alone on busy weeknights. But, we’re here to tell you that with the right recipes (easy dinners, preferably ones that don’t require much cleanup) it’s completely possible to get a home cooked meal on the table in a matter of minutes. Whether you’re craving chicken breast, a filet of salmon, thick-cut pork chops or something else, you’ll find exactly what you’re looking for here—starting with Ree’s super fun take on crispy chicken cutlets. She adds everything bagel seasoning (a savory mix of black and white sesame seeds, dried garlic and onion, sea salt and poppy seeds) to the breadcrumb coating to ensure that each bite is packed with flavor.",
        cat:" Food"
    },
    {
        id:'71',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/2/2/LS-Library_Hearty-Meat-Sauce_s4x3.jpg.rend.hgtvcom.966.725.suffix/1522720966329.jpeg",
        heading:"Our 50 Best Ground Beef Recipes",
        description:"Ground beef is one of those ingredients that we almost always have on hand. It adds a great meaty flavor to whatever you’re cooking, for a fraction of the price of steak. And, because the meat is ground up, you can easily stretch it (try adding beans, grains or chopped mushrooms) and feed more people. Best of all, ground beef is a key ingredient in so many of our favorite comfort foods and family-friendly dinners — so it’s one ingredient that we’ve always got a use for. Meatballs, stuffed peppers, sloppy Joes and more: a delicious meal is always within reach when you’ve got ground beef on hand. Take this simple, hearty meat sauce, for example. The beef is seasoned with dried herbs and simmered with canned tomatoes until the flavor meld to perfection. Served over cooked spaghetti it’s the perfect no-fuss meal from the pantry — that everyone will love.",
        cat:"Food"
    },
    {
        id:'72',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/10/26/0/FNK_Healthy-Juicy-Grilled-Cheeseburgers_s4x3.jpg.rend.hgtvcom.966.725.suffix/1371611669852.jpeg",
        heading:" Our Best Healthy Ground Beef Recipes",
        description:"Eating healthy doesn't have to mean skipping red meat. Here's how to enjoy burgers, meatloaf and more of your favorites without blowing your diet.If you think you need to skip beef entirely in order to reduce calories, think again. Food Network Kitchen’s Juicy Grilled Cheeseburgers take the guilt out of this summertime staple and weigh in at just under 400 calories per serving — roughly half of what you could expect from most fast-food options.",
        cat:"Food"
    },
    {
        id:'73',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/14/0/cc_hasselback-sp_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382541177866.jpeg",
        heading:"Our Best Healthy Sweet Potato Recipes",
        description:"Hasselback potatoes are whole potatoes that have been cut into a fan shape, dotted with butter, then roasted. The result is a crispy-on-the-outside, creamy-on-the-inside spud. The technique can be done with white or sweet potatoes. For a healthier potato side dish, go with sweet.",
        cat:"Food"
    },
    {
        id:'74',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/11/23/0/GISP01H_whiskey-glazed-sweet-potatoes_s4x3.jpg.rend.hgtvcom.966.725.suffix/1406107326020.jpeg",
        heading:"50 Sweet Potato Recipes You'll Swear By ",
        description:"The sweet potato is probably one of the most underrated ingredients in your kitchen. Not only is it healthy and chock-full of nutrients, it’s perfect for any meal of the day — and tastes great. That’s a win-win-win! (And, don't even get us started on how easy it is to grow sweet potatoes at home!) Whether you’re wondering how to bake sweet potatoes in the oven, want a few great ideas for stuffing your spuds full of toppings or just need some healthy sweet potato recipes, these ideas will help. Not sure where to start? We like Guy’s take; he adds a bit of whiskey to a mixture of sweet potatoes and apples for a super-flavorful fall side.",
        cat:"Food"
    },
    {
        id:'75',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/4/12/1/FNK_Sweet-Potato-Casserole_s4x3.jpg.rend.hgtvcom.966.725.suffix/1460503592924.jpeg",
        heading:"102 Classic Thanksgiving Side Dish Recipes",
        description:"We’re just going to come out and say it: the sides are the best part of the feast. We love a Thanksgiving turkey as much as anyone else but there’s nothing quite as satisfying as piling your plate high with an assortment of flavors. On turkey day that means tried-and-true classics (like green bean casserole, Thanksgiving stuffing and sweet-tart cranberry sauce), a cornucopia of vegetable side dishes and, of course, all the oh-so-hearty-and-satisfying side dishes starring potatoes and sweet potatoes. And, while we fully support making as many sides as possible for your Thanksgiving dinner, there’s one that’s an absolute must: this crowd-pleasing sweet potato casserole, sprinkled with a crunchy pecan topping!",
        cat:"Food"
    },
    {
        id:'76',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/10/0/Thanksgiving-2011_TU0209-cranberry-orange-sauce_s4x3.jpg.rend.hgtvcom.966.725.suffix/1384541150310.jpeg",
        heading:"42 Cranberry Sauce Recipes That Are Truly Special",
        description:" Whether you prefer it jellied and cut into slices, on the side as a chunky relish or something in between, it just isn’t Thanksgiving without cranberries on the table. And, as tempting as it is to simply open a can and wiggle that jiggly tube of premade cranberry sauce onto a serving plate, we’re here to tell you that it’s so worth it to make your own. Not only is cranberry sauce incredibly easy to whip up (you can even make it in the microwave!) but it will leave you with the absolute best leftovers. You can stir it into oatmeal for breakfast, spread it on bread for an upgraded turkey sandwich, spoon it over pan-fried pork chops — the possibilities are near endless.",
        cat:"Food"
    },
    {
        id:'77',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/fnk_the-best-stuffing_h_s4x3.jpg.rend.hgtvcom.966.725.suffix/1567523606249.jpeg",
        heading:"85 Thanksgiving Stuffing Recipes That Are Full of Flavor",
        description:"Obviously you’ll include stuffing — or dressing — when you’re curating the perfect Thanksgiving menu. But deciding which stuffing to serve with your turkey might be a bit challenging; there are so many great versions to choose from! Are you craving a gluten-free stuffing, a side filled with sausage or a vegan crowd-pleaser? There's something for everyone in our best stuffing recipe. It's filled with satisfying ingredients like sausage and mushrooms, plus classic Thanksgiving flavors like onion, celery and lots of chopped herbs. It’s irresistible baked in a casserole dish and served alongside the turkey. And if you're lucky enough to have leftovers, we're sure you won't be disappointed.",
        cat:"Food"
    },
    {
        id:'78',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/10/10/0/FN_Thanksgiving-Stuffing-Stock-476655851_s4x3.jpg.rend.hgtvcom.966.725.suffix/1507665407724.jpeg",
        heading:"Stuffing Do's and Don'ts",
        description:"The problem with stuffing a turkey is twofold: One: It often yields a soggy mass of unappealing mush. Two: It is really hard to get it up to 165 degrees F, the temperature at which the USDA says it is safe to eat. (Basically, if you do it right, you will end up overcooking your turkey.)If you simply cannot resist stuffing the turkey, follow these guidelines: Prepare the stuffing at the very last minute and stuff the bird loosely (don't pack it) just before it goes into the oven. Letting it sit around leaves too much opportunity for bacteria to breed. Be sure that the stuffing — not just the turkey — cooks to at least 165 degrees F.",
        cat:"Food"
    },
    {
        id:'79',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/4/1/FNM_110113-Oyster-Dressing-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814928217.jpeg",
        heading:"What's the Difference Between Stuffing and Dressing?",
        description:"In many homes, the words stuffing and dressing are used interchangeably to reference that steamy mixture of bread, veggies and herbs that takes second seat next to the turkey at your Thanksgiving table. Though for some, the loyalty to either stuffing or dressing over the other runs deep. But is there really a difference between stuffing and dressing? Which elements of the dishes dictate their classification as one and not the other? How should you cook the stuffing or dressing to ensure that it’s served piping hot and moist and has a subtle, crisp top? We have the answers, plus four foolproof recipes that will steal the side dish show at your Thanksgiving dinner.",
        cat:"Food"
    },
    {
        id:'80',
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/11/11/0/fnk_tg-fruit-salad-h-0317_s4x3.jpg.rend.hgtvcom.616.462.suffix/1573495955293.jpeg",
        heading:"Chill Out with These Cold Thanksgiving Sides ",
        description:"Adding a few cold side dishes to your menu should be part of your Thanksgiving prep game plan. Many of these dishes don't require a stove, which will simplify the kitchen logistics, and the ones that do — for, say, roasting veggies or making a stovetop cranberry sauce — can be prepped ahead of the big day, which will greatly reduce your stress on Thanksgiving. Turning to cold sides is also a way to incorporate a variety of vibrant veggies and lighter seasonal sides in the mix. It's all about balance, right? ",
        cat:"Food"
    },
    {
        id:'81',
        image:"https://assets.telegraphindia.com/telegraph/2023/Aug/1691758996_khanti-damodaar-seth-1-1.jpg",
        heading:"Ilish, the queen of fish, takes centre stage at Kolkata restaurants",
        description:"The monsoon has brought a treat for fish lovers — the beloved ilish is making waves in Kolkata’s restaurants, and creating a festival of flavours. Following our first article on the ilish festivals at well-known Bengali food stops, we’re back with a fresh batch of restaurants offering special Hilsa menus. It’s a feast you won’t want to miss! ",
        cat:"Food"
    },
    {
        id:'82',
        
        image:"https://assets.telegraphindia.com/telegraph/2023/Aug/1691842046_lead.jpg",
        heading:"Dig into ilish, prawn, mutton khichuri at Kewpie’s ‘Khichurir Utshob’ ",
        description:"A gloomy sky, and a threat of rain, is all Bengalis need to turn their thoughts towards the sumptuous and simple meal of khichuri. Simmering on the stove, filling the air with aroma — khichuri day at home is forever awaited. Khichuri is a symphony of simple flavours and spices that warms you from within, and hence its popularity on cold, wet days.",
        cat:"Food"
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