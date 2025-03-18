"use client";

import Image from "next/image";

export default function ArtistsPage() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto text-center">
      {/* Title */}
      <h1 className="text-[32px] sm:text-[32px] font-bold mb-4">
        Enjoy Your Music Journey
      </h1>

      {/* Description */}
      <p className="text-[12px] sm:text-[12px] text-gray-700 leading-relaxed max-w-xl mx-auto mb-10">
        Share your music with the world, track real-time insights,<br />
        and monetize your streams effortlessly – all in one powerful platform.
      </p>

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src="/newframe.png" // Replace with your actual image path
          alt="Music Journey"
          width={900}
          height={500}
          className="w-[75%] h-auto object-contain"
        />
      </div>
    </div>
  );
}