import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list'

class App extends Component {

  state={
    news:JSON,
    filtered: []
  };

  getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item)=> {
      return item.title.indexOf(keywords) > -1;
    });
    this.setState({
      filtered
    });
  }

  render(){
  let newsFiltered = this.state.filtered;
  let newsFullList = this.state.news;
  return (
    <div>
      <Header keywords = { this.getKeywords }/>
      <NewsList news={newsFiltered.length === 0 ? newsFullList : newsFiltered } />
    </div>
  )
}
}

ReactDOM.render(<App/>, document.querySelector('#root'));