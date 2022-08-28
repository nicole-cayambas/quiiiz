import React, { useEffect } from 'react'
import http from './http'
import { NavLink, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { usePageStore } from './stateman';

const Navigation = () => {
    const {user} = usePageStore()
    const navigate = useNavigate()

    const attemptLogout = () => {
        http.post('api/logout').then(() => {
            usePageStore.setState({
                user: {}
            })
            navigate('/login')
        })
    }
    return (
        <Drawer sx={{ width: 240, flexShrink: 0, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' } }} variant="permanent" anchor="left" >
            <List>
                <CustomLinkButton to="/">Home</CustomLinkButton>
                { Object.keys(user).length !== 0 ? <CustomLinkButton to="/explore">Explore</CustomLinkButton> : null }
                { Object.keys(user).length === 0 ? <CustomLinkButton to="/login">Login</CustomLinkButton> : null }
                { Object.keys(user).length === 0 ? <CustomLinkButton to="/signup">Signup</CustomLinkButton> : null }
                <Divider />
                { Object.keys(user).length !== 0 ? <CustomLinkButton onClick={attemptLogout} to="/logout">Logout</CustomLinkButton> : null }
            </List>
        </Drawer>
    )
}

export default Navigation

const CustomLinkButton = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <ListItem disablePadding>
            <ListItemButton component={NavLink} to={to} {...props} selected={match !== null}>
                <ListItemIcon>{match ? <ArrowForwardIosIcon /> : undefined}</ListItemIcon>
                <ListItemText>{children}</ListItemText>
            </ListItemButton>
        </ListItem>
    );
}