import React, {useState} from "react";

import style from './coffeeBlock.module.scss'
import '../../scss/button.scss'
import {CoffeeType} from "../../assets/coffee";
import {useDispatch} from "react-redux";
import {cartAddItemAC} from "../../redux/reducers/cartReducer";

type CoffeeBlockProps = {
    // data: CoffeeType
    id: number;
    imageUrl: string;
    title: string;
    subtitle: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;

}

export type NewItem = {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    subtitle: string;
    sizes: number
    count:number
}
export function CoffeeBlock({id, title, price, imageUrl, sizes, subtitle}: CoffeeBlockProps) {

    const [activeSize, setActiveSize] = useState(0)
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    const onClickAdd = () => {
        const item:NewItem = {
            id,
            title,
            subtitle,
            price,
            imageUrl,
            sizes: sizes[activeSize],
            count:0
        }
        setCount(count + 1)
        dispatch(cartAddItemAC(item))
    }
        const onClickActiveSize = (i: number) => {
            setActiveSize(i)
        }

        const onClickCount = () => {

        }
        return (
            <div className={style.coffeeBlock}>
                <img className={style.image} src={imageUrl}
                     alt="coffee"
                     width={'100%'}/>
                <div className={style.text}>
                    <h4 className={style.title}>{title}</h4>
                    <p>{subtitle}</p>
                </div>
                <div className={style.selector}>
                    <ul>
                        {
                            sizes.map((size, i) =>
                                <li key={i}
                                    className={activeSize === i ? style.active : ''}
                                    onClick={() => onClickActiveSize(i)}
                                >{size} мл.</li>
                            )
                        }
                    </ul>
                </div>
                <div className={style.bottom}>
                    <div className={style.price}>{price} руб.</div>
                    <div className="button button-outline button-add" onClick={onClickAdd}>
                        Добавить
                        <i>{count}</i>
                    </div>
                </div>
            </div>
        )
    }