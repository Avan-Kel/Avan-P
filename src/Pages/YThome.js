import Navigation from "../Components/Navigation";
import "../Stylesheet/YThome.css";
import Toggle from "../Components/Togglebar";
import { useState } from "react";

import thrillProf1 from "../Images/thrillProf1.jpg"
import thrillProf2 from "../Images/thrillProf2.jpg"
import thrillProf3 from "../Images/thrillProf3.jpg"
import thrillVid1 from "../Images/thrillVid1.PNG"
import thrillVid2 from "../Images/thrillVid2.PNG"
import thrillVid3 from "../Images/thrillVid3.PNG"

import gameProf1 from "../Images/gameProf1.jpg"
import gameProf2 from "../Images/gameProf2.jpg"
import gameProf3 from "../Images/gameProf3.jpg"
import gameVid1 from "../Images/gameVid1.PNG"
import gameVid2 from "../Images/gameVid2.PNG"
import gameVid3 from "../Images/gameVid3.PNG"

import musicProf1 from "../Images/musicProf1.jpg"
import musicProf2 from "../Images/musicProf2.jpg"
import musicProf3 from "../Images/musicProf3.jpg"
import musicVid1 from "../Images/musicVid1.PNG"
import musicVid2 from "../Images/musicVid2.PNG"
import musicVid3 from "../Images/musicVid3.PNG"

import gadProf1 from "../Images/gadProf1.jpg"
import gadProf2 from "../Images/gadProf2.jpg"
import gadProf3 from "../Images/gadProf3.jpg"
import gadVid1 from "../Images/gadVid1.PNG"
import gadVid2 from "../Images/gadVid2.PNG"
import gadVid3 from "../Images/gadVid3.PNG"

import luxProf1 from "../Images/luxProf1.jpg"
import luxProf2 from "../Images/luxProf2.jpg"
import luxProf3 from "../Images/luxProf3.jpg"
import luxVid1 from "../Images/luxVid1.PNG"
import luxVid2 from "../Images/luxVid2.PNG"
import luxVid3 from "../Images/luxVid3.PNG"

import newProf1 from "../Images/newProf1.jpg"
import newProf2 from "../Images/newProf2.jpg"
import newProf3 from "../Images/newProf3.jpg"
import newVid1 from "../Images/newVid1.PNG"
import newVid2 from "../Images/newVid2.PNG"
import newVid3 from "../Images/newVid3.PNG"

import samProf1 from "../Images/samProf1.jpg"
import samProf2 from "../Images/samProf2.jpg"
import samProf3 from "../Images/samProf3.jpg"
import samVid1 from "../Images/samVid1.PNG"
import samVid2 from "../Images/samVid2.PNG"
import samVid3 from "../Images/samVid3.PNG"

import archProf1 from "../Images/archProf1.jpg"
import archProf2 from "../Images/archProf2.jpg"
import archProf3 from "../Images/archProf3.jpg"
import archVid1 from "../Images/archVid1.PNG"
import archVid2 from "../Images/archVid2.PNG"
import archVid3 from "../Images/archVid3.PNG"

import scifiProf1 from "../Images/scifiProf1.jpg"
import scifiProf2 from "../Images/scifiProf2.jpg"
import scifiProf3 from "../Images/scifiProf3.jpg"
import scifiVid1 from "../Images/scifiVid1.PNG"
import scifiVid2 from "../Images/scifiVid2.PNG"
import scifiVid3 from "../Images/scifiVid3.PNG"

import testdProf1 from "../Images/testdProf1.jpg"
import testdProf2 from "../Images/testdProf2.jpg"
import testdProf3 from "../Images/testdProf3.jpg"
import testdVid1 from "../Images/testdVid1.PNG"
import testdVid2 from "../Images/testdVid2.PNG"
import testdVid3 from "../Images/testdVid3.PNG"



