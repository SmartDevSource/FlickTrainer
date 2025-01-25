interface NavbarSettings {
    onLinkClick: (call: string) => void
}

export const Navbar: React.FC<NavbarSettings> = ({onLinkClick}) => {
    return (
      <div className="w-full bg-gray-800 text-white py-4 shadow-md z-50 ">
            <div className="flex justify-between px-6">
                <div className="text-xl font-semibold px-3">
                    <button 
                        className="hover:text-gray-400 transition-colors duration-300"
                        onClick={() => onLinkClick('back_to_home')}
                    >
                        FlickTrainer
                    </button>
                </div>
                <div className="flex space-x-6">
                    <button
                        className="hover:text-gray-400 transition-colors duration-300"
                        onClick={() => onLinkClick('user_settings')}
                    >
                    ⚙️ Paramètres
                    </button>
                </div>
            </div>
      </div>
    )
}