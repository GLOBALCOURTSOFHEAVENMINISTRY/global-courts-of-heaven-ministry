"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestimoniesPage() {
  const [testimonies, setTestimonies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("prayer_requests")
        .select("*")
        .eq("testimony_published", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setTestimonies(data || []);
      setLoading(false);
    };

    load();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading testimonies...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-purple-700 mb-8">
          Testimonies
        </h1>

        <div className="space-y-6">

          {testimonies.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded shadow">

              <h2 className="text-2xl font-bold text-blue-950">
                {t.testimony_title}
              </h2>

              <p className="mt-3 text-gray-700">
                {t.testimony_text}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                {new Date(t.created_at).toLocaleString()}
              </p>

            </div>
          ))}

        </div>

        {testimonies.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No testimonies yet
          </p>
        )}

      </div>
    </main>
  );
}