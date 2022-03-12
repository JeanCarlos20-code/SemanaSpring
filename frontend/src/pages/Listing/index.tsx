import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";

function Listing() {
    return (
        //aceitar as duas funções
        //mb -> margin bottom
        //bootstrap -> col-sm-6 vai ocupar 6 colunas das 12 da grid, ou seja cada card irá ocupar metade da telao conteiner
        <>
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