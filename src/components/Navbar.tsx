import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div>
      <div className="flex justify-around navbar bg-neutral text-neutral-content px-24">
        <a className="btn btn-ghost normal-case text-xl">Food Scheduler</a>
        <div className="space-x-5">
          <Link to="/readqr">
            <button> Read QR</button>
          </Link>
          <Link to="/generateqr">
            <button> Generate QR</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
