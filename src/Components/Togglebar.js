import "../Stylesheet/Togglebar.css"
import { CiSearch } from "react-icons/ci";
import { BiSolidMicrophone } from "react-icons/bi";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import computing from "../Images/computing.jpg";
import Cap from "../Images/Capture-removebg-preview (1).png"


export default function Toggle() {
    return (
        <div className="Togglebar">
            <div style={{ height: "70px", backgroundColor: "rgb(14, 13, 13)", borderRadius: "20px" }}><img src={Cap} alt="YoutubeLogo" className="HomeImg" /></div>
            <div><input type="text" placeholder="Search" className="Search" /></div>

            <div><button className="BT1">
                <CiSearch />
            </button></div>

            <div><button className="BT2">
                <BiSolidMicrophone style={{ fontSize: "27px", padding: "8px" }} />
            </button></div>

            <div><button className="BT3">
                <MdOutlineVideoCall  />
            </button></div>

            <div><button className="BT4">
                <IoIosNotificationsOutline />
            </button></div>

            <div><img src={computing} alt="YoutubeLogo" className="ComImg" /></div>
        </div>
    )
}