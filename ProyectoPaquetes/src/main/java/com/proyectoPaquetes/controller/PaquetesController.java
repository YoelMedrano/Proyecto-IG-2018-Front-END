package com.proyectoPaquetes.controller;



import com.proyectoPaquetes.repository.ClienteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import com.proyectoPaquetes.Service.PaqueteService;

import com.proyectoPaquetes.command.ClienteLoginCommand;
import com.proyectoPaquetes.command.PaqueteSignUpCommand;
import com.proyectoPaquetes.command.ClienteUpdateCommand;

import java.util.ArrayList;
@Slf4j

@CrossOrigin
@RestController
@RequestMapping(value = "/paquete", produces = "application/json")
public class PaquetesController {

    @Autowired
    private PaqueteService paqueteService;



    @RequestMapping(value = "/registrar/{id}", consumes = "application/json", method = RequestMethod.POST)
    public ResponseEntity register(@Valid @RequestBody PaqueteSignUpCommand command,@PathVariable("id") String id) {
        return paqueteService.register(command,id);
    }

 /*   @RequestMapping(value = "/login", consumes = "application/json", method = RequestMethod.POST)
    public ResponseEntity login(@Valid @RequestBody ClienteLoginCommand command) {

        return clienteService.login(command);
    }


    @RequestMapping(value = "/actualizar/{id}", consumes = "application/json", method = RequestMethod.PUT)
    public ResponseEntity update(@Valid @RequestBody ClienteUpdateCommand command, @PathVariable("id") String id) {
        return clienteService.update(command, id);
    }*/
/*
    @RequestMapping(value = "/delete/{id}", consumes = "application/json", method = RequestMethod.DELETE)
    public ResponseEntity delete(@Valid @RequestBody UserDeleteCommand command,@PathVariable("id") String id) {
        return userService.delete(command, id);
    }*/

}
