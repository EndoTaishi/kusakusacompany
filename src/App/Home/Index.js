import styled from "styled-components"

import Member from "./Index/Member.js";
import Company from "./Index/Company.js";

const Index = () => {
  return (
    <>
      <Eyecatch>Kusakusa</Eyecatch>
      <Company />
      <Member />
    </>
  );
}

const Eyecatch = styled.h1`
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 10vw;
    font-weight: bold;
    margin: 0;
    min-height: 200px;
    padding: 0;
    height: 100vh;
    background-color: #ffffff;
    color: var(--main-color);
`

export default Index;
