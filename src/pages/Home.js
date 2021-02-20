import React,{useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { TweetArea, TweetButton, InputTweet } from "../components/CreateArea";

const Content = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Home = () => {
    const [Tweet, setTweet] = useState("")
    console.log(Tweet);
    return (
    <div>
      <Navbar />
      <Content>
        <TweetArea>
          <InputTweet label="Tweet Something!" multiline rows={4} onChange={e => setTweet(e.target.value)}/>
          <TweetButton
            style={{
              backgroundColor: "#1F7A8C",
              color: "#fff",
              marginTop: "1rem",
            }}
            variant="contained"
            onClick={() => console.log("clicked")}
          >
            Tweet
          </TweetButton>
        </TweetArea>
      </Content>
    </div>
  );
};

export default Home;
