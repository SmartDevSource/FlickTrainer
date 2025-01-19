interface ImageParams {
    image_path: string,
    selectedMap: string,
    onClose: () => void
}

export const ImageModal: React.FC<ImageParams> = ({image_path, selectedMap, onClose}) => {
    return (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-75">
            <div className="relative p-1 bg-white rounded-lg">
                <p className="text-center text-xl select-none">
                    {selectedMap}
                </p>
                <button
                    className="absolute top-[-5px] right-[-5px] p-2 w-8 h-8 text-white
                        bg-red-500 rounded-full flex justify-center items-center"
                    onClick={() => onClose()}
                >
                    X
                </button>
                <img className="max-w-[90vw] max-h-[80vh] object-contain" src={image_path}/>
            </div>
        </div>
    )
}