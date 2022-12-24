import React from "react";

interface MainProps {}

const Main: React.FC<MainProps> = ({}) => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Tracking people made easy </h1>
          <p className="py-6">
            Track your users without having to do it manually. Just give them a
            custom QR code and let the app do the rest!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
