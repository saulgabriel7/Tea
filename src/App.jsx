import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Home } from "./pages/Home"
import { Sobre } from "./pages/Sobre"
import { Materiais } from "./pages/Materiais"
import { Participantes } from "./pages/Participantes"
import { Descobrir } from "./pages/Descobrir"
import { Comprovacoes } from "./pages/Comprovacoes"

import { theme } from "./styles/theme.js"
import { GlobalStyle } from "./styles/global.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path:"/sobre",
    element: <Sobre/>
  },

  {
    path:"/Materiais",
    element: <Materiais/>
  },

  {
    path:"/Participantes",
    element: <Participantes/>
  },

  {
    path:"/Descobrir",
    element: <Descobrir/>
  },

  {
    path:"/Comprovacoes",
    element: <Comprovacoes/>
  }
])

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
