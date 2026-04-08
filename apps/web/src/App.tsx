import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-(--hero-background) text-(--text-strong)">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <section className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-(--border-soft) bg-(--surface-pill) px-4 py-2 text-sm tracking-[0.24em] text-(--text-soft) uppercase backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-400" />
              Phoenix Web
            </div>

            <div className="space-y-5">
              <p className="max-w-xl text-sm font-medium tracking-[0.3em] text-brand-500 uppercase dark:text-brand-300">
                Film discovery across web, mobile, and API
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                A sharper front row for every movie night.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-(--text-muted) sm:text-lg">
                Tailwind now drives the entire web surface, so the UI lives
                where the markup does and the leftover starter CSS is gone.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setCount((value) => value + 1)}
                className="inline-flex items-center justify-center rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-(--focus-ring) focus:ring-offset-2 focus:ring-offset-(--surface-canvas)"
              >
                Queue screening #{count + 1}
              </button>
              <div className="inline-flex items-center rounded-full border border-(--border-soft) bg-(--surface-pill) px-5 py-3 text-sm text-(--text-muted) backdrop-blur-sm">
                Demo clicks recorded: {count}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-(--border-soft) bg-(--surface-soft) p-5 backdrop-blur-sm">
                <p className="text-sm text-(--text-soft)">Live stack</p>
                <p className="mt-2 text-2xl font-semibold text-(--text-strong)">
                  Vite + React 19
                </p>
              </div>
              <div className="rounded-3xl border border-(--border-soft) bg-(--surface-soft) p-5 backdrop-blur-sm">
                <p className="text-sm text-(--text-soft)">Styling</p>
                <p className="mt-2 text-2xl font-semibold text-(--text-strong)">
                  Tailwind 4
                </p>
              </div>
              <div className="rounded-3xl border border-(--border-soft) bg-(--surface-soft) p-5 backdrop-blur-sm">
                <p className="text-sm text-(--text-soft)">Monorepo</p>
                <p className="mt-2 text-2xl font-semibold text-(--text-strong)">
                  Turbo workspace
                </p>
              </div>
            </div>
          </section>

          <aside className="relative">
            <div
              className="absolute inset-0 rounded-panel bg-brand-400/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-panel border border-(--border-soft) bg-(--surface-elevated) p-6 shadow-panel backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-(--text-soft)">Now previewing</p>
                  <h2 className="mt-1 text-2xl font-semibold text-(--text-strong)">
                    Phoenix Control Panel
                  </h2>
                </div>
                <span className="rounded-full border border-(--status-border) bg-(--status-bg) px-3 py-1 text-xs font-medium text-(--status-text)">
                  Ready
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-(--surface-soft) p-4">
                  <div className="flex items-center justify-between text-sm text-(--text-muted)">
                    <span>Launch prep</span>
                    <span>92%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-(--border-soft)">
                    <div className="h-2 w-[92%] rounded-full bg-linear-to-r from-brand-300 via-sky-400 to-brand-500" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-(--border-soft) bg-(--surface-soft) p-4">
                    <p className="text-sm text-(--text-soft)">
                      Responsive shells
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-(--text-strong)">
                      3
                    </p>
                    <p className="mt-1 text-sm text-(--text-muted)">
                      Web, mobile, and API aligned.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-(--border-soft) bg-(--surface-soft) p-4">
                    <p className="text-sm text-(--text-soft)">
                      Starter CSS left
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-(--text-strong)">
                      0
                    </p>
                    <p className="mt-1 text-sm text-(--text-muted)">
                      Component styles now live in JSX.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-(--border-strong) bg-(--surface-inset) p-4">
                  <p className="text-sm font-medium text-(--text-strong)">
                    Next useful move
                  </p>
                  <p className="mt-2 text-sm leading-6 text-(--text-soft)">
                    Wire these blocks to real movie and alert data from the
                    shared packages when you are ready to move beyond the
                    scaffold.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default App;
