import React from "react";

import style from './categories.module.scss'

type CategoriesProps = {
    categoryId:number
    onChangeCategory:(id:number)=>void
}
export function Categories({categoryId,onChangeCategory}:CategoriesProps) {
    const categories = ['Все','Кофе', 'Чай', 'Закуски', 'Десерты']
    return (
        <div className={style.categories}>
            <ul>
                {
                    categories.map((el,i)=> {
                        return (

                            <li key={i}
                                onClick={()=>onChangeCategory(i)}
                                className={categoryId === i ? style.active : ''}
                            >{el}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
