import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {
   
    const params = useParams(); //pega por parâmetro da url

    return (
        <FormCard movieId={`${params.movieId}`}/>
    );
}

export default Form;