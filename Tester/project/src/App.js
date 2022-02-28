import React from "react";
import './styles/App.css';
import {Route, Router, Routes, NavLink} from 'react-router-dom';
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import LayOut from "./components/LayOut";



function App () {
    return (
        <>
            <header>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/about' style={{marginLeft:30}} >About</NavLink>
                <NavLink to='/posts' style={{marginLeft:30}}>Posts</NavLink>
            </header>
            <Routes>
                <Route path='/' element={<LayOut/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='posts' element={<Posts/>}/>
                <Route path='*' elements={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
};
export default App;

