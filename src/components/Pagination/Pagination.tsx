import React from 'react';
import ReactPaginate from "react-paginate";
import style from './pagination.module.scss'
export const Pagination = () => {
    return (
        <>
            <ReactPaginate
                className={style.root}
                breakLabel="..."
                nextLabel=" >"
                onPageChange={()=>{}}
                pageRangeDisplayed={2}
                pageCount={2}
                previousLabel="< "
                renderOnZeroPageCount={null}
            />
        </>
    );
};

