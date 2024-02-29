import React from "react";
import {Link} from "react-router-dom";

import style from './header.module.scss'
import logo from '../../assets/icons/logo.svg'
import {Search} from "../Search/Search";


type HeaderProps = {

}
export function Header({}:HeaderProps) {


    return (
        <div className={style.header}>
            <div className={style.left}>
                <Link to="/" className={style.logo}>
                    <img src={logo} alt="logo" width={60} height={60}/>
                    <div>
                        <h1>React Coffee</h1>
                        <p>Самый реактивный кофе в мире</p>
                    </div>
                </Link>
                <Search />
            </div>
            <div className={style.cart}>
                <Link to="/cart" className={'button button-cart'}>
                    520р
                    <div className={'button_delimiter'}></div>
                    3
                </Link>
            </div>
        </div>
    )
}



