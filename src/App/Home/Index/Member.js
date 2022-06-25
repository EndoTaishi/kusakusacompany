import styled from "styled-components"
import Mixins from "../../../Styles/Mixins.js";
import Variables from "../../../Variables.js";

import CeoImage from "./Photos/ceo.png"
import TwitterIcon from "./Photos/twitter.svg"

const Member = () => {
  return (
    <Container>
      <InnerContainer>
        <h2>OFFICER</h2>
        <FlexContainer>
          <img src={CeoImage} alt="taiga.numata" />
          <Profile>
            <h3>遠藤 大志 / 代表社員</h3>
            <p>
              早稲田大学在学中<br />
              2000年05月24日生まれ<br />
              バスケットボールサークルRaybackの7期幹事長<br />
              色々あって起業しました
            </p>
          </Profile>
          <a
            href="https://twitter.com/endotaishi_"
            target="_blank"
            rel="noreferrer">
            <TwitterBackground />
            <TwitterSvg>
              <svg><use xlinkHref={`${TwitterIcon}#icon`} /></svg>
            </TwitterSvg>
          </a>
        </FlexContainer>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--background-color-light);
  padding: 60px;

  ${Mixins.screenSp} {
    padding: 40px 20px;
  }
`

const InnerContainer = styled.div`
  color: var(--text-color);
  max-width: ${Variables.innerContainer};
  margin: 0 auto;
  width: 100%;

  h2 {
    background-color: var(--background-color-reverse);
    color: var(--text-color-reverse);
    font-weight: bold;
    margin-bottom: 30px;
    padding: 20px 60px;
    text-align: center;

    ${Mixins.screenSp} {
      margin-bottom: 20px;
    }
  }
`

const FlexContainer = styled.div`
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  height: 270px;
  overflow: hidden;
  position: relative;

  ${Mixins.screenSp} {
    flex-direction: column;
    height: auto;
  }

  img {
    margin-right: 40px;
    object-fit: cover;
    width: 340px;

    ${Mixins.screenSp} {
      margin-right: 0;
      height: 50vw;
      width: 100%;
    }
  }
`

const TwitterBackground = styled.div`
  background-color: var(--background-color-reverse);
  position: absolute;
  transform: rotate(45deg);
  

  ${Mixins.screenSp} {
    top: -60px;
    right: -60px;
    height: 120px;
    width: 120px;
  }

  ${Mixins.screenPc} {
    bottom: -80px;
    right: -80px;
    height: 160px;
    width: 160px;
  }
`

const TwitterSvg = styled.div`
  line-height: 1;
  position: absolute;

  ${Mixins.screenSp} {
    top: 12.5px;
    right: 12.5px;
    height: 25px;
    width: 25px;
  }

  ${Mixins.screenPc} {
    bottom: 15px;
    right: 15px;
    height: 38px;
    width: 38px;
  }
  
  ${Mixins.svg} {
    fill: white;
    height: 100%;
    width: 100%;
  }
`

const Profile = styled.div`
  ${Mixins.screenSp} {
    padding: 25px 20px;
    width: 100%;
  }

  h3 {
    font-weight: bold;
    padding-bottom: 15px;
  }

  p {
    margin: 0;
    opacity: ${Variables.baseOpacity};
    text-shadow: var(--text-color) 0 0 0.5px;
  }
`

export default Member