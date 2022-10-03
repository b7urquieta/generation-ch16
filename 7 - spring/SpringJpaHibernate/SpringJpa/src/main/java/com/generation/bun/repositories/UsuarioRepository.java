package com.generation.bun.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;

import com.generation.bun.models.UsuarioModel;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModel, Long> {
	
	public abstract ArrayList<UsuarioModel> findByPrioridad(Integer prioridad);

}
