import Navbar from '@/app/components/Navbar'

const maps = [
    { logo: 'dust2_logo.jpg' },
    { logo: 'inferno_logo.jpg' },
    { logo: 'nuke_logo.jpg' },
    { logo: 'mirage_logo.jpg' },
    { logo: 'train_logo.jpg' },
    { logo: 'anubis_logo.jpg' },
    { logo: 'vertigo_logo.jpg' },
]

export default function Settings() {
    return (
        <>
            <Navbar/>
            <h1 className='text-center text-white text-4xl m-8'>
                Sélectionnez votre map
            </h1>
            <div className="flex justify-center items-center animate-fadeIn">
                <div className="grid grid-cols-2 gap-8 bg-transparent">
                    {maps.map((current_map, index) => (
                        <div
                            key={`current_map_${index}`} 
                            className="bg-gray-300 rounded p-0.5
                                shadow-[0px_0px_10px_1px_rgba(255,255,255,1)]
                                hover:scale-125 transition duration-200
                                cursor-pointer"
                            >
                            <img
                                src={`/web/images/${current_map.logo}`}
                                className="max-h-[100px] object-contain"
                                alt={`${current_map.logo}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}