import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/pages.css'
import logo from '../style/imgs/zemei.png'

class Header extends Component {
    render() {
        return (
            <div className="main-bar" type="flex" justify="center">
                <span className="menu-div">
                    <Link to="/about" className='logo'>
                    <img src={logo} width="50" height="50" alt="zemei" />
                    </Link>
                    <Link to="/" className="navbar-brand">
                        Zemei's Study Area
                    </Link>
                    
                    <Link to="/blog/list" className="nav-link">
                        List Blog
                    </Link>
                    <Link to="/blog/create" className="nav-link">
                        Create Blog
                    </Link>
                    </span>
            </div>
        )
    }
}
export default Header
