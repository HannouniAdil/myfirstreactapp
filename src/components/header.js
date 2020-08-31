import React from 'react';
import '../css/styles.css'

const Header = (props) => {
  return(
      <header>
        <div>
          <h1 className='logo'>Enter random number</h1>
          <input type='text' onChange={props.keywords}></input>
        </div>
      </header>
    )
}
export default Header;