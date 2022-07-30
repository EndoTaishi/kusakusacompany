import React, { Suspense, lazy } from "react"
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
    </>
  )
}

export default App;
