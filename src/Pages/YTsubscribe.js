import Navigation from "../Components/Navigation"
import "../Stylesheet/YTsubscribe.css"
import Toggle from "../Components/Togglebar"
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";


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

const subVideos = [

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

]


export default function Subscribe() {
    return (<div className="SubGP">
        <Navigation />
        <Toggle />

        <div className="Subscribe">
            <div className="subPT1" >
                <div className="PC1">
                    <p className="subPara3">Latest</p>
                </div>
                {/* <div className="PC2"> */}
                    <button className="subBT1" style={{ color: "white", fontSize: "25px", marginLeft: "980px", backgroundColor: "rgb(14, 13, 13)", border: "0px solid black",   }}><a href = "k" style={{ color: "rgb(75, 177, 245)", fontSize: "17px",  }}>Manage</a></button>
                    <BsFillGrid3X2GapFill style={{ color: "white", fontSize: "30px", marginLeft: "30px",  paddingTop: "5px" }}/>
                    <FaListUl style={{ color: "white", fontSize: "17px", marginLeft: "30px", paddingTop: "10px"}}/>
                {/* </div> */}
            </div>

            <div className="SP1">
                {subVideos.map((youTUBE) => {
                    return (
                        <div className="videoGroup1">
                            <a href={youTUBE.video}>
                                <img src={youTUBE.videoImage} alt="Welcome" className="IMG" />
                                <div className="lowerDiv">
                                    <div className="titleText">
                                        <img src={youTUBE.channelImage} alt="Welcome" className="IMGL" />
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

    </div>)

}