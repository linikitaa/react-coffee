import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import Skeleton from "../components/CoffeeBlock/Skeleton";
import {CoffeeBlock} from "../components/CoffeeBlock";
import {CoffeeType} from "../assets/coffee";
import {useDispatch, useSelector} from "react-redux";
import {HomeRootStateType} from "../redux/store";
import {Pagination} from "../components/Pagination/Pagination";
import axios from "axios";
import {changeCategoryIdAC, changeSortAC, FilterState, onChangePageAC} from "../redux/reducers/filterReducers";

type HomeProps = {}
const Home = ({}: HomeProps) => {
    const {categoryId , sort, currentPage } =
        useSelector<HomeRootStateType, FilterState>(state => state.filter)
    const searchValue: string = useSelector<HomeRootStateType, string>(state => state.search)
    const dispatch = useDispatch()

    const [items, setItems] = useState<CoffeeType[]>([])
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {

        const category = categoryId ? `&category=${categoryId}` : ''
        const sortBy = sort.sortProperty.replace('-', '')
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
        const search = searchValue ? `&search=${searchValue}` : ''

        axios.get(`https://65d3469a522627d5010878d6.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search})`)
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
    }, [categoryId, sort.sortProperty, searchValue,currentPage]);


    // const searchFiltered = items.filter(el=> el.title.toLowerCase().includes(searchValue.toLowerCase()))
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
    return (
        <>
            <div className={'content_top'}>
                <Categories categoryId={categoryId}
                            onChangeCategory={(i: number) => dispatch(changeCategoryIdAC(i))}
                />
                <Sort value={sort}
                      onChangeSort={(name: string, sortProperty: string) => dispatch(changeSortAC(name, sortProperty))}
                />
            </div>
            <h2 className={'content_title'}>Все</h2>
            <div className={'content_items'}>
                {
                    isLoading
                        ? skeletons
                        : Array.isArray(items)
                            ? items.map(el => <CoffeeBlock key={el.id} data={el}/>)
                            : ''
                }
            </div>
            <Pagination currentPage={currentPage} onChangePageAC={(num:number)=> {
                dispatch(onChangePageAC(num))
            }}/>
        </>
    );
};

export default Home;