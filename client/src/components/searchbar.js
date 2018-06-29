import React from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import PostItem from './posts/PostItem';
import { getPosts } from "../actions/postActions";
//https://medium.com/@yaoxiao1222/implementing-search-filter-a-list-on-redux-react-bb5de8d0a3ad
//https://stackoverflow.com/questions/40342381/react-redux-create-a-search-filter

class Search extends React.Component{
    constructor(book){
        super();
        this.book = book;
        this.state = {
            input: ""
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
                let item = <PostItem key={post._id} post={post} />

                this.book = item;
                
            }
        });

    }

    

    render(book){

        console.log(book);

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
                    <Link className="nav-link" to="/post/:id">
                        {book}
                    </Link> 
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