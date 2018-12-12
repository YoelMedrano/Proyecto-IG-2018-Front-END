package com.proyectoPaquetes.response;


import lombok.Data;
import lombok.ToString;


@Data
@ToString

public class PaqueteResponse {

    private String idPaquete;
    private String idCliente;

    private String direccionEntrega;
    private String direccionRecoleccion;
    private String pesoKgs;
    private String descripcion;


    public String getIdPaquete() {
        return idPaquete;
    }

    public void setIdPaquete(String idPaquete) {
        this.idPaquete = idPaquete;
    }

    public String getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(String idCliente) {
        this.idCliente = idCliente;
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
