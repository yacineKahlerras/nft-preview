import React from "react";
import nftImg from "./images/image-equilibrium.jpg";
import ethereumIcon from "./images/icon-ethereum.svg";
import avatarImg from "./images/image-avatar.png";

export default function App() {
  return (
    <div className="w-96 bg-very-dark-blue-card rounded-3xl overflow-hidden text-white my-14 p-8">
      <img className="rounded-xl" src={nftImg} alt="nft"></img>
      <h1 className="text-3xl font-bold">Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <img src={ethereumIcon} alt="etherum icon"></img>
      <h2>0.041 ETH</h2>
      <h2>3 days left</h2>
      <div>
        <img src={avatarImg} alt="avatar"></img>
        <span>Creation of</span>
        <span>Jules Wyvern</span>
      </div>
    </div>
  );
}
