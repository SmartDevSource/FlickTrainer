interface ImageParams {
    onClose: () => void,
    image_path: string
}

export const ImageModal: React.FC<ImageParams> = ({onClose, image_path}) => {
    return (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-75">
        <div className="relative p-1 bg-white rounded-lg">
            <button
                className="absolute top-[-5px] right-[-5px] p-2 w-8 h-8 text-white
                    bg-red-500 rounded-full flex justify-center items-center"
                onClick={() => onClose()}
            >
                X
            </button>
            <img src={image_path}/>
        </div>
    </div>
    )
}