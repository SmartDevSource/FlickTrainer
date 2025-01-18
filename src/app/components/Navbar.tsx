import Link from "next/link"

export default function Navbar() {
    return (
      <div className="w-full bg-gray-800 text-white py-4 shadow-md z-50 ">
            <div className="flex justify-between px-6">
                <div className="text-xl font-semibold">
                    <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
                        FlickTrainer
                    </Link>
                </div>
                <div className="flex space-x-6">
                    <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
                        Lien 1
                    </Link>
                    <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
                        Lien 2
                    </Link>
                    <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
                        Lien 3
                    </Link>
                </div>
            </div>
      </div>
    )
}  