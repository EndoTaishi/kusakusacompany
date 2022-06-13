import styled from "styled-components"

import CeoImage from "./Member/ceo.png"

const Member = () => {
  return (
    <MemberWrapper>
        <Container>
            <h2>社長あいさつ</h2>
            <FlexContainer>
                <img src={CeoImage} alt="Taishi Endo" />
                <Profile>
                    <h3>遠藤大志 / 代表社員</h3>
                    <p>早稲田大学人間科学部4年</p>
                    <p>2000年5月24日生まれ、双子座、A型、176cm、66kg</p>
                    <p>好きな食べ物はいちご、嫌いな食べ物はナッツ類</p>
                    <p>2022年2月末日、合同会社草草カンパニーを設立しました</p>
                    <a href="https://twitter.com/endotaishi_" target="_blank" rel="noreferrer">Twitterはこちら</a>
                </Profile>
            </FlexContainer>
        </Container>
    </MemberWrapper>
  )
}

const MemberWrapper = styled.div`
    
`

const Container = styled.div`
    color: #000000;
    margin: 0 auto;
    padding: 40px 60px 60px 60px;
    max-width: 1024px;
    width: 100%;

    h2 {
        margin: 0;
        padding-bottom: 30px;
        font-size: 32px;
    }
`
const FlexContainer = styled.div`
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    /*height: 270px;*/
    overflow: hidden;
    position: relative;

    img{
        margin-right: 40px;
        width: 15vw;
    }
`

const Profile = styled.div`
    h3{
        font-weight: bold;
    }

    p {
        margin: 0;
    }

    a{
        text-decoration: none;
        color: #3498db;
    }
`

export default Member