import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './login.css'
import Footer from './footer'


class Login extends Component {
    render() {
        return ( 
            <div className=''>
                 <form action="" method="post">
                    <div className="login-con">
                        <label htmlFor="uname" className="lables"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                         <div>
                            <label htmlFor="psw" className="lables "><b>Password</b></label>
                           <input type="password" placeholder="Enter Password" name="psw" required/>
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
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