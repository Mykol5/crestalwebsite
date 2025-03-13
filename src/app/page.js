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
  <div className="absolute top-[37%] left-1/2 transform -translate-x-1/2 z-30">
    <Image
      src="/phonetwo.png"
      alt="Phone"
      width={350}
      height={820}
      className="object-contain"
    />
  </div>

  {/* Right Overlapping Image */}
  <div className="absolute z-40 top-[60%] left-1/2 transform translate-x-[220px] sm:translate-x-[50px] -translate-y-1/2">
    <Image
      src="/message.png"
      alt="Right Overlay"
      width={300}
      height={800}
      className="object-contain"
    />
  </div>

  {/* Left Overlapping Image */}
  <div className="absolute z-40 top-[70%] left-1/2 transform -translate-x-[160px] sm:-translate-x-[290px] -translate-y-1/2">
    <Image
      src="/messagetwo.png"
      alt="Left Overlay"
      width={300}
      height={500}
      className="object-contain"
    />
  </div>
</section>


<section className="bg-white py-16 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    {/* Section Header aligned to the left */}
    <h2 className="text-[18px] sm:text-[20] font-normal mb-8">
      🎤 Top Songs Right Now
    </h2>

    {/* Songs Row - Horizontal scroll on mobile */}
    <div className="flex gap-0 sm:gap-0 overflow-x-auto scrollbar-hide px-1 -mx-1">
      {/* Song 1 */}
      <div className="flex-shrink-0 w-[170px]">
        <img src="/songsmage.png" alt="Song 1" className="w-[150px] h-[150px] object-cover rounded-lg" />
        <h3 className="text-[16px] font-semibold mt-3">Midnight Love</h3>
        <p className="text-[12px] font-medium mt-1">Nova Lee</p>
      </div>

      {/* Song 2 */}
      <div className="flex-shrink-0 w-[170px]">
        <img src="/songsmage.png" alt="Song 2" className="w-[150px] h-[150px] object-cover rounded-lg" />
        <h3 className="text-[16px] font-semibold mt-3">Neon Drive</h3>
        <p className="text-[12px] font-medium mt-1">Jax Monroe</p>
      </div>

      {/* Song 3 */}
      <div className="flex-shrink-0 w-[170px]">
        <img src="/songsmage.png" alt="Song 3" className="w-[150px] h-[150px] object-cover rounded-lg" />
        <h3 className="text-[16px] font-semibold mt-3">Electric Storm</h3>
        <p className="text-[12px] font-medium mt-1">Sky Reed</p>
      </div>

      {/* Song 4 */}
      <div className="flex-shrink-0 w-[170px]">
        <img src="/songsmage.png" alt="Song 4" className="w-[150px] h-[150px] object-cover rounded-lg" />
        <h3 className="text-[16px] font-semibold mt-3">Golden Hour</h3>
        <p className="text-[12px] font-medium mt-1">Zoe Keys</p>
      </div>

      {/* Song 5 */}
      <div className="flex-shrink-0 w-[170px]">
        <img src="/songsmage.png" alt="Song 5" className="w-[150px] h-[150px] object-cover rounded-lg" />
        <h3 className="text-[16px] font-semibold mt-3">Starlight</h3>
        <p className="text-[12px] font-medium mt-1">Echo Waves</p>
      </div>

      {/* Song 6 */}
      <div className="flex-shrink-0 w-[170px]">
        <img src="/songsmage.png" alt="Song 6" className="w-[150px] h-[150px] object-cover rounded-lg" />
        <h3 className="text-[16px] font-semibold mt-3">On & On</h3>
        <p className="text-[12px] font-medium mt-1">Cleo Haze</p>
      </div>

      {/* Song 7 */}
      <div className="flex-shrink-0 w-[170px]">
        <img src="/songsmage.png" alt="Song 7" className="w-[150px] h-[150px] object-cover rounded-lg" />
        <h3 className="text-[16px] font-semibold mt-3">Rush</h3>
        <p className="text-[12px] font-medium mt-1">Trey Dune</p>
      </div>

      {/* Song 8 */}
      <div className="flex-shrink-0 w-[170px]">
        <img src="/songsmage.png" alt="Song 8" className="w-[150px] h-[150px] object-cover rounded-lg" />
        <h3 className="text-[16px] font-semibold mt-3">City Lights</h3>
        <p className="text-[12px] font-medium mt-1">Mila Stone</p>
      </div>
    </div>
  </div>
