import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router/Route'
import './create.css'


class Create extends Component {
    render() {
        return ( 
            <div className='main-div'>
               <form action="">
                <div className="container">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />
                        <div>
                            <label htmlFor="Name" className="lb1"><b>Name</b></label>
                            <input type="text" placeholder="Enter Name" name="Name" required />
                        </div>
                      <div>
                        <label htmlFor="email" className="lb1"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required />
                      </div>

                      <div>
                        < label htmlFor = "psw" className = "lb2"> <b> Password </b></label >
                        <input type="password" placeholder="Enter Password" name="psw" required />
                      </div>

                      <div>
                        <label htmlFor="psw-repeat" className="lb3"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                        <hr />
                     </div>                        
                        <button type="submit" className="registerbtn">Register</button>
                     <div>
                         <p>Already have an account? <Link to="/">Sign in</Link></p>
                     </div>

                </div>
                    
                  
                </form>
            </div>
        );
    }
}




export default Create;