import React from 'react';
import { Link } from 'react-router-dom';
import Pogination from './Pogination';

function ArticleList({articles,
                      curentArticles,
                      articlesPerPage,
                      curentPage,
                      paginate,
                      loadArticles,
                      typeSearch,
                      atributeSearch}) {
  
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
                    totalArticles = {curentArticles}
                    curentPaginate = {curentPage}
                    paginate = {paginate}
                    atributeSearch = {atributeSearch}
                    typeSearch={typeSearch} 
                    loadArticles ={loadArticles}/>
        </>    
    )
}

export default ArticleList;