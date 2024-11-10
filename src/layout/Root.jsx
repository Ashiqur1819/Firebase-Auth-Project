import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Root = () => {


    return (
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div className="px-6">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Root;