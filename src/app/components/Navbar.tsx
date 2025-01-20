import Link from "next/link"

export const Navbar = () => {
    return (
      <div className="w-full bg-gray-800 text-white py-4 shadow-md z-50 ">
            <div className="flex justify-between px-6">
                <div className="text-xl font-semibold px-3">
                    <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
                        FlickTrainer
                    </Link>
                </div>
                <div className="flex space-x-6">
                    <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
                    ⚙️ Paramètres
                    </Link>
                    {/* <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
                        Lien
                    </Link> */}
                </div>
            </div>
      </div>
    )
}  