import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { TweetArea, TweetButton, InputTweet } from "../components/CreateArea";
import UserTweet from "../templates/Tweet";
import twitter from "../api/twitter";
import { useAuth } from "../config/Auth";
import CircularProgress from "@material-ui/core/CircularProgress";

const TweetsWrapper = styled.div`
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Home = () => {
  const [Tweet, setTweet] = useState("");
  const [UserTweets, setUserTweets] = useState([]);
  const [Loading, setLoading] = useState(false);
  const { authTokens } = useAuth();

  const fetchTweets = async () => {
    setLoading(true);
    const res = await twitter.get("/tweets/explore");
    setUserTweets(res.data.data);
    setLoading(false);
    console.log(res);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  const SendTweet = () => {
    twitter
      .post(
        "/tweets/create",
        {
          caption: Tweet,
        },
        { headers: { Authorization: authTokens } }
      )
      .then((res) => {
        setTweet("");
        fetchTweets();
      });
  };

  return (
    <div>
      <Navbar />
      <Content>
        <TweetArea>
          <InputTweet
            label="Tweet Something!"
            multiline
            rows={4}
            onChange={(e) => setTweet(e.target.value)}
          />
          <TweetButton
            style={{
              backgroundColor: "#1F7A8C",
              color: "#fff",
              marginTop: "1rem",
            }}
            variant="contained"
            onClick={SendTweet}
          >
            Tweet
          </TweetButton>
        </TweetArea>
        <TweetsWrapper>
          {Loading ? (
            <CircularProgress style={{ color: "#fff" }} />
          ) : (
            UserTweets.map((tweet) => (
              <UserTweet
                key={tweet.id}
                username={tweet.username}
                tweet={tweet.caption}
              />
            ))
          )}
        </TweetsWrapper>
      </Content>
    </div>
  );
};

export default Home;
