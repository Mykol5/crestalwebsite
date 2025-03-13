import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/shadow.png"
            alt="Shadow"
            width={300}
            height={300}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          <Image
            src="/logoback.png"
            alt="Logo Back"
            width={800}
            height={800}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-24 gap-6 h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            The Future of Music Discovery
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-xl">
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
        </div>
      </section>

{/* Orange Glow Section */}
<section className="relative w-full h-[700px] sm:h-[750px] overflow-hidden">
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

  {/* Text Block */}
  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-30 text-center px-4 max-w-2xl w-full">
    <div className="relative mb-4">
      <Image
        src="/crest.png"
        alt="Crest Logo"
        width={450}
        height={80}
        className="object-contain mx-auto w-full max-w-[250px] sm:max-w-[400px]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-black text-xs sm:text-sm font-bold tracking-wide drop-shadow-md">
          🔥 Discover. Challenge. Endorse. Win
        </p>
      </div>
    </div>

    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 leading-tight">
      🎧 For Listeners & Creators
    </h3>
    <p className="text-sm sm:text-base text-white leading-relaxed">
      Get access to exclusive new and unreleased music, and be able to earn money for each review you write. Share your honest opinions and help shape the future of the music industry.
    </p>
  </div>

  {/* Phone Image Underneath Text */}
  <div className="absolute top-[47%] left-1/2 transform -translate-x-1/2 z-30">
    <Image
      src="/phonetwo.png"
      alt="Phone"
      width={300}
      height={800}
      className="object-contain"
    />
  </div>
</section>


      <section className="relative z-10 bg-black text-white w-full py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative">
    
    {/* Text Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-normal leading-tight max-w-xl mx-auto lg:mx-0">
        Stream your favorite music, earn rewards, and exclusive perks while you listen
      </h2>
      <Link
        href="#"
        className="inline-block mt-6 bg-white text-black text-lg font-bold px-6 py-3 rounded-md"
      >
        Join the Community
      </Link>
    </div>

    {/* Image Section */}
    <div className="relative w-full lg:w-1/2 flex items-end justify-center lg:justify-end h-[400px] lg:h-[500px]">
      <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-full flex items-end">
        {/* Shadow */}
        <Image
          src="/shadowtwo.png"
          alt="Shadow"
          layout="fill"
          objectFit="contain"
          className="absolute bottom-0 left-[-40px] z-0"
        />
        {/* Phone */}
        <Image
          src="/phone.png"
          alt="Phone"
          layout="fill"
          objectFit="contain"
          className="relative z-10"
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
