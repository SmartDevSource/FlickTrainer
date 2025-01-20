import { AudioObject } from "./types";

export const audios: {[key: string]: AudioObject} = {
    deagleshot: {
        path: `/audio/deagleshot.mp3`,
        volume: .7,
        audio: new Audio(),
    },
    headshot: {
        path: `/audio/headshot.mp3`,
        volume: 1,
        audio: new Audio(),
    },
    player_death: {
        path: `/audio/player_death.mp3`,
        volume: .3,
        audio: new Audio()
    },
    timer: {
        path: `/audio/timer.mp3`,
        volume: .6,
        audio: new Audio()
    },
}