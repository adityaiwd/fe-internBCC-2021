import React, { useState } from "react";
import {
  Container,
  Wrapper,
  MainForm,
  Title,
  Input,
  MainButton,
  SecondaryButton,
} from "../components/AccountForm";
import twitter from "../api/twitter";
import {useAuth} from "../config/Auth";
import {Redirect} from "react-router-dom"

const Signup = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const {setAuthTokens} = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  const handleSignup = async(e) => {
      e.preventDefault();
        await twitter.post("/user/register",{
            username: Username,
            password: Password,
            email: Email
        })
        await twitter.post("/user/login",{
            email:Email,
            password:Password
        }).then((res) => {
            res.status === 200 && setAuthTokens(res.data.data.access_token)
            setLoggedIn(true)
        })
  }

  if(isLoggedIn){
      return <Redirect to={"/"} />
  }
  
  return (
    <Container>
      <Wrapper>
        <Title>Sepertinya kamu belum memiliki akun, yuk daftar dulu!</Title>
        <MainForm onSubmit={handleSignup}>
          <Input
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <MainButton type="submit">Signup</MainButton>
        </MainForm>
        <SecondaryButton to="/login">Login</SecondaryButton>
      </Wrapper>
    </Container>
  );
};

export default Signup;
