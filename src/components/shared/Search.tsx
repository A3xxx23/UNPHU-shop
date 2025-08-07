import { IconSearch } from '@tabler/icons-react';
import { useGlobalStore } from '../../store/global.store';
import { IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { formatPrice } from '../../helpers';
import { searchProducts } from '../../actions';
import { Product } from '../../interfaces';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const closeSheet = useGlobalStore(state => state.closeSheet);
    const [searchResults, setSearchResults] = useState<Product[]>([]);

    const navigate = useNavigate();

    // Manejar la búsqueda
    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        // Si el campo está vacío, no se ejecutará la búsqueda
        if (searchTerm.trim()) {
            // Realizar la búsqueda desde la API
            const products = await searchProducts(searchTerm);
            setSearchResults(products);
        }
    };

    return (
      <>
        <div className="py-5 px-7 flex gap-10 items-center border-b border-slate-200">
          <form
            className="flex items-center flex-1 gap-3"
            onSubmit={handleSearch}
          >
            <IconSearch size={22} />
            <input
              type="text"
              placeholder="Buscar..."
              className="outline-none w-full text-sm text-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <button onClick={closeSheet}>
            <IconX size={25} className="text-black" />
          </button>
        </div>

        {/* Resultado de lo que se busca */}
        <div className="p-5">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((product) => (
                <li className="py-2 group" key={product.id}>
                  <button
                    className="flex items-center gap-3"
                    onClick={() => {
                      navigate(`/products/${product.slug}`);
                      closeSheet();
                    }}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-20 w-20 object-contain p-3"
                    />

                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold group-hover:underline">
                        {product.name}
                      </p>

                      <p className="text-[13px] text-gray-600">
                        {product.variants[0].size} /{" "}
                        {product.variants[0].color_name}
                      </p>

                      <p className="text-sm font-medium text-gray-600">
                        {formatPrice(product.variants[0].price)}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600">
              No se encontraron resultados
            </p>
          )}
        </div>
      </>
    );
};
