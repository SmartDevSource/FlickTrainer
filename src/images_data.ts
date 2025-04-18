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
    nuke_outside_to_garage: {
        path: `/gfx/maps/nuke/terrorist_circuit/outside_to_garage.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_outside_to_garage_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/outside_to_garage_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_outside_to_heaven: {
        path: `/gfx/maps/nuke/terrorist_circuit/outside_to_heaven.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_outside_to_heaven_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/outside_to_heaven_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_secret_to_b: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_secret_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_secret_to_b_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_secret_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_single_door_to_b: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_single_door_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_single_door_to_b_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_single_door_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_secret_to_doubledoors: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_secret_to_doubledoors.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_secret_to_doubledoors_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_secret_to_doubledoors_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_labo_to_b: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_labo_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_labo_to_b_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_labo_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_doubledoors_to_ramp: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_doubledoors_to_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_doubledoors_to_ramp_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_doubledoors_to_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_doubledoors_to_b: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_doubledoors_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_doubledoors_to_b_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_doubledoors_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_ramp_to_b: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_ramp_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_ramp_to_b_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_ramp_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_lobby: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_lobby.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_lobby_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_lobby_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_single_door_to_main: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_single_door_to_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_single_door_to_main_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_single_door_to_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_hut_to_a: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_hut_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_hut_to_a_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_hut_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_a_to_main: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_a_to_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_a_to_main_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_a_to_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_radio_to_ramp: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_radio_to_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_radio_to_ramp_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_radio_to_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_radio_to_under_heaven: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_radio_to_under_heaven.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_tside_radio_to_under_heaven_layer: {
        path: `/gfx/maps/nuke/terrorist_circuit/tside_radio_to_under_heaven_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
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
    nuke_ctside_secret_to_b: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_secret_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_secret_to_b_layer: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_secret_to_b_layer.png`,
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
    nuke_ctside_secret_to_doubledoors: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_secret_to_doubledoors.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_secret_to_doubledoors_layer: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_secret_to_doubledoors_layer.png`,
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
    nuke_heaven_to_a: {
        path: `/gfx/maps/nuke/ct_circuit/heaven_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_heaven_to_a_layer: {
        path: `/gfx/maps/nuke/ct_circuit/heaven_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_a_to_single_door: {
        path: `/gfx/maps/nuke/ct_circuit/a_to_single_door.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_a_to_single_door_layer: {
        path: `/gfx/maps/nuke/ct_circuit/a_to_single_door_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_main_to_a: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_main_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_ctside_main_to_a_layer: {
        path: `/gfx/maps/nuke/ct_circuit/ctside_main_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_single_door_to_lobby: {
        path: `/gfx/maps/nuke/ct_circuit/single_door_to_lobby.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_single_door_to_lobby_layer: {
        path: `/gfx/maps/nuke/ct_circuit/single_door_to_lobby_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_garage_to_outside: {
        path: `/gfx/maps/nuke/ct_circuit/garage_to_outside.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_garage_to_outside_layer: {
        path: `/gfx/maps/nuke/ct_circuit/garage_to_outside_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_secret_to_outside: {
        path: `/gfx/maps/nuke/ct_circuit/secret_to_outside.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_secret_to_outside_layer: {
        path: `/gfx/maps/nuke/ct_circuit/secret_to_outside_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_redbox_to_outside: {
        path: `/gfx/maps/nuke/ct_circuit/redbox_to_outside.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    nuke_redbox_to_outside_layer: {
        path: `/gfx/maps/nuke/ct_circuit/redbox_to_outside_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// MIRAGE CT SIDE ///////
    mirage_ctside_ct_to_a: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_ct_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_ct_to_a_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_ct_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_jungle_to_a: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_jungle_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_jungle_to_a_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_jungle_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_close_stairs_to_a: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_close_stairs_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_close_stairs_to_a_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_close_stairs_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_stairs_to_ramp: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_stairs_to_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_stairs_to_ramp_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_stairs_to_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_ninja_to_ramp: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_ninja_to_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_ninja_to_ramp_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_ninja_to_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_ramp_to_tspawn: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_ramp_to_tspawn.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_ramp_to_tspawn_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_ramp_to_tspawn_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_palace: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_palace.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_palace_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_palace_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_connector_to_short: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_connector_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_connector_to_short_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_connector_to_short_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_window_to_mid: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_window_to_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_window_to_mid_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_window_to_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_top_mid_to_tvroom: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_top_mid_to_tvroom.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_top_mid_to_tvroom_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_top_mid_to_tvroom_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_kitchen: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_kitchen.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_kitchen_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_kitchen_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_kitchen_to_b: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_kitchen_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_kitchen_to_b_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_kitchen_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_kitchen_to_truck: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_kitchen_to_truck.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_kitchen_to_truck_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_kitchen_to_truck_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_bench_to_b: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_bench_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_bench_to_b_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_bench_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_short_to_a: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_short_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_short_to_a_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_short_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_truck_to_app: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_truck_to_app.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_truck_to_app_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_truck_to_app_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_b_app: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_b_app.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_ctside_b_app_layer: {
        path: `/gfx/maps/mirage/ct_circuit/ctside_b_app_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// MIRAGE T SIDE ///////
    mirage_tside_ramp_to_a: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_ramp_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_ramp_to_a_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_ramp_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_tetris_to_a: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_tetris_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_tetris_to_a_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_tetris_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_palace_to_stairs: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_palace_to_stairs.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_palace_to_stairs_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_palace_to_stairs_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_under_palace: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_under_palace.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_under_palace_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_under_palace_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_a_to_stairs: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_a_to_stairs.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_a_to_stairs_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_a_to_stairs_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_top_mid_to_connector: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_top_mid_to_connector.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_top_mid_to_connector_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_top_mid_to_connector_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_top_mid_to_short: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_top_mid_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_top_mid_to_short_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_top_mid_to_short_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_short_to_a: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_short_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_short_to_a_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_short_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_connector_to_a: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_connector_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_connector_to_a_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_connector_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_short_to_b: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_short_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_short_to_b_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_short_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_b_to_kitchen: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_b_to_kitchen.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_b_to_kitchen_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_b_to_kitchen_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_app_to_under: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_app_to_under.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_app_to_under_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_app_to_under_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_app_to_short: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_app_to_short.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_app_to_short_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_app_to_short_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_app_to_b: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_app_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mirage_tside_app_to_b_layer: {
        path: `/gfx/maps/mirage/terrorist_circuit/tside_app_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// TRAIN CT SIDE ///////
    train_ctside_ctspawn_to_electric: {
        path: `/gfx/maps/train/ct_circuit/ctside_ctspawn_to_electric.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_ctspawn_to_electric_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_ctspawn_to_electric_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_ctspawn_to_main: {
        path: `/gfx/maps/train/ct_circuit/ctside_ctspawn_to_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_ctspawn_to_main_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_ctspawn_to_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_to_ivy: {
        path: `/gfx/maps/train/ct_circuit/ctside_to_ivy.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_to_ivy_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_to_ivy_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_connector_to_electric: {
        path: `/gfx/maps/train/ct_circuit/ctside_connector_to_electric.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_connector_to_electric_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_connector_to_electric_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_popdog_to_a_main: {
        path: `/gfx/maps/train/ct_circuit/ctside_popdog_to_a_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_popdog_to_a_main_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_popdog_to_a_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_a_main_to_popdog: {
        path: `/gfx/maps/train/ct_circuit/ctside_a_main_to_popdog.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_a_main_to_popdog_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_a_main_to_popdog_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_popdog: {
        path: `/gfx/maps/train/ct_circuit/ctside_popdog.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_popdog_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_popdog_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_connector_to_b: {
        path: `/gfx/maps/train/ct_circuit/ctside_connector_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_connector_to_b_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_connector_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_middle_to_b: {
        path: `/gfx/maps/train/ct_circuit/ctside_middle_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_middle_to_b_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_middle_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_left_to_heaven: {
        path: `/gfx/maps/train/ct_circuit/ctside_left_to_heaven.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_left_to_heaven_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_left_to_heaven_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_heaven_to_tspawn: {
        path: `/gfx/maps/train/ct_circuit/ctside_heaven_to_tspawn.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_ctside_heaven_to_tspawn_layer: {
        path: `/gfx/maps/train/ct_circuit/ctside_heaven_to_tspawn_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// TRAIN T SIDE ///////
    train_tside_ivy: {
        path: `/gfx/maps/train/terrorist_circuit/tside_ivy.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_ivy_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_ivy_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_ivy_to_long: {
        path: `/gfx/maps/train/terrorist_circuit/tside_ivy_to_long.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_ivy_to_long_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_ivy_to_long_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_ivy_to_a: {
        path: `/gfx/maps/train/terrorist_circuit/tside_ivy_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_ivy_to_a_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_ivy_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_main_to_a_left: {
        path: `/gfx/maps/train/terrorist_circuit/tside_main_to_a_left.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_main_to_a_left_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_main_to_a_left_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_electric_to_a: {
        path: `/gfx/maps/train/terrorist_circuit/tside_electric_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_electric_to_a_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_electric_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_a_to_connector: {
        path: `/gfx/maps/train/terrorist_circuit/tside_a_to_connector.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_a_to_connector_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_a_to_connector_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_ivy_to_ctspawn: {
        path: `/gfx/maps/train/terrorist_circuit/tside_ivy_to_ctspawn.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_ivy_to_ctspawn_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_ivy_to_ctspawn_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_upper_to_b: {
        path: `/gfx/maps/train/terrorist_circuit/tside_upper_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_upper_to_b_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_upper_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_b_to_connector: {
        path: `/gfx/maps/train/terrorist_circuit/tside_b_to_connector.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_b_to_connector_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_b_to_connector_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_b_to_backsite_left: {
        path: `/gfx/maps/train/terrorist_circuit/tside_b_to_backsite_left.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_b_to_backsite_left_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_b_to_backsite_left_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_b_to_backsite_right: {
        path: `/gfx/maps/train/terrorist_circuit/tside_b_to_backsite_right.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_b_to_backsite_right_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_b_to_backsite_right_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_heaven_to_b: {
        path: `/gfx/maps/train/terrorist_circuit/tside_heaven_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    train_tside_heaven_to_b_layer: {
        path: `/gfx/maps/train/terrorist_circuit/tside_heaven_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// ANUBIS CT SIDE ///////
    anubis_ctside_ctspawn_to_b: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_ctspawn_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_ctspawn_to_b_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_ctspawn_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_temple_to_b: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_temple_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_temple_to_b_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_temple_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_pillar_to_b_main: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_pillar_to_b_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_pillar_to_b_main_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_pillar_to_b_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_connector_to_water: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_connector_to_water.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_connector_to_water_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_connector_to_water_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_b_main: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_b_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_b_main_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_b_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_mid_1: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_mid_1.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_mid_1_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_mid_1_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_mid_2: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_mid_2.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_mid_2_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_mid_2_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_mid_to_window: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_mid_to_window.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_mid_to_window_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_mid_to_window_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_mid_to_b: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_mid_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_mid_to_b_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_mid_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_mid_to_a: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_mid_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_mid_to_a_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_mid_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_a_camera: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_a_camera.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_a_camera_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_a_camera_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_a_heaven: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_a_heaven.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_a_heaven_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_a_heaven_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_pilar_to_a_main: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_pilar_to_a_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_pilar_to_a_main_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_pilar_to_a_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_a_main_to_water: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_a_main_to_water.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_ctside_a_main_to_water_layer: {
        path: `/gfx/maps/anubis/ct_circuit/ctside_a_main_to_water_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// ANUBIS T SIDE ///////
    anubis_tside_tspawn_to_b_main: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_tspawn_to_b_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_tspawn_to_b_main_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_tspawn_to_b_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_b_main_to_b: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_b_main_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_b_main_to_b_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_b_main_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_b_pizza: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_b_pizza.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_b_pizza_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_b_pizza_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_b_to_ct: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_b_to_ct.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_b_to_ct_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_b_to_ct_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_mid: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_mid_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_mid_to_camera: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_mid_to_camera.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_mid_to_camera_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_mid_to_camera_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_water_to_connector: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_water_to_connector.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_water_to_connector_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_water_to_connector_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_connector_to_b: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_connector_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_connector_to_b_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_connector_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_a_main: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_a_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_a_main_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_a_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_a_site: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_a_site.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_a_site_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_a_site_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_a_pilar: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_a_pilar.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    anubis_tside_a_pilar_layer: {
        path: `/gfx/maps/anubis/terrorist_circuit/tside_a_pilar_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    /////// ANCIENT CT SIDE ///////
    ancient_ctside_ct_to_b: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_ct_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_ct_to_b_layer: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_ct_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_b_site: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_b_site.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_b_site_layer: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_b_site_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_b_ramp: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_b_ramp.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_b_ramp_layer: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_b_ramp_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_cave_to_b: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_cave_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_cave_to_b_layer: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_cave_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_redroom_to_mid: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_redroom_to_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_redroom_to_mid_layer: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_redroom_to_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_mid: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_mid.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_mid_layer: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_mid_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_a_site_to_main: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_a_site_to_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_a_site_to_main_layer: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_a_site_to_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_ct_to_a: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_ct_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_ct_to_a_layer: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_ct_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_temple_to_a: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_temple_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_temple_to_a_layer: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_temple_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_a_to_main: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_a_to_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_ctside_a_to_main_layer: {
        path: `/gfx/maps/ancient/ct_circuit/ctside_a_to_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },

    /////// ANCIENT T SIDE ///////
    ancient_tside_b_ramp_to_heaven: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_b_ramp_to_heaven.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_b_ramp_to_heaven_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_b_ramp_to_heaven_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_b_ramp_to_site: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_b_ramp_to_site.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_b_ramp_to_site_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_b_ramp_to_site_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_b_site: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_b_site.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_b_site_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_b_site_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_b_to_long: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_b_to_long.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_b_to_long_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_b_to_long_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_heaven_to_redroom: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_heaven_to_redroom.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_heaven_to_redroom_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_heaven_to_redroom_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_b_cave: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_b_cave.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_b_cave_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_b_cave_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_cave_to_b: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_cave_to_b.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_cave_to_b_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_cave_to_b_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_mid_to_heaven: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_mid_to_heaven.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_mid_to_heaven_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_mid_to_heaven_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_mid_to_redroom: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_mid_to_redroom.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_mid_to_redroom_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_mid_to_redroom_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_redroom: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_redroom.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_redroom_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_redroom_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_mid_to_donut: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_mid_to_donut.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_mid_to_donut_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_mid_to_donut_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_donut_to_a: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_donut_to_a.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_donut_to_a_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_donut_to_a_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_a_site_to_main: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_a_site_to_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_a_site_to_main_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_a_site_to_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_a_main: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_a_main.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_a_main_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_a_main_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_a_main_to_temple: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_a_main_to_temple.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_a_main_to_temple_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_a_main_to_temple_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_a_to_ctspawn: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_a_to_ctspawn.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    ancient_tside_a_to_ctspawn_layer: {
        path: `/gfx/maps/ancient/terrorist_circuit/tside_a_to_ctspawn_layer.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },

    // RECOIL TRAINER BACKGROUND //
    recoil_background: {
        path: `/gfx/recoil_trainer/backgrounds/recoil_background.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    spread: {
        path: `/gfx/recoil_trainer/spread.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },

    // MENU HUD //
    hud_terro: {
        path: `/gfx/hud/hud_terro.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },

    // WEAPONS //
    ak47: {
        path: `/gfx/recoil_trainer/weapons/ak47.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mac10: {
        path: `/gfx/recoil_trainer/weapons/mac10.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mp9: {
        path: `/gfx/recoil_trainer/weapons/mp9.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mp7: {
        path: `/gfx/recoil_trainer/weapons/mp7.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    galil: {
        path: `/gfx/recoil_trainer/weapons/galil.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    m4a1s: {
        path: `/gfx/recoil_trainer/weapons/m4a1s.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    m4a4: {
        path: `/gfx/recoil_trainer/weapons/m4a4.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    famas: {
        path: `/gfx/recoil_trainer/weapons/famas.png`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },

    // WEAPONS PICTOS //
    ak47_picto: {
        path: `/gfx/recoil_trainer/weapons_pictos/ak47_picto.jpg`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mac10_picto: {
        path: `/gfx/recoil_trainer/weapons_pictos/mac10_picto.jpg`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mp9_picto: {
        path: `/gfx/recoil_trainer/weapons_pictos/mp9_picto.jpg`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    mp7_picto: {
        path: `/gfx/recoil_trainer/weapons_pictos/mp7_picto.jpg`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    galil_picto: {
        path: `/gfx/recoil_trainer/weapons_pictos/galil_picto.jpg`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    m4a1s_picto: {
        path: `/gfx/recoil_trainer/weapons_pictos/m4a1s_picto.jpg`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    m4a4_picto: {
        path: `/gfx/recoil_trainer/weapons_pictos/m4a4_picto.jpg`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    },
    famas_picto: {
        path: `/gfx/recoil_trainer/weapons_pictos/famas_picto.jpg`,
        img: typeof window !== 'undefined' ? new Image() : ({} as HTMLImageElement),
    }
}