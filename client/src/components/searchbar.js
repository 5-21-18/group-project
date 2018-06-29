import React from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import PostItem from './posts/PostItem';
import { getPosts } from "../actions/postActions";

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            input: "",
            book: ""
        }
    }

    componentDidMount() {
        this.props.getPosts();
    }
    
    updateTitles(e){
        this.setState({input: e.target.value});

        const { posts } = this.props.post;

        const listTitles = posts.map((post) => {
            console.log(post);
            if(this.state.input === post.bname){
                console.log(post._id);
                this.setState({book: <PostItem key={post._id} post={post} />});
                
            }
        });

    }

    

    render(){


        console.log(this.state.book);

        return(
            
            <div>
                <h3>Search for a book!</h3>
                <Form>
                <FormGroup controlId="form">
                    <FormControl type="text" 
                        placeholder="Not functional yet"  
                        value={this.state.input}
                        onChange={event => this.setState({input: event.target.value})}/> 
                </FormGroup> 
                <Button
                    onClick={this.updateTitles.bind(this)}
                >Search</Button>
                </Form>
                <hr />
                <div>
                    
                    {this.state.book}
                    
                </div>
            </div>
            

        );
    }
}

Search.propTypes = {
    getPosts: PropTypes.func.isRequired,
    // posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    post: state.post
  });
  
  export default connect(
    mapStateToProps,
    { getPosts }
  )(Search);