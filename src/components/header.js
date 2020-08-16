import React, {Component} from 'react';
import '../css/styles.css'

class Header extends Component {

  state={
    keyword: 'Wednesday'
  }

inputChangeHandler(event){
  this.setState({
    keyword: event.target.value
  })
}  

  render(){
    console.log(this.state.keyword)
    return(
      <header>
        <div>
          <h1 className='logo' onClick={this.inputChangeHandler}>Enter random number</h1>
          <input type='text' onChange={this.inputChangeHandler.bind(this)}></input>
        </div>
      </header>
    )

  }
}
export default Header;