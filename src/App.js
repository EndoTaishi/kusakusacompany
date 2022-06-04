import styled from "styled-components"

function App() {
  return (
    <>
      <AppContainer>
        <AppHeader>
          草草カンパニー
        </AppHeader>
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
    text-align: center;
`

const AppHeader = styled.h1`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: greenyellow;
    font-size: 24px;
`

export default App;
