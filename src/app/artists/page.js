"use client";

import Image from "next/image";

export default function ArtistsPage() {
  return (
    <>
      <div className="px-6 py-16 max-w-6xl mx-auto">

        {/* 🎵 Section 1: "Your Music, Their Movement" */}
        <section className="flex flex-col md:flex-row items-center justify-between mt-20 px-4">
          {/* Left Section */}
          <div className="md:w-[35%] text-left mb-10 md:mb-0">
            <h2 className="text-[42px] font-bold leading-tight">
              Your Music, <br />
              Their Movement.
            </h2>
            <p className="text-[15px] text-gray-700 mt-4 leading-snug">
              This isn't about forcing plays. It's about earning real <br />
              support. People power your music here.
            </p>
            <div className="mt-6">
              <Image
                src="/downloadb.png"
                alt="Icon"
                width={150}
                height={90}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-[65%] relative h-[500px] flex justify-center items-center">
            <Image
              src="/elipse.png"
              alt="Bottom Layer"
              width={380}
              height={180}
              className="absolute top-30 left-30 w-[75%] object-contain z-10"
            />
            <Image
              src="/elipseone.png"
              alt="Middle Layer"
              width={550}
              height={300}
              className="absolute top-20 left-20 w-[80%] object-contain z-20"
            />
            <Image
              src="/guy.png"
              alt="Top Layer"
              width={400}
              height={300}
              className="relative w-[75%] object-contain z-30"
            />
          </div>
        </section>

        {/* 🎶 Section 2: "Enjoy Your Music Journey" */}
        <section className="text-center mt-32">
          <h1 className="text-[32px] sm:text-[32px] font-bold mb-4">
            Enjoy Your Music Journey
          </h1>
          <p className="text-[12px] sm:text-[12px] text-gray-700 leading-relaxed max-w-xl mx-auto mb-10">
            Share your music with the world, track real-time insights,<br />
            and monetize your streams effortlessly – all in one powerful platform.
          </p>
          <div className="flex justify-center">
            <Image
              src="/newframe.png"
              alt="Music Journey"
              width={900}
              height={500}
              className="w-[75%] h-auto object-contain"
            />
          </div>
        </section>
      </div>

      {/* 🚀 Full-Width Section (OUTSIDE the max-w wrapper) */}
      <section
        className="w-full flex flex-col md:flex-row items-center justify-between mt-20 px-6 md:px-20 py-20"
        style={{
          background: 'linear-gradient(90deg, #FFD051 0%, #FFCB3F 100%)',
        }}
      >
        {/* Left Section */}
        <div className="md:w-[50%] text-left mb-10 md:mb-0 md:pl-4">
          <h2 className="text-[36px] md:text-[44px] font-bold leading-tight text-gray-900">
            Ready to Grow <br />
            Your Audience?
          </h2>
          <p className="text-[12px] text-gray-800 mt-4 leading-relaxed md:pr-10">
            Join Crestal today and connect with listeners who truly value your music.
            Build a genuine fanbase based on real engagement.
          </p>
          <div className="mt-6">
            <Image
              src="/framebutton.png"
              alt="Download Button"
              width={160}
              height={90}
            />
          </div>
        </div>

        <div className="md:w-[50%] flex justify-end pr-4 md:pr-12 relative">
          <Image
            src="/phonethree.png"
            alt="Phone Image"
            width={570}
            height={1050}
            className="object-contain relative"
            style={{ top: '40px' }} // move up
          />
        </div>

      </section>
    </>
  );
}
