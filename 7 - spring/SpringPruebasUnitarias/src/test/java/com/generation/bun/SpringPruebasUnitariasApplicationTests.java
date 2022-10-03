package com.generation.bun;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.generation.bun.Models.UsuarioModels;
import com.generation.bun.Repository.UsuarioRepository;

@SpringBootTest
class SpringPruebasUnitariasApplicationTests {
	
	@Autowired
	private UsuarioRepository usuariorepository;
	
	@Test
	void contextLoads() {
		
		UsuarioModels usuariomodelo = new UsuarioModels ();
		
		usuariomodelo.setId(2);
		usuariomodelo.setNombre("Raul");
		usuariomodelo.setClave("12345");
		
		UsuarioModels r = usuariorepository.save(usuariomodelo);
		
		assertTrue(r.getClave().equalsIgnoreCase(usuariomodelo.getClave()));
		
		System.out.println(usuariomodelo.getNombre());
	}

}
