import { Link } from "react-router-dom";

const shots = [
  { name: "Serve" },
  { name: "Forehand" },
  { name: "Backhand" },
  { name: "Volley" },
  { name: "Lob" },
  { name: "Smash" },
  { name: "Chiquita" },
  { name: "Bandeja" },
  { name: "Bajada" },
  { name: "Vibora" },
  { name: "Drop Shot" },
  { name: "Boost" },
  { name: "Kick Smash" },
];
const Shots = () => {
  return (
    <div className="flex-1">
      <h2 className="mb-10 text-2xl font-bold">Shots</h2>
      <div className="grid grid-cols-6 gap-20">
        {shots.map((shot, i) => (
          <div key={i}>{shot.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Shots;
