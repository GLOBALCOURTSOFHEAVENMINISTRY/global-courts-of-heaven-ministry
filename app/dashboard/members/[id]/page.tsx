"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function MemberDetailPage() {
  const params = useParams();
  const router = useRouter();

  const id = typeof params?.id === "string" ? params.id : params?.id?.[0];

  const [loading, setLoading] = useState(true);
  const [member, setMember] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const loadMember = async () => {
      try {
        if (!id) {
          setErrorMsg("Missing member ID in route");
          setLoading(false);
          return;
        }

        setLoading(true);
        setErrorMsg(null);

        console.log("LOADING MEMBER ID:", id);

        // ✅ FIX: use maybeSingle (prevents {} error crashes)
        const { data, error } = await supabase
          .from("members")
          .select("*")
          .eq("id", id)
          .maybeSingle();

        console.log("MEMBER QUERY RESULT:", { data, error });

        if (error) {
          setErrorMsg(error.message || "Failed to load member");
          setMember(null);
          return;
        }

        if (!data) {
          setErrorMsg("Member not found in database");
          setMember(null);
          return;
        }

        setMember(data);
      } catch (err: any) {
        console.error("UNEXPECTED ERROR:", err);
        setErrorMsg(err?.message || "Unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    loadMember();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading member...
      </main>
    );
  }

  if (errorMsg) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Error loading member
        </h1>

        <p className="text-gray-600 mt-2">{errorMsg}</p>

        <button
          onClick={() => router.push("/dashboard/members")}
          className="mt-6 bg-blue-950 text-white px-6 py-2 rounded"
        >
          Back to Members
        </button>
      </main>
    );
  }

  if (!member) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Member not found</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">

        {/* PROFILE IMAGE */}
        <div className="flex flex-col items-center text-center">
          <img
            src={
              member.profile_photo ||
              "https://placehold.co/200x200?text=Profile"
            }
            alt={member.full_name || "Member"}
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-950 mb-4"
          />

          <h1 className="text-3xl font-bold text-blue-950">
            {member.full_name || "Unnamed Member"}
          </h1>

          <p className="text-gray-500">
            {member.ministry_office || "Member"}
          </p>

          <p className="text-sm text-gray-400">
            {member.church_name || "Church not specified"}
          </p>
        </div>

        {/* DETAILS */}
        <div className="mt-8 space-y-4">

          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-semibold">{member.email || "Not set"}</p>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-semibold">{member.telephone || "Not set"}</p>
          </div>

          <div>
            <p className="text-gray-500">Country</p>
            <p className="font-semibold">{member.country || "Not set"}</p>
          </div>

          <div>
            <p className="text-gray-500">Province</p>
            <p className="font-semibold">{member.province || "Not set"}</p>
          </div>

          <div>
            <p className="text-gray-500">City</p>
            <p className="font-semibold">{member.city || "Not set"}</p>
          </div>

          <div>
            <p className="text-gray-500">Ministry Position</p>
            <p className="font-semibold">
              {member.ministry_position || "Not set"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Denomination</p>
            <p className="font-semibold">
              {member.denomination || "Not set"}
            </p>
          </div>

        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => router.push("/dashboard/members")}
          className="mt-8 bg-blue-950 text-white px-6 py-3 rounded"
        >
          Back to Members
        </button>

      </div>
    </main>
  );
}