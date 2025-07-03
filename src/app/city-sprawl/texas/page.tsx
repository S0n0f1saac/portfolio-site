"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TexasSprawl() {
  const images = Array.from({ length: 12 }, (_, i) => {
    const year = 2012 + i;
    return {
      src: `/images/texas/Texas_Night_${year}.png`,
      year,
    };
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="min-h-screen px-6 py-16 text-gray-200"
      style={{ backgroundColor: "rgb(26, 26, 26)" }}
    >
      <div className="pt-12 max-w-4xl mx-auto text-center">
        <div className="relative w-full h-[480px]">
          {images.map((image, i) => (
            <Image
              key={i}
              src={image.src}
              alt={`Urban sprawl in ${image.year}`}
              fill
              className={`object-contain ${i === current ? "block" : "hidden"}`}
              priority={i === 0}
            />
          ))}
        </div>

        <p className="mt-6 text-lg font-semibold text-gray-100">
          Year: {images[current].year}
        </p>

        <div className="mt-4 flex justify-center">
          <input
            type="range"
            min={0}
            max={images.length - 1}
            value={current}
            onChange={(e) => setCurrent(Number(e.target.value))}
            className="w-full max-w-xl accent-blue-500"
          />
        </div>
      </div>
    </main>
  );
}
