import { AudioObject, ImageObject } from "@/types"

let audioPool: HTMLAudioElement[] = []
const maxInstanceSounds = 12

export const playShotSound = (audios: {[key: string]: AudioObject}, weaponName: string) => {
    audioPool = audioPool.filter(audio => !audio.ended)
    let sound = audioPool.find(audio => audio.ended)
    if (!sound){
        if (audioPool.length < maxInstanceSounds){
            sound = new Audio(audios[weaponName].audio.src)
            audioPool.push(sound)
        } else {
            sound = audioPool[0]
            sound.pause()
            sound.currentTime = 0
        }
    }
    sound.play()
}

export const loadResources = async (
    images: { [key: string]: ImageObject }, 
    audios: { [key: string]: AudioObject }
): Promise<void> => {
    const loadImage = (image_object: ImageObject): Promise<ImageObject> => {
        return new Promise((resolve, reject) => {
            image_object.img.src = `${image_object.path}`
            image_object.img.onload = () => resolve(image_object)
            image_object.img.onerror = () => reject(`Failed to load image ${image_object.path}`)
        })
    }
    const loadAudio = (audio_object: AudioObject): Promise<AudioObject> => {
        return new Promise((resolve, reject) => {
            audio_object.audio.src = audio_object.path
            audio_object.audio.volume = audio_object.volume
            audio_object.audio.addEventListener('canplaythrough', () => {
                resolve(audio_object)
            })
            audio_object.audio.addEventListener('error', () => {
                reject(`Failed to load audio ${audio_object.path}`)
            })
        })
    }

    const imagePromises = Object.values(images).map(loadImage)
    const audioPromises = Object.values(audios).map(loadAudio)

    return Promise.all([...imagePromises, ...audioPromises])
    .then(() => {
        console.log('All resources loaded')
    })
    .catch(err => {
        console.error('Error while loading resources :', err)
        throw err
    })
}

export const getCrosshairStorage = () => {
    const crosshairStorage = localStorage.getItem('crosshair')

    if (crosshairStorage){
        return JSON.parse(crosshairStorage)
    } else {
        return {
            gap: 15,
            length: 30,
            thickness: 3,
            outline: 0,
            red: 0,
            green: 255,
            blue: 0,
            opacity: 1,
            show_dot: 0
        }
    }
}

export const getSensitivityStorage = () => {
    const sensitivityStorage = localStorage.getItem('sensitivity')

    if (sensitivityStorage){
        return parseFloat(sensitivityStorage)
    } else {
        return 1.2
    }
}

export const getCircuitSpotObjective = (difficulty: string) => {
    switch(difficulty){
        case 'easy': return 6
        case 'medium': return 5
        case 'hard': return 4
        case 'faceit_peek': return 3
        default: return 5
    }
}

////////////////// THOR //////////////////

// timer.delta_time : 0.004200000001117587
// fireTimer.elapsed : 4.605999999999977
// timer.delta_time : 0.004300000000745058
// fireTimer.elapsed : 0.06989999999850988
// timer.delta_time : 0.004200000001117587
// fireTimer.elapsed : 0.06659999999962747
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.06259999999962747
// timer.delta_time : 0.004200000001117587
// fireTimer.elapsed : 0.07090000000037253
// timer.delta_time : 0.004
// fireTimer.elapsed : 0.0625
// timer.delta_time : 0.004300000000745058
// fireTimer.elapsed : 0.06699999999999999
// timer.delta_time : 0.004200000001117587
// fireTimer.elapsed : 0.07899999999999999
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.07509999999962746
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.07509999999962746
// timer.delta_time : 0.004300000000745058
// fireTimer.elapsed : 0.07930000000074507
// timer.delta_time : 0.004
// fireTimer.elapsed : 0.07490000000037253
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.07519999999925493
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.07919999999925494
// timer.delta_time : 0.004099999999627471
// fireTimer.elapsed : 0.07920000000111758
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.07519999999925493
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.06659999999962747
// timer.delta_time : 0.004200000001117587
// fireTimer.elapsed : 0.07520000000111758
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.06669999999925494
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.08340000000037252
// timer.delta_time : 0.004099999999627471
// fireTimer.elapsed : 0.07919999999925494
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.071
// timer.delta_time : 0.004099999999627471
// fireTimer.elapsed : 0.07080000000074506
// timer.delta_time : 0.0041000000014901165
// fireTimer.elapsed : 0.07930000000074505
// timer.delta_time : 0.004099999999627471
// fireTimer.elapsed : 0.07509999999962746
// timer.delta_time : 0.002900000000372529
// fireTimer.elapsed : 0.07519999999925495
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.07090000000037253
// timer.delta_time : 0.004099999999627471
// fireTimer.elapsed : 0.07909999999962747
// timer.delta_time : 0.0041000000014901165
// fireTimer.elapsed : 0.07920000000111758
// timer.delta_time : 0.004199999999254942
// fireTimer.elapsed : 0.05429999999888241



////////////////// ME //////////////////

// timer.delta_time : 0.013
// fireTimer.elapsed : 4.508999999999979
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.08399999999999999
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.107
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.093
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.10699999999999998
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.094
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.093
// timer.delta_time : 0.015
// fireTimer.elapsed : 0.107
// timer.delta_time : 0.012
// fireTimer.elapsed : 0.105
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.108
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.12
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.107
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.106
// timer.delta_time : 0.015
// fireTimer.elapsed : 0.121
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.119
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.107
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.093
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.107
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.093
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.12
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.121
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.106
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.094
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.119
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.107
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.12
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.107
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.106
// timer.delta_time : 0.013
// fireTimer.elapsed : 0.121
// timer.delta_time : 0.014
// fireTimer.elapsed : 0.08