const homeVideos = [
    // Thriller video category
    {
        category: "Thriller",
        video: "https://www.youtube.com/watch?v=4y0QYBJcqcU",
        videoImage: thrillVid1,
        channelImage: thrillProf1,
        channelHeader: "Martial Universe 2 Nine Talisman Tower | Chinese Fantasy Action film, Full Movie HD",
        channelTitle: "Q1Q2 Movie Channel Official 圈影圈外官方电影频道",
        timeParagraph: "4.3M views • 1 year ago",
    },
    {
        category: "Thriller",
        video: "https://www.youtube.com/watch?v=sBBQIV-jy6M",
        videoImage: thrillVid2,
        channelImage: thrillProf2,
        channelHeader: "The Poetic Warrior | Chinese Historical War Action film, Full Movie HD",
        channelTitle: "Moxi Action Movies English",
        timeParagraph: "2.2M views • 1 year ago",
    },
    {
        category: "Thriller",
        video: "https://www.youtube.com/watch?v=7PGqjEQ7g8Y",
        videoImage: thrillVid3,
        channelImage: thrillProf3,
        channelHeader: "THE CHRONICLE OF KINGS - English Movie | Jackie Chan, Donnie Yen |Hit Action Adventure English Movie",
        channelTitle: "Hollywood Action",
        timeParagraph: "2.6M views • 4 months ago",
    },

    // Gaming video category
    {
        category: "Gaming",
        video: "https://www.youtube.com/watch?v=RJUxtXvmtTI",
        videoImage: gameVid1,
        channelImage: gameProf1,
        channelHeader: "I'M BACKKKK!! New Season + Rank Reset",
        channelTitle: "Aerith LIVE",
        timeParagraph: "8.3K views • Streamed 1 day ago",
    },
    {
        category: "Gaming",
        video: "https://www.youtube.com/watch?v=wgj-7ga7u1A",
        videoImage: gameVid2,
        channelImage: gameProf2,
        channelHeader: "MORTAL KOMBAT 1 Story All Cutscenes Full Movie 2023 [4K 60FPS] MK1",
        channelTitle: "MKIceAndFire",
        timeParagraph: "8.6M views • 11 months ago",
    },
    {
        category: "Gaming",
        video: "https://www.youtube.com/watch?v=CT0UQlRwM1A",
        videoImage: gameVid3,
        channelImage: gameProf3,
        channelHeader: "BLACK OPS 6 EARLY ACCESS DOMINATION - STREAM VOD",
        channelTitle: "TimTheTatman VODs",
        timeParagraph: "4.8K views • 10 hours ago",
    },

    // Third video category
    {
        category: "Music",
        video: "https://www.youtube.com/watch?v=OjHAOvR8kps",
        videoImage: musicVid1,
        channelImage: musicProf1,
        channelHeader: "Doja Cat - I Don't Do Drugs (Visualizer) ft. Ariana Grande",
        channelTitle: "Doja Cat",
        timeParagraph: "27M views • 3 years ago",
    },
    {
        category: "Music",
        video: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
        videoImage: musicVid2,
        channelImage: musicProf2,
        channelHeader: "Luis Fonsi - Despacito ft. Daddy Yankee",
        channelTitle: "Luis Fonsi",
        timeParagraph: "8.5B views • 7 years ago",
    },
    {
        category: "Music",
        video: "https://www.youtube.com/watch?v=tcYodQoapMg",
        videoImage: musicVid3,
        channelImage: musicProf3,
        channelHeader: "Ariana Grande - positions (official video)",
        channelTitle: "Ariana Grande",
        timeParagraph: "596M views • 3 years ago",
    },

    // Gadget video category:
    {
        category: "Gadgets",
        video: "https://www.youtube.com/watch?v=Ax9a_X2uE6g",
        videoImage: gadVid1,
        channelImage: gadProf1,
        channelHeader: "Unboxing Samsung's HUGE New 8K Flagship TV",
        channelTitle: "Unbox Therapy",
        timeParagraph: "842K views • 5 days ago",
    },
    {
        category: "Gadgets",
        video: "https://www.youtube.com/watch?v=UpzCuKkveTI",
        videoImage: gadVid2,
        channelImage: gadProf2,
        channelHeader: "15 AMAZING INVENTIONS THAT WILL CHANGE YOUR LIFE",
        channelTitle: "FuturisticTech",
        timeParagraph: "1.5M views • 6 months ago",
    },
    {
        category: "Gadgets",
        video: "https://www.youtube.com/watch?v=9UaYj13gPvk",
        videoImage: gadVid3,
        channelImage: gadProf3,
        channelHeader: "ROG Phone 8 Pro Edition Unboxing and Camera Test - ASMR",
        channelTitle: "Dr Debox",
        timeParagraph: "365K views • 5 months ago",
    },

    // Sci-FI video category
    {
        category: "SciFi",
        video: "https://www.youtube.com/watch?v=zWTbLZCR84k",
        videoImage: scifiVid1,
        channelImage: scifiProf1,
        channelHeader: "Faora-Ul vs Kal-El | Man of Steel",
        channelTitle: "Flashback FM",
        timeParagraph: "53M views • 8 years ago",
    },
    {
        category: "SciFi",
        video: "https://www.youtube.com/watch?v=yur9iOre95Y",
        videoImage: scifiVid2,
        channelImage: scifiProf2,
        channelHeader: "Epic Battle Sequences in Fantasy/Sci-Fi Films",
        channelTitle: "Universal Pictures",
        timeParagraph: "503K views • 2 months ago",
    },
    {
        category: "SciFi",
        video: "https://www.youtube.com/watch?v=HIPwK-0b8xU",
        videoImage: scifiVid3,
        channelImage: scifiProf3,
        channelHeader: "Godzilla - International Trailer - Official Warner Bros.",
        channelTitle: "Warner Bros. UK & Ireland",
        timeParagraph: "1.6M views • 10 years ago",
    },

    // Luxury Vehicles video category
    {
        category: "Luxurycars",
        video: "https://www.youtube.com/watch?v=n8tW3UVw6WM",
        videoImage: luxVid1,
        channelImage: luxProf1,
        channelHeader: "Bugatti Chiron SS v 1,800hp Lambo Huracan: DRAG RACE",
        channelTitle: "carwow",
        timeParagraph: "5.8M views • 9 months ago",
    },
    {
        category: "Luxurycars",
        video: "https://www.youtube.com/watch?v=sQVz0yeyqfM",
        videoImage: luxVid2,
        channelImage: luxProf2,
        channelHeader: "2024 Range Rover Sport Price Review | Cost of Ownership | Autobiography | Features | Practicality",
        channelTitle: "MrHowMuch",
        timeParagraph: "181K views 1 month ago",
    },
    {
        category: "Luxurycars",
        video: "https://www.youtube.com/watch?v=o2fRJFfzhXc",
        videoImage: luxVid3,
        channelImage: luxProf3,
        channelHeader: "2024 Ford F-150 Shelby Raptor - Ultra Luxury Wild Truck!",
        channelTitle: "MEDCARS",
        timeParagraph: "390K views 2 months ago",
    },

    // Test Drive video category
    {
        category: "Testdrive",
        video: "https://www.youtube.com/watch?v=33pPVde3WQw",
        videoImage: testdVid1,
        channelImage: testdProf1,
        channelHeader: "Ford Raptor v GR Toyota Hilux v VW Amarok: DRAG RACE",
        channelTitle: "carwow",
        timeParagraph: "2.4M views 1 year ago",
    },
    {
        category: "Testdrive",
        video: "https://www.youtube.com/watch?v=C1TrEbg00BU",
        videoImage: testdVid2,
        channelImage: testdProf2,
        channelHeader: "2024 Ford F-150 Raptor R - Screaming 720hp V8 Truck Morning Commute",
        channelTitle: "TopherDrives",
        timeParagraph: "55K views 7 days ago",
    },
    {
        category: "Testdrive",
        video: "https://www.youtube.com/watch?v=CWszVwY0BPQ",
        videoImage: testdVid3,
        channelImage: testdProf3,
        channelHeader: "2024 Lexus LX 600 -- An Unstoppable $113,000 Luxury TANK!",
        channelTitle: "Car Confections",
        timeParagraph: "45K views 2 weeks ago",
    },

    // Architecture video category
    {
        category: "Architecture",
        video: "https://www.youtube.com/watch?v=1npTHjKbwnE",
        videoImage: archVid1,
        channelImage: archProf1,
        channelHeader: "Revitalizing a Cape Town Home: ARRCC's Transformation | ARCHITECTURE HUNTER",
        channelTitle: "Architecture Hunter",
        timeParagraph: "88K views 1 month ago",
    },
    {
        category: "Architecture",
        video: "https://www.youtube.com/watch?v=vglO_1boX2M",
        videoImage: archVid2,
        channelImage: archProf2,
        channelHeader: "Inside a $251K - 5 Bedroom Duplex in Lekki (With Gym, Swimming pool & Open Terrace)",
        channelTitle: "Precious Afinni",
        timeParagraph: "4.5K views 7 days ago",
    },
    {
        category: "Architecture",
        video: "https://www.youtube.com/watch?v=yadvK9wiJE4",
        videoImage: archVid3,
        channelImage: archProf3,
        channelHeader: "100 Most Beautiful Places to Visit in China",
        channelTitle: "My Unreal Planet TV",
        timeParagraph: "479K views 2 months ago",
    },

    // Samsung video category
    {
        category: "Samsung",
        video: "https://www.youtube.com/watch?v=f2saSx301b0",
        videoImage: samVid1,
        channelImage: samProf1,
        channelHeader: "Samsung Galaxy Z Fold 6 | Tips, Tricks & Best Features",
        channelTitle: "Tech Spurt",
        timeParagraph: "103K views 1 month ago",
    },
    {
        category: "Samsung",
        video: "https://www.youtube.com/watch?v=t3-jSn99eB0",
        videoImage: samVid2,
        channelImage: samProf2,
        channelHeader: "iPhone 15 Pro Max Vs Samsung Galaxy S24 Ultra Unboxing and Camera Test - ASMR",
        channelTitle: "Dr Debox",
        timeParagraph: "1.6M views 5 months ago",
    },
    {
        category: "Samsung",
        video: "https://www.youtube.com/watch?v=hUoa01qTLLo",
        videoImage: samVid3,
        channelImage: samProf3,
        channelHeader: "Galaxy S25 Ultra - Samsung is Creating a Masterpiece",
        channelTitle: "Discover of Tech",
        timeParagraph: "4.7K views 5 days ago",
    },

    // New To You video category
    {
        category: "Newtoyou",
        video: "https://www.youtube.com/watch?v=OMUfmlPs_w4",
        videoImage: newVid1,
        channelImage: newProf1,
        channelHeader: "Inside The World’s Most Secret House Built Into a Mountain (House Tour)",
        channelTitle: "The Local Project",
        timeParagraph: "1.2M views 4 weeks ago",
    },
    {
        category: "Newtoyou",
        video: "https://www.youtube.com/watch?v=R7jjcxgkt9o",
        videoImage: newVid2,
        channelImage: newProf2,
        channelHeader: "Immaculate Mansion in the SKY with Private Pool | LUXURY HOME TOUR",
        channelTitle: "Luxury TV",
        timeParagraph: "998K views 1 year ago",
    },
    {
        category: "Newtoyou",
        video: "https://www.youtube.com/watch?v=CnGk-xjv5vg",
        videoImage: newVid3,
        channelImage: newProf3,
        channelHeader: "Pro Pilot vs. Beginner | CINEMATIC FPV BATTLE!",
        channelTitle: "Niklas Christl",
        timeParagraph: "2.5M views 3 years ago",
    },
];


