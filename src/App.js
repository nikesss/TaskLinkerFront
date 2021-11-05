import './App.css';
import axios from 'axios';
import ArticleList from './component/ArticleList';
import { Switch,Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import { useEffect } from 'react';
import React from 'react';
import Article from './component/Article';


function App() {

  const [articles, setArticles] = React.useState([]);
  const [curentPage,setCurentPage] = React.useState(1)
  const [articlesPerPage] = React.useState(7);
  

  useEffect(()=>{
    LoadArticles("http://localhost:5000/show")
  },[]);

  function LoadArticles(url){
    axios.get(url)
      .then(res => {
        const bd = res.data;
        setArticles(bd);
        console.log(bd)
      });
  }

  function onLoadByArticle(typeSearch,atributeSearch){
    if(atributeSearch)
      LoadArticles(`http://localhost:5000/search/${typeSearch}/${atributeSearch}/`);
  }

  const lastArticleIndex = curentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const totalArticles = articles.slice(firstArticleIndex, lastArticleIndex)

  const paginate = pageNumber => setCurentPage(pageNumber);

  return (
    <>
      <NavBar search={onLoadByArticle}
              curentPage={curentPage}
              totalPerPage={articlesPerPage}
              load={LoadArticles} 
              paginate={paginate}/>
      <Switch>
        <Route path="/" exact>
          <div className="article-items">
            <ArticleList articles={totalArticles}
                         totalArticles = {articles.length}
                         articlesPerPage={articlesPerPage}
                         curentPage={curentPage}
                         paginate={paginate}/>
          </div>
        </Route>
        <Route path="/article/:id" exact>
          <Article articles={articles}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
