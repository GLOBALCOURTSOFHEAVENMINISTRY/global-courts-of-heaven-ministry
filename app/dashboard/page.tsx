"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        console.log("AUTH USER:", user);
        console.log("AUTH ERROR:", error);

        if (!user) {
  setLoading(false);
  router.push("/login");
  return;
}

        setUserEmail(user.email || "");

        setLoading(false);
      } catch (err) {
        console.error("DASHBOARD ERROR:", err);
        setLoading(false);
      }
    };

    loadUser();
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
  <div className="max-w-6xl mx-auto">

    <h1 className="text-4xl font-bold text-blue-950 mb-2">
      Welcome
    </h1>

    <p className="text-gray-600 mb-8">
      {userEmail}
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <Link
  href="/dashboard/profile"
  className="bg-white shadow rounded-lg p-6 block hover:shadow-xl transition cursor-pointer"
>
  <h2 className="font-bold text-xl mb-2">
    My Profile
  </h2>
  <p>View and update your profile information.</p>
</Link>

      <Link
  href="/dashboard/events"
  className="bg-white shadow rounded-lg p-6 block hover:shadow-xl transition cursor-pointer"
>
  <h2 className="font-bold text-xl mb-2">
    Events
  </h2>
  <p>View upcoming ministry events.</p>
</Link>

      <Link
  href="/dashboard/prayer-requests"
  className="bg-white shadow rounded-lg p-6 block hover:shadow-xl transition cursor-pointer"
>
  <h2 className="font-bold text-xl mb-2">
    Prayer Requests
  </h2>
  <p>Submit and manage prayer requests.</p>
</Link>

      <Link
  href="/dashboard/members"
  className="bg-white shadow rounded-lg p-6 block hover:shadow-xl transition cursor-pointer"
>
  <h2 className="font-bold text-xl mb-2">
    Members Directory
  </h2>
  <p>Search ministry members worldwide.</p>
</Link>

      <Link
  href="/dashboard/resources"
  className="bg-white shadow rounded-lg p-6 block hover:shadow-xl transition cursor-pointer"
>
  <h2 className="font-bold text-xl mb-2">
    Resources
  </h2>
  <p>Access ministry documents and teachings.</p>
</Link>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="font-bold text-xl mb-2">
          Logout
        </h2>

        <button
          onClick={async () => {
            await supabase.auth.signOut();
            router.push("/login");
          }}
          className="bg-red-600 text-white px-4 py-2 rounded mt-2block hover:shadow-xl transition cursor-pointer"
        >
          Logout
        </button>
      </div>

    </div>

  </div>
</main>
  );
}
