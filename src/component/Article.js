import React from 'react';
import { useParams } from 'react-router';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

function Article({articles}) {
    const { id } = useParams();
    const currentArticles = articles.find((item)=>item.id==id);

    return (
        <>{currentArticles &&<div className="article">
            <NavLink to="/" 
                     key={articles.id} 
                     className="btn-back">
                Back
            </NavLink>
            <h1 className="titel-article">{currentArticles.titleArticle}</h1>
            <p className="date-article">{moment(currentArticles.dateArticle).format('L')}</p>
            <div className="text-article">{currentArticles.textArticle}</div>
            </div>
        }</>    
    )
}
    
export default Article;