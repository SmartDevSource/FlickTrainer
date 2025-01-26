import { GameSettings, Statistics } from "@/types"
import { useEffect, useState, useRef } from "react"

interface StatisticsModalParams {
    statistics: Statistics
    game_settings: GameSettings,
    onClose: () => void,
    onUpdateStatistics: () => void
}

interface RecordStruct {
    [key:string]: string
}

export const StatisticsModal: React.FC<StatisticsModalParams> = ({statistics, game_settings, onClose, onUpdateStatistics}) => {
    const [newRecords, setNewRecords] = useState<RecordStruct[] | null>(null)
    const comparedPerformances = useRef<boolean>(false)

    const comparePerformances = () => {
        const playerKd = statistics.kills / (statistics.deaths === 0 ? 1 : statistics.deaths)
        const new_records = []

        switch(game_settings.mode){
            case 'circuit':
                const circuitBestScore = localStorage.getItem(`${game_settings.map_name}_${game_settings.circuit}_${game_settings.difficulty}`)
                if (!circuitBestScore){

                }
            break
            case 'spot':
                const spotHeader = `${game_settings.map_name}_${game_settings.spot}_${game_settings.difficulty}`
                const lastSpotBestScores = localStorage.getItem(spotHeader)
                const spotCurrentStats = {
                    kills: statistics.kills,
                    deaths: statistics.deaths,
                    time_elapsed: statistics.time_elapsed,
                    kd: playerKd
                }
                if (!lastSpotBestScores){
                    localStorage.setItem(spotHeader, JSON.stringify(spotCurrentStats))
                    new_records.push({
                        header: `New KD record :`,
                        message: `${spotCurrentStats.kd.toFixed(2)} KD`
                    })
                    new_records.push({
                        header: `New TIME record :`,
                        message: `${spotCurrentStats.time_elapsed} seconds`
                    })
                } else if (lastSpotBestScores) {
                    const lastSpotBestScoresObject = JSON.parse(lastSpotBestScores)
                    if (spotCurrentStats.kd > lastSpotBestScoresObject.kd){
                        new_records.push({
                            header: `New KD record :`,
                            message: `${spotCurrentStats.kd.toFixed(2)} KD`
                        })
                        lastSpotBestScoresObject.kd = spotCurrentStats.kd
                    }
                    if (spotCurrentStats.time_elapsed < lastSpotBestScoresObject.time_elapsed){
                        new_records.push({
                            header: `New TIME record :`,
                            message: `${spotCurrentStats.time_elapsed} seconds`
                        })
                        lastSpotBestScoresObject.time_elapsed = spotCurrentStats.time_elapsed
                    }
                    localStorage.setItem(spotHeader, JSON.stringify(lastSpotBestScoresObject))
                }
            break
        }
        setNewRecords(new_records)
        comparedPerformances.current = true
        onUpdateStatistics()
    }

    useEffect(()=>{
        if (!comparedPerformances.current){
            comparePerformances()
        }
    }, [])

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 select-none"
        >
            <div className="relative p-4 w-full max-w-sm">
                <div className="relative bg-gray-700 rounded-lg shadow">
                    <div className="flex items-center flex-col justify-center p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-white">
                            Performances on {game_settings.map_name}
                        </h3>
                        <div className="pt-3">
                            {game_settings.mode === 'circuit' ?
                                <>
                                    <h4 className="text-md font-semibold text-white">
                                        CIRCUIT : {game_settings.circuit.split('_').join(' ').toUpperCase()}
                                    </h4>
                                </>
                                :
                                <>
                                    <h4 className="text-md font-semibold text-white">
                                        SPOT : {game_settings.spot.split('_').join(' ').toUpperCase()}
                                    </h4>
                                </>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col p-3 justify-center">
                            <div className="w-full flex flex-row justify-between text-white 
                                opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.25s_forwards]"
                            >
                                <p> Difficulty : </p>
                                <p> {game_settings.difficulty} </p>
                            </div>
                            <div className="w-full flex flex-row justify-between text-white 
                                opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.50s_forwards]"
                            >
                                <p> Targets shot : </p>
                                <p> {statistics.kills} </p>
                            </div>
                            <div className="w-full flex flex-row justify-between text-white 
                                opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.75s_forwards]"
                            >
                                <p> Deaths : </p>
                                <p> {statistics.deaths} </p>
                            </div>
                            <div className="w-full flex flex-row justify-between text-white 
                                opacity-0 animate-[fadeIn_0.5s_ease-in-out_1s_forwards]"
                            >
                                <p> KD : </p>
                                <p> {statistics.kd.toFixed(2)} </p>
                            </div>
                            <div className="w-full flex flex-row justify-between text-white 
                                opacity-0 animate-[fadeIn_0.5s_ease-in-out_1.25s_forwards]"
                            >
                                <p> Time : </p>
                                <p> {statistics.time_elapsed} seconds </p>
                            </div>
                            {newRecords && newRecords.length > 0 &&
                                <div className="flex flex-col pt-4 items-center opacity-0 animate-[fadeIn_0.5s_ease-in-out_1.50s_forwards]">
                                    <h3 className="text-lg text-white">
                                        NEW RECORD{newRecords.length > 1 ? 'S' : ''} :
                                    </h3>
                                    {newRecords.map((new_record, index) => (
                                        <div 
                                            key={`new_record_${index}`}
                                            className="w-full flex justify-between "
                                        >
                                            <span className="text-white">
                                                {new_record.header}
                                            </span>
                                            <span className="text-lime-500">
                                                {new_record.message}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-end p-4 md:p-5 border-t">
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm text-white focus:outline-none
                                    bg-red-500 rounded-lg hover:bg-red-400 min-w-24"
                            onClick={() => onClose()}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}