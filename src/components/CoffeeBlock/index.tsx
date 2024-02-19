import React, {useState} from "react";
import '../../scss/coffee-block.scss'
import '../../scss/button.scss'

type CoffeeBlockProps = {
    id:number
    title:string
    price:number
    image:string
    sizes:number[]
    subtitle:string
}

export function CoffeeBlock({id,title,price,image,sizes,subtitle}:CoffeeBlockProps) {

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
            <img src={image} alt="coffee" width={'100%'}/>
            <div className={'coffee-block_text'}>
                <h4 className={'coffee-block_title'}>{title}</h4>
                <p>{subtitle}</p>
            </div>
            <div className={'coffee-block_selector'}>
                <ul>
                    {
                        sizes.map((size,i)=>
                            <li key={i}
                                className={activeSize === i ? 'active' : ''}
                                onClick={()=>onClickActiveSize(i)}
                            >{size} мл.</li>
                        )
                    }
                </ul>
            </div>
            <div className="coffee-block_bottom">
                <div className="coffee-block_price">{price} руб.</div>
                <div className="button button-outline button-add" onClick={onClickCount}>
                    Добавить
                    <i>{count}</i>
                </div>
            </div>
        </div>
    )
}