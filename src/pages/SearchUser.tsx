import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface SearchUserProps {}

const URL = "http://localhost:5000/getuserbyname";

interface Users {
  _id: any;
  name: string;
  lastName: string;
  email: string;
}
const SearchUser: React.FC<SearchUserProps> = ({}) => {
  const [name, setName] = useState<string>();
  const [users, setUsers] = useState<Users[]>();

  //handle errors
  const [error, setError] = useState<string | boolean>();

  //get users
  const getUsersByName = (name: any): void => {
    axios
      .get(URL, { params: { name } })
      .then((res) => {
        setUsers(res.data.data.userData);
        setError(false);
      })
      .catch((err) =>
        setError("There was an error while retrieving user from database")
      );
  };

  const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };

  const onSubmit = () => {
    getUsersByName(name);
  };

  return (
    <div>
      {/* search bar */}
      <div className="form-control min-w-[280px] ">
        <div className="input-group flex justify-center p-10 ">
          <input
            type="text"
            placeholder="Search…"
            value={name || ""}
            className="input input-bordered"
            onChange={(e) => onNameChange(e)}
          />
          <button className="btn btn-square" onClick={onSubmit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* search bar */}
      {users?.map((user) => (
        <span>{user.name}</span>
      ))}
    </div>
  );
};

export default SearchUser;
