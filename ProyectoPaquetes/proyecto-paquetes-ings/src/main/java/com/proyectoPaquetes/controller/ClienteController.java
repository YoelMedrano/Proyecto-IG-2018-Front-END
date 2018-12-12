package com.proyectoPaquetes.controller;


import com.proyectoPaquetes.repository.ClienteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import com.proyectoPaquetes.model.Cliente;
import com.proyectoPaquetes.Service.ClienteService;

import com.proyectoPaquetes.command.ClienteLoginCommand;
import com.proyectoPaquetes.command.ClienteSignUpCommand;
@Slf4j

@CrossOrigin
@RestController
@RequestMapping(value = "/cliente", produces = "application/json")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;


  /*  @GetMapping("/mostrar")
    public Page<Cliente> getQuestions(Pageable pageable) {
        return clienteRepository.findAll();
    }*/

    @RequestMapping(value = "/registrar", consumes = "application/json", method = RequestMethod.POST)
    public ResponseEntity register(@Valid @RequestBody ClienteSignUpCommand command) {
        return clienteService.register(command);
    }

    @RequestMapping(value = "/login", consumes = "application/json", method = RequestMethod.POST)
    public ResponseEntity login(@Valid @RequestBody ClienteLoginCommand command) {

        return clienteService.login(command);
    }


}
