/**  @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #328943;
    border-radius: 20px;
    padding: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <Button>Fight!!</Button>
    </div>
  );
};

const Button = styled.button`
  background-color: #99ddda;
  border: none;
  padding: 8px;
  border-radius: 8px;
`;
