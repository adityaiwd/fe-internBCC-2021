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
import twitter from "../api/twitter"
import {Redirect} from "react-router-dom"
import {useAuth} from "../config/Auth";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const {setAuthTokens} = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin= async(e) =>{
    e.preventDefault()
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
        <Title>
          Sebelum ngetwit,
          <br />alangkah baiknya login dahulu!
        </Title>
        <MainForm onSubmit={handleLogin}>
          <Input
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <MainButton type="submit">Login</MainButton>
        </MainForm>
        <SecondaryButton to="/signup">Signup</SecondaryButton>
      </Wrapper>
    </Container>
  );
};

export default Login;
