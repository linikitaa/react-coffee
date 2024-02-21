import React from 'react';

import close from '../../assets/icons/close.svg'
import loupe from '../../assets/icons/loupe.svg'
import styles from './search.module.scss'


export const Search = () => {

    // const { searchValue,setSearchValue }=useContext(SearchContext)

    return (
        <div className={styles.root}>
            <input value={''}
                   onChange={(e)=>{}}
                   className={styles.input}
                   placeholder={'Поиск'}
            />
            <img src={loupe} className={styles.image} alt="#" width={'25px'} height={'25px'}/>
            {
                'searchValue' &&
                    <img className={styles.clear}
                           onClick={()=>('')}
                           src={close}
                           alt="#"
                           width={'25px'}
                           height={'25px'}/>
            }

        </div>
    );
};

