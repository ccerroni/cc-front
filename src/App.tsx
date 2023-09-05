
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
const Results = React.lazy(() => import("./components/Results/Results"));

export const MENU: MenuItem[] = [
  {
    name: 'HOME',
    url: '/',
    component: <Home />
  },
  {
    name: 'RESULTS',
    url: '/results',
    component: <React.Suspense fallback={<>...</>}><Results /></React.Suspense>
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
    name: 'ABOUT',
    url: '/about',
    component: <About />,
  },
  {
    name: 'TEST',
    url: '/test',
    children: [
      {
        name: 'ABOUT1',
        url: '/about/1',
        component: <About />,
      },
      {
        name: 'ABOUT2',
        url: '/about',
        component: <About />,
      },
      {
        name: 'ABOUT3',
        url: '/about',
        component: <About />,
      },
      {
        name: 'ABOUT4',
        url: '/about',
        component: <About />,
      },
    ]
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
        {MENU.map((item) => <Route key={item.url} path={item.url} element={item.component} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
    </Router>
  )
}

export default App
