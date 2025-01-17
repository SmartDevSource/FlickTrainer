import { AudioObject, ImageObject } from "@/types"

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

    return Promise.all([imagePromises, audioPromises])
    .then(() => {
        console.log('All resources loaded')
    })
    .catch(err => {
        console.error('Error while loading resources :', err)
        throw err
    })
}