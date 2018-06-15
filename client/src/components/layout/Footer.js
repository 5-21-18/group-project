import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-primary text-white mt-4 p-4 text-center footer">
        Copyright &copy; {new Date().getFullYear()} My_Dev_Connect
      </footer>
    );
  }
}

export default Footer;
