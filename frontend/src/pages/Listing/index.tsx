import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/request";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0); //Manter estado no componente

    const [page, setPage] = useState<MoviePage>({ //armazenando as páginas do backend
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    }); //guarda as páginas da requisição

    useEffect(() => { //Executar algo na instanciação ou destruição do componente, observar estado
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=score`) //sort -> ordenar
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]); //quando mudar o pageNumber, vai refazer a requisição

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        //aceitar as duas funções
        //mb -> margin bottom
        //bootstrap -> col-sm-6 vai ocupar 6 colunas das 12 da grid, ou seja cada card irá ocupar metade da telao conteiner
        <>
            <Pagination page={page} onChange={handlePageChange}/>

            <div className="containter">
                <div className="row">
                    {page.content.map(movie =>  //para cada movie no meu array renderiza o div
                        (//obrigatório colocar o key
                            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
                                <MovieCard movie={movie} />
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing;