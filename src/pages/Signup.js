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

const Signup = () => {
const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
    return (
        <Container>
            <Wrapper>
                <Title>
                Sepertinya kamu belum memiliki akun, yuk daftar dulu! 
                </Title>
                <MainForm>
                    <Input type="email" label="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="text" label="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input type="password" label="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <MainButton type="submit">Signup</MainButton>
                </MainForm>
                <SecondaryButton to="/login">Login</SecondaryButton>
            </Wrapper>
        </Container>
    )
}

export default Signup
