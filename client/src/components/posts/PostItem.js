import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postActions";

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div
        className="card card-body mb-3 col-md-12"
        style={{ margin: "auto", backgroundColor: "#e9f0f6" }}
      >
        <div className="row">
          <div className="col-md-2">
            {/* <a href="/profile"> */}
            <img
              className="rounded-circle d-none d-md-block"
              src={post.avatar}
              alt=""
            />
            {/* </a> */}
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">
              <span className="lead font-weight-bold">Book Name:</span>{" "}
              <span className="lead small font-italic text-uppercase">
                {post.bname}
              </span>
            </p>
            <p className="lead">
              <span className="lead font-weight-bold">Category:</span>{" "}
              <span className="lead small">{post.category}</span>
            </p>
            <p className="lead">
              <span className="lead font-weight-bold">ISBN:</span>{" "}
              <span className="small">{post.isbn}</span>
            </p>
            <p className="lead">
              <span className="lead font-weight-bold">Year Published:</span>{" "}
              <span className="small">{post.year}</span>
            </p>
            <p className="lead">
              <span className="lead font-weight-bold">Description:</span>{" "}
              <span className="small">{post.description}</span>
            </p>
            <p className="lead">
              <span className="lead font-weight-bold">My Thoughts:</span>{" "}
              <span className="small">{post.thoughts}</span>
            </p>
            {showActions ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-sm btn-light mr-1"
                >
                  <i
                    className={classnames("fas fa-thumbs-up", {
                      "text-success": this.findUserLike(post.likes)
                    })}
                  />
                  <span className="badge badge-light">{post.likes.length}</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-sm btn-light mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link
                  to={`/post/${post._id}`}
                  className="btn btn-sm btn-primary mr-1"
                >
                  Comments
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-sm btn-danger mr-1"
                  >
                    Delete
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
