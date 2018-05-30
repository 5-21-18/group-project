import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './components.css'


class Create extends Component {
    render() {
        return ( 
            <div className='main-div'>
                <h1> This is the <u>Create</u> component </h1> 
            </div>
        );
    }
}




export default Create;