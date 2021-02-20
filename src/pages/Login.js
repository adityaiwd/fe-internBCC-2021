import React,{useState} from 'react'
import {
    Container,
    Wrapper,
    MainForm,
    Title,
    Input,
    MainButton,
    SecondaryButton,
  } from "../components/AccountForm";

const Login = () => {
    const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

    return (
        <Container>
            <Wrapper>
                <Title>
                Sebelum ngetwit,
          <br /> alangkah baiknya login dahulu! 
                </Title>
                <MainForm>
                    <Input type="email" label="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" label="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <MainButton type="submit">Login</MainButton>
                </MainForm>
                <SecondaryButton to="/signup">Signup</SecondaryButton>
            </Wrapper>
        </Container>
    )
}

export default Login
