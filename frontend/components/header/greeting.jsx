import React from 'react'
import { Link } from 'react-router-dom';


class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    if (this.props.currentAccount) {
    return (
      <div className="signup-signin-links icon-container">
        {this.props.currentAccount.username}
      </div>
    )
  } else {
    return (
        <div className="signup-signin-links icon-container">
          <Link to="/login" className="right-nav-link"> sign in </Link>
          <Link to="/signup" className="right-nav-link"> sign up </Link>
        </div>
      )
    }

  }
}
export default Greeting;