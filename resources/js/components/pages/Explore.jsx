import React, {useState, useEffect} from "react";
import http from '../http'
import { usePageStore } from "../stateman";

const Explore = () => {
    useEffect(()=> {
        usePageStore.setState({
            page: "Explore"
        })
    }, [])
    
    return (
        <div>Explore</div>
    )
}

export default Explore