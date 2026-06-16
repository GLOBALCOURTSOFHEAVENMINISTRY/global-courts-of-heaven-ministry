"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type Prayer = {
  id: string;
  created_at: string;
  status: string;
};

export default function AnalyticsDashboard() {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<Prayer[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("prayer_requests")
      .select("id, created_at, status")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("ANALYTICS LOAD ERROR:", error);
      setLoading(false);
      return;
    }

    setRequests(data || []);
    setLoading(false);
  };

  // 📈 Monthly Growth
  const monthlyGrowth = useMemo(() => {
    const map: Record<string, number> = {};

    requests.forEach((r) => {
      const month = new Date(r.created_at).toISOString().slice(0, 7); // YYYY-MM
      map[month] = (map[month] || 0) + 1;
    });

    return map;
  }, [requests]);

  // 📊 Answer Rate %
  const answerRate = useMemo(() => {
    const total = requests.length;
    const answered = requests.filter((r) => r.status === "answered").length;

    if (total === 0) return 0;

    return Math.round((answered / total) * 100);
  }, [requests]);

  // 📌 Status Breakdown
  const statusBreakdown = useMemo(() => {
    return {
      pending: requests.filter((r) => r.status === "pending").length,
      in_progress: requests.filter((r) => r.status === "in_progress").length,
      answered: requests.filter((r) => r.status === "answered").length,
    };
  }, [requests]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading analytics...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-950">
          📊 Ministry Analytics Dashboard
        </h1>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-gray-500">Total Prayer Requests</h2>
            <p className="text-3xl font-bold">{requests.length}</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-gray-500">Answered Rate</h2>
            <p className="text-3xl font-bold">{answerRate}%</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-gray-500">Active Responses</h2>
            <p className="text-3xl font-bold">
              {statusBreakdown.in_progress}
            </p>
          </div>

        </div>

        {/* STATUS BREAKDOWN */}
        <div className="bg-white mt-6 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Prayer Status Breakdown</h2>

          <div className="space-y-2">
            <div>🟡 Pending: {statusBreakdown.pending}</div>
            <div>🟠 In Progress: {statusBreakdown.in_progress}</div>
            <div>🟢 Answered: {statusBreakdown.answered}</div>
          </div>
        </div>

        {/* MONTHLY GROWTH */}
        <div className="bg-white mt-6 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Monthly Prayer Growth</h2>

          <div className="space-y-2">
            {Object.entries(monthlyGrowth).map(([month, count]) => (
              <div
                key={month}
                className="flex justify-between border-b py-1"
              >
                <span>{month}</span>
                <span className="font-bold">{count}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}