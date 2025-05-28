import { Separator } from "../shared/Separator";

const availableBrands = [
    "Nike",
    "Chrome Hearts",
    "Eric Emanuel",
    "Essentials",
    "Gallery Dept",
    "New Balance",
    "Rhude",
    "Adidas",
    "Denim Tears",
    "Godspeed",
    "Hellstar",
    "Anti Social Club",
    "Maison Mihara Yasuhiro",
]

interface Props{
    selectedBrands: string[];
    setSelectedBrands: (brands: string[]) => void;
}

//desesctructuramos las props

//resivimos la marca y si la marca no esta seleccionada se agrega
//si la marca esta en el array de selectedBrands se elimina

export const ContainerFilter = ({ 
    selectedBrands, setSelectedBrands }: Props) => {

    const handleBrandChange = (brand: string) => {
        //verificamos si el brand esta en el array de selectedBrands
        if(selectedBrands.includes(brand)){
            //si esta lo quitamos
            setSelectedBrands(selectedBrands.filter(b => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands,brand]);
        }
    };

    return <div className="p-5 border border-slate-200 rounded-lg h-fit col-span-2 lg:col-span-1">
        <h3 className="text-xl mb-4 font-semibold">
            Filters
        </h3>

        {/* para separar la parte de los filtros del titulo*/}
        <Separator/>

        <div className="gap-2 flex flex-col">
            {
                availableBrands.map(brand =>(
                    <label key={brand} className="inline-flex items-center" >
                        <input 
                        type='checkbox'
                        className="text-black border-black focus:ring-black accent-black"
                        checked = {selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        />
                        <span className="ml-2 text-gray-700 text-sm cursor-pointer">{brand}</span>

                    </label>

                ))
            }

        </div>

    </div>;

};