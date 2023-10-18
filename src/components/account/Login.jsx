
import {Box , TextField , Button , styled , Typography} from '@mui/material'
import { Component } from 'react'

const component = styled('Box')`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`

const Image = styled('img')({
    width : 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0',
});

const Wrapper = styled('Box')`
    padding: 25px 445px 100px;
    width: 400px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div , & > button, & > p {
        margin-top: 20px;
    }
`

const LoginButton = styled('Button')`
    text-transform: none;
    background: #3085C3;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    outline: none;
    transition: background 0.3s; /* Add a transition for smooth color change */
    
    &:hover {
        background: #362FD9; /* Change the background color on hover to blue */
    }
`


const Login = () => {

    const imageURL ='https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png'

    return (
        <Box>
            <Box>
                <Image src={imageURL} alt="login" />
                <Wrapper>
                    <TextField variant = 'standard' />
                    <TextField variant = 'standard' />
                    <LoginButton variant = 'contained' >Login</LoginButton>
                    <Typography style= {{textAlign: 'center'}}>OR</Typography>
                    <Button>Create an account</Button>
                </Wrapper>    
            </Box>    
        </Box>
    )
}


export default Login;