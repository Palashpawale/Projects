import React from 'react';
import './styles.css';
import Cards from '../GUI/Cards/Cards';


import data from '../../Api/api.json';

const Sidebar = (props) => {

      
    return (
        <div className="sidebarContainer">
        <Cards style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}} >
        <div className="cardHeader">
        <span>About Us</span> 
        
        </div>
        <div className="profileImageContainer">
        <img src="https://lh3.googleusercontent.com/proxy/4ArrjvQjviOou6K5l5QSn14wIyYZ8bzbFnnuc9tIsylXqn9uuiRGqN-VTKJskmhopm0X_xdM3qsTRH-lpcNc1zxwLrtYdkSMxPLaYpnnNJ4"alt=""/>   
        </div>
        <div className="cardBody">
         <p className="Bio">Panda Power supplies green energy with a customer focus at super-competitive rates to homes and businesses all over Ireland.</p>   

        </div>
        </Cards>

        <Cards style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
        <span>Social Network</span>    
        </div>
        </Cards>
        
        <Cards style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
            <span>Recent Post</span>
            </div>

           <div className="recentPosts">
               
               
            <div className="recentPost">
                          <h3>Blog Title</h3>
                        <span>2016-02-23</span>  
                        </div>

                   </div>   
        </Cards>
        </div>
    );
};



export default Sidebar;