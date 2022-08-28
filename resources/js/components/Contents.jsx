import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Explore from './pages/Explore'
import Login from './pages/Login'
import Signup from "./pages/Signup"
import { usePageStore } from "./stateman";

const Contents = () => {
    const {user} = usePageStore()
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            { Object.keys(user).length !== 0 ? <Route path="/explore" element={<Explore />} /> : null }
            { Object.keys(user).length === 0 ? <Route path="/login" element={<Login />} /> : null }
            { Object.keys(user).length === 0 ? <Route path="/signup" element={<Signup />} /> : null }
        </Routes>
    )
}

export default Contents