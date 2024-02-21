import React, {useState} from "react";

import style from './coffeeBlock.module.scss'
import '../../scss/button.scss'
import {CoffeeType} from "../../assets/coffee";

type CoffeeBlockProps = {
    data: CoffeeType
    // id:number
    // title:string
    // price:number
    // image:string
    // sizes:number[]
    // subtitle:string
}

export function CoffeeBlock({data}:CoffeeBlockProps) {

    const[activeSize, setActiveSize]=useState(0)
    const[count,setCount]=useState(0)
    const onClickActiveSize = (i:number)=> {
        setActiveSize(i)
    }

    const onClickCount =()=> {
        setCount(count+1)
    }
    return (
        <div className={style.coffeeBlock}>
            <img className={style.image} src={data.imageUrl}
                 alt="coffee"
                 width={'100%'}/>
            <div className={style.text}>
                <h4 className={style.title}>{data.title}</h4>
                <p>{data.subtitle}</p>
            </div>
            <div className={style.selector}>
                <ul>
                    {
                        data.sizes.map((size,i)=>
                            <li key={i}
                                className={activeSize === i ? style.active : ''}
                                onClick={()=>onClickActiveSize(i)}
                            >{size} мл.</li>
                        )
                    }
                </ul>
            </div>
            <div className={style.bottom}>
                <div className={style.price}>{data.price} руб.</div>
                <div className="button button-outline button-add" onClick={onClickCount}>
                    Добавить
                    <i>{count}</i>
                </div>
            </div>
        </div>
    )
}