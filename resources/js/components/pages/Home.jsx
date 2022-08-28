import React, {useState, useEffect} from "react";
import http from '../http'
import { usePageStore } from "../stateman";

const Home = () => {
    const {user} = usePageStore()
    useEffect(()=> {
        usePageStore.setState({
            page: "Home"
        })
    }, [])
    
    return (
        <div>Welcome {user.username || null}</div>
    )
}

export default Home