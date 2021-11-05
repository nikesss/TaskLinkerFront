import React from "react";
import { NavLink } from "react-router-dom";

const Pogination = ({articlesPerPage,totalArticles,paginate,curentPaginate})=>{

    const pageArticles = [];
    const totalPage = Math.ceil(totalArticles/articlesPerPage);
    
    let startPage,endPage;

    if (totalPage <= 10) {
        startPage = 1;
        endPage = totalPage;
    } else {
        if (curentPaginate <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (curentPaginate <= totalPage-4) {
            startPage = curentPaginate - 5;
            endPage = curentPaginate + 4;
        } else {
            startPage = totalPage - 9;
            endPage = totalPage;
        }
    }
    
    for(let i=startPage;i<=endPage;i++)
        pageArticles.push(i);
        console.log(pageArticles);
    if(totalArticles!=0){
        return(
            <div>
                <ul className="pagination-list">
                    <li className="pogination-number">
                        <NavLink to="/" 
                                 key={curentPaginate} 
                                 onClick={()=>paginate(1)}>{1}
                        </NavLink>
                    </li>
                    <li className="visaul-pogenation">...</li>
                    {pageArticles.map((number)=>(
                            <li key={number} className={
                                curentPaginate==number 
                                ? 'pogination-number selected'
                                : 'pogination-number'}>
                                <NavLink to="/" onClick={()=>{paginate(number)}}>
                                    {number}
                                </NavLink>
                            </li>
                    ))}
                    <li className="visaul-pogenation">...</li>
                    <li className="pogination-number">
                        <NavLink to="/" 
                        key={curentPaginate} 
                        onClick={()=>paginate(totalPage)}>
                            {totalPage}
                        </NavLink>
                    </li>
                </ul>
            </div>
            )
    }else{
        return (<></>)
    }
    
}


export default Pogination