import React from "react";
import QrcodeReader from "../components/QrcodeReader";

interface ReadQRProps {}

const ReadQR: React.FC<ReadQRProps> = ({}) => {
  return (
    <div>
      {/* this div styles the camera  */}
      <div className="w-1/4 min-w-[280px] h-full mx-auto ">
        <QrcodeReader />
      </div>
    </div>
  );
};

export default ReadQR;
