import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Left Section */}
        <div className="max-w-sm">
          <Image
            src="/crestallogo.png"
            alt="Crestal Logo"
            width={140}
            height={40}
          />
          <p className="text-sm mt-4">
            The ultimate destination for music lovers and the industry insiders
          </p>

          <div className="mt-8">
            <p className="text-sm font-medium">Available on:</p>
            <div className="flex items-center gap-4 mt-2">
              <Image src="/googleplay.png" alt="Google Play" width={100} height={30} />
              <Image src="/apple.png" alt="App Store" width={100} height={30} />
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-10">&copy; 2025 All Rights Reserved.</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-x-6 md:gap-x-25 ml-0">
          {/* Slight margin-left (ml-6) to separate from Crestal section */}

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-[#278C7E]">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Listeners</Link></li>
              <li><Link href="#">Artists</Link></li>
              <li><Link href="#">Label</Link></li>
              <li><Link href="#">Partners</Link></li>
              <li><Link href="#">Leaderboard</Link></li>
              <li><Link href="#">Charts</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-[#278C7E]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Brand</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">How it works</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Support</Link></li>
            </ul>
          </div>

          {/* Privacy */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h4 className="font-semibold mb-3 text-[#278C7E]">Privacy</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms of Use</Link></li>
                <li><Link href="#">Site Map</Link></li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-0 mt-6">
              <Image src="/Facebook.png" alt="Facebook" width={50} height={50} />
              <Image src="/Instagram.png" alt="Instagram" width={50} height={50} />
              <Image src="/Twitter.png" alt="Twitter" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
