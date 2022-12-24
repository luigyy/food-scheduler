import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="">
      <div className="flex justify-around navbar bg-neutral text-neutral-content md:px-24">
        <Link to="/">
          <a className="btn btn-ghost normal-case -tracking-widest text-lg md:text-2xl">
            Food Scheduler
          </a>
        </Link>
        <div className="space-x-5 ">
          <Link to="/readqr">
            <button className="text-sm md:text-base"> ReadQR</button>
          </Link>
          <Link to="/users">
            <button className="text-sm md:text-base"> Users </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
