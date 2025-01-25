import Image from "next/image"

interface HomeParams {
    onClick: () => void
}

export const Home: React.FC<HomeParams> = ({onClick}) => {
    return (
        <div className="relative bg-gray-900 overflow-hidden animate-fadeIn">
            <div className="absolute inset-0">
            <Image
                src="/web/images/cs2_bg.jpg"
                alt="Counter-Strike 2 Theme"
                layout="fill"
                objectFit="cover"
                priority
                className=""
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900 opacity-30"></div>
            </div>
  
            <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
                    FlickTrainer
                </h1>
    
                <p className="mt-4 text-lg text-gray-200 sm:text-xl lg:text-2xl max-w-3xl">
                    Maîtrisez l'art de la précision et améliorez vos réflexes. <br />
                    Perfectionnez vos compétences dans le monde compétitif de Counter-Strike 2.
                </p>
    
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <button className="inline-flex items-center px-6 py-3 text-lg font-medium
                                    text-white bg-orange-500 rounded-md shadow-md 
                                    hover:shadow-[0px_0px_25px_3px_rgba(255,255,255,0.8)] 
                                    transition-shadow duration-300 ease-in-out cursor-pointer"
                            onClick={() => onClick()}
                    >
                        Commencer l'entraînement
                    </button>
                </div>
            </div>
      </div>
    )
}