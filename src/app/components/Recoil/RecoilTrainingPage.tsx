import CanvasRecoil from "./CanvasRecoil"

interface TrainingParams {
    onBackMenu: () => void
}

export const RecoilTrainingPage: React.FC<TrainingParams> = ({onBackMenu}) => {

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl mt-8">Recoil Trainer</h1>
            <CanvasRecoil/>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 
                font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500
                hover:text-white rounded duration-150"
                onClick={() => onBackMenu()}
            >
                Back to main menu
            </button>
        </div>
    )
}