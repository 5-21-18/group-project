import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './create.css'
import Footer from './footer'


class Create extends Component {
    render() {
        return ( 
            <div className=''>
               <form action="">
                <div className="create-con">
                        <h1 className="register">Register</h1>
                        <p className="register-p">Please fill in this form to create an account.</p>
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
                <Footer />
            </div>
        );
    }
}




export default Create;