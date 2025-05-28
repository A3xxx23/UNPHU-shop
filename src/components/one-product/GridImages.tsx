import { useState } from "react";

interface Props {
    images: string[];
}

export const GridImages = ({images}: Props) => {

    const [activeImage, setActiveImage ] = useState(images[0]);

    const handleImageClick = (image: string) => {
        setActiveImage(image);
    }

    return(
        <div className="flex-1 flex flex-col gap-3 relative">
            <div className="bg-[#f2f2f2] h-[500px] p-4">
                <img 
                src={activeImage} 
                alt='Image Product'
                className="h-full w-full object-contain"
                />
            </div>

            {/* Image minis */}

            <div className="flex mt-4 gap-2">
                {images.map((image, index) => (
                    <button key={index} onClick={() => handleImageClick(image)}
                    className={`w-16 h-16 p-1 border ${activeImage === image ? 'border-black' : 'border-transparent'} rounded-lg 
                    hover:border-black focus:outline-none`}
                    >

                        <img src={image} alt={`Thumbail ${index + 1} className='h-full w-full object-cover rounded-lg`} />
                        
                    </button>

                ))}

            </div>

        </div>

    ) ;
};