package com.devsuperior.dsmovie.services; //transação de dados



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) { //o retorno do método vai tem quer ser por dto -> Data Transfer Object
		Page<Movie> result = repository.findAll(pageable); //vai buscar dados da entidade movies
		//irá devolver por páginas
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x)); //para cada elemento de x irá vir o resultado de moviedto
		return page;		
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) { 
		Movie result = repository.findById(id).get(); 
		MovieDTO dto = new MovieDTO(result);
		return dto;		
	}
}
