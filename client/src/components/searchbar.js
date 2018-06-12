//build the search bar here
//still need to research how search bar logic works

import React from 'react';
import { Form, FormControl, FormGroup } from 'react-bootstrap';

export default class Searchbar extends React.Component{
    render(){
        return(
            <Form inline>
                <FormGroup controlId="form">
                    <FormControl type="text" placeholder="Search"/>
                </FormGroup>
        
            </Form>
        );
    }
}