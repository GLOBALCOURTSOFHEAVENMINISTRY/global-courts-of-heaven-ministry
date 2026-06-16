"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type Prayer = {
  id: string;
  title?: string | null;
  message: string;
  email: string;
  full_name?: string | null;
  status: string;
  created_at: string;
  admin_response?: string | null;
  testimony_published?: boolean;
  testimony_title?: string | null;
  testimony_text?: string | null;
};

export default function AdminPrayerDashboard() {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<Prayer[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [responses, setResponses] = useState<Record<string, string>>({});

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("prayer_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("LOAD ERROR:", error);
      setLoading(false);
      return;
    }

    setRequests(data ?? []);
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("prayer_requests")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("STATUS UPDATE ERROR:", error);
      return;
    }

    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  const submitResponse = async (id: string) => {
    const text = (responses[id] || "").trim();

    if (!text) {
      alert("Please write a ministry response first.");
      return;
    }

    const request = requests.find((r) => r.id === id);
    if (!request) return;

    // 1. Save to Supabase
    const { error } = await supabase
      .from("prayer_requests")
      .update({
        status: "answered",
        admin_response: text,
      })
      .eq("id", id);

    if (error) {
      console.error("UPDATE ERROR:", error);
      return;
    }

    // 2. Send email
    try {
      const res = await fetch("/api/send-prayer-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: request.email,
          name: request.full_name,
          message: request.message,
          response: text,
        }),
      });

      const result = await res.json();
      console.log("EMAIL SENT:", result);
    } catch (err) {
      console.error("EMAIL FAILED:", err);
    }

    // 3. Update UI instantly
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: "answered", admin_response: text }
          : r
      )
    );

    setResponses((prev) => ({ ...prev, [id]: "" }));
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();

    return requests.filter((r) => {
      const status = r.status || "pending";

      const matchesStatus =
        statusFilter === "all" || status === statusFilter;

      const matchesSearch =
        (r.full_name || "").toLowerCase().includes(q) ||
        (r.email || "").toLowerCase().includes(q) ||
        (r.title || "").toLowerCase().includes(q);

      return matchesStatus && matchesSearch;
    });
  }, [requests, search, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: requests.length,
      pending: requests.filter((r) => r.status === "pending").length,
      in_progress: requests.filter((r) => r.status === "in_progress").length,
      answered: requests.filter((r) => r.status === "answered").length,
    };
  }, [requests]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-950">
          Prayer Analytics Dashboard
        </h1>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          <div className="bg-white p-4 rounded shadow">Total: {stats.total}</div>
          <div className="bg-white p-4 rounded shadow">Pending: {stats.pending}</div>
          <div className="bg-white p-4 rounded shadow">In Progress: {stats.in_progress}</div>
          <div className="bg-white p-4 rounded shadow">Answered: {stats.answered}</div>
        </div>

        {/* FILTERS */}
        <div className="flex gap-3 mb-6">
          <input
            className="border p-2 rounded w-full"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="answered">Answered</option>
          </select>
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {filtered.map((req) => (
            <div key={req.id} className="bg-white p-5 rounded shadow">

              <h2 className="font-bold text-lg">
                {req.full_name || req.email}
              </h2>

              <p className="text-gray-600 mt-1">{req.message}</p>

              <textarea
                className="w-full border p-2 mt-3 rounded"
                placeholder="Write reply..."
                value={responses[req.id] ?? req.admin_response ?? ""}
                onChange={(e) =>
                  setResponses((prev) => ({
                    ...prev,
                    [req.id]: e.target.value,
                  }))
                }
              />

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => updateStatus(req.id, "pending")}
                  className="px-3 py-1 bg-gray-500 text-white rounded"
                >
                  Pending
                </button>

                <button
                  onClick={() => updateStatus(req.id, "in_progress")}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  In Progress
                </button>

                <button
                  onClick={() => submitResponse(req.id)}
                  className="px-3 py-1 bg-green-600 text-white rounded"
                >
                  Submit Reply
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}