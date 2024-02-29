import React from 'react';
import ReactPaginate from "react-paginate";
import style from './pagination.module.scss'
import {onChangePageAC} from "../../redux/reducers/filterReducers";

type PaginationProps = {
    onChangePageAC:(num:number) => void
    currentPage:number
}
export const Pagination = ({onChangePageAC,currentPage}:PaginationProps) => {
    return (
        <>
            <ReactPaginate
                className={style.root}
                breakLabel="..."
                nextLabel=" >"
                onPageChange={(e)=>onChangePageAC(e.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={2}
                forcePage={currentPage - 1}
                previousLabel="< "
                renderOnZeroPageCount={null}
            />
        </>
    );
};

