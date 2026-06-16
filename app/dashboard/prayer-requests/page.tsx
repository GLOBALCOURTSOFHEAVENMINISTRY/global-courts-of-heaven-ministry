"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PrayerRequestsPage() {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [requests, setRequests] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    message: "",
  });

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user;

      if (!user) return;

      const { data, error } = await supabase
        .from("prayer_requests")
        .select("*")
        .eq("auth_user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setRequests(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const submitRequest = async () => {
    setSubmitting(true);

    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;

    if (!user) {
      alert("Not logged in");
      setSubmitting(false);
      return;
    }

    const fullName =
      user.user_metadata?.full_name ||
      user.email ||
      "Unknown Member";

    const { error } = await supabase.from("prayer_requests").insert({
      auth_user_id: user.id,
      email: user.email,
      full_name: fullName,
      title: form.title.trim(),
      message: form.message.trim(),
      status: "pending",
    });

    if (error) {
      console.error(error);
      alert(error.message);
      setSubmitting(false);
      return;
    }

    setForm({ title: "", message: "" });
    await loadRequests();

    alert("Prayer request submitted");
    setSubmitting(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading prayer requests...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-950 mb-6">
          Prayer Requests
        </h1>

        {/* FORM */}
        <div className="bg-white p-6 rounded shadow mb-10">

          <input
            type="text"
            placeholder="Title (e.g. Healing, Family, Financial breakthrough)"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            placeholder="Write your prayer request..."
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full border p-3 rounded mb-4"
            rows={4}
          />

          <button
            onClick={submitRequest}
            disabled={submitting}
            className="bg-blue-950 text-white px-6 py-3 rounded cursor-pointer"
          >
            {submitting ? "Submitting..." : "Submit Prayer Request"}
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-4">

          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-white p-5 rounded shadow"
            >

              {/* NAME */}
              <h2 className="text-xl font-bold">
                {req.full_name || req.email}
              </h2>

              {/* MESSAGE */}
              <p className="text-gray-700 mt-2">
                {req.message}
              </p>

              {/* ADMIN RESPONSE (🔥 FIXED PART) */}
              {req.admin_response && (
                <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-600 rounded">
                  <p className="text-xs font-bold text-green-700">
                    Ministry Response
                  </p>

                  <p className="text-green-900 mt-1">
                    {req.admin_response}
                  </p>
                </div>
              )}

              {/* DATE */}
              <p className="text-xs text-gray-400 mt-3">
                {new Date(req.created_at).toLocaleString()}
              </p>

              {/* STATUS */}
              <p className="text-xs mt-1 text-gray-500">
                Status: {req.status || "pending"}
              </p>

            </div>
          ))}

        </div>

        {requests.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No prayer requests yet.
          </p>
        )}

      </div>
    </main>
  );
}