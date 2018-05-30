import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Show extends Component{
    render() {
        return (
            <div className='main-div'>
                <h1>This is the <u>Show</u> component</h1>
            </div>
        );
    }
}

export default Show;