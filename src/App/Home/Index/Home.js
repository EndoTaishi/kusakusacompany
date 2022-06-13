import styled from "styled-components"

const Home = () => {
  return (
    <Eyecatch>草草カンパニー</Eyecatch>
  )
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
    /* background-color: #59795A; */
    color: black;
`

export default Home