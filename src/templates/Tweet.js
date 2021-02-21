import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  min-height: 4rem;
  border-radius: 1rem;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Tweet = ({username,tweet}) => {
  return (
    <Wrapper>
      <h1 style={{ fontSize: "1.6rem" }}>{username}</h1>
      <p style={{ fontSize: "1.4rem", marginTop: "1rem" }}>
        {tweet}
      </p>
    </Wrapper>
  );
};

export default Tweet;
