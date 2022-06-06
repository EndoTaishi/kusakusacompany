import React, { lazy } from "react"

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
      <AppHomeIndex />
    </>
  )
}

export default App;
