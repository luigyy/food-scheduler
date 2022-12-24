//@ts-nocheck
//could manage to get @types/react-qr-reader working properly

import React from "react";
import QrReader from "react-qr-reader";
import { useState } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import Error from "./Error";

interface QrcodeReaderProps {}

const QrcodeReader: React.FC<QrcodeReaderProps> = ({}) => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);

  const [data, setData] = useState("");

  const [error, setError] = useState("");

  const handleScan = async (scanData) => {
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      handleSuccess();
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = () => {
    setError("Error while scanning code");
  };

  const handleSuccess = async () => {
    //check if data object contains _id field
    const _id = data._id || null;
    if (!_id) {
      return setError("Invalid code. Code must contain proper user data");
    }
    //data contains user id
    //check if its a valid id in db
    //TODO
  };
  //
  return (
    <div>
      <div className="flex items-center justify-around">
        <div className="text-center p-5">
          <button
            className={`btn  ${startScan ? "btn-secondary" : "btn-primary"}`}
            onClick={() => {
              setStartScan(!startScan);
              setLoadingScan(!loadingScan);
              setData("");
              setError("");
            }}
          >
            {startScan ? "Stop Scan" : "Start Scan"}
          </button>
        </div>
        <div className={`dropdown dropdown-end ${startScan ? "" : "hidden"}`}>
          <label
            tabIndex={0}
            className="btn m-1 md:flex md:justify-around md:w-44"
          >
            <span className=""> Select camera</span>{" "}
            <span className="hidden md:inline">
              {" "}
              <BsFillCameraVideoFill />
            </span>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li onClick={(e) => setSelected("enviroment")}>
              <a>Back Camera</a>
            </li>
            <li value={"user"} onClick={(e) => setSelected("user")}>
              <a>Front Camera</a>
            </li>
          </ul>
        </div>
      </div>
      {startScan ? (
        <>
          {/* <div className="text-center">
            <ul
              className="dropdown"
              onChange={(e) => setSelected(e.target.value)}
            >
              <li value={"environment"}>Back Camera</li>
              <li value={"user"}>Front Camera</li>
            </ul>
          </div> */}
          <div>
            <QrReader
              facingMode={selected}
              delay={1000}
              onError={handleError}
              onScan={handleScan}
              // chooseDeviceId={()=>selected}
            />
          </div>
        </>
      ) : (
        <h1 className="w-full pt-32 text-center text-3xl text-neutral font-bold">
          {" "}
          Press "start scan" to open your camera and start scanning your users
          QR code !
        </h1>
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{data}</p>}
      {error && error.length !== 0 ? <Error text={error} /> : ""}
    </div>
  );
};

export default QrcodeReader;
