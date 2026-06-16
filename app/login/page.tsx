"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    // success → go to dashboard (we will build next)
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-blue-950 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
          Member Login
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Access your Global Courts of Heaven Ministry member account.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <div className="bg-white border rounded-lg shadow-lg p-8">

          <h2 className="text-3xl font-bold text-center mb-8 text-blue-950">
            Sign In
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="block font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded p-3"
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block font-semibold mb-2">
                Password *
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded p-3"
                required
              />
            </div>

            {/* REMEMBER */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember Me
              </label>

              <Link href="#" className="text-blue-700 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-950 text-white py-3 rounded font-bold hover:bg-blue-800"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="flex-1 border-t"></div>
          </div>

          {/* GOOGLE BUTTON (UI only for now) */}
          <button
            type="button"
            className="w-full border border-gray-300 py-3 rounded font-semibold flex items-center justify-center gap-3 hover:bg-gray-50"
          >
            Continue with Google
          </button>

          {/* REGISTER */}
          <div className="text-center mt-8">
            <p>Don't have an account?</p>

            <Link
              href="/registration"
              className="text-blue-700 font-semibold hover:underline"
            >
              Register Here
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}