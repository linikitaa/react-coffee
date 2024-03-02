import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {HomeRootStateType} from "../redux/store";
import {cartClearItems, initialSt} from "../redux/reducers/cartReducer";
import CartItem from "../components/Cart/CartItem";

import cart from '../assets/icons/cart.svg'
import cartCleaner from '../assets/icons/cart_cleaner.svg'
import back from '../assets/icons/back.svg'
import s from './../components/Cart/cart.module.css'

type CartProps = {
}
const Cart = ({}:CartProps) => {

    const {totalPrice, items} = useSelector<HomeRootStateType, initialSt>(state => state.cart)
    const dispatch = useDispatch()
    const totalCount = items.reduce((acc,val)=> acc + val.count,0)


    const onClickClear = () => {
        if(window.confirm('Очистить корзину?')) {
            dispatch(cartClearItems())
        }
    }
    return (
        <div className={s.cart}>
            <div className={s.top}>
                <h2 className={s.topImg}>
                    <img src={cart} alt="cart" width={40} height={40}/>
                    <span>Корзина</span>
                </h2>
                <div
                    onClick={onClickClear}
                    className={s.topImg}>
                    <img src={cartCleaner} alt="cartCleab"/>
                    <span>Очистить корзину</span>
                </div>
            </div>
            <div className={''}>
                {
                    items.length
                        ? items.map(obj=> <CartItem key={obj.id} {...obj} totalCount={totalCount}/>)
                        : <h2 style={{margin:'20px auto'}}>Пока что корзина пуста...</h2>
                }
            </div>
            <div className="cart__bottom">
                <div className="cart__bottom-details">
                    <span> Всего позиций: <b>{totalCount} шт.</b> </span>
                    <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                </div>
                <div className="cart__bottom-buttons">
                    <a href="/" className="button button--outline button--add go-back-btn">
                        <img src={back} alt=""/>
                        Вернуться назад
                    </a>
                    <div className="button pay-btn">
                        Оплатить сейчас
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;