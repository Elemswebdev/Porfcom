"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      // title: "Sunday Worship",
      src: "/images/EJ4.jpg",
    },
    {
      id: 2,
      // title: "Community Service",
      src: "/images/Image1.jpeg",
    },
    {
      id: 3,
      // title: "Youth Ministry",
      src: "/images/Image2.jpeg",
    },
    {
      id: 4,
      // title: "Prayer Meeting",
      src: "/images/Image3.jpeg",
    },
    {
      id: 5,
      // title: "Bible Study",
      src: "/images/church-crowd.jpg",
    },
    {
      id: 6,
      // title: "Celebration Event",
      src: "/images/sunpic6.jpg",
    },
  ];

  return (
    <section
      id="gallery"
      className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Moments of <span className="text-primary">Worship</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 md:h-72 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center z-10 transform transition-all duration-300">
                  <div
                    className={`text-white text-2xl font-bold transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {/* {image.title} */}
                  </div>
                  {/* {hoveredIndex === index && (
                    <p className="text-blue-100 mt-2 text-sm animate-fade-in">
                      Click to view more
                    </p>
                  )} */}
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-20" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          {/* <p className="text-gray-600 text-lg">
            Visit our gallery to see more moments of worship and community
          </p> */}
        </div>
      </div>
    </section>
  );
}
