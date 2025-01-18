'use client'
import { Navbar } from '@/app/components/Navbar'
import { SettingsModal } from '@/app/components/SettingsModal'
import { useEffect, useState } from 'react'

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
    const [selectedMap, setSelectedMap] = useState<string>('')

    return (
        <>
            <Navbar/>
            {selectedMap &&
                <SettingsModal 
                    onClose={() => setSelectedMap('')}
                    selectedMap={selectedMap}
                />
            }
            <h1 className='text-center text-white text-4xl mb-3 mt-8'>
                Sélectionnez votre map
            </h1>
            <p className='text-center text-white text-md mb-10'>
                Tirées du map pool officiel actuel
            </p>
            <div className="flex justify-center items-center animate-fadeIn">
                <div className="grid grid-cols-2 gap-8 bg-transparent">
                    {maps.map((current_map, index) => (
                        <button
                            key={`current_map_${index}`} 
                            className="bg-gray-300 rounded p-0.5
                                shadow-[0px_0px_10px_1px_rgba(255,255,255,1)]
                                hover:scale-125 transition duration-200
                                cursor-pointer"
                            onClick={()=>setSelectedMap(current_map.logo.split('_')[0])}
                            >
                            <img
                                src={`/web/images/map_logos/${current_map.logo}`}
                                className="max-h-[100px] object-contain"
                                alt={`${current_map.logo}`}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}