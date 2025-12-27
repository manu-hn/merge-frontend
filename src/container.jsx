import { Outlet } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const BodyContainer = () => {
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