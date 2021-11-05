import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function NavBar({search,
                 load,
                 paginate,
                 curentPage,
                 totalPerPage,
                 typeSearch,
                 setTypeSearch,
                 setAtributeSearch,
                 atributeSearch}){
    function asd(){setTypeSearch("byarticle"); 
    paginate(1); 
    search(typeSearch, atributeSearch, curentPage, totalPerPage)}
    
    return(
        <nav>
            <div className="navbar">
                <div>
                    <input type="text"                            
                           onChange={(e)=>setAtributeSearch(e.target.value)}/>
                </div>
                <ul>
                    <li onClick={()=>{setTypeSearch("byarticle"); paginate(1); search("byarticle", atributeSearch, curentPage, totalPerPage)}}>
                        <NavLink to="/">Search by article</NavLink>
                    </li>
                    <li onClick={()=>{setTypeSearch("pullenti"); paginate(1); search("pullenti", atributeSearch, curentPage, totalPerPage)}}>
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