</section>


<section className="bg-white py-16 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto text-center">
    {/* Section Header */}
    <h2 className="text-[28px] sm:text-[35px] font-normal mb-10 sm:mb-12">
      🔥 Latest Albums
    </h2>

    {/* Albums Row - Horizontal scroll on mobile */}
    <div className="flex sm:justify-center gap-6 sm:gap-8 overflow-x-auto scrollbar-hide px-1 -mx-1">
      {/* Album 1 */}
      <div className="flex-shrink-0 text-left w-[180px] sm:w-auto">
        <img
          src="/songimage.png"
          alt="Album 1"
          className="w-[190px] h-[180px] object-cover rounded-lg mx-auto"
        />
        <h3 className="text-[18px] sm:text-[20px] font-semibold mt-4">Country Road</h3>
        <p className="text-[10px] font-medium mt-1">River Harper</p>
      </div>

      {/* Album 2 */}
      <div className="flex-shrink-0 text-left w-[180px] sm:w-auto">
        <img
          src="/songimage2.png"
          alt="Album 2"
          className="w-[190px] h-[180px] object-cover rounded-lg mx-auto"
        />
        <h3 className="text-[18px] sm:text-[20px] font-semibold mt-4">Up to Something</h3>
        <p className="text-[10px] font-medium mt-1">Chloe Candence</p>
      </div>

      {/* Album 3 */}
      <div className="flex-shrink-0 text-left w-[180px] sm:w-auto">
        <img
          src="/songimage.png"
          alt="Album 3"
          className="w-[190px] h-[180px] object-cover rounded-lg mx-auto"
        />
        <h3 className="text-[18px] sm:text-[20px] font-semibold mt-4">Lion Roar</h3>
        <p className="text-[10px] font-medium mt-1">John Lake</p>
      </div>
    </div>
  </div>
</section>





<section className="bg-white py-16 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto text-center">
    {/* Section Header */}
    <h2 className="text-[23px] sm:text-[30px] font-normal mb-10 sm:mb-12">
      Upcoming Artists
    </h2>

    {/* Artists Row - Horizontal scroll on mobile */}
    <div className="flex sm:justify-center gap-6 sm:gap-10 overflow-x-auto scrollbar-hide px-1 -mx-1">
      {/* Artist 1 */}
      <div className="flex-shrink-0 w-[100px] text-center">
        <img
          src="/artist.png"
          alt="Artist 1"
          className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
        />
        <p className="text-[12px] font-semibold mt-2">Alex Wave</p>
      </div>

      {/* Artist 2 */}
      <div className="flex-shrink-0 w-[100px] text-center">
        <img
          src="/artist.png"
          alt="Artist 2"
          className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
        />
        <p className="text-[12px] font-semibold mt-2">Sasha Beats</p>
      </div>

      {/* Artist 3 */}
      <div className="flex-shrink-0 w-[100px] text-center">
        <img
          src="/artist.png"
          alt="Artist 3"
          className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
        />
        <p className="text-[12px] font-semibold mt-2">Jayden Sky</p>
      </div>

      {/* Artist 4 */}
      <div className="flex-shrink-0 w-[100px] text-center">
        <img
          src="/artist.png"
          alt="Artist 4"
          className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
        />
        <p className="text-[12px] font-semibold mt-2">Nina Blaze</p>
      </div>

      {/* Artist 5 */}
      <div className="flex-shrink-0 w-[100px] text-center">
        <img
          src="/artist.png"
          alt="Artist 5"
          className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
        />
        <p className="text-[12px] font-semibold mt-2">Leo Quest</p>
      </div>

      {/* Artist 6 */}
      <div className="flex-shrink-0 w-[100px] text-center">
        <img
          src="/artist.png"
          alt="Artist 6"
          className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
        />
        <p className="text-[12px] font-semibold mt-2">Zara Vibe</p>
      </div>

      {/* Artist 7 */}
      <div className="flex-shrink-0 w-[100px] text-center">
        <img
          src="/artist.png"
          alt="Artist 7"
          className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
        />
        <p className="text-[12px] font-semibold mt-2">Eli Drip</p>
      </div>
    </div>
  </div>
