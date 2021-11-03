import React from 'react';
import { useParams } from 'react-router';
import dateFormat, {masks} from 'dateformat';
import moment, {localStorage} from 'moment';

function Article({articles}) {
    const { id } = useParams();
    

    const currentArticles = articles.find((item)=>item.id==id);
    console.log(moment.locale('ru'));
    return (

        <>{currentArticles &&<div className="article">
            <h1 className="titel-article">{currentArticles.titleArticle}</h1>
            <p className="date-article">{moment(currentArticles.dateArticle).format('L')}</p>
            <div className="text-article">{currentArticles.textArticle}</div>
            </div>}</>    
    )
}
    

  export default Article;