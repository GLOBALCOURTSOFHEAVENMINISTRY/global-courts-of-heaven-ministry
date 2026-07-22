"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [member, setMember] = useState<any>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.push("/login");
          return;
        }

        const { data, error } = await supabase
          .from("members")
          .select("*")
          .eq("auth_user_id", user.id)
          .maybeSingle();

        if (error) {
          console.error(
            "PROFILE LOAD FAILED:",
            JSON.stringify(error, null, 2)
          );
        } else {
          setMember(data);
        }
      } catch (err) {
        console.error("PROFILE PAGE ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [router]);

  const uploadPhoto = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = e.target.files?.[0];

      if (!file) return;

      setUploading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("User session not found.");
        return;
      }

      const fileExt = file.name.split(".").pop();

      const fileName = `${user.id}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("profile-photos")
        .upload(fileName, file, {
          upsert: true,
        });

      if (uploadError) {
        console.error(uploadError);
        alert(uploadError.message);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage
        .from("profile-photos")
        .getPublicUrl(fileName);

      const { error: updateError } = await supabase
        .from("members")
        .update({
          profile_photo: publicUrl,
        })
        .eq("auth_user_id", user.id);

      if (updateError) {
        console.error(updateError);
        alert(updateError.message);
        return;
      }

      setMember({
        ...member,
        profile_photo: publicUrl,
      });

      alert("Profile photo uploaded successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to upload photo.");
    } finally {
      setUploading(false);
    }
  };

  const saveProfile = async () => {
    if (!member) return;

    try {
      setSaving(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("User session not found.");
        return;
      }

      const { error } = await supabase
        .from("members")
        .update({
          full_name: member.full_name,
          telephone: member.telephone,
          country: member.country,
          province: member.province,
          city: member.city,
          physical_address: member.physical_address,
          ministry_office: member.ministry_office,
          church_name: member.church_name,
          denomination: member.denomination,
          ministry_position: member.ministry_position,
          senior_pastor: member.senior_pastor,

            gender: member.gender,
  date_of_birth: member.date_of_birth,
  nationality: member.nationality,
  whatsapp: member.whatsapp,
  years_in_ministry: member.years_in_ministry,
  interests: member.interests,
        })
        .eq("auth_user_id", user.id);

      if (error) {
        console.error(error);
        alert(error.message);
        return;
      }

      alert("Profile updated successfully.");
      setEditing(false);
    } catch (err) {
      console.error(err);
      alert("Failed to save profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading profile...
      </main>
    );
  }

  if (!member) {
    return (
      <main className="min-h-screen p-8">
        <h1 className="text-3xl font-bold text-red-600">
          Profile not found
        </h1>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-6 bg-blue-950 text-white px-6 py-2 rounded"
        >
          Back to Dashboard
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8">

        <h1 className="text-4xl font-bold text-blue-950 mb-8">
          My Profile
        </h1>

        {/* PROFILE PHOTO */}

        <div className="mb-8 flex flex-col items-center">

          {member.profile_photo ? (
            <img
              src={member.profile_photo}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border"
            />
          ) : (
            <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center">
              No Photo
            </div>
          )}

          <label className="mt-4">
            <span className="bg-blue-950 text-white px-4 py-2 rounded cursor-pointer">
              {uploading
                ? "Uploading..."
                : "Upload Profile Photo"}
            </span>

            <input
              type="file"
              accept="image/*"
              onChange={uploadPhoto}
              className="hidden"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={member.full_name || ""}
              disabled={!editing}
              onChange={(e) =>
                setMember({
                  ...member,
                  full_name: e.target.value,
                })
              }
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              value={member.email || ""}
              disabled
              className="w-full border p-3 rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Phone
            </label>

            <input
              type="text"
              value={member.telephone || ""}
              disabled={!editing}
              onChange={(e) =>
                setMember({
                  ...member,
                  telephone: e.target.value,
                })
              }
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Country
            </label>

            <input
              type="text"
              value={member.country || ""}
              disabled={!editing}
              onChange={(e) =>
                setMember({
                  ...member,
                  country: e.target.value,
                })
              }
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Province
            </label>

            <input
              type="text"
              value={member.province || ""}
              disabled={!editing}
              onChange={(e) =>
                setMember({
                  ...member,
                  province: e.target.value,
                })
              }
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              City
            </label>

            <input
              type="text"
              value={member.city || ""}
              disabled={!editing}
              onChange={(e) =>
                setMember({
                  ...member,
                  city: e.target.value,
                })
              }
              className="w-full border p-3 rounded"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Physical Address
            </label>

            <textarea
              rows={3}
              value={member.physical_address || ""}
              disabled={!editing}
              onChange={(e) =>
                setMember({
                  ...member,
                  physical_address: e.target.value,
                })
              }
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Ministry Office
            </label>

            <input
              type="text"
              value={member.ministry_office || ""}
              disabled={!editing}
              onChange={(e) =>
                setMember({
                  ...member,
                  ministry_office: e.target.value,
                })
              }
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Church Name
            </label>

            <input
              type="text"
              value={member.church_name || ""}
              disabled={!editing}
              onChange={(e) =>
                setMember({
                  ...member,
                  church_name: e.target.value,
                })
              }
              className="w-full border p-3 rounded"
            />
          </div>

<div>
  <label className="block font-semibold mb-2">
    Gender
  </label>

  <input
    type="text"
    value={member.gender || ""}
    disabled={!editing}
    onChange={(e) =>
      setMember({
        ...member,
        gender: e.target.value,
      })
    }
    className="w-full border p-3 rounded"
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    Date Of Birth
  </label>

  <input
    type="date"
    value={member.date_of_birth || ""}
    disabled={!editing}
    onChange={(e) =>
      setMember({
        ...member,
        date_of_birth: e.target.value,
      })
    }
    className="w-full border p-3 rounded"
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    Nationality
  </label>

  <input
    type="text"
    value={member.nationality || ""}
    disabled={!editing}
    onChange={(e) =>
      setMember({
        ...member,
        nationality: e.target.value,
      })
    }
    className="w-full border p-3 rounded"
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    WhatsApp
  </label>

  <input
    type="text"
    value={member.whatsapp || ""}
    disabled={!editing}
    onChange={(e) =>
      setMember({
        ...member,
        whatsapp: e.target.value,
      })
    }
    className="w-full border p-3 rounded"
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    Denomination
  </label>

  <input
    type="text"
    value={member.denomination || ""}
    disabled={!editing}
    onChange={(e) =>
      setMember({
        ...member,
        denomination: e.target.value,
      })
    }
    className="w-full border p-3 rounded"
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    Ministry Position
  </label>

  <input
    type="text"
    value={member.ministry_position || ""}
    disabled={!editing}
    onChange={(e) =>
      setMember({
        ...member,
        ministry_position: e.target.value,
      })
    }
    className="w-full border p-3 rounded"
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    Years In Ministry
  </label>

  <input
    type="number"
    value={member.years_in_ministry || ""}
    disabled={!editing}
    onChange={(e) =>
      setMember({
        ...member,
        years_in_ministry: e.target.value,
      })
    }
    className="w-full border p-3 rounded"
  />
</div>

<div>
  <label className="block font-semibold mb-2">
    Senior Pastor
  </label>

  <input
    type="text"
    value={member.senior_pastor || ""}
    disabled={!editing}
    onChange={(e) =>
      setMember({
        ...member,
        senior_pastor: e.target.value,
      })
    }
    className="w-full border p-3 rounded"
  />
</div>

<div className="md:col-span-2">
  <label className="block font-semibold mb-2">
    Areas Of Interest
  </label>

  <input
    type="text"
    value={
      Array.isArray(member.interests)
        ? member.interests.join(", ")
        : ""
    }
    disabled={!editing}
    onChange={(e) =>
      setMember({
        ...member,
        interests: e.target.value
          .split(",")
          .map((i) => i.trim()),
      })
    }
    className="w-full border p-3 rounded"
  />
</div>

        </div>

        <div className="flex flex-wrap gap-4 mt-8">

          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="bg-blue-950 text-white px-6 py-3 rounded"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={saveProfile}
                disabled={saving}
                className="bg-green-600 text-white px-6 py-3 rounded"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

              <button
                onClick={() => setEditing(false)}
                className="bg-gray-600 text-white px-6 py-3 rounded"
              >
                Cancel
              </button>
            </>
          )}

          <button
            onClick={() => router.push("/dashboard")}
            className="bg-slate-700 text-white px-6 py-3 rounded"
          >
            Back to Dashboard
          </button>

        </div>
      </div>
    </main>
  );
}