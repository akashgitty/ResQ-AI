import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Incidents() {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");

  const incidents = [
    {
      id: "INC-001",
      type: "Flood",
      location: "Guwahati, Assam",
      severity: "Critical",
      affected: 50,
      needs: ["Rescue", "Medical"],
      status: "Awaiting Response",
      icon: "🌊",
    },
    {
      id: "INC-002",
      type: "Fire",
      location: "Shillong, Meghalaya",
      severity: "High",
      affected: 25,
      needs: ["Fire Response", "Medical"],
      status: "Resources Assigned",
      icon: "🔥",
    },
    {
      id: "INC-003",
      type: "Landslide",
      location: "Aizawl, Mizoram",
      severity: "Medium",
      affected: 18,
      needs: ["Rescue", "Evacuation"],
      status: "Monitoring",
      icon: "⛰️",
    },
    {
      id: "INC-004",
      type: "Earthquake",
      location: "Imphal, Manipur",
      severity: "Critical",
      affected: 70,
      needs: ["Rescue", "Medical", "Shelter"],
      status: "Awaiting Response",
      icon: "🏚️",
    },
  ];

  const filteredIncidents =
    filter === "All"
      ? incidents
      : incidents.filter((incident) => incident.severity === filter);

  const severityStyle = {
    Critical: "bg-red-500/10 text-red-400 border-red-500/20",
    High: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  };

  const statusStyle = {
    "Awaiting Response": "text-red-400",
    "Resources Assigned": "text-cyan-400",
    Monitoring: "text-yellow-400",
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

          <div className="flex items-center gap-3">

            <Link
              to="/authority"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              ← Authority Dashboard
            </Link>

            <div className="hidden text-right sm:block">
              <p className="text-xs text-slate-500">SYSTEM STATUS</p>
              <p className="text-xs font-semibold text-emerald-400">
                ● OPERATIONAL
              </p>
            </div>

          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-cyan-400">
            RESPONSE CENTER
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Incident Management
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            Monitor reported emergencies, review severity and coordinate
            resources for active incidents.
          </p>
        </div>

        {/* SUMMARY CARDS */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-[#081421] p-5">
            <p className="text-sm text-slate-500">Total Incidents</p>
            <p className="mt-2 text-3xl font-bold">{incidents.length}</p>
          </div>

          <div className="rounded-2xl border border-red-500/10 bg-[#081421] p-5">
            <p className="text-sm text-slate-500">Critical</p>
            <p className="mt-2 text-3xl font-bold text-red-400">
              {incidents.filter((i) => i.severity === "Critical").length}
            </p>
          </div>

          <div className="rounded-2xl border border-orange-500/10 bg-[#081421] p-5">
            <p className="text-sm text-slate-500">High Priority</p>
            <p className="mt-2 text-3xl font-bold text-orange-400">
              {incidents.filter((i) => i.severity === "High").length}
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/10 bg-[#081421] p-5">
            <p className="text-sm text-slate-500">People Affected</p>
            <p className="mt-2 text-3xl font-bold text-cyan-400">
              {incidents.reduce((sum, i) => sum + i.affected, 0)}
            </p>
          </div>

        </div>

        {/* FILTER */}
        <div className="mb-6 flex flex-wrap gap-3">

          {["All", "Critical", "High", "Medium"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                filter === item
                  ? "bg-cyan-400 text-[#031018]"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* INCIDENT LIST */}
        <div className="space-y-4">

          {filteredIncidents.map((incident) => (

            <div
              key={incident.id}
              className="rounded-3xl border border-white/10 bg-[#081421] p-6 transition hover:border-cyan-400/20"
            >

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* LEFT */}
                <div className="flex gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                    {incident.icon}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="text-xl font-bold">
                        {incident.type}
                      </h3>

                      <span className="text-xs text-slate-600">
                        {incident.id}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                          severityStyle[incident.severity]
                        }`}
                      >
                        {incident.severity}
                      </span>

                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      📍 {incident.location}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-5 text-sm">

                      <span className="text-slate-400">
                        👥 Affected:
                        <span className="ml-1 font-semibold text-white">
                          {incident.affected}
                        </span>
                      </span>

                      <span className="text-slate-400">
                        Needs:
                        <span className="ml-1 text-slate-200">
                          {incident.needs.join(" + ")}
                        </span>
                      </span>

                    </div>
                  </div>

                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-3 lg:items-end">

                  <p className="text-xs text-slate-500">
                    CURRENT STATUS
                  </p>

                  <p
                    className={`font-semibold ${
                      statusStyle[incident.status]
                    }`}
                  >
                    ● {incident.status}
                  </p>

                  <button
                    onClick={() =>
                      navigate("/resource-allocation", {
                        state: {
                          incident: {
                            id: incident.id,
                            type: incident.type,
                            severity: incident.severity,
                            location: incident.location,
                            affected: incident.affected,
                            needs: incident.needs,
                          },
                        },
                      })
                    }
                    className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#031018] transition hover:bg-cyan-300"
                  >
                    Review Allocation →
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* EMPTY STATE */}
        {filteredIncidents.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-[#081421] p-12 text-center">
            <div className="text-5xl">🔎</div>

            <h3 className="mt-4 text-xl font-bold">
              No incidents found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              No incidents match the selected priority filter.
            </p>
          </div>
        )}

        {/* DISCLAIMER */}
        <div className="mt-8 rounded-2xl border border-yellow-400/10 bg-yellow-400/5 p-5">
          <p className="text-xs leading-6 text-slate-400">
            ⚠️ ResQ-AI provides decision-support information based on
            submitted incident data. Final emergency response and resource
            deployment decisions remain with authorized responders.
          </p>
        </div>

      </main>
    </div>
  );
}

export default Incidents;