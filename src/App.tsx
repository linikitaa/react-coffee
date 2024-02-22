import React, {useState} from 'react';

import './App.css';
import './scss/app.scss'
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import {useDispatch, useSelector} from "react-redux";
import {HomeRootStateType} from "./redux/store";

// export const SearchContext = createContext({
//     searchValue:'',
//     setSearchValue:(e:string)=>{}
// })

function App() {



    return (
        <div className={'wrapper'}>
                <Header />
                <div className={'content'}>
                    <div className={'container'}>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/cart' element={<Cart/>}/>

                            <Route path={'*'} element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
        </div>
    );
}

export default App;


