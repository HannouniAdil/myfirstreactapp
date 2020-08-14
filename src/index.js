import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
  return React.createElement('h1', {className: 'header'}, 'Hello World!!')
}

ReactDOM.render(<App/>, document.querySelector('#root'));