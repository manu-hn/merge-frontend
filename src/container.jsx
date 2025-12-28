import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./store/slices/user-slice";

const BodyContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((store) => store?.user);

  const fetchUserDetails = async () => {
    if(loggedInUser) return;
    try {
      const response = await axios.get(BASE_URL + "profile/view", { withCredentials: true, });
      dispatch(loginUser(response.data))
   
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.log("Error fetching user details:", error);
    }
  }
  useEffect(() => {
    fetchUserDetails();
  }, []);

  
  return (
    <div>
      <Navbar />
      {/* <h1 className="font-semibold text-red-600">Merge - Where Developers Connect</h1> */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default BodyContainer;