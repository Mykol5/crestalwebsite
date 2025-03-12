import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-black">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Shadow Image - larger, behind */}
        <Image
          src="/shadow.png"
          alt="Shadow"
          width={300}
          height={300}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        />

        {/* Logo Image - smaller, in front */}
        <Image
          src="/logoback.png"
          alt="Logo Back"
          width={800}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 gap-6">
        <h1 className="text-[48px] font-semibold">
          The Future of Music Discovery
        </h1>

        <p className="text-lg text-gray-700">
          Music Beyond Algorithms. Powered by People.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href="#"
            className="bg-black text-white px-6 py-3 flex items-center gap-2 font-medium text-sm sm:text-base"
          >
            Listener & Creators
            <Image src="/arrowwhite.png" alt="Arrow" width={18} height={18} />
          </Link>

          <Link
            href="#"
            className="bg-white text-black px-6 py-3 border border-black font-medium text-sm sm:text-base flex items-center gap-2"
          >
            For Artists
            <Image src="/arrowblack.png" alt="Arrow" width={18} height={18} />
          </Link>
        </div>
      </section>

{/* New Section */}

{/* Section with Background Image and Gradient Overlay */}
<section className="relative w-full h-[600px] overflow-hidden">
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
    {/* Radial gradient in center - ORANGE GLOW */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,165,0,0.2)_0%,rgba(9,9,11,0.7)_60%,rgba(9,9,11,1)_100%)] z-20"></div>
  </div>

  {/* 🔥 Top Crest Image with Text + Headline and Description */}
  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-30 text-center px-4">
    {/* Crest Image with Tagline */}
    <div className="relative mb-4">
      <Image
        src="/crest.png" // Your crest image
        alt="Crest Logo"
        width={450}
        height={80}
        className="object-contain mx-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-black text-sm md:text-base font-bold tracking-wide drop-shadow-md">
          🔥 Discover. Challenge. Endorse. Win
        </p>
      </div>
    </div>

    {/* 🎧 Listeners & Creators */}
    <h3 className="text-[34px] font-semibold text-white mb-2 leading-tight">
      🎧 For Listeners & Creators
    </h3>

    {/* Description Text */}
    <p className="text-[15px] font-light text-white max-w-3xl mx-auto leading-relaxed">
      Get access to exclusive new and unreleased music, and be able to earn money for each review you write. Share your honest opinions and help shape the future of the music industry.
    </p>
  </div>


</section>




{/* New Section */}
<section className="relative z-10 bg-black text-white w-full py-32 px-6">
  <div className="max-w-7xl mx-auto relative h-[600px] flex items-center justify-between gap-12">
    
    {/* Text Content - Centered vertically & away from left */}
    <div className="flex-1 text-left pl-28"> {/* pushed away from left */}
      <h2 className="text-[45px] font-normal leading-tight max-w-xl">
        Stream your favorite music, earn rewards, and exclusive perks while you listen
      </h2>

      <Link
        href="#"
        className="inline-block mt-6 bg-white text-black text-[20px] font-bold px-8 py-3 rounded-md"
      >
        Join the Community
      </Link>
    </div>

    {/* Phone Image + Shadow aligned to section's bottom */}
    <div className="absolute bottom-0 right-0 flex items-end justify-end w-[50%] h-full pr-6">
      <div className="relative w-[400px] h-[500px] z-10">
        {/* Shadow Behind */}
        <Image
          src="/shadowtwo.png"
          alt="Shadow"
          width={300}
          height={400}
          className="absolute bottom-0 left-[-50px] z-0 object-contain"
        />
        
        {/* Phone Image */}
        <Image
          src="/phone.png"
          alt="Phone"
          width={500}
          height={900}
          className="object-contain relative z-10"
        />
      </div>
    </div>
  </div>
</section>


    </div>
  );
}





// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-white text-black">
//       {/* Background Images */}
//       <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
//         {/* Shadow Image - larger, behind */}
//         <Image
//           src="/shadow.png"
//           alt="Shadow"
//           width={300}
//           height={300}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
//         />

//         {/* Logo Image - smaller, in front */}
//         <Image
//           src="/logoback.png"
//           alt="Logo Back"
//           width={800}
//           height={800}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
//         />
//       </div>

//       {/* Content */}
//       <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 gap-6">
//         <h1 className="text-[48px] font-semibold">
//           The Future of Music Discovery
//         </h1>

//         <p className="text-lg text-gray-700">
//           Music Beyond Algorithms. Powered by People.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 mt-6">
//           <Link
//             href="#"
//             className="bg-black text-white px-6 py-3 flex items-center gap-2 font-medium text-sm sm:text-base"
//           >
//             Listener & Creators
//             <Image src="/arrowwhite.png" alt="Arrow" width={18} height={18} />
//           </Link>

//           <Link
//             href="#"
//             className="bg-white text-black px-6 py-3 border border-black font-medium text-sm sm:text-base flex items-center gap-2"
//           >
//             For Artists
//             <Image src="/arrowblack.png" alt="Arrow" width={18} height={18} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }
