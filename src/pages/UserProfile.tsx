import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import UserInterface from "../Interfaces/UserInterface";
import Qrcode from "../components/Qrcode";
import QRCode from "react-qr-code";

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
  //payload to generate qr
  const payload = { _id: id };
  return (
    <div className=" flex flex-wrap bg-secondary h-[calc(100vh-100px)] w-[80%] max-w-[600px] mx-auto mt-2">
      <div className="flex justify-around w-full h-1/2 ">
        <img
          className="w-1/3 p-5 object-contain"
          src={user?.imgURL ? user.imgURL : PROFILE_IMAGE_PLACEHOLDER}
          alt=""
        />
        <div className="mt-20 mr-12">
          <h1 className="p-2">
            <span className="font-bold">Name: </span>
            {user?.name} {user?.lastName}
          </h1>
          <h1 className="p-2">
            {" "}
            <span className="font-bold">Email:</span> {user?.email}
          </h1>
        </div>
      </div>
      <div className=" flex justify-center w-full h-1/2">
        {/* @ts-ignore */}
        <Qrcode payload={payload} size={150} />
      </div>
    </div>
  );
};

export default UserProfile;
