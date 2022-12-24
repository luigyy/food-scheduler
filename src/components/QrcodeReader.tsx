//@ts-nocheck
//could manage to get @types/react-qr-reader working properly

import React from "react";
import QrReader from "react-qr-reader";
import { useState } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";

interface QrcodeReaderProps {}

const QrcodeReader: React.FC<QrcodeReaderProps> = ({}) => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);

  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div>
      <div className="flex items-center justify-around">
        <div className="text-center p-5">
          <button
            className={`btn text-2xl ${
              startScan ? "btn-secondary" : "btn-primary"
            }`}
            onClick={() => {
              setStartScan(!startScan);
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
      {startScan && (
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
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{data}</p>}
    </div>
  );
};

export default QrcodeReader;
