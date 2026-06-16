"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { countryCodes } from "@/lib/countries";

export default function RegistrationPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // REQUIRED FIELDS
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [countryCode, setCountryCode] = useState("+27");
  const [telephone, setTelephone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // OPTIONAL
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");

  const [ministryOffice, setMinistryOffice] = useState("");
  const [churchName, setChurchName] = useState("");
  const [denomination, setDenomination] = useState("");
  const [ministryPosition, setMinistryPosition] = useState("");
  const [yearsInMinistry, setYearsInMinistry] = useState("");
  const [seniorPastor, setSeniorPastor] = useState("");

  const [interests, setInterests] = useState<string[]>([]);
  const [agreement, setAgreement] = useState(false);

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value)
        ? prev.filter((i) => i !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreement) {
      alert("You must agree to the ministry statement.");
      return;
    }

    setLoading(true);

    // 1. CREATE AUTH USER
    const { data: authData, error: authError } =
      await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "http://localhost:3000/login",
        },
      });

    if (authError) {
      setLoading(false);
      alert(authError.message);
      return;
    }

    const userId = authData.user?.id;

    // 2. SAVE PROFILE
    const { error: dbError } = await supabase.from("members").insert([
      {
        auth_user_id: userId,
        full_name: fullName,
        gender,
        date_of_birth: dateOfBirth,
        country,
        nationality,

        telephone: countryCode + telephone,
        whatsapp: countryCode + whatsapp,

        email,

        province,
        city,
        physical_address: physicalAddress,

        ministry_office: ministryOffice,
        church_name: churchName,
        denomination,
        ministry_position: ministryPosition,
        years_in_ministry: yearsInMinistry
          ? Number(yearsInMinistry)
          : null,
        senior_pastor: seniorPastor,

        interests,
      },
    ]);

    setLoading(false);

    if (dbError) {
      alert(dbError.message);
      return;
    }

    // 3. SUCCESS FLOW
    setSuccess(true);

    setTimeout(() => {
      router.push("/login");
    }, 3000);
  };

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-10 border shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-green-600">
            Registration Successful!
          </h1>

          <p className="mt-4">
            Please check your email to verify your account.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Redirecting to login...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg">

        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Full Name *"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border p-3 w-full"
            required
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border p-3 w-full"
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="border p-3 w-full"
            required
          />

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border p-3 w-full"
            required
          >
            <option value="">Select Country</option>
            {countryCodes.map((c) => (
              <option key={c.country} value={c.country}>
                {c.country}
              </option>
            ))}
          </select>

          <input
            placeholder="Nationality *"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="border p-3 w-full"
            required
          />

          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="border p-3"
            >
              {countryCodes.map((c) => (
                <option key={`${c.country}-${c.code}`} value={c.code}>
  {c.code} ({c.country})
</option>
              ))}
            </select>

            <input
              placeholder="Telephone *"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="border p-3 w-full"
              required
            />
          </div>

          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="border p-3"
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} ({c.country})
                </option>
              ))}
            </select>

            <input
              placeholder="WhatsApp *"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="border p-3 w-full"
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 w-full"
            required
          />

          <input
            type="password"
            placeholder="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 w-full"
            required
          />

          <input
            placeholder="Province / State"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="border p-3 w-full"
          />

          <input
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-3 w-full"
          />

          <input
            placeholder="Ministry Office"
            value={ministryOffice}
            onChange={(e) => setMinistryOffice(e.target.value)}
            className="border p-3 w-full"
          />

          <button
            disabled={loading}
            className="bg-blue-900 text-white w-full p-3 font-bold"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>

        </form>
      </div>
    </main>
  );
}