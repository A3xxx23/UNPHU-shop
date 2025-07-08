interface Props{
    totalItems: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination = ({totalItems, page, setPage}: Props) => {

    //Pagina siguiente

    const handleNextPage = () => {
        setPage( page + 1);
    }

    const handlePrevPage = () => {
        setPage( prevPage => Math.max(prevPage - 1,1));
    }

    const itemsPerPage = 12;

    const totalPages = totalItems
    ? Math.ceil(totalItems / itemsPerPage)
    : 0;

    const isLastPage = page >= totalPages;

    //Numero por el que empieza la pagina
    const startItems = (page - 1) * itemsPerPage + 1;
    const endItems = Math.min(page * itemsPerPage, totalItems);

    return (
      <div className="justify-between items-center flex">
        <p className="text-sm font-medium text-gray-900">
          Muestra{" "}
          <span className="font-bold text-gray-900">
            {startItems} - {endItems}
          </span>{" "}
          de <span className="font-bold text-gray-900">{totalItems}</span>{" "}
          productos
        </p>

        <div className=" gap-3 flex">
          <button
            className="btn-paginated"
            onClick={handlePrevPage}
            disabled={page === 1} //Si estamos en la primera pagina no podemos hacer click
          >
            anterior
          </button>

          <button
            className="btn-paginated"
            onClick={handleNextPage}
            disabled={isLastPage} //Si estamos en la ultima pagina no podemos hacer click
          >
            próximo
          </button>
        </div>
      </div>
    );
  
  };