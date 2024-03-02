import React, {useEffect, useRef, useState} from "react";

import style from './sort.module.scss'

type SortProps = {
    onChangeSort: ( name:string, sortProperty:string) => void
    value: { name:string, sortProperty:string }
}

export type ListSortType = {
    name:string
    sortProperty:string
}

export function Sort({value, onChangeSort}: SortProps) {
    const [open, setOpen] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null);

    const list: ListSortType[] = [
        {name: "популярности(DESC)", sortProperty: '-rating'},
        {name: "популярности(ASC)", sortProperty: 'rating'},
        {name: 'цене(DESC)', sortProperty: '-price'},
        {name: 'цене(ASC)', sortProperty: 'price'},
        {name: 'алфавиту(DESC)', sortProperty: '-title'},
        {name: 'алфавиту(ASC)', sortProperty: 'title'}
    ]


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (open && popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
            document.addEventListener('click', handleClickOutside);


        return () => document.removeEventListener('click', handleClickOutside);
    }, [open]);


    const onClickListItem = (obj: { name: string, sortProperty: string }) => {
        onChangeSort(obj.name, obj.sortProperty)
        setOpen(false)
    }
    const handleTogglePopup = () => {
        setOpen(prevState => !prevState);
    };

    return (
        <div className={style.sort} onClick={(e) => e.stopPropagation()}>
            <div className={style.label}>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={handleTogglePopup}>{value.name}</span>
            </div>
            {
                open && (
                    <div className={style.popup} ref={popupRef}>
                        <ul>
                            {list.map((obj, i) => (
                                <li
                                    key={i}
                                    className={value.sortProperty === obj.sortProperty ? 'active' : ''}
                                    onClick={() => onClickListItem(obj)}
                                >
                                    {obj.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
