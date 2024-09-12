import Navigation from "../Components/Navigation"
import "../Stylesheet/YTshorts.css"
import Video from "../Images/youtubevideoplayback.mp4"
import Toggle from "../Components/Togglebar"
// import { AiFillLike } from "react-icons/ai";
// import { AiFillDislike } from "react-icons/ai";
// import { MdMessage } from "react-icons/md";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { HiOutlineDotsVertical } from "react-icons/hi";

function Shorts() {
    return (<div className="Shorts">
        <Navigation />
        <Toggle />

        <div className="videoDivider" style={{ position: "fixed", top: "70px", left: "100px" }}>
            <video controls autoPlay muted style={{ marginLeft: "400px" }}>
                <source src={Video} type="video/mp4" />
            </video>
        </div>

    </div>)

}

export default Shorts