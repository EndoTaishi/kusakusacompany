import styled from "styled-components"
import Mixins from "../../Styles/Mixins.js"

import Member from "./Index/Member.js";
import Company from "./Index/Company.js";

const Index = () => {
  return (
    <>
      <Eyecatch>Kusakusa LLC</Eyecatch>
      <Member />
      <Company />
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
  text-shadow: #000 0 0 1px;
  height: 100vh;

  ${Mixins.screenSp} {
    font-size: 12vw;
    height: 55vw;
    min-height: 55vw;
  }
`

export default Index;
