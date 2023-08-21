import { Video } from "../../../models/Video";
import video1 from "./v1.mp4";
import video2 from "./v2.mp4";
import video3 from "./v3.mp4";

export const Videos: Video[] = [
  {
    id: video1,
    correctStart: {
      m: 0,
      s: 23,
    },
    correctEnd: {
      m: 0,
      s: 30,
    },
  },
  {
    id: video2,
    correctStart: {
      m: 0,
      s: 32,
    },
    correctEnd: {
      m: 0,
      s: 38,
    },
  },
  {
    id: video3,
    correctStart: {
      m: 0,
      s: 28,
    },
    correctEnd: {
      m: 0,
      s: 32,
    },
  },
];
