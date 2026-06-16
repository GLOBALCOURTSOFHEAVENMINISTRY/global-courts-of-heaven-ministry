import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO SECTION */}
      <section className="bg-blue-950 text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">
          Contact Us
        </h1>

        <p className="text-xl">
          Reach the Ministry
        </p>

        <p className="mt-3 max-w-3xl mx-auto">
          Interceding before the throne of grace.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div>

            <h2 className="text-3xl font-bold mb-8 text-blue-950">
              Ministry Office
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-bold text-yellow-600">
                  Global Courts of Heaven Ministry
                </h3>

                <p className="mt-2">
                  Apostle Brinch Sabwe Milambwe — Founder & Apostle
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  Address
                </h3>

                <p className="mt-2">
                  189 Constantia Drive, Weltevreden Park
                  <br />
                  Johannesburg, 1709
                  <br />
                  South Africa
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  Telephone
                </h3>

                <p className="mt-2">
                  +27 76 717 9183
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  Email
                </h3>

                <a
                  href="mailto:info@globalcourtsofheavenministry.org"
                  className="text-blue-700 hover:underline"
                >
                  info@globalcourtsofheavenministry.org
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  Website
                </h3>

                <a
                  href="https://www.globalcourtsofheavenministry.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  www.globalcourtsofheavenministry.org
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  Follow Us
                </h3>

                <div className="mt-3 space-y-2">

                  <a
                    href="https://www.facebook.com/profile.php?id=61575004650654"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-700 hover:underline"
                  >
                    Facebook
                  </a>

                  <a
                    href="https://www.youtube.com/@globalcourtsofheavenministry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-700 hover:underline"
                  >
                    YouTube
                  </a>

                  <a
                    href="https://www.instagram.com/globalcourtsofheavenministry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-700 hover:underline"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://www.tiktok.com/search?q=Global%20Courts%20of%20Heaven%20%28SA%29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-700 hover:underline"
                  >
                    TikTok
                  </a>

                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div>

            <h2 className="text-3xl font-bold mb-4 text-blue-950">
              Send Us a Message
            </h2>

            <p className="mb-8">
              We would love to hear from you.
            </p>

            {/* CLICKABLE LINKS */}
            <div className="bg-gray-100 p-6 rounded-lg mb-8">

              <p className="font-semibold mb-4">
                For:
              </p>

              <div className="space-y-3">

                <Link
                  href="/prayer-requests"
                  className="block text-blue-800 font-medium hover:text-yellow-600 hover:underline"
                >
                  Prayer Requests
                </Link>

                <Link
                  href="/registration"
                  className="block text-blue-800 font-medium hover:text-yellow-600 hover:underline"
                >
                  Event Registration
                </Link>

                <Link
                  href="/partnership"
                  className="block text-blue-800 font-medium hover:text-yellow-600 hover:underline"
                >
                  Partnership Opportunities
                </Link>

                <Link
                  href="/ministry-invitations"
                  className="block text-blue-800 font-medium hover:text-yellow-600 hover:underline"
                >
                  Ministry Invitations
                </Link>

                <Link
                  href="/counseling"
                  className="block text-blue-800 font-medium hover:text-yellow-600 hover:underline"
                >
                  Counseling & Spiritual Support
                </Link>

                <Link
                  href="/donation"
                  className="block text-blue-800 font-medium hover:text-yellow-600 hover:underline"
                >
                  Donations & Sponsorships
                </Link>

                <Link
                  href="/national-representation"
                  className="block text-blue-800 font-medium hover:text-yellow-600 hover:underline"
                >
                  National Representation Inquiries
                </Link>

              </div>

            </div>

            {/* CONTACT FORM */}
            <form className="space-y-5">

              <div>
                <label className="block font-semibold mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  required
                  className="w-full border rounded p-3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Email Address *
                </label>

                <input
                  type="email"
                  required
                  className="w-full border rounded p-3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  className="w-full border rounded p-3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  className="w-full border rounded p-3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Message *
                </label>

                <textarea
                  rows={6}
                  required
                  className="w-full border rounded p-3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-950 text-white px-8 py-3 rounded font-bold hover:bg-blue-800"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-950 text-white py-16 px-6 text-center">

        <h2 className="text-3xl font-bold text-yellow-400">
          Taking the Nations of the Earth to the Courts of Heaven
        </h2>

        <p className="mt-6 max-w-4xl mx-auto">
          We welcome believers, apostles, prophets, bishops, pastors,
          evangelists, teachers, intercessors, elders, and kingdom leaders
          from every nation to stand together before God the Righteous Judge.
        </p>

        <Link
          href="/registration"
          className="inline-block mt-8 bg-yellow-400 text-black px-8 py-3 rounded font-bold"
        >
          Register With Us
        </Link>

      </section>

    </main>
  );
}