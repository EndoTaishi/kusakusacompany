import React, { Suspense, lazy } from "react"
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
