import React,{ useState, useEffect } from 'react';
import './styles.css';
import Cards from '../GUI/Cards/Cards';
import data from '../../Api/api.json';



const BlogPost = (props) => {

    const [post, setPost]=useState({});

    useEffect(()=>{
        const postId = props.match.params.postId;
        const post=data.posts.find(post => post.id == postId);
        setPost(post);
    },post);

    return (
        
        <div className="blogPost">
        <Cards>
        <div className="blogHeader">    
        <span className="postAuthor"> Author:Melissa Manges</span>
    <h1 className="postTitle">{post.title}</h1>
        <span className="publish_date">published on 2016-02-23</span>
        </div>    

        <div className="postimageContainer">
        <img src="/Image/logo512.png" alt="Post Image"/>
        </div>

        <div className="postContent">
         <h3>Blog Title</h3>
         <p>lorem ipsim</p>   

        </div>

        </Cards>
        </div>
        
    )
}


export default BlogPost;