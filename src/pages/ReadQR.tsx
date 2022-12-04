import React from "react";
import QrcodeReader from "../components/QrcodeReader";

interface ReadQRProps {}

const ReadQR: React.FC<ReadQRProps> = ({}) => {
  return (
    <div>
      ReadQR
      {/* this div styles the camera  */}
      <div className="w-1/3 min-w-[280px] h-full mx-auto border-8 border-red-500">
        <QrcodeReader />
      </div>
    </div>
  );
};

export default ReadQR;
