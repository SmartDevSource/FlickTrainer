import { Vector2, Timer, SpraySettings, Weapon } from "@/types"

export const screenSprayOffset: Vector2 = {x: 40, y: 40} // plus j'augmente X, moins le spread horizontal est important

const timer: Timer = {last_update: performance.now(), delta_time: 0}
const spreadFactor: number = .01
const sprayRecoveryDuration: number = 5
const fireTimer: {elapsed: number} = {elapsed: 0}
const recoveryTimer: {elapsed: number} = {elapsed: 0}
export const slowPercentage: {value: number} = {value: 1}

export const spraySettings: SpraySettings = {
    index: 1,
    bullets_amount: 0,
    current_weapon: null,
    is_spraying: false,
    spray_offset: {x: 0, y: 0},
    next_spread: {x: 0, y: 0},
    angle: 0,
    distance: 0,
    isRecovering: false,
}   

const initSprayParams = (weapon: Weapon) => {
    spraySettings.current_weapon = weapon
    spraySettings.bullets_amount = Object.keys(weapon.spreads).length
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
    weapon: Weapon,
    isFiring: boolean, 
    updateFiringState: (state: boolean) => void,
    setCurrentSpread: (spread: Vector2) => void) =>
{
    const now = performance.now()
    timer.delta_time = (now - timer.last_update) / 1000
    timer.last_update = now

    fireTimer.elapsed += timer.delta_time

    const step = timer.delta_time / spreadFactor

    if (isFiring){
        if (!spraySettings.is_spraying){
            initSprayParams(weapon)
            setCurrentSpread({x: spraySettings.spray_offset.x, y: spraySettings.spray_offset.y})
        } else {
            if (spraySettings.current_weapon && fireTimer.elapsed > spraySettings.current_weapon.fire_rate * slowPercentage.value){ // * (percentage slower)
                fireTimer.elapsed = 0
                if (spraySettings.index < spraySettings.bullets_amount){

                    const dx = spraySettings.next_spread.x - spraySettings.spray_offset.x
                    const dy = spraySettings.next_spread.y - spraySettings.spray_offset.y
    
                    spraySettings.spray_offset.x += dx * step
                    spraySettings.spray_offset.y += dy * step
    
                    const distance_to_next_spread = Math.sqrt(dx * dx + dy * dy)
    
                    if (distance_to_next_spread < .1){
                        spraySettings.index++
                        updateSprayData()
                        setCurrentSpread({x: spraySettings.spray_offset.x, y: spraySettings.spray_offset.y})
                    }
    
                    aimPunch.x += spraySettings.spray_offset.x
                    aimPunch.y += spraySettings.spray_offset.y
                } else {
                    spraySettings.is_spraying = false
                    spraySettings.isRecovering = true
                    updateFiringState(false)
                }
            }
        }
    } else {
        if (spraySettings.is_spraying){
            spraySettings.is_spraying = false
            spraySettings.isRecovering = true
        }

        if (spraySettings.index > 1){
            recoveryTimer.elapsed += timer.delta_time
            if (recoveryTimer.elapsed >= spreadFactor){
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