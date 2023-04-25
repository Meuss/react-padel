const shots = [
  { name: "Serve", video: "zSTsLQQDhMw" },
  { name: "Returning serve", video: "qOEUKLLQ9pY" },
  { name: "Volley", video: "wCAqvaqrnZ4" },
  { name: "Lob", video: "3dzag7521pU" },
  { name: "Smash", video: "5l0vMSN2Mek" },
  { name: "Chiquita", video: "zoqNcDZg568" },
  { name: "Bandeja", video: "yHAJ5XjFUNg" },
  { name: "Bajada", video: "ZqGKg7g70r8" },
  { name: "Vibora", video: "PihyQF3EnHk" },
  { name: "Drop Shot", video: "nItfOr9O0A4" },
];
const Shots = () => {
  return (
    <div className="flex-1">
      <h2 className="mb-10 text-2xl font-bold">Shots</h2>
      <div className="grid gap-y-4 md:grid-cols-3 md:gap-x-4 xl:grid-cols-4">
        {shots.map((shot, i) => (
          <button key={i} className="btn">
            {shot.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shots;
