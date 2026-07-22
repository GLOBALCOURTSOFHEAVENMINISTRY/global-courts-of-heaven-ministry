import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen">

      {/* HERO BANNER */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">

        <img
          src="/banner/about-banner.png"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-red text-4xl font-bold">
            About
          </h1>
          <h1 className="text-red text-4xl font-bold">
            Global Courts of Heaven Ministry
          </h1>
        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <p className="text-lg leading-8">
            Grace and peace to all believers across the nations of the earth in the mighty name of our Lord and Savior Jesus Christ.
          </p>

          <p className="text-lg leading-8 mt-6">
            Global Courts of Heaven Ministry was established by divine mandate and instruction from God the Righteous Judge under the leadership of Jesus Christ.
          </p>

        </div>
      </section>

      {/* FOUNDERS TITLE */}
      <section className="bg-gray pt-10 pb-4 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 tracking-wide">
          FOUNDERS
        </h2>
      </section>

      {/* FOUNDERS SECTION */}
      <section className="grid md:grid-cols-2">

        {/* APOSTLE */}
        <div className="bg-[#0B1B3B] text-white py-16 px-8">

          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Apostle & Founder
          </h2>

          <div className="flex justify-center mb-6">
            <img
              src="/images/apostle-brinch.png"
              alt="Apostle Brinch Sabwe Milambwe"
              className="h-64 w-auto rounded-xl object-cover"
            />
          </div>

          <p className="text-center font-semibold text-white mb-6">
            Brinch Sabwe Milambwe
          </p>

          <div className="max-w-xl mx-auto text-center space-y-4 text-sm leading-7">
            <p>
              Apostle Brinch Sabwe Milambwe is the Founder and Apostle of Global Courts of Heaven Ministry. By the grace and calling of our Lord Jesus Christ, he has been entrusted with a divine mandate to unite the Body of Christ across nations, denominations, tribes, cultures, and languages under the Lordship of Jesus Christ.
            </p>

            <p>
              The Lord Jesus Christ spoke to Apostle Brinch Sabwe Milambwe concerning a prophetic assignment to gather believers together in unity, righteousness, repentance, prayer, holiness, and intercession before the throne of grace.
            </p>

            <p>
              Through Global Courts of Heaven Ministry, Apostle Brinch Sabwe Milambwe is committed to helping prepare, equip, strengthen, and restore the Body of Christ through unity, intercession, spiritual alignment, and the teaching of the righteous legal systems of the Courts of Heaven according to the Word of God and the leading of the Holy Spirit.
            </p>

            <p>
              The vision is to see nations healed, denominations and believers united, righteousness restored, and the will of God established throughout the earth.
            </p>
          </div>

        </div>

        {/* PROPHETESS */}
        <div className="bg-white text-[#0B1B3B] py-16 px-8">

          <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
            Prophetess & Co-Founder
          </h2>

          <div className="flex justify-center mb-6">
            <img
              src="/images/teboho-jamela.png"
              alt="Prophetess Teboho Jamela Milambwe"
              className="h-64 w-auto rounded-xl object-cover"
            />
          </div>

          <p className="text-center font-semibold mb-6">
            Teboho Jamela Milambwe
          </p>

          <div className="max-w-xl mx-auto text-center space-y-4 text-sm leading-7">
            <p>
              Prophetess Teboho Jamela Milambwe is the Co-Founder of Global Courts of Heaven Ministry and serves faithfully alongside her husband Apostle Brinch Sabwe Milambwe in advancing the mandate given by the Lord Jesus Christ.
            </p>

            <p>
              She carries a prophetic calling marked by the grace of a prophetess, seer, and revelator, entrusted with spiritual discernment, prophetic insight, and intercession. Her ministry role is deeply connected to supporting, strengthening, and aligning the apostolic vision given to her husband through prayer, revelation, and spiritual guidance.
            </p>

            <p>
              The Lord Jesus Christ has also called her to stand in unity with her husband in fulfilling the divine mandate to unite the Body of Christ and establish the Courts of Heaven on earth.
            </p>

            <p>
              Through her prophetic assignment, she contributes to equipping the saints, nurturing spiritual sensitivity, and helping the Church walk in repentance, holiness, unity, and divine order.
            </p>

            <p>
              Together with Apostle Brinch Sabwe Milambwe, she serves to advance the mission of restoring the Body of Christ and seeing the will of God established across nations.
            </p>
          </div>

        </div>

      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-[#0B1B3B] mb-6">
            Who We Are
          </h2>

          <p className="text-lg leading-8">
            Global Courts of Heaven Ministry is a divine apostolic movement called to unite believers across the nations in prayer, repentance, righteousness, unity, and intercession before the throne of grace.
          </p>

        </div>
      </section>

      {/* MANDATE + FOUNDATION */}
      <section className="bg-[#0B1B3B] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-white text-[#0B1B3B] p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
              Our Mandate
            </h2>
            <p className="text-center leading-7">
              To unite the Body of Christ globally and establish Courts of Heaven prayer systems across nations.
            </p>
          </div>

          <div className="bg-[#0B1B3B] text-white p-8 rounded-xl border border-yellow-500">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              Spiritual Foundation
            </h2>
            <p className="text-center leading-7">
              Built on Jesus Christ as the Chief Cornerstone, rooted in prayer, holiness, repentance, unity, and Scripture.
            </p>
          </div>

        </div>
      </section>

      {/* GLOBAL VISION (CONTINENTS CLICKABLE) */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-[#0B1B3B] mb-10">
            Our Global Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">

            {/* LEFT COLUMN */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">
                Continents & Regions
              </h3>

              <ul className="space-y-3 text-lg text-[#0B1B3B]">
                <li><Link href="/continents/africa" className="hover:text-yellow-500">Africa</Link></li>
                <li><Link href="/continents/antarctica" className="hover:text-yellow-500">Antarctica</Link></li>
                <li><Link href="/continents/asia" className="hover:text-yellow-500">Asia</Link></li>
                <li><Link href="/continents/europe" className="hover:text-yellow-500">Europe</Link></li>
              </ul>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">
                Continents & Regions
              </h3>

              <ul className="space-y-3 text-lg text-[#0B1B3B]">
                <li><Link href="/continents/north-america" className="hover:text-yellow-500">North America</Link></li>
                <li><Link href="/continents/south-america" className="hover:text-yellow-500">South America</Link></li>
                <li><Link href="/continents/australia" className="hover:text-yellow-500">Australia</Link></li>
                <li><Link href="/continents/zealandia" className="hover:text-yellow-500">Zealandia</Link></li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* CALL SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-4xl font-bold text-[#0B1B3B] mb-6">
              Our Call
            </h2>

            <p className="text-lg leading-8 mb-6">
              This ministry is not denominational, political, or governmental. It is a spiritual assignment from Jesus Christ to prepare the nations through prayer, repentance, righteousness, unity, and intercession before the throne of grace.
            </p>

            <p className="text-2xl font-bold text-center text-[#0B1B3B] mt-10">
              Interceding before the throne of grace
            </p>

          </div>

          <div>
            <img
              src="/images/unity.png"
              alt="Unity"
              className="rounded-xl shadow-xl"
            />
          </div>

        </div>
      </section>

    </main>
  );
}