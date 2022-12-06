import React from "react";
import Qrcode from "../components/Qrcode";
import { useState, useEffect } from "react";
import axios from "axios";

interface UserProps {}

interface Users {
  _id: any;
  name: string;
  lastName: string;
  email: string;
}

//get user by name
const URL = "http://localhost:5000/getuserbyname";

const Users: React.FC<UserProps> = ({}) => {
  const [name, setName] = useState<string>();
  const [users, setUsers] = useState<Users[]>();

  //handle errors
  const [error, setError] = useState<string>();

  useEffect(() => {
    getUsersByName(name);
  }, [name]);

  //get users
  const getUsersByName = (name: any): void => {
    axios
      .get(URL, { params: { name } })
      .then((res) => setUsers(res.data.data.userData))
      .catch((err) => console.log(err));
  };

  const handleName = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };

  return (
    <div>
      <div className="w-full text-center mx-auto h-screen">
        <input
          type="text"
          placeholder="Search user by name"
          className="input w-full max-w-xs m-5 border-secondary "
          value={name || ""}
          onChange={(e) => handleName(e)}
        />
        <div>
          {users?.map((user) => (
            <div
              tabIndex={0}
              className="m-2 relative w-1/2 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                <span>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    className="w-10 absolute top-1 left-1 rounded-full "
                    alt=""
                  />
                </span>
                {user.name} {user.lastName}
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Users;
