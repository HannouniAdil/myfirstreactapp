import React from 'react';

const getDate = () =>{
  const todayDate = new Date();
  return todayDate.getDay();
}

const user = {
  name: 'Adil',
  lastname: 'Hannouni',
  age:17
}

const Header = () =>{
  return <div>Our guest is {user.name}</div>
}

export default Header;