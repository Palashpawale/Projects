import React from 'react';
import Cards from '../GUI/Cards/Cards';
import Navbar from '../Navbar/Navbar';
import Logo from '../PandaLogo/Logo';
import './styles.css'

const Space = (props) => {
    return (
        <div>
          <Cards>
           <Logo />
           <Navbar />   
          </Cards>    
        </div>
    );
};


export default Space;