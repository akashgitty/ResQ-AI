import React from "react";
import { Link } from "react-router-dom";

const resources = [
  {
    id: "AMB-001",
    type: "Ambulance",
    icon: "🚑",
    location: "Guwahati",
    status: "Available",
    capacity: "4 patients",
    assignedTo: "Unassigned",
  },
  {
    id: "AMB-002",
    type: "Ambulance",
    icon: "🚑",
    location: "Guwahati",
    status: "Deployed",
    capacity: "4 patients",
    assignedTo: "RQ-001",
  },
  {
    id: "AMB-003",
    type: "Ambulance",
    icon: "🚑",
    location: "Kolkata",
    status: "Available",
    capacity: "4 patients",
    assignedTo: "Unassigned",
  },
  {
    id: "RST-001",
    type: "Rescue Team",
    icon: "🛟",
    location: "Guwahati",
    status: "Available",
    capacity: "8 members",
    assignedTo: "Unassigned",
  },
  {
    id: "RST-002",
    type: "Rescue Team",
    icon: "🛟",
    location: "Dehradun",
    status: "Deployed",
    capacity: "8 members",
    assignedTo: "RQ-002",
  },
  {
    id: "MED-001",
    type: "Medical Unit",
    icon: "🏥",
    location: "Guwahati",
    status: "Available",
    capacity: "12 patients",
    assignedTo: "Unassigned",
  },
  {
    id: "MED-002",
    type: "Medical Unit",
    icon: "🏥",
    location: "Kolkata",
    status: "Standby",
    capacity: "12 patients",
    assignedTo: "Unassigned",
  },
];

function getStatusStyle(status) {
  if (status === "Available") {
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
  }

  if (status === "Deployed") {
    return "border-red-400/20 bg-red-400/10 text-red-300";
  }

  return "border-yellow-400/20 bg-yellow-400/10 text-yellow-300";
}

function Resources() {
  const available = resources.filter(
    (resource) => resource.status === "Available"
  ).length;

  const deployed = resources.filter(
    (resource) => resource.status === "Deployed"
  ).length;

  const standby = resources.filter(
    (resource) => resource.status === "Standby"
  ).length;

  return (
    <div className="min-h-screen bg-[#050b14] text-white">

      {/* NAVBAR */}
      <nav className="border-b border-white/10 bg-[#07101d]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link to="/authority" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
              🚨
            </div>

            <div>
              <h1 className="font-bold">ResQ-AI</h1>
              <p className="text-xs text-slate-400">
                Resource Management
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">

            <Link
              to="/authority"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
            >
              ← Dashboard
            </Link>

            <Link
              to="/incidents"
              className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
            >
              Incidents
            </Link>

          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* HEADER */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            RESQ-AI OPERATIONS
          </p>

          <h2 className="text-3xl font-bold">
            Resource Management
          </h2>

          <p className="mt-2 max-w-2xl text-slate-400">
            Monitor emergency resources, availability and current
            deployment status from one place.
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-emerald-400/20 bg-[#081421] p-5">
            <p className="text-sm text-slate-400">
              Available Resources
            </p>

            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold text-emerald-300">
                {available}
              </p>

              <span className="text-2xl">🟢</span>
            </div>
          </div>

          <div className="rounded-2xl border border-red-400/20 bg-[#081421] p-5">
            <p className="text-sm text-slate-400">
              Currently Deployed
            </p>

            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold text-red-300">
                {deployed}
              </p>

              <span className="text-2xl">🔴</span>
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-[#081421] p-5">
            <p className="text-sm text-slate-400">
              Standby
            </p>

            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold text-yellow-300">
                {standby}
              </p>

              <span className="text-2xl">🟡</span>
            </div>
          </div>

        </div>

        {/* RESOURCE TABLE */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#081421]">

          <div className="flex flex-col gap-2 border-b border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h3 className="text-xl font-bold">
                Emergency Resources
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Current operational resource inventory
              </p>
            </div>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              {resources.length} TOTAL
            </span>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-200">

              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-4">Resource</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Capacity</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Assignment</th>
                </tr>
              </thead>

              <tbody>

                {resources.map((resource) => (

                  <tr
                    key={resource.id}
                    className="border-b border-white/5 transition hover:bg-white/3"
                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-xl">
                          {resource.icon}
                        </div>

                        <div>
                          <p className="font-semibold">
                            {resource.type}
                          </p>

                          <p className="text-xs text-slate-500">
                            {resource.id}
                          </p>
                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5 text-sm text-slate-300">
                      📍 {resource.location}
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-300">
                      {resource.capacity}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyle(
                          resource.status
                        )}`}
                      >
                        {resource.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      {resource.assignedTo === "Unassigned" ? (
                        <span className="text-sm text-slate-500">
                          Unassigned
                        </span>
                      ) : (
                        <span className="rounded-lg bg-white/5 px-3 py-1 text-sm text-cyan-300">
                          {resource.assignedTo}
                        </span>
                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        </section>

        {/* DECISION SUPPORT NOTE */}
        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">

          <div className="flex gap-3">

            <div className="text-xl">
              ⚠️
            </div>

            <div>
              <h4 className="font-semibold text-yellow-200">
                Decision-support system
              </h4>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Resource availability and allocation shown here are
                operational data for the prototype. ResQ-AI provides
                recommendations to authorized responders; final
                deployment decisions remain with the responsible
                authority.
              </p>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Resources;