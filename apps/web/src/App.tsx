import { useState } from "react";

const MOVIES = ["THE NEON DEMON", "MULHOLLAND DRIVE", "LOST HIGHWAY"];

const HISTORY = [
  {
    idx: "01",
    name: "THE RIALTO CINEMA",
    location: "BERLIN, GERMANY",
    duration: "12 Weeks",
    year: "2024",
  },
  {
    idx: "02",
    name: "METRO ART HOUSE",
    location: "PARIS, FRANCE",
    duration: "8 Weeks",
    year: "2023",
  },
  {
    idx: "03",
    name: "CINEMA DE LA VILLE",
    location: "BRUSSELS, BELGIUM",
    duration: "14 Weeks",
    year: "2023",
  },
];

function App() {
  const [movieIndex, setMovieIndex] = useState(0);

  return (
    <main className="flex min-h-screen bg-[#080c18] text-white">
      <aside className="flex w-[38%] shrink-0 flex-col gap-10 border-r border-white/8 p-10">
        <header>
          <h1 className="text-2xl font-bold tracking-[0.2em] text-cyan-400">
            CINEMA NOIR
          </h1>
          <p className="mt-1 text-[10px] tracking-[0.3em] text-white/30 uppercase">
            The Digital Auteur Registry
          </p>
        </header>
        <div>
          <p className="mb-4 text-[10px] tracking-[0.28em] text-white/30 uppercase">
            Select Active Feature
          </p>
          <div className="flex items-center justify-between border-l-2 border-cyan-400 py-2 pl-4">
            <span className="text-xl font-bold tracking-wider">
              {MOVIES[movieIndex]}
            </span>
            <div className="ml-4 flex flex-col gap-1">
              <button
                type="button"
                onClick={() =>
                  setMovieIndex((i) => (i - 1 + MOVIES.length) % MOVIES.length)
                }
                className="leading-none text-cyan-400 transition hover:text-cyan-300"
                aria-label="Previous"
              >
                ▲
              </button>
              <button
                type="button"
                onClick={() => setMovieIndex((i) => (i + 1) % MOVIES.length)}
                className="leading-none text-cyan-400 transition hover:text-cyan-300"
                aria-label="Next"
              >
                ▼
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-end">
          <div className="flex h-56 w-full items-end justify-center rounded bg-[#0d1626] p-3">
            <p className="text-[10px] tracking-[0.28em] text-white/25 uppercase">
              Frame No. 042
            </p>
          </div>
        </div>
      </aside>
      <section className="flex flex-1 flex-col gap-10 p-10">
        <div className="flex justify-end">
          <span className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-white/40 uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live Status
          </span>
        </div>
        <div>
          <h2 className="mb-6 text-[10px] tracking-[0.32em] text-white/35 uppercase">
            Currently Playing
          </h2>
          <div className="grid grid-cols-3 gap-6 border-b border-white/8 pb-6">
            <div>
              <p className="mb-1 text-[10px] tracking-[0.2em] text-white/35 uppercase">
                Venue
              </p>
              <p className="text-sm font-medium">Grand Electric Hall, London</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] tracking-[0.2em] text-white/35 uppercase">
                Seats
              </p>
              <p className="text-sm font-medium">14 / 280</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] tracking-[0.2em] text-white/35 uppercase">
                Ends
              </p>
              <p className="text-sm font-medium">Oct 24</p>
            </div>
          </div>
          <button
            type="button"
            className="mt-6 w-full bg-cyan-400 py-4 text-xs font-bold tracking-[0.25em] text-black uppercase transition hover:bg-cyan-300 focus:outline-none"
          >
            Purchase Tickets →
          </button>
        </div>
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-[10px] tracking-[0.32em] text-white/35 uppercase">
              Showtime History
            </h2>
            <span className="text-[10px] text-white/25">2023—2024</span>
          </div>
          <div>
            {HISTORY.map((item) => (
              <div
                key={item.idx}
                className="flex items-center gap-6 border-b border-white/6 py-4"
              >
                <span className="w-5 text-xs text-white/25">{item.idx}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold tracking-wide">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-[10px] tracking-[0.18em] text-white/30">
                    {item.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] tracking-[0.15em] text-white/35 uppercase">
                    Duration
                  </p>
                  <p className="text-sm">{item.duration}</p>
                </div>
                <div className="w-12 text-right">
                  <p className="text-[10px] tracking-[0.15em] text-white/35 uppercase">
                    Year
                  </p>
                  <p className="text-sm font-semibold text-cyan-400">
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.25em] text-white/30 uppercase transition hover:text-white/50"
          >
            View Full Archive ∨
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
