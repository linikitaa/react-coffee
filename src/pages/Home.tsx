import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import Skeleton from "../components/CoffeeBlock/Skeleton";
import {CoffeeBlock} from "../components/CoffeeBlock";
import {CoffeeType} from "../assets/coffee";

const Home = () => {

    const [items, setItems] = useState<CoffeeType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://65d3469a522627d5010878d6.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
    }, []);

    const filteredCategories = (category: number) => {
        setItems([...items.filter(el => el.category === category)])
    }

    return (
        <>
            <div className={'content_top'}>
                <Categories filteredCategories={filteredCategories}/>
                <Sort/>
            </div>
            <h2 className={'content_title'}>Все</h2>
            <div className={'content_items'}>
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : items.map(el => <CoffeeBlock key={el.id} data={el}/> )
                }
            </div>
        </>
    );
};

export default Home;