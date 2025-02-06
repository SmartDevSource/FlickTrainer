import { SpotStruct, CircuitTeams } from "../types"

import { vertigo } from "@/maps_data/vertigo"
import { dust2 } from "@/maps_data/dust2"
import { inferno } from "@/maps_data/inferno"
import { nuke } from "@/maps_data/nuke"
import { mirage } from "@/maps_data/mirage"

type MapsData = {
    [mapName: string]: { 
        [spotName: string]: SpotStruct
    }
}

export const getMapCircuits = (map_name: string) => {
    const circuit_data: CircuitTeams = {
        ct_circuit: [],
        terrorist_circuit: []
    }

    for (const key in mapsData[map_name]){
        const circuit_type = mapsData[map_name][key].circuit
        if (circuit_type === 'ct_circuit' || circuit_type === 'terrorist_circuit')
            circuit_data[circuit_type].push({...mapsData[map_name][key], name: key, circuit: circuit_type})
    }
    return circuit_data
}

export const mapsData: MapsData = {
    vertigo,
    dust2,
    inferno,
    nuke,
    mirage
}