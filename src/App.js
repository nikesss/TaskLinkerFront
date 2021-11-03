import './App.css';
import axios from 'axios';
import ArticleList from './ArticleList';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NavBar from './NavBar';
import { useEffect } from 'react';
import React from 'react';
import Article from './Article';


function App() {
  const [articles, setArticles] = React.useState([]);
  function LoadArticles(uri){
    axios.get(uri)
      .then(res => {
        const bd = res.data;
        setArticles(bd)
        console.log(bd);
      });
  }
  function onLoadByArticle(typeSearch,atributeSearch){
    LoadArticles(`http://localhost:5000/search/${typeSearch}/${atributeSearch}`)
  }
  useEffect(()=>{
    LoadArticles("http://localhost:5000/show")
  },[])

  return (
    <>
    <NavBar search={onLoadByArticle} load={LoadArticles}/>
      <Switch>
        <Route path="/" exact><div className="article-items"><ArticleList articles={articles}/></div></Route>
        <Route path="/article/:id" exact><Article articles={articles}/></Route>
      </Switch>
      </>
    

    
  );
}

export default App;
