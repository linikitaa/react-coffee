import React, {ChangeEvent, useCallback, useRef, useState} from 'react';
import debounce from 'lodash.debounce'

import close from '../../assets/icons/close.svg'
import loupe from '../../assets/icons/loupe.svg'
import styles from './search.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {HomeRootStateType} from "../../redux/store";
import {searchInputAC} from "../../redux/reducers/searchReducer";




export const Search = () => {

    const searchValue:string = useSelector<HomeRootStateType,string>(state => state.search)
    const dispatch = useDispatch()
    const [valueInput,setValueInput]=useState<string>('')

    const updateSearchValue = useCallback(
        debounce((value) => {
            dispatch(searchInputAC(value))
    }, 500),[])

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
        updateSearchValue(e.currentTarget.value)
    }


    const inputRef = useRef<HTMLInputElement | null>(null);
    const onClickClearInput = () => {
        // dispatch(searchInputAC(''))
        setValueInput('')
        inputRef.current!.focus();
    }

    return (
        <div className={styles.root}>
            <input value={valueInput}
                   onChange={onChangeSearchInput}
                   className={styles.input}
                   placeholder={'Поиск'}
                   ref={inputRef}
            />
            <img src={loupe} className={styles.image} alt="#" width={'25px'} height={'25px'}/>
            {
                searchValue &&
                <img className={styles.clear}
                     onClick={onClickClearInput}
                     src={close}
                     alt="#"
                     width={'25px'}
                     height={'25px'}/>
            }

        </div>
    );
};

