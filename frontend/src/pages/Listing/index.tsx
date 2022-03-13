import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/request";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0); //Manter estado no componente

    useEffect(() => { //Executar algo na instanciação ou destruição do componente, observar estado
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumber(data.number);
            });
    }, []);

    return (
        //aceitar as duas funções
        //mb -> margin bottom
        //bootstrap -> col-sm-6 vai ocupar 6 colunas das 12 da grid, ou seja cada card irá ocupar metade da telao conteiner
        <>
            <p>{pageNumber}</p>
            <Pagination />

            <div className="containter">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>


        </>

    );
}

export default Listing;