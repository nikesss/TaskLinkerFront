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
  const [totalArticles, setTotalArticles] = React.useState(0);
  const [curentPage,setCurentPage] = React.useState(1)
  const [articlesPerPage] = React.useState(7);
  const [typeSearch, setTypeSearch] = React.useState([]);
  const [atributeSearch, setAtributeSearch] = React.useState('');
  

  useEffect(()=>{
    LoadArticles("http://localhost:5000/show")
  },[]);

  function LoadArticles(url){
    axios.get(url)
      .then(res => {
        const bd = res.data.dbList;
        setArticles(bd);
        setTotalArticles(res.data.totalArticles);
      });
  }

  function onLoadByArticle(typeSearch,atributeSearch,curentPage,totalPerPage){
    if(atributeSearch)
      LoadArticles(`http://localhost:5000/search/${typeSearch}/${atributeSearch}/${curentPage}/${totalPerPage}/`);
  }

  const paginate = pageNumber => setCurentPage(pageNumber);

  return (
    <>
      <NavBar search={onLoadByArticle}
              curentPage={curentPage}
              totalPerPage={articlesPerPage}
              load={LoadArticles} 
              paginate={paginate}
              atributeSearch = {atributeSearch}
              setAtributeSearch ={setAtributeSearch}
              setTypeSearch={setTypeSearch}
              typeSearch={typeSearch}/>
      <Switch>
        <Route path="/" exact>
          <div className="article-items">
            <ArticleList articles={articles}
                         curentArticles = {totalArticles}
                         articlesPerPage={articlesPerPage}
                         curentPage={curentPage}
                         paginate={paginate}
                         atributeSearch = {atributeSearch}
                         setAtributeSearch ={setAtributeSearch}
                         typeSearch={typeSearch}
                         loadArticles={onLoadByArticle}/>
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
