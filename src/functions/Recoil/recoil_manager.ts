import { Vector2, Timer, SpraySettings } from "@/types"
import { weapons } from "./weapons"

const timer: Timer = {last_update: performance.now(), delta_time: 0}
const shotCadenza: number = .01
const screenSprayOffset: Vector2 = {x: 30, y: 20} // plus j'augmente X, moins le spread horizontal est important
const sprayRecoveryDuration: number = 5
const recoveryTimer: {elapsed: number} = {elapsed: 0}

const spraySettings: SpraySettings = {
    index: 1,
    bullets_amount: 0,
    current_weapon: null,
    is_spraying: false,
    spray_offset: {x: 0, y: 0},
    next_spread: {x: 0, y: 0},
    angle: 0,
    distance: 0,
    isRecovering: false
}

const initSprayParams = (weapon_name: string) => {
    const current_weapon = weapons[weapon_name as keyof typeof weapons]

    spraySettings.current_weapon = current_weapon
    spraySettings.bullets_amount = Object.keys(current_weapon.spreads).length
    spraySettings.is_spraying = true
    spraySettings.spray_offset = {x: 0, y: 0}
    updateSprayData()
}

const updateSprayData = () => {
    if (spraySettings.current_weapon != null){
        if (spraySettings.index < spraySettings.bullets_amount){
            const current_spread = spraySettings.current_weapon.spreads[spraySettings.index]
            const next_spread = spraySettings.current_weapon.spreads[spraySettings.index + 1]

            spraySettings.spray_offset.x = current_spread.x
            spraySettings.spray_offset.y = current_spread.y

            const dx = next_spread.x - current_spread.x
            const dy = next_spread.y - current_spread.y

            spraySettings.angle = Math.atan2(dy, dx)
            spraySettings.distance = Math.sqrt(dx * dx + dy * dy)
            spraySettings.next_spread = next_spread
        }
    }
}

export const updateRecoil = (
    aimPunch: Vector2,
    weapon_name: string,
    isFiring: boolean, 
    updateFiringState: (state: boolean) => void) =>
{
    const now = performance.now()
    timer.delta_time = (now - timer.last_update) / 1000
    timer.last_update = now

    const step = timer.delta_time / shotCadenza

    if (isFiring){
        if (!spraySettings.is_spraying){
            initSprayParams(weapon_name)
        } else {
            if (spraySettings.index < spraySettings.bullets_amount){
                const dx = spraySettings.next_spread.x - spraySettings.spray_offset.x
                const dy = spraySettings.next_spread.y - spraySettings.spray_offset.y

                spraySettings.spray_offset.x += dx * step
                spraySettings.spray_offset.y += dy * step

                const distance_to_next_spread = Math.sqrt(dx * dx + dy * dy)

                if (distance_to_next_spread < .1){
                    spraySettings.index++
                    updateSprayData()
                }

                aimPunch.x += spraySettings.spray_offset.x / screenSprayOffset.x
                aimPunch.y += spraySettings.spray_offset.y / screenSprayOffset.y
            } else {
                spraySettings.is_spraying = false
                spraySettings.isRecovering = true
                updateFiringState(false)
            }
        }
    } else {
        if (spraySettings.is_spraying){
            spraySettings.is_spraying = false
            spraySettings.isRecovering = true
        }

        if (spraySettings.index > 1){
            recoveryTimer.elapsed += timer.delta_time
            if (recoveryTimer.elapsed >= shotCadenza){
                spraySettings.index--
                recoveryTimer.elapsed = 0
            }
        }

        if (spraySettings.isRecovering){
            const abs_x = Math.abs(aimPunch.x)
            const abs_y = Math.abs(aimPunch.y)

            if (abs_x >= 1)
                aimPunch.x += (-aimPunch.x) * sprayRecoveryDuration * timer.delta_time
            if (abs_y >= 1)
                aimPunch.y += (-aimPunch.y) * sprayRecoveryDuration * timer.delta_time

            if (abs_x < 1 && abs_y < 1){
                aimPunch.x = 0
                aimPunch.y = 0
                spraySettings.isRecovering = false
            }
        }
    }
}