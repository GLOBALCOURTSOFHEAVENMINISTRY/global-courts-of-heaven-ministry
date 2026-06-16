export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
<section className="relative h-[90vh] flex items-center justify-center text-center">

  <img
    src="/banner/hero-banner.png"
    alt="Courts of Heaven"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/10"></div>

  <div className="relative z-10 px-6 max-w-5xl">

    <h2 className="text-red-600 text-5xl md:text-7xl font-bold mb-4">
      2050
    </h2>

    <h1 className="text-red-600 text-4xl md:text-6xl font-bold mb-4">
      A Global Mandate To Unite All Denominations Under
      One Body Of The Lord Jesus Christ
    </h1>

    <p className="text-red text-xl md:text-2xl mb-10 font-semibold">
      “That they all may be one; as thou, Father, art in me, and I in thee.”
      John 17:21
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-4">

      <a
        href="/registration"
        className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold"
      >
        Register Now
      </a>

      <a
        href="/about"
        className="bg-white text-black px-8 py-3 rounded-md font-bold"
      >
        Join The Movement
      </a>

      <a
        href="/events"
        className="bg-blue-900 text-white px-8 py-3 rounded-md font-bold"
      >
        Upcoming Events
      </a>

    </div>

  </div>

</section>

      {/* WELCOME */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3B] mb-8">
            Welcome to Global Courts of Heaven Ministry
          </h2>

          <p className="text-lg leading-8 max-w-4xl mx-auto">
            Jesus Christ is calling believers from every nation, tribe,
            language, denomination and culture to arise in unity before
            the Throne of Grace.
          </p>

          <p className="text-lg leading-8 max-w-4xl mx-auto mt-6">
            Global Courts of Heaven Ministry is a divine apostolic mandate
            established under the leadership of Jesus Christ to unite the
            Body of Christ throughout the nations through repentance,
            righteousness, reconciliation, holiness, prayer and covenant
            alignment before Heaven.
          </p>

        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-[#0B1B3B] mb-6">
              Our Vision
            </h3>
            <p className="text-lg leading-8">
              To unite all true believers as one Body under Jesus Christ
              and establish Courts of Heaven prayer structures throughout
              the nations of the earth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-[#0B1B3B] mb-6">
              Our Mission
            </h3>
            <ul className="space-y-3 text-lg">
              <li>• Unite the Body of Christ globally</li>
              <li>• Establish one altar of righteousness</li>
              <li>• Establish Courts of Heaven systems on earth</li>
              <li>• Raise intercessors and kingdom watchmen</li>
              <li>• Prepare the Church spiritually for the years ahead</li>
              <li>• Lead nations into repentance and reconciliation</li>
            </ul>
          </div>

        </div>
      </section>

      {/* THREE MANDATES */}
      <section className="bg-[#0B1B3B] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-12">
            Three Sacred Mandates
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white text-black p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">1. Unite All Believers</h3>
              <p>
                As one Body under Jesus Christ across all nations and cultures.
              </p>
            </div>

            <div className="bg-white text-black p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                2. One Altar of Righteousness
              </h3>
              <p>
                Restoring holiness, repentance, and reconciliation.
              </p>
            </div>

            <div className="bg-white text-black p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                3. Courts of Heaven on Earth
              </h3>
              <p>
                Raising intercessors to petition Heaven for the nations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SCRIPTURE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/images/open-bible.png"
            alt="Open Bible"
            className="rounded-xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold text-[#0B1B3B] mb-8">
              Featured Scripture
            </h2>

            <blockquote className="text-xl italic leading-10">
              “And I will give unto thee the keys of the kingdom of heaven:
              and whatsoever thou shalt bind on earth shall be bound in heaven:
              and whatsoever thou shalt loose on earth shall be loosed in heaven.”
            </blockquote>

            <p className="mt-6 font-bold text-yellow-600">
              Matthew 16:19 (KJV)
            </p>
          </div>

        </div>
      </section>

      {/* CALL TO NATIONS */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-4xl font-bold text-[#0B1B3B] mb-8">
              Call To The Nations
            </h2>

            <p className="text-lg leading-8 mb-6">
              The Lord is gathering His people together in unity.
            </p>

            <p className="text-lg leading-8 mb-6">
              Believers, apostles, prophets, pastors, evangelists,
              teachers, intercessors, elders, and kingdom leaders are
              called to stand before God.
            </p>

            <p className="text-lg leading-8">
              Preparing the Church for the coming move of God.
            </p>
          </div>

          <img
            src="/images/nations-crowd.png"
            alt="Nations"
            className="rounded-xl shadow-xl"
          />

        </div>
      </section>

      {/* JOIN THE MOVEMENT */}
      <section className="py-20 px-6 text-center bg-white">

        <h2 className="text-5xl font-bold text-[#0B1B3B] mb-6">
          Join The Movement
        </h2>

        <p className="text-xl mb-10">
          Stand with us as we unite believers across the nations.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="/registration"
            className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold"
          >
            Register Now
          </a>

          <a
            href="/events"
            className="bg-[#0B1B3B] text-white px-8 py-3 rounded-md font-bold"
          >
            Upcoming Events
          </a>

          <a
            href="/donation"
            className="bg-black text-white px-8 py-3 rounded-md font-bold"
          >
            Donate
          </a>

        </div>

      </section>

    </main>
  );
}