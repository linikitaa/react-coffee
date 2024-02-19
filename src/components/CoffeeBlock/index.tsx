import React, {useState} from "react";
import '../../scss/coffee-block.scss'
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
        <div className={'coffee-block'}>
            <img className={'coffee-block_image'} src={data.imageUrl} alt="coffee" width={'100%'}/>
            <div className={'coffee-block_text'}>
                <h4 className={'coffee-block_title'}>{data.title}</h4>
                <p>{data.subtitle}</p>
            </div>
            <div className={'coffee-block_selector'}>
                <ul>
                    {
                        data.sizes.map((size,i)=>
                            <li key={i}
                                className={activeSize === i ? 'active' : ''}
                                onClick={()=>onClickActiveSize(i)}
                            >{size} мл.</li>
                        )
                    }
                </ul>
            </div>
            <div className="coffee-block_bottom">
                <div className="coffee-block_price">{data.price} руб.</div>
                <div className="button button-outline button-add" onClick={onClickCount}>
                    Добавить
                    <i>{count}</i>
                </div>
            </div>
        </div>
    )
}