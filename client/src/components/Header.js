import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still deciding';

            case false:
                return 'I am logged out';

            default:
                return 'I am logged in';
        }

    }

    render() {
        return ( <
            nav >
            <
            div className = "nav-wrapper" >
            <
            a className = "left barnd logo" >
            Emaily <
            /a> <
            ul className = "right" >
            <
            li >
            <
            a > Login with Google < /a> <
            /li> <
            /ul>

            <
            /div> <
            /nav>
        );
    }
}

export default Header;