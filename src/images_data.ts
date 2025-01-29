import { ImageObject } from "./types"

export const images: {[key: string]: ImageObject} = {
    // SPRITES //
    deagle: {
        path: `/gfx/hud/deagle.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    shotflame: {
        path: `/gfx/hud/shotflame.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    terrorist_crouch: {
        path: `/gfx/characters/terrorist_crouch.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    terrorist_crouch_darken: {
        path: `/gfx/characters/terrorist_crouch_darken.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    terrorist_standup: {
        path: `/gfx/characters/terrorist_standup.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    terrorist_standup_darken: {
        path: `/gfx/characters/terrorist_standup_darken.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ct_crouch: {
        path: `/gfx/characters/ct_crouch.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ct_crouch_darken: {
        path: `/gfx/characters/ct_crouch_darken.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ct_standup: {
        path: `/gfx/characters/ct_standup.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ct_standup_darken: {
        path: `/gfx/characters/ct_standup_darken.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ////////////////////// MAPS ///////////////////////
    // VERTIGO //
    // CT SIDE //
    vertigo_ctspawn_to_mid: {
        path: `/gfx/maps/vertigo/ct_circuit/ctspawn_to_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_ctspawn_to_mid_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/ctspawn_to_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_ctspawn_to_short: {
        path: `/gfx/maps/vertigo/ct_circuit/ctspawn_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_ctspawn_to_short_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/ctspawn_to_short_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_ctspawn_to_b: {
        path: `/gfx/maps/vertigo/ct_circuit/ctspawn_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_ctspawn_to_b_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/ctspawn_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_connector_to_mid: {
        path: `/gfx/maps/vertigo/ct_circuit/connector_to_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_connector_to_mid_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/connector_to_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_b_to_stairs_1: {
        path: `/gfx/maps/vertigo/ct_circuit/b_to_stairs_1.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_b_to_stairs_1_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/b_to_stairs_1_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_b_to_stairs_2: {
        path: `/gfx/maps/vertigo/ct_circuit/b_to_stairs_2.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_b_to_stairs_2_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/b_to_stairs_2_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_under_b_stairs_to_tspawn: {
        path: `/gfx/maps/vertigo/ct_circuit/under_b_stairs_to_tspawn.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_under_b_stairs_to_tspawn_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/under_b_stairs_to_tspawn_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_ctmid_to_tmid: {
        path: `/gfx/maps/vertigo/ct_circuit/ctmid_to_tmid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_ctmid_to_tmid_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/ctmid_to_tmid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_mid_to_ladder: {
        path: `/gfx/maps/vertigo/ct_circuit/mid_to_ladder.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_mid_to_ladder_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/mid_to_ladder_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_under_ladder_to_ramp: {
        path: `/gfx/maps/vertigo/ct_circuit/under_ladder_to_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_under_ladder_to_ramp_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/under_ladder_to_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_heaven_to_b_1: {
        path: `/gfx/maps/vertigo/ct_circuit/heaven_to_b_1.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_heaven_to_b_1_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/heaven_to_b_1_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_heaven_to_b_2: {
        path: `/gfx/maps/vertigo/ct_circuit/heaven_to_b_2.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_heaven_to_b_2_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/heaven_to_b_2_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_kenny_to_short: {
        path: `/gfx/maps/vertigo/ct_circuit/kenny_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_kenny_to_short_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/kenny_to_short_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_a_site_to_ramp: {
        path: `/gfx/maps/vertigo/ct_circuit/a_site_to_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_a_site_to_ramp_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/a_site_to_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_a_to_ramp: {
        path: `/gfx/maps/vertigo/ct_circuit/a_to_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_a_to_ramp_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/a_to_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_under_to_a_ramp: {
        path: `/gfx/maps/vertigo/ct_circuit/under_to_a_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_under_to_a_ramp_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/under_to_a_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_ctspawn_short_to_a: {
        path: `/gfx/maps/vertigo/ct_circuit/ctspawn_short_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_ctspawn_short_to_a_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/ctspawn_short_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_sandbag_to_a_ramp: {
        path: `/gfx/maps/vertigo/ct_circuit/sandbag_to_a_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    vertigo_sandbag_to_a_ramp_layer: {
        path: `/gfx/maps/vertigo/ct_circuit/sandbag_to_a_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    // DUST 2 //
    // CT SIDE //
    // TERRORIST SIDE //
    dust2_tspawn_to_mid: {
        path: `/gfx/maps/dust2/terrorist_circuit/tspawn_to_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tspawn_to_mid_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/tspawn_to_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tmid_to_ctmid: {
        path: `/gfx/maps/dust2/terrorist_circuit/tmid_to_ctmid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tmid_to_ctmid_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/tmid_to_ctmid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_short_to_lower: {
        path: `/gfx/maps/dust2/terrorist_circuit/short_to_lower.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_short_to_lower_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/short_to_lower_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
}