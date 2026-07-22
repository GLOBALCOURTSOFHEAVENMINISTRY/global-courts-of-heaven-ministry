import Link from "next/link";
export default function Events() {
  return (
    <main className="min-h-screen">

      {/* HERO BANNER */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">

        <img
          src="/banner/events-banner.png"
          alt="Upcoming Events"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-6 max-w-5xl">

          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6">
            Upcoming Events
          </h1>

          <p className="text-xl md:text-2xl mb-8">
            Global Apostolic Gatherings Before the Throne of Grace
          </p>

          <p className="max-w-3xl mx-auto text-lg md:text-xl">
            Gathering believers, apostles, prophets, bishops, pastors,
            evangelists, teachers, intercessors, elders, and kingdom
            leaders from South Africa and the nations of the earth.
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

            <a
              href="/registration"
              className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold"
            >
              Register Now
            </a>

            <a
              href="#featured-event"
              className="bg-white text-black px-8 py-3 rounded-md font-bold"
            >
              View Event Details
            </a>

          </div>

        </div>

      </section>

      {/* DIVINE GATHERING */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-[#0B1B3B] mb-8">
            A Divine Gathering of Nations
          </h2>

          <p className="text-lg leading-8 mb-6">
            Grace and peace in the name of our Lord Jesus Christ.
          </p>

          <p className="text-lg leading-8 mb-6">
            Global Courts of Heaven Ministry invites believers from every
            nation, tribe, language, denomination, and culture to gather
            together in unity before God the Righteous Judge.
          </p>

          <p className="text-lg leading-8">
            These gatherings are part of a divine mandate given by the
            Lord Jesus Christ to prepare the Body of Christ through
            repentance, righteousness, prayer, reconciliation, holiness,
            and intercession before the throne of grace.
          </p>

        </div>
      </section>

      {/* FEATURED EVENT */}
      <section
        id="featured-event"
        className="bg-[#0B1B3B] text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-yellow-400 mb-10">
            Featured National Apostolic Gathering
          </h2>

          <div className="bg-white text-[#0B1B3B] rounded-2xl shadow-xl p-10">

            <h3 className="text-4xl font-bold mb-4">
              Union Buildings, Pretoria
            </h3>

            <p className="text-xl mb-3">
              📅 3–5 September 2026
            </p>

            <p className="text-xl mb-6">
              📍 Pretoria, South Africa
            </p>

            <h4 className="text-2xl font-bold text-yellow-600 mb-4">
              Theme
            </h4>

            <p className="text-xl mb-8">
              Uniting the Body of Christ Before the Throne of Grace
            </p>

            <p className="max-w-4xl mx-auto leading-8 mb-8">
              This historic gathering will bring together believers and
              leaders from across South Africa to seek the Lord in unity
              and to stand in intercession for the nation.
            </p>

            <a
              href="/registration"
              className="inline-block bg-[#0B1B3B] text-white px-8 py-3 rounded-md font-bold"
            >
              Register to Attend
            </a>

          </div>

        </div>
      </section>

      {/* PURPOSE */}
      <section className="bg-gray-100 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-[#0B1B3B] mb-14">
            Purpose of the Gathering
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                National Repentance
              </h3>
              <p>Seeking God's mercy and restoration for the nation.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Prayer for South Africa
              </h3>
              <p>Standing in prayer for peace and righteousness.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Government Leadership
              </h3>
              <p>Praying for wisdom and righteous leadership.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Healing Divisions
              </h3>
              <p>Building unity across races, tribes, and communities.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Courts of Heaven
              </h3>
              <p>Presenting righteous petitions before the throne.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Revival & Restoration
              </h3>
              <p>Praying for awakening and transformation.</p>
            </div>

          </div>

        </div>

      </section>

      {/* SOUTH AFRICA */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-[#0B1B3B] mb-12">
            South Africa United in Prayer
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Gauteng",
              "KwaZulu-Natal",
              "Eastern Cape",
              "Western Cape",
              "Northern Cape",
              "Free State",
              "Limpopo",
              "Mpumalanga",
              "North West",
            ].map((province) => (
              <div
                key={province}
                className="bg-gray-100 p-6 rounded-xl shadow"
              >
                <h3 className="text-xl font-bold text-[#0B1B3B]">
                  {province}
                </h3>
              </div>
            ))}

          </div>

          <p className="mt-10 text-lg max-w-4xl mx-auto">
            Representatives from all nine provinces are invited to stand
            together as one nation before the Lord Jesus Christ.
          </p>

        </div>

      </section>

      {/* GLOBAL VISION */}
<section className="bg-[#0B1B3B] text-white py-20 px-6">

  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-5xl font-bold text-yellow-400 mb-12">
      The Nations Are Calling
    </h2>

    <p className="text-xl max-w-4xl mx-auto mb-12">
      The Lord Jesus Christ is extending this mandate beyond South Africa and
      into the nations of the earth.
    </p>

    <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">

      <div className="bg-white text-[#0B1B3B] rounded-xl p-8">
        <div className="space-y-4">

          <Link href="/continents/africa" className="block hover:text-yellow-600 font-semibold">
            Africa
          </Link>

          <Link href="/continents/antarctica" className="block hover:text-yellow-600 font-semibold">
            Antarctica
          </Link>

          <Link href="/continents/asia" className="block hover:text-yellow-600 font-semibold">
            Asia
          </Link>

          <Link href="/continents/europe" className="block hover:text-yellow-600 font-semibold">
            Europe
          </Link>

        </div>
      </div>

      <div className="bg-white text-[#0B1B3B] rounded-xl p-8">
        <div className="space-y-4">

          <Link href="/continents/north-america" className="block hover:text-yellow-600 font-semibold">
            North America
          </Link>

          <Link href="/continents/south-america" className="block hover:text-yellow-600 font-semibold">
            South America
          </Link>

          <Link href="/continents/australia" className="block hover:text-yellow-600 font-semibold">
            Australia
          </Link>

          <Link href="/continents/zealandia" className="block hover:text-yellow-600 font-semibold">
            Zealandia
          </Link>

        </div>
      </div>

    </div>

  </div>

</section>

      {/* COMING SOON */}
<section className="bg-gray-100 py-20 px-6">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-[#0B1B3B] mb-14">
      Global Gatherings Coming Soon
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <Link
        href="/events/africa"
        className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
      >
        <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
          Africa Gathering
        </h3>
        <p className="text-yellow-500 font-bold">
          Coming Soon
        </p>
      </Link>

<Link
    href="/events/antarctica"
    className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
  >
    <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
      Antarctica Gathering
    </h3>
    <p className="text-yellow-500 font-bold">
      Coming Soon
    </p>
  </Link>

      <Link
        href="/events/europe"
        className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
      >
        <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
          Europe Gathering
        </h3>
        <p className="text-yellow-500 font-bold">
          Coming Soon
        </p>
      </Link>

      <Link
        href="/events/asia"
        className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
      >
        <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
          Asia Gathering
        </h3>
        <p className="text-yellow-500 font-bold">
          Coming Soon
        </p>
      </Link>

      <Link
        href="/events/north-america"
        className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
      >
        <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
          North America Gathering
        </h3>
        <p className="text-yellow-500 font-bold">
          Coming Soon
        </p>
      </Link>

      <Link
        href="/events/south-america"
        className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
      >
        <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
          South America Gathering
        </h3>
        <p className="text-yellow-500 font-bold">
          Coming Soon
        </p>
      </Link>

       <Link
    href="/events/australia"
    className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
  >
    <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
      Australia Gathering
    </h3>
    <p className="text-yellow-500 font-bold">
      Coming Soon
    </p>
  </Link>

  <Link
    href="/events/zealandia"
    className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
  >
    <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
      Zealandia Gathering
    </h3>
    <p className="text-yellow-500 font-bold">
      Coming Soon
    </p>
  </Link>

    </div>

  </div>

</section>

      {/* SCRIPTURE */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/images/events-scripture.png"
              alt="Prayer Gathering"
              className="rounded-xl shadow-xl"
            />
          </div>

          <div>

            <h2 className="text-4xl font-bold text-[#0B1B3B] mb-8">
              Featured Scripture
            </h2>

            <blockquote className="text-xl italic leading-10">
              “Where two or three are gathered together in my name,
              there am I in the midst of them.”
            </blockquote>

            <p className="mt-6 font-bold text-yellow-600">
              Matthew 18:20 (KJV)
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 text-center">

        <h2 className="text-5xl font-bold text-[#0B1B3B] mb-6">
          Join The Gathering
        </h2>

        <p className="text-xl max-w-4xl mx-auto mb-10">
          Stand together with believers from every nation, tribe,
          language, and denomination as we gather before the Throne of Grace.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="/registration"
            className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold"
          >
            Register Now
          </a>

          <a
            href="/contact"
            className="bg-[#0B1B3B] text-white px-8 py-3 rounded-md font-bold"
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}