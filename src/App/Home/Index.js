import styled from "styled-components"

import Member from "./Index/Member.js";

const Index = () => {
  return (
    <>
      <Eyecatch>草草カンパニー</Eyecatch>
      <Member />
    </>
  );
}

const Eyecatch = styled.h1`
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 10vw;
    font-weight: normal;
    margin: 0;
    min-height: 200px;
    padding: 0;
    height: 100vh;
    background-color: #282c34;
    color: greenyellow;
`

export default Index;
