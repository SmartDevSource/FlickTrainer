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
    galil: {
        path: `/audio/galil.mp3`,
        volume: .6,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
    mac10: {
        path: `/audio/mac10.mp3`,
        volume: .6,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
    mp9: {
        path: `/audio/mp9.mp3`,
        volume: .6,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
    mp7: {
        path: `/audio/mp7.mp3`,
        volume: .6,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
    ak47: {
        path: `/audio/ak47.mp3`,
        volume: .6,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
    m4a1s: {
        path: `/audio/m4a1s.mp3`,
        volume: .6,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
    m4a4: {
        path: `/audio/m4a4.mp3`,
        volume: .6,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
    famas: {
        path: `/audio/famas.mp3`,
        volume: .6,
        audio: typeof window !== 'undefined' ? new Audio() : ({} as HTMLAudioElement)
    },
}