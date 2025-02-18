'use client'
import { GameSettingsModal } from '@/app/components/GameSettingsModal'
import { useState } from 'react'
import { GameSettings } from '@/types'

interface MapPeekSettings {
    onLaunchGame: (params: GameSettings) => void,
    onBack: () => void
}

const maps = [
    { logo: 'dust2_logo.jpg' },
    { logo: 'inferno_logo.jpg' },
    { logo: 'nuke_logo.jpg' },
    { logo: 'mirage_logo.jpg' },
    { logo: 'train_logo.jpg' },
    { logo: 'anubis_logo.jpg' },
    { logo: 'ancient_logo.jpg' },
    // { logo: 'vertigo_logo.jpg' },
]

export const MapPeek: React.FC<MapPeekSettings> = ({onLaunchGame, onBack}) => {
    const [selectedMap, setSelectedMap] = useState<string>('')

    return (
        <div className='flex flex-col items-center justify-center'>
            {selectedMap &&
                <GameSettingsModal
                    onClose={() => setSelectedMap('')}
                    onValid={(game_settings) => onLaunchGame(game_settings)}
                    selectedMap={selectedMap}
                />
            }
            <h1 className='text-center text-white text-4xl mb-3 mt-8'>
                Select your map
            </h1>
            <p className='text-center text-white text-md mb-10'>
                Taken from the current official map pool
            </p>
            <div className="flex justify-center items-center animate-fadeInPage">
                <div className="grid grid-cols-2 gap-8 bg-transparent">
                    {maps.map((current_map, index) => (
                        <button
                            key={`current_map_${index}`} 
                            className="bg-gray-300 rounded p-0.5
                                shadow-[0px_0px_10px_1px_rgba(255,255,255,1)]
                                hover:scale-110 transition duration-200
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
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 m-10
                font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500
                hover:text-white rounded duration-150"
                onClick={onBack}
            >
                Back to main menu
            </button>
        </div>
    )
}