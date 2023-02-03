import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

//Stateless Functional Component
//https://getbootstrap.com/docs/4.0/components/navbar/
const NavBar = ({ totalCounter }) => {

    console.log('NavBar - Rendered');
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge m-2 bg-secondary">
                        {totalCounter}
                    </span>
                </a>
            </div>
        </nav>
    );


};
/*
const NavBar = props => {

   
        return (
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar{" "}
                        <span className="badge m-2 bg-secondary">
                            {props.totalCounter}
                        </span>
                    </a>
                </div>
            </nav>
        );
    

};*/ 

/*
export default class NavBar extends Component {

    render() {

        return (
            <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                        Navbar{" "}
                        <span className="badge m-2 bg-secondary">
                            {this.props.totalCounter}
                        </span>
                </a>
            </div>
        </nav>);
            }
}
*/ 

export default NavBar;