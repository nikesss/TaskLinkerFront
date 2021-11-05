import React from 'react';
import { Link } from 'react-router-dom';
import Pogination from './Pogination';

function ArticleList({articles,
                      totalArticles,
                      articlesPerPage,
                      curentPage,
                      paginate}) {
  
      return (
        <>
        {
          articles && articles?.map(article => 
            <Link to={`/article/${article.id}`} 
                  key={article.id + article.urlArticle} 
                  className="item-article">{article.titleArticle}
            </Link>)
        }
        <Pogination articlesPerPage={articlesPerPage}
                    totalArticles = {totalArticles}
                    curentPaginate = {curentPage}
                    paginate = {paginate}/>
        </>    
    )
}

export default ArticleList;