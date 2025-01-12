import { ImageObject } from "./types";

export const images: {[key: string]: ImageObject} = {
    crosshair: {
        path: `/gfx/hud/crosshair.png`,
        img: new Image(),
    },
    terrorist_crouch_left_to_right: {
        path: `/gfx/characters/terrorist/crouch_left_to_right.png`,
        img: new Image(),
    },
    ct_crouch_left_to_right: {
        path: `/gfx/characters/ct/crouch_left_to_right.png`,
        img: new Image(),
    },
}