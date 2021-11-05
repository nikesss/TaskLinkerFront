import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function NavBar({search,
                 load,
                 paginate,
                 curentPage,
                 totalPerPage}){

    const [intoValue,setIntoValue] = React.useState('');
    return(
        <nav>
            <div className="navbar">
                <div>
                    <input type="text"
                            value={intoValue}                            
                           onChange={(e)=>setIntoValue(e.target.value)}/>
                </div>
                <ul>
                    <li onClick={()=>{search("byarticle",intoValue , curentPage, totalPerPage); paginate(1);}}>
                        <NavLink to="/">Search by article</NavLink>
                    </li>
                    <li onClick={()=>{search("pullenti", intoValue, curentPage, totalPerPage); paginate(1);}}>
                        <NavLink to="/">Search by entitis</NavLink>
                    </li>
                    <li onClick={()=>{load("http://localhost:5000/show"); paginate(1)}}>
                        <NavLink to="/">Show news</NavLink>
                    </li>
                    <li onClick={()=>{axios.get("http://localhost:5000/parse");
                                      alert("Parse is starting")}}>
                        Start parse
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;