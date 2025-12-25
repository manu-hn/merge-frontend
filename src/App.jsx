import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "@/components/auth/login"
import Register from "@/components/auth/register"
import BodyContainer from "./container"

function App() {

  return (
    <>
      <BrowserRouter basename="/">

        <Routes >
          <Route path="/" element={<BodyContainer />} >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
