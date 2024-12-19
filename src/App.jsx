import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import SuccessPage from "./components/SuccessPage"
import WelcomeBack from "./components/WelcomeBack"
import AllUserTable from "./components/AllUserTbale"


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/success',
    element:<SuccessPage />
  },
  {
    path:'/welcomeback',
    element:<WelcomeBack />
  },
  {
    path:'/alluser',
    element:<AllUserTable />
  },
])

function App() {

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
