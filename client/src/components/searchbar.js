//build the search bar here
//still need to research how search bar logic works

import React from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';

export default class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    search(e){
        this.setState({search: e.target.value})
        //use regex to filter name through titles?
        //http://frontendcollisionblog.com/javascript/jekyll/tutorial/2015/03/26/getting-started-with-a-search-engine-for-your-site-no-server-required.html
        //http://zofiakreasi.com/pure-html5-and-javascript-search-engine/
        //https://www.youtube.com/watch?v=7-ToBxPx2dA

        //or even better! Use .findOne({}) for mongoDB and render the results and alphabetize
        //.findOne({where "title" : "`${input.title}`" AND where "author" : "`${input.author}`"})
        //set the results to an array, and .sort() then .map() them rendering each one. Boo yeah! 


    }

    render(){
        return(
            <Form inline>
                <FormGroup controlId="form">
                    <FormControl type="text" placeholder="Search for books" id="search"/>
                </FormGroup>

                <Button type="submit" onClick={this.search.bind(this)}>Find 'em!</Button> 
        
            </Form>
        );
    }
}