import { useState } from "react";
import React from "react";
import "./Hazard.css";
import right from "./right.png";
import left from "./left.png";
import { Instruction } from "./Instruction";
import { Result } from "./Result";
import { Videos } from "./Videos/Videos";
import { Time } from "../../models/Time";
import { Score } from "../../models/Score";

export function Hazard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scene, setScene] = useState("instruction");
  const [scores, setScores] = useState<Score[]>([]);
  const videoRef = React.useRef(null);

  //Function for going forward in test
  function btnForwardClick() {
    setCurrentIndex((prev) => prev + 1);
    if (currentIndex === 2) {
      setScene("results");
      setCurrentIndex(0);
    }
  }

  function Finish() {
    setScene("instructions");
    setScores([]);
  }

  //Function for going back in test
  function btnBackClick() {
    setCurrentIndex((prev) => prev - 1);
  }

  //Calculating time of the video
  function convertTime(seconds: number): Time {
    const m = Math.floor(seconds / 60);
    const s = Math.round(seconds % 60);
    return { m, s };
  }

  //Calculating click time
  function Target(e: React.MouseEvent<HTMLVideoElement>) {
    e.preventDefault();
    const vid: any = videoRef.current;
    const clickTime = convertTime(vid.currentTime);
    const clickSecond: number = vid.currentTime;

    //Calculating the correct answer
    if (
      clickTime.m === Videos[currentIndex].correctStart.m &&
      clickTime.s >= Videos[currentIndex].correctStart.s &&
      clickTime.s <= Videos[currentIndex].correctEnd.s
    ) {
      //Checking if have a score stored for current video id, if not -- store, if yes--nothing
      if (!scores.some((x) => x.id === currentIndex)) {
        setScores((prev) => [
          ...prev,
          {
            id: currentIndex,
            correct: 1,
            reactionTime: Number(
              (clickSecond - Videos[currentIndex].correctStart.s).toFixed(3)
            ),
          },
        ]);
      }
    }
  }

  const totalScore = scores.reduce((acc, curr) => acc + curr.correct, 0);
  const meanReactionTime = Number(
    (
      scores.reduce((acc, curr) => acc + curr.reactionTime, 0) / totalScore
    ).toFixed(3)
  );

  return (
    <div className="hazard-perception" id="practice">
      <p className="hazard-head">Practice Test</p>

      {(() => {
        switch (scene) {
          case "test":
            return (
              <div className="test">
                <img
                  onClick={btnBackClick}
                  className="controls"
                  src={left}
                  alt="back"
                />
                <video
                  src={Videos[currentIndex].id}
                  style={{ width: "60%" }}
                  onClick={Target}
                  ref={videoRef}
                  controls
                ></video>
                <img
                  onClick={btnForwardClick}
                  className="controls"
                  src={right}
                  alt="forward"
                />
              </div>
            );
          case "results":
            return (
              <Result
                scores={totalScore}
                meanReaction={meanReactionTime}
                click={Finish}
              />
            );
          default:
            return <Instruction click={() => setScene("test")} />;
        }
      })()}
    </div>
  );
}
