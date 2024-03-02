import React from "react";
import {Link} from "react-router-dom";

import {useSelector} from "react-redux";
import {HomeRootStateType} from "../../redux/store";
import {initialSt} from "../../redux/reducers/cartReducer";

import style from './header.module.scss'
import logo from '../../assets/icons/logo.svg'

import {Search} from "../Search/Search";



type HeaderProps = {}

export function Header({}: HeaderProps) {

    const {totalPrice, items} = useSelector<HomeRootStateType, initialSt>(state => state.cart)
    const totalCount = items.reduce((acc,val)=> acc + val.count,0)

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
                <Search/>
            </div>
            <div className={style.cart}>
                <Link to="/cart" className={'button button-cart'}>
                    {totalPrice}р
                    <div className={'button_delimiter'}></div>
                    {totalCount}
                </Link>
            </div>
        </div>
    )
}



