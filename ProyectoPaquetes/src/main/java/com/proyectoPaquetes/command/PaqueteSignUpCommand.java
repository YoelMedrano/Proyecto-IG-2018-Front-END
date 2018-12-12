package com.proyectoPaquetes.command;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Date;

@ToString
@Data
public class PaqueteSignUpCommand implements Serializable {



    @NotNull(message = "Por favor, introduzca su Direccion de Entrega.")
        @NotEmpty(message = "Por favor, introduzca su Direccion de Entrega.")
        @Size(max = ValidationRules.FIRST_LAST_NAME_MAX_SIZE, message = "La Direccion no puede contener más de 40 caracteres.")
        @Pattern(regexp = ValidationRules.FIRST_LAST_NAME_REGEX, message = "La Direccion posee caracteres no válidos.")
        private String direccionEntrega;

        @NotNull(message = "Por favor, introduzca su Direccion de Recoleccion.")
        @NotEmpty(message = "Por favor, introduzca su Direccion de Recoleccion.")
        @Size(max = ValidationRules.FIRST_LAST_NAME_MAX_SIZE, message = "La Direccion no puede contener más de 40 caracteres.")
        @Pattern(regexp = ValidationRules.FIRST_LAST_NAME_REGEX, message = "La Direccion posee caracteres no válidos.")
        private String direccionRecoleccion;


        @NotNull(message = "Por favor, introduzca un Peso.")
       // @NotEmpty(message = "Por favor, introduzca un Peso.")
        private String pesoKgs;

        @NotNull(message = "Por favor, repita la contraseña.")
        @NotEmpty(message = "Por favor, repita la contraseña.")
        @Size(max = ValidationRules.FIRST_LAST_NAME_MAX_SIZE, message = "La Descripcion no puede contener más de 40 caracteres.")
        @Pattern(regexp = ValidationRules.FIRST_LAST_NAME_REGEX, message = "La Descripcion posee caracteres no válidos.")
        private String descripcion;


    public String getDireccionEntrega() {
        return direccionEntrega;
    }

    public void setDireccionEntrega(String direccionEntrega) {
        this.direccionEntrega = direccionEntrega;
    }

    public String getDireccionRecoleccion() {
        return direccionRecoleccion;
    }

    public void setDireccionRecoleccion(String direccionRecoleccion) {
        this.direccionRecoleccion = direccionRecoleccion;
    }

    public String getPesoKgs() {
        return pesoKgs;
    }

    public void setPesoKgs(String pesoKgs) {
        this.pesoKgs = pesoKgs;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
