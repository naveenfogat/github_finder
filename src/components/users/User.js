import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getuser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getuser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      website
    } = this.props.user;

    const { loading } = this.props;
    if(loading){
      return <Spinner/>
    }
    return <Fragment>
      <Link to='/' className="btn btn-light btn-sm">Back to users</Link>
      Hireable{" "}
      {hireable ? <i className="fas fa-check text-success"/>: <i className="fas fa-times-circle text-danger"/>}
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} className="round-img" style={{width:"150px"}} />
          <h1>{name}</h1>
          <p>Location : {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">Visit Github_profile</a>
          <ul>
            <li>
              {login &&(
                <Fragment>
                  <strong>Username :</strong> {login}</Fragment>
              )}
            </li>
            <li>
              {website &&(
                <Fragment>
                  <strong>Website :</strong> {website}</Fragment>
              )}
            </li>
            <li>
              {blog &&(
                <Fragment>
                  <strong>blog :</strong> {blog}</Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-dark">Followers:{followers}</div>
        <div className="badge badge-primary">Following:{following}</div>
        <div className="badge badge-light">Public_repos:{public_repos}</div>
        <div className="badge badge-primary">Public_gists:{public_gists}</div>
      </div>
    </Fragment>;
  }
}

export default User;
