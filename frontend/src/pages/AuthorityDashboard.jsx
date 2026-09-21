import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DisasterMap from "../components/DisasterMap";

function AuthorityDashboard() {
  const [selectedIncident, setSelectedIncident] = useState(null);
    const navigate = useNavigate();
  const incidents = [
    {
      id: "RQ-001",
      type: "Flood",
      severity: "Critical",
      affected: "50+",
      location: "Sector 12",
      needs: ["Rescue", "Medical"],
      color: "red",
    },
    {
      id: "RQ-002",
      type: "Landslide",
      severity: "High",
      affected: "25+",
      location: "Hill Road",
      needs: ["Rescue", "Evacuation"],
      color: "orange",
    },
    {
      id: "RQ-003",
      type: "Fire",
      severity: "High",
      affected: "20+",
      location: "Industrial Area",
      needs: ["Fire Response", "Medical"],
      color: "orange",
    },
    {
      id: "RQ-004",
      type: "Road Blockage",
      severity: "Medium",
      affected: "10",
      location: "Main Highway",
      needs: ["Monitoring"],
      color: "yellow",
    },
  ];

  const getSeverityStyle = (severity) => {
    if (severity === "Critical") {
      return "border-red-500/30 bg-red-500/10 text-red-400";
    }

    if (severity === "High") {
      return "border-orange-500/30 bg-orange-500/10 text-orange-400";
    }

    return "border-yellow-500/30 bg-yellow-500/10 text-yellow-400";
  };

  return (
    <div className="min-h-screen bg-[#050b14] text-white">

      {/* NAVBAR */}
      <nav className="border-b border-white/10 bg-[#07101d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link to="/home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl ring-1 ring-cyan-400/30">
              🛡️
            </div>

            <div>
              <h1 className="text-xl font-bold">
                ResQ<span className="text-cyan-400">-AI</span>
              </h1>

              <p className="text-[10px] tracking-[0.25em] text-slate-500">
                DISASTER INTELLIGENCE
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">

  <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-400 sm:block">
    ● SYSTEM OPERATIONAL
  </div>

  <Link
    to="/resources"
    className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
  >
    Resources →
  </Link>

  <Link
    to="/home"
    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
  >
    ← Home
  </Link>

</div>

        </div>
      </nav>


      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[0.25em] text-cyan-400">
            AUTHORITY CONTROL CENTER
          </p>

          <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
            Disaster Response Dashboard
          </h2>

          <p className="mt-4 max-w-3xl text-slate-400">
            Monitor incidents, understand response priorities and review
            AI-generated resource recommendations.
          </p>
        </div>


        {/* KPI CARDS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-red-500/20 bg-[#081421] p-6">
            <p className="text-sm text-slate-500">Critical Incidents</p>
            <p className="mt-3 text-4xl font-black text-red-400">03</p>
            <p className="mt-2 text-xs text-red-400">
              Requires immediate review
            </p>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-[#081421] p-6">
            <p className="text-sm text-slate-500">High Priority</p>
            <p className="mt-3 text-4xl font-black text-orange-400">05</p>
            <p className="mt-2 text-xs text-orange-400">
              Awaiting response
            </p>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-[#081421] p-6">
            <p className="text-sm text-slate-500">People Affected</p>
            <p className="mt-3 text-4xl font-black text-purple-300">240+</p>
            <p className="mt-2 text-xs text-slate-500">
              Across active incidents
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#081421] p-6">
            <p className="text-sm text-slate-500">Resources Active</p>
            <p className="mt-3 text-4xl font-black text-cyan-400">08</p>
            <p className="mt-2 text-xs text-cyan-400">
              Currently deployed
            </p>
          </div>

        </div>


        {/* MAP + INCIDENTS */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* MAP */}
          <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#081421] lg:col-span-2">

            <div className="flex items-center justify-between border-b border-white/10 p-6">

              <div>
                <p className="text-xs font-semibold tracking-widest text-cyan-400">
                  LIVE OVERVIEW
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  Incident Priority Map
                </h3>
              </div>

              <div className="flex gap-3 text-xs">
                <span className="text-red-400">● Critical</span>
                <span className="text-orange-400">● High</span>
                <span className="text-yellow-400">● Medium</span>
              </div>

            </div>

            {/* DEMO MAP */}
            <div className="relative h-107.5 overflow-hidden bg-[#06101c]">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />

              {/* Map label */}
              <div className="absolute left-6 top-6 rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-xs text-slate-400 backdrop-blur-md">
                DEMO PRIORITY MAP
              </div>

              {/* Critical */}
              <button
                onClick={() => setSelectedIncident(incidents[0])}
                className="absolute left-[25%] top-[35%] flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20 ring-2 ring-red-500/60 transition hover:scale-110"
              >
                <span className="h-5 w-5 animate-pulse rounded-full bg-red-500" />
              </button>

              {/* High */}
              <button
                onClick={() => setSelectedIncident(incidents[1])}
                className="absolute right-[25%] top-[25%] flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 ring-2 ring-orange-500/60 transition hover:scale-110"
              >
                <span className="h-4 w-4 rounded-full bg-orange-500" />
              </button>

              {/* High */}
              <button
                onClick={() => setSelectedIncident(incidents[2])}
                className="absolute right-[35%] bottom-[25%] flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 ring-2 ring-orange-500/60 transition hover:scale-110"
              >
                <span className="h-4 w-4 rounded-full bg-orange-500" />
              </button>

              {/* Medium */}
              <button
                onClick={() => setSelectedIncident(incidents[3])}
                className="absolute bottom-[20%] left-[30%] flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/20 ring-2 ring-yellow-500/50 transition hover:scale-110"
              >
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
              </button>

              {/* Bottom status */}
              <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-slate-400 backdrop-blur-md">
                4 active incidents detected
              </div>

            </div>

          </section>


          {/* INCIDENT QUEUE */}
          <section className="rounded-3xl border border-white/10 bg-[#081421]">

            <div className="border-b border-white/10 p-6">
              <p className="text-xs font-semibold tracking-widest text-red-400">
                RESPONSE QUEUE
              </p>

              <h3 className="mt-1 text-xl font-bold">
                Active Incidents
              </h3>
            </div>

            <div className="max-h-107.5 space-y-3 overflow-y-auto p-4">

              {incidents.map((incident) => (
                <button
                  key={incident.id}
                  onClick={() => setSelectedIncident(incident)}
                  className="w-full rounded-2xl border border-white/10 bg-white/3 p-4 text-left transition hover:border-cyan-400/30 hover:bg-white/6"
                >

                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <p className="font-bold">
                        {incident.type}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {incident.id} • {incident.location}
                      </p>
                    </div>

                    <span
                      className={`rounded-full border px-2 py-1 text-[10px] font-bold ${getSeverityStyle(
                        incident.severity
                      )}`}
                    >
                      {incident.severity}
                    </span>

                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs">

                    <span className="text-slate-500">
                      👥 {incident.affected} affected
                    </span>

                    <span className="text-cyan-400">
                      View →
                    </span>

                  </div>

                </button>
              ))}

            </div>

          </section>

        </div>


        {/* SELECTED INCIDENT */}
        {selectedIncident && (
          <section className="mt-6 rounded-3xl border border-cyan-400/20 bg-[#081421] p-6">

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

              <div>
                <p className="text-xs tracking-widest text-cyan-400">
                  SELECTED INCIDENT
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  {selectedIncident.type}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {selectedIncident.id} • {selectedIncident.location}
                </p>
              </div>

              <span
                className={`w-fit rounded-full border px-4 py-2 text-sm font-bold ${getSeverityStyle(
                  selectedIncident.severity
                )}`}
              >
                {selectedIncident.severity} PRIORITY
              </span>

            </div>


            <div className="mt-6 grid gap-4 md:grid-cols-3">

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-xs text-slate-500">
                  AFFECTED PEOPLE
                </p>

                <p className="mt-2 text-2xl font-black">
                  {selectedIncident.affected}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-xs text-slate-500">
                  LOCATION
                </p>

                <p className="mt-2 font-bold">
                  📍 {selectedIncident.location}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-xs text-slate-500">
                  REQUIRED
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedIncident.needs.map((need) => (
                    <span
                      key={need}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {need}
                    </span>
                  ))}
                </div>
              </div>

            </div>


            {/* AI RECOMMENDATION */}
            <div className="mt-5 rounded-2xl border border-purple-400/20 bg-purple-400/5 p-5">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400/10">
                  🤖
                </div>

                <div>
                  <p className="text-xs tracking-widest text-purple-300">
                    AI RESPONSE RECOMMENDATION
                  </p>

                  <p className="text-sm text-slate-400">
                    Decision-support recommendation
                  </p>
                </div>
              </div>


              <div className="mt-5 grid gap-3 sm:grid-cols-3">

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-slate-500">
                    🚑 AMBULANCE
                  </p>
                  <p className="mt-1 text-xl font-black">
                    2
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-slate-500">
                    🚒 RESCUE TEAM
                  </p>
                  <p className="mt-1 text-xl font-black">
                    1
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-slate-500">
                    🏥 MEDICAL UNIT
                  </p>
                  <p className="mt-1 text-xl font-black">
                    1
                  </p>
                </div>

              </div>


              <p className="mt-4 text-sm leading-6 text-slate-400">
                Recommendation is based on incident severity,
                estimated affected population, reported needs and
                available response resources.
              </p>


              <div className="mt-5 flex flex-col gap-3 sm:flex-row">

               <button
  onClick={() =>
    navigate("/resource-allocation", {
      state: {
        incident: selectedIncident,
      },
    })
  }
>
  Review Allocation
</button>

                <button
                  onClick={() => setSelectedIncident(null)}
                  className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:bg-white/5"
                >
                  Close
                </button>

              </div>

            </div>

          </section>
        )}


        {/* FOOTER NOTE */}
        <div className="mt-8 rounded-2xl border border-yellow-400/10 bg-yellow-400/5 p-5">

          <p className="text-sm font-semibold text-yellow-300">
            ⚠️ Decision-support system
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            AI-generated recommendations are intended to assist
            authorized responders. Final resource deployment remains
            under human authority.
          </p>

        </div>

      </main>

    </div>
  );
}

export default AuthorityDashboard;