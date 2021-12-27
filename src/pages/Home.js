import React from 'react';
import NavbarPersonalizada from '../components/Navbar';

function Home(props) {
  return (
    <>
      <NavbarPersonalizada></NavbarPersonalizada>
      <h1 className={props.className}>{props.children}</h1>
    </>
  );
}
export default Home;
