import React from "react";

import style from './categories.module.scss'

type CategoriesProps = {
    categoryId:number
    onClickCategory:(id:number)=>void
}
export function Categories({categoryId,onClickCategory}:CategoriesProps) {

    const categories = ['Все','Кофе', 'Чай', 'Закуски', 'Десерты']

    return (
        <div className={style.categories}>
            <ul>
                {
                    categories.map((el,i)=> {
                        return (
                            <li key={i}
                                onClick={()=>onClickCategory(i)}
                                className={categoryId === i ? style.active : ''}
                            >{el}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
