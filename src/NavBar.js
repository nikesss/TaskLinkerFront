import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function NavBar({search,load}){

    const [inputOne, setInputOne] = React.useState('');
    
    return(
        <nav>
            <div className="navbar">
                <div><input type="text" value={inputOne} onChange={(e)=>setInputOne(e.target.value)}/></div>
                <ul>
                    <li onClick={()=>search("byarticle",inputOne)}><NavLink to="/">Search by article</NavLink></li>
                    <li onClick={()=>search("pullenti",inputOne)}><NavLink to="/">Search by entitis</NavLink>   </li>
                    <li onClick={()=>load("http://localhost:5000/show")}><NavLink to="/">Show news</NavLink></li>
                    <li onClick={()=>{axios.get("http://localhost:5000/parse");}}>Start parse</li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;