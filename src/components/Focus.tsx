import focusData from "../data/focus-cards.json";
import FocusCard from "./FocusCard";

interface Focus {
  title: string;
  content: string[];
}

const focus: Focus[] = Object.values(focusData).map((value: Focus) => ({
  title: value.title,
  content: value.content,
}));

export default function Focus() {
  return (
    <div className="grid w-full grid-cols-1  gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {focus.map((f, i) => (
        <FocusCard data={f} key={i}></FocusCard>
      ))}
    </div>
  );
}
