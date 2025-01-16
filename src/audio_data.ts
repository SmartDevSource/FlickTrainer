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
}