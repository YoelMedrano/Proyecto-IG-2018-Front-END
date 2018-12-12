package com.proyectoPaquetes.model;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import com.proyectoPaquetes.command.ValidPassword;


import java.util.Date;

@Entity
@Table(name = "Paquete")
public class Paquete extends AuditModel {


    @Id
    private Long idPaquete;

    private Long idCliente;

    @NotBlank
    @Size(min = 3, max = 100)
    private String direccionEntrega;
    @NotBlank
    @Size(min = 3, max = 100)
    private String direccionRecoleccion;
  //  @NotBlank
    private double pesoKgs;
    @NotBlank
    @Size(min = 3, max = 100)
    private String descripcion;



    public Long getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Long idCliente) {
        this.idCliente = idCliente;
    }

    public Long getIdPaquete() {
        return idPaquete;
    }

    public void setIdPaquete(Long idPaquete) {
        this.idPaquete = idPaquete;
    }

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

    public double getPesoKgs() {
        return pesoKgs;
    }

    public void setPesoKgs(double peso) {
        this.pesoKgs = peso;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}