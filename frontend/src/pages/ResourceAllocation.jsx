import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResourceAllocation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Incident selected from Authority Dashboard
  const incident = location.state?.incident || {
    id: "RQ-001",
    type: "Flood",
    severity: "Critical",
    affected: "50+",
    location: "Guwahati, Assam",
    needs: ["Rescue", "Medical"],
  };

  const [allocation, setAllocation] = useState({
    ambulances: 2,
    rescueTeams: 1,
    medicalUnits: 1,
  });

  const [deploymentStatus, setDeploymentStatus] = useState("Pending");

 const handleApprove = () => {
  setDeploymentStatus("Approved");
};

  const handleModify = () => {
    setAllocation({
      ...allocation,
      ambulances: allocation.ambulances === 2 ? 1 : 2,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              ResQ<span className="text-cyan-400">-AI</span>
            </h1>
            <p className="text-xs text-slate-400">
              Emergency Resource Management
            </p>
          </div>

          <button
            onClick={() => navigate("/authority")}
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
          >
            ← Back to Dashboard
          </button>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-cyan-400">
            Emergency Operations
          </p>

          <h2 className="text-3xl font-bold">
            Resource Allocation Center
          </h2>

          <p className="mt-2 text-slate-400">
            Review AI-assisted resource recommendations before deployment.
          </p>
        </div>

        {/* Incident Information */}
        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div>
              <div className="mb-2 flex items-center gap-3">
                <h3 className="text-2xl font-bold">
                  {incident.type}
                </h3>

                <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold uppercase text-red-400">
                  {incident.severity}
                </span>
              </div>

              <p className="text-sm text-slate-400">
                Incident ID:{" "}
                <span className="font-medium text-slate-200">
                  {incident.id}
                </span>
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Location:{" "}
                <span className="text-slate-200">
                  {incident.location}
                </span>
              </p>
            </div>

            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-4">
              <p className="text-xs uppercase tracking-wide text-red-300">
                People affected
              </p>

              <p className="mt-1 text-2xl font-bold text-red-400">
                {incident.affected}
              </p>
            </div>

          </div>

          {/* Needs */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="text-sm text-slate-400">
              Reported needs:
            </span>

            {incident.needs?.map((need, index) => (
              <span
                key={index}
                className="rounded-lg bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {need}
              </span>
            ))}
          </div>

        </section>

        {/* Resource + Recommendation */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Available Resources */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="mb-6">
              <h3 className="text-xl font-bold">
                Available Resources
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Current resources available for deployment.
              </p>
            </div>

            {/* Ambulances */}
            <div className="mb-4 rounded-xl border border-slate-800 bg-slate-950 p-5">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl">
                    🚑
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Ambulances
                    </h4>

                    <p className="text-sm text-slate-400">
                      Available: 3
                    </p>
                  </div>

                </div>

                <div className="text-right">
                  <p className="text-xs uppercase text-slate-500">
                    Recommended
                  </p>

                  <p className="text-2xl font-bold text-cyan-400">
                    {allocation.ambulances}
                  </p>
                </div>

              </div>

            </div>

            {/* Rescue Teams */}
            <div className="mb-4 rounded-xl border border-slate-800 bg-slate-950 p-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-2xl">
                    🚒
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Rescue Teams
                    </h4>

                    <p className="text-sm text-slate-400">
                      Available: 2
                    </p>
                  </div>

                </div>

                <div className="text-right">
                  <p className="text-xs uppercase text-slate-500">
                    Recommended
                  </p>

                  <p className="text-2xl font-bold text-cyan-400">
                    {allocation.rescueTeams}
                  </p>
                </div>

              </div>

            </div>

            {/* Medical Units */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl">
                    🏥
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Medical Units
                    </h4>

                    <p className="text-sm text-slate-400">
                      Available: 1
                    </p>
                  </div>

                </div>

                <div className="text-right">
                  <p className="text-xs uppercase text-slate-500">
                    Recommended
                  </p>

                  <p className="text-2xl font-bold text-cyan-400">
                    {allocation.medicalUnits}
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* AI Recommendation */}
          <section className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">

            <div className="mb-6 flex items-center justify-between">

              <div>
                <h3 className="text-xl font-bold">
                  AI Recommendation
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Decision-support analysis
                </p>
              </div>

              <div className="rounded-xl bg-cyan-500/10 px-4 py-3 text-center">
                <p className="text-xs text-cyan-300">
                  Priority Score
                </p>

                <p className="text-2xl font-bold text-cyan-400">
                  92/100
                </p>
              </div>

            </div>

            {/* Recommendation */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">

              <p className="mb-4 text-sm font-semibold text-slate-300">
                Recommended Deployment
              </p>

              <div className="space-y-3">

                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">
                    🚑 Ambulances
                  </span>

                  <span className="font-semibold">
                    2
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">
                    🚒 Rescue Teams
                  </span>

                  <span className="font-semibold">
                    1
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">
                    🏥 Medical Units
                  </span>

                  <span className="font-semibold">
                    1
                  </span>
                </div>

              </div>

            </div>

            {/* Why */}
            <div className="mt-5">

              <p className="mb-3 text-sm font-semibold text-slate-300">
                Why this recommendation?
              </p>

              <ul className="space-y-2 text-sm text-slate-400">

                <li>✓ Critical incident severity</li>
                <li>✓ 50+ people potentially affected</li>
                <li>✓ Medical assistance required</li>
                <li>✓ Rescue resources are available</li>

              </ul>

            </div>

          </section>

        </div>

        {/* DEPLOYMENT TRACKER */}
<section className="mt-6 rounded-3xl border border-white/10 bg-[#081421] p-6">

  <div className="mb-6">
    <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
      RESPONSE TRACKING
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      Deployment Status
    </h3>

    <p className="mt-2 text-sm text-slate-400">
      Track the response lifecycle after the allocation is reviewed.
    </p>
  </div>

  <div className="grid gap-3 sm:grid-cols-5">

    {[
      "Pending",
      "Approved",
      "Dispatched",
      "On Scene",
      "Completed",
    ].map((step, index) => {

      const steps = [
        "Pending",
        "Approved",
        "Dispatched",
        "On Scene",
        "Completed",
      ];

      const currentIndex = steps.indexOf(deploymentStatus);
      const stepIndex = index;

      const completed = stepIndex <= currentIndex;

      return (
        <div
          key={step}
          className={`rounded-2xl border p-4 text-center transition ${
            completed
              ? "border-cyan-400/30 bg-cyan-400/10"
              : "border-white/10 bg-white/5"
          }`}
        >

          <div
            className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${
              completed
                ? "bg-cyan-400 text-black"
                : "bg-white/10 text-slate-500"
            }`}
          >
            {stepIndex + 1}
          </div>

          <p
            className={`mt-3 text-sm font-semibold ${
              completed
                ? "text-cyan-300"
                : "text-slate-500"
            }`}
          >
            {step}
          </p>

        </div>
      );
    })}

  </div>

  {/* CURRENT STATUS + NEXT ACTION */}
  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

    <div>
      <p className="text-xs text-slate-500">
        CURRENT STATUS
      </p>

      <p className="mt-1 text-lg font-bold text-cyan-300">
        {deploymentStatus}
      </p>
    </div>

    {deploymentStatus !== "Completed" && (
      <button
        onClick={() => {
          const steps = [
            "Pending",
            "Approved",
            "Dispatched",
            "On Scene",
            "Completed",
          ];

          const currentIndex = steps.indexOf(deploymentStatus);

          if (currentIndex < steps.length - 1) {
            setDeploymentStatus(steps[currentIndex + 1]);
          }
        }}
        className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
      >
        Move to Next Stage →
      </button>
    )}

  </div>

</section>

        {/* Safety Note */}
        <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">

          <p className="text-xs leading-relaxed text-amber-300">
            ResQ-AI provides decision-support recommendations based on
            incident severity, affected population, reported needs and
            resource availability. Final deployment decisions remain with
            authorized emergency personnel.
          </p>

        </div>

      </main>
    </div>
  );
};

export default ResourceAllocation;