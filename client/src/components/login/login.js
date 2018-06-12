import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './login.css'
import Footer from './footer'
import axios from 'axios';
//is a "view"

class Login extends Component {

    login(){
        axios.get(`https://localhost:5000/api/users/test`)
            .then (res => {
                console.log(res);
            });
            //redirect user to feed or profile
            //retrieve user info to display on profile
    }

    render() {
        return (
            <div className=''>

                <form action="/login" method="GET">
                    <div className="login-con">
                        <h1 className="register">Sign In</h1>
                        <hr />
                        <ul>
                            <li>
                                <input type="text" placeholder="Enter Username" name="name" required />
                            </li>
                            <li>
                                <input type="password" placeholder="Enter Password" name="psw" required />
                            </li>
                        </ul>
                        <hr />
                            <button type="submit">Login</button>
                        <div className="container">
                            <p className="create">Don't have an account? <Link to="/create">Create New</Link></p>
                        </div>
                    </div>
                </form>

               <Footer />

            </div>

        );
    }
}




export default Login;
