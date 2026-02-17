import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/components/auth/login";
import Register from "@/components/auth/register";
import BodyContainer from "./container";
import { Provider } from "react-redux";
import appStore from "@/store/app-store";
import FeedPage from "@/components/feed";
import ProfilePage from "@/components/profile";
import MyConnections from "@/components/connections";
import ConnectionRequests from "@/components/connections/requests";
import LandingPage from "./components/home";

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes >
            <Route path="/" element={<BodyContainer />} >

              <Route path="/" element={<LandingPage />} />
              <Route path="/feed" element={<FeedPage />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/connections" element={<MyConnections />} />
              <Route path="/connections/requests" element={<ConnectionRequests />} />

            </Route>

          </Routes>

        </BrowserRouter>
      </Provider>


    </>
  )
}

export default App
