import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow py-4 px-6 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Image
          src="/crestallogo.png" // update this if your logo filename is different
          alt="Logo"
          width={120}
          height={40}
        />
      </div>

      {/* Navigation on the right */}
      <nav className="flex items-center gap-10">
        <Link
          href="#"
          className="text-black text-sm font-medium hover:underline underline-offset-4"
        >
          Listeners & Creators
        </Link>
        <Link
          href="#"
          className="text-black text-sm font-medium hover:underline underline-offset-4"
        >
          Artists
        </Link>
        <button className="bg-black text-white rounded-full px-10 py-2 text-sm font-semibold hover:opacity-90 transition">
          Join beta
        </button>
      </nav>
    </header>
  );
}
