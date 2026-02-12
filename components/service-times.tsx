import { MapPin, Clock } from "lucide-react";

export default function ServiceTimes() {
  const services = [
    {
      day: "Sunday",
      times: ["9:00 AM"],
      type: "Restoration Service",
    },
    {
      day: "Teusday",
      times: ["10:00 AM"],
      type: "The Power of His Presence",
    },
    {
      day: "Friday",
      times: ["5:00 PM"],
      type: "Bible Study/Destiny Recovery",
    },
  ];

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Service Times & <span className="text-primary">Location</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Service Times Cards */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Schedule
            </h3>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-primary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {service.day}
                </h4>
                <p className="text-primary font-semibold text-lg mb-2">
                  {service.type}
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{service.times.join(" & ")}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Location & Map */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-blue-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-primary opacity-30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Find Us
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold">
                      Address
                    </p>
                    <p className="text-lg text-gray-800 font-semibold mt-1">
                      Elikpokwu-Odu,Last Bus Stop,
                      <br />
                      Before Hydropet Fuel Station,
                      <br />
                      Rukpokwu, Obio Akpor
                      <br />
                      Rivers State, Nigeria.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold">
                      Contact
                    </p>
                    <p className="text-lg text-primary font-semibold mt-1">
                      +234 (0) 912-003-2527
                      <br />
                      porfcommedia@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Parking:</strong> Free parking available on-site
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Accessibility:</strong> Wheelchair accessible facilities
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Children:</strong> Nursery and children's ministry
                available
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
