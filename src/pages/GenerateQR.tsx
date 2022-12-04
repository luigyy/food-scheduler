import React from "react";
import Qrcode from "../components/Qrcode";

interface GenerateQRProps {}

const GenerateQR: React.FC<GenerateQRProps> = ({}) => {
  return (
    <div>
      <Qrcode payload="hello world" />
    </div>
  );
};

export default GenerateQR;
