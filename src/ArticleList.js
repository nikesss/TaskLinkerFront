import React from 'react';
import { Link } from 'react-router-dom';

function ArticleList({articles}) {
  
      return (
        <>{articles && articles?.map(article => <Link to={`/article/${article.id}`} key={article.id + article.urlArticle}>{article.titleArticle}</Link>)}</>    
    )
}
    

  export default ArticleList;