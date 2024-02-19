import React, {useState} from "react";
import '../scss/catego ries.scss'

const categories = ['Все','Кофе', 'Чай', 'Закуски', 'Десерты']

type CategoriesProps = {
    filteredCategories:(categories:number)=>void
}
export function Categories({filteredCategories}:CategoriesProps) {

    const [activeIndex, setActiveIndex] = useState(0)

    const onClickCategory = (index:number) => {
        setActiveIndex(index)
        filteredCategories(index)
    }

    return (
        <div className={'categories'}>
            <ul>
                {
                    categories.map((el,i)=> {
                        return (
                            <li key={i}
                                onClick={()=> onClickCategory(i)}
                                className={activeIndex === i ? 'active' : ''}
                            >{el}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
