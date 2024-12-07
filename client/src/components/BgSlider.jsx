import { useState } from "react";
import bgw from '../assets/image_w_bg.png';
import bgwo from '../assets/image_wo_bg.png';

const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderPosition = (e) => {
        setSliderPosition(e.target.value);
    };

    return (
        <div className="flex flex-col items-center pb-10 md:py-20 mx-2">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl pb-12 mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
                Remove Background With High <br /> Quality and Accuracy
            </h1>
            <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
                <img
                    src={bgw}
                    style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
                    alt="Original background"
                  
                />
                <img
                    src={bgwo}
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    alt="Background removed"
                    className="absolute top-0 left-0 w-full h-full"
                />
                  <input
                type="range"
                min={0}
                max={100}
                value={sliderPosition}
                onChange={handleSliderPosition}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
            />
            </div>
          
        </div>
    );
};

export default BgSlider;
