import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] md:min-h-[700px] overflow-hidden"
    >
      {/* Background with overlay grid */}
      <div className="absolute inset-0 bg-black/70">
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gray-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-30 md:opacity-25">
        <Image
          src="/images/church-crowd.jpg"
          alt="Church worship background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/25 to-black/15 z-0" />

        <div className="text-center max-w-3xl mx-auto z-10">
          <h1 className="font-semibold text-white text-balance leading-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl mb-2">
              Welcome to
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Power Of Redemption
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-1">
              Fire Covenant Ministry
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 md:mb-12 leading-relaxed text-pretty">
            (Redemption House)
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            {/* Watch Live */}
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary text-white font-semibold px-8 h-12 rounded-lg
               shadow-md transition-all duration-300
               hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-0.5
               focus-visible:outline-none"
            >
              <a
                href="https://web.facebook.com/profile.php?id=61572902276161"
                className="relative z-10"
              >
                Watch Live
              </a>
            </Button>

            {/* Join Us This Sunday */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group relative overflow-hidden bg-transparent
               border-2 border-white text-white font-semibold px-8 h-12 rounded-lg
               transition-all duration-300
               hover:bg-white hover:text-black hover:shadow-lg hover:-translate-y-0.5
               focus-visible:outline-none"
            >
              <a href="#contact" className="relative z-10">
                Join Us This Sunday
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
