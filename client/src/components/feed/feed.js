import React, {Component} from 'react';
// import { Link } from 'react-router-dom'; 

import axios from 'axios';
//is a "view"

//will need to add a review input component and placed in here.
export default class Feed extends Component{
    constructor(props){
        super(props);
        this.state = [];
            //state of posts displayed?
            //show 10 most recent displays?
            

    }

    componentDidMount() {
        //axios.get
        //push reviews into an array and loop through the array, rendering each one .map()
        axios.get(`https://localhost:5000/api/posts/test`)
            .then(res => {
                console.log(res);
            });
        /* axios.get(`https://localhost:5000/api/posts/test`)
            .then(this.setState(res));

            renderPosts(this.props){
                const posts = this.props.map((post,index) => {
                    <div key={index}>{post}</div>
                });

                return <div>{posts}</div>
            }
            
        
        */
    }

    render(){
        return(
            <div>
               
                <div>{}</div>
    
            </div>
        );
    }
}
