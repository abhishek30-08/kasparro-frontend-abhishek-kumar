"use client";

import { useState } from "react";
import modulesData from "@/audit-data/modules.json";

export default function AuditPage() {
  const modules = modulesData.modules;
  const [selectedModuleId, setSelectedModuleId] = useState(
    modules[0].id
  );

  const selectedModule = modules.find(
    (m) => m.id === selectedModuleId
  );

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white p-4">
        <h2 className="mb-4 text-lg font-semibold">Audit Modules</h2>
        <ul className="space-y-2">
          {modules.map((module) => (
            <li key={module.id}>
              <button
                onClick={() => setSelectedModuleId(module.id)}
                className={`w-full rounded px-3 py-2 text-left ${
                  module.id === selectedModuleId
                    ? "bg-blue-100 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                {module.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-6">
        {selectedModule && (
          <>
            <h1 className="mb-2 text-2xl font-bold">
              {selectedModule.name}
            </h1>

            <p className="mb-4 text-sm text-gray-600">
              Score:{" "}
              <span className="font-semibold">
                {selectedModule.score}
              </span>
            </p>

            <section className="mb-6">
              <h3 className="mb-2 font-semibold">Key Insights</h3>
              <ul className="list-disc pl-5 text-sm">
                {selectedModule.insights.map((insight, index) => (
                  <li key={index}>{insight}</li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="mb-2 font-semibold">Issues / Flags</h3>
              <ul className="list-disc pl-5 text-sm">
                {selectedModule.issues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Recommendations</h3>
              <ul className="list-disc pl-5 text-sm">
                {selectedModule.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
