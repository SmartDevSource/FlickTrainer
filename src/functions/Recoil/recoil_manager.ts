import { Vector2, Timer, SpraySettings } from "@/types"
import { weapons } from "./weapons"

const timer: Timer = {last_update: performance.now(), delta_time: 0}

const spraySettings: SpraySettings = {
    index: 1,
    bullets_amount: 0,
    current_weapon: null,
    is_spraying: false,
    spray_offset: {x: 0, y: 0},
    next_spread: {x: 0, y: 0},
    angle: 0,
    distance: 0
}

const initSprayParams = (weapon_name: string) => {
    const current_weapon = weapons[weapon_name as keyof typeof weapons]

    spraySettings.current_weapon = current_weapon
    spraySettings.bullets_amount = Object.keys(current_weapon.spreads).length
    spraySettings.is_spraying = true

    if (spraySettings.index < spraySettings.bullets_amount - 1){
        const current_spread = current_weapon.spreads[spraySettings.index]
        const next_spread = current_weapon.spreads[spraySettings.index + 1]

        const dx = next_spread.x - current_spread.x
        const dy = next_spread.y - current_spread.y

        spraySettings.angle = Math.atan2(dy, dx)
        spraySettings.distance = Math.sqrt(dx * dx + dy * dy)
        spraySettings.next_spread = next_spread
        console.log("spraySettings.angle :", spraySettings.angle)
        console.log("spraySettings.distance :", spraySettings.distance)
    }
}

export const updateRecoil = (screenOffset: Vector2, weapon_name: string, isFiring: boolean) => {
    const now = performance.now()
    timer.delta_time = (now - timer.last_update) / 1000
    timer.last_update = now

    if (isFiring){
        if (!spraySettings.is_spraying){
            initSprayParams(weapon_name)
        }

        if (spraySettings.index < spraySettings.bullets_amount - 1){
            // const next_spread = current_weapon.spreads[spraySettings.current_spread + 1 as keyof typeof current_weapon.spreads]

        }
    } else {
        if (spraySettings.is_spraying){
            spraySettings.is_spraying = false
        }
    }
}