package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	private ScorePK id = new ScorePK(); //instancia para saber que é chave
	
	private Double value;
	
	public Score() {
		
	}
	
	public void setMovie(Movie movie) { //Associa o filme com o score
		id.setMovie(movie); //chama o set movie da classe movie
	}
 
	public void setUser (User user) {
		id.setUser(user);
	}
	
	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
}
