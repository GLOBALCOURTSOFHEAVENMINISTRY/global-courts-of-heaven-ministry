export default function Donation() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">

        <img
          src="/banner/donate-banner.png"
          alt="Partner With Us"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-6 max-w-5xl">

          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6">
            Partner With Us
          </h1>

          <p className="text-xl md:text-2xl mb-8">
            Supporting the Work of the Lord Jesus Christ
          </p>

          <p className="max-w-3xl mx-auto text-lg mb-10">
            Donate to the work of the Lord Jesus Christ through Global Courts of Heaven Ministry.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">

            <a
              href="#giving"
              className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold"
            >
              Donate Today
            </a>

            <a
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md font-bold"
            >
              Contact Us
            </a>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-[#0B1B3B] mb-8">
            Partnering In The Kingdom
          </h2>

          <p className="text-lg leading-8">
            Your giving helps advance the mandate entrusted to Global Courts of Heaven Ministry by our Lord Jesus Christ.
            Through your partnership, lives are impacted, believers are equipped, nations are reached, and prayer altars are established throughout the earth.
          </p>

        </div>

      </section>

      {/* YOUR DONATION HELPS SUPPORT */}
      <section className="bg-[#EAF2FF] py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-yellow-500 mb-14">
            Your Donation Helps Support
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Building Heaven's Prayer Altars",
              "National Prayer Gatherings",
              "Evangelism Outreach",
              "Kingdom Conferences",
              "Intercession Programs",
              "Media Broadcasting",
              "Ministry Missions",
              "Church Unity Initiatives",
              "Global Courts of Heaven Gatherings",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#0B1B3B] text-white p-8 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY GIVE */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-yellow-500 mb-14">
            Why Give?
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Unite the Body of Christ Globally",
              "Establish Prayer Structures",
              "Raise Intercessors and Watchmen",
              "Prepare Nations Spiritually",
              "Spread the Gospel of Jesus Christ",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-100 p-6 rounded-xl shadow text-center"
              >
                <h3 className="font-bold text-blue-900 text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WAYS TO GIVE */}
      <section id="giving" className="bg-[#0B1B3B] text-white py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-yellow-400 mb-14">
            Ways To Give
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* BANK TRANSFER */}
            <div className="bg-white text-[#0B1B3B] p-8 rounded-xl shadow-xl">

              <h3 className="text-2xl font-bold text-yellow-600 mb-6">
                Bank Transfer (South Africa)
              </h3>

              <p><strong>Account Name:</strong> Global Courts of Heaven Ministry</p>
              <p className="mt-2"><strong>Bank:</strong> Standard Bank (To Be Confirmed)</p>
              <p className="mt-2"><strong>Account Number:</strong> Please Contact Ministry</p>
              <p className="mt-2"><strong>Branch Code:</strong> Please Contact Ministry</p>
              <p className="mt-2"><strong>Reference:</strong> Your Name + Donation</p>

              <p className="mt-4 text-sm">
                Banking details are confirmed upon request.
              </p>

              <p className="font-semibold">
                info@globalcourtsofheavenministry.org
              </p>

            </div>

            {/* MOBILE MONEY */}
            <div className="bg-white text-blue-900 p-8 rounded-xl shadow-xl">

              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Mobile Money
              </h3>

              <p><strong>Number:</strong> +27 76 717 9183</p>

              <p className="mt-2">
                <strong>Reference:</strong> Your Name + Donation
              </p>

            </div>

            {/* DEBIT / CREDIT CARD */}
            <div className="bg-white text-[#0B1B3B] p-8 rounded-xl shadow-xl">

              <h3 className="text-2xl font-bold text-yellow-600 mb-6">
                Debit / Credit Card
              </h3>

              <p>Secure online giving through Stripe.</p>

              <p className="mt-4 font-semibold">Coming Soon</p>

              <p className="mt-4">
                Online card payments will be enabled shortly.
              </p>

            </div>

            {/* PAYPAL */}
            <div className="bg-white text-[#0B1B3B] p-8 rounded-xl shadow-xl">

              <h3 className="text-2xl font-bold text-yellow-600 mb-6">
                PayPal & International Giving
              </h3>

              <p>Email us to request a secure PayPal giving link.</p>

              <p className="mt-4 font-semibold">
                info@globalcourtsofheavenministry.org
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SCRIPTURE */}
      <section className="bg-gray-100 py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/images/donate-scripture.png"
              alt="Giving Scripture"
              className="rounded-xl shadow-xl"
            />
          </div>

          <div>

            <h2 className="text-4xl font-bold text-[#0B1B3B] mb-8">
              Featured Scripture
            </h2>

            <blockquote className="text-xl italic leading-10">
              “Freely ye have received, freely give.”
            </blockquote>

            <p className="mt-6 font-bold text-yellow-600">
              Matthew 10:8 (KJV)
            </p>

          </div>

        </div>

      </section>

      {/* STEWARDSHIP */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-yellow-500 mb-10">
            Faithful Stewardship
          </h2>

          <p className="text-lg leading-8 mb-8">
            All donations are used to support the ministry mandate of prayer, evangelism, teaching, intercession, national gatherings, and kingdom advancement.
          </p>

          <p className="text-lg leading-8">
            We are committed to transparency, integrity, and responsible stewardship before God and His people.
          </p>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0B1B3B] text-white py-20 px-6 text-center">

        <h2 className="text-5xl font-bold text-yellow-400 mb-6">
          Thank You For Partnering With Us
        </h2>

        <p className="text-xl max-w-4xl mx-auto mb-10">
          Thank you for helping take the nations of the earth before the Throne of Grace.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a href="#giving" className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold">
            Donate Today
          </a>

          <a href="/registration" className="bg-white text-black px-8 py-3 rounded-md font-bold">
            Register With Us
          </a>

          <a href="/contact" className="bg-gray-800 text-white px-8 py-3 rounded-md font-bold">
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}