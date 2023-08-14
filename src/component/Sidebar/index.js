import React from "react";
import Logo from "../../assets/logo.png"
import {AiFillHome}from "react-icons/ai"
import {HiMiniInboxArrowDown} from "react-icons/hi2"
import {FaUsers, FaTasks} from "react-icons/fa"
import {BiLineChart} from "react-icons/bi"
import {IoIosSettings} from "react-icons/io"
import {FiLogOut} from "react-icons/fi"

export default function index(){
    const menu = [
       {name:"Dashboard",icon:<AiFillHome/>} ,
       {name:"Inbox",icon:<HiMiniInboxArrowDown/>} ,
       {name:"Employee",icon:<FaUsers/>} ,
       {name:"Project",icon:<FaTasks/>} ,
       {name:"Report",icon:<BiLineChart/>} ,
       {name:"Setting",icon:<IoIosSettings/>} ,
       {name:"Logout",icon:<FiLogOut/>} ,
    ]
    
    const mainMenu = menu.slice(0, 2);
    const organizationMenu = menu.slice(2,5)
    const otherMenu = menu.slice(5) // Selecting items at index 0 and 1
    
    return (
        <div className="h-screen border-r-2 border-gray-200 w-[260px] px-9 ">
            <div className="flex justify-center py-5">
                <img src={Logo} alt="Dasarata" className="w-[200px]"></img>
            </div>
            <div className="pt-5">
                <ul>
                    {
                        mainMenu.map((val, index) => {
                            return <li key={index}className="pb-3 px-3 flex items-center">
                                <div className="pr-3">{val.icon}</div>
                                <div>{val.name}</div></li>
                        })
                    }
                </ul>
            </div>
            <div className="pt-3 pb-5">Organization</div>
            <div>
                <ul>
                    {
                        organizationMenu.map((val, index) => {
                            return <li key={index}className="pb-3 flex items-center px-3">
                            <div className="pr-3">{val.icon}</div>
                            <div>{val.name}</div></li>
                        })
                    }
                </ul>
            </div>
            <div className="pt-3 pb-5">Other</div>
            <div>
                <ul>
                    {
                        otherMenu.map((val, index) => {
                            return <li key={index}className="pb-3 flex items-center px-3">
                            <div className="pr-3">{val.icon}</div>
                            <div>{val.name}</div></li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
