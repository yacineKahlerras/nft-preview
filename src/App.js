import React from "react";
import nftImg from "./images/image-equilibrium.jpg";
import ethereumIcon from "./images/icon-ethereum.svg";
import avatarImg from "./images/image-avatar.png";
import clockIcon from "./images/icon-clock.svg";

export default function App() {
  return (
    <div className=" text-lg w-96 bg-very-dark-blue-card rounded-3xl overflow-hidden text-white my-14 p-8">
      <img className="rounded-xl mb-6" src={nftImg} alt="nft"></img>
      <h1 className="text-2xl font-bold mb-3">Equilibrium #3429</h1>
      <p className="text-soft-blue font-light mb-3">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex items-center gap-3 mb-6">
        <img className="w-4" src={ethereumIcon} alt="etherum icon"></img>
        <h2 className="mr-auto text-cyan font-semibold">0.041 ETH</h2>
        <img className="w-6" src={clockIcon} alt="clock icon"></img>
        <h2 className="text-soft-blue font-medium">3 days left</h2>
      </div>
      <div className="flex items-center gap-5 border-t border-t-soft-blue pt-6 font-medium">
        <img
          className="w-11 border border-white rounded-full"
          src={avatarImg}
          alt="avatar"
        ></img>
        <span>
          <span className="text-soft-blue">Creation of </span>Jules Wyvern
        </span>
      </div>
    </div>
  );
}
