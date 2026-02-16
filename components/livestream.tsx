import Image from "next/image";

export default function Livestream() {
  return (
    <section
      id="livestream"
      className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: EVENT IMAGE */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image (UNCHANGED) */}
            <Image
              src="/images/Annual.jpeg"
              alt="EJ's picture"
              fill
              className="object-cover object-top"
              priority
            />

            {/* RIGHT: CONTENT */}
            <div className="max-w-xl">
              <p className="text-md font-bold tracking-widest text-black-700 mb-4">
                ANNUAL PROGRAM
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Join our Services <br /> and Programmes
              </h2>

              <p className="text-gray-600 text-lg mb-10">
                Find out God’s plan for you. Experience Him uniquely.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#livestream"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Livestream
                </a>

                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition"
                >
                  View Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
