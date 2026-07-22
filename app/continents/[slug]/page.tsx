import { notFound } from "next/navigation";

const continentData: Record<
  string,
  { title: string; description: string }
> = {
  africa: {
    title: "Africa",
    description:
      "Africa is a key region in the Global Courts of Heaven Ministry vision, carrying revival and prayer movements across nations.",
  },

  antarctica: {
    title: "Antarctica",
    description:
      "Antarctica represents the ends of the earth in the global mandate.",
  },

  asia: {
    title: "Asia",
    description:
      "Asia is a continent of nations where the gospel is advancing.",
  },

  europe: {
    title: "Europe",
    description:
      "Europe carries historical Christian foundations and revival assignment.",
  },

  "north-america": {
    title: "North America",
    description:
      "North America is a strategic region for ministry expansion and equipping the saints.",
  },

  "south-america": {
    title: "South America",
    description:
      "South America carries strong revival fire across nations.",
  },

  australia: {
    title: "Australia",
    description:
      "Australia is part of the Oceania mission field for outreach and strengthening the church.",
  },

  zealandia: {
    title: "Zealandia",
    description:
      "Zealandia represents hidden continental regions in the global vision mandate.",
  },
};

export default async function ContinentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = continentData[slug];

  if (!data) {
    notFound();
  }

  // PNG BANNER PATH (FIXED)
  const bannerSrc = `/banners/continents/${slug}.png`;

  return (
    <main className="min-h-screen">

      {/* HERO BANNER */}
      <section className="relative h-[50vh] flex items-center justify-center text-white text-center px-6">

        <img
          src={bannerSrc}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-yellow-400">
            {data.title}
          </h1>

          <p className="mt-4 text-lg max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#0B1B3B] mb-6">
            Ministry Presence in {data.title}
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            This region is part of the Global Courts of Heaven Ministry global mandate
            to establish prayer, unity, righteousness, and intercession across the earth.
          </p>

        </div>
      </section>

    </main>
  );
}