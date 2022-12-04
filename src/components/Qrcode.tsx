import React from "react";
import QRcode from "react-qr-code";

interface QrcodeProps {
  payload: string;
}

const Qrcode: React.FC<QrcodeProps> = ({ payload }) => {
  return (
    <div className="p-16 bg-white">
      <div>
        <QRcode size={256} value={payload} />
      </div>
    </div>
  );
};

export default Qrcode;
