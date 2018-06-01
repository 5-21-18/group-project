import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router/Route'
import './login.css'


class Login extends Component {
    render() {
        return ( 
            <div className='main-div'>
                 <form action="" method="post">
                    <div className="container">
                        <label htmlFor="uname" className="lables"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                         <div>
                            <label htmlFor="psw" className="lables "><b>Password</b></label>
                           <input type="password" placeholder="Enter Password" name="psw" required/>
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>

                        <div className="container">
                            <p className="create">Don't have an account? <Link to="Create">Create New</Link></p>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                    </div>

               </form>
            </div>
        );
    }
}




export default Login;