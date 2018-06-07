import React, { Component } from 'react'


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footer-p">Copyright &copy; {new Date().getFullYear()} Carlos & Miranda</p>            
      </div>
    );
  }
}

export default Footer;