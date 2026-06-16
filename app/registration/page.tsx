"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { countries, countryCodes } from "@/lib/countries";

export default function RegistrationPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // REQUIRED
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // PHONE
  const [telephoneCode, setTelephoneCode] = useState("+27");
  const [whatsappCode, setWhatsappCode] = useState("+27");
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

  try {
    console.log("Starting registration...");

    // STEP 1: CREATE AUTH USER
    const { data: authData, error: authError } =
      await supabase.auth.signUp({
        email,
        password,
      });

    console.log("AUTH DATA:", authData);
    console.log("AUTH ERROR:", authError);

    if (authError) {
      console.error("AUTH ERROR:", authError);

      setLoading(false);

      alert(`AUTH ERROR:\n${authError.message}`);
      return;
    }

    const userId = authData?.user?.id;

    console.log("USER ID:", userId);

    if (!userId) {
      setLoading(false);

      alert(
        "User ID not returned from Supabase Auth. Check your Auth settings."
      );

      return;
    }

    // STEP 2: INSERT MEMBER PROFILE
    const memberPayload = {
      auth_user_id: userId,
      full_name: fullName,
      gender,
      date_of_birth: dateOfBirth,
      country,
      nationality,
      telephone: `${telephoneCode}${telephone}`,
      whatsapp: `${whatsappCode}${whatsapp}`,
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
    };

    console.log("MEMBER PAYLOAD:", memberPayload);

    const { data: memberData, error: dbError } =
      await supabase
        .from("members")
        .insert([memberPayload])
        .select();

    console.log("MEMBER DATA:", memberData);
    console.log("DATABASE ERROR:", dbError);

    if (dbError) {
      console.error("DATABASE ERROR:", dbError);

      setLoading(false);

      alert(
        `DATABASE ERROR:\n${dbError.message}\n\nCODE: ${dbError.code ?? "N/A"}`
      );

      return;
    }

    setLoading(false);

    alert("Registration successful.");

    router.push("/login");
  } catch (err) {
    console.error("UNEXPECTED ERROR:", err);

    setLoading(false);

    alert("Unexpected error. Check browser console.");
  }

};

    return (
    <main className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-lg">

        <h1 className="text-4xl font-bold text-center text-blue-950 mb-6">
          Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* REQUIRED FIELDS */}
          <input
            type="text"
            placeholder="Full Name *"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border p-3 w-full rounded"
            required
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border p-3 w-full rounded"
            required
          >
            <option value="">Select Gender *</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="border p-3 w-full rounded"
            required
          />

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border p-3 w-full rounded"
            required
          >
            <option value="">Select Country *</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Nationality *"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="border p-3 w-full rounded"
            required
          />

          {/* TELEPHONE */}
          <div className="flex gap-2">
            <select
              value={telephoneCode}
              onChange={(e) => setTelephoneCode(e.target.value)}
              className="border p-3 rounded"
            >
              {countryCodes.map((c, i) => (
                <option key={`tel-${i}`} value={c.code}>
                  {c.code} ({c.country})
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Telephone *"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="border p-3 w-full rounded"
              required
            />
          </div>

          {/* WHATSAPP */}
          <div className="flex gap-2">
            <select
              value={whatsappCode}
              onChange={(e) => setWhatsappCode(e.target.value)}
              className="border p-3 rounded"
            >
              {countryCodes.map((c, i) => (
                <option key={`wa-${i}`} value={c.code}>
                  {c.code} ({c.country})
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="WhatsApp *"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="border p-3 w-full rounded"
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 w-full rounded"
            required
          />

          <input
            type="password"
            placeholder="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 w-full rounded"
            required
          />

          {/* OPTIONAL */}
          <input
            placeholder="Province / State"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="border p-3 w-full rounded"
          />

          <input
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-3 w-full rounded"
          />

          <textarea
            placeholder="Physical Address"
            value={physicalAddress}
            onChange={(e) => setPhysicalAddress(e.target.value)}
            className="border p-3 w-full rounded"
          />

          {/* MINISTRY OFFICE */}
          <select
            value={ministryOffice}
            onChange={(e) => setMinistryOffice(e.target.value)}
            className="border p-3 w-full rounded"
          >
            <option value="">Select Ministry Office</option>
            <option>Apostle</option>
            <option>Prophet</option>
            <option>Pastor</option>
            <option>Evangelist</option>
            <option>Teacher</option>
            <option>Bishop</option>
            <option>Elder</option>
            <option>Deacon</option>
            <option>Intercessor</option>
            <option>Member</option>
          </select>

          <input
            placeholder="Church Name"
            value={churchName}
            onChange={(e) => setChurchName(e.target.value)}
            className="border p-3 w-full rounded"
          />

          <input
            placeholder="Denomination"
            value={denomination}
            onChange={(e) => setDenomination(e.target.value)}
            className="border p-3 w-full rounded"
          />

          <input
            placeholder="Ministry Position"
            value={ministryPosition}
            onChange={(e) => setMinistryPosition(e.target.value)}
            className="border p-3 w-full rounded"
          />

          <input
            type="number"
            placeholder="Years in Ministry"
            value={yearsInMinistry}
            onChange={(e) => setYearsInMinistry(e.target.value)}
            className="border p-3 w-full rounded"
          />

          <input
            placeholder="Senior Pastor"
            value={seniorPastor}
            onChange={(e) => setSeniorPastor(e.target.value)}
            className="border p-3 w-full rounded"
          />

          {/* INTERESTS */}
          <div className="border p-4 rounded">
            <p className="font-bold mb-2">Areas of Interest</p>

            {[
              "Intercession",
              "Evangelism",
              "Leadership",
              "Prayer",
              "Counseling",
            ].map((item) => (
              <label key={item} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={interests.includes(item)}
                  onChange={() => toggleInterest(item)}
                />
                {item}
              </label>
            ))}
          </div>

          {/* AGREEMENT */}
          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
              required
            />
            I agree to the ministry statement
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-950 text-white py-4 rounded font-bold"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>

        </form>
      </div>
    </main>
  );
}