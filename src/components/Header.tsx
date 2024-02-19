import React from "react";
import '../scss/header.scss'
import logo from '../assets/icons/logo.svg'
import {Link} from "react-router-dom";
export function Header() {
    return (
        <div className={'header'}>
            <div>
                    <Link to="/"  className={'header_logo'} >
                        <img src={logo} alt="logo" width={60} height={60} />


                    <div>
                        <h1>React Coffee</h1>
                        <p>Самый реактивный кофе в мире</p>
                    </div>
                    </Link>
                </div>
                <div className={'header_cart'}>
                    <Link to="/cart" className={'button button-cart'}>
                        520р
                        <div className={'button_delimiter'}></div>
                        3
                    </Link>
                </div>
        </div>
    )
}



