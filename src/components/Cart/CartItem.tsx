import React from 'react';
import {useDispatch} from "react-redux";
import {minusItem, plusItem, removeAddItemAC} from "../../redux/reducers/cartReducer";

import plus_minus from "../../assets/icons/button_minus.svg";

type CartItemProps = {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    subtitle: string;
    sizes: number
    count:number
    totalCount:number
}
const CartItem = ({id,price, imageUrl, title, subtitle, sizes, count,totalCount}:CartItemProps) => {

    const dispatch = useDispatch()
    const onClickPlus = () => {
        dispatch(plusItem(id))
    }
    const onClickMinus = () => {
        dispatch(minusItem(id))
    }
    const onClickRemoveItem = () => {
        if(window.confirm('Ты действитеьно хочешь удалить товар из корзины?')) {
            dispatch(removeAddItemAC(id))

        }
    }

    return (
        <div className="cart_item">
            <div className="cart_item-img">
                <img
                    className='cart_item-img'
                    src={imageUrl}
                    alt="Pizza"
                />
            </div>
            <div className="cart_item-info">
                <h3>{title}<span> {subtitle}</span></h3>
                <p>{sizes} мл</p>
            </div>
            <div className="cart_item-count">
                <button onClick={onClickMinus}
                        className="button button-outline button-circle cart_item-count-minus">
                    <img src={plus_minus} alt=""/>

                </button>
                <b>{count}</b>
                <button onClick={onClickPlus}
                        className="button button-outline button-circle cart_item-count-plus">
                    <img src={plus_minus} alt=""/>
                </button>
            </div>
            <div className="cart_item-price">
                <b>{price * count} ₽</b>
            </div>
            <div className="cart_item-remove">
                <button
                    onClick={onClickRemoveItem}
                    className="button button-outline button-circle">
                    <img src={plus_minus} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default CartItem;