</section>




<section className="bg-white py-20 px-4 sm:px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-0">
    
    {/* LEFT: Content Section */}
    <div className="md:w-[58%] pl-8 sm:pl-12 md:pl-16">


{/* Title */}
<h2 className="text-[40px] font-semibold text-left mb-2 flex items-center gap-3 flex-wrap">
  🎮
  The
  {/* Crestal inside an image */}
  <div className="relative">
    <img 
      src="/recimage.png" // replace with your actual image path
      alt="Crestal"
      className="h-12 w-auto"
    />
    <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-[40px]">
      Crestal
    </span>
  </div>

  Experience
</h2>


      {/* Subtext */}
      <p className="text-[12px] text-gray-600 text-center md:text-left mb-6">
        Music is more than streaming—it's an experience.
      </p>

      {/* Features List */}
      <div className="space-y-6">
        {/* Feature 1 */}
        <div className="flex items-start gap-4">
          <img src="/Frame.png" alt="Sound Clash" className="w-20 h-20 mt-1" />
          <div>
            <h4 className="text-[16px] font-semibold mb-1">Sound Clash</h4>
            <p className="text-sm leading-[150%] text-gray-700 max-w-xs">
              Vote in head-to-head music battles and help determine which tracks rise to the top.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4">
          <img src="/Frame1.png" alt="Fan Challenges" className="w-20 h-20 mt-1" />
          <div>
            <h4 className="text-[16px] font-semibold mb-1">Endorsement Wars</h4>
            <p className="text-sm leading-[150%] text-gray-700 max-w-xs">
              Back your favorite track & compete for top influencer spots in the community.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4">
          <img src="/Frame2.png" alt="Exclusive Drops" className="w-20 h-20 mt-1" />
          <div>
            <h4 className="text-[16px] font-semibold mb-1">Remix Challenges</h4>
            <p className="text-sm leading-[150%] text-gray-700 max-w-xs">
            Create your best version & climb the leaderboard with your unique take on tracks.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-start gap-4">
          <img src="/Frame3.png" alt="Live Hangouts" className="w-20 h-20 mt-1" />
          <div>
            <h4 className="text-[16px] font-semibold mb-1">Group Listens</h4>
            <p className="text-sm leading-[150%] text-gray-700 max-w-xs">
            Host a music session & let your friends queue tracks in real time for shared experiences.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT: Image Section */}
    <div className="md:w-[42%]"> 
      <img 
        src="/phones.png" 
        alt="Crestal Experience" 
        className="w-[470px] h-auto object-contain md:mr-[-20px]" 
      />
    </div>
  </div>
</section>



<section className="bg-white py-12 px-4 sm:px-8 text-center">
  {/* Top Icons */}
  <div className="flex justify-center items-center gap-8 mb-8">
    <img src="/googleplay.png" alt="Icon 1" className="w-24 h-8 object-contain" />
    <img src="/apple.png" alt="Icon 2" className="w-24 h-8 object-contain" />
  </div>

  {/* Profile Stack + Text */}
  <div className="flex justify-center items-center gap-3 mb-8">
    {/* Text */}
    {/* Profile Stack */}
    <div className="relative flex -space-x-2">
      <img src="/proimage.png" alt="Profile 1" className="w-8 h-8 rounded-full border-2 border-white" />
      <img src="/proimage.png" alt="Profile 2" className="w-8 h-8 rounded-full border-2 border-white" />
      <img src="/proimage.png" alt="Profile 3" className="w-8 h-8 rounded-full border-2 border-white" />
      <img src="/proimage.png" alt="Profile 4" className="w-8 h-8 rounded-full border-2 border-white" />
    </div>
    <div className="text-left">
      <p className="text-base font-semibold text-gray-800 leading-tight">
        517.69 million+ <br />
        <span className="text-gray-800">Crestal users worldwide</span>
      </p>
    </div>

  </div>

  {/* Bottom Image */}
  <div className="flex justify-center">
    <img 
      src="/qrcode.png" 
      alt="Global Presence" 
      className="w-[320px] h-auto object-contain mx-auto" 
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
