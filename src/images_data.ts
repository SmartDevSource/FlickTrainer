import { ImageObject } from "./types";

export const images: {[key: string]: ImageObject} = {
    crosshair: {
        path: `/gfx/hud/crosshair.png`,
        img: new Image(),
    },
    terrorist_crouch: {
        path: `/gfx/characters/terrorist_crouch.png`,
        img: new Image(),
    },
    terrorist_crouch_darken: {
        path: `/gfx/characters/terrorist_crouch_darken.png`,
        img: new Image(),
    },
    terrorist_standup: {
        path: `/gfx/characters/terrorist_standup.png`,
        img: new Image(),
    },
    terrorist_standup_darken: {
        path: `/gfx/characters/terrorist_standup_darken.png`,
        img: new Image(),
    },
    ct_crouch: {
        path: `/gfx/characters/ct_crouch.png`,
        img: new Image(),
    },
    ct_crouch_darken: {
        path: `/gfx/characters/ct_crouch_darken.png`,
        img: new Image(),
    },
    ct_standup: {
        path: `/gfx/characters/ct_standup.png`,
        img: new Image(),
    },
    ct_standup_darken: {
        path: `/gfx/characters/ct_standup_darken.png`,
        img: new Image(),
    },
}