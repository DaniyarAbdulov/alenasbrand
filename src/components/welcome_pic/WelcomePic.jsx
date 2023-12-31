import React from "react";
import './WelcomeModule.css'

const WelcomePic = () => {
  return (
    <div className=" slide-in w-full h-full flex justify-center">
      <div>
        <img
          className="shadow-2xl shadow-slate-500/50 contrast-125 drop-shadow-2xl"
          src="https://media.boohoo.com/i/boohooamplience/230811_desktop_essentials_ukus"
        />
      </div>
    </div>
  );
};

export default WelcomePic;
