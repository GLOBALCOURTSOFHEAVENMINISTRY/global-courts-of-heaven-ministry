"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Prayer = {
  id: string;
  title: string;
  message: string;
  email: string;
  status: string;
  admin_response?: string | null;
  created_at: string;
};

export default function PrayerHistoryPage() {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<Prayer[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    setLoading(true);

    const { data: auth } = await supabase.auth.getUser();
    const user = auth?.user;

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("prayer_requests")
      .select("*")
      .eq("auth_user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setRequests(data || []);
    setLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "answered":
        return "bg-green-600";
      case "in_progress":
        return "bg-yellow-600";
      default:
        return "bg-gray-500";
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading your prayer history...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-950 mb-2">
          Your Prayer History
        </h1>

        <p className="text-gray-500 mb-6">
          All your prayers and ministry responses in one place
        </p>

        {requests.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No prayer requests yet.
          </p>
        ) : (
          <div className="space-y-6">

            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-white p-5 rounded shadow border-l-4 border-blue-900"
              >

                {/* TITLE */}
                <h2 className="text-xl font-bold text-blue-900">
                  {req.title}
                </h2>

                {/* DATE */}
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(req.created_at).toLocaleString()}
                </p>

                {/* MESSAGE */}
                <p className="mt-3 text-gray-700 whitespace-pre-wrap">
                  {req.message}
                </p>

                {/* STATUS */}
                <div className="mt-3">
                  <span
                    className={`text-white text-xs px-3 py-1 rounded ${getStatusColor(
                      req.status || "pending"
                    )}`}
                  >
                    {req.status || "pending"}
                  </span>
                </div>

                {/* ADMIN RESPONSE */}
                {req.admin_response && (
                  <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-100">
                    <p className="text-sm font-semibold text-blue-900">
                      Ministry Response
                    </p>
                    <p className="text-gray-700 mt-1 whitespace-pre-wrap">
                      {req.admin_response}
                    </p>
                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}