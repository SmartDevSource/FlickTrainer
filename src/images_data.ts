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
    /////// DUST 2 T SIDE ///////
    dust2_top_mid_to_mid: {
        path: `/gfx/maps/dust2/terrorist_circuit/top_mid_to_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_top_mid_to_mid_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/top_mid_to_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_top_mid_to_short: {
        path: `/gfx/maps/dust2/terrorist_circuit/top_mid_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_top_mid_to_short_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/top_mid_to_short_layer.png`,
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
    dust2_doors_to_ctmid: {
        path: `/gfx/maps/dust2/terrorist_circuit/doors_to_ctmid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_doors_to_ctmid_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/doors_to_ctmid_layer.png`,
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
    dust2_short_to_a_1: {
        path: `/gfx/maps/dust2/terrorist_circuit/short_to_a_1.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_short_to_a_1_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/short_to_a_1_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_short_to_a_2: {
        path: `/gfx/maps/dust2/terrorist_circuit/short_to_a_2.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_short_to_a_2_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/short_to_a_2_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_taxi_t_spawn: {
        path: `/gfx/maps/dust2/terrorist_circuit/taxi_t_spawn.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_taxi_t_spawn_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/taxi_t_spawn_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tspawn_to_long: {
        path: `/gfx/maps/dust2/terrorist_circuit/tspawn_to_long.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tspawn_to_long_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/tspawn_to_long_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_long_to_a: {
        path: `/gfx/maps/dust2/terrorist_circuit/long_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_long_to_a_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/long_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_car_to_ct: {
        path: `/gfx/maps/dust2/terrorist_circuit/car_to_ct.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_car_to_ct_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/car_to_ct_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tside_a_to_short: {
        path: `/gfx/maps/dust2/terrorist_circuit/tside_a_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tside_a_to_short_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/tside_a_to_short_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tunnel_to_lower: {
        path: `/gfx/maps/dust2/terrorist_circuit/tunnel_to_lower.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tunnel_to_lower_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/tunnel_to_lower_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_lower_to_short: {
        path: `/gfx/maps/dust2/terrorist_circuit/lower_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_lower_to_short_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/lower_to_short_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tunnel_to_b: {
        path: `/gfx/maps/dust2/terrorist_circuit/tunnel_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tunnel_to_b_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/tunnel_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_b_site_to_doors: {
        path: `/gfx/maps/dust2/terrorist_circuit/b_site_to_doors.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_b_site_to_doors_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/b_site_to_doors_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_window_to_ct: {
        path: `/gfx/maps/dust2/terrorist_circuit/window_to_ct.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_window_to_ct_layer: {
        path: `/gfx/maps/dust2/terrorist_circuit/window_to_ct_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// DUST 2 CT SIDE ///////
    dust2_ctspawn_to_long: {
        path: `/gfx/maps/dust2/ct_circuit/ctspawn_to_long.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_ctspawn_to_long_layer: {
        path: `/gfx/maps/dust2/ct_circuit/ctspawn_to_long_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_ctside_a_to_short: {
        path: `/gfx/maps/dust2/ct_circuit/ctside_a_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_ctside_a_to_short_layer: {
        path: `/gfx/maps/dust2/ct_circuit/ctside_a_to_short_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_ramp_a_to_long: {
        path: `/gfx/maps/dust2/ct_circuit/ramp_a_to_long.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_ramp_a_to_long_layer: {
        path: `/gfx/maps/dust2/ct_circuit/ramp_a_to_long_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_long_to_sas: {
        path: `/gfx/maps/dust2/ct_circuit/long_to_sas.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_long_to_sas_layer: {
        path: `/gfx/maps/dust2/ct_circuit/long_to_sas_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_sas_to_tspawn: {
        path: `/gfx/maps/dust2/ct_circuit/sas_to_tspawn.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_sas_to_tspawn_layer: {
        path: `/gfx/maps/dust2/ct_circuit/sas_to_tspawn_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tspawn_to_mid: {
        path: `/gfx/maps/dust2/ct_circuit/tspawn_to_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_tspawn_to_mid_layer: {
        path: `/gfx/maps/dust2/ct_circuit/tspawn_to_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_mid_to_top_mid: {
        path: `/gfx/maps/dust2/ct_circuit/mid_to_top_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_mid_to_top_mid_layer: {
        path: `/gfx/maps/dust2/ct_circuit/mid_to_top_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_top_mid_to_taxi: {
        path: `/gfx/maps/dust2/ct_circuit/top_mid_to_taxi.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_top_mid_to_taxi_layer: {
        path: `/gfx/maps/dust2/ct_circuit/top_mid_to_taxi_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_short_to_top_mid: {
        path: `/gfx/maps/dust2/ct_circuit/short_to_top_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_short_to_top_mid_layer: {
        path: `/gfx/maps/dust2/ct_circuit/short_to_top_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_lower_to_tunnel: {
        path: `/gfx/maps/dust2/ct_circuit/lower_to_tunnel.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_lower_to_tunnel_layer: {
        path: `/gfx/maps/dust2/ct_circuit/lower_to_tunnel_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_mid_to_b: {
        path: `/gfx/maps/dust2/ct_circuit/mid_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_mid_to_b_layer: {
        path: `/gfx/maps/dust2/ct_circuit/mid_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_double_doors_to_b: {
        path: `/gfx/maps/dust2/ct_circuit/double_doors_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_double_doors_to_b_layer: {
        path: `/gfx/maps/dust2/ct_circuit/double_doors_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_window_to_b: {
        path: `/gfx/maps/dust2/ct_circuit/window_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_window_to_b_layer: {
        path: `/gfx/maps/dust2/ct_circuit/window_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_b_to_tunnel: {
        path: `/gfx/maps/dust2/ct_circuit/b_to_tunnel.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    dust2_b_to_tunnel_layer: {
        path: `/gfx/maps/dust2/ct_circuit/b_to_tunnel_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// INFERNO T SIDE ///////
    inferno_tramp_to_mid: {
        path: `/gfx/maps/inferno/terrorist_circuit/tramp_to_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_tramp_to_mid_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/tramp_to_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_mid_to_second_mid: {
        path: `/gfx/maps/inferno/terrorist_circuit/mid_to_second_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_mid_to_second_mid_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/mid_to_second_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_top_mid_to_long: {
        path: `/gfx/maps/inferno/terrorist_circuit/top_mid_to_long.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_top_mid_to_long_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/top_mid_to_long_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_long_to_library: {
        path: `/gfx/maps/inferno/terrorist_circuit/long_to_library.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_long_to_library_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/long_to_library_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_long_to_a: {
        path: `/gfx/maps/inferno/terrorist_circuit/long_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_long_to_a_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/long_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_top_mid_to_short: {
        path: `/gfx/maps/inferno/terrorist_circuit/top_mid_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_top_mid_to_short_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/top_mid_to_short_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_short_to_pit: {
        path: `/gfx/maps/inferno/terrorist_circuit/short_to_pit.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_short_to_pit_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/short_to_pit_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_second_mid_bridge: {
        path: `/gfx/maps/inferno/terrorist_circuit/second_mid_bridge.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_second_mid_bridge_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/second_mid_bridge_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_app_to_boiler: {
        path: `/gfx/maps/inferno/terrorist_circuit/app_to_boiler.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_app_to_boiler_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/app_to_boiler_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_balcony_to_pit: {
        path: `/gfx/maps/inferno/terrorist_circuit/balcony_to_pit.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_balcony_to_pit_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/balcony_to_pit_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_pit_to_a: {
        path: `/gfx/maps/inferno/terrorist_circuit/pit_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_pit_to_a_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/pit_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_banana_to_car: {
        path: `/gfx/maps/inferno/terrorist_circuit/banana_to_car.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_banana_to_car_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/banana_to_car_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_top_banana_to_sandbag: {
        path: `/gfx/maps/inferno/terrorist_circuit/top_banana_to_sandbag.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_top_banana_to_sandbag_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/top_banana_to_sandbag_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_banana_to_b: {
        path: `/gfx/maps/inferno/terrorist_circuit/banana_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_banana_to_b_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/banana_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_dark_to_ct: {
        path: `/gfx/maps/inferno/terrorist_circuit/dark_to_ct.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_dark_to_ct_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/dark_to_ct_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_pool_to_triple: {
        path: `/gfx/maps/inferno/terrorist_circuit/pool_to_triple.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_pool_to_triple_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/pool_to_triple_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_triple_to_ct: {
        path: `/gfx/maps/inferno/terrorist_circuit/triple_to_ct.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_triple_to_ct_layer: {
        path: `/gfx/maps/inferno/terrorist_circuit/triple_to_ct_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// INFERNO CT SIDE ///////
    inferno_long_to_mid: {
        path: `/gfx/maps/inferno/ct_circuit/long_to_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_long_to_mid_layer: {
        path: `/gfx/maps/inferno/ct_circuit/long_to_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_mid_to_ramp: {
        path: `/gfx/maps/inferno/ct_circuit/mid_to_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_mid_to_ramp_layer: {
        path: `/gfx/maps/inferno/ct_circuit/mid_to_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_top_mid_to_second_mid: {
        path: `/gfx/maps/inferno/ct_circuit/top_mid_to_second_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_top_mid_to_second_mid_layer: {
        path: `/gfx/maps/inferno/ct_circuit/top_mid_to_second_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_low_mid_to_banana: {
        path: `/gfx/maps/inferno/ct_circuit/low_mid_to_banana.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_low_mid_to_banana_layer: {
        path: `/gfx/maps/inferno/ct_circuit/low_mid_to_banana_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_pit_to_short: {
        path: `/gfx/maps/inferno/ct_circuit/pit_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_pit_to_short_layer: {
        path: `/gfx/maps/inferno/ct_circuit/pit_to_short_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_short_to_mid: {
        path: `/gfx/maps/inferno/ct_circuit/short_to_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_short_to_mid_layer: {
        path: `/gfx/maps/inferno/ct_circuit/short_to_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_app_to_second_mid: {
        path: `/gfx/maps/inferno/ct_circuit/app_to_second_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_app_to_second_mid_layer: {
        path: `/gfx/maps/inferno/ct_circuit/app_to_second_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_antiboiler_to_second_mid: {
        path: `/gfx/maps/inferno/ct_circuit/antiboiler_to_second_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_antiboiler_to_second_mid_layer: {
        path: `/gfx/maps/inferno/ct_circuit/antiboiler_to_second_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_ctspawn_to_b: {
        path: `/gfx/maps/inferno/ct_circuit/ctspawn_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_ctspawn_to_b_layer: {
        path: `/gfx/maps/inferno/ct_circuit/ctspawn_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_car_to_banana: {
        path: `/gfx/maps/inferno/ct_circuit/car_to_banana.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    inferno_car_to_banana_layer: {
        path: `/gfx/maps/inferno/ct_circuit/car_to_banana_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// NUKE T SIDE ///////
    
    /////// NUKE CT SIDE ///////
    nuke_under_heaven_to_ramp: {
        path: `/gfx/maps/nuke/ct_circuit/under_heaven_to_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_under_heaven_to_ramp_layer: {
        path: `/gfx/maps/nuke/ct_circuit/under_heaven_to_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ramp_to_radio: {
        path: `/gfx/maps/nuke/ct_circuit/ramp_to_radio.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ramp_to_radio_layer: {
        path: `/gfx/maps/nuke/ct_circuit/ramp_to_radio_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_radio_to_trophee: {
        path: `/gfx/maps/nuke/ct_circuit/radio_to_trophee.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_radio_to_trophee_layer: {
        path: `/gfx/maps/nuke/ct_circuit/radio_to_trophee_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_radio_to_lobby: {
        path: `/gfx/maps/nuke/ct_circuit/radio_to_lobby.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_radio_to_lobby_layer: {
        path: `/gfx/maps/nuke/ct_circuit/radio_to_lobby_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_secret_to_b: {
        path: `/gfx/maps/nuke/ct_circuit/secret_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_secret_to_b_layer: {
        path: `/gfx/maps/nuke/ct_circuit/secret_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_single_door_to_b: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_single_door_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_single_door_to_b_layer: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_single_door_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_labo_to_b: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_labo_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_labo_to_b_layer: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_labo_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_doubledoors_to_ramp: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_doubledoors_to_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_doubledoors_to_ramp_layer: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_doubledoors_to_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_doubledoors_to_b: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_doubledoors_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_doubledoors_to_b_layer: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_doubledoors_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_ramp_to_b: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_ramp_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_ramp_to_b_layer: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_ramp_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    // nuke_garage_to_outside: {
    //     path: `/gfx/maps/nuke/ct_circuit/garage_to_outside.png`,
    //     img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    // },
    // nuke_garage_to_outside_layer: {
    //     path: `/gfx/maps/nuke/ct_circuit/garage_to_outside_layer.png`,
    //     img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    // },
    // nuke_secret_to_outside: {
    //     path: `/gfx/maps/nuke/ct_circuit/secret_to_outside.png`,
    //     img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    // },
    // nuke_secret_to_outside_layer: {
    //     path: `/gfx/maps/nuke/ct_circuit/secret_to_outside_layer.png`,
    //     img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    // },
    // nuke_redbox_to_outside: {
    //     path: `/gfx/maps/nuke/ct_circuit/redbox_to_outside.png`,
    //     img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    // },
    // nuke_redbox_to_outside_layer: {
    //     path: `/gfx/maps/nuke/ct_circuit/redbox_to_outside_layer.png`,
    //     img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    // },
    
}