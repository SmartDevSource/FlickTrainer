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
    if (typeof window !== "undefined") {
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
    if (typeof window !== "undefined") {
        const sensitivityStorage = localStorage.getItem('sensitivity')
        if (sensitivityStorage){
            return parseFloat(sensitivityStorage)
        } else {
            return 1.2
        }
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