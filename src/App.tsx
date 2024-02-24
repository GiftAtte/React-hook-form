import { Provider } from "react-redux"
import Counter from "./components/Counter"
import { store } from "./features/store/store.store"
import { Youtube } from "./components/youtube"
// import { Youtube } from "./components/youtube"
// import {createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"

function App() {


  return (
     <Provider store={store}>   
        <Counter/>
        <Youtube/>
      </Provider>
  )
}

export default App
