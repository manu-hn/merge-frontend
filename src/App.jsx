import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "@/components/auth/login"
import Register from "@/components/auth/register"
import BodyContainer from "./container"
import { Provider } from "react-redux"
import appStore from "@/store/app-store"
import FeedPage from "@/components/feed"

function App() {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes >
          <Route path="/" element={<BodyContainer />} >
          <Route path="/" element={<FeedPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

        </Routes>

      </BrowserRouter>
      </Provider>


    </>
  )
}

export default App
