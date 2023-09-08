
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { About } from "./components/About/About"
import { NotFound } from "./components/NotFound/NotFound"
import { HocExample } from "./components/HocExample/HocExample";
import { RenderPropsExample } from "./components/RenderPropsExample/RenderPropsExample";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { MenuItem } from "./models/MenuItem";
import { Container } from "react-bootstrap";
import { ContextExample } from "./components/ContextExample/ContenxtExample";
const Results = React.lazy(() => import("./components/Results/Results"));

//TODO: move this to another file
export const MENU: MenuItem[] = [
  {
    name: 'HOME',
    url: '/',
    component: <Home />
  },
  {
    name: 'HOC',
    url: '/hoc',
    component: <HocExample />
  },
  {
    name: 'RENDER-PROPS',
    url: '/renderProps',
    component: <RenderPropsExample />
  },
  {
    name: 'CONTEXT',
    url: '/context',
    component: <ContextExample />
  },
  {
    name: 'RESULTS',
    url: '/results',
    component: <React.Suspense fallback={<>...</>}><Results /></React.Suspense>
  },
  {
    name: 'ABOUT',
    url: '/about',
    component: <About />,
  }
];

export const App = () => {

  // we can use useRoutes hook to define our routes
  // const element = useRoutes([
  //   { path: '/', element: <Home /> },
  //   { path: '/about', element: <About /> },
  //   { path: '*', element: <NotFound /> },
  // ])

  return (
    <Router>
      <NavMenu />
      <Container>
        <Routes>
          {/* TODO: Remove this - it is another way to do it */}
          {/* <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/hoc" element={<HocExample />} />
              <Route path="/renderProps" element={<RenderPropsExample />} />
              <Route path="/results" element={<React.Suspense fallback={<>...</>}><Results /></React.Suspense> } /> */}
          { MENU.map((item) => {
            return !item.children ? <Route key={item.url} path={item.url} element={item.component} /> :
              item.children.map((child) => <Route key={child.url} path={child.url} element={child.component} />)
          }
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
