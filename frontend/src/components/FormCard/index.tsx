import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/request';
import { validateEmail } from 'utils/validate';
import './styles.css';

type Props = {
    movieId : string;
}

function FormCard( { movieId } : Props ) {
   
    /*
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
    */

    const navigate = useNavigate(); //jogar na tela principal
    
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`) //paginar pelo numero id do filme
        .then(response => {
            setMovie(response.data) //vai receber a resposta do id
        })
    }, [movieId]); //só vai fazer a requisão quanto o valor mudar

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault(); //impede que o formulário seja enviado

        const email = (event.target as any).email.value; //valor email input
        const score = (event.target as any).score.value;

        if(!validateEmail(email)) { //validar o email
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        axios(config).then(response => {
            navigate("/");
        })
    }
    
    return ( //? -> se existir pega, se não existir pega nada
        <div className="dsmovie-form-container"> 
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} /> 
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="dsmovie-form" onSubmit={handleSubmit}>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default FormCard;