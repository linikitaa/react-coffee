import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories/Categories";
import {ListSortType, Sort} from "../components/Sort/Sort";
import Skeleton from "../components/CoffeeBlock/Skeleton";
import {CoffeeBlock} from "../components/CoffeeBlock";
import {CoffeeType} from "../assets/coffee";
import {useDispatch, useSelector} from "react-redux";
import {HomeRootStateType} from "../redux/store";
import {changeCategoryIdAC} from "../redux/reducers/categoriesReducer";
import {changeSortAC} from "../redux/reducers/sortReducer";
import {Pagination} from "../components/Pagination/Pagination";

type HomeProps = {
}
const Home = ({}:HomeProps) => {

    let categoryId = useSelector<HomeRootStateType,number>(state=> state.categoryId)
    let sortType = useSelector<HomeRootStateType,ListSortType>(state=> state.sort)
    const searchValue:string = useSelector<HomeRootStateType,string>(state => state.search)

    const dispatch = useDispatch()

    const [items, setItems] = useState<CoffeeType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const category = categoryId ? `&category=${categoryId}` : ''
    const sortBy = sortType.sortProperty.replace('-','')
    const order = sortType.sortProperty.includes('-') ? 'asc': 'desc'
    const search = searchValue ? `&search=${searchValue}` : ''


    useEffect(() => {
        fetch(`https://65d3469a522627d5010878d6.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => {
                return res.json()
            })
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType,order,search]);

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
    // const searchFiltered = items.filter(el=> el.title.toLowerCase().includes(searchValue.toLowerCase()))



    return (
        <>
            <div className={'content_top'}>
                <Categories categoryId={categoryId}
                            onClickCategory={(i: number) => dispatch(changeCategoryIdAC(i))}
                />
                <Sort value={sortType}
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
            <Pagination/>
        </>
    );
};

export default Home;