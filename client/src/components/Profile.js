import React from "react";

class LoadUser extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      handle: "",
      occupation: "",
      social: {
        instagram: "",
        linkedin: "",
        twitter: "",
        facebook: ""
      },
      bio: "",
      data: ""
    };
  }

  fetchProfile(user) {
    let url = `https://localhost:5000/api/users/test/${user}`;
    fetch(url)
      .then(res => res.json())
      .then(info => {
        this.setState({
          user: info.user,
          handle: info.handle,
          occupation: info.occupation,
          social: {
            instagram: info.instagram,
            linkedin: info.linkedin,
            twitter: info.tweeter,
            facebook: info.facebook
          },
          bio: info.bio,
          data: info.data
        });
      })
      .catch(error => console.log("There's a problem: ", error));
  }

  render() {
    return (
      <div>
        <Profile info={this.state} />
      </div>
    );
  }
}

export default class Profile extends React.Component() {
  render() {
    let info = this.props.info;
    let user = `${info.user}`;
    let occupation = `${info.occupation}`;
    let insta = `@${info.instagram}`;
    let linkedin = `${info.linkedin}`;
    let twitter = `@${info.tweeter}`;
    let fb = `${info.facebook}`;
    let bio = `${info.bio}`;
    return (
      <div>
        <ul>
          <li>{info.user}</li>
          <li>{info.occupation}</li>
          <li>{info.insta}</li>
          <li>{info.linkedin}</li>
          <li>{info.twitter}</li>
          <li>{info.fb}</li>
          <li>{info.bio}</li>
        </ul>
      </div>
    );
  }
}
