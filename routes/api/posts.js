const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../../models/Post');
//Profile model
const Profile = require('../../models/Profile');

//validation
const validatePostInput = require('../../validation/post');

//Route Get api/posts/test
//Desc Test post route
// Access public
router.get('/test', (req, res) => res.json({
    msg: "Posts Work"
}));

//Route: Get api/posts
//Desc: Get all posts 
//Access: public
router.get('/', (req, res) => {
    Post.find()
        .sort({
            date: -1
        })
        .then(posts => res.json(posts))
        .catch(err => res.json(400).json({
            nopostsfound: 'No posts found'
        }));
});
/**************************************************/

//Route: Get api/posts/:id
//Desc: Get single post by id
//Access: public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.json(400).json({
            nopostfound: 'No post found with that Id'
        }));
});
/**************************************************/

//Route: Post api/posts
//Desc: create a post 
//Access: private
router.post('/', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    const {
        errors,
        isValid
    } = validatePostInput(req.body);
    //check validation
    if (!isValid) {
        //if any errors, send status 400 with errors
        return res.status(400).json(errors);
    }

    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });
    newPost.save().then(post => res.json(post));
});
/**************************************************/

//Route: DELETE api/posts/:id
//Desc: DELETE post
//Access: private
router.delete('/:id', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Profile.findOne({
            user: req.user.id
        })
        .then(profile => {
            Post.findById(req.params.id)
                .then(post => {
                    //check for post ownership
                    if (post.user.toString() !== req.user.id) {
                        return res.status(401).json({
                            notauthorized: 'User not authorized'
                        });
                    }
                    //if ownership is confirmed, delete post
                    post.remove().then(() => res.json({
                        success: true
                    }));
                })
                .catch(err => res.status(404).json({
                    postnofound: 'No post found'
                }));
        })
});
/**************************************************/

module.exports = router