package com.bun.h_abstracta;

abstract public class FigurasGeometricas {
    private String nombre;
    private int numero;
    public abstract float area();

    public FigurasGeometricas(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return nombre + "area ->" + area();
    }

    }
