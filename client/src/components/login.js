import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './login.css'


class Login extends Component {
    render() {
        return ( 
            <div className='main-div'>
                 <form action="" method="post">
                    <div className="container">
                        <label for="uname" className="lables"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                         <div>
                            <label for="psw" className="lables"><b>Password</b></label>
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
                            <p className="create">Don't have an account? <a href="3">Create New</a></p>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                    </div>

               </form>
            </div>
        );
    }
}




export default Login;