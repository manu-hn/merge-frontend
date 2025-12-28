import { Link, useNavigate } from "react-router-dom";
import MergeLogo from "@/assets/logo/merge-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, USER_ICON_IMAGE } from "@/utils/constants";
import { logoutUser } from "@/store/slices/user-slice";
import axios from "axios";


const Navbar = () => {
  const loggedInUser = useSelector((store) => store.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const logout =async ()=>{
    try {
      await axios.post(BASE_URL+'logout/user', {}, {withCredentials : true,});
      dispatch(logoutUser());
      navigate("/login");
      
    } catch (error) {
      console.error(error);
    }
  }

  
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl w-[17.5%]">
          <img className={``} src={MergeLogo} slot="Merge Logo" />
        </Link>
      </div>

      {
        loggedInUser ? (
          <div className="flex gap-2 items-center">
            Welcome {loggedInUser.firstName}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img

                    alt="Tailwind CSS Navbar component"
                    src={`${loggedInUser?.photoUrl || USER_ICON_IMAGE}`} />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><a>Settings</a></li>
                <li><p onClick={logout}>Logout</p></li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn btn-primary">Login</Link>
          </div>
        )
      }

    </div>
  )
}

export default Navbar