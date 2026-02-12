import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ABOUT HEADER */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            ABOUT <span className="text-primary">PORFCOM</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        {/* ABOUT CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image (UNCHANGED) */}
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200">
            <Image
              src="/images/daddy's pic.jpeg"
              alt="daddy's picture"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Text */}
          <div className="space-y-6 max-w-lg -ml-10 pt-10 border-l border-gray-200 pl-8">
            <p className="text-2xl md:text-2xl text-gray-700 leading-relaxed">
              "Empowered to liberate, restore, and reposition lives in their
              lost freedoms. Recovering of destinies, raising righteous Kings,
              men and women into their rightful places."
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This was the mandate given to Apostle Lucky Letambari Kpani that
              manifested as the Commission, Power of Redemption Fire Covenant
              Ministry, on the 6th of February, 2011. From a little over 30
              persons in attendance at the first gathering, the Commission has
              become an ever-growing family of believers who are passionate
              about Christ and bringing the Gospel to the unsaved.
            </p>
          </div>
        </div>

        {/* YEARLY DECLARATION SECTION */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div className="flex items-center">
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              YEARLY <br /> DECLARATION ---
            </h3>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* 2026 */}
            <div className="flex items-center gap-1 text-6xl md:text-7xl font-bold">
              <span>2</span>

              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/images/porfcom logo-cropped.png"
                  alt="Porfcom Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <span>26</span>
            </div>

            {/* MANIFESTATION */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              MANIFESTATION
            </h1>

            {/* DECLARATION TEXT */}
            <p className="text-lg text-gray-700 leading-relaxed">
              I have moved from darkness to light, I am a pacesetter. There
              shall be no ugly situation in my life. No power can take away the
              glory of God upon me. I am excused from poverty, lack, and
              sickness. I will never go down.
            </p>

            <h1 className="text-4xl font-bold">Jesus is Lord!</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
