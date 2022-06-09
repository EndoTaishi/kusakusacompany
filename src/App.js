import React, { Suspense, lazy } from "react"

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
      <Suspense fallback={<></>}>
        <AppHomeIndex />
      </Suspense>
    </>
  )
}

export default App;
