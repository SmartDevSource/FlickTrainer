'use client'

interface SelectTrainingParams {
    onSelect: (selection: string) => void
}

export const SelectTraining: React.FC<SelectTrainingParams> = ({onSelect}) => {
    return (
        <>
            <h1 className='text-center text-white text-4xl mb-3 mt-8'>
                Choose your training
            </h1>
            <div className="flex flex-col justify-center items-center animate-fadeInPage gap-6 mt-14">
                <button
                    className="relative group cursor-pointer"
                    onClick={()=> onSelect('map_peek')}
                >
                    <img
                        src={`/web/images/flicktrainer_anim.gif`}
                        className="max-h-[150px] object-contain rounded-md"
                        alt={`flicktrainer gif anim`}
                    />
                    <span className="
                        absolute inset-0 flex justify-center items-center bg-black/40
                        text-white text-xl font-bold opacity-100
                        hover:bg-black/30"
                    >
                        Flick Trainer
                    </span>
                </button>
                <button
                    className="relative group cursor-pointer"
                    onClick={()=> onSelect('recoil_training')}
                    // disabled
                >
                    <img
                        src={`/web/images/recoiltrainer_anim.gif`}
                        className="max-h-[150px] object-contain rounded-md " // grayscale
                        alt={`recoiltrainer gif anim`}
                    />
                    <span className="
                        absolute inset-0 flex justify-center items-center bg-black/40
                        text-white text-xl font-bold opacity-100
                        hover:bg-black/30"
                    >
                        Recoil Trainer
                    </span>
                    {/* <span className="
                        absolute inset-0 flex justify-center items-center
                        text-orange-400 text-xl font-bold mt-14"
                    >
                        Soon Available
                    </span> */}
                </button>
            </div>
        </>
    )
}