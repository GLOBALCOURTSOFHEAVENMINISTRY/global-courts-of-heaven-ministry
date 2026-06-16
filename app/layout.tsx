import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Global Courts of Heaven Ministry",
  description:
    "Interceding before the throne of grace. Taking the nations of the earth to the Courts of Heaven.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* HEADER */}
        <header className="bg-blue-950 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
              <img
                src="/logo.jpg"
                alt="Global Courts of Heaven Ministry"
                className="h-16 w-16 object-contain"
              />

              <div className="leading-tight">
                <h1 className="text-lg md:text-xl font-bold text-yellow-400">
                  Global Courts of Heaven Ministry
                </h1>
                <p className="text-xs md:text-sm text-white/90">
                  Interceding Before the Throne of Grace
                </p>
              </div>
            </div>

            {/* NAVIGATION */}
            <nav className="hidden md:block">
              <ul className="flex gap-6 text-sm font-medium">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/donation">Donate</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/registration">Registration</Link></li>
                <li><Link href="/login">Login</Link></li>
              </ul>
            </nav>

          </div>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
<footer className="bg-black text-white mt-20">
  <div className="max-w-7xl mx-auto px-6 py-12">

    <div className="grid md:grid-cols-3 gap-10">

      {/* MINISTRY INFO */}
      <div>
        <h3 className="text-2xl font-bold text-blue-400 mb-4">
          Global Courts of Heaven Ministry
        </h3>

        <p>
          Interceding before the throne of grace.
        </p>

        <p className="mt-3">
          Taking the nations of the earth to the Courts of Heaven,
          a divine apostolic mandate uniting the Body of Christ.
        </p>
      </div>

      {/* QUICK LINKS */}
      <div>
        <h3 className="text-xl font-bold text-yellow-400 mb-4">
          Quick Links
        </h3>

        <ul className="space-y-2">
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-yellow-400">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/gallery" className="hover:text-yellow-400">
              Gallery
            </Link>
          </li>

          <li>
            <Link href="/events" className="hover:text-yellow-400">
              Events
            </Link>
          </li>

          <li>
            <Link href="/donation" className="hover:text-yellow-400">
              Donate
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>

          <li>
            <Link href="/registration" className="hover:text-yellow-400">
              Registration
            </Link>
          </li>

          <li>
            <Link href="/login" className="hover:text-yellow-400">
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="text-xl font-bold text-yellow-400 mb-4">
          Contact
        </h3>

        <p>
          189 Constantia Drive, Weltevreden Park,
          Johannesburg, 1709, South Africa
        </p>

        <p className="mt-2">
          +27 76 717 9183
        </p>

        <p className="mt-2">
          info@globalcourtsofheavenministry.org
        </p>

        <div className="mt-6 space-y-2">

          <a
            href="https://www.facebook.com/profile.php?id=61575004650654"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-yellow-400"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/globalcourtsofheavenministry/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-yellow-400"
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/@globalcourtsofheavenministry"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-yellow-400"
          >
            YouTube
          </a>

          <a
            href="https://www.tiktok.com/search?q=Global%20Courts%20of%20Heaven%20%28SA%29"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-yellow-400"
          >
            TikTok
          </a>

        </div>
      </div>

    </div>

    {/* COPYRIGHT */}
    <div className="border-t border-gray-700 mt-10 pt-6 text-center">

      <p>
        © 2026 Global Courts of Heaven Ministry. All Rights Reserved.
      </p>

      <p className="mt-2 italic text-yellow-400">
        “That they all may be one; as thou, Father, art in me,
        and I in thee.” — John 17:21
      </p>

    </div>

  </div>
</footer>

      </body>
    </html>
  );
}