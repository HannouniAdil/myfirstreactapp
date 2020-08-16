import React, {Component} from 'react';
import '../css/styles.css'

class Header extends Component {

// inputChangeHandler(){
//     console.log('I got clicked');
//   };
inputChangeHandler(event){
  console.log(event);
}  

  render(){
    return(
      <header>
        <div>
          <h1 className='logo' onClick={this.inputChangeHandler}>Enter random number</h1>
          <input type='text' onChange={this.inputChangeHandler}></input>
        </div>
      </header>
    )

  }
}
export default Header;