let Thriller = homeVideos.filter((word) => {
    return word.category === "Thriller";
});
let Gaming = homeVideos.filter((word) => {
    return word.category === "Gaming";
});
let Music = homeVideos.filter((word) => {
    return word.category === "Music";
});
let Gadgetary = homeVideos.filter((word) => {
    return word.category === "Gadgets";
});
let SciFi = homeVideos.filter((word) => {
    return word.category === "SciFi";
});
let Luxurycars = homeVideos.filter((word) => {
    return word.category === "Luxurycars";
});
let Testdrive = homeVideos.filter((word) => {
    return word.category === "Testdrive";
});
let Architecture = homeVideos.filter((word) => {
    return word.category === "Architecture";
});
let Samsung = homeVideos.filter((word) => {
    return word.category === "Samsung";
});
let Newtoyou = homeVideos.filter((word) => {
    return word.category === "Newtoyou";
});


function Home() {
    const [thriller2, setThriller] = useState(true);
    const [gaming2, setGaming] = useState(true);
    const [music2, setMusic] = useState(true);
    const [gadgets2, setGadgets] = useState(true);
    const [scifi2, setScifi] = useState(true);
    const [luxurycars2, setLuxuryCars] = useState(true);
    const [testdrive2, setTestDrive] = useState(true);
    const [architecture2, setArchitecture] = useState(true);
    const [samsung2, setSamsung] = useState(true);
    const [newtoyou2, setNewToYou] = useState(true);


    return (
        <div style={{ position: "relative" }}>
            <Navigation />
            <Toggle />

            <div className="buttonDiv" style={{ position: "fixed", top: "70px", left: "100px" }}>
                <button
                    className="toggleButton"
                    id="all"
                    style={{ backgroundColor: "rgb(61, 60, 60)"}}
                    onClick={() => {
                        setThriller(true);
                        setGaming(true);
                        setMusic(true);
                        setGadgets(true);
                        setScifi(true);
                        setLuxuryCars(true);
                        setTestDrive(true);
                        setArchitecture(true);
                        setSamsung(true);
                        setNewToYou(true);
                    }}
                >
                    All
                </button>

                <button
                    id="thriller"
                    className="toggleButton"
                    onClick={() => {
                        setThriller(true);
                        setGaming(false);
                        setMusic(false);
                        setGadgets(false);
                        setScifi(false);
                        setLuxuryCars(false);
                        setTestDrive(false);
                        setArchitecture(false);
                        setSamsung(false);
                        setNewToYou(false);
                    }}
                >
                    Thriller
                </button>

                <button
                    id="gaming"
                    className="toggleButton"
                    onClick={() => {
                        setThriller(false);
                        setGaming(true);
                        setMusic(false);
                        setGadgets(false);
                        setScifi(false);
                        setLuxuryCars(false);
                        setTestDrive(false);
                        setArchitecture(false);
                        setSamsung(false);
                        setNewToYou(false);
                    }}
                >
                    Gaming
                </button>

                <button
                    id="music"
                    className="toggleButton"
                    onClick={() => {
                        setThriller(false);
                        setGaming(false);
                        setMusic(true);
                        setGadgets(false);
                        setScifi(false);
                        setLuxuryCars(false);
                        setTestDrive(false);
                        setArchitecture(false);
                        setSamsung(false);
                        setNewToYou(false);
                    }}
                >
                    Music
                </button>


                <button
                    id="gadgets"
                    className="toggleButton"
                    onClick={() => {
                        setThriller(false);
                        setGaming(false);
                        setMusic(false);
                        setGadgets(true);
                        setScifi(false);
                        setLuxuryCars(false);
                        setTestDrive(false);
                        setArchitecture(false);
                        setSamsung(false);
                        setNewToYou(false);
                    }}
                >
                    Gadgets
                </button>

                <button
                    id="scifi"
                    className="toggleButton"
                    onClick={() => {
                        setThriller(false);
                        setGaming(false);
                        setMusic(false);
                        setGadgets(false);
                        setScifi(true);
                        setLuxuryCars(false);
                        setTestDrive(false);
                        setArchitecture(false);
                        setSamsung(false);
                        setNewToYou(false);
                    }}
                >
                    SciFi
                </button>

                <button
                    id="luxurycars"
                    className="toggleButton"
                    onClick={() => {
                        setThriller(false);
                        setGaming(false);
                        setMusic(false);
                        setGadgets(false);
                        setScifi(false);
                        setLuxuryCars(true);
                        setTestDrive(false);
                        setArchitecture(false);
                        setSamsung(false);
                        setNewToYou(false);
                    }}
                >
                    Luxury Cars
                </button>

                <button
                    id="testdrive"
                    className="toggleButton"
                    onClick={() => {
                        setThriller(false);
                        setGaming(false);
                        setMusic(false);
                        setGadgets(false);
                        setScifi(false);
                        setLuxuryCars(false);
                        setTestDrive(true);
                        setArchitecture(false);
                        setSamsung(false);
                        setNewToYou(false);
                    }}
                >
                    Test Drive
                </button>

                <button
                    id="architecture"
                    className="toggleButton"
                    onClick={() => {
                        setThriller(false);
                        setGaming(false);
                        setMusic(false);
                        setGadgets(false);
                        setScifi(false);
                        setLuxuryCars(false);
                        setTestDrive(false);
                        setArchitecture(true);
                        setSamsung(false);
                        setNewToYou(false);
                    }}
                >
                    Architecture
                </button>

                <button
                    id="samsung"
                    className="toggleButton"
                    onClick={() => {
                        setThriller(false);
                        setGaming(false);
                        setMusic(false);
                        setGadgets(false);
                        setScifi(false);
                        setLuxuryCars(false);
                        setTestDrive(false);
                        setArchitecture(false);
                        setSamsung(true);
                        setNewToYou(false);
                    }}
                >
                    Samsung
                </button>

                <button
                    id="newtoyou"
                    className="toggleButton"
                    onClick={() => {
                        setThriller(false);
                        setGaming(false);
                        setMusic(false);
                        setGadgets(false);
                        setScifi(false);
                        setLuxuryCars(false);
                        setTestDrive(false);
                        setArchitecture(false);
                        setSamsung(false);
                        setNewToYou(true);
                    }}
                >
                    New To You
                </button>
            </div>


            <div className="HP1">
                {thriller2 && Thriller.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="thrillerVideo" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="thrillerProfile" className="IMGL" />
                                    </div>
                                    <div className="headerText">
                                        <h2 className="imgTitle">{youTUBE.channelHeader}</h2>
                                        <p>{youTUBE.channelTitle}</p>
                                        <p>{youTUBE.timeParagraph}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

                {gaming2 && Gaming.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="gamingVideo" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="gamingProfile" className="IMGL" />
                                    </div>
                                    <div className="headerText">
                                        <h2 className="imgTitle">{youTUBE.channelHeader}</h2>
                                        <p>{youTUBE.channelTitle}</p>
                                        <p>{youTUBE.timeParagraph}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

                {music2 && Music.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="musicVideo" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="musicProfile" className="IMGL" />
                                    </div>
                                    <div className="headerText">
                                        <h2 className="imgTitle">{youTUBE.channelHeader}</h2>
                                        <p>{youTUBE.channelTitle}</p>
                                        <p>{youTUBE.timeParagraph}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

                {gadgets2 && Gadgetary.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="scifiVideo" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="scifiProfile" className="IMGL" />
                                    </div>
                                    <div className="headerText">
                                        <h2 className="imgTitle">{youTUBE.channelHeader}</h2>
                                        <p>{youTUBE.channelTitle}</p>
                                        <p>{youTUBE.timeParagraph}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

                {scifi2 && SciFi.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="scifiVideo" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="scifiProfile" className="IMGL" />
                                    </div>
                                    <div className="headerText">
                                        <h2 className="imgTitle">{youTUBE.channelHeader}</h2>
                                        <p>{youTUBE.channelTitle}</p>
                                        <p>{youTUBE.timeParagraph}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

                {luxurycars2 && Luxurycars.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="luxVideo" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="luxProfile" className="IMGL" />
                                    </div>
                                    <div className="headerText">
                                        <h2 className="imgTitle">{youTUBE.channelHeader}</h2>
                                        <p>{youTUBE.channelTitle}</p>
                                        <p>{youTUBE.timeParagraph}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

                {testdrive2 && Testdrive.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="testVideo" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="testProfile" className="IMGL" />
                                    </div>
                                    <div className="headerText">
                                        <h2 className="imgTitle">{youTUBE.channelHeader}</h2>
                                        <p>{youTUBE.channelTitle}</p>
                                        <p>{youTUBE.timeParagraph}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

                {architecture2 && Architecture.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="archVideo" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="archProfile" className="IMGL" />
                                    </div>
                                    <div className="headerText">
                                        <h2 className="imgTitle">{youTUBE.channelHeader}</h2>
                                        <p>{youTUBE.channelTitle}</p>
                                        <p>{youTUBE.timeParagraph}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

                {samsung2 && Samsung.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="samVideo" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="samProfile" className="IMGL" />
                                    </div>
                                    <div className="headerText">
                                        <h2 className="imgTitle">{youTUBE.channelHeader}</h2>
                                        <p>{youTUBE.channelTitle}</p>
                                        <p>{youTUBE.timeParagraph}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

                {newtoyou2 && Newtoyou.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="newVideo" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="newProfile" className="IMGL" />
                                    </div>
                                    <div className="headerText">
                                        <h2 className="imgTitle">{youTUBE.channelHeader}</h2>
                                        <p>{youTUBE.channelTitle}</p>
                                        <p>{youTUBE.timeParagraph}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default Home;
