import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppProvider from "./providers/App";
import { Reset } from "styled-reset";
import GlobalStyle from "./GlobalStyle";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/login/LoginPage";
import Introduce from "./pages/introduce/Introduce";
import Project from "./pages/project/Project";
import Post from "./pages/post/Post";

const routesConfig = [
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/logout",
    element: <LoginPage />
  },
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/introduce", element: <Introduce /> },
      { path: "/project", element: <Project /> },
      { path: "/post", element: <Post /> },
    ]
  }
]

function App() {
  const router = createBrowserRouter(routesConfig);

  return (
    <AppProvider>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
