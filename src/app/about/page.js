"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
{/* 🎵 Section 1: "Your Music, Their Movement" - Now Full Width & Height */}
<section className="relative w-full h-screen overflow-hidden">
  {/* Background Image */}
  <Image
    src="/bkg.png"
    alt="Background"
    fill
    className="object-cover z-0"
    priority
  />

  {/* Overlay */}
  <div className="absolute inset-0 z-10 bg-[#09090B]/70">
    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,165,0,0.2)_0%,rgba(9,9,11,0.7)_60%,rgba(9,9,11,1)_100%)] z-20" />
  </div>

  {/* Headline Text - Now Above Bottom Image */}
  <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 z-50 text-center px-4">
    <h2 className="text-white text-4xl sm:text-5xl font-bold leading-snug">
      Crestal is not a platform. <br />
      It's a <span className="text-orange-500">movement.</span>
    </h2>
    <p className="text-sm sm:text-lg text-gray-300 mt-4">
      Music should rise because people love it—not because it's pushed on them.
    </p>
  </div>

  {/* Bottom-Aligned Image (Now Smaller) */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 w-full flex justify-center">
    <Image
      src="/bottomcircle.png"
      alt="Main Visual"
      width={600}  // 👈 Reduced width
      height={500} // 👈 Adjusted height
      className="max-w-[600px] h-auto object-contain"
    />
  </div>

  {/* Overlay Image at the Right Top of Bottom Image */}
  <div className="absolute bottom-[35%] right-[15%] z-40">
    <Image
      src="/musiciconz.png"
      alt="Overlay"
      width={100}
      height={100}
      className="object-contain"
    />
  </div>
</section>




{/* 🌍 About Crestal Section */}
<section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
  {/* Left Side - Image */}
  <div className="md:w-1/2 flex justify-center items-center">
    <Image
      src="/phoneImg.png"
      alt="About Crestal"
      width={500} 
      height={600}
      className="max-w-full h-auto rounded-lg shadow-lg"
    />
  </div>

  {/* Right Side - Text Content */}
  <div className="md:w-1/2 md:pl-12">
    {/* Main Header */}
    <h2 className="text-center md:text-left text-[36px] font-bold text-gray-900 mb-6">
      About Crestal
    </h2>

    {/* 🎵 A New Era of Music Discovery */}
    <h3 className="text-xl font-semibold text-black-600 mb-3">
      🎵 A New Era of Music Discovery
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed">
      A space where <span className="font-semibold">music rises</span> because people love it, not because an algorithm decides.
    </p>
    <ul className="text-sm text-gray-700 mt-3 space-y-2">
      <li>✅ <span className="font-medium">Listeners have the power</span> to shape the charts.</li>
      <li>✅ <span className="font-medium">Artists connect directly</span> with their audience.</li>
      <li>✅ <span className="font-medium">Music is interactive</span>, not passive—through challenges, battles, and group listening.</li>
    </ul>
    <p className="text-sm text-gray-700 mt-4">
      This is music <strong>beyond streaming</strong>.
    </p>

    {/* 🚀 Our Mission */}
    <h3 className="text-xl font-semibold text-black-600 mt-6 mb-3">
      🚀 Our Mission
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed">
      To revolutionize how music is discovered, experienced, and endorsed.
    </p>
    <ul className="text-sm text-gray-700 mt-3 space-y-2">
      <li>🔹 No forced plays. No industry politics.</li>
      <li>🔹 The best music wins—because the people say so.</li>
      <li>🔹 Real engagement, real influence, real discovery.</li>
    </ul>
    <p className="text-sm text-gray-700 mt-4">
      Crestal is where <strong>music meets gaming, community, and culture.</strong>
    </p>
  </div>
</section>


{/* 🌍 Join the Movement Section */}
<section
  className="w-full flex flex-col md:flex-row items-center justify-between mt-20 px-6 md:px-20 py-20 relative overflow-hidden"
  style={{
    background: '#000', // Black background
  }}
>
  {/* Left Section */}
  <div className="md:w-[50%] text-left mb-10 md:mb-0 md:pl-4">
    <h2 className="text-[36px] md:text-[44px] font-bold leading-tight text-white">
      🌍 Join the Movement
    </h2>
    <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed md:pr-10">
      Crestal is for the listeners, the creators, the DJs, the fans, the tastemakers.
      This is your space. This is your sound.
    </p>
    <div className="mt-6">
      <Image
        src="/framebutton2.png"
        alt="Download Button"
        width={160}
        height={90}
      />
    </div>
  </div>

  {/* Right Section */}
  <div className="md:w-[50%] flex justify-end pr-4 md:pr-12 relative">
    {/* Main Phone Image - Now Properly Contained */}
    <div className="relative w-[90%] max-h-[500px] flex justify-end">
      <Image
        src="/phonethree.png"
        alt="Phone Image"
        width={570}
        height={1050}
        className="object-contain w-full max-h-[500px] bottom-0"
      />
    </div>

    {/* Stacked Images (Left of Phone) */}
    <div className="absolute bottom-[15%] left-[5%] flex flex-col space-y-3">
      <Image
        src="/smallimage1.png"
        alt="Small Image 1"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <Image
        src="/smallimage2.png"
        alt="Small Image 2"
        width={100}
        height={100}
        className="rounded-lg"
      />
    </div>

    {/* Top-Right Small Image */}
    <div className="absolute top-[5%] right-[5%]">
      <Image
        src="/smalltopimage.png"
        alt="Top Image"
        width={80}
        height={80}
        className="rounded-lg"
      />
    </div>
  </div>
</section>


    </>
  );
}

