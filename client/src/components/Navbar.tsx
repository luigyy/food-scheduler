import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div>
      <div className="flex justify-around navbar bg-neutral text-neutral-content px-24">
        <a className="btn btn-ghost normal-case -tracking-widest text-2xl">
          Food Scheduler
        </a>
        <div className="space-x-5">
          <Link to="/readqr">
            <button> Read QR</button>
          </Link>
          <Link to="/users">
            <button> Users </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
