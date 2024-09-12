import { Link } from "react-router-dom"
import "../Stylesheet/Navigation.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";



function Navigation() {
    return (
        <div className="Navbar">
            <div className="NavbuttonDiv2">
                <nav>
                    <ul>
                        <RxHamburgerMenu className="HamBurger" style={{ color: "white", fontSize: "27px", padding: "10px", borderRadius: "70px", }} />
                        <li><Link to="/" style = {{marginTop: "10px"}}><MdHomeFilled style={{ color: "white", fontSize: "27px", padding: "10px", paddingTop: "17px", marginLeft: "13px", }} />Home</Link></li>
                        <li><Link to="/YTshorts"><SiYoutubeshorts style={{ color: "white", fontSize: "27px", padding: "10px", paddingTop: "17px", marginLeft: "13px" }} />Shorts</Link></li>
                        <li><Link to="/YTsubscribe"><MdOutlineSubscriptions style={{ color: "white", fontSize: "27px", padding: "10px", paddingTop: "17px", marginLeft: "13px" }} />Subscriptions</Link></li>
                        <li><Link to="/YTyou"><MdOutlineVideoLibrary style={{ color: "white", fontSize: "27px", padding: "10px", paddingTop: "17px", marginLeft: "13px" }} />You</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation

