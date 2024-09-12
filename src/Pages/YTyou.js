import Navigation from "../Components/Navigation"
import "../Stylesheet/YTyou.css"
import Toggle from "../Components/Togglebar"
import { MdOutlineSwitchAccount } from "react-icons/md";
import { FaGoogle } from "react-icons/fa6";
import comp from "../Images/computing.jpg"

import gameVid1 from "../Images/gameVid1.PNG"
import gameProf1 from "../Images/gameProf1.jpg"

import musicProf2 from "../Images/musicProf2.jpg"
import musicVid2 from "../Images/musicVid2.PNG"

import gadVid3 from "../Images/gadVid3.PNG"
import gadProf3 from "../Images/gadProf3.jpg"

import scifiProf2 from "../Images/scifiProf2.jpg"
import scifiVid2 from "../Images/scifiVid2.PNG"


const youVideos = [

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
        category: "Music",
        video: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
        videoImage: musicVid2,
        channelImage: musicProf2,
        channelHeader: "Luis Fonsi - Despacito ft. Daddy Yankee",
        channelTitle: "Luis Fonsi",
        timeParagraph: "8.5B views • 7 years ago",
    },
    {
        category: "Gadget",
        video: "https://www.youtube.com/watch?v=9UaYj13gPvk",
        videoImage: gadVid3,
        channelImage: gadProf3,
        channelHeader: "ROG Phone 8 Pro Edition Unboxing and Camera Test - ASMR",
        channelTitle: "Dr Debox",
        timeParagraph: "365K views • 5 months ago",
    },
    {
        category: "SciFI",
        video: "https://www.youtube.com/watch?v=yur9iOre95Y",
        videoImage: scifiVid2,
        channelImage: scifiProf2,
        channelHeader: "Epic Battle Sequences in Fantasy/Sci-Fi Films",
        channelTitle: "Universal Pictures",
        timeParagraph: "503K views • 2 months ago",
    },

]



export default function You() {
    return (<div className="You">
        <Navigation />
        <Toggle />

        <div className="GDIV">

            {/* First parent divider starts here */}
            <div className="TP1">

                <div className="TP1C1">
                    <img src={comp} alt="YoutubeLogo" className="ComImage" />
                </div>

                <div className="TP1C2">
                    <h1 className="Header1">Promise Eguh</h1>
                    <p className="youpara1">@promiseeguh4759 .  View channel</p>

                    <button className="YouB1">
                        <MdOutlineSwitchAccount style={{ color: "white" }} />
                        <p className="youpara2">Switch account</p>
                    </button>

                    <button className="YouB2">
                        <FaGoogle style={{ color: "white" }} />
                        <p className="youpara3">Google Account</p>
                    </button>

                </div>

            </div>
            {/* First parent divider ends here */}

            {/* Second parent divider starts here */}
            <div className="" style={{ display: "flex", marginTop: "30px"  }}>
                <p className="youpara4" style={{ color: "white", fontSize: "20px", marginLeft: "20px"  }}>History</p>
                <button className="youBT4" style={{ color: "white", fontSize: "17px", marginLeft: "920px", backgroundColor: "rgb(14, 13, 13)",   }}>View all</button>
            </div>
            {/* Second parent divider ends here */}


            <div className="YP1">
                {youVideos.map((youTUBE) => {
                    return (
                        <div className="videoTub1" style = {{margin: "10px"}}>
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


            {/* Footer divider starts here */}
            <div className="Footer">
                <h2 className="Footer-header">Your clips</h2>
                <p className="Footer-paragraph">Clips and share your favorite moments. Your list shows up here.</p>
            </div>
            {/* Footer divider ends here */}
        </div>

    </div>)

}