import React from 'react';

const NewsItem =({item})=>{
console.log(item);

return(
  <div>
    <h2>{item.title}</h2>
    <h3>{item.feed}</h3>
  </div>
)

}

export default NewsItem;