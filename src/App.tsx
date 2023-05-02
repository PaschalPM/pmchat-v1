import router from "./router"
import {RouterProvider} from "react-router-dom"
import AppContextProvider from "./context"

const App = () => {
  return(
    <AppContextProvider>
      <RouterProvider router={router}/>
    </AppContextProvider>
  ) 
}

export default App