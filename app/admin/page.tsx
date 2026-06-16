"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const router = useRouter();

  const [members, setMembers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data: auth } = await supabase.auth.getUser();

      if (!auth?.user) {
        router.push("/login");
        return;
      }

      // 🔐 CHECK ROLE
      const { data: profile, error: profileError } = await supabase
        .from("members")
        .select("role")
        .eq("auth_user_id", auth.user.id)
        .single();

      if (profileError || profile?.role !== "admin") {
        router.push("/dashboard");
        return;
      }

      // 📊 LOAD MEMBERS
      const { data, error } = await supabase
        .from("members")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading members:", error.message);
        setLoading(false);
        return;
      }

      setMembers(data || []);
      setLoading(false);
    };

    load();
  }, [router]);

  const filteredMembers = members.filter((m) =>
    (m.full_name || "").toLowerCase().includes(search.toLowerCase()) ||
    (m.email || "").toLowerCase().includes(search.toLowerCase()) ||
    (m.ministry_office || "").toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading admin dashboard...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900">
          Ministry Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by name, email, or ministry office..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded mb-6"
      />

      {/* TABLE */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full border-collapse">

          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Ministry Office</th>
              <th className="p-3 text-left">City</th>
            </tr>
          </thead>

          <tbody>
            {filteredMembers.map((member) => (
              <tr key={member.id} className="border-b hover:bg-gray-50">

                <td className="p-3">{member.full_name}</td>
                <td className="p-3">{member.email}</td>
                <td className="p-3">{member.telephone}</td>
                <td className="p-3">{member.country}</td>
                <td className="p-3">{member.ministry_office}</td>
                <td className="p-3">{member.city}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </main>
  );
}