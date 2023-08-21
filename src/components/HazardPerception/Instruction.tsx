import React, { MouseEventHandler } from "react";
import "./Hazard.css";

type Props = {
  click: React.MouseEventHandler;
};

export function Instruction({ click }: Props) {
  return (
    <div className="instruction">
      <p className="inst-head">Instruction</p>
      <p className="inst-text">
        The Hazard Perception Test consists of a series of video clips
        simulating real driving scenarios. Your task is to identify hazards as
        they develop on the road and respond by clicking a place in the video. A
        hazard is any situation that requires you to change speed or direction
        to avoid a potential collision. Potential hazards may appear as:
      </p>
      <ul className="inst-ul">
        <li> Pedestrian at a Crosswalk</li>
        <li> Sudden Lane Change by Another Driver</li>
        <li>Parked Delivery Truck</li>
      </ul>
      <button className="inst-btn" onClick={click}>
        Take the Test
      </button>
    </div>
  );
}
