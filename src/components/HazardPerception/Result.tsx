import React from "react";
import back from "./back.png";

type Props = {
  click: React.MouseEventHandler;
  scores: number;
  meanReaction: number;
};

export function Result({ click, scores, meanReaction }: Props) {
  return (
    <div className="result">
      <p className="inst-head ">Result</p>
      <p className="result-1">Score: {scores}/ 3</p>
      <p className="result-1">Reaction Time: {meanReaction} s </p>
      <p className="inst-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi
        iure harum nihil quam nostrum? Odit, quo amet quos, laudantium
        doloremque atque non cupiditate, aperiam ipsam facere quaerat veritatis
        libero modi nesciunt distinctio error similique qui nam! Iure tempora
        corrupti deleniti. Quas maxime, praesentium ab debitis quis labore
        deserunt possimus.
      </p>
      <button className="inst-btn test-btn" onClick={click}>
        Test
        <img src={back} alt="back" style={{ width: "15%" }} />
      </button>
    </div>
  );
}
