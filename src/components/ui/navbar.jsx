import { Link, useNavigate } from "react-router-dom";
import MergeLogo from "@/assets/logo/merge-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, USER_ICON_IMAGE } from "@/utils/constants";
import { logoutUser } from "@/store/slices/user-slice";
import axios from "axios";
import { useState } from "react";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const loggedInUser = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await axios.post(BASE_URL + 'logout/user', {}, { withCredentials: true, });
      dispatch(logoutUser());
      navigate("/login");

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-base-100 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="btn btn-ghost text-xl w-[17.5%]">
          <img className={``} src={MergeLogo} slot="Merge Logo" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
          <Link href="#who-its-for" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Who It{"'"}s For
          </Link>
          <Link href="#why-merge" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Why Merge
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {
            loggedInUser ? (

              <>
                <button onClick={logout} variant="ghost" size="sm" className="btn bg-red-500 text-white hover:text-foreground">
                  Sign Out
                </button>
              </>

            ) : (
              <>
                <Link to={"/login"} className="text-muted-foreground hover:text-foreground">
                  Sign In
                </Link>

                <button size="sm" className="btn btn-primary bg-primary text-primary-foreground hover:bg-primary/90">
                  Join Waitlist
                </button>
              </>
            )
          }


        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} */}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              How It Works
            </Link>
            <Link href="#who-its-for" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Who It{"'"}s For
            </Link>
            <Link href="#why-merge" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Why Merge
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
              <Button variant="ghost" size="sm" className="justify-start text-muted-foreground hover:text-foreground">
                Sign In
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Join Waitlist
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar