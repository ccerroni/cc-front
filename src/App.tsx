import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { About } from "./components/About/About"
import { NotFound } from "./components/NotFound/NotFound"

const Results = React.lazy(() => import("./components/Results/Results"));

export const App = () => {

  // we can use useRoutes hook to define our routes
  // const element = useRoutes([
  //   { path: '/', element: <Home /> },
  //   { path: '/about', element: <About /> },
  //   { path: '*', element: <NotFound /> },
  // ])

  const getClassLink = (isActive: boolean) => {
    return isActive ? 'opacity-50 pr-5' : 'pr-5 hover:opacity-80 ';
  }

  return (
    <Router>
      {/* TODO: move this to another comp */}
      <nav className="bg-indigo-500 p-4 text-white">
        <NavLink to="/" className={({ isActive }) => getClassLink(isActive)}>HOME</NavLink>
        <NavLink to="/about" className={({ isActive }) => getClassLink(isActive)}>ABOUT</NavLink>
         <NavLink to="/results" className={({ isActive }) => getClassLink(isActive)}>RESULTS</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<React.Suspense fallback={<>...</>}><Results /></React.Suspense> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
