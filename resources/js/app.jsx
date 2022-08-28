// import './bootstrap';
import React, {useEffect} from 'react'
import ReactDom from 'react-dom/client'
import http from './components/http'
import PrimaryLayout from './layouts/PrimaryLayout'
import '../css/app.css'

import { CssBaseline } from '@mui/material'

import { BrowserRouter } from 'react-router-dom'
import { usePageStore } from './components/stateman'

const App = () => {
    const {user} = usePageStore()
    useEffect(()=> {
        getUser()
    }, [])

    const getUser = async() => {
        const res = await http.get('api/user')
        if(res.status === 200) usePageStore.setState({ user: res.data })
    }

    return(
        <React.StrictMode>
            <CssBaseline />
            <BrowserRouter>
                <PrimaryLayout />
            </BrowserRouter>
        </React.StrictMode>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<App />)