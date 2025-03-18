"use client";
import Image from "next/image";
import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="w-full">
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          {/* Left Section Wrapper */}
          <div className="md:w-1/2 flex flex-col justify-start h-full">

            {/* Add margin here to move up/down */}
            <div className="mt-10"> {/* Change mt-10 to mt-4 or mt-20 as needed */}
              {/* <h1 className="text-[40px] font-bold leading-tight mb-4">
                Be the first to know <br /> when we launch
              </h1> */}

              <h1 className="text-[40px] font-bold leading-tight mb-4">
                Be the first to know <br />
                when{' '}
                <span
                  className="inline-block bg-cover bg-center px-2"
                  style={{
                    backgroundImage: "url('/wordcrest.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: "white",
                  }}
                >
                  we launch
                </span>
              </h1>


              <p className="text-gray-700 text-[15px] leading-relaxed">
                Make a real impact on the music industry, <br />
                get rewarded for your time and attention <br />
                for listening to and reviewing new and unreleased music.
              </p>
            </div>

          </div>


          {/* Right Section (Form) */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-[20px] font-semibold mb-6">Join our waitlist</h2>
            <form className="space-y-4">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
              </div>

              {/* Row 3 - User Type */}
              <div className="md:w-1/2">
                <label className="block text-sm font-medium mb-1">User Type</label>
                <select className="w-full border border-gray-300 rounded px-4 py-2">
                  <option value="">Select</option>
                  <option value="creator">Creator</option>
                  <option value="listener">Listener</option>
                  <option value="artist">Artist</option>
                </select>
              </div>

                {/* Checkbox Group */}
                <div className="mt-6">
                  <p className="text-[14px] font-bold mb-4">What’s most important to you?</p>
                  <div className="space-y-4">
                    {[
                      "I want to know what listeners genuinely think of my music",
                      "I want to reach new listeners",
                      "I want to expand my fan base",
                      "I want to reach new territories",
                      "I want to know what listeners think of my new song before releasing",
                    ].map((text, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm">{text}</span>
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-[#FFD051] focus:ring-[#FFD051]"
                        />
                      </div>
                    ))}
                  </div>
                </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="w-1/2 bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Final Section */}
      <section className="relative z-10 bg-black text-white w-full py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-normal leading-tight max-w-xl mx-auto lg:mx-0">
            Join the revolution and start making a real impact on the music industry today!
            </h2>
            <Link
              href="#"
              className="inline-block mt-6 bg-white text-black text-lg font-bold px-6 py-3 rounded-md"
            >
              Join the Waitlist
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
