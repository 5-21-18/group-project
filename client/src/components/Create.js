import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './create.css'
import Footer from './footer'


class Create extends Component {
    render() {
        return ( 
            <div className='main-div'>
               <form action="" method="post">
                <div className="create-con">
                        <h1 className="register">Register</h1>
                        <p className="register-p">Please fill in this form to create an account.</p>
                    <div>
                        <hr />
                        <ul>
                          <li>
                            <input type="text" placeholder="Enter Name" name="Name" required /> 
                          </li>           
                           <li>
                             <input type="text" placeholder="Enter Email" name="email" required />     
                           </li>            
                            <li>
                              <input type="password" placeholder="Enter Password" name="psw" required />
                            </li>
                            <li>
                             <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                            </li>                        
                        </ul>
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