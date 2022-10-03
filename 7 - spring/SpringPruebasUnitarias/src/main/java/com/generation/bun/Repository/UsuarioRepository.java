package com.generation.bun.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.bun.Models.UsuarioModels;

@Repository
public interface UsuarioRepository extends JpaRepository <UsuarioModels,Integer> {

}
