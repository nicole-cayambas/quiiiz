import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import http from '../http'
import { Card, CardContent, Box, Stack, Typography, TextField, Button } from '@mui/material';
import { usePageStore } from '../stateman';

const Login = () => {
    const navigate = useNavigate()
    const {user} = usePageStore()
    useEffect(()=> {
        usePageStore.setState({
            home: "Login"
        })
    }, [])

    const attemptLogin = (creds) => {
        if(user!=={}){
            http.post('api/login', creds).then((res) => {
                usePageStore.setState({
                    user: res.data
                })
                navigate('/')
            })
        }
    }
        

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const loginCredentials = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        attemptLogin(loginCredentials)
    }
    return (
        <Box component={"form"} onSubmit={handleSubmit} display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="80vh">
            <Card sx={{ minWidth: 500, maxWidth: 800 }} raised={true} >
                <CardContent>
                    <Stack spacing="20px">
                        <Typography variant="h3">Login</Typography>
                        <TextField required id="email" label="E-mail" name="email" autoComplete="email" autoFocus />
                        <TextField required name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                        <Button fullWidth variant={"contained"} size="large" type={"submit"} > Login </Button>
                        <Button component={Link} to="/signup" variant="outlined" size="large">Signup</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}
export default Login