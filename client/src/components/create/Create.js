import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './create.css';
import Footer from './footer';
//is a "view"

class Create extends Component {

    createUser() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let psw = document.getElementById('psw').value;
        let pswRepeat = document.getElementById('psw-repeat').value;
        if (psw === pswRepeat){
            //need to post to create endpoint
            axios.post('/api/users/register', {name: name, email: email, password: psw }).then(() => {
                window.location.pathname = '/feed'; //redirect to feed
            });
        } else {
            console.log("Passwords do not match");
        }

        //to create user
        axios.put(`https://localhost:5000/api/users/test`)
            .then( res => {
                console.log(res);
            });
            //redirect to login page

    }



    render() {
        return (
            <div className='main-div'>

                <form action="/api/users/register" method="post">
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
                                    <input type="email" placeholder="Enter Email" name="email" required />
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
                            <button type="submit" className="registerbtn" onClick="{() => this.createUser()}">Register</button>
                        <div>
                            <p>Already have an account? <Link to="/login">Sign in</Link></p>
                        </div>
                    </div>
                </form>

                <Footer />
            </div>
        );
    }
}




export default Create;
