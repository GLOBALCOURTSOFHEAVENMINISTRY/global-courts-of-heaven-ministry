import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Fetch event page
  const { data: event, error: eventError } = await supabase
    .from("event_pages")
    .select("*")
    .eq("slug", slug)
    .single();

  if (eventError || !event) {
    notFound();
  }

  // 2. Fetch speakers for this event
  const { data: speakers } = await supabase
    .from("event_speakers")
    .select("*")
    .eq("event_slug", slug)
    .order("display_order", { ascending: true });

  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">

        <img
          src={event.banner_image}
          alt={`${event.continent} Gathering`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
            {event.continent} Gathering
          </h1>

          <p className="mt-4 text-xl">
            Global Courts of Heaven Ministry
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-[#0B1B3B] mb-8">
            Coming Soon
          </h2>

          <p className="text-xl leading-8">
            {event.description}{" "}
            Details regarding the upcoming continental gathering will be announced soon.
          </p>

        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
              Date
            </h3>
            <p className="text-yellow-600 font-bold">
              {event.event_date}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
              Location
            </h3>
            <p className="text-yellow-600 font-bold">
              {event.location}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-[#0B1B3B] mb-4">
              Registration
            </h3>
            <p className="text-yellow-600 font-bold">
              {event.registration_status}
            </p>
          </div>

        </div>
      </section>

      {/* SPEAKERS */}
      {speakers && speakers.length > 0 && (
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold text-center text-[#0B1B3B] mb-12">
              Speakers
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {speakers.map((speaker: any) => (
                <div
                  key={speaker.id}
                  className="bg-gray-50 rounded-xl shadow-md p-6 text-center"
                >
                  <img
                    src={speaker.photo}
                    alt={speaker.full_name}
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                  />

                  <h3 className="text-xl font-bold text-[#0B1B3B]">
                    {speaker.full_name}
                  </h3>

                  <p className="text-yellow-600 font-semibold">
                    {speaker.title}
                  </p>

                  {speaker.bio && (
                    <p className="text-gray-600 mt-3 text-sm">
                      {speaker.bio}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#0B1B3B] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            Stay Connected
          </h2>

          <p className="text-lg leading-8 mb-10">
            Be among the first to receive updates regarding the upcoming{" "}
            {event.continent} Gathering.
          </p>

          <a
            href="/registration"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold"
          >
            Register Interest
          </a>

        </div>
      </section>

    </main>
  );
}