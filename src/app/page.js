import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-black">
{/* Hero Section */}
<section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
  {/* Background Images */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    {/* Shadow */}
    <Image
      src="/shadow.png"
      alt="Shadow"
      width={310}
      height={310}
      className="absolute object-contain"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />

    {/* Logo Back */}
    <Image
      src="/logoback.png"
      alt="Logo Back"
      width={600}
      height={600}
      className="absolute object-contain"
      style={{
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  </div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
      The Future of Music Discovery
    </h1>
    <p className="text-base sm:text-lg text-gray-700 max-w-xl">
      Music Beyond Algorithms. Powered by People.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 flex items-center gap-2 font-medium text-sm sm:text-base"
      >
        Listener & Creators
        <Image src="/arrowwhite.png" alt="Arrow" width={18} height={18} />
      </Link>

      <Link
        href="/artists"
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
<section className="relative w-full h-[600px] sm:h-[700px] overflow-hidden">
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

  {/* Text Block - Adjusted for better spacing */}
  <div className="absolute top-[40px] sm:top-[50px] left-1/2 transform -translate-x-1/2 z-30 text-center px-4 max-w-2xl w-full">
    <div className="relative mb-2 sm:mb-4">
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

    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-1 sm:mb-2 leading-tight">
      🎧 For Listeners & Creators
    </h3>

    <p className="text-sm sm:text-base text-white leading-snug max-w-xs sm:max-w-full mx-auto">
      Get access to exclusive new and unreleased music,  
      earn money for each review you write. Share your honest  
      opinions and help shape the future of the music industry.
    </p>
  </div>

  {/* Phone Image - Closer to text on all screens */}
  <div className="absolute left-1/2 transform -translate-x-1/2 z-30 
                  bottom-0 w-full max-w-[90vw] mx-auto">
    <Image
      src="/phoneimagenewest.png"
      alt="Phone"
      width={600} 
      height={1000}
      className="object-contain mx-auto h-[300px] sm:h-[450px] w-auto"
    />
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



<section className="bg-white py-0 px-0 sm:px-8 text-center relative">
  {/* Top Icons */}
  <div className="flex justify-center items-center gap-8 mb-6">
    <img src="/googleplay.png" alt="Icon 1" className="w-24 h-8 object-contain" />
    <img src="/apple.png" alt="Icon 2" className="w-24 h-8 object-contain" />
  </div>

  {/* Profile Stack + Text */}
  <div className="flex justify-center items-center gap-3 mb-6">
    {/* Profile Stack */}
    <div className="relative flex -space-x-2">
      <img src="/proimage.png" alt="Profile 1" className="w-8 h-8 rounded-full border-2 border-white" />
      <img src="/proimage.png" alt="Profile 2" className="w-8 h-8 rounded-full border-2 border-white" />
      <img src="/proimage.png" alt="Profile 3" className="w-8 h-8 rounded-full border-2 border-white" />
      <img src="/proimage.png" alt="Profile 4" className="w-8 h-8 rounded-full border-2 border-white" />
    </div>
    <div className="text-left">
      <p style={{ fontSize: "13px", fontWeight: 600, lineHeight: "1.4", color: "#1f2937" }}>
        A growing userbase <br />
        <span style={{ fontSize: "11px", color: "#1f2937" }}>Crestal</span>
      </p>
    </div>
  </div>

  {/* Bottom Image (QR Code) */}
  <div className="relative w-full h-[180px] flex items-center justify-center">
    <img 
      src="/qrcode.png" 
      alt="Global Presence" 
      className="w-[300px] h-auto object-contain"
      style={{
        position: 'relative',
        left: '35px',
        top: '90px',
      }}
    />
  </div>
</section>




<section className="relative bg-white min-h-screen px-4 sm:px-8 py-8">
  {/* Inner Black Container */}
  <div className="absolute bottom-0 left-4 right-4 h-[80%] bg-black border-t-4 border-orange-500 rounded-t-2xl p-6 text-white overflow-hidden">
    
    {/* Header Row */}
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-[28px] font-semibold">Challenges</h2>
        <p className="text-[12px] text-gray-300 mt-1">
          Complete challenges to boost your Crestal Score and earn exclusive rewards.
        </p>
      </div>
      <button className="text-[12px] text-orange-500 font-medium">View more</button>
    </div>

    {/* Challenge Cards Container */}
    <div className="flex gap-4 overflow-x-auto scrollbar-hide sm:overflow-visible sm:flex-nowrap">
      {[
        {
          title: "Music Prediction Challenge",
          image: "/cardimage.png",
          type: "Remix",
          participants: "123 participants",
          tags: ["Creator", "DJ", "Easy"],
          description: 'Create your own version of "Neon Dreams" by Electra Pulse',
          reward: "Points Based Cash",
        },
        {
          title: "Endorsement Streak",
          image: "/cardimage23.png",
          type: "Production",
          participants: "98 participants",
          tags: ["Producer", "Instrumental", "Hard"],
          description: 'Create a 60-second instrumental using only synth sounds.',
          reward: "Exclusive Gear",
        },
        {
          title: "Remix Challenge",
          image: "/cardimage.png",
          type: "Rap",
          participants: "205 participants",
          tags: ["Hip-Hop", "Freestyle", "Medium"],
          description: 'Drop your best freestyle over a provided beat.',
          reward: "Cash Prize",
        },
      ].map((challenge, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-lg overflow-hidden min-w-[85%] sm:min-w-0 sm:w-1/3 flex-shrink-0"
        >
          {/* Image */}
          <div className="h-36 w-full">
            <img
              src={challenge.image}
              alt="Challenge"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Info Section */}
          <div className="bg-[#222] text-white p-3 h-[240px] flex flex-col justify-between shadow-md">
            <div>
              {/* Type and Participants */}
              <div className="flex justify-between text-[10px] text-white mb-2">
                <span className="bg-black px-2 py-[2px] rounded">{challenge.type}</span>
                <span className="bg-black px-2 py-[2px] rounded">{challenge.participants}</span>
              </div>

              {/* Title */}
              <h3 className="text-[12px] font-semibold mb-2">{challenge.title}</h3>

              {/* Tags */}
              <div className="flex gap-2 mb-2">
                {challenge.tags.map((tag, idx) => (
                  <span key={idx} className="bg-orange-500 text-black text-[10px] px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[10px] text-gray-300 mt-2">{challenge.description}</p>
            </div>

            {/* Bottom Row: Join + Reward */}
            <div className="flex items-center justify-between mt-4">
              <button className="flex items-center gap-1 bg-[#333] text-white text-[12px] px-4 py-1">
                Join <span className="text-white">➔</span>
              </button>
              <span className="text-[10px] text-orange-500 font-semibold">
                Reward: {challenge.reward}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
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
