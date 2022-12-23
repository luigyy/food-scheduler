import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import UserInterface from "../Interfaces/UserInterface";

const URL = "http://localhost:5000/getuserbyid/";
const PROFILE_IMAGE_PLACEHOLDER =
  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = ({}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserInterface>();
  const { id } = useParams();

  //get user from db
  useEffect(() => {
    const getUser = async (id: string) => {
      const response = await axios(URL + id);
      setUser(response.data.data.userData[0]);
    };
    getUser(id!).catch((err) => {
      navigate("/users/searchuser");
    });
  }, []);

  return (
    <div>
      <div className=" flex justify-around border-8 border-red-500 h-[calc(100vh-100px)] w-[80%] max-w-[600px] mx-auto mt-2">
        <div>
          <img
            className="h-1/3 p-4"
            src={user?.imgURL ? user.imgURL : PROFILE_IMAGE_PLACEHOLDER}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="mt-16 mr-8 md:mr-14">
            <span className="font-semibold">Name:</span> {user?.name}{" "}
            {user?.lastName}
          </h1>
          <h1>
            {" "}
            <span className="font-semibold">Email:</span> {user?.email}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
