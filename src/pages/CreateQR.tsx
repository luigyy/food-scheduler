import React from "react";
import Qrcode from "../components/Qrcode";

interface CreateQRProps {}

const CreateQR: React.FC<CreateQRProps> = ({}) => {
  return (
    <div>
      CreateQR
      <Qrcode payload="hello world" />
    </div>
  );
};

export default CreateQR;
