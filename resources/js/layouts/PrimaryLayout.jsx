import { Box, CssBaseline } from '@mui/material'
import React from 'react'
import Contents from '../components/Contents'
import Navigation from '../components/Navigation'

const PrimaryLayout = () => {
    return(
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <Navigation />
            <Contents />
        </Box>
    )
}

export default PrimaryLayout