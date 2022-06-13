import styled from "styled-components"

const Member = () => {
  return (
    <MemberContainer>
      <InnerContainer>
        <h2>OFFICER</h2>
        <FlexContainer>
          <Profile>
            <h3>遠藤　大志 / 代表社員</h3>
            <p>
              2000年05月24日生まれ<br />
              早稲田大学人間科学部4年
            </p>
          </Profile>
          <a
            href="https://twitter.com/endotaishi_"
            target="_blank"
            rel="noreferrer">
          </a>
        </FlexContainer>
      </InnerContainer>
    </MemberContainer>
  )
}

const MemberContainer = styled.div`
    background-color: #eeeeee;
    padding: 60px;
`

const InnerContainer = styled.div`
    color: white;
    margin: 0 auto;
    width: 100%;

    h2 {
        background-color: #59795A;
        color: white;
        margin-bottom: 30px;
        padding: 20px 60px;
        text-align: center;
    }
`

const FlexContainer = styled.div`
    background-color: #59795A;
    display: flex;
    align-items: center;
    height: 270px;
    overflow: hidden;
    position: relative;
`

const Profile = styled.div`
  h3 {
    font-weight: bold;
    padding-bottom: 15px;
  }

  p {
    margin: 0;
    opacity: 0.7;
    text-shadow: white 0 0 0.5px;
  }
`

export default Member