import { AudioObject } from "./types";

export const audios: {[key: string]: AudioObject} = {
    deagleshot: {
        path: `/audio/deagleshot.mp3`,
        volume: .7,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement),
    },
    headshot: {
        path: `/audio/headshot.mp3`,
        volume: 1,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement),
    },
    player_death: {
        path: `/audio/player_death.mp3`,
        volume: .3,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
    timer: {
        path: `/audio/timer.mp3`,
        volume: .6,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
    beep: {
        path: `/audio/beep.mp3`,
        volume: .6,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
}