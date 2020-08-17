import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list'

class App extends Component {

  state={
    news:JSON
  };

  render(){
  return (
    <div>
      <Header/>
      <NewsList news={this.state.news} birthday="September"/>
    </div>
  )
}
}

ReactDOM.render(<App/>, document.querySelector('#root'));