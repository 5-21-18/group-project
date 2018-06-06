import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './login.css'
import Footer from './footer'


class Login extends Component {
    render() {
        return (
            <div className=''>
                 <form action="/login" method="post">
                    <div className="login-con">
                      <h1 className="register">Sign In</h1>
                      <hr />
                      <ul>
                          <li>
                             <input type="text" placeholder="Enter Username" name="uname" required />
                          </li>
                          <li>
                            <input type="password" placeholder="Enter Password" name="psw" required />
                          </li>
                      </ul>
                      <hr />
                            <button type="submit">Login</button>
                        <div className="container">
                         <p className="create">Don't have an account? <Link to="Create">Create       New</Link></p>
                        </div>
                    </div>

               </form>
               <Footer />
            </div>

        );
    }
}




export default Login;
