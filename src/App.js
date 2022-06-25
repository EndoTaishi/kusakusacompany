import React, { Suspense, lazy } from "react"
import Background from "./Layouts/Background.js"
import Nomalize from "./Styles/Nomalize.js"
import GlobalStyle from "./Styles/GlobalStyle.js"

const AppHomeIndex = lazy(() => import("./App/Home/Index.js"))

const App = () => {
  return (
    <>
      <AppRouter />
    </>
  )
}

const AppRouter = () => {
  return(
    <>
      <Nomalize />
      <GlobalStyle /> 
      <main>
        <Suspense fallback={<></>}>
          <AppHomeIndex />
        </Suspense>
      </main>
      <Background />
    </>
  )
}

export default App;
