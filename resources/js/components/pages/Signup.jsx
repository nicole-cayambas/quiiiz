import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { usePageStore } from '../stateman';
import http from '../http'
import { Typography, Stack, Card, CardContent, TextField, Button, Box } from '@mui/material'

const Signup = () => {
    const {page, user} = usePageStore()
    const navigate = useNavigate()
    useEffect(()=> {
        usePageStore.setState({
            page: "Signup"
        })
    }, [])

    const attemptSignup = (creds) => {
        if(user!=={}){
            http.post('api/signup', creds).then((res) => {
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

        const signupCredentials = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        attemptSignup(signupCredentials)
    }
    return (
        <Box component={"form"} onSubmit={handleSubmit} display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="80vh">
            <Card sx={{ minWidth: 500, maxWidth: 800 }} raised={true} >
                <CardContent>
                <Stack spacing="20px">
                    <Typography variant="h3">{page}</Typography>
                    <TextField required id="username" label="Username" name="username"/>
                    <TextField required id="email" label="E-mail" name="email" autoComplete="email"/>
                    <TextField required name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
                    <Button fullWidth variant={"contained"} size="large" type={"submit"} > Signup </Button>
                    <Button component={Link} to="/login" variant="outlined" size="large">Login</Button>
                </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Signup