"use client";

export default function JoinPage() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-[32px] font-bold leading-tight mb-4">
            Be the first to know <br /> when we launch
          </h1>
          <p className="text-gray-700 text-[16px] leading-relaxed">
            Make a real impact on the music industry, <br />
            get rewarded for your time and attention <br />
            for listening to and reviewing new and unreleased music.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-[20px] font-semibold mb-6">Join our waitlist</h2>
          <form className="space-y-4">
            {/* Row 1: First Name, Last Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Last Name:</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
            </div>

            {/* Row 2: Email, Phone */}
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

            {/* Row 3: User Type Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">User Type</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2">
                <option value="">Select</option>
                <option value="creator">Creator</option>
                <option value="listener">Listener</option>
                <option value="artist">Artists</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded font-semibold hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
