import React from "react";
import { useDispatch, useSelector } from "react-redux";
import shotsData from "../data/shots.json";
import { Shot } from "../types/shots";
import { set } from "../store/shotSlice";
import ShotsVideo from "./ShotsVideo";

const shots: Shot[] = Object.values(shotsData).map((value: Shot) => ({
  name: value.name,
  videoID: value.videoID,
}));

const Shots: React.FC = () => {
  const dispatch = useDispatch();
  const currentShot: Shot = useSelector((state: { shot: Shot }) => state.shot);
  return (
    <div className="flex-1">
      <h2 className="mb-10 text-2xl font-bold">
        Shots &gt; {currentShot.name}
      </h2>
      <div className="mx-auto mb-10 max-w-5xl text-xl font-bold">
        <ShotsVideo />
      </div>
      <div className="grid gap-y-4 md:grid-cols-3 md:gap-x-4 xl:grid-cols-4">
        {shots.map((shot, i) => (
          <button
            key={i}
            className="btn"
            onClick={() => {
              dispatch(set(shot));
            }}
          >
            {shot.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shots;
