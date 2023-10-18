import React, { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

const component = styled('div')`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Image = styled('img')`
  width: 100px;
  margin: auto;
  display: flex;
  padding: 50px 0 0;
`;

const Wrapper = styled('div')`
  padding: 25px 445px 100px;
  width: 400px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div, & > button, & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #3085C3;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  outline: none;
  transition: background 0.3s;
  &:hover {
    background: #362FD9;
  }
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  transition: background 0.3s;
  &:hover {
    background: #D0D4CA;
  }
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 15px;
  padding: 20px 0 0;
`;

const Login = () => {
  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  const [account, toggleAccount] = useState('login');

  const toggleSignup = () => {
    toggleAccount(account === 'login' ? 'signup' : 'login');
  };

  return (
    <Box>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === 'login' ? 
          <Wrapper>
            <TextField variant="standard" label="Enter username" />
            <TextField variant="standard" label="Enter password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
          </Wrapper>
        : 
          <Wrapper>
            <TextField variant="standard" label="Enter Name" />
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Password" />
            <SignupButton>Signup</SignupButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
          </Wrapper>
        }
      </Box>
    </Box>
  );
};

export default